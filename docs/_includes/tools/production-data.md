### Production Data

![](/static/production-data-cover-banner.png)

The lightweight spreadsheet creation application crafted for [Final Cut Pro](https://www.apple.com/final-cut-pro/). It serves as a native macOS frontend, allowing users to conveniently export structured Excel production reports from Final Cut Pro projects, powered by [OpenFCPXMLKit](https://github.com/TheAcharya/OpenFCPXMLKit), a free and open-source, experimental FCPXML parsing engine.

#### Core Features

- Functionality allowing export of Excel workbooks (`.xlsx`) from Final Cut Pro timelines.
- Precise extraction of timeline metadata, ensuring an accurate representation of clips, roles, and production information.
- Role-based inventory sheets built from audio and video roles on the timeline, with per-role enable and disable control across matching report sheets.
- Comprehensive timeline functionality, encompassing support for timelines such as Projects and Compound Clips.
- Optional report sheets for Markers, Keywords, Titles & Generators, Transitions, Effects, Speed Changes, Summary, and Media Summary.
- Configurable columns, timecode, disabled-clip exclusion, and optional Role Inventory screenshots.
- Allows the creation of multiple configurations tailored to diverse project requirements, with assignable keyboard shortcuts.
- Export on drop or confirm when you are ready, with automatic and manual export modes.
- Accepts drag and drop and Final Cut Pro timeline drags.
- Each export is saved to a uniquely named timestamped folder within your chosen export destination.
- Optional experimental PDF report export (`.pdf`) alongside the Excel workbook, using the same active Configuration settings.
- Exported Excel workbooks are compatible with Apple's Numbers and other spreadsheet applications.
- Written in Apple Swift language and SwiftUI framework.
- No hidden costs, no subscriptions, no in-app purchases.

[!button text="Visit Website" target="blank" variant="info"](https://productiondata.theacharya.co)
