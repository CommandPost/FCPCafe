### Pipeline Neo (CLI & Library)

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
