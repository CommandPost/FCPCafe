### OpenTimelineIO

![](https://raw.githubusercontent.com/AcademySoftwareFoundation/OpenTimelineIO/main/docs/_static/OpenTimelineIO%403xDark.png)

OpenTimelineIO is an interchange format and API for editorial cut information. OTIO contains information about the order and length of cuts and references to external media. It is not however, a container format for media.

For integration with applications, the core OTIO library is implemented in C++ and provides an in-memory data model, as well as library functions for interpreting, manipulating, and serializing that data model. Within the core is a dependency-less library for dealing strictly with time, `opentime`.

The project also supports an official python binding, which is intended to be an idiomatic and ergonomic binding for python developers. The python binding includes a plugin system which supports a number of different types of plugins, most notably adapters, which can be used to read and write legacy formats into the OTIO data model.

[!button text="View on GitHub" target="blank" variant="info"](https://github.com/AcademySoftwareFoundation/OpenTimelineIO)