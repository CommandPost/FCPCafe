#!/usr/bin/env python3
"""
add_front_matter.py

Recursively scans all Markdown (.md) files in the current directory (and subdirectories).
For each file that does not already contain a YAML front matter block, it:
  1. Extracts the first level-1 heading (`# Title`) as `title`.
  2. Finds the “**Written by Name on DDth Month YYYY**” line, parses out `author` and `date`.
  3. Prepends a YAML front matter block:
     ---
     title: <title>
     date: YYYY-MM-DD
     author: <author>
     layout: blog
     ---
  4. Writes the updated file in-place.

Usage:
    cd /path/to/markdown/root
    python3 add_front_matter.py

"""
import os
import re
from datetime import datetime

# Regex to match: **Written by Chris Hocking on 28th August 2007**
WRITTEN_RE = re.compile(
    r"\*\*Written by (?P<author>.+?) on (?P<day>\d+)(?:st|nd|rd|th) (?P<month>\w+) (?P<year>\d{4})\*\*"
)


def parse_written_line(line):
    """
    Parse author and date from a line like:
      **Written by Chris Hocking on 28th August 2007**
    Returns (author, date_str) where date_str is YYYY-MM-DD, or (None, None) if no match.
    """
    m = WRITTEN_RE.match(line)
    if not m:
        return None, None
    author = m.group('author').strip()
    day = int(m.group('day'))
    month_name = m.group('month')
    year = int(m.group('year'))
    # Convert month name to number (e.g. August -> 8)
    try:
        month = datetime.strptime(month_name, '%B').month
    except ValueError:
        month = datetime.strptime(month_name, '%b').month
    date_str = f"{year:04d}-{month:02d}-{day:02d}"
    return author, date_str


def process_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    # Skip files that already have a YAML front matter
    if content.startswith('---'):
        return False

    lines = content.splitlines()

    # Find the first level-1 heading for title
    title = None
    for line in lines:
        if line.startswith('# '):
            title = line.lstrip('# ').strip()
            break
    if not title:
        return False

    # Find the written-by line for author and date
    author = None
    date_str = None
    for line in lines:
        a, d = parse_written_line(line)
        if a and d:
            author, date_str = a, d
            break
    if not (author and date_str):
        return False

    # Construct YAML front matter
    front_matter = (
        '---\n'
        f'title: {title}\n'
        f'date: {date_str}\n'
        f'author: {author}\n'
        'layout: blog\n'
        '---\n'
    )

    # Write updated content
    with open(path, 'w', encoding='utf-8') as f:
        f.write(front_matter + content)
    print(f"Updated: {path}")
    return True


def main():
    root = os.getcwd()
    for dirpath, _, filenames in os.walk(root):
        for fname in filenames:
            if fname.lower().endswith('.md'):
                full_path = os.path.join(dirpath, fname)
                process_file(full_path)


if __name__ == '__main__':
    main()
