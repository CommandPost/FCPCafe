<!--
MarkersExtractor CLI
OpenTimelineIO
Pipeline
TimecodeKit
-->
# Tools & Frameworks

This section of the site is dedicated third party developer tools and frameworks.

---

### MarkersExtractor CLI

MarkersExtractor CLI is Marker metadata extraction and conversion tool for Final Cut Pro. It is both a CLI Tool and API Library.

Some of the core features include : 

- Accurately extract Markers from FCP's FCPXML/FCPXMLD
- Ability to batch extract and render stills or animated GIFs based on each marker's timecode
- Ability to batch burn-in labels of each marker's metadata onto the stills or animated GIFs

Spearheaded by [Vigneswaran Rajkumar](https://twitter.com/IAmVigneswaran)

[!button text="View on GitHub" target="blank" variant="info"](https://github.com/TheAcharya/MarkersExtractor)

---

### OpenTimelineIO

OpenTimelineIO is an interchange format and API for editorial cut information. OTIO contains information about the order and length of cuts and references to external media. It is not however, a container format for media.

For integration with applications, the core OTIO library is implemented in C++ and provides an in-memory data model, as well as library functions for interpreting, manipulating, and serializing that data model. Within the core is a dependency-less library for dealing strictly with time, `opentime`.

The project also supports an official python binding, which is intended to be an idiomatic and ergonomic binding for python developers. The python binding includes a plugin system which supports a number of different types of plugins, most notably adapters, which can be used to read and write legacy formats into the OTIO data model.

[!button text="View on GitHub" target="blank" variant="info"](https://github.com/AcademySoftwareFoundation/OpenTimelineIO)

---

### Pipeline

**Pipeline** is a Swift framework for working with FCPXML files easily.

However, it hasn't been updated since June 2019.

[!button text="View on GitHub" target="blank" variant="info"](https://github.com/reuelk/pipeline)

---

### TimecodeKit

The most robust, precise and complete Swift library for working with SMPTE timecode. Supports 22 industry timecode frame rates, including conversions to/from timecode strings and offering timecode-based calculations.

Timecode is a standard for representing video frames and used for video burn-in timecode (BITC), or display in a DAW (Digital Audio Workstation) or video playback/NLE applications.

[!button text="View on GitHub" target="blank" variant="info"](https://github.com/orchetect/TimecodeKit)

---

{{ include "contribute-learn-more.md" }}

---

{{ include "giscus.md" }}
