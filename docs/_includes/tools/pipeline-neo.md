### Pipeline Neo (CLI & Library)

![](/static/pipeline-neo-social-card.png)

**Pipeline Neo** is modern Swift 6 framework for working with Final Cut Pro's FCPXML with full concurrency support and SwiftTimecode integration. Pipeline Neo is a spiritual successor to the original [Pipeline](https://github.com/reuelk/pipeline), modernised for Swift 6.0 and contemporary development practices. 

Pipeline Neo provides a comprehensive API for parsing, creating, and manipulating FCPXML files with advanced timecode operations, async/await patterns, and robust error handling. Built with Swift 6.0 and targeting macOS 12+, it offers type-safe operations, comprehensive test coverage, and seamless integration with SwiftTimecode for professional video editing workflows.

Pipeline Neo is currently in an experimental stage and does not yet cover the full range of FCPXML attributes and parameters. It focuses on core functionality while providing a foundation for future expansion and feature completeness.

This codebase is developed using AI agents.

> [!IMPORTANT]
> Pipeline Neo has yet to be extensively tested in production environments, real-world workflows, or application integration. This library serves as a modernised foundation for AI-assisted development and experimentation with FCPXML processing capabilities. Additionally, this project would not be actively maintained, so please consider this when planning long-term integrations.

#### Core Features

- Read, create, and modify FCPXML documents via a protocol-oriented API (resources, events, projects, sequences).
- Load single .fcpxml files or .fcpxmld bundles (FCPXMLFileLoader; sync and async).
- Parse and validate against bundled DTDs (1.5–1.14): structural/reference validation and DTD schema validation.
- Typed access to resources, events, clips, and projects (helpers and APIs).
- Timecode and timing with SwiftTimecode: CMTime, Timecode, FCPXML time strings; all FCP frame rates; frame-boundary conform.
- Typed element filtering (FCPXMLElementType; multicam vs compound inferred from structure).
- Cut detection on project spines: edit points (hard cut, transition, gap) and same-clip vs different-clips; sync and async.
- Version conversion: convert to a target version (e.g. 1.14 → 1.10), strip elements not in target DTD, validate; save as .fcpxml or .fcpxmld (bundle from 1.10+).
- Per-version DTD validation against a chosen version or the document’s declared version.
- Media extraction and copy: extract asset/locator URLs, copy to a directory with deduplication; sync and async.
- Timeline and export: build Timeline, export to FCPXML string or .fcpxmld bundle (optional media copy).
- Experimental CLI: `pipeline-neo` with `--check-version`, `--convert-version`, `--extract-media` (see CLI README).
- Sync and async APIs; dependency-injected, concurrency-safe design for Swift 6.

[!button text="View on GitHub" target="blank" variant="info"](https://github.com/TheAcharya/pipeline-neo)
