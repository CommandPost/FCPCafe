### FxGrip

**FxGrip** is an open-source (MIT License) Objective-C framework for building FxPlug 4 plugins for Final Cut Pro and Apple Motion. It wraps Apple's FxPlug host APIs and adds features the SDK does not provide, from custom inspector controls to presets, FCPXML, and ML inference. Plugins subclass `FxGripTileableEffect` or `FxGripTileableGenerator` and adopt only the parts they need. It targets macOS 13.5+ and FxPlug 4.3.5.

#### Core Features

- **Host API wrappers** – Versioned wrappers for the FxPlug host APIs, plus FxGrip APIs for parameter tags, grouping, bounds, presets, and custom parameter creation
- **Custom controls** – Curves, curve sets, sections, banners, switches, progress and status bars, live image previews, web views, and an object tracker
- **On-screen controls** – A base class and parts for points, paths, polygons, and tracked objects
- **Shader effects** – Metal fragment shaders and Slang compute kernels described by JSON5 parameter metadata
- **Presets & FCPXML** – A typed FCPXML document model with schema validation and pasteboard support, and `.fxpreset` files compatible with FxFactory
- **ML inference** – A backend-neutral inference layer with image and video effect and generator templates and a persistent model cache
- **Analysis** – FxAnalyzer frame analysis with per-frame data storage
- **3D Space** – A SceneKit engine with physics and particles, and a Swift RealityKit engine (macOS 15+)
- **Licensing** – A store-neutral licensing extension with FxFactory and Mac App Store (StoreKit 2) providers
- **Workflow extensions** – A companion framework that links a plugin to a Final Cut Pro workflow extension

[!button text="View on GitHub" target="blank" variant="info"](https://github.com/belisoful/FxGrip)
