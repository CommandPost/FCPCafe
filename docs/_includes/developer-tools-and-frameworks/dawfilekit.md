### DAWFileKit

![](/static/timecodekit-banner.png)

A Swift library for reading and writing common import/export file formats between popular DAW and video editing applications with the ability to convert between formats.

|              Format               |     Read      |     Write     |
| :-------------------------------: | :-----------: | :-----------: |
|     Cubase: Track Archive XML     |     yes†      |     yes†      |
| Pro Tools: Session Info text file |      yes      |      n/a      |
|        Standard MIDI File         |    planned    |      yes      |
|           Logic Pro X‡            |    future?    |    future?    |
|    Final Cut Pro XML (FCPXML)     |      yes      |    future?    |
|        Adobe Premiere XML         |    future?    |    future?    |

*† Full read/write support for Cubase Track Archive XML files is implemented for tracks with absolute timebase, as well as tracks with musical timebase where the tempo track uses only 'Jump' tempo events and there are no 'Ramp' tempo events*

*‡ Research is needed for Logic Pro X to determine what file formats are common and the viability of their implementation*

[!button text="View on GitHub" target="blank" variant="info"](https://github.com/orchetect/TimecodeKit)
