# Release Notes

This page is designed to not just copy and paste Final Cut Pro's [official release notes for Mac](https://support.apple.com/en-us/HT201237) or [iPad](https://support.apple.com/en-us/HT213774), but also keep track of changes/bugs/additions that weren't actually included in the official release notes.

---

{{ include "contribute-learn-more" }}

---

### Final Cut Pro 1.1 (for iPad)

**Released July 18, 2023**

**Build:** 451.1.61

Final Cut Pro for iPad 1.1 includes the following bug fixes and enhancements:

- Turn snapping on or off using the keyboard shortcut N.
- Move the playhead backward or forward 10 frames using the keyboard shortcuts Shift-Left Arrow and Shift-Right Arrow.
- Show info for browser clips using the keyboard shortcut Control-I.
- Turn skimming on or off using the keyboard shortcut S.
- Turn audio skimming on or off using the keyboard shortcut Shift-S.
- Split and switch multicam clip angles using the keyboard shortcuts 1, 2, 3, and 4.
- Show or hide the jog wheel using the keyboard shortcut Control-Shift-W; expand or collapse it using Control-W.
- Switch the jog wheel between playhead mode and nudge mode using the keyboard shortcut Shift-W.
- Resolves an issue with custom fonts not appearing in the inspector.
- Improves reliability and performance when dragging a clip from the browser to the timeline.
- Addresses an issue with keyboard shortcuts not working as expected in the content browser.
- Improves visual feedback when adding effects and transitions to timeline clips in Position mode.
- Fixes an issue where importing media on a device with no remaining storage would cause Final Cut Pro for iPad to quit unexpectedly.
- Improves reliability when retiming a clip with Scene Removal Mask applied.
- Resolves an issue where importing clips with the same name would generate blank clip thumbnails.
- Improves reliability and performance when using soundtracks and dynamic titles.
- Addresses an issue where copying and pasting transform settings would unexpectedly paste clip speed.
- Improves visual feedback and reliability when rating and adding keywords to clips while filtering clips in the browser.
- Fixes an issue where resetting audio settings would unexpectedly reset clip speed.
- Resolves an issue with the appearance of onscreen controls for cropping and shape masks.
- Addresses an issue where clip height adjustments would not update audio-only clips in connected storylines.
- Fixes an issue where the Keywords window would open offscreen with the timeline minimized.
- Resolves an issue where disabled multicam audio angles would appear in the audio component list in the inspector.

#### Notes from FCP Cafe:

- Final Cut Pro 10.6.7 on Mac uses a newer Library format than Final Cut Pro 1.1 on iPad. This means that if you want to use Transfer Toolbox to go from Mac to iPad, you should keep using Final Cut Pro 10.6.6.

---

### Final Cut Pro 1.0.1 (for iPad)

**Released June 1, 2023**

- Fixes an issue where the validation of third-party Audio Unit Extensions prevented Final Cut Pro for iPad from opening.

---

### Final Cut Pro 1.0.0 (for iPad)

This is the first release of Final Cut Pro for iPad!

---

### Final Cut Pro 10.6.7

**Released July 18, 2023**

- Addresses an issue where audio effects would not be reset during playback.
- Fixes an issue where an Audio Units effect could have incorrect values when importing using FCPXML.
- Improves waveform redrawing on expanded audio components when adjusting volume with the Touch Bar.
- Resolves an issue where the Voice Isolation Amount slider would snap to 0% when trying to set a value less than 7%.
- Improves reliability when retiming a clip with the Scene Removal Mask applied.
- Fixes an issue where the Control Range setting in the Color Adjustments effect would be incorrectly set to SDR when importing using FCPXML.

---

### Final Cut Pro 10.6.6

**Released May 23, 2023**

#### Notes from FCP Cafe:

- This release removes FxPlug2 and FxPlug3 support. Only FxPlug4 is now supported, and older plugins will no longer work. You can learn more [here](https://coremelt.com/blogs/news/final-cut-pro-10-6-6-important-note-before-you-update).

#### New features:

- Import your project from Final Cut Pro for iPad to take advantage of blazing performance, advanced color correction tools, and more on your Mac.
- Use automatic color management to easily edit HDR and SDR clips in the same project, with intelligent tone mapping of video to match your color space.
- Choose from a new collection of professionally designed titles, effects, transitions, and generators to enhance the look of your videos.
- Improve your color correction workflow with the Color Adjustments effect, and apply new color presets to give your clips a particular look.
- Use Scene Removal Mask to remove and replace the background behind a subject, without using a green screen.

**Final Cut Pro also includes these additional fixes and enhancements:**

- Use the new ProRes RAW Settings window for easy access to ProRes RAW ISO, color temperature, and exposure offset.
- Install an Apple ProRes RAW plug-in from a camera manufacturer to view and adjust settings optimized for that camera’s sensor.
- Export to HEVC at up to 8K resolution with hardware acceleration on Mac computers with Apple silicon.
- Fixes an issue where multicam clips would sometimes turn black.
- Export to EXR now includes an alpha channel.
- Fixes an issue where adding video clips from the Photos browser would result in lower-resolution files being placed in the timeline.
- Fixes an issue where Final Cut Pro could not read Sony FX9 clips with embedded LUTs.
- Fixes an issue where Final Cut Pro would fail to open while an exFAT-formatted SD card with Canon clips was mounted.
- Fixes an issue where the progress bar would not update when opening or updating a large library.

---

### Final Cut Pro 10.6.5

**Released 24 October 2022**

- Supports faster exporting of H.264 or HEVC on Macs with Apple silicon.
- Increases stability when disconnecting a Sidecar display on Intel Mac computers.
- Improves performance when editing on a Mac with an ambient light sensor.
- Fixes an issue where adding images from the Photos browser to a new project may cause additional media to be appended before the last clip.

---

### Final Cut Pro 10.6.4

**9 August 2022**

- Fixes an issue where video frames may be out of order during playback or export.

---

### Final Cut Pro 10.6.3

**Released 19 May 2022**

- Improves reliability when using drag and drop to replace a transition.
- Improves reliability when dragging a transition onto a connected clip.
- Fixes an issue where custom sound effects don't always appear in the Sound Effects browser.

---

### Final Cut Pro 10.6.2

**Released 12 April 2022**

- Quickly locate media that appears more than once in a project using highlighted clip ranges or the Timeline Index.
- Improve the clarity of speech by adjusting the level of background noise using machine learning (Requires macOS Monterey 12.3 or later).
- Optimised playback and graphics performance for M1 Max and M1 Ultra on the new Mac Studio.
- Import Magic Movie and Storyboard projects created with iMovie for iOS version 3.0 into the timeline.
- Adds Korean language support.

**Final Cut Pro 10.6.2 also includes these additional fixes and enhancements:**

- Attach titles and graphics to existing tracker data in the Tracker Options on-screen-control.
- Choose either pin to tracker or offset from tracker in the Tracker Options on-screen-control.
- Tracking Editor automatically displays in the timeline when performing an object track.
- Items attached to a tracked object can be scaled in X and Y sizes uniformly.
- Improves reliability when using the Object Tracker with clips that don't match the project's frame rate.
- Improves reliability when using the Object Tracker in connected storylines.
- Improves reliability when using Send to Compressor with a compound clip that contains Object Tracker data.
- Improves functionality when selecting photos and videos with the Photos browser.
- Improves functionality when dragging photos and videos from the Photos app directly into Final Cut Pro.
- Improves performance when drawing waveforms.
- Improves reliability when playing audio from a clip that is reversed in the timeline.
- Fixes an issue where video scopes would sometimes appear monochrome.
- Improves reliability when removing effects from retimed clips.
- Fixes an issue where opening a compound or multicam clip in a connected storyline would sometimes display an empty timeline.
- Fixes an issue where opening a project after modifying its starting timecode would sometimes display an empty timeline.
- Improves reliability when using the keyboard to navigate to captions attached to a secondary storyline.
- Includes an alpha channel when exporting a PNG file from the timeline.

---

### Final Cut Pro 10.6.1

**Released 15 November 2021**

- Fixes an issue that could prevent successful import of FCPXML 1.9 and 1.10 files.
- Improves performance when opening large libraries.
- Fixes an issue where the Command-Z keyboard shortcut would not perform an Undo if Language was set to Spanish in System Preferences.
- Fixes an issue in the Export File share destination where the Video Codec setting was unavailable after choosing Computer as the format.
- Improves reliability during playback of AC3 audio.
- Improves stability when removing audio effects in the inspector.
- Improves stability when opening projects from the browser.
- Improves stability when previewing effects in the Effects browser.
- Improves stability when dragging clip ranges to Keyword Collections.

---

### Final Cut Pro 10.6

**Released Monday, 18 October 2021**

#### Object Tracker

- Drag effects, titles or generators into the viewer to automatically detect, track and match the movement of faces or objects using machine learning.
- Manually add a tracker from the inspector, adjust its mask shape and choose between different tracking analysis types.
- Use the Tracking Editor in the timeline to quickly delete or re-analyse segments of an existing track.
- Attach additional titles or generators to existing tracks using the tracker source drop-down in the viewer.
- Object tracking uses the Apple Neural Engine to accelerate video analysis on Mac computers with Apple silicon.

#### Cinematic Mode

- Edit videos recorded with iPhone 13 in Cinematic mode (requires macOS Monterey).
- Use Cinematic controls in the inspector to modify the intensity of the depth effect, and add keyframes to change the effect over time.
- Choose to focus on faces or other objects by selecting them with the Cinematic tool in the viewer.
- Use the Cinematic Editor in the timeline to view or delete focus points.

**Final Cut Pro 10.6 also includes these additional fixes and enhancements:**

- New Neon effect adds a glow to text and graphics.
- Improves stability when duplicating a project.
- Improves stability when selecting a library in the sidebar on Mac computers with Apple silicon.
- Improves stability when performing a trim during double speed playback.
- Improves stability when removing a through edit within a compound clip.
- Improves performance when using Avid DNxHD and DNxHR media with the Avid Universal decoder on Mac computers with Apple silicon.
- Improves stability when using the RED RAW Settings tool with multiple RED RAW clips and images selected.
- Improves stability when drawing a shape mask in the viewer.
- Improves reliability when choosing between multiple GPUs in Final Cut Pro Preferences on Mac Pro (2019).
- Fixes an issue where a custom camera LUT could be ignored during a render or export.
- Fixes an issue where a ProRes 4444 file lost its alpha channel after export.
- Fixes an issue where scroll bars were not persistent when choosing to always show scroll bars in System Preferences.
- Fixes an issue where thumbnails were not generated for some clips in the browser or timeline.
- Fixes an issue where custom role colours would not change after choosing Undo.
- Improves appearance of animation paths when using the transform tool.
- Audio skimming (Shift-S) now toggles on and off when using the keyboard arrow keys to step through frames.
- Fixes an issue where pops could occur during MP3 playback.
- Improves reliability of MXF audio during playback.
- Improves reliability of HE-AAC v2 audio during playback.
- Adds support for playback of Opus audio files.
- Fixes an issue where audio waveforms would not redraw after an audio level change.
- Updates FCPXML to version 1.10 with new bundle format.
- Improves reliability when importing an XML that includes closed captioning.
- Improves reliability when importing XML that contains rolling shutter or SmoothCam metadata.
- Adds support for hiding FCPXML extension during export.

---

### Final Cut Pro 10.5.4

**Released Thursday, 8 July 2021**

- Improves stability when exporting with certain macOS Language & Region preferences.
- Improves stability when playing H.264 or HEVC media.

---

### Final Cut Pro 10.5.3

**Released Thursday, 17 June 2021**

- Create and edit custom column views with the new column editor.
- Search for media in the browser using expanded criteria including clip names, markers and notes.
- Sort clips in the browser according to type, including proxy, optimised and missing media.
- Fixes an issue where adjusting audio keyframes on one side of a blade edit shifts keyframes unexpectedly on the other side.
- Restores support for copying clips from the Finder and pasting into the timeline.
- Improves stability when copying events in the browser to a library stored on an external hard drive.
- Fixes an issue in which the timeline index was not displaying active angle information for multicam clips.
- Fixes an issue where Canon Cinema RAW Light and RED RAW media could not be imported if a camera card was mounted when launching Final Cut Pro.
- Improves reliability when importing an FCPXML file with missing media.
- Fixes an issue with the Colour Mask in which dragging to select a range with the eyedropper did not display the selection circle.
- Improves reliability when using the Select Next Clip command.
- Improves reliability when app switching to Final Cut Pro with an external hard drive connected.
- Improves reliability when quitting Final Cut Pro during a background render.
- Improves stability and performance when working with multicam clips that contain corrupt media.
- Fixes an issue in which audio waveforms would sometimes not update when using the Trim tool to perform a slip edit.

### Final Cut Pro 10.5.2

**Released Thursday, 4 March 2021**

- Adds support for a new Universal RED plug-in enabling native RED RAW decoding and playback on both Apple silicon and Intel-based Mac computers.
- Improves stability when playing back H.264 video files with corrupt data.
- Fixes an issue in which text could disappear when double-clicking a value field in the inspector.
- Fixes an issue in which FCPXML files created from drop frame projects would import as non-drop frame.
- Fixes an issue that may prevent custom Motion titles stored inside the library from appearing in the Titles browser.
- Improves stability when choosing the DPP/Editorial Services metadata view with MXF media.
- Improves stability when using AirPlay with Final Cut Pro on a Mac computer with Apple silicon.

---

### Final Cut Pro 10.5.1

**Released Monday, 14 December 2020**

- Adds an Export for YouTube and Facebook share option to create a file for uploading to those sites.
- Includes stability improvements.

---

### Final Cut Pro 10.5

**Released Thursday, 12 November 2020**

- Improved performance and efficiency on Mac computers with Apple silicon.
- Accelerated machine learning analysis for Smart Conform using the Apple Neural Engine on Mac computers with Apple silicon.
- Option to create a copy of your library and automatically transcode media to ProRes Proxy or H.264 at various resolutions.

**Final Cut Pro 10.5 also includes the following:**

- Export HLG high-dynamic-range projects with Dolby Vision 8.4 metadata for optimised playback on Apple Devices.
- Fixes an issue in which LUTs were not available in optimised or proxy clips.
- Improves appearance of HDR thumbnails in the browser and timeline.
- Improves reliability when previewing built-in sound effects in the browser.
- Fixes an issue in which audio waveforms would not update in the inspector after adding a filter or making a volume change.
- Fixes an issue in which chapter markers were not available when sharing.
- Improves reliability when creating proxy media from non-square pixel interlaced clips.
- Improves stability when applying stabilisation and colour balance during import.
- Fixes an issue in which audio sync could drift when retiming clips.
- Improves reliability with Social Media content positioning when using Smart Conform to switch between vertical and horizontal frame sizes.
- Improves reliability when using on-screen Crop controls in the viewer.
- Fixes an issue in which copying stills between libraries would result in duplicate files.
- Includes built-in support for Avid DNxHR® and Avid DNxHD® decoding and playback.

---

### Final Cut Pro 10.4.10

**Released 24 September 2020**

- Fixes an issue in which XAVC media from the Sony PXW-FX9 camera is not recognised.
- Fixes an issue where brightness levels shift when switching between Better Quality and Better Performance in the viewer.
- Fixes an issue in which effect keyframes are not added correctly when using on-screen controls.
- Improves stability when using the transform tool with multiple clips in the timeline.
- Improves reliability when exporting an FCPXML that contains Compound clips.
- Addresses an issue that could prevent sharing at certain resolutions.
- Fixes an issue in which sharing a Compound or Multicam clip from the timeline was disabled.

---

### Final Cut Pro 10.4.9

**Released 25 August 2020**

#### Improved proxy workflows

- Generate proxy media in custom frame sizes of 1/8, 1/4, 1/2 or full resolution.
- Choose to create proxy media in either ProRes Proxy or H.264.
- Choose to display original or optimised media if proxy media is not available for some clips in your project.
- Create a proxy-only copy of a library to reduce size for portability or performance.

#### Social media tools

- Automatically transform projects for square or vertical delivery with Smart Conform.
- Display media outside the Viewer boundary when adjusting scale, rotation and position using Transform Overscan.
- Add a Custom Overlay as an on-screen guide when placing text and graphics within a square or vertical frame.
- Use the new Duplicate Project As command in combination with Smart Conform to quickly create a social media version of your existing project.

#### Other new features

- Adjust ProRes RAW camera settings such as ISO, colour temperature and exposure offset using new controls in the inspector.
- Crossfade audio on adjacent clips in one step using a menu command or keyboard shortcut.
- Use Close Project command in a new drop-down menu above the timeline to clear project history.
- Sort clips and projects by last modified date in list view.
- Preview 360-degree stereoscopic 3D video in simultaneous left- and right-eye views with the 360° Viewer.
- Easily stabilise 360-degree video with one-click tools in the inspector.

**Final Cut Pro 10.4.9 also includes the following:**

- Adjust timeline clip height in thumbnail-only view.
- Delete generated proxy files for individual clips in the browser.
- Improves performance when dragging a complex project to a new Library.
- Fixes an issue in which spanned clips were imported incorrectly.
- Improves reliability when using the Canon XF-HEVC codec.
- Improves reliability when using the Sony XAVC-L codec.
- Improves stability when using Mac Pro (2019) with three Pro Display XDRs
- Improves reliability when selecting A/V Output while using Pro Display XDR.
- Improves reliability when selecting A/V Output for 8K media on third-party hardware.
- Fixes an issue in which adjusting clip audio configuration results in the audio role resetting to its default.
- Fixes an issue in which thumbnails would not update when skimming titles, generators and transitions in the browser.
- Improves visual feedback when dragging music and sound effects from the media browser.
- Improves reliability when sharing a project via email.
- Fixes an issue in which layered PSD files would not display properly when imported via XML.
- Improves reliability when importing stabilisation data via XML.
- Improves reliability when importing multicam camera angle metadata via XML.

---

### Final Cut Pro 10.4.8

**Released 10 December 2019**

- Prevents an issue that could lead to visual artefacts appearing on a Mac with a Nvidia graphics card that has the Reduce Transparency accessibility preference turned on.
- Fixes an issue that prevented media from appearing in the Photos library browser when using Final Cut Pro on macOS Catalina.
- Fixes an issue in which Final Cut Pro would sometimes load an incorrect project into the timeline.
- Resolves an issue in which thumbnails would not update when skimming titles, generators and transitions in the Browser.
- Improves stability when sharing.
- Improves stability when skimming media in the Browser.
- Improves reliability when working with Sony XAVC media.
- Improves reliability when importing and exporting CEA 608 captions.

---

### Final Cut Pro 10.4.7

**Released 7 October 2019**

- New Metal-based processing engine improves playback and accelerates graphics tasks, including rendering, compositing, real-time effects, exporting and more.
- Enhances graphics performance with support for multiple GPUs, including Radeon Pro Vega II and Radeon Pro Vega II Duo on Mac Pro.
- Optimises CPU performance with support for up to 28 CPU cores on Mac Pro.
- Accelerates ProRes and ProRes RAW playback when using the Afterburner card on Mac Pro.
- View, edit, grade and deliver stunning High Dynamic Range (HDR) video on Apple Pro Display XDR.
- Simultaneously use up to three Pro Display XDR units connected to Mac Pro — two for the Final Cut Pro interface and one for dedicated monitoring.
- Grade HDR video with enhanced colour mask and range isolation tools.
- View HDR video tone-mapped to compatible Standard Dynamic Range displays when using Final Cut Pro on macOS Catalina.
- Select which internal or external GPU is used to accelerate graphics processing.
- Final Cut Pro 10.4.7 also includes the following:
- Waveform monitor lets you view luminance levels in High Dynamic Range (HDR) PQ media as you edit.
- HSL (hue, saturation and luma) controls in the Colour inspector let you select a range of colour with greater precision.
- HDR clips with LUTs applied now appear correctly when you use the Send to Compressor command.
- Improves stability when applying noise reduction to a Rec. 2020 REDCODE RAW clip.
- Lets you define keyboard shortcuts for the Add Colour Mask, Add Shape Mask and Toggle View Mask commands.
- Improves reliability and performance when using the Flow transition.
- Fixes an issue in which relinked media would sometimes result in empty thumbnails.
- Timecode window remains visible when other applications are active.
- Playhead now snaps to keyframes placed on audio components.
- Skimming an audio component now plays back audio as expected.
- Surround panning keyframes now work as expected when reopening a library.
- Adds support for Canon XF-HEVC.
- Adds HEIF support in Image Sequence exports.
- Adds support for fragmented MP4 format in HTTP live streaming.

---

### Final Cut Pro 10.4.6

**Released 21 March 2019**

- Detects media files that may be incompatible with future versions of macOS after Mojave and converts them to a compatible format.
- Fixes an issue that could cause share destinations to disappear from the share menu after quitting Final Cut Pro.
- Fixes an issue that could cause the workflow extension button to disappear when resizing the interface.
- Fixes an issue in which the Select Clip command could incorrectly select the clip beneath the playhead.
- Fixes an issue in which a successful share notification appears after the share operation was cancelled.
- Fixes an issue in which frames saved to the frame browser in the Comparison Viewer may appear differently than they do in the viewer.
- Fixes an issue in which frequency information for Hum Removal may not be visible in the audio inspector.
- Fixes an issue in which relinked media may appear with black thumbnails in the browser and timeline.
- Fixes an issue in which the share menu may be obscured behind the viewer when using Final Cut Pro in full-screen view.
- Improves reliability when sharing video to YouTube.

---

### Final Cut Pro 10.4.5

**Released Thursday, 17 January 2019**

- Improves performance when generating waveforms for clips with no audio channels.
- Improves stability when sending a project to Compressor using the Shift-Command-E keyboard shortcut.
- Improves stability when creating or editing titles with Arabic or Hebrew text.
- Improves stability when switching tabs in the Timeline Index.

---

### Final Cut Pro 10.4.4

**Released 15 November 2018**

#### Workflow extensions

- Extend the capabilities of Final Cut Pro with third-party extensions that open directly within the app interface.
- Drag and drop clips between the extension window, browser and timeline.
- Connect to existing third-party accounts to access projects, download media and purchase content.
- Deep integration allows extensions to control timeline playback, navigation, clip markers and more.
- Workflow extensions include tools for collaboration (Frame.io), stock media (Shutterstock) and asset management (CatDV).

#### Batch share

- Export and transcode multiple clips in the browser — with or without a camera lookup table (LUT) — for fast turnaround of dailies and other reviews.
- Select and export multiple projects.
- Combine batch sharing with bundles to encode multiple files to multiple formats in one step.
- Monitor export progress in the background tasks window.

#### Video noise reduction

- Apply the high-quality, drag-and-drop noise reduction effect to reduce grain and video noise.
- Use simple controls to quickly adjust the look and amount of noise reduction.
- Easily change processing order by dragging the noise reduction effect in the inspector.
- The viewer shows the noise reduction effect when paused and disables the effect when skimming for optimal performance.
- Apply 360° noise reduction to 360° video clips while preserving a flawless seam.

#### Timecode window

- View project and source timecode in one or more floating timecode windows.
- Resize the timecode window and drag any one to a second screen.
- Choose to display clip names and role names.
- Colour coding in the timecode window matches the colours of roles in the timeline.

#### Comparison Viewer

- Open the Comparison Viewer to reference other frames for consistent colour grading across your project.
- Quickly select the previous or next clip in the timeline as your reference frame.
- Save any image to the frame browser to reference it later in the Comparison Viewer.

#### Tiny Planet
- Select the Tiny Planet mapping option when adding 360º video to a non-360° project to create interesting spherical looks.
- Use the roll and tilt parameters to wrap your tiny planet effect into an infinite cylinder.
- Adjust the pan parameter to move your subject horizontally within the tiny planet.
- Animate the field of view to transition from a close up to a satellite view flying high above your footage.
- Give 360° titles and generators a powerfully warped look by applying the Tiny Planet mapping option.

#### Other new features
- View, edit and deliver closed captions in the SRT format, which is used by a wide range of websites, including Facebook.
- Choose to burn closed captions into your video to ensure they appear at all times during playback.
- When dragging in the timeline to select a secondary storyline, you can now select individual clips or the entire secondary storyline.
- Instantly turn any photo or video into a comic book illustration using Comic filter, then refine the comic book look with simple controls to adjust ink edges, fill and smoothness.
- New 360° transitions include Gaussian Blur, Bloom and a collection of wipes to seamlessly transition from one 360º clip to another.
- Typing the first few letters of a font name jumps directly to the font in the list.

**Final Cut Pro 10.4.4 also includes the following:**

#### 360° video

- 360° clips added to equirectangular projects display correctly in auditions.
- Fixes an issue where clicking the delete keyframe button when adjusting orientation incorrectly added a keyframe.
- Fixes an issue where the keyframe navigation buttons disappear while adjusting orientation.
- Resetting the orientation when using a VR headset correctly resets the Y axis.
- Option dragging a connected 360º clip maintains orientation.
- Dragging the orientation tool vertically in the Viewer using the on-screen controls works correctly.
- Adding equirectangular media to a connected storyline that contains 360° video media remains equirectangular.

#### Audio

- Volume control is adjustable for a selected, connected clip.
- Audio playback continues when resetting the peak indicators.
- Audio playback continues when changing pan mode on an audio component.
- Changing audio configuration of a clip properly clears any soloed audio components.
- Fixes an issue where disabling and re-enabling audio channels when previewing an audio effect in the effects browser caused audio to be inaudible.
- Fixes an issue where audio meters of third-party audio plug-ins became unresponsive when changing the order of audio effects in the Audio inspector.

#### Closed Captions

- Fixes an issue where disabling an invalid caption would hide other captions in the Viewer.
- Embedded captions in shared files now display as expected in QuickTime Player 7.
- Extract Captions from detached audio clips with embedded captions functioning as expected.
- Fixes an issue where the position of an ITT caption was not being saved when set as default.
- Fixes an issue where captions couldn't be embedded when connected to secondary storylines.
- Fixes an issue where clicking on a CEA-608 caption near the end of a project caused Final Cut Pro to stop saving changes.
- Captions can be double-clicked in the caption index to open them in the Caption editor in the timeline.
- Caption timing is honoured when copying and pasting captions between projects.
- Fixes an issue where Lane Headers unexpectedly move when selecting a caption and scrolling vertically.

#### Colour Correction

- Fixes an issue where the display order of LUTs after import were appearing alphabetically based on the content of folders.
- Colour Wheels accurately reflect the values set when using the colour picker to choose a colour.
- Fixes an issue where duplicate sets of built-in colour presets were sometimes visible in the Effects browser.
- Reference level line in the waveform monitor remains locked in place until you click to move it or drag it out of the waveform monitor display to remove it.
- Colour, Saturation and Brightness controls under the colour wheels can be reset individually within the Master, Shadows, Midtones and Highlights controls.
- Fixes an issue where 10-bit HEVC rec.2020 HLG media in a Wide Gamut library would cause Final Cut Pro to quit unexpectedly.
- Fixes an issue when manually white-balancing a 50fps HDR clip in an HDR library and project would cause Final Cut Pro to quit unexpectedly.

#### Effects

- Option clicking an audio effects preset opens all controls for each individual effect in the preset.

#### Multicam

- Fixes an issue where colour correcting an angle in the angle editor would cause the playhead to move unexpectedly to the beginning of the timeline.

#### Roles

- Select All no longer selects secondary storylines and toggles selection of components based on role of clip in selection.

#### Timeline

- Selected connected clips now properly follow the pointer and get placed where positioned in a non-zero starting project timeline.
- Fixes an issue where an audio-only clip in a connected storyline plays video frames from the source clip that the audio is attached to.
- Option-selecting connected clips now properly duplicates the expected clips in a non-zero starting project timeline.
- Fixes an issue where connecting clips to a primary storyline draws overlapping audio components in expanded lanes.
- Double-clicking to add an effect adds it to the top clip at the playhead position.
- Join Clips and Join Captions combined into a single command in the Command Editor.

#### Titles

- Core Text engine ensures accurate display of Arabic letters, Indic vowel signs in Devanagari and Thai diacritics.

#### XML

- Shape and Effect Mask values are properly transferred via XML.

---

### Final Cut Pro 10.4.3
- Support for viewing and editing ProRes RAW files from DJI Inspire 2 drone with the DJI D-Log setting.
- Fixes an issue where some 25 fps-interlaced MXF files may display incorrectly.
- Fixes an issue in which using Option-drag to duplicate clips in the timeline could move them later in the timeline.
- Fixes an issue that caused some Panasonic P2 video files to be imported with mixed-down audio channels.
- Fixes an issue in which English keyboard shortcuts were incorrectly applied to other languages.
- Exported audio with certain plug-ins applied plays correctly.
- Deleting unused render files from a Compound clip in the browser works correctly.

---
### Final Cut Pro 10.4.2

- Fixes an issue in which selecting multiple clips using the Shift key or marquee selection could inadvertently select other clips in the timeline.
- Fixes an issue in which XML imports may not preserve colour effect and colour board settings.
- Dragging events between libraries no longer uses XML and correctly copies all settings and media.
- Removes unnecessary settings that were included in XML 1.7 export.

---

### Final Cut Pro 10.4.1

#### Closed Captions

Import caption files into a Final Cut Pro project to automatically create time-synced, connected captions in the timeline.
See captions directly in the Viewer.
Use the Inspector to adjust text, colour, on-screen location and timing.
Create captions in multiple languages and formats in the same timeline
Use the new Captions tab in the Timeline Index to search text, select captions and quickly switch between different versions of your captions.
Attach captions to audio or video clips in the timeline.
Extract embedded captions from video to view and edit the captions directly in Final Cut Pro.
Send your project to Compressor in a single step, making it easy to create a compliant iTunes Store package with audio and video files, captions and subtitles
Validation indicator instantly warns about common errors including caption overlaps, incorrect characters, invalid formatting and more.
Embed captions in an exported video file or create a separate caption sidecar file.
Share captioned videos directly to YouTube and Vimeo.
Support for CEA-608 and iTT closed-caption formats.

#### ProRes RAW
- Support for ProRes RAW files lets you import, edit and grade using pristine RAW image data from the camera sensor.
- RAW image data provides ultimate flexibility when adjusting highlights and shadows — ideal for HDR workflows.
- Enjoy smooth playback and real-time editing on laptop and desktop Mac computers.
- Highly efficient encoding reduces the size of ProRes RAW files, allowing you to fit more footage on camera cards and storage drives.
- ProRes RAW preserves more of the original image data, making it an ideal format for archiving.
- Work natively with ProRes RAW or ProRes RAW HQ files created by ATOMOS recorders and DJI Inspire 2 drone.

#### Enhanced export

- The new Roles tab in the share pane displays title, video and audio roles in a single, consolidated interface.
- Quickly view and choose roles to be included in exported video files.
- Roles settings and enabled/disabled states from the timeline are carried through to the share pane.
- Embed closed captions in a video file or export a separate captions sidecar file in CEA-608 and iTT formats.

**Final Cut Pro 10.4.1 also includes the following:**

#### 360 VR

- Changing 360° metadata from rectilinear to equirectangular displays the clip's correct orientation.
- 360° Viewer has a new keyboard shortcut to reset field of view: Control-Option-Command-Delete.
- Command Editor function of "Reset Point of View" is now listed correctly as Reset Angle.
- VR headset drop frame warning preferences are honoured with a VR headset connected.
- Stray pixels are no longer visible in high-contrast regions of a frame.

#### Accessibility

- It is easier to create custom project sizes when using accessibility applications, as accessibility width and height labels have been added for project properties.

#### Audio

- Volume automation is retained after a retiming effect has been applied.
- Quicker display of custom audio effects interface from the audio Inspector tab when using Final Cut Pro in German.
- Correct parameters are displayed in the Inspector when viewing a duplicate audio effect.

#### Browser

- Text in the notes field of the Inspector is saved automatically.
- Text entered into the notes field in list view in the Browser displays in the Inspector.
- Project thumbnails load correctly when the system is connected to an HDMI display.

#### Colour Correction

- Colour wheel sliders retain values at 100 IRE for white and 0 IRE for black, with the ability to move above and below using colour correction controls.
- Colour board exposure parameters are consistent for Rec. 2020 PQ projects.
- Keyframes are properly maintained when copying and pasting colour wheel effects.
- Custom white balance values are pasted correctly in Rec. 2020 HDR libraries.
- View Masks selection displays the mask in the Viewer before colour grading parameters are changed.

#### Effects

- Camera LUT is applied correctly to deinterlaced media.
- Fixes an issue in which the playhead jumps to a transition when adjusting the Ken Burns effect.
- Fixes an issue where the Viewer displays black when adjusting a crop or Ken Burns effect using on-screen controls in an Audition clip.
- Fixes an issue where Replicator edges appeared corrupt when exporting or rendering from projects set to Rec. 2020 HLG colour space.
- Undo works correctly after a Luma Keyer effect has been applied.
- Fixes an issue where a blade edit could reset an effect tick box.

#### Formats

- MXF Item Signal Standard is set to correct values for AVC Intra, DVCPRO HD and Uncompressed HD.
- Fixes an issue where spanned Canon C300 clips are imported as multiple clips.
- Clips over 4GB on FAT32 media cards including Sony and JVC source files are represented as one clip in the Import window and also honour the recorded start and stop points.
- Fixes an issue where certain Sony SxS cards with large files would cause Final Cut Pro to quit unexpectedly.
- XAVC/XDCAM plug-in returns the correct timecode values for BPAV file types.
- Improved performance when stabilising RED RAW files on iMac Pro
- Fixes an issue where the folder structure for the Panasonic AU-EVA1 is not recognised.
- Loading spanned JVC XDCAM clips no longer causes Final Cut Pro to quit unexpectedly.
- Failures while Sharing with AVCHD media now displays the corrupt file name in the error dialogue for easier troubleshooting.
- Fixes an issue where, with multiple camera volumes mounted in the Import window, skimming in Filmstrip view displayed the incorrect clip.

#### General

- Changing media storage locations from one location to another and then back again on NFS storage updates the media links correctly.
- After typing text into an Inspector metadata field, entering text into a second text field works correctly.
- Relink Files button highlights after selection, allowing you to press Enter to commit the command.
- Screen recordings created using QuickTime Player in French or Spanish apply retiming effects correctly when imported into Final Cut Pro.
- Find People and Create Smart Collections After Analysis works correctly.
- Fixes an issue where PSDs with an alpha from Pixelmator appeared cropped in the Viewer.
- #### Multicam
- Fixes an issue where switching between video scopes and the Angle Viewer or the 360° Viewer caused the Angle Viewer to display incorrectly.
- Fixes an issue where spatial conform causes Multicam clip angles to display incorrectly in the Angle Viewer.

#### Optical Flow

- Last frame of 100% reversed clip with optical flow retiming renders correctly.
- Optical flow retiming renders correctly on clips with audio that is longer than video.
- Reversed clips with optical flow applied now render in the timeline without requiring analysis on the entire source clip.

#### Rendering

- Render bars appear correctly on 29.97i (60 field) clip in a 30p project.
- Background rendering works correctly on 29.97i (60 field) clip in a 30p project.

#### Share

- 29.97i (60 field) clips in a 30p project export correctly.
- YouTube “Visit” and “Tell a Friend” buttons open video URL correctly.

#### Stability and reliability

- Fixes an issue in which resetting a gradient control could cause Final Cut Pro to quit unexpectedly.
- Fixes an issue in which quickly switching back and forth between View > Layouts and then selecting a colour picker could cause Final Cut Pro to quit unexpectedly.
- Fixes an issue in which initiating an undo action after rearranging roles in the timeline index could cause Final Cut Pro to quit unexpectedly.
- Improves stability when lifting two adjacent transitions from a Storyline.
- Improves stability when skimming over or importing a corrupted MXF (MPEG-4) file.
- Improves stability when importing a PSD file created in Pixelmator.
- Improves stability when inserting a SxS card into a Sony SxS USB card reader.
- Fixes an occasional hang after adding a title, relaunching Final Cut Pro and then modifying parameters.

#### Text

- On-screen controls for text in the Viewer are more responsive and properly sync with the Inspector.

#### Timeline

- Timecode display no longer skips timecode or frames during processor-intensive tasks.
- Rename Clip in the timeline applies to all selected clips.

#### XML

- Colour Balance effect now properly round trips via XML in HDR Libraries.
- Final Cut Pro no longer considers the part of the library name after a full stop "." specified as the library location import option in FCPXML as a file extension.

---

### Final Cut Pro 10.4

#### 360 VR editing

Import and edit 360° equirectangular video in a wide range of formats and frame sizes.
Output 360° video to a connected VR headset (Requires compatible VR headset, macOS High Sierra or later, and SteamVR. Video output to VR headset requires a Mac computer with discrete graphics running macOS High Sierra or later. 27-inch iMac with Radeon Pro 580 graphics recommended).
Open the 360° viewer to simultaneously monitor headset and equirectangular views while editing.
Option to track movement of a VR headset in the 360° viewer in Final Cut Pro.
Add 360° effects including blurs, glows and more.
Share 360° video directly to YouTube, Facebook and Vimeo.
Use the 360° patch to instantly remove cameras and rigs from the scene.
Use the Horizon overlay to easily change the orientation of 360° video directly in the viewer.
Edit 360° video into a non-360° project and animate the pan, tilt and zoom.
Place any graphic, still or video into a 360° project, then reposition and resize to fit perfectly into the 360° scene.
Support for monoscopic and stereoscopic 360° video.

#### Advanced colour grading

Dedicated colour tab in the inspector provides one location for all colour controls.
Powerful new colour wheels improve upon traditional wheels with integrated sliders to adjust hue, saturation and brightness.
Colour curves enable ultra-fine adjustments using multiple control points to change colour and contrast.
Hue/saturation curves let you select a specific hue or brightness level to make adjustments while leaving other parts of the image unchanged.
Use the eye dropper in the colour and hue/saturation curves to quickly sample parts of an image for adjustment.
Balance Colour command includes an eye dropper for manual white balance.
Apply custom LUTs from popular colour grading apps and sites.
Adjust colour corrections over time with precise keyframe controls.
Speed through colour correction using new keyboard shortcuts for colour adjustments and role-based timeline navigation.
Colour presets are now located in the effects browser for skimmable preview and fast search.

#### High Dynamic Range

Import, grade and deliver High Dynamic Range (HDR) video as Rec. 2020 HLG or Rec. 2020 PQ for HDR10.
Output video to third-party HDR monitors using third-party I/O devices.
Built-in waveform monitor indicates HDR brightness levels up to 10,000 nits.
HDR Tools effect lets you easily tone map HDR to Standard Dynamic Range (SDR) output as well as convert between PQ and HLG formats.
Option to view HDR as raw values when working without an HDR monitor.

#### Additional features

Import your iMovie for iOS project directly into Final Cut Pro for advanced editing, audio work and finishing.
Import, playback and editing of High Efficiency Video Coding (HEVC, also known as H.265) video clips and High Efficiency Image Format (HEIF) photos from Apple devices (HEVC and HEIF support requires macOS High Sierra or later).
Send to Compressor to export video projects in the HEVC format.
Adjust audio using effects plug-ins from Logic Pro X with redesigned, resizable interfaces.
Support for Canon Cinema RAW Light format with additional software from Canon.
Faster Optical Flow analysis using Metal 2.
Support for NFS-based libraries and media.
XML 1.7 with support for new colour grading controls, 360 VR effects and HDR.


#### Issues addressed in Final Cut Pro 10.4:

- Support for importing and exporting WAV files greater than 4GB as RF64 when using macOS High Sierra 10.13.
- Fixes a stability issue that could occur when using Final Cut Pro on macOS High Sierra with a laptop in closed-display mode and attached to an external monitor.
- Fixes an issue in which text in the Browser in List mode could occasionally disappear.
- Enabling transform, crop or distort no longer closes Video Scopes.
- Third-party asset management systems can now send low-resolution media to Final Cut Pro through XML import and later replace those low-resolution files with full-resolution files through another XML import.
- Glue Tools Phantom Cine Toolkit works correctly with Phantom high-speed camera "Cine" files when editing in Final Cut Pro.
- Support for new YouTube authentication protocols.
- Contextual menu option to create a new project from a selection of one or more clips in the Browser.
- Ability to use key commands in full-screen view when the Viewer is on a second display.
- Alert dialogue appears when sharing a file if playback mode is set to proxy.
- Square pixel photos at 960 x 720 and 1440 x 1080 resolutions no longer appear distorted.
- The Toggle Fade In and Toggle Fade Out commands now appear under the Adjust Volume menu.
- Press Ctrl-Tab to cycle through tabs in the Inspector when the Inspector is selected.

---

### Final Cut Pro 10.3.4

- Resolves a stability issue when using keyboard shortcuts to trim in Secondary Storylines.
- Fixes an issue in which certain editing operations could create an extra audio fade-in.
- Fixes an issue in which the Share dialogue could incorrectly display a codec warning.

---

### Final Cut Pro 10.3.3

- Ability to expand the width of the Inspector to view and adjust effect parameters.
- Fixes issues with updating older libraries.
- Faster redraw of audio waveforms when using clips that are being imported while recorded to disk.
- Diamond icon in the Timeline Index to show when the user has modified display of roles in the timeline.
- More colour options in the Role Editor.
- Reveal in Browser correctly displays the location of the original clip in the browser.
- Support for Canon Log 3 and Sony S-Log3/S-Gamut3 log processing.
- Resolves an issue in which the viewer could occasionally disappear when exiting full screen.
- Resolves issues in which Share to DVD could become unresponsive.
- Improves font quality of DVD menu and chapter titles.
- Improves image quality when creating a DVD.
- Enhanced DVD User dialogue messages with embedded links to documentation.

---

### Final Cut Pro 10.3.2
- Ability to add custom folders of audio files to the Sound Effects browser.
- Using ripple delete on audio-only clips no longer disables the selected range.
- Audio meters retain custom width after relaunch.
- Improves responsiveness when editing very long projects.
- Improves performance when exporting H.264 files and changing frame rate.
- Exporting ProRes 4444 files with transparency using Compressor creates a correct alpha channel.
- Fixes an issue in which adjusting the line spacing of multi-line titles only applied to the first line.
- Fixes an issue in which secondary storylines with mixed roles could overlap in the timeline.
- Fixes an issue that could prevent burning Final Cut Pro projects to DVD via Apple USB SuperDrive.

---

### Final Cut Pro 10.3.1

- Fixes an issue with cropped images in the Viewer when the Language & Region System Preference is set to Spanish.
- Fixes issues with updating libraries.
- Fixes an issue when using Paste Attributes to copy colour correction between clips.

---

### Final Cut Pro 10.3

#### New Interface
- Redesigned dark interface puts the focus on your video.
- Configure window layouts into custom workspaces for tasks such as organising and colour grading.
- Fill a second display with the Timeline or hide the Timeline completely.
- Expand the Inspector to full-screen height.

#### Magnetic Timeline 2

- Colour coding of clips based on roles such as dialogue, music and effects lets you understand your project at a glance.
- Create, assign and customise the colours of roles to identify different types of audio and video clips.
- Enhanced Timeline Index lets you drag and drop audio roles to rearrange the layout of your Timeline.
- Focus button in the Timeline Index lets you highlight specific audio roles and collapse all others.
- Show Audio Lanes button in the Timeline Index displays a structured Timeline layout with dedicated spaces for each audio role.
- Add audio effects and keyframe audio volume changes to an entire role within a Compound Clip.
- iXML support enables automatic creation and assignment of roles based on metadata from an audio field recorder.
- Custom Roles assignment can be combined with iXML metadata during import.
- Create and manage a unique set of roles for each Final Cut Pro library.

#### Wide Colour

Images are now viewable in wide colour on supported Mac computers and external displays.
Import, edit and deliver video in standard Rec. 601 and Rec. 709 colour spaces, or in wide Rec. 2020 colour space.
Configure colour spaces for both libraries and projects.
Log footage from ARRI, Blackmagic Design, Canon, Panasonic and Sony cameras, as well as RED RAW footage, can be manipulated in real time while preserving wide colour.
Range check overlay in the viewer highlights areas out of the standard RGB range.
Video scopes display wide colour in real time.

#### Support for the Touch Bar on MacBook Pro

Tap to execute common functions such as volume control, fade in and out, and media import.
Easily access advanced editing commands, including Override Clip Connections, Trim to Start and Trim to End.
View your entire project at a glance and navigate with touch in the timeline overview.

#### More Video Formats

MXF-wrapped Apple ProRes provides a flexible new format for broadcast delivery.
MXF master file export uses audio roles to configure industry-standard channel layouts.
Support for Canon Log2/Cinema Gamut and Panasonic V-Log.
Support for Sony XAVC-L at 4K for the Sony PXW-FS7 and PXW-X70 cameras.
Export AVC-Intra files

#### Additional Features

- Flow transition seamlessly merges jump cuts to remove pauses or mistakes in on-camera interviews.
- Remove Effects and Remove Attributes commands let you delete specific effects from clips.
- SMB 3 network support enables library access on network-attached storage devices.
- Timecode effect displays clip name and source clip timecode in the Viewer and in exported files.
- Copy and paste timecode to speed up numerical entry from text documents.
- Consolidate custom Motion projects into individual Final Cut Pro libraries.
- Option for continuous playback of clips in the Browser.
- Search custom metadata in the Browser and Timeline.
- Search Timeline Index for Auditions, compound clips, multicam clips and synchronised clips.
- Ability to roll trim on adjacent connected clips.
- Larger Media and Content browsers provide more space for viewing photo libraries, sound effects, music, titles and generators.
- Skim and select ranges of audio files in the Music and Sound Effects browser.
- Use a Mini DisplayPort or HDMI cable for direct AV output to an external display at standard video resolutions.
- XML 1.6 supports role-based audio components for Magnetic Timeline 2.
- Enhanced XML support lets you import projects and clips into existing events.
- Ability to drag and drop clips, projects and events as XML with supported applications.
- Ability to export a library to an XML file from Final Cut Pro via drag and drop.
- Option-click a component in the Audio Inspector to select that component while simultaneously disabling all other components.
- Disable an audio component in the Timeline by selecting it and pressing Delete.
- Press Command-Up Arrow or Command-Down Arrow to select and navigate clips vertically in the Timeline.
- When you open a Multicam clip in the Angle editor, Final Cut Pro now positions the playhead on the same frame you were viewing in the original Timeline.
- Ability to move subroles between roles and merge subroles with other subroles in the Edit Roles window.
- Batch relink from RED R3D files to QuickTime proxy files and back to the original R3D files instead of relinking one file at a time.
- Change the height of clips in the Timeline using keyboard shortcuts Command-Shift-Plus sign (+) or Command-Shift-Minus sign (-).
- Synchronised clips now display a distinctive badge to easily identify them in the browser and Timeline.
- Customisable keyboard shortcuts for adding audio fades.
- New preference to assign default fade duration when adding audio fades via keyboard shortcut.
- The Overwrite Edit function is now the fourth Edit Mode button in the top-left corner of the Timeline alongside Connect, Insert and Append.
- Align Audio to Video function quickly resets J or L cuts in the Timeline to straight cuts.
- Launching Final Cut Pro by double-clicking a library in Finder bypasses the Open Libraries window.
- New Broadcast Safe Effect allows you to limit video levels to a specific colour space including Rec. 601 PAL and NTSC, Rec. 709 and Rec. 2020.
- XML export of multicam clips now preserves the Angle ID, which greatly improves integration with asset management systems.
- Camera angle, camera name and reel fields are now searchable using the text search function in the Browser.
- Final Cut Pro now correctly recognises and displays variable frame rates in the browser column when shooting XAVC-Long G with the Sony PXW-X70 camera.
- When importing from a camera card with mixed media such as stills and video, the Import window displays a single volume.
- Audio effects have a global enable/disable button in the Inspector, such as video effects.
- After upgrading a library to Final Cut Pro version 10.3, you can now reveal and utilise any original iXML metadata on audio clips by selecting the clip and re-applying the role.
- Support for 10-bit uncompressed MXF with standard definition video.
- Support for exporting 16-bit TIFF sequences from both Final Cut Pro and Compressor.
- Choose Metadata Views in the Inspector for DPP Editorial/Services and DPP Media, which can be used when delivering Digital Production Partnership AS-11 master program files.
- New column in the Import window for Colour Profile, so you can view and select clips for import based on colour space.
- Users can now create and save a custom default Generator, Title and Lower Third Title that can then be added to a Timeline with keyboard shortcuts.
- Audio metering works when previewing an audio source in the Music and Sound Effects Media Browser.
- Timecode and audio meters are now displayed in the Event Viewer.
- An arrow cursor has been added as a new option for the Shapes generator.

#### Issues addressed in Final Cut Pro 10.3:

- Optical Flow on retimed clips with an alpha channel no longer causes transparent areas to become briefly opaque.
- Resolves an issue in which lines are displayed across the timecode window on macOS Sierra.
- In List View in the browser, audio waveforms now scale correctly to the width of the filmstrip.
- Synchronised clips now correctly round trip through XML export and import.
- If you use the Replace function to replace a clip in the Timeline that has keywords and notes with a new clip that does not, the keywords and notes no longer remain in the Timeline Index.
- Resolves an issue that could cause the Create Disc sharing option to hang on macOS Sierra.
- Toggling between List View and Filmstrip View does not change the clip selection in List View.
- Audio levels remain consistent when trimming an Audition during playback.
- After resetting volume in the Inspector, new fade handles are not set to Linear.
- When launching Final Cut Pro with no libraries loaded, the app will remain open even if you decline to upgrade a library.
- Zoom in the viewer works correctly after full-screen playback.
- After XML import, 4K Synchronised clips now correctly appear as 4K.
- Generators with shape masks are exported at the correct size.
- After using the Share to Apple Devices 1080p option, the file information in iTunes no longer displays SD 1080.
- Video-only export does not send audio out when you export a second time.
- You can now exit full-screen playback when editing control points on a Draw Mask.
- The Draw Mask effect works correctly when added to a clip in a Multicam angle.
- You can now continuously move the Colour Correction pucks with the arrow keys.
- Resolves an issue where Colour Balance could cause some Multicam Clips to turn white.
- Fixes an issue where Log processing could remain on a clip even when None is selected in the Inspector.
- Colour Masks work on clips with Log processing applied.
- Support for colour-correcting Photoshop layers.
- Improved accuracy when subtracting colours from inside a Colour Mask.
- Match Colour and Balance Colour can be copied and pasted to other clips using the Paste Attributes function.
- Title guide snapping now works correctly.
- Fixes an issue where the Basic Lower Third title could revert back to the original type style and not retain user changes after relaunching Final Cut Pro.

---

### Final Cut Pro 10.2.3

- Customisable Default Effect lets you choose both a video and audio effect that is assigned to a keyboard shortcut.
- 4K export preset to create video files for Apple devices.
- Improves speed when opening libraries on a SAN.
- Resolves an issue that could affect the timecode display in the Dashboard on OS X El Capitan.
- Import Canon XF-AVC including video files from the Canon C300 Mark II.
- Ability to share video to multiple YouTube accounts.
- Resolves an issue in which a disabled video effect could appear as Missing Effect when opening the project or when sharing to Compressor.
- Addresses an issue in which black frames could appear in imported iPhone video clips that were trimmed on iPhone.
- Fixes an issue that could cause the playhead to jump ahead when editing short titles.
- Fixes an issue that could cause the timeline to stop playback when switching views in the Browser.
- Fixes an issue in which points on a bezier shape could incorrectly switch from Linear to Smooth.
- Fixes an issue in which some objects within Motion templates render with soft edges.
- Adds iPhone 6s, iPhone 6s Plus, iPad Pro and Apple TV HD to the Apple Devices compatibility list in the Share window.

---

### Final Cut Pro 10.2.2

- Native support for Sony XAVC-L and Panasonic AVC-Intra 4:4:4 up to 4K resolution.
- Import Canon XF-AVC 8-bit video files with Canon plug-in.
- Export interlaced H.264 video.
- Asset management systems can include a library backup file when sharing from Final Cut Pro.
- Fixes render errors that could occur when using reflective materials with 3D text.
- Improves stability when swapping materials on 3D text with published parameters.
- Improves performance when loading text styles.
- Motion Title templates with published text layout parameters now export correctly.
- Fixes an issue that could cause 3D text to appear dark when rendered.
- Addresses issues with timing on certain animated effects.

---

### Final Cut Pro 10.2.1

- Restores support for Panasonic AVCCAM video at 25p and 30p.
- Improves accuracy when dragging to select a range in the Timeline.
- Fixes an issue that may cause Final Cut Pro to quit on launch.

---

### Final Cut Pro 10.2

#### Introducing 3D titles:

- Beautifully animated and easily customisable 3D text.
- Simple templates to get started quickly.
- Cinematic templates with built-in backgrounds and animations.
- Large collection of text styles to create stunning looks with one click.
- Customise your titles with hundreds of combinations of materials, lighting and edges.
- Additional controls to adjust environment, shadows and more.
- Instantly convert 2D titles to 3D.
- Open any title in Motion to add multiple lights, cameras and tracking.

#### Advanced effects:

- Display up to four video scopes simultaneously.
- Apply super ellipse Shape Mask to any clip.
- Apply Draw mask to any clip, with options for linear, bezier or B-spline smoothing.
- New shape and colour mask controls for every effect.
- Instantly display the alpha channel for any effect mask.
- Save custom effects as presets for quick access.
- Colour Board merged into the new Colour Correction effect.
- Rearrange the processing order of the Colour Correction effect.
- Improved keyframing with better motion smoothing.
- Improved optical flow for beautiful slow motion on a wider range of content.
- Better performance of FxPlug plug-ins and built-in effects that use multiple frames such as Visual Echo and Trails.

#### Camera formats:

- Support for Panasonic AVC-Ultra codec family.
- Support for Sony XAVC S format.
- Import Sony XAVC and XDCAM formats without separate plug-in.
- Support for JVC H.264 Long GOP format.
- GPU-accelerated RED RAW processing with support for dual GPUs.
- Support for RED RAW anamorphic formats.

#### Additional features:

- You can now use Smart Collections at the event and library level.
- Import window consolidates all options into a single sidebar.
- GPU rendering when using Send To Compressor with support for dual GPUs.
- CABAC entropy mode for multi-pass encoding.
- XML 1.5 for third-party interchange. For legacy third-party applications, XML 1.4 continues to be supported.

#### Final Cut Pro 10.2 also includes the following:

- Faster drawing of audio waveforms, which improves performance especially when editing over a network.
- Transform controls work correctly with photos in a secondary storyline.
- Resizable Filter window for searching.
- Freeze frames copy media across multiple libraries.
- Slo-mo video clips from iPhone appear in the Browser with a badge.
- Full-screen playback does not automatically superimpose transport controls.
- Improved performance when skimming Long GOP video including AVCHD.
- Exporting a Master File using i-Frame codecs such as ProRes can play in QuickTime Player before the export is completed.
- Support for XAVC S video recorded at 120 fps and 240 fps.
- MXF-wrapped AVC-Intra and Uncompressed files export faster.

---

### Final Cut Pro 10.1.4

- Native MXF import, edit and export with the Pro Video Formats 2.0 software update.
- Option to export AVC-Intra MXF files.
- Support for import and editing with Panasonic AVC-LongG media.
- Fixes issues with automatic library backups.
- Fixes an issue where clips with certain frame rates from Canon and Sanyo cameras would not import properly.
- Resolves issues that could interrupt long imports with App Nap enabled.
- Stabilisation and Rolling Shutter reduction works correctly with 240 fps video.

---

### Final Cut Pro 10.1.3

- Fixes reliability issues when burning a Blu-ray Disc or creating a Blu-ray disk image.
- Colour corrections you paste between clips are retained during Share.
- Effects you apply to clips in the browser in prior versions of the app are retained when adding those clips to the timeline.
- XML round-trip imports correctly when using gap clips.
- Improves reliability of automatic library backups.
- Improves stability when skimming growing files in the Browser.

---

### Final Cut Pro 10.1.2

- Optimised, proxy and rendered media can be stored at any location outside the library.
- View and set storage locations for each of your libraries using the Library Properties inspector.
- Easily delete optimised, proxy and rendered media from within Final Cut Pro.
- Used media indicators for Compound, Multicam and Synced clips.
- Option to show only unused media in the Browser.
- Apply a standard (Rec. 709) look in real time to High Dynamic Range and wide colour gamut video from ARRI, Blackmagic Design, Canon and Sony cameras.
- Automatically apply an ARRI embedded 3D LUT from the new AMIRA camera.
- Support for Apple ProRes 4444 XQ.
- Improved speed and accuracy when synchronising clips.
- Audio recording improvements including countdown and automatic Audition creation from multiple takes.
- Fast export of cuts-only projects containing XDCAM media.
- Export entire library as a single XML file.
- Selecting a library displays key metadata in the Inspector.
- Adjust relative and absolute volume of a clip or range selection.
- Create keywords from Finder Tags when importing media.
- Option to sort events by date or name in the Libraries list.
- Import a clip by dragging directly into the Browser.
- Share 4K video to Vimeo.
- Final Cut Pro 10.1.2 also addresses the following issues
- Faster opening, closing, copying and overall performance when working with large libraries.
- Linear and smooth motion interpolation between keyframes applies to both time and distance.

---

### Final Cut Pro 10.1.1

- Preserves media files if an external drive or network is disconnected while consolidating a library.
- Resolves an issue with loading audio content in the Music and Sound Browser.
- Fixes a stability issue when applying a Motion effect with Scroll Text behaviour.
- Faster switching between proxy media and original or optimised media.
- Improves Timeline responsiveness with very large projects.

---

### Final Cut Pro 10.1

- Optimised playback and rendering using dual GPUs in the new Mac Pro.
- Video monitoring up to 4K via Thunderbolt 2 and HDMI on selected Mac computers.
- 4K content including titles, transitions and generators.
- Libraries allow you to gather multiple events and projects within a single bundle.
- Easily open and close individual libraries to load just the material you need.
- Option to import camera media to locations inside or outside a library.
- Automatically back up libraries to a user-specified drive or network location.
- Project Snapshots let you quickly capture the project state for fast versioning.
- Audio fade handles on individual audio channels in the timeline.
- Add precise retime speeds by entering them numerically in the timeline.
- Non-rippling retime option.
- One step Replace and retime.
- Custom project frame sizes.
- Through edits displayed on all clip types.
- Join Through Edit command removes bladed cuts to clips in the timeline.
- Detach audio with Multicam clips in the timeline to manipulate audio and video separately.
- Make video- or audio-only edits into the timeline with Multicam Clips as sources.
- Blade and move audio in J- and L-cuts.
- Ability to roll audio with J- and L-cut splits open.
- Option to hide the Event browser to gain more screen space for viewing.
- Native support for .MTS and .MT2S files from AVCHD cameras.
- Used media indicators on source clips.
- Improved performance with large projects.
- Improved performance when modifying or adding keywords to many clips at once.
- Easily move, copy and paste multiple keyframes.
- Option for the linear animation with Ken Burns effect.
- Improved image stabilisation with InertiaCam and Tripod mode.
- Import photos from iOS devices.
- Proxy and playback quality controls accessible in Viewer menu.
- Support for portrait/landscape metadata in still images.
- Effects parameters, fonts and text size included in XML metadata.
- Improved support for growing media and edit while ingesting.
- API for custom Share operations using third-party software.
- FxPlug 3 with custom plug-in interfaces and dual-GPU support.
- Share directly to YouTube at 4K resolution.
- Share directly to Chinese video sites Youku and Tudou.
- Spanish language localisation.

**Final Cut Pro 10.1 also improves overall stability and performance, and addresses the following issues:**

- Loading a library from a SAN is significantly faster.
- You can eject drives once the libraries on those drives are closed.
- It is much easier to move clips with transitions in the timeline and lift them out of the Primary Storyline with transitions preserved.
- Clips can be trimmed completely out of a timeline when using the rolling trim function.
- Media management functions can be cancelled with undo.
- Quitting the application cancels background processes.
- 5.1 surround sound audio originating from a camera such as AVCHD will no longer be down-mixed to stereo during import.
- If you have transcoded RED RAW files to ProRes through a third-party application, you can relink to the original RED files within Final Cut Pro.
- Transform correctly maintains linear motion on all keyframes.

---

### Final Cut Pro 10.0.9

- Addresses issues resulting in green artefacts when using Sony XAVC media.
- Fixes several issues related to interlaced media and retimed segments, which could cause exports to fail.
- Includes stability improvements.

---

### Final Cut Pro 10.0.8

- Support for Sony XAVC codec up to 4K resolution.
- Option to display ProRes Log C files from ARRI ALEXA cameras with standard Rec. 709 colour and contrast levels.
- Resolves an issue where some third-party effects generated green frames during render.
- Resolves performance issues that could occur with certain titles and effects.
- Time-reversed clips render in the background.
- Ability to use key commands to adjust Clip Appearance settings in the timeline.
- Ability to view reel number metadata located in the timecode track of video files.
- Mono audio files in a surround project export with correct volume levels.
- Drop zones no longer reset to the first frame of video after application restart.
- Fixes a performance issue that resulted from selecting multiple ranges on a single clip.
- Fixes an issue where the Play Around function did not work properly on certain clips when viewed through external video devices.

---

### Final Cut Pro 10.0.7

- The Letterbox effect Offset slider is restored.
- Fixes an issue that could occur when creating a single-layer DVD.
- Fixes an issue in which some third-party effects could cause Final Cut Pro to stop responding during background rendering.
- Adds support for editing MXF files that are still ingesting.
- Fixes an issue with rendering Motion Templates containing Image Units.
- Fixes an issue with the display of the Modify RED RAW settings button in synchronised and compound clips.
- Fixes an issue with the upload of clips that are larger than 1GB to Vimeo.
- Fixes an issue in which an incorrect frame size is used with filters on two adjacent clips with different pixel aspect ratio.

---

### Final Cut Pro 10.0.6
- Expand multichannel audio files directly in the timeline for precise editing of individual audio channels.
- Unified import window provides single interface for transferring media from file-based cameras, networks and folders of files. Choose between Filmstrip and List views for browsing media, and save frequently used locations to the Favourites sidebar for fast access.
- Redesigned Share interface for streamlined exporting. Deliver to multiple destinations in one step by creating a custom Bundle.
- Export a selected range in the Event Browser or the project timeline.
- RED camera support with native REDCODE RAW editing up to 5K and optional transcode to Apple ProRes 4444 or ProRes Proxy. Ability to adjust RAW images with debayer controls directly in Final Cut Pro.
- MXF plug-in support that allows you to work natively with MXF files from import through to delivery using third-party plug-ins. This is ideal for importing archived media with custom metadata and exporting media with metadata to an asset management system.
- Dual viewers, each with a video scope display, let you compare shots to match action and colour. Scopes include a vertical layout option so they can be displayed below the Viewer and the Event Viewer.
- Ability to add chapter markers in the timeline for export to video files, DVD and Blu-ray disc, with an option for setting custom poster frames.
- Range selection now preserves start and end points on clips in the Event Browser. Use the Command key to create multiple range selections, even on a single clip.
- Paste attributes window lets you choose specific effects to copy between clips.
- Flexible Clip Connections allow you to keep Connected Clips in place by pressing the ` key when slipping, sliding or moving clips in the Primary Storyline.
- Add a freeze frame to your timeline with a single keystroke (Option-F).
- Apply a drop shadow effect with intuitive on-screen controls to adjust position, edge falloff, angle and more.
- Combine audio from different angles within a Multicam Clip (Command-Option-click in the Angle Viewer).
- Compound Clip creation in the timeline now saves the clip in the Event Browser for re-use in other projects. Changes to the original Compound Clip will update all copies of that Compound Clip across projects. The Reference New Parent Clip command allows you to select any Compound Clip in the timeline and save a duplicate to an event in a single step.
- XML 1.2 features improved metadata import and export for richer integration with third-party apps.
- Blade All command allows the blade tool to cut across all storylines and connected clips in a single click. Press Shift while blading to blade all.
- Select a new default transition by Control-clicking on the thumbnail in the Transitions Browser and choosing Make Default. The default transition can be applied to any clip by pressing Command-T.

**Final Cut Pro 10.0.6 improves overall stability and performance, and adds these fixes:**

- Background Rendering uses the GPU on the graphics card, enabling CPU-based processes such as transcoding and proxy creation to continue uninterrupted while effects are rendering.
- Loop Play with Play Selection enabled will continuously loop playback while making adjustments in the Inspector.
- DSLRs and other cameras that use the Picture Transfer Protocol (PTP) for data transfer will now appear in the Import window when directly connected to the computer.
- Improves system performance and smaller project sizes when working with Compound Clips.
- Clicking on a clip in the timeline selects the clip without moving the playhead. Option-clicking on a clip selects the clip and moves the playhead.
- Custom metadata views can be created and used as presets for exporting XML. Importing XML with custom metadata fields preserves data in Final Cut Pro.
- Ability to manually tag clips as anamorphic using the Anamorphic Override option in the Inspector.
- When duplicating an event or project where media resides on shared storage, only the links will be copied. This speeds up duplicating or moving events and projects to another editing station that is linked to the same shared media.
- Improves behaviour when moving clips to different vertical positions in the timeline.
- Generators now support the 1.8:1 aspect ratio, which is used with a range of frame sizes.
- Video dissolves now default to the linear Video look instead of the Film look that includes some ease in and ease out.
- Ability to import SDII audio files.

---

### Final Cut Pro 10.0.5

- Final Cut Pro 10.0.5 improves overall stability and is enhanced for the MacBook Pro (Retina, Mid 2012).
- Fixes an issue in which changes were not properly saved when working off an SAN.
- Improves performance when switching between projects on a SAN.
- Fixes an issue that could lead to Multicam Clips losing their Roles after relaunching Final Cut Pro.
- Allows for YouTube uploads longer than 15 minutes.
- Correctly marks in and out points for spanned clips imported using the Sony Camera Import Plug-in PDZK-LT2.

---

### Final Cut Pro 10.0.4

- Improves image quality and responsiveness of broadcast monitoring with compatible third-party PCIe and Thunderbolt I/O devices.
- Improves performance of multicam syncing and editing.
- Adds language support for Simplified Chinese.
- Adds a Share option for 1080p video on compatible iOS devices.
- Final Cut Pro 10.0.4 also addresses the following issues:
- Assigns stereo as the default audio channel setting for new projects.
- Includes multicam metadata in XML project export.
- Fixes an issue in which video superimposed over a background with an alpha channel could appear differently in Viewer before and after render.
- Fixes an issue that caused some titles to be rendered again after each application launch.

---

### Final Cut Pro 10.0.3

- Multicam editing with automatic sync and support for mixed formats, mixed frame rates and up to 64 camera angles.
- Advanced chroma keying with controls for colour sampling and edge quality.
- Media relink for manual reconnect of projects and Events to new media.
- Ability to import and edit layered Photoshop graphics.
- XML 1.1 with support for primary colour grades, effect parameters and audio keyframes.
- Multiple improvements to the Colour Board, including new key commands, editable numeric fields and adjustable parameters that act like infinite sliders when dragged.
- Ability to reorder colour corrections in the Inspector.
- Reveal in Event Browser shows clip range in the filmstrip while in List View.
- Batch offset for clip date and time.
- Ability to search text added to Favourite and Reject ranges.
- Beta version of broadcast monitoring with third-party PCIe and Thunderbolt I/O devices.
- Final Cut Pro 10.0.3 also improves overall stability and performance, and addresses the following issues:
- Improves performance when editing text in titles.
- Improves performance when applying an effect from the Effect Browser.
- Improves keyframing behaviour in the Inspector, with keyframes automatically added when moving to a new point in time and adjusting a parameter.
- Modifies transition behaviour so that all newly added transitions use available media and maintain project length.
- Fixes an issue that affected audio solo while skimming.
- Resolves issues related to using Synchronise Clips with media containing a silent audio channel.
- Fixes an issue in which constant speed retiming was not properly applied when using the Paste Effects command.

---

### Final Cut Pro 10.0.2

- Fixes an issue in which a title may revert to the default font after restarting Final Cut Pro.
- Resolves an issue that could cause files recorded with certain third-party mobile devices to play back incorrectly.
- Addresses a stability issue caused by changing the start time on a Compound Clip.

---

### Final Cut Pro 10.0.1

- Export audio and video stems as a single multitrack QuickTime movie or as separate files using Roles.
- Import and export XML to support third-party workflows.
- Place Projects and Events on Xsan to improve collaboration between editors.
- Set custom starting timecode for your projects.
- Add transitions to connected clips in a single step.
- Enable full-screen view in OS X Lion.
- Speed up delivery with GPU-accelerated export.
- Access the new Tribute theme with four animated titles and a matching transition.
- This update also improves overall stability and performance, and addresses the following issues:
- Adds the ability to import DSLR video from Aperture and iPhoto libraries through the Photos Browser.
- Adds the ability to eject camera cards while Final Cut Pro is open.
- Adds the ability to always use the startup volume or Time Machine volumes for media storage.
- Improves audio syncing performance and the ability to sync different frame sizes and frame rates.
- Fixes an issue in which alpha channels in transitions were not properly preserved.
- Resolves an issue that could cause titles to accidentally move in the timeline.
- Improves the quality of video retiming when applying slow motion or when working with interlaced video.
- Fixes an issue in which custom ICC colour profiles affected the image in the Viewer.
- Improves the performance and reliability of automatic saving.
