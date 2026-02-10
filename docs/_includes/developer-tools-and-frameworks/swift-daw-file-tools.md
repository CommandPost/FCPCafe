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
