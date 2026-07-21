### OpenFCPXMLKit

![](/static/openfcpxmlkit-social-card.png)

**OpenFCPXMLKit** is a modern Swift 6 framework for working with Final Cut Pro's FCPXML, offering full concurrency support, SwiftTimecode integration, and [XLKit](https://github.com/TheAcharya/XLKit) integration for Excel/PDF reporting. It provides a type-safe API for parsing, creating, and manipulating FCPXML using async/await, and targets macOS 26+ and iOS 26+. The project is currently experimental, developed using AI agents, and covers most core FCPXML attributes with room for future expansion.

#### Core Features

- **Documents & validation** – Read, create, and modify `.fcpxml`/`.fcpxmld` files with support for FCPXML 1.5–1.14, semantic and DTD validation, version conversion, and cut detection
- **Timecode & timing** – SwiftTimecode integration with `CMTime`, arithmetic, frame alignment, and support for common frame rates
- **Typed models** – Resources, events, clips, projects, transitions, multicam, adjustments, filters, captions, keyframe animation, and more
- **Timeline** – Build and export timelines with ripple insert, auto lane, clip queries, markers, and metadata
- **Detached authoring** – A value-graph approach to authoring without live XML ownership
- **Extraction & media** – Presets for captions, markers, roles, titles, effects, plus media extraction and validation
- **Timeline projection** – A mid-layer bridging extraction and reporting, handling channels, lanes, retiming, and overlap analysis
- **Excel & PDF reporting** – Generate detailed reports (role inventory, markers, keywords, titles, effects, etc.) with filtering and export options
- **CLI** – A single portable binary for check, convert, validate, media-copy, create-project, and report commands
- **Architecture** – Protocol-oriented with dependency injection, layered from XML through parsing, modelling, extraction, projection, to reporting

[!button text="View on GitHub" target="blank" variant="info"](https://github.com/TheAcharya/OpenFCPXMLKit)
