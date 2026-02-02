# Immersive

This page is dedicated to stuff that Chris finds interesting about Immersive workflows related to Final Cut Pro workflows.

This is very much an evolving space - so if you find something interesting online, please share!

This is NOT an area I'm an expert in, so please reach out if there's any mistakes!

---

## Terminology

Here's some of the terms that might pop up whilst you're researching Apple Immersive Videos:

**AIV (Apple Immersive Video)**
A premium immersive-video format from Apple for Apple Vision Pro playback. In Apple’s own wording, it’s "the highest quality immersive experience for video playback" with immersive audio.  ￼

Viewer-facing shorthand: Apple Support also describes Apple Immersive Video titles as "180-degree 8K recordings, captured with Spatial Audio".  ￼

**AIME (Apple Immersive Media Embedded)**
The static metadata that enables correct playback—especially camera/lens calibration and other "presentation metadata". Depending on the workflow, you’ll encounter `AIME` either as a separate metadata file (i.e. from set) or embedded as a metadata track.

You can create an `AIME` file using the [VenueDescriptor](https://developer.apple.com/documentation/immersivemediasupport/venuedescriptor) API.

**AIVU (Apple Immersive Video Universal)**
A packaged container used for review/testing and delivery workflows. [Apple Immersive Video Utility](https://apps.apple.com/app/apple-immersive-video-utility/id6477489398) can package a folder of components into a single `AIVU` — typically including high-bit-rate `MV-HEVC` video, `AIME` metadata, audio, and an optional presentation track.

The only thing you need to make a ⁨`AIVU`⁩ is:

- Apple Immersive Video `MV-HEVC` video file without any necessary metadata.
- An `⁨AIME`⁩ file with the correct camera calibrations **OR** an `⁨USDZ`⁩ file to use for camera calibration (instead of an ⁨AIME)⁩ file **AND** a dynamic mask `JSON` data file to use for camera calibration.

This file is a binary file (so can't be opened in a text editor, etc).

**Apple Immersive Video Utility (often shortened to "AIVU Utility" or "AIVU app")**
A Mac + Vision Pro companion toolset for importing, organizing, packaging (`AIVU`), and reviewing Apple Immersive Video—Mac provides a 2D management UI, while Vision Pro is used for immersive review.  ￼

**MV-HEVC (Multi-View HEVC)**
The video coding format commonly referenced in Apple’s `AIVU` packaging flow — for example, when you import a folder of "high-bit-rate `MV-HEVC` video files" to package as `AIVU`.  ￼

**HLS (.m3u8) — HTTP Live Streaming**
The streaming delivery mechanism used in these workflows. [Apple Immersive Video Utility](https://apps.apple.com/app/apple-immersive-video-utility/id6477489398) can ingest an HTTPS HLS `.m3u8` playlist that points at an `AIVU` with complete video/audio/metadata.  ￼

**APMP (Apple Projected Media Profile)**
A projected-media profile that supports immersive formats like 180, 360, and Wide-FOV video. It differentiates formats via "projection kind" (rectilinear vs half-equirectangular vs equirectangular vs parametric).  ￼

**Parametric projection / ProjectionKind**
A projection mode associated with Apple Immersive Video that relies on lens calibration metadata (part of what `AIME` provides) to map pixels correctly at playback time.  ￼

**Presentation track**
An optional track/file included in an `AIVU` package (alongside `MV-HEVC`, `AIME`, and audio) to carry additional presentation data.  ￼

**ASAF (Apple Spatial Audio Format)**
Apple’s production format for immersive audio in these workflows.  ￼

**APAC (Apple Positional Audio Codec)**
The codec Apple calls out for encoding positional/immersive audio for delivery.  ￼

**ILPD + motion comfort data (AIV-specific metadata)**

Examples of `AIV`-specific metadata Apple highlights for creating/playing back compelling AIV experiences.  ￼

**Static foveation**
An Apple Immersive Video feature discussed as part of the format/tooling story—described as a unique capability for final encodes in Apple’s immersive media sessions.  ￼

**Edge blend curve**
Per-shot metadata that can feather/transition edges at playback time (described as dynamic rather than a baked mask).  ￼

---

## Immersive Video Workflow Presentations

In **October 2025** Apple hosted a two day workshop on Immersive video.

Iain Anderson wrote a summary on [ProVideo Coalition](https://www.provideocoalition.com/apple-publishes-comprehensive-immersive-video-workflow-presentations/).

You can watch **Day One** here:

[![](/static/apple-immersive-day01.jpg)](https://www.youtube.com/live/leGqoF8HJxU)

You can watch **Day Two** here:

[![](/static/apple-immersive-day02.jpg)](https://www.youtube.com/watch?v=4V_7-1bm4Rk)

---

## DaVinci Resolve Quick Start

This is just some notes to quickly get up and running in DaVinci Resolve.

For a much more detailed tutorial watch the [Beginner’s Guide](https://www.youtube.com/watch?v=0dm_zYf09rQ) video below.

In **Preferences**, in the **Video and Audio I/O** panel make sure you tick **Enable Ambisonics** and **Enable Apple Spatial Audio Format**.

![](/static/resolve-immersive-audio.png)

In **Project Settings** in the **Master Settings**, tick **Enable Apple Immersive workflow** and change the **Timeline resolution** to **8160x7200 Immersive**.

![](/static/resolve-immersive-master-settings.png)

In the **Color Management** panel set to:

- **Color science:** DaVinci YRGB
- **Use seperate color space and gamma:** Ticked
- **Timeline color space:** DaVinci WG / DaVinci Intermediate
- **Output color space:** P3-D65 / Rec.2100 ST2084

![](/static/resolve-immersive-color-settings.png)

If you're working with Blackmagic RAW, you can reduce the BRAW decode quality if needed for performance for editing (then put back to full resolution for export).

Import some **Blackmagic URSA Cine Immersive** clips into your timeline.

In the viewer dropdown, you can select **Immersive**.

![](/static/resolve-immersive-view.png)

Once you've done that you can change the view:

![](/static/resolve-immersive-view-mode.png)

In **Viewport** mode, you can drag around the viewer to "look around".

When editing, only use the **Cross Dissolve** and **Dip to Color Dissolve** (setting it to black) transitions to avoid making your viewer vomit. Click the **Render Bypass** checkbox, so that the transition isn't "baked in" when exporting - and will be included as metadata instead.

When exporting, at the end of the export presets is the Vision Pro options.

![](/static/resolve-immersive-export.png)

**Vision Pro Review** is useful for quick exports for testing.

**Vision Pro Bundle** exports a ProRes master.

In **Advanced Settings** there's an option for **visionOS Bypass**. Set it to **Always** will make it always use the metadata (as opposed to "baking in" transitions and effects).

![](/static/resolve-immersive-export-advanced.png)

When you export, DaVinci Resolve gives you:

- An `AIME` file.
- A `FCPXML` file with special metadata inside.

---

## Example FCPXML Metadata

When you export an Immersive file from DaVinci Resolve, it gives you a `FCPXML`. This `FCPXML` has some special/unique metadata that you wouldn't see coming out of Final Cut Pro.

For example, I have a simple timeline with three clips and some transitions between them:

![](/static/resolve-immersive-export-timeline.png)

`Info.fcpxml`:

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE fcpxml>
<fcpxml version="1.11">
    <resources>
        <format frameDuration="1/90s" width="8160" name="FFVideoFormatRateUndefined" id="r0" height="7200"/>
        <effect name="Fade To Color" id="r2" uid="FxPlug:F779C565-486D-4633-8035-0374B4DB8F5C"/>
        <effect name="Cross Dissolve" id="r4" uid="FxPlug:4731E73A-8DAC-4113-9A30-AE85B1761265"/>
        <asset format="r0" start="0/1s" hasVideo="1" name="A002_02091448_C046.braw" id="r1" duration="1289/90s">
            <media-rep kind="original-media" src="file:///Users/chrishocking/Desktop/BRAW%20Clips/-%20Immersive/Outside%20Stables/A002_02091448_C046.braw"/>
        </asset>
        <asset format="r0" start="0/1s" hasVideo="1" name="A002_02091554_C053.braw" id="r3" duration="779/45s">
            <media-rep kind="original-media" src="file:///Users/chrishocking/Desktop/BRAW%20Clips/-%20Immersive/Inside%20Stables/A002_02091554_C053.braw"/>
        </asset>
        <asset format="r0" start="0/1s" hasVideo="1" name="A002_02091625_C065.braw" id="r5" duration="1429/90s">
            <media-rep kind="original-media" src="file:///Users/chrishocking/Desktop/BRAW%20Clips/-%20Immersive/Cowboy%20at%20Sunset/A002_02091625_C065.braw"/>
        </asset>
    </resources>
    <library>
        <event name="Timeline 1 (Resolve)">
            <project name="Timeline 1 (Resolve)">
                <sequence format="r0" tcStart="0/1s" tcFormat="NDF" duration="3139/90s">
                    <spine>
                        <clip offset="0/1s" format="r0" start="0/1s" name="A002_02091448_C046.braw" enabled="1" tcFormat="NDF" duration="11/1s">
                            <adjust-transform position="0 0" anchor="0 0" scale="1 1"/>
                            <video offset="0/1s" ref="r1" start="0/1s" duration="1289/90s"/>
                        </clip>
                        <transition offset="19/2s" name="Dip To Color Dissolve" duration="3/1s">
                            <filter-video ref="r2" name="Transition">
                                <param value="0 0 1 1" name="color" key="3"/>
                            </filter-video>
                        </transition>
                        <clip offset="11/1s" format="r0" start="206/45s" name="A002_02091554_C053.braw" enabled="1" tcFormat="NDF" duration="464/45s">
                            <adjust-transform position="0 0" anchor="0 0" scale="1 1"/>
                            <video offset="0/1s" ref="r3" start="0/1s" duration="779/45s"/>
                        </clip>
                        <transition offset="1783/90s" name="Cross Dissolve" duration="3/1s">
                            <filter-video ref="r4" name="Transition">
                                <param value="-1" name="ease" key="50"/>
                            </filter-video>
                        </transition>
                        <clip offset="959/45s" format="r0" start="104/45s" name="A002_02091625_C065.braw" enabled="1" tcFormat="NDF" duration="407/30s">
                            <adjust-transform position="0 0" anchor="0 0" scale="1 1"/>
                            <video offset="0/1s" ref="r5" start="0/1s" duration="1429/90s"/>
                        </clip>
                    </spine>
                </sequence>
            </project>
        </event>
    </library>
</fcpxml>
```

`c1343890-bc6d-4ec3-b806-5263d67febd1.97ade50d-72d8-4fb4-909d-85a9d95bf547.ilpd`:

```
{
    "ambientCalTemp": 20,
    "cameraID": "c1343890-bc6d-4ec3-b806-5263d67febd1",
    "captureDevice": {
        "calStationName": "ProIM_Cal_System_0001",
        "views": [
            {
                "extrinsics": [
                    {
                        "model": "dualRectification",
                        "quat": [
                            -0.0024538450796112695,
                            -0.012449969828113671,
                            0.0006633760096594467,
                            0.9999192651548794
                        ],
                        "translation": [
                            0.0,
                            0.0,
                            0.0
                        ]
                    }
                ],
                "imageSize": [
                    8160,
                    7200
                ],
                "intrinsics": {
                    "calibrationLimitRadialAngle": 106.16143798828125,
                    "centerX": 4054.931364282999,
                    "centerY": 3667.917443659607,
                    "distortions": [
                        -0.1007642340781791,
                        1.1033018298727706,
                        2.273970282696699,
                        -0.006847250033154957,
                        0.0053315597381829736
                    ],
                    "fx": 8390.914638921937,
                    "fy": 8369.732466964053,
                    "model": "radial2ProjectionOffsetTangential2",
                    "skew": -9.625132293636453
                },
                "lensOcclusionData": {},
                "maskData": {
                    "FOVHeight": 90,
                    "FOVWidth": 60,
                    "controlPointInterpolation": "cubicHermite",
                    "defaultCalibration": "default",
                    "edgeTreatment": "linear",
                    "edgeWidth": 2.5,
                    "isForVisionOS": true,
                    "leftMapToRight": "standAlone",
                    "maskColor": [
                        1,
                        1,
                        1
                    ],
                    "maskViewParameters": {
                        "controlPoints": [
                            [
                                -0.9848077,
                                -1.17437144e-08,
                                -0.17364822
                            ],
                            [
                                -0.9800656,
                                -0.09652785,
                                -0.17364822
                            ],
                            [
                                -0.96588504,
                                -0.1921261,
                                -0.17364822
                            ],
                            [
                                -0.94240224,
                                -0.2858745,
                                -0.17364822
                            ],
                            [
                                -0.9098438,
                                -0.37686932,
                                -0.17364822
                            ],
                            [
                                -0.8685229,
                                -0.46423513,
                                -0.17364822
                            ],
                            [
                                -0.8188378,
                                -0.5471297,
                                -0.17364822
                            ],
                            [
                                -0.76126695,
                                -0.6247551,
                                -0.17364822
                            ],
                            [
                                -0.69636434,
                                -0.6963641,
                                -0.17364822
                            ],
                            [
                                -0.6247557,
                                -0.76126647,
                                -0.17364822
                            ],
                            [
                                -0.5471299,
                                -0.8188377,
                                -0.17364822
                            ],
                            [
                                -0.4642354,
                                -0.8685227,
                                -0.17364822
                            ],
                            [
                                -0.37687004,
                                -0.90984356,
                                -0.17364822
                            ],
                            [
                                -0.28587475,
                                -0.9424022,
                                -0.17364822
                            ],
                            [
                                -0.19212683,
                                -0.96588486,
                                -0.17364822
                            ],
                            [
                                -0.09652814,
                                -0.9800656,
                                -0.17364822
                            ],
                            [
                                0,
                                -0.9848077,
                                -0.17364822
                            ],
                            [
                                0.09652803,
                                -0.9800656,
                                -0.17364822
                            ],
                            [
                                0.19212644,
                                -0.965885,
                                -0.17364822
                            ],
                            [
                                0.2858746,
                                -0.94240224,
                                -0.17364822
                            ],
                            [
                                0.3768696,
                                -0.90984374,
                                -0.17364822
                            ],
                            [
                                0.46423513,
                                -0.8685229,
                                -0.17364822
                            ],
                            [
                                0.54712987,
                                -0.8188377,
                                -0.17364822
                            ],
                            [
                                0.6247554,
                                -0.7612667,
                                -0.17364822
                            ],
                            [
                                0.6963642,
                                -0.6963643,
                                -0.17364822
                            ],
                            [
                                0.76126665,
                                -0.62475544,
                                -0.17364822
                            ],
                            [
                                0.8188377,
                                -0.5471299,
                                -0.17364822
                            ],
                            [
                                0.8685228,
                                -0.4642352,
                                -0.17364822
                            ],
                            [
                                0.9098437,
                                -0.3768696,
                                -0.17364822
                            ],
                            [
                                0.9424022,
                                -0.28587466,
                                -0.17364822
                            ],
                            [
                                0.9658849,
                                -0.19212648,
                                -0.17364822
                            ],
                            [
                                0.9800656,
                                -0.09652815,
                                -0.17364822
                            ],
                            [
                                0.9848077,
                                -7.4350915e-08,
                                -0.17364822
                            ],
                            [
                                0.9800656,
                                0.096528,
                                -0.17364822
                            ],
                            [
                                0.965885,
                                0.19212635,
                                -0.17364822
                            ],
                            [
                                0.94240224,
                                0.28587452,
                                -0.17364822
                            ],
                            [
                                0.90984374,
                                0.37686944,
                                -0.17364822
                            ],
                            [
                                0.8685229,
                                0.46423504,
                                -0.17364822
                            ],
                            [
                                0.81883776,
                                0.5471298,
                                -0.17364822
                            ],
                            [
                                0.7612667,
                                0.6247554,
                                -0.17364822
                            ],
                            [
                                0.6963642,
                                0.6963642,
                                -0.17364822
                            ],
                            [
                                0.62475556,
                                0.7612665,
                                -0.17364822
                            ],
                            [
                                0.54713,
                                0.81883764,
                                -0.17364822
                            ],
                            [
                                0.46423525,
                                0.8685228,
                                -0.17364822
                            ],
                            [
                                0.37686965,
                                0.9098437,
                                -0.17364822
                            ],
                            [
                                0.28587463,
                                0.94240224,
                                -0.17364822
                            ],
                            [
                                0.19212668,
                                0.9658849,
                                -0.17364822
                            ],
                            [
                                0.096528225,
                                0.9800656,
                                -0.17364822
                            ],
                            [
                                1.4870183e-07,
                                0.9848077,
                                -0.17364822
                            ],
                            [
                                -0.09652793,
                                0.9800656,
                                -0.17364822
                            ],
                            [
                                -0.19212638,
                                0.965885,
                                -0.17364822
                            ],
                            [
                                -0.28587434,
                                0.9424023,
                                -0.17364822
                            ],
                            [
                                -0.37686938,
                                0.9098438,
                                -0.17364822
                            ],
                            [
                                -0.46423498,
                                0.86852294,
                                -0.17364822
                            ],
                            [
                                -0.54712975,
                                0.8188378,
                                -0.17364822
                            ],
                            [
                                -0.6247553,
                                0.76126677,
                                -0.17364822
                            ],
                            [
                                -0.69636405,
                                0.69636446,
                                -0.17364822
                            ],
                            [
                                -0.76126665,
                                0.62475544,
                                -0.17364822
                            ],
                            [
                                -0.8188376,
                                0.54713005,
                                -0.17364822
                            ],
                            [
                                -0.86852264,
                                0.4642355,
                                -0.17364822
                            ],
                            [
                                -0.9098437,
                                0.37686974,
                                -0.17364822
                            ],
                            [
                                -0.9424021,
                                0.28587493,
                                -0.17364822
                            ],
                            [
                                -0.9658849,
                                0.19212651,
                                -0.17364822
                            ],
                            [
                                -0.9800656,
                                0.09652829,
                                -0.17364822
                            ]
                        ],
                        "controlPointsOffsets": {},
                        "viewDescription": "left"
                    },
                    "name": "174_fov_circular_32_points"
                },
                "opticalData": {
                    "Fov": {
                        "horizontal": 111.94164276123047,
                        "vertical": 111.94164276123047
                    },
                    "aperture": 4.0
                },
                "processingParameters": {},
                "viewDescription": "left"
            },
            {
                "extrinsics": [
                    {
                        "model": "dualRectification",
                        "quat": [
                            0.011495262908055413,
                            -0.0036861100066260255,
                            0.0022968330062464537,
                            0.999924495190429
                        ],
                        "translation": [
                            0.0,
                            0.0,
                            0.0
                        ]
                    }
                ],
                "imageSize": [
                    8160,
                    7200
                ],
                "intrinsics": {
                    "calibrationLimitRadialAngle": 106.16143798828125,
                    "centerX": 4144.831151853823,
                    "centerY": 3529.946854189372,
                    "distortions": [
                        -0.161614675579366,
                        -0.0889378245145587,
                        1.7174711134240308,
                        0.008276787783480014,
                        -0.006811162569588471
                    ],
                    "fx": 6926.3403018357285,
                    "fy": 6882.719283486575,
                    "model": "radial2ProjectionOffsetTangential2",
                    "skew": -39.31045092365779
                },
                "lensOcclusionData": {},
                "maskData": {
                    "FOVHeight": 90,
                    "FOVWidth": 60,
                    "controlPointInterpolation": "cubicHermite",
                    "defaultCalibration": "default",
                    "edgeTreatment": "linear",
                    "edgeWidth": 2.5,
                    "isForVisionOS": true,
                    "leftMapToRight": "standAlone",
                    "maskColor": [
                        1,
                        1,
                        1
                    ],
                    "maskViewParameters": {
                        "controlPoints": [
                            [
                                -0.9848077,
                                -1.17437144e-08,
                                -0.17364822
                            ],
                            [
                                -0.9800656,
                                -0.09652785,
                                -0.17364822
                            ],
                            [
                                -0.96588504,
                                -0.1921261,
                                -0.17364822
                            ],
                            [
                                -0.94240224,
                                -0.2858745,
                                -0.17364822
                            ],
                            [
                                -0.9098438,
                                -0.37686932,
                                -0.17364822
                            ],
                            [
                                -0.8685229,
                                -0.46423513,
                                -0.17364822
                            ],
                            [
                                -0.8188378,
                                -0.5471297,
                                -0.17364822
                            ],
                            [
                                -0.76126695,
                                -0.6247551,
                                -0.17364822
                            ],
                            [
                                -0.69636434,
                                -0.6963641,
                                -0.17364822
                            ],
                            [
                                -0.6247557,
                                -0.76126647,
                                -0.17364822
                            ],
                            [
                                -0.5471299,
                                -0.8188377,
                                -0.17364822
                            ],
                            [
                                -0.4642354,
                                -0.8685227,
                                -0.17364822
                            ],
                            [
                                -0.37687004,
                                -0.90984356,
                                -0.17364822
                            ],
                            [
                                -0.28587475,
                                -0.9424022,
                                -0.17364822
                            ],
                            [
                                -0.19212683,
                                -0.96588486,
                                -0.17364822
                            ],
                            [
                                -0.09652814,
                                -0.9800656,
                                -0.17364822
                            ],
                            [
                                0,
                                -0.9848077,
                                -0.17364822
                            ],
                            [
                                0.09652803,
                                -0.9800656,
                                -0.17364822
                            ],
                            [
                                0.19212644,
                                -0.965885,
                                -0.17364822
                            ],
                            [
                                0.2858746,
                                -0.94240224,
                                -0.17364822
                            ],
                            [
                                0.3768696,
                                -0.90984374,
                                -0.17364822
                            ],
                            [
                                0.46423513,
                                -0.8685229,
                                -0.17364822
                            ],
                            [
                                0.54712987,
                                -0.8188377,
                                -0.17364822
                            ],
                            [
                                0.6247554,
                                -0.7612667,
                                -0.17364822
                            ],
                            [
                                0.6963642,
                                -0.6963643,
                                -0.17364822
                            ],
                            [
                                0.76126665,
                                -0.62475544,
                                -0.17364822
                            ],
                            [
                                0.8188377,
                                -0.5471299,
                                -0.17364822
                            ],
                            [
                                0.8685228,
                                -0.4642352,
                                -0.17364822
                            ],
                            [
                                0.9098437,
                                -0.3768696,
                                -0.17364822
                            ],
                            [
                                0.9424022,
                                -0.28587466,
                                -0.17364822
                            ],
                            [
                                0.9658849,
                                -0.19212648,
                                -0.17364822
                            ],
                            [
                                0.9800656,
                                -0.09652815,
                                -0.17364822
                            ],
                            [
                                0.9848077,
                                -7.4350915e-08,
                                -0.17364822
                            ],
                            [
                                0.9800656,
                                0.096528,
                                -0.17364822
                            ],
                            [
                                0.965885,
                                0.19212635,
                                -0.17364822
                            ],
                            [
                                0.94240224,
                                0.28587452,
                                -0.17364822
                            ],
                            [
                                0.90984374,
                                0.37686944,
                                -0.17364822
                            ],
                            [
                                0.8685229,
                                0.46423504,
                                -0.17364822
                            ],
                            [
                                0.81883776,
                                0.5471298,
                                -0.17364822
                            ],
                            [
                                0.7612667,
                                0.6247554,
                                -0.17364822
                            ],
                            [
                                0.6963642,
                                0.6963642,
                                -0.17364822
                            ],
                            [
                                0.62475556,
                                0.7612665,
                                -0.17364822
                            ],
                            [
                                0.54713,
                                0.81883764,
                                -0.17364822
                            ],
                            [
                                0.46423525,
                                0.8685228,
                                -0.17364822
                            ],
                            [
                                0.37686965,
                                0.9098437,
                                -0.17364822
                            ],
                            [
                                0.28587463,
                                0.94240224,
                                -0.17364822
                            ],
                            [
                                0.19212668,
                                0.9658849,
                                -0.17364822
                            ],
                            [
                                0.096528225,
                                0.9800656,
                                -0.17364822
                            ],
                            [
                                1.4870183e-07,
                                0.9848077,
                                -0.17364822
                            ],
                            [
                                -0.09652793,
                                0.9800656,
                                -0.17364822
                            ],
                            [
                                -0.19212638,
                                0.965885,
                                -0.17364822
                            ],
                            [
                                -0.28587434,
                                0.9424023,
                                -0.17364822
                            ],
                            [
                                -0.37686938,
                                0.9098438,
                                -0.17364822
                            ],
                            [
                                -0.46423498,
                                0.86852294,
                                -0.17364822
                            ],
                            [
                                -0.54712975,
                                0.8188378,
                                -0.17364822
                            ],
                            [
                                -0.6247553,
                                0.76126677,
                                -0.17364822
                            ],
                            [
                                -0.69636405,
                                0.69636446,
                                -0.17364822
                            ],
                            [
                                -0.76126665,
                                0.62475544,
                                -0.17364822
                            ],
                            [
                                -0.8188376,
                                0.54713005,
                                -0.17364822
                            ],
                            [
                                -0.86852264,
                                0.4642355,
                                -0.17364822
                            ],
                            [
                                -0.9098437,
                                0.37686974,
                                -0.17364822
                            ],
                            [
                                -0.9424021,
                                0.28587493,
                                -0.17364822
                            ],
                            [
                                -0.9658849,
                                0.19212651,
                                -0.17364822
                            ],
                            [
                                -0.9800656,
                                0.09652829,
                                -0.17364822
                            ]
                        ],
                        "controlPointsOffsets": {},
                        "viewDescription": "right"
                    },
                    "name": "174_fov_circular_32_points"
                },
                "opticalData": {
                    "Fov": {
                        "horizontal": 111.94164276123047,
                        "vertical": 111.94164276123047
                    },
                    "aperture": 4.0
                },
                "processingParameters": {},
                "viewDescription": "right"
            }
        ]
    },
    "formatVersion": [
        0,
        1,
        0
    ],
    "generator": "Apple Immersive Camera Calibration Service",
    "generatorVersion": [
        1,
        18,
        0
    ],
    "uuid": "97ade50d-72d8-4fb4-909d-85a9d95bf547"
}
```

`proim.fcpxml`:

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE fcpxml>
<fcpxml version="1.13">
    <resources>
        <format frameDuration="1/90s" width="8160" name="FFVideoFormatRateUndefined" id="r0" height="7200"/>
        <effect name="Fade To Color" id="r2" uid="FxPlug:F779C565-486D-4633-8035-0374B4DB8F5C"/>
        <effect name="Cross Dissolve" id="r4" uid="FxPlug:4731E73A-8DAC-4113-9A30-AE85B1761265"/>
        <asset format="r0" src="file:///Users/chrishocking/Desktop/BRAW%20Clips/-%20Immersive/Outside%20Stables/A002_02091448_C046.braw" start="0/1s" hasVideo="1" name="A002_02091448_C046.braw" id="r1" duration="1289/90s"/>
        <asset format="r0" src="file:///Users/chrishocking/Desktop/BRAW%20Clips/-%20Immersive/Inside%20Stables/A002_02091554_C053.braw" start="0/1s" hasVideo="1" name="A002_02091554_C053.braw" id="r3" duration="779/45s"/>
        <asset format="r0" src="file:///Users/chrishocking/Desktop/BRAW%20Clips/-%20Immersive/Cowboy%20at%20Sunset/A002_02091625_C065.braw" start="0/1s" hasVideo="1" name="A002_02091625_C065.braw" id="r5" duration="1429/90s"/>
    </resources>
    <library>
        <event name="Timeline 1 (Resolve)">
            <project name="Timeline 1 (Resolve)">
                <sequence format="r0" tcStart="0/1s" tcFormat="NDF" duration="3139/90s">
                    <spine>
                        <clip offset="0/1s" format="r0" start="0/1s" name="A002_02091448_C046.braw" enabled="1" tcFormat="NDF" duration="11/1s">
                            <adjust-transform position="0 0" anchor="0 0" scale="1 1">
                                <proim-camera cameraId="fce01524-11a7-4aec-8235-6a699db380f9" cameraSer="c1343890-bc6d-4ec3-b806-5263d67febd1"/>
                                <proim-optical calibrationType="dynamicCalData" calibrationUUID="97ade50d-72d8-4fb4-909d-85a9d95bf547" calibrationFileName="c1343890-bc6d-4ec3-b806-5263d67febd1.97ade50d-72d8-4fb4-909d-85a9d95bf547.ilpd" projectionKind="fish"/>
                                <proim-world worldRotationX="0" worldFlipX="0" worldRotationY="0" worldFlipY="0" worldRotationZ="0"/>
                                <proim-mask>
                                    <maskData controlPointInterpolation="cubicHermite" maskType="dynamicMaskData" maskStartFoV="0" maskEdgeWidth="0.9" fovWidth="60" fovHeight="90" maskName="174_fov_circular_32_points" leftMapToRight="standAlone" edgeTreatment="linear" maskBypass="0" maskStartOffset="0"/>
                                    <mask-view controlPoints=" -0.984625, -0.015847, 0.173959, -0.979706, -0.101871, 0.172623, -0.968211, -0.18755, 0.165509, -0.949834, -0.272721, 0.1531, -0.924101, -0.357073, 0.136147, -0.890481, -0.440103, 0.115558, -0.848481, -0.521115, 0.0923026, -0.797732, -0.599239, 0.0673535, -0.738048, -0.673462, 0.0416542, -0.669466, -0.742668, 0.0161068, -0.592278, -0.805689, -0.00843865, -0.507043, -0.861356, -0.0311914, -0.414589, -0.908554, -0.0514331, -0.316, -0.946281, -0.0685353, -0.212592, -0.973696, -0.081975, -0.105862, -0.990176, -0.0913546, 0.00256147, -0.995338, -0.0964155, 0.110985, -0.989072, -0.0970496, 0.21772, -0.971542, -0.0933005, 0.32115, -0.943173, -0.0853645, 0.419794, -0.904632, -0.0735771, 0.512357, -0.856784, -0.058403, 0.597773, -0.800646, -0.0404181, 0.675225, -0.737333, -0.0202922, 0.744156, -0.668005, 0.00122819, 0.804266, -0.593811, 0.0233282, 0.855494, -0.515841, 0.0451414, 0.897987, -0.435082, 0.0657534, 0.93206, -0.352379, 0.084223, 0.958141, -0.268411, 0.0996098, 0.976697, -0.183671, 0.111034, 0.988147, -0.0984744, 0.117762, 0.992772, -0.0129927, 0.119309, 0.990643, 0.0726806, 0.115519, 0.981597, 0.158445, 0.106596, 0.965272, 0.244111, 0.0930571, 0.941179, 0.329335, 0.07564, 0.908788, 0.41359, 0.0552108, 0.867615, 0.496161, 0.0326866, 0.817292, 0.576154, 0.00898931, 0.75762, 0.652524, -0.0149762, 0.688618, 0.724111, -0.0383355, 0.610554, 0.789679, -0.0602544, 0.523975, 0.847973, -0.0799477, 0.42971, 0.897774, -0.0967001, 0.328872, 0.93796, -0.109884, 0.222831, 0.967569, -0.118982, 0.113169, 0.985857, -0.123611, 0.00163088, 0.992338, -0.12354, -0.109953, 0.986823, -0.118703, -0.219742, 0.969427, -0.1092, -0.325966, 0.940566, -0.0953025, -0.427001, 0.90093, -0.0774294, -0.521429, 0.851446, -0.0561355, -0.608089, 0.79322, -0.0320872, -0.686106, 0.727476, -0.00603663, -0.754903, 0.655494, 0.0211988, -0.814192, 0.578546, 0.0487548, -0.863957, 0.497839, 0.0757315, -0.904418, 0.41447, 0.101202, -0.935989, 0.329383, 0.124221, -0.959216, 0.243341, 0.143841, -0.974705, 0.156905, 0.15916, -0.983029, 0.0704438, 0.169389" viewDescription="left"/>
                                    <mask-view controlPoints=" -0.987587, 0.0105871, 0.156714, -0.984746, -0.074616, 0.15719, -0.97529, -0.159807, 0.152551, -0.958956, -0.244824, 0.143057, -0.93532, -0.329374, 0.129185, -0.903871, -0.412997, 0.111585, -0.864091, -0.495036, 0.0910298, -0.815539, -0.574649, 0.0683689, -0.757925, -0.650823, 0.0444871, -0.691161, -0.722417, 0.0202798, -0.615407, -0.788202, -0.00337443, -0.531102, -0.84692, -0.0256343, -0.438972, -0.897337, -0.0457151, -0.34003, -0.938308, -0.0629122, -0.235554, -0.968836, -0.0766216, -0.127051, -0.988129, -0.0863611, -0.0162067, -0.995647, -0.0917895, 0.0951838, -0.991132, -0.0927203, 0.205289, -0.974634, -0.0891316, 0.312319, -0.946503, -0.0811699, 0.414599, -0.907374, -0.0691421, 0.51064, -0.858128, -0.0535101, 0.59919, -0.799847, -0.0348707, 0.679272, -0.733754, -0.0139414, 0.75021, -0.661146, 0.0084644, 0.811624, -0.583333, 0.031456, 0.863422, -0.501574, 0.0540918, 0.905764, -0.417021, 0.0754024, 0.939011, -0.33067, 0.0944268, 0.963658, -0.243326, 0.110252, 0.980251, -0.15559, 0.122065, 0.989292, -0.0678652, 0.129215, 0.991152, 0.0196073, 0.131276, 0.986008, 0.10668, 0.128094, 0.973814, 0.193219, 0.119805, 0.954325, 0.279022, 0.106817, 0.927159, 0.363755, 0.089766, 0.891879, 0.446909, 0.0694548, 0.848084, 0.527792, 0.0467848, 0.795486, 0.605547, 0.0227044, 0.733974, 0.679175, -0.0018309, 0.663659, 0.747587, -0.0258943, 0.584898, 0.809649, -0.0486093, 0.498312, 0.864234, -0.0691692, 0.404778, 0.910281, -0.0868573, 0.305414, 0.946842, -0.101063, 0.201548, 0.973135, -0.111297, 0.0946761, 0.988585, -0.117205, -0.0135943, 0.992851, -0.118582, -0.121603, 0.985851, -0.11537, -0.227703, 0.96776, -0.107667, -0.33032, 0.939003, -0.0957176, -0.428018, 0.900231, -0.0799025, -0.519538, 0.852286, -0.0607279, -0.603843, 0.796158, -0.0388072, -0.68014, 0.732932, -0.0148434, -0.747889, 0.663742, 0.0103882, -0.806804, 0.589718, 0.0360585, -0.856835, 0.511934, 0.061301, -0.89814, 0.431369, 0.0852333, -0.931047, 0.348867, 0.106978, -0.95599, 0.265111, 0.125693, -0.973451, 0.180609, 0.140617, -0.983873, 0.095701, 0.151111" viewDescription="right"/>
                                </proim-mask>
                            </adjust-transform>
                            <video offset="0/1s" ref="r1" start="0/1s" duration="1289/90s"/>
                        </clip>
                        <transition offset="19/2s" name="Dip To Color Dissolve" duration="3/1s">
                            <filter-video ref="r2" name="Transition">
                                <param value="0 0 1 1" name="color" key="3"/>
                            </filter-video>
                            <proim-effect type="Dip To Color" name="transition" bypass="1"/>
                        </transition>
                        <clip offset="11/1s" format="r0" start="206/45s" name="A002_02091554_C053.braw" enabled="1" tcFormat="NDF" duration="464/45s">
                            <adjust-transform position="0 0" anchor="0 0" scale="1 1">
                                <proim-camera cameraId="efadb0cf-2b0c-4fec-b51d-419c18c34359" cameraSer="c1343890-bc6d-4ec3-b806-5263d67febd1"/>
                                <proim-optical calibrationType="dynamicCalData" calibrationUUID="97ade50d-72d8-4fb4-909d-85a9d95bf547" calibrationFileName="c1343890-bc6d-4ec3-b806-5263d67febd1.97ade50d-72d8-4fb4-909d-85a9d95bf547.ilpd" projectionKind="fish"/>
                                <proim-world worldRotationX="0" worldFlipX="0" worldRotationY="0" worldFlipY="0" worldRotationZ="0"/>
                                <proim-mask>
                                    <maskData controlPointInterpolation="cubicHermite" maskType="dynamicMaskData" maskStartFoV="0" maskEdgeWidth="16.7143" fovWidth="60" fovHeight="90" maskName="174_fov_circular_32_points_2026-02-01T21:15:40" dateTime="2026-02-01T21:15:40" leftMapToRight="standAlone" edgeTreatment="linear" maskBypass="1" maskStartOffset="0"/>
                                    <mask-view controlPoints=" -0.984625, -0.015847, 0.173959, -0.979706, -0.101871, 0.172623, -0.968211, -0.18755, 0.165509, -0.949834, -0.272721, 0.1531, -0.924101, -0.357073, 0.136147, -0.890481, -0.440103, 0.115558, -0.848481, -0.521115, 0.0923026, -0.797732, -0.599239, 0.0673535, -0.738048, -0.673462, 0.0416542, -0.669466, -0.742668, 0.0161068, -0.592278, -0.805689, -0.00843865, -0.507043, -0.861356, -0.0311914, -0.414589, -0.908554, -0.0514331, -0.316, -0.946281, -0.0685353, -0.212592, -0.973696, -0.081975, -0.105862, -0.990176, -0.0913546, 0.00256147, -0.995338, -0.0964155, 0.110985, -0.989072, -0.0970496, 0.21772, -0.971542, -0.0933005, 0.32115, -0.943173, -0.0853645, 0.419794, -0.904632, -0.0735771, 0.512357, -0.856784, -0.058403, 0.597773, -0.800646, -0.0404181, 0.675225, -0.737333, -0.0202922, 0.744156, -0.668005, 0.00122819, 0.804266, -0.593811, 0.0233282, 0.855494, -0.515841, 0.0451414, 0.897987, -0.435082, 0.0657534, 0.93206, -0.352379, 0.084223, 0.960605, -0.260672, -0.0963759, 0.9781, -0.184574, -0.0961912, 0.98937, -0.108032, -0.0973458, 0.994517, -0.0308547, -0.0999172, 0.993701, 0.0425437, -0.103678, 0.98671, 0.120479, -0.109032, 0.973221, 0.198621, -0.115719, 0.941179, 0.329335, 0.07564, 0.908788, 0.41359, 0.0552108, 0.867615, 0.496161, 0.0326866, 0.817292, 0.576154, 0.00898931, 0.75762, 0.652524, -0.0149762, 0.688618, 0.724111, -0.0383355, 0.610554, 0.789679, -0.0602544, 0.523975, 0.847973, -0.0799477, 0.42971, 0.897774, -0.0967001, 0.328872, 0.93796, -0.109884, 0.222831, 0.967569, -0.118982, 0.113169, 0.985857, -0.123611, 0.00163088, 0.992338, -0.12354, -0.109953, 0.986823, -0.118703, -0.219742, 0.969427, -0.1092, -0.325966, 0.940566, -0.0953025, -0.427001, 0.90093, -0.0774294, -0.521429, 0.851446, -0.0561355, -0.608089, 0.79322, -0.0320872, -0.686106, 0.727476, -0.00603663, -0.754903, 0.655494, 0.0211988, -0.814192, 0.578546, 0.0487548, -0.863957, 0.497839, 0.0757315, -0.904418, 0.41447, 0.101202, -0.935989, 0.329383, 0.124221, -0.959216, 0.243341, 0.143841, -0.974705, 0.156905, 0.15916, -0.983029, 0.0704438, 0.169389" viewDescription="left"/>
                                    <mask-view controlPoints=" -0.987587, 0.0105871, 0.156714, -0.984746, -0.074616, 0.15719, -0.97529, -0.159807, 0.152551, -0.958956, -0.244824, 0.143057, -0.93532, -0.329374, 0.129185, -0.903871, -0.412997, 0.111585, -0.864091, -0.495036, 0.0910298, -0.815539, -0.574649, 0.0683689, -0.757925, -0.650823, 0.0444871, -0.691161, -0.722417, 0.0202798, -0.615407, -0.788202, -0.00337443, -0.531102, -0.84692, -0.0256343, -0.438972, -0.897337, -0.0457151, -0.34003, -0.938308, -0.0629122, -0.235554, -0.968836, -0.0766216, -0.127051, -0.988129, -0.0863611, -0.0162067, -0.995647, -0.0917895, 0.0951838, -0.991132, -0.0927203, 0.205289, -0.974634, -0.0891316, 0.312319, -0.946503, -0.0811699, 0.414599, -0.907374, -0.0691421, 0.51064, -0.858128, -0.0535101, 0.59919, -0.799847, -0.0348707, 0.679272, -0.733754, -0.0139414, 0.75021, -0.661146, 0.0084644, 0.811624, -0.583333, 0.031456, 0.863422, -0.501574, 0.0540918, 0.905764, -0.417021, 0.0754024, 0.939011, -0.33067, 0.0944268, 0.967086, -0.236603, -0.0936124, 0.983081, -0.157876, -0.0928875, 0.992478, -0.0790306, -0.0935002, 0.995426, 8.49511e-05, -0.0955367, 0.992281, 0.0749388, -0.0988062, 0.982622, 0.153976, -0.103661, 0.966313, 0.232737, -0.109872, 0.927159, 0.363755, 0.089766, 0.891879, 0.446909, 0.0694548, 0.848084, 0.527792, 0.0467848, 0.795486, 0.605547, 0.0227044, 0.733974, 0.679175, -0.0018309, 0.663659, 0.747587, -0.0258943, 0.584898, 0.809649, -0.0486093, 0.498312, 0.864234, -0.0691692, 0.404778, 0.910281, -0.0868573, 0.305414, 0.946842, -0.101063, 0.201548, 0.973135, -0.111297, 0.0946761, 0.988585, -0.117205, -0.0135943, 0.992851, -0.118582, -0.121603, 0.985851, -0.11537, -0.227703, 0.96776, -0.107667, -0.33032, 0.939003, -0.0957176, -0.428018, 0.900231, -0.0799025, -0.519538, 0.852286, -0.0607279, -0.603843, 0.796158, -0.0388072, -0.68014, 0.732932, -0.0148434, -0.747889, 0.663742, 0.0103882, -0.806804, 0.589718, 0.0360585, -0.856835, 0.511934, 0.061301, -0.89814, 0.431369, 0.0852333, -0.931047, 0.348867, 0.106978, -0.95599, 0.265111, 0.125693, -0.973451, 0.180609, 0.140617, -0.983873, 0.095701, 0.151111" viewDescription="right"/>
                                </proim-mask>
                            </adjust-transform>
                            <video offset="0/1s" ref="r3" start="0/1s" duration="779/45s"/>
                        </clip>
                        <transition offset="1783/90s" name="Cross Dissolve" duration="3/1s">
                            <filter-video ref="r4" name="Transition">
                                <param value="-1" name="ease" key="50"/>
                            </filter-video>
                            <proim-effect type="Cross Dissolve" name="transition" bypass="0"/>
                        </transition>
                        <clip offset="959/45s" format="r0" start="104/45s" name="A002_02091625_C065.braw" enabled="1" tcFormat="NDF" duration="407/30s">
                            <adjust-transform position="0 0" anchor="0 0" scale="1 1">
                                <proim-camera cameraId="f499da24-b8df-42bc-8155-f64d5ddb201e" cameraSer="c1343890-bc6d-4ec3-b806-5263d67febd1"/>
                                <proim-optical calibrationType="dynamicCalData" calibrationUUID="97ade50d-72d8-4fb4-909d-85a9d95bf547" calibrationFileName="c1343890-bc6d-4ec3-b806-5263d67febd1.97ade50d-72d8-4fb4-909d-85a9d95bf547.ilpd" projectionKind="fish"/>
                                <proim-world worldRotationX="0" worldFlipX="0" worldRotationY="0" worldFlipY="0" worldRotationZ="0"/>
                                <proim-mask>
                                    <maskData controlPointInterpolation="cubicHermite" maskType="dynamicMaskData" maskStartFoV="0" maskEdgeWidth="0.9" fovWidth="60" fovHeight="90" maskName="174_fov_circular_32_points" leftMapToRight="standAlone" edgeTreatment="linear" maskBypass="0" maskStartOffset="0"/>
                                    <mask-view controlPoints=" -0.984625, -0.015847, 0.173959, -0.979706, -0.101871, 0.172623, -0.968211, -0.18755, 0.165509, -0.949834, -0.272721, 0.1531, -0.924101, -0.357073, 0.136147, -0.890481, -0.440103, 0.115558, -0.848481, -0.521115, 0.0923026, -0.797732, -0.599239, 0.0673535, -0.738048, -0.673462, 0.0416542, -0.669466, -0.742668, 0.0161068, -0.592278, -0.805689, -0.00843865, -0.507043, -0.861356, -0.0311914, -0.414589, -0.908554, -0.0514331, -0.316, -0.946281, -0.0685353, -0.212592, -0.973696, -0.081975, -0.105862, -0.990176, -0.0913546, 0.00256147, -0.995338, -0.0964155, 0.110985, -0.989072, -0.0970496, 0.21772, -0.971542, -0.0933005, 0.32115, -0.943173, -0.0853645, 0.419794, -0.904632, -0.0735771, 0.512357, -0.856784, -0.058403, 0.597773, -0.800646, -0.0404181, 0.675225, -0.737333, -0.0202922, 0.744156, -0.668005, 0.00122819, 0.804266, -0.593811, 0.0233282, 0.855494, -0.515841, 0.0451414, 0.897987, -0.435082, 0.0657534, 0.93206, -0.352379, 0.084223, 0.958141, -0.268411, 0.0996098, 0.976697, -0.183671, 0.111034, 0.988147, -0.0984744, 0.117762, 0.992772, -0.0129927, 0.119309, 0.990643, 0.0726806, 0.115519, 0.981597, 0.158445, 0.106596, 0.965272, 0.244111, 0.0930571, 0.941179, 0.329335, 0.07564, 0.908788, 0.41359, 0.0552108, 0.867615, 0.496161, 0.0326866, 0.817292, 0.576154, 0.00898931, 0.75762, 0.652524, -0.0149762, 0.688618, 0.724111, -0.0383355, 0.610554, 0.789679, -0.0602544, 0.523975, 0.847973, -0.0799477, 0.42971, 0.897774, -0.0967001, 0.328872, 0.93796, -0.109884, 0.222831, 0.967569, -0.118982, 0.113169, 0.985857, -0.123611, 0.00163088, 0.992338, -0.12354, -0.109953, 0.986823, -0.118703, -0.219742, 0.969427, -0.1092, -0.325966, 0.940566, -0.0953025, -0.427001, 0.90093, -0.0774294, -0.521429, 0.851446, -0.0561355, -0.608089, 0.79322, -0.0320872, -0.686106, 0.727476, -0.00603663, -0.754903, 0.655494, 0.0211988, -0.814192, 0.578546, 0.0487548, -0.863957, 0.497839, 0.0757315, -0.904418, 0.41447, 0.101202, -0.935989, 0.329383, 0.124221, -0.959216, 0.243341, 0.143841, -0.974705, 0.156905, 0.15916, -0.983029, 0.0704438, 0.169389" viewDescription="left"/>
                                    <mask-view controlPoints=" -0.987587, 0.0105871, 0.156714, -0.984746, -0.074616, 0.15719, -0.97529, -0.159807, 0.152551, -0.958956, -0.244824, 0.143057, -0.93532, -0.329374, 0.129185, -0.903871, -0.412997, 0.111585, -0.864091, -0.495036, 0.0910298, -0.815539, -0.574649, 0.0683689, -0.757925, -0.650823, 0.0444871, -0.691161, -0.722417, 0.0202798, -0.615407, -0.788202, -0.00337443, -0.531102, -0.84692, -0.0256343, -0.438972, -0.897337, -0.0457151, -0.34003, -0.938308, -0.0629122, -0.235554, -0.968836, -0.0766216, -0.127051, -0.988129, -0.0863611, -0.0162067, -0.995647, -0.0917895, 0.0951838, -0.991132, -0.0927203, 0.205289, -0.974634, -0.0891316, 0.312319, -0.946503, -0.0811699, 0.414599, -0.907374, -0.0691421, 0.51064, -0.858128, -0.0535101, 0.59919, -0.799847, -0.0348707, 0.679272, -0.733754, -0.0139414, 0.75021, -0.661146, 0.0084644, 0.811624, -0.583333, 0.031456, 0.863422, -0.501574, 0.0540918, 0.905764, -0.417021, 0.0754024, 0.939011, -0.33067, 0.0944268, 0.963658, -0.243326, 0.110252, 0.980251, -0.15559, 0.122065, 0.989292, -0.0678652, 0.129215, 0.991152, 0.0196073, 0.131276, 0.986008, 0.10668, 0.128094, 0.973814, 0.193219, 0.119805, 0.954325, 0.279022, 0.106817, 0.927159, 0.363755, 0.089766, 0.891879, 0.446909, 0.0694548, 0.848084, 0.527792, 0.0467848, 0.795486, 0.605547, 0.0227044, 0.733974, 0.679175, -0.0018309, 0.663659, 0.747587, -0.0258943, 0.584898, 0.809649, -0.0486093, 0.498312, 0.864234, -0.0691692, 0.404778, 0.910281, -0.0868573, 0.305414, 0.946842, -0.101063, 0.201548, 0.973135, -0.111297, 0.0946761, 0.988585, -0.117205, -0.0135943, 0.992851, -0.118582, -0.121603, 0.985851, -0.11537, -0.227703, 0.96776, -0.107667, -0.33032, 0.939003, -0.0957176, -0.428018, 0.900231, -0.0799025, -0.519538, 0.852286, -0.0607279, -0.603843, 0.796158, -0.0388072, -0.68014, 0.732932, -0.0148434, -0.747889, 0.663742, 0.0103882, -0.806804, 0.589718, 0.0360585, -0.856835, 0.511934, 0.061301, -0.89814, 0.431369, 0.0852333, -0.931047, 0.348867, 0.106978, -0.95599, 0.265111, 0.125693, -0.973451, 0.180609, 0.140617, -0.983873, 0.095701, 0.151111" viewDescription="right"/>
                                </proim-mask>
                            </adjust-transform>
                            <video offset="0/1s" ref="r5" start="0/1s" duration="1429/90s"/>
                        </clip>
                    </spine>
                </sequence>
            </project>
        </event>
    </library>
</fcpxml>
```

---

## Beginner’s Guide

[Hugh Hou](https://www.youtube.com/@hughhou) has a great **Beginner’s Guide to URSA Cine Immersive for Apple Vision Pro + Pro Tips** video.

You can watch it on YouTube:

[![](/static/beginners-guide-immersive.jpg)](https://www.youtube.com/watch?v=0dm_zYf09rQ)

---

## WWDC 2025

There's a great video from WWDC 2025 called **Explore video experiences for visionOS**.

The description is:

> Learn about the different ways you can create and present immersive video experiences within your app. We'll explore the diverse media types available in visionOS 26, including profiles for 180°, 360°, and wide FOV video; options for creating and playing Apple Immersive Video; and expanded capabilities for 2D, 3D, and spatial video. Discover which profiles are best for your app and its content.

You can watch it on the [Apple Developer website](https://developer.apple.com/videos/play/wwdc2025/304/).

There's another one called **Learn about Apple Immersive Video technologies**.

The description is:

> Explore the capabilities of Apple Immersive Video and Apple Spatial Audio Format technologies to create truly immersive experiences. Meet the new ImmersiveMediaSupport framework, which offers functionality to read and write the necessary metadata for enabling Apple Immersive Video. Learn guidelines for encoding and publishing Apple Immersive Video content in standalone files for playback or streaming via HLS.
>
> To get the most out of this session, we recommend first watching “Explore video experiences for visionOS.”

You can watch it on the [Apple Developer website](https://developer.apple.com/videos/play/wwdc2025/403/).

---

## Immersive Media Support

Apple has a Developer Framework called **Immersive Media Support**, which enables you to create custom workflows for processing Apple Immersive Video (`AIV`).

You can use it to read and write `AIV`-specific metadata and enable previewing content in editorial workflows.

You can find more information on the [Apple Developer Site](https://developer.apple.com/documentation/ImmersiveMediaSupport).

There's also a [sample Xcode project](https://developer.apple.com/documentation/immersivemediasupport/authoring-apple-immersive-video) for Authoring Apple Immersive Video.

---

## Apple Immersive Video Utility

Apple Immersive Video Utility on macOS lets you import, organize, package, and review Apple Immersive Video media through a 2D interface. And when you combine it with Apple Immersive Video Utility on visionOS, you can review your immersive video on Apple Vision Pro.

![](/static/apple-immersive-video-utility.png)

You can find more information in the [User Guide](https://support.apple.com/en-au/guide/immersive-video-utility/welcome/web).

You can download it for free on the [Mac App Store](https://apps.apple.com/app/apple-immersive-video-utility/id6477489398).

---

## Apple Compressor

[Hugh Hou](https://www.youtube.com/@hughhou) has posted a great video on YouTube titled, **High-Quality Apple Immersive Video Encoding with Compressor (AIVU Workflow)**.

You can watch it on YouTube:

[![](/static/compressor-aivu.jpg)](https://www.youtube.com/watch?v=Fz9KYhaaPVE)

---

{{ include "contribute-learn-more" }}