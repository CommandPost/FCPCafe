# Tools & Frameworks

This section of the site is dedicated third party developer tools and frameworks.

---

## A

### Airlift

![](/static/airlift-social-card.png)

Airlift provides and automated method to upload & merge *.csv or *.json data files with attachments to [Airtable](https://www.airtable.com) database.

Some of the core features include :

- Automated uploading of `.csv` or `.json` data to Airtable
- Ability to update and auto-create new entries for [single select field](https://support.airtable.com/docs/single-select-field) and [multiple select field](https://support.airtable.com/docs/multiple-select-field)
- No subscription of third party platform required
- Ability to upload attachments via build-in Dropbox client
- Ability to upload attachments to multiple attachment columns
- Uses long-lived refresh token for Dropbox client

If you are a FCP user or developer who is trying to send or upload data to Airtable, you can use our tool!

Spearheaded by [Vigneswaran Rajkumar](https://bsky.app/profile/vigneswaranrajkumar.com).

[!button text="View on GitHub" target="blank" variant="info"](https://github.com/TheAcharya/Airlift)

---

## C

### CSV2Notion Neo

![](/static/csv2notion-neo-social-card.png)

CSV2Notion Neo provides an advance method to upload & merge *.csv or *.json files with images to Notion database.

Some of the core features include :

- Merge CSV or JSON with the existing database, using the first column as a key to combine existing rows
- Choose column types manually instead of letting Notion detecting them automatically
- Link or create new entries in relation columns based on their values automatically
- Easily upload files into the designated "Files & Media" column
- Assign a icon for each row for quick identification
- Set a cover or embed an image for each row to enhance visual representation
- Upload image files for covers or icons

If you are a FCP user or developer who is trying to send or upload data to Notion, you can use our tool!

Spearheaded by [Vigneswaran Rajkumar](https://bsky.app/profile/vigneswaranrajkumar.com).

[!button text="View on GitHub" target="blank" variant="info"](https://github.com/TheAcharya/csv2notion-neo)

---

## F

### FxCore

**FxCore** is a node-based compositing engine inspired by Quartz Composer and designed for the demanding workloads of visual effects hosted by video applications.

FxCore powers the most advanced products you see in FxFactory, providing Metal GPU acceleration to our plugins running in Final Cut Pro, Premiere Pro, After Effects and Motion.

[!button text="Visit Website" target="blank" variant="info"](https://fxfactory.com/fxcore/)

---

### FxKit

An open-source (MIT License) Swift implementation of FxPlug plugins for Final Cut Pro and Apple Motion.

[!button text="View on GitHub" target="blank" variant="info"](https://github.com/jslinker/FxKit)

---

## M

### MarkersExtractor (CLI & Library)

![](/static/markersextractor-social-card.png)

MarkersExtractor is Marker metadata extraction and conversion tool for Final Cut Pro. It is both a CLI Tool and an API Library.

Some of the core features include :

- Accurately extract Markers from FCP's FCPXML/FCPXMLD
- Ability to batch extract and render stills or animated GIFs based on each marker's timecode
- Ability to batch burn-in labels of each marker's metadata onto the stills or animated GIFs

Spearheaded by [Vigneswaran Rajkumar](https://bsky.app/profile/vigneswaranrajkumar.com).

[!button text="View on GitHub" target="blank" variant="info"](https://github.com/TheAcharya/MarkersExtractor)

---

## O

### OpenFCPXMLKit

![](/static/openfcpxmlkit-social-card.png)

**OpenFCPXMLKit** is modern Swift 6 framework for working with Final Cut Pro's FCPXML with full concurrency support, SwiftTimecode integration, and [XLKit](https://github.com/TheAcharya/XLKit) integration.

OpenFCPXMLKit provides a comprehensive API for parsing, creating, and manipulating FCPXML files with advanced timecode operations, async/await patterns, and robust error handling. Built with Swift 6.3 and targeting **macOS 26+** and **iOS 26+**, it offers type-safe operations, comprehensive test coverage (877 tests), and seamless integration with SwiftTimecode and XLKit for professional video editing workflows. A cross-platform XML abstraction layer (Foundation on macOS, AEXML on iOS) keeps the library usable on both platforms.

OpenFCPXMLKit is currently in an experimental stage. It covers most core FCPXML attributes and parameters and provides a solid foundation for parsing, creation, and manipulation, with room for future expansion and additional feature coverage.

This codebase is developed using AI agents.

> [!IMPORTANT]
> OpenFCPXMLKit is highly experimental and has not yet been extensively tested in production environments, real-world workflows, or application integration. Report generation, in particular, remains at a very early and experimental stage. This library serves as a modernised foundation for AI-assisted development and experimentation with FCPXML processing capabilities.

> [!CAUTION]
> The codebase's API is still evolving and may change without notice between versions. Please consult the documentation for API usage. Use with caution in any workflow you rely on.

> [!NOTE]
> This project is shared as is and is not under active or regular development.

#### Core Features

- **FCPXML I/O**: Read, create, modify documents (.fcpxml/.fcpxmld bundles); load via `FCPXMLFileLoader` (sync/async); create FCPXML from scratch with events, projects, resources, and clips.
- **Parsing & Validation**: Parse and validate against bundled DTDs (1.5–1.14); structural/reference and DTD schema validation (full DTD on macOS; cross-platform structural validation on iOS via `FCPXMLStructuralValidator`); 877 tests across 58 FCPXML sample files (including empty timeline creation, project-creation export, AEXML parity, reporting, and validation suites).
- **Timecode Operations**: SwiftTimecode integration (`CMTime`, `Timecode`, FCPXML time strings); `FCPXMLTimecode` custom type (arithmetic, frame alignment, conversion); all FCP frame rates (23.976, 24, 25, 29.97, 30, 50, 59.94, 60 fps).
- **Typed Models**: Resources, events, clips, projects, adjustments (Crop, Transform, Blend, Stabilization, Volume, Loudness, NoiseReduction, HumReduction, Equalization, MatchEqualization, Transform360, ColorConform, Stereo3D, VoiceIsolation), filters (VideoFilter, AudioFilter, VideoFilterMask with FilterParameter), transitions, multicam (Media.Multicam, Angle, MulticamSource, MCClip), captions/titles (Caption, Title with TextStyle/TextStyleDefinition), smart collections (SmartCollection with match-clip, match-media, match-ratings, match-text, match-usage, match-representation, match-markers, match-analysis-type), collections (CollectionFolder, KeywordCollection).
- **Timeline Operations**: Build `Timeline`; create valid projects with custom or preset dimensions and frame rate (via `TimelineFormat`); export to FCPXML/.fcpxmld (including zero-clip/empty timelines); optional event/project UIDs and library location (`FCPXMLUID`); ripple insert, auto lane assignment, clip queries (lane/time range/asset ID), lane range computation; metadata (markers, chapter markers, keywords, ratings, custom metadata, timestamps); secondary storylines; `TimelineFormat` presets and computed properties.
- **Media Operations**: Extract asset/locator URLs; copy with deduplication; MIME type detection (`UTType`/`AVFoundation`); asset validation (existence, lane compatibility); silence detection; duration measurement; parallel file I/O; still image asset support.
- **Analysis & Conversion**: Cut detection (edit points, transitions, gaps); typed element filtering (`FCPXMLElementType`); version conversion (strip elements, validate, save as .fcpxml/.fcpxmld); per-version DTD validation; element stripping based on target version DTDs.
- **Animation**: KeyframeAnimation, Keyframe with interpolation, FadeIn/FadeOut; integrated with FilterParameter; auxValue support (FCPXML 1.11+).
- **Extensions**: CMTime Codable (FCPXML time string encoding/decoding); CollectionFolder and KeywordCollection for organization; Live Drawing (FCPXML 1.11+); HiddenClipMarker (FCPXML 1.13+); Format/Asset 1.13+ (heroEye, heroEyeOverride, mediaReps).
- **Excel Reporting**: Production's Best Friend–style multi-sheet `.xlsx` workbooks from an FCPXML/FCPXMLD via `FinalCutPro.FCPXML.buildReport(options:)` (XLKit-backed). Sheets for Role Inventory (Selected Roles + per-role), Markers, Keywords, Titles & Generators, Transitions, Video & Audio Effects, Speed Change Effects, and a Summary sheet with per-role duration totals and percentages; role exclusions, project-name filtering, and progress callbacks.
- **CLI**: `OpenFCPXMLKit-CLI` with `--check-version`, `--convert-version`, `--validate`, `--media-copy`, `--create-project` (new empty FCPXML project with width/height/rate/version), `--report` (Excel report; `--report-full` and per-section flags), logging options (see CLI README).
- **Architecture**: Protocol-oriented, dependency-injected; sync/async APIs; Swift 6 concurrency-safe design; comprehensive test suite with file-based and logic tests.

[!button text="View on GitHub" target="blank" variant="info"](https://github.com/TheAcharya/OpenFCPXMLKit)

---

### OpenTimelineIO

![](https://raw.githubusercontent.com/AcademySoftwareFoundation/OpenTimelineIO/main/docs/_static/OpenTimelineIO%403xDark.png)

OpenTimelineIO is an interchange format and API for editorial cut information. OTIO contains information about the order and length of cuts and references to external media. It is not however, a container format for media.

For integration with applications, the core OTIO library is implemented in C++ and provides an in-memory data model, as well as library functions for interpreting, manipulating, and serializing that data model. Within the core is a dependency-less library for dealing strictly with time, `opentime`.

The project also supports an official python binding, which is intended to be an idiomatic and ergonomic binding for python developers. The python binding includes a plugin system which supports a number of different types of plugins, most notably adapters, which can be used to read and write legacy formats into the OTIO data model.

[!button text="View on GitHub" target="blank" variant="info"](https://github.com/AcademySoftwareFoundation/OpenTimelineIO)

---

## S

### SubtitleKit

Package for creating, modifying, and managing subtitle files, such as SubRip (.srt).

Supported formats

| Format | File extension | Is supported |
| --- | --- | --- |
| SubRip | .srt | Yes |
| WebVTT | .vtt | Partially |
| SubViewer | .sub | No |
| YouTube Captions | .sbv | No |
| TTML | .ttml | No |
| DXFP | .dxfp | No |

[!button text="View on GitHub" target="blank" variant="info"](https://github.com/ggoraa/SubtitleKit)

---

### swift-daw-file-tools

A Swift library for reading and writing common import/export file formats between popular DAW and video editing applications with the ability to convert between formats.

#### Supported File Formats

|              Format               |        Read         |                Write                |
| :-------------------------------: | :-----------------: | :---------------------------------: |
|     Cubase: Track Archive XML     | marker tracks only† |         marker tracks only†         |
| Pro Tools: Session Info text file |    full support     |                 n/a                 |
|        Standard MIDI File         |       planned       | convert marker tracks to MIDI files |
|            Logic Pro X            |      planned‡       |              planned‡               |
|    Final Cut Pro XML (FCPXML)     |    full support     |            basic support            |
|        Adobe Premiere XML         |       planned       |               planned               |
|          SubRip SRT File          |    full support     |            full support             |

*† Full read/write support for Cubase Track Archive XML files is implemented for marker tracks only at this time, and only when in absolute timebase or musical timebase where the tempo track uses only 'Jump' tempo events and there are no 'Ramp' tempo events.* Full support for all track and event types may come in a future version of this library on an as-needed basis.

*‡ Research is needed for Logic Pro X to determine what file formats are common and the viability of their implementation*.

[!button text="View on GitHub" target="blank" variant="info"](https://github.com/orchetect/swift-daw-file-tools)

---

### swift-timecode

![](/static/swifttimecode-banner.png)

The most robust, precise and complete Swift library for working with SMPTE timecode. Supports 22 industry timecode frame rates, including conversions to/from timecode strings and offering timecode-based calculations.

Timecode is a standard for representing video frames and used for video burn-in timecode (BITC), or display in a DAW (Digital Audio Workstation) or video playback/NLE applications.

[!button text="View on GitHub" target="blank" variant="info"](https://github.com/orchetect/swift-timecode)

---

### SwiftSecuencia

SwiftSecuencia provides a type-safe, Swift-native API for creating and exporting media timelines. Build timelines programmatically and export to professional formats for Final Cut Pro, audio production, and more.

[!button text="View on GitHub" target="blank" variant="info"](https://github.com/intrusive-memory/SwiftSecuencia)

---

## V

### Vuo

Vuo is a visual programming tool using patches and 'noodles' to construct a composition that will process video. Those compositions will be able to be published directly for use within FCPX. You can build effects, generators and transitions.

[![](/static/yt-vuo.jpg)](https://www.youtube.com/watch?v=bXuDaWpSbiE)

[!button text="View on GitHub" target="blank" variant="info"](https://github.com/vuo/vuo)

[!button text="Visit Website" target="blank" variant="info"](https://vuo.org/why-choose-vuo)

---

## X

### XLKit

![](/static/xlkit-social-card.png)

**XLKit** is a modern Swift library for creating and manipulating Excel (.xlsx) files on macOS and iOS. XLKit provides a fluent, chainable API that makes Excel file generation effortless while supporting advanced features like image embedding, CSV/TSV import/export, cell formatting, and both synchronous and asynchronous operations. Built with Swift 6.0 and targeting macOS 12+ and iOS 15+, it offers type-safe operations, comprehensive error handling, and security features. iOS support is available and tested in CI/CD.

Created by [Vigneswaran Rajkumar](https://bsky.app/profile/vigneswaranrajkumar.com).

[!button text="View on GitHub" target="blank" variant="info"](https://github.com/TheAcharya/XLKit)

---

!!!
Want to contribute? [Learn more here!](/contribute/)
!!!

---

## Discuss this page

<script src="https://giscus.app/client.js"
        data-repo="CommandPost/FCPCafe"
        data-repo-id="MDEwOlJlcG9zaXRvcnk5NTAwMjEwMg=="
        data-category="Website Discussions"
        data-category-id="DIC_kwDOBamd9s4CW0qy"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="dark"
        data-lang="en"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
</script>
