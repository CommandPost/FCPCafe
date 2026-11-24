"""Prepare images in a built Retype site. Usage: optimize-images.py SITE CACHE"""

import hashlib
import os
import re
import shutil
import sys
from functools import lru_cache
from html import escape
from html.parser import HTMLParser
from pathlib import Path
from tempfile import TemporaryDirectory
from urllib.parse import unquote, urljoin, urlsplit

from PIL import Image, ImageOps


def supports_webp_color(image, data):
    profile = image.info.get("icc_profile", b"")
    if profile and profile[16:20] != b"RGB ":
        return False
    if image.format == "PNG":
        if not profile and "srgb" not in image.info and ("gamma" in image.info or "chromaticity" in image.info):
            return False
        # WebP can carry an ICC profile. Preserve originals with HDR transfer
        # functions or with wide-gamut color signalled only by a PNG cICP chunk.
        pos = 8
        while pos + 12 <= len(data):
            length = int.from_bytes(data[pos:pos + 4], "big")
            chunk = data[pos + 4:pos + 8]
            if chunk == b"IDAT":
                break
            if chunk == b"cICP":
                color = tuple(data[pos + 8:pos + 8 + length])
                return color == (1, 13, 0, 1) or (color == (12, 13, 0, 1) and bool(profile))
            pos += length + 12
    return True


@lru_cache(maxsize=None)
def previews(source, directory, cache):
    """Make web-sized copies of large still images, once per source across all pages."""
    size = source.stat().st_size
    if size < 256 * 1024 or source.suffix.lower() not in {".png", ".jpg", ".jpeg"}:
        return []

    with Image.open(source) as image:
        # Preserve animations and multi-picture JPEGs (including HDR gain maps).
        if image.format not in {"PNG", "JPEG"} or getattr(image, "is_animated", False) or "mp" in image.info:
            return []
        if image.mode not in {"RGB", "RGBA", "P", "L", "LA"}:
            return []

        data = source.read_bytes()
        if not supports_webp_color(image, data):
            return []
        digest = hashlib.sha256(data).hexdigest()[:24]
        oriented_width = image.height if image.getexif().get(274) in (5, 6, 7, 8) else image.width
        widths = sorted({min(oriented_width, width) for width in (800, 1920)})
        pixels = None
        candidates = []
        for width in widths:
            cached = cache / f"{digest}-{width}.webp"
            if not cached.exists():
                if pixels is None:
                    alpha = "A" in image.getbands() or "transparency" in image.info
                    pixels = ImageOps.exif_transpose(image).convert("RGBA" if alpha else "RGB")
                height = max(1, round(pixels.height * width / pixels.width))
                preview = pixels.resize((width, height), Image.Resampling.LANCZOS)
                # Publish the cache entry only after the encoder has finished.
                with TemporaryDirectory(dir=cache) as tmp:
                    encoded = Path(tmp) / cached.name
                    preview.save(encoded, "WEBP", quality=88, icc_profile=image.info.get("icc_profile", b""))
                    encoded.replace(cached)
            candidates.append((cached, width))

        if any(cached.stat().st_size >= size for cached, _ in candidates):
            return []
        for cached, _ in candidates:
            shutil.copyfile(cached, directory / cached.name)
        return [(directory / cached.name, width) for cached, width in candidates]


class PageImages(HTMLParser):
    def __init__(self, html, page, site, directory, cache):
        super().__init__(convert_charrefs=False)
        self.html = html
        self.page = page
        self.site = site
        self.directory = directory
        self.cache = cache
        self.page_url = "https://fcp.cafe/" + page.relative_to(site).as_posix()
        self.context = []
        self.seen_image = False
        self.seen_figure = False
        self.lines = [0] + [m.end() for m in re.finditer("\n", html)]
        self.edits = []

    def handle_starttag(self, tag, attrs):
        if tag in {"main", "figure", "picture", "a"}:
            self.context.append(tag)
        if tag != "img" or "main" not in self.context:
            return

        attrs = dict(attrs)
        raw = self.get_starttag_text()
        updated = raw
        figure = "figure" in self.context
        # Let the browser discover the lead image immediately, including on blog posts with an author avatar.
        lead = not self.seen_image or (figure and not self.seen_figure)
        if not lead and "loading" not in attrs and attrs.get("fetchpriority") != "high":
            updated = updated[:4] + ' loading="lazy"' + updated[4:]
        self.seen_image = True
        if figure:
            self.seen_figure = True

        if figure and "picture" not in self.context and "srcset" not in attrs and attrs.get("src"):
            updated = self.picture(updated, attrs)
        if updated != raw:
            line, column = self.getpos()
            start = self.lines[line - 1] + column
            self.edits.append((start, start + len(raw), updated))

    def handle_endtag(self, tag):
        if tag in self.context:
            while self.context.pop() != tag:
                pass

    def picture(self, tag, attrs):
        url = urlsplit(urljoin(self.page_url, attrs["src"]))
        if url.scheme not in {"http", "https"} or url.netloc != "fcp.cafe" or not url.path.startswith("/static/"):
            return tag
        source = (self.site / unquote(url.path[1:])).resolve()
        if not source.is_relative_to(self.site / "static") or not source.is_file():
            return tag
        try:
            variants = previews(source, self.directory, self.cache)
        except (OSError, ValueError, Image.DecompressionBombError) as exc:
            if getattr(exc, "errno", None) is not None:
                raise
            print(f"Using original image {source.name}: {exc}", file=sys.stderr)
            return tag
        if not variants:
            return tag
        srcset = ", ".join(f"{os.path.relpath(path, self.page.parent)} {width}w" for path, width in variants)
        # Match the article column as Retype adds the left and right sidebars.
        sizes = ("(min-width: 1200px) min(100vw - 42.75rem, 69.75rem), "
                 "(min-width: 960px) calc(100vw - 26.75rem), calc(100vw - 2rem)")
        picture = f'<picture><source type="image/webp" srcset="{srcset}" sizes="{sizes}">{tag}</picture>'
        if "a" in self.context:
            return picture
        label = escape(f'{attrs["alt"]} (full resolution)' if attrs.get("alt") else "Open full-resolution image")
        return f'<a href="{escape(attrs["src"], quote=True)}" aria-label="{label}">{picture}</a>'

    def write_changes(self):
        self.feed(self.html)
        self.close()
        if self.edits:
            # Preserve Retype templates, scripts and all markup outside the edited tags verbatim.
            pieces = []
            cursor = 0
            for start, end, replacement in self.edits:
                pieces.extend((self.html[cursor:start], replacement))
                cursor = end
            pieces.append(self.html[cursor:])
            self.page.write_bytes("".join(pieces).encode("utf-8"))


def main():
    site, cache = (Path(arg).resolve() for arg in sys.argv[1:])
    if not (site / "index.html").is_file():
        sys.exit(f"No Retype homepage in {site}")
    directory = site / "static" / "previews"
    directory.mkdir(exist_ok=True)
    cache.mkdir(parents=True, exist_ok=True)
    for page in site.rglob("*.html"):
        PageImages(page.read_bytes().decode("utf-8"), page, site, directory, cache).write_changes()
    print(f"Prepared {sum(1 for _ in directory.glob('*.webp'))} image previews.")


if __name__ == "__main__":
    main()
