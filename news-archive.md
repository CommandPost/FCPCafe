# News Archive

!!!warning Sponsored
_Advanced Keyframes + Text-based Editing + BRAW + Gyro Stabilisation + Email Comments + iCloud Sharing + MORE!_\
Get all of the **LateNite** Tools on the [Mac App Store](/latenite/#pro-editor-bundles) today!
!!!

---

# 2026
## July

### [2nd July 2026](/news/20260702)

Happy July! 🥳

Yesterday was a big day for Apple with updates across their **Apple Creator Studio** suite of products.

The [official press release](https://www.apple.com/au/newsroom/2026/06/apple-creator-studio-gets-smarter-faster-and-more-connected/) explains:

> **Apple Creator Studio gets smarter, faster and more connected** \
> Updates bring new integrations with Pixelmator Pro across Final Cut Pro, Keynote, Pages and Numbers; even more intelligent tools in Final Cut Pro; the ability to generate shapes to further customise a project; and a new Producer Project in Logic Pro

Given there's so many talented creators that get early access to the Final Cut Pro update prior to launch, I didn't bother to rush out a post yesterday, but instead spent the day cutting on Final Cut Pro 12.3 on a real-world job to see how it goes.

Good news - it was rock solid, I didn't run across any issues, and actually used a bunch of the new features, such as **Detect Edits**, and the new **Super Highlights** control in the Color Adjustments effect.

However, as there are user interface changes, and an updated **FxPlug v4.3.5 SDK**, developers may have to make changes to make 3rd party plugins work correctly with the update - for example, I need to make some changes to [CommandPost](https://commandpost.fcp.cafe) for certain features.

Despite the new features, there's no update to FCPXML - it's still on **FCPXML v1.14**. There's also no changes to the Workflow Extensions SDK.

This release is great one. It has a bunch of incredibly useful features, yet it doesn't bloat the user interface, or complicated things - it's just a bunch of incremental improvements that simply make Final Cut Pro better.

Interestingly, it seems like the Vision Pro team is working very closely with the Compressor team, as there's lot of bugs fixes and enhancements for Immersive workflows.

I'll post more about the Final Cut Pro update over the coming weeks, as I really put it through it's paces.

In the meantime...

**Iain Anderson** wrote a great [blog post on ProVideo Coalition](https://www.provideocoalition.com/surprise-its-final-cut-pro-12-3/) about the Final Cut Pro update.

In terms of YouTube videos talking about the update, you can't go past:

- [Ripple Training](https://www.youtube.com/watch?v=aQck6TQf1wQ)
- [POST-PROfessionals](https://www.youtube.com/watch?v=fVhRqFopgq0)
- [Dylan Bates (The Final Cut Bro)](https://www.youtube.com/watch?v=r1vZW_zmQ3I)
- [Matthew O’Brien](https://www.youtube.com/watch?v=ZdRCpTGYGm4)

**Alex "4D" Gollner** also wrote a [blog post on his website](https://alex4d.com/apple-creator-studio/item/final-cut-pro-12-3-and-summer-apple-creator-studio-updates) with links to many articles and videos.

The official release notes state:

**Final Cut Pro v12.3** includes these features, enhancements, and fixes:

**Powerful intelligence features:**
- Use Generate Captions to quickly add subtitles and easily customize their look to create accessible, ready-to-share content for social media and video platforms. (Requires a Mac with Apple silicon, available in U.S. English only).
- Isolate recognized objects with Auto Mask to effortlessly color correct or enhance your video, eliminating the need for manual tracking.
- Match your video's color across different cameras, lighting conditions, and cinematic styles with the all-new Match Color tool, unifying the look of your timeline.
- Analyze any rendered video with Edit Detection to reveal its shot changes and automatically split it into separate clips with just a click.

**Workflow Enhancements:**
- Accurately fine-tune your edits with a persistent two-up display that stays locked in view while you're trimming in the timeline using keyboard shortcuts or with the Precision Editor.
- Send any frame directly to Pixelmator Pro with one click, streamlining your workflow for custom thumbnails and social media graphics.
- Instantly swap clip positions in the primary storyline with a new keyboard shortcut for faster editing.
- Easily copy and paste complex edits across timelines with a new option to select a primary storyline clip and all its connected media simultaneously.
- Proxy media is now generated using HEVC instead of H.264, for improved compression efficiency and HDR support.
- Background rendering is now set to Off by default.
- Easily convert existing closed captions to subtitles.
- Quickly select all subtitles with a single command.
- Adjust the position, rotation, scale, alignment, and other parameters for multiple selected subtitles at once from the inspector.

**Bug fixes:**
- Fixes an issue that could cause segmented RAW media files to not open if the original media was copied into the library first.
- Fixes an issue that caused mixed photo and video assets recorded in a different time zone to be sorted incorrectly by creation date in the browser.
- Fixes an issue that could cause Final Cut Pro to quit when exporting more than one project using the Export File preset.
- Fixes an issue that could cause a damaged library alert to appear.
- Fixes an issue that caused proxies generated from Canon Log and other log-encoded formats to have a noticeable color tint.

**Compressor v5.3** includes the following enhancements and fixes:

- View immersive, temporal, and dynamic metadata before encoding with the new immersive metadata viewer.
- Encode 180º video to view on Apple Vision Pro with 180º Apple Projected Media Profile (APMP) support.
- Preview stereoscopic video with a new anaglyph view option
- Added a 5.1 AAC audio option to Apple Device export settings.
- Added support for data rate limits when encoding to HEVC with Apple silicon devices.
- Added support for transcoding immersive sources without WAV file to Apple Immersive outputs.
- Fixes an issue where changes to the camera log menu in the inspector could not be undone.
- Fixes an issue where changing field order, colorspace, or start timecode on a source file incorrectly reset the spatial metadata.
- Fixes an issue where dragging certain files from Photos into Compressor resulted in an unusable job with an erroneous "A media extension is missing or turned off" message.
- Fixes a crash that occurred when previewing a setting applied to a job whose source file was previously missing but had since become available.
- Includes stability and performance improvements.

**Motion v6.3** includes the following features, enhancements, and fixes:

- Import SVG files that scale to any size and keep graphics razor-sharp at any resolution.
- Take command of your timeline with intuitive new controls that let you instantly stagger, cascade, or reverse clips to build complex animations in seconds.
- Work faster and stay focused with performance updates that keep your workflow fluid and responsive.
- Fixes an issue where 3D Motion templates appeared flat in Final Cut Pro.
- Fixes a crash that could occur when adjusting Object Tracker regions.
- Fixes a crash related to shape onscreen controls during playback.
- Fixes a crash that could occur when using the Keyer's color selection control in the inspector.
- Fixes an issue where changes made to keyframe timing for third-party FxPlug effects in the timeline were lost when the project was closed.
- Fixes a regression where high-value keyframes were cropped at the top edge of the Keyframe Editor.
- Fixes an issue where saving a project in a vertical snapshot would offset the anchor point of a title background by 1 pixel with each save.
- Fixes an issue where dragging to select vertices on a Bezier Mask did not work.
- Fixes an issue where 3D text and particle emitters occasionally used the wrong texture media during playback.
- Fixes an issue where some color correction filters rendered visibly brighter on macOS 26 than on previous releases.
- Includes additional stability and performance improvements.

**FxPlug v4.3.5** contains the following changes:

- Improved stability and reliability.
- FxPlug SDK requires macOS 13.0 (Ventura) or later.
- Fixed a crash when the user deletes a plugin during analysis.
- Fixed a crash in the parameter handler due to an assertion failure.
- Fixed an issue with FxRemoteTiming where plugin was retrieving the incorrect value for start time of the input.
- Fixed a crash in setStateForPlugIn caused by a lifetime issue with the mutex.
- Fixed an issue where FxPlugs could render incorrectly after the length of the MotionEffect is changed by the user when resizing the clip, title, transition, or generator in the timeline.
- Fixed a potential hang when cancelling an analysis.
- Fixed a texture resolution discrepancy between FCP 12 and FCP 11.1.1 where frames were larger than expected.
- Added a new method to FxTimingAPI that allows plug-ins to detect whether the timeline is using drop-frame or non-drop-frame timecode.
- Fixed an issue where drop zones feeding auxiliary images to FxPlugs always used the first frame regardless of the selected frame.
- Fixed a crash in Final Cut Pro related to nested parameter change handling.
- Improved responsiveness of FxPlug on-screen controls in Final Cut Pro 12.

In other news, **ScriptStar v1.6.0 (Build 31)** is out now with the following improvements:

**🔨 Improvements:**
- **File-based transcription**
 - If you drag one or more audio or video files from the Finder (not FCP) to the ScriptStar window, they will be locally transcribed using your chosen model. This lets you create a transcription (PDF/DOC/CSV) or SRT for any file, including output from FCP or any other app.
 - ScriptStar can now be used as a transcription tool without Final Cut Pro.

- **Length limits**
 - You can define the maximum number of characters or words in ScriptStar's output.
 - This applies to transcripts sent back to FCP as Named Favorites (or Notes on Keywords) as well as the limits for SRTs.
 - Controlling the  maximum number of characters or words in each line sent back to FCP allows you to control their width, making it easier to work with a smaller Browser.
  - Please note, because each line of dialogue must be separated from the next by at least one frame, we advise keeping this value above 80 characters to avoid too many discontinuities.
 - Controlling the maximum number of characters or words in an SRT caption file can be set as low as one word per caption.
 -   This allows you to make sure your captions aren’t too long to be read, and also to use tools that convert FCP captions or SRT files to burned-in word-by-word captions.

 You can download and learn more on the [ScriptStar website](https://scriptstar.fcp.cafe).

Thanks team!

 ---

**FCP Library Cleaner v0.8.2** is out now with the following changes:

- External Drives: Fixed an issue that prevented libraries from being cleaned properly on exFAT external hard drives.
- Responsiveness: Reduced UI freezes during slow file operations by improving how background tasks are handled.
- File Operations: Refactored internal I/O handling to improve robustness, performance, and error handling across the app.
- Missing Files: Stopped reporting missing files that are not relevant.
- User Interface: Added small interface improvements, including additional tooltips and loading indicators.
- Translations: Added Italian and Vietnamese translations to make the app accessible to more users.
- Translations: Fixed an issue where unsupported languages could display German instead of English.

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/fcp-library-cleaner/id6499542720).

---

**Media Sync Tool v2.0** is out now with the following changes:

- Meet the ground-up reinvention of Media Sync Tool!
- A brand-new interface, a sync engine rebuilt from scratch, and the biggest addition yet — automatic clip logging.
- Log clips automatically — import the script supervisor's continuity report (CSV) and skip manual data entry entirely.
- A rebuilt sync engine - faster, more reliable, and overlapping timecode now resolves itself automatically.
- A fresh new look — a Liquid Glass redesign that feels right at home on your Mac.
- More control over your sync - MOS, wildtracks, and unmatched takes, each under their own keyword.
- Automatic iXML track naming - your boom, lavs, and mix come in as named audio subroles, no relabeling by hand.
- And hundreds of bug fixes — no more hiccups, no more workarounds.
- Thanks for syncing with us.

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/media-sync-tool/id1559556642).

[!button text="Discuss this news item" variant="info"](news/20260702/#discuss-this-page)

---

!!!warning Sponsored
**Jump to the best parts of editing.**\
A powerful machine learning search engine for your footage.\
**_No clouds. No uploads. All on device._**\
Read the origin story on [FCP Cafe](/news/20241106/) or [download a free trial](https://getjumper.io/?ref=fcpcafe)!
!!!

---

## June

### [28th June 2026](/news/20260628)

Happy Sunday! 🥳

And just like that... a month completely disappeared, and now it's nearly the middle of the year. 🤯

My sincerest apologies for the radio silence over the last month and a bit!

I had a few interstate work trips, some crazy busy periods, and just general life chaos, so the month got away from me. Sorry team!

As July rapidly approaches, I'll try go back to more regular posting over the coming days and weeks.

To bring you up to speed...

We have a new **Developer Case Study** on the website about [First Rush](/developer-case-studies/first-rush)! Thanks heaps Jinkyu!

**BRAW Toolbox v3.1.4** is out now with the following improvements:

**🔨 Improvements:**
- We've made some changes to how "Better Performance" mode works for the Media Extension in Final Cut Pro which improves quality and performance in some cases. Thanks for your help and support Final Cut Pro team!

You can download and learn more on the [BRAW Toolbox website](https://brawtoolbox.fcp.cafe).

The feedback from the BRAW Toolbox Media Extension has been really great - people love that you can now just drag-and-drop BRAW files directly into Final Cut Pro, and treat them like regular QuickTime files.

Over the coming weeks and months, I'm going to continue to work on some Immersive improvements to BRAW Toolbox - stay tuned!

**Keyframe Toolbox v1.4.0 (Build 55)** is also out now with the following changes:

**🔨 Improvements:**
- **Keyframe Toolbox 360 Reframe** has been added. Thanks for requesting, many people! Please read and follow the Quick Start instructions in the effect or shown below before using it.
  - To reframe 360° footage, you'll apply the new, dedicated effect: **Keyframe Toolbox 360 Reframe**. If you don't see it, please run the Keyframe Toolbox app, then restart FCP.

  - **QUICK START INSTRUCTIONS** — to work correctly, this effect needs to sidestep FCP's native 360° processing. To get started:
    1. Using your camera manufacturer's tools, process your original 360° camera footage into equirectangular (panoramic) format.
    2. Import the equirectangular clips into FCP, then select them in the Browser.
    3. In the Info Inspector, set the *Projection Mode* to *Rectangular* (not Equirectangular).
    4. Add your 360° clips to a regular (not 360º) timeline and set *Spatial Conform* to *Fill*.
    5. Add the Keyframe Toolbox 360 Reframe effect to your 360° timeline clips.

  - Standard Keyframe Toolbox graph controls can be used with a new set of properties, including Pan, Tilt, Field of View and Roll. Additionally, Opacity, Distortion and Blur can be added in Settings.
  - A new Projection button at the top switches between five ways to reframe your footage:
    - **Rectilinear** will never curve a straight line, but allows Field of View up to 180°.
    - **Wide/Panini** is a cylindrical view that allows a Field of View up to 220°.
    - **Fisheye** allows more distortion around the edges of frame, and allows a Field of View up to 360°.
    - **Stereographic** is the default projection, and it allows smooth transitions between a normal Field of View and (if Pan is adjusted down) a Tiny Planet-style view.
    - **Tiny Planet** is a stereographic projection with a Tilt and Field of View offset to make it easier to achieve this effect — it defaults to looking down, with a wider FOV.
    - In each Projection, Field of View is interpreted slightly differently, and each has different Distortion parameters behind the scenes too.
   - To animate smoothly between perspectives, choosing the Stereographic projection and recording keyframes on the Field of View property is usually enough. However, if you want more control, consider also animating the Distortion parameter. This graph is disabled by default, but can be enabled in Settings.

 - **New keyframes now maintain existing curves more closely**.
   - Previously, newly added keyframes defaulted to linear, unless Command was held. Now, if the new keyframe is along a curve, it will be created with handles that maintain that curve.
   - While creating a new keyframe in the OSC, you can still hold Command or Option to force new flat handles to be created.
   - If you want a linear keyframe, it's still easy to Command- or Option-click on a keyframe to remove its handles.

- **The Keyframe Toolbox effect now uses a more flexible height**.
  - The Inspector will always maintain enough space for all visible graphs to be shown at standard size.
  - Graphs can still be minimized to make more room for larger graphs, but minimized graphs will be returned to standard size next time the effect is loaded. If any graphs are expanded, they will remain expanded.
  - To force the Inspector to update, simply select any other clip, then reselect a clip with Keyframe Toolbox.
  - In some rare situations, when most graphs were hidden and are then all made visible at once, there may not be enough space to show the header and the graphs in the limited space available. This is temporary. Simply select any other clip, then reselect the clip you want to work on, and the Inspector will return to normal.

**🐞 Bug Fixes:**
- An issue with incorrect Position values being shown in Better Performance mode has been fixed.
- Linking keyframes is now more reliable and resilient.
- Previous/next keyframe buttons in the OSC are more reliable.
- Keyframes now light up (when the playhead is over them) more reliably.
- Performance improvements have been made to the regular Keyframe Toolbox effect. If you ever experienced a delay when loading a timeline with multiple instances of Keyframe Toolbox, this has now been improved.
- Potential issues with very large images have been resolved. Note that Keyframe Toolbox is now limited to images no larger than 8500px across.

This is a big update! You can download and learn more on the [Keyframe Toolbox website](https://keyframetoolbox.fcp.cafe).

You can also watch **Iain Anderson** talk about Keyframe Toolbox on [Final Cut Grill](https://www.youtube.com/watch?v=u2csDy7tnwk):

[![](/static/iain-anderson-fcp-grill.jpg)](https://www.youtube.com/watch?v=u2csDy7tnwk)

In **Jumper** news, the team has also been working on a big update, that's nearly ready to launch!

![](/static/jumper-june-update.png)

Max writes on the Jumper Discord:

> We have a pretty big update we're about to release, which includes some much requested features like:
>
> - **Adding custom tags:** ability to create add custom tags to search results segments or whole clips, and use them in searches, e.g. combining them with people search and regular visual searches. Tags exist as personal or shared "Tag Collections". They have support for commenting on individual items, adding color markers, sorting, searching, etc.
> - Everyone using the same analysis folder on a team has access to the shared Tag Collections inside it, and can modify them by adding comments, markers, new clips, etc.
> - Personal tag collections are user-only, and can probably be used as a kind of "bookmarks" or an ephemeral "working area"?
>
> - Ability to specify one or several audio channels for transcription (if mulitple channels, we do a "smart merge" to de-duplicate).
> This is something many have requested, and something that I don't believe any of the transcriptions in e.g. Premiere, FCP, or Resolve support?
>
> - Added **speaker detection**, automatic speaker detection and the ability to name speakers in order to do speech search filtered to only things spoken by a specific person.
> Either auto-detect speaker count, or if you already know how many speakers there are, specify it in the transcription options for increased accuracy.
>
> - Added new **improved speech-to-text models**. This includes single-language fine-tuned models for:
>  - Japanese, state-of-the-art
>  - Swedish, state-of-the-art (shoutout my fellow alumni at Linköping University)
>  - Moroccan Arabic (Darija), state-of-the-art (shoutout @Youssef Toufik)
> - New model types coming in two sizes (faster vs more accurate) for: Chinese (with 20+ dialects support), Arabic, Hindi, Cantonese, Korean, Thai, Vietnamese, Filipino, Russian etc..
> - Faster analysis on all other languages on Windows with Nvidia GPUs

If you would like to test out this upcoming release, the best way to chat to the Jumper team is on their [Discord](https://discord.getjumper.io).

You can download a free trial of Jumper and learn more on the [Jumper website](https://getjumper.io/?ref=fcpcafe).

In other news...

**Dylan Bates (aka The Final Cut Bro)** has released an awesome new product called **DropHawk Pro** into the world.

You can try DropHawk Pro for free for 14 days, and it's also currently on sale, so now's a [great time to buy](https://fcbplugins.com/b/drophawkpro)!

You can watch the promo video on [YouTube](https://www.youtube.com/watch?v=0UtDuvGeoLA):

[![](/static/drophawk-pro-youtube.jpg)](https://www.youtube.com/watch?v=0UtDuvGeoLA)

You can buy and learn more on [Dylan's website](https://fcbplugins.com/b/drophawkpro) - there's currently lots of discounts and sales on the site, so it's worth checking out!

Whilst CommandPost has had Watch Folder support for years, it was never really a popular feature, and it was implemented fairly poorly.

There was a handful of people that loved and used CommandPost's Watch Folder support in some very bespoke and niche workflows, but for most users it was buggy and unreliable - so it never really took off.

Lots of tricks and techniques we use in other areas of CommandPost (and in our other paid products) never made it into the Watch Folder feature, so it was kinda just left dormant.

DropHawk Pro on the other hand is a super clean, slick and easy-to-use menubar application, that just works. It's simple - but powerful, and we highly recommend you take it for a test run!

Earlier in the month, Dylan also did a [YouTube video](https://www.youtube.com/watch?v=C0uK9dphNp0) on **SilenceScout**:

[![](/static/silencescout.jpg)](https://www.youtube.com/watch?v=C0uK9dphNp0)

The website reads:

> **Find and Remove Silence in Final Cut Pro and DaVinci Resolve Without Ever Leaving your Timeline.**
>
> SilenceScout is a silence and freeze-frame detection plugin for Final Cut Pro and DaVinci Resolve. Apply it to any clip, dial in the threshold and minimum duration, and click Process — your timeline is restructured automatically. No external app. No FCPXML or EDL export/import dance. Never leave your NLE. One license covers both Final Cut Pro and DaVinci Resolve.
>
> Other tools require you to leave your NLE, import media into a separate app, configure, process, export FCPXML or EDL, switch back, and import. That's too many steps across multiple apps, and you have to repeat it if you switch NLEs. SilenceScout does it all without ever leaving your timeline. In DaVinci Resolve, it also offers a live waveform preview — a visual feedback loop that standalone tools structurally cannot offer.

You can purchase and learn more on [FxFactory](https://fxfactory.com/info/silencescout/).

Dylan also appeared on **Final Cut Grill**, which you can watch on [YouTube](https://www.youtube.com/watch?v=-YYFQwgbVVs):

[![](/static/fcg-205.jpg)](https://www.youtube.com/watch?v=-YYFQwgbVVs)

Speaking of which, since I last posted on FCP Cafe, there's actually been quite a few **Final Cut Grill** episodes absolutely worth checking out!

[![](/static/fcg-204.jpg)](https://www.youtube.com/watch?v=-lN_lZf1sAU)

[![](/static/fcg-206.jpg)](https://www.youtube.com/watch?v=y44xQ-Mu-IU)

[![](/static/fcg-207.jpg)](https://www.youtube.com/watch?v=0yby9PPqWOA)

[![](/static/fcg-209.jpg)](https://www.youtube.com/watch?v=EFa05zW-M30)

[![](/static/fcg-210.jpg)](https://www.youtube.com/watch?v=jBN7x0WUkMU)

**Richard Taylor** recently recorded a live stream celebrating Final Cut Pro's birthday with Gabriel, Bill, Philip, Richard, Cirina and Brad.

You can watch on [YouTube](https://www.youtube.com/watch?v=MdOfWGDyLbM):

[![](/static/final-cut-tv-birthday.jpg)](https://www.youtube.com/watch?v=MdOfWGDyLbM)

---

**Sequence Shortener v1.0.3** is out now with the following changes:

- Stability improvements and cleaner Final Cut Pro imports

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/sequence-shortener/id6757253020).

---

**captionTranslator v1.0.6** is out now with the following changes:

- **New feature:** disable the Go button after clicking it

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/captiontranslator/id6737919696).

---

**MC Auto Cut v1.0.9** is out now with the following changes:

- Fixes a problem parsing a live Multicam from Final Cut Pro for iPad

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/mc-auto-cut/id6761138330).

---

**Captionator for Final Cut v2.2.1** is out now with the following changes:

- Multi-languages always assumed English, but it is now fixed to work correctly

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/captionator-for-final-cut/id1627843786).

---

**Creator's Best Friend v1.3.8** is out now with the following changes:

- Bug fix for a workflow extension crash

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/creators-best-friend/id1524172135).

---

**FinalCap Ultimate v1.3** is out now with the following changes:

- New Frutiger Metro based UI
- Use Compound Clips to upload audio straight from Final Cut Pro
- Save Presets for faster use

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/finalcap-ultimate/id6748661641).

---

**Cut Shelf v1.1.1** is out now with the following changes:

- Fixes a bug where clips dropped onto a shelf stored in an iCloud Drive folder could silently disappear after a refresh (offloaded iCloud files were mistaken for deleted ones).

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/cut-shelf/id6757250209).

[!button text="Discuss this news item" variant="info"](news/20260628/#discuss-this-page)

---

!!!warning Sponsored
_Tight. Terse. Terrific. Bim. Bam. Boom._ – Cut/daily reader<br />
Post Production insight delivered to your inbox.<br />
Sign up for **free** at [Cut/daily.com](https://www.cut-daily.com)
!!!

---

## May

### [20th May 2026](/news/20260520)

Happy Wednesday! 👋

The love continues for [Keyframe Toolbox](https://keyframetoolbox.fcp.cafe), which is nice! 🥰

The amazing and wonderful **Jenn Jager** has released an awesome video about Keyframe Toolbox on [YouTube](https://www.youtube.com/watch?v=t4n7wQKtHT0):

[![](/static/jenn-jager-keyframe-toolbox.jpg)](https://www.youtube.com/watch?v=t4n7wQKtHT0)

Creator of Keyframe Toolbox, the equally amazing [Iain Anderson](https://iain-anderson.com) has also written in-depth about [Why you should care about keyframe graphs](https://www.provideocoalition.com/why-you-should-care-about-keyframe-graphs/) over on **ProVideo Coalition**, which is definitely worth a read!

If you haven't yet looked into [Keyframe Toolbox](https://keyframetoolbox.fcp.cafe) and you're a Final Cut Pro editor, you absolutely should - Iain has worked really hard on the documentation on the website.

Unrelated, I watched [I'm Still Here (2024)](https://www.imdb.com/title/tt14961016/) at the cinema on Monday night, and it's such a beautifully crafted film. Highly recommended!

---

Mat X's **BackupTrust v1.4** is now available on the Mac App Store.

> BackupTrust backs up changing folders from your menu bar with hourly, daily, or weekly schedules, incremental copy, multi-destination support, and verification.
>
> BackupTrust is a macOS menu bar app for scheduled, incremental folder backup.
>
> Choose a source folder, add one or more destinations, and set an hourly, daily, or weekly schedule. BackupTrust runs quietly in the background and copies only files that are new or changed, helping protect active projects without repeating a full backup every time.
>
> BackupTrust is built for real working folders and supports locally mounted storage including internal drives, external SSDs, RAID volumes, network shares, NAS destinations, and other folders macOS can access.
>
> Features include:
> - Incremental backup for new and changed files
> - Multi-destination backup to multiple locations at the same time
> - Menu bar access with quick status, progress, and manual run controls Busy windows to defer backups during working hours
> - File filters for include-only rules, excluded extensions, hidden files, and file size limits
> - Directory exclusion presets plus custom exclusion rules
> - Conflict handling with overwrite, skip, or version-and-keep behavior
> - Mirror mode to remove destination files that no longer exist in the source Retention controls for stored previous versions
> - Optional post-copy verification for extra confidence
> - Preflight space warnings before a run
> - Notifications, logs, and diagnostics to help monitor backup health Optional overflow destination for oversized or long-filename files
> - BackupTrust is designed for users who want dependable background backups for project folders, media libraries, and other data that changes over time.

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/backuptrust/id6767965282).

---

**MC Auto Cut v1.0.4** is out now.

It contains the following changes:

- Improved user interface for selecting angles for each speaker

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/mc-auto-cut/id6761138330).

[!button text="Discuss this news item" variant="info"](news/20260520/#discuss-this-page)

---

!!!warning Sponsored
Native Blackmagic RAW support in Final Cut Pro.<br />
[Download BRAW Toolbox](https://brawtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [15th May 2026](/news/20260515)

Happy Friday! 👋

**MITOの하루** has released a fun little video on [YouTube](https://www.youtube.com/watch?v=yokr3IioYCk) about [Keyframe Toolbox](https://keyframetoolbox.fcp.cafe):

[![](/static/mito-keyframetoolbox-youtube.jpg)](https://www.youtube.com/watch?v=yokr3IioYCk)

I love this video - it's so fun, honest, and true to itself.

Speaking of videos, Apple has also invested in a bunch of commissioned Apple Creator Studios clips.

[![](/static/apple-creator-studio-commision-01.jpg)](https://www.youtube.com/shorts/554NS4IIRGQ)

[![](/static/apple-creator-studio-commision-02.jpg)](https://www.youtube.com/shorts/JMgzfIorID4)

[![](/static/apple-creator-studio-commision-03.jpg)](https://www.youtube.com/shorts/9swmN_LGVJo)

[![](/static/apple-creator-studio-commision-04.jpg)](https://www.youtube.com/shorts/jOUqLqlw39E)

You can read more on [9to5Mac](https://9to5mac.com/2026/05/14/apple-promotes-creator-studio-with-three-commissioned-pieces/).

Have a great weekend team!

---

**Cut Shelf v1.0.5** is out now.

It contains the following changes:

- Fix: joining shelves from LucidLink, iCloud Drive, Google Drive, and other shared volumes no longer fails with an "Invalid Folder" error.
- Press 9, to open Settings. New `Reveal in Finder` button next to iCloud Drive in Settings, and a new `Open iCloud Folder` command in the Cut Shelf app menu - both useful when iCloud Drive's sidebar doesn't surface the Cut Shelf folder.
- You can now delete shelves that still contain items - the confirmation dialog spells out the item count first.

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/cut-shelf/id6757250209).

[!button text="Discuss this news item" variant="info"](news/20260515/#discuss-this-page)

---

!!!warning Sponsored
Gyroscope Stabilisation in Final Cut Pro.<br />
[Download Gyroflow Toolbox](https://gyroflowtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [14th May 2026](/news/20260514)

Happy Thursday! 👋

We'll certainly be posting more about this in the coming weeks and months, but in the meantime...

> **Felipe Baez** — the workflow architect behind productions at Accenture, McKinsey, and HBO's Emmy-nominated Q: Into the Storm — joins the show to break down what's broken in today's editor tooling and why he founded Nuvon, a privacy-first cloud built as an honest alternative to the hyperscalers. We dig into the upcoming launch of Kinora, the importance of data sovereignty, and what the cloud giants keep getting wrong about creative work.

You can watch Felipe explain his new platform on [YouTube](https://www.youtube.com/live/6-P-_3rroVE):

[![](/static/felipe-baez-youtube.jpg)](https://www.youtube.com/live/6-P-_3rroVE)

I known Felipe for a very long time now, and he's helped me on MANY projects - he's one of the nicest, smartest and hardest working people in the industry, so when he comes out with something new, it's definitely worth paying attention to.

You can follow along on the [Kinora website](https://kinora.media).

Also out now is a new free tool for Final Cut Pro!

**Eric Lenz** writes:

> Final Cut Pro colorists have long struggled with LUT-based workflows that lock footage into Rec.709 too early, sacrificing dynamic range before any meaningful grading can happen. KOLOR's new Colour Space Transform plugin brings DaVinci Resolve-style colour space transformation natively to FCP. It supports all major cameras and is completely free.

You can watch Eric explain on [YouTube](https://www.youtube.com/watch?v=WLi1eiKug_U):

[![](/static/kolor-youtube.jpg)](https://www.youtube.com/watch?v=WLi1eiKug_U)

You can download and learn more on the [KOLOR website](https://kolor.company/colour-space-transform-plugin-for-final-cut-pro/).

Finally, a fun post... Someone on [CommandPost Discussions](https://github.com/CommandPost/CommandPost/discussions/3517) just posted some photos of using dual Blackmagic Speed Editors in Adobe Premiere Pro. 🔥

![](/static/dual-speed-editor.jpg)

![](/static/dual-speed-editor2.jpg)

To be honest, I don't really even remember building multiple Speed Editor support into CommandPost - and I don't think it's ever actually been tested until now. Very cool!

Onwards & Upwards!

---

**Creators Best Friend v1.3.7** is out now with the following bug fix:

- Critical bug fix for workflow extension failing to load

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/creators-best-friend/id1524172135).

[!button text="Discuss this news item" variant="info"](news/20260514/#discuss-this-page)

---

!!!warning Sponsored
_Tight. Terse. Terrific. Bim. Bam. Boom._ – Cut/daily reader<br />
Post Production insight delivered to your inbox.<br />
Sign up for **free** at [Cut/daily.com](https://www.cut-daily.com)
!!!

---

### [13th May 2026](/news/20260513)

Happy Wednesday! 👋

I'm currently up in Sydney on an editing job all week - so it's been go, go, go!

![](/static/sydney-2026.jpg)

**Mark Spencer** at **Ripple Training** has released an awesome new video course, [AI-Enhanced Workflows in Creator Studio](https://www.rippletraining.com/products/final-cut-pro/ai-enhanced-workflows-in-creator-studio/).

Definitely worth checking out!

In interesting industry news, MacRumours writes [Apple Bought Color Grading Tool Color.io in January](https://www.macrumors.com/2026/05/11/apple-color-io-acquisition/):

> Apple purchased a small, one-person company called Patchflyer back in January, according to new acquisition disclosures provided by the European Union. Patchflyer was owned by Jonathan Ochmann, who created Color.io, a web-based color grading tool popular with photographers and filmmakers.

I wasn't actually aware of Color.io personally - you can read more about it here:

- [Color.io on Wayback Machine](https://web.archive.org/web/20251211160331/https://www.color.io/)
- [20th April 2021 - CineD - Color.io Photon for 3D Color Grading Released](https://www.cined.com/color-io-photon-release-announcement/)
- [5th December 2023 - Color.io - Review and Tutorial](https://www.youtube.com/watch?v=-423w_hv4So)
- [16th December 2025 - CineD - Color.io Shutting Down – Popular Film Emulation and Color Grading Tool Goes Offline December 31](https://www.cined.com/color-io-shutting-down-popular-film-emulation-and-color-grading-tool-goes-offline-december-31/)

PetaPixel [writes](https://petapixel.com/2026/05/12/apple-has-acquired-popular-web-based-color-grading-tool-color-io/):

> Now all of that technology Ochmann built is part of Apple, as is Ochmann himself. It is reasonable to expect that, at some point down the road, at least some of the tools Ochmann built at color.io will be integrated into Apple’s own creative software, including, most likely, Final Cut Pro. However, many photographers found color.io’s tools intuitive and powerful for photo editing as well, so it would not be shocking to see integration in Photos or Pixelmator Pro, another of Apple’s recent major creative software acquisitions.

It'll be interested to see where Jonathan Ochmann ends up at Apple - maybe we'll see him on-stage at NAB?

I wouldn't be surprised if Apple uses his skills for the Photos app, and ProRAW workflows - we'll see.

**Final Cut Grill** Episode 203 is out now!

The description reads:

> Sam and I get pretty deep here and things get kind of philosophical. Sam asks “do you want to be 1984 or Star Trek”?
>
> Meeting Sam is one of my favorite NAB stories of all time and I’m so glad you get to meet him and hear from this inspirational guy. Sam is kind of famous for not so much thinking outside the box but ACTUALLY thinking ABOUT the box!

You can watch **This is so Fixable!** on [YouTube](https://www.youtube.com/watch?v=C_XZueqITio):

[![](/static/fcg-203.jpg)](https://www.youtube.com/watch?v=C_XZueqITio)

There's also some fun [YouTube Shorts](https://www.youtube.com/@finalcutgrill/shorts) on the channel.

You can find all the past podcast episodes on the [Final Cut Grill website](https://grill.fcp.cafe).

Some interesting things that have popped up recently...

**Ryan McCann** (CEO, Claris, an Apple company), writes [How Claris is building for what comes next](https://www.claris.com/blog/2026/how-claris-is-building-for-what-comes-next).

**MacPaw** writes, [Vibe-coded Mac apps are arriving fast — here is what gets lost in the process](https://hackernoon.com/vibe-coded-mac-apps-are-arriving-fast-here-is-what-gets-lost-in-the-process).

**Alex "4D" Gollner** writes on [LinkedIn](https://www.linkedin.com/posts/alex-4d_creator-studio-category-film-landscape-activity-7459613971365588992-fj_R?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAVQe00BED_arbD9zXel9tHXRnlUZRE3o1g):

> **New:** Apple promoting Apple software
>
> During a YouTube visit just now, I saw a new preroll advert for Apple Creator Studio.
>
> So what? I’ve seen Apple videos about Final Cut Pro and Logic on YouTube.
>
> Apple has posted public videos about their hardware and software for years. The official launch video for Apple Creator Studio has been watched over 547,000 times.
>
> But the advent of ACS has brought with it Apple spending money on marketing of a software service.
>
> One of the cutdown edits of the launch video has now been watched 26 million times:
>
> [![](/static/apple-creator-studio-ad.jpg)](https://www.youtube.com/watch?v=5rjjSgEOA38)
>
> It is unlisted and posted by Apple UK, which means it has been served as an ad 26 million times to people just in the UK.
>
> Another new development: Apple are spending time and money to promote ACS away from a specific update.
>
> The advert:
>
> [![](/static/apple-creator-studio-ad-2.jpg)](https://www.youtube.com/watch?v=-Jbus7LemY4)
>
> After years of Apple not advertising their creative apps, I’m very happy that they want to be seen to promote their tools.
>
> That was one of the requests we included in our letter to Tim Cook just over four years ago. 🤓

You can read more about the [Open Letter on FCP Cafe](/openletter/).

Finally, **BRAW Toolbox** has had a couple of updates since I last posted.

**BRAW Toolbox v3.1.2 (Build 88)** contains the following changes:

**🔨 Improvements:**
- The Media Extension now supports **Better Performance** mode in Final Cut Pro. Thanks for your help and support Final Cut Pro team!
- Up until the M5-series, Apple Silicon only supports a maximum of 16,384 pixel Metal textures, whereas the M5-series supports up to 32,768 pixels. Due to this and limitations with Media Extensions in Final Cut Pro, when working with Blackmagic RAW footage greater than 16K on machines older than the M5-series, BRAW Toolbox now forces a lower decode quality so that the footage can import and play. On an M5-series Mac, full decode quality is supported. This is only relevant for cameras such as the Blackmagic URSA Cine 17K 65.

**🐞 Bug Fixes:**
- Fixed a bug where Gyroflow stabilisation would only work on macOS 26.
- Fixed a bug where Gyroflow stabilisation would only work at full decode quality.
- Fixed colour space handling in Apple Compressor. Thanks for your help and support Final Cut Pro team!
- Fixed a bug where an Apple Immersive Video Universal (`.aivu`) file from the **Immersive Export** could fail to load on Apple Vision Pro due to unsupported audio formats.

**BRAW Toolbox v3.1.3 (Build 89)** contains the following changes:

**🐞 Bug Fix:**
- When using the **Immersive Export** feature, if you do an **Immersive Fade** at the of a clip, on a Apple Vision Pro, it would hold on the last frame of the Blackmagic RAW footage. We now apply a **Default Camera** for any non-Blackmagic RAW clips to fix this issue. Thanks Tim!

This is still very much early days for Immersive workflows in BRAW Toolbox - so expect lots more updates and improvements and we dig deep into Blackmagic Immersive and Vision Pro Immersive workflows.

You can learn more and download on the [BRAW Toolbox website](https://brawtoolbox.fcp.cafe).

---

**Cut Shelf v1.0.4** is out now with the following bug fix:

- Fixes a problem that prevented shelves being stored on LucidLink

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/cut-shelf/id6757250209).

[!button text="Discuss this news item" variant="info"](news/20260513/#discuss-this-page)

---

!!!warning Sponsored
Native Blackmagic RAW support in Final Cut Pro.<br />
[Download BRAW Toolbox](https://brawtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [8th May 2026](/news/20260508)

Happy Friday! 👋

And a **HUGE** happy birthday to the incredible **Sir David Attenborough** who turns 100 today! 🥳

This is one of my all time favourite photo collages:

![](/static/david-attenborough.jpg)

Whilst my brother was hanging out with David Attenborough, my sister was touring with Carrie Fisher. 🤯

Thank you Sir David Attenborough for EVERYTHING you've done for the world. Hopefully you live another decade - the world needs you!

Secondly, **HUGE** thank you to the over **4020** video editors who have purchased BRAW Toolbox since it's launch! 🥳

Back on 23rd December 2022, I launched **BRAW Toolbox v1.0.0 (Build 14) - Public Beta 1** into the world.

It was very incomplete, it was buggy, but it was on TestFlight, and it was working. It was a big deal just getting it past TestFlight App Review!

Lots of very smart people told me adding native Blackmagic RAW support to Final Cut Pro was impossible as a third party, but that didn't stop me.

It was a giant jigsaw puzzle, with a huge amount of complexity, because of the sandboxed nature of Apple's FxPlug and Workflow Extensions.

I spent **225 hours** developing version v1.0.0.

On 30th January 2023, **BRAW Toolbox v1.0.0 (Build 27)** hit the Mac App Store, and it was a success. Yay!

People LOVED the fact they could import Blackmagic RAW without having to create proxies or transcode.

They LOVED that you had full access to all the RAW controls, and unlike DaVinci Resolve, you can even keyframe the RAW controls.

It's been used on feature films, televisions series and high-end television commercials.

This was my first proper Objective-C application, the first time working with FxPlug, the first time dealing with the Mac App Store, the first time selling software.

I learnt a LOT.

On Wednesday 4th February 2026, I released **BRAW Toolbox v2.0.0 (Build 80)** into the world.

The release notes mention:

> This is a MASSIVE update. We've made HUGE changes under the hood to improve performance on Apple Silicon Mac's. BRAW Toolbox should now be faster and more stable than ever before. HUGE thank you to the amazing Anton Marini for all his help, guidance, genius and support! However, due to the sheer number of under-the-hood changes, we highly recommend making a ZIP of your current version of BRAW Toolbox before updating for safety, so that you can rollback if needed.

However, whilst it dramatically improved performance, it had a big bug/regression that I totally missed - due to caching, if you zoomed in to the footage, using the scale parameters in Final Cut Pro, you lost quality. Doh!

The most magical and wonderful part of the FCP Cafe community is everyone is patient, lovely and just plain awesome.

Despite this major bug, people were so understanding and patient, and anyone I spoke to quite happily rolled back to the previous version whilst I tried to fix things.

It took a lot longer than I hoped, but on Sunday 12th April 2026, **BRAW Toolbox v2.1.0 (Build 82)** hit the Mac App Store finally fixing this bug, whilst also adding better support for Blackmagic URSA Cine Immersive clips.

Then on Wednesday 22nd April 2026, I released **BRAW Toolbox v3.0.0 (Build 84)** into the world.

As you can tell from the build numbers, I had done a LOT of work between version 1 and version 3.

Every time there was a Blackmagic RAW SDK update, I was one of the first third party developers to update, test, and release - a lot of the time even beating DaVinci Resolve!

BRAW Toolbox v3 however brought with it something new - again, something that lots of very smart people told me was impossible to do as a third party - I added native Media Extension support.

Back on [20th November 2024](/news/20241120), I posted:

> Whilst Apple did announce at the 2024 Final Cut Pro Creative Summit that **Final Cut Pro 11** now supports the new macOS system-wide [MediaExtension Framework](https://developer.apple.com/documentation/mediaextension), and that Blackmagic will at some point release a Blackmagic RAW Media Extension - there is currently no time frame, so we have no idea if this is coming in days, weeks, or months.
>
> In [2023](https://x.com/chrisatlatenite/status/1667015417175625734) Apple announced a new framework called **MediaExtension**, that provides a means for developers to create format readers and video decoders for media that the system doesn’t natively support - such as **Blackmagic RAW** and **Nikon NRAW**.
>
> This was supposed to come in **macOS Sonoma**, but they silently killed it - only for it to reappear in this years WWDC for **macOS Sequoia**.
>
> Whilst it's been out for a while, the documentation is insanely complicated and limited and the only person I know who's done ANYTHING with it so far is the incredible [Anton Marini](https://x.com/_vade), who's been building an **ffmpeg** Media Extension over on GitHub [here](https://github.com/vade/FFMPEGMediaExtension).
>
> I originally started playing with and testing MediaExtension's both back in 2023, and during the macOS Sequoia beta's, but never made much progress, as Final Cut Pro 10.8.1 didn't support Media Extensions anyway.
>
> However, given there's no certainty as to when Blackmagic will release a Blackmagic RAW Media Extension, we're going to go back and see if we can bring a Blackmagic RAW Media Extension to market sooner rather than later.
>
> Apple announced 3rd party Motion Templates were "coming soon" to iPad at launch, and that functionality is still not out - so we don't really want to waste time waiting for something that could be a year away.
>
> We'll continue to keep you posted on our progress on FCP Cafe.

As you can see, I've been working on Media Extensions for a LONG time. I even contracted [Anton Marini](https://x.com/_vade) for a while to help me navigate the complexities of Media Extensions.

Eventually, after a lot of hard work, and a lot of swearing, I was able to get it working.

**BRAW Toolbox v3.0.0 (Build 84)**  was a MASSIVE milestone.

BRAW Toolbox was the first application in the world to bring an FxPlug to the Mac App Store.

Now BRAW Toolbox was the first application in the world to bring a Media Extension to the Mac App Store.

And just like with the original BRAW Toolbox release, once it was out there in the wild, getting tested on real-world feature films, televisions series and high-end television commercials, I started getting feedback.

Unfortunately, like with version 2, version 3 also had a big bug/regression that I totally missed - due to system resource limitations, after rendering 4096 frames, BRAW Toolbox would stop rendering new BRAW frames and just show black in Final Cut Pro. Doh!

No crashes, no errors - just black frames. Thanks to the amazing FCP Cafe community, I was eventually able to reproduce and fix in **BRAW Toolbox v3.1.1 (Build 86)**, which is out now.

BRAW Toolbox has certainly been an adventure, and I'm so proud that over **four thousand** Final Cut Pro professionals find it useful.

It's still entirely possible, and even likely that Blackmagic & Apple will release a free version of the Blackmagic RAW Media Extension at some point - and whilst Blackmagic engineers are probably the best in the business and do AMAZING things with DaVinci Resolve, they will never have access to some of the greatest minds in the Final Cut Pro community to test things out, and improve based on real-world feedback - so I would be VERY surprised if their version has the same level of polish and feature-set at BRAW Toolbox.

BRAW Toolbox v3 also moves forward towards deeper and better Immersive support - which is something that will definitely continue over the coming months.

We want Final Cut Pro to be just as powerful and useful for Immersive editing as DaVinci Resolve - which is a MASSIVE challenge and undertaking, but I'm up for the challenge.

So stay tuned... as we move towards BRAW Toolbox v4. Exciting times ahead!

![](/static/swell-11-years-ago.jpg)

Amazingly, it's been **11 years** since we built a bar entirely underwater for a music video for **American Doubles** track, **The Swell**. 🤿

![](/static/swell3.jpg)

This was an absolutely insane music video - with so many technical and creative challenges.

You can watch the finished clip on [YouTube](https://www.youtube.com/watch?v=BobK7ZC3afE):

[![](/static/swell-youtube.jpg)](https://www.youtube.com/watch?v=BobK7ZC3afE)

You can also watch a fun little behind the scenes video on YouTube:

[![](/static/swell-youtube-bts.jpg)](https://www.youtube.com/watch?v=evteZPWnG_o)

You can find the credits on the [LateNite website](https://latenitefilms.com/collaborations/american-doubles-the-swell/).

Yes, this was cut in Final Cut Pro by myself. It was graded by the incredible CJ Dobson at [Moodlab](https://moodlab.online).

As you've no-doubt released from FCP Cafe (especially if you've ever had a look at the old [Off-topic Rants](/blog/) - I'm a MASSIVE movie nerd. I love films.

This year, I've been a proud member of the [Croydon Film Society](https://www.croydonfilms.org.au), and I've already watched some AMAZING films:

![](/static/2026-film-list-small.jpg)

I've already talked about some of these films on FCP Cafe, but wanted to quickly mention the last one I saw.

The 2024 Documentary, [No Other Land](https://www.imdb.com/title/tt30953759/) is such a powerful and insanely well crafted documentary - I HIGHLY recommend you watch it.

A co-production between Palestine and Norway, the film was selected for the Panorama section at the **74th Berlin International Film Festival**, where it had its world premiere on 16 February 2024, winning the Panorama Audience Award for Best Documentary Film and the Berlinale Documentary Film Award. The film also won Best Documentary Feature Film at the 97th Academy Awards.

Despite this, it never had a major USA theatrical release.

Variety posted a very interesting article, [Palestinian, Israeli Activists Talk ‘No Other Land’ Doc on Eradication of Palestinian Villages and Hopes It Can Help ‘Find a Political Solution’](https://variety.com/2024/film/global/palestinian-israeli-no-other-land-doc-eradication-palestinian-villages-political-solution-1235910522/):

> First of all, Basal’s family and neighbors had a huge archive of videos that were filmed over the course of 20 years. And then we as activists, we were there on the ground together, working together for almost five years, and we filmed a lot. We had Rachel, the cinematographer and co-director of the film, who was shooting us. So there was an abundance of footage. The military entered Basal’s home twice and confiscated computers and cameras. So we were always very, very stressed. It was complicated logistically and quite stressful, but in the end we managed.

I also found this quote super inspiring from [Screen Daily](https://www.screendaily.com/features/no-other-land-filmmakers-on-making-palestinian-israeli-documentary-the-camera-is-the-one-and-only-tool-we-have/5199890.article):

> People ask a lot where I get the hope or strength,” says Adra. “I don’t know if it’s strength. It’s hard to talk about these things when living this reality. What keeps me moving is the community not giving up, we have a steadfastness facing these horrific conditions. We’re not strong, we don’t have hope and we don’t have power against this oppressive machine which is doing whatever it can to uproot us from our land. The camera is the one and only tool we have to show and document the evidence.

It's definitely worth checking out.

Until next time... Onwards & Upwards!

---

**Creator's Best Friend v1.3.6** is out now with the following bug fix:

- Bug fix for accessing XML in the Workflow Extension

You can learn more and download on the [Mac App Store](https://apps.apple.com/app/creators-best-friend/id1524172135).

---

**Library Slim v1.0.2** is out now with the following improvements:

- Improvements to app diagnostic logging

You can learn more and download on the [Mac App Store](https://apps.apple.com/app/library-slim/id6761352856)

[!button text="Discuss this news item" variant="info"](news/20260508/#discuss-this-page)

---

!!!warning Sponsored
Gyroscope Stabilisation in Final Cut Pro.<br />
[Download Gyroflow Toolbox](https://gyroflowtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [7th May 2026](/news/20260507)

Happy Thursday! 👋

It's release day at **FCP Cafe**! 🥳

**BRAW Toolbox v3.1.0** and **CorridorKey by LateNite v1.0.0** are out now on the Mac App Store! 🔥

This release of BRAW Toolbox has **MAJOR** under-the-hood improvements for the Media Extension in terms of playback performance.

The playback performance now more closely matches the legacy BRAW Toolbox Workflow Extension. It's not quite as good as DaVinci Resolve - but it's *super* close now.

I'm also continuing to explore more niche Immersive workflows.

You can now edit `16320x7200 90fps` side-by-side Blackmagic URSA Cine Immersive directly in Final Cut Pro, add Immersive transitions, export out a ProRes 4444 + FCPXML, then use BRAW Toolbox to create a `.aivu` (Apple Immersive Video Universal) file that you can watch in the [Apple Immersive Video Utility](https://apps.apple.com/app/apple-immersive-video-utility/id6477489398) and also AirDrop to your Apple Vision Pro!

![](/static/braw-immersive-export.png)

However, full disclosure, this is still **VERY MUCH** a work-in-progress proof-of-concept.

![](/static/braw-toolbox-immersive-player.png)

I don't expect anyone shooting on Blackmagic URSA Cine Immersive cameras to drop DaVinci Resolve today and start cutting in Final Cut Pro.

![](/static/braw-toolbox-immersive-fcp.png)

But it does help open a lot of workflows and possibilities.

Now if you own a Blackmagic URSA Cine Immersive camera, rather than having to fire up DaVinci Resolve to preview your Blackmagic RAW files, you can just press `SPACEBAR` in Finder, and use QuickLook.

If you want to preview a bunch of Immersive files on your Vision Pro, you can easily just throw the clips on a FCP timeline, export a ProRes and FCPXML, then use BRAW Toolbox to quickly create a `.aivu` (Apple Immersive Video Universal) file.

This is really just the beginning though... streaming from Final Cut Pro to Vision Pro is definitely something I'm experimenting with.

There's also a lot of features in DaVinci Resolve like masking and graphics/titles - that I need to solve in Final Cut Pro.

There's been a lot of discussion in the nerd media recently about how "Apple has given up on Vision Pro".

For example, MacRumors wrote [Apple Has Given Up on the Vision Pro After M5 Refresh Flop](https://www.macrumors.com/2026/04/29/apple-vision-pro-m5-flop/).

AppleInsider wrote [Rumored Apple Vision Pro team break-up isn't a death knell for the product](https://appleinsider.com/articles/26/04/29/rumored-apple-vision-pro-team-break-up-isnt-a-death-knell-for-the-product).

People **LOVE** to hate on the Vision Pro and Immersive. Especially Mark Gurman.

I don't personally own a Vision Pro, but I have used [Iain Anderson's](https://iain-anderson.com) at an airport, and I did get an amazing demo at Apple Park during the Final Cut Pro Creative Summit.

![](/static/chris-vision-pro.jpg)

Back on [14th November 2024](/news/20241114) I wrote:

> Yesterday, I mentioned that I saw something I wasn't allowed to talk about, but today it's out and I can finally talk about it!
>
> As part of my Apple Vision Pro Demo at Apple Park I was very lucky to watch a sneak peak of **The Weeknd: Open Hearts** on Apple Vision Pro.
>
> It's a new immersive music experience that features Canadian singer-songwriter The Weeknd, filmed in ultra-high resolution 180-degree Apple Immersive Video with Spatial Audio.
>
> You can watch a trailer here:
>
> [![](/static/fcpcs24-the-weeknd.jpg)](https://www.youtube.com/watch?v=AMGNe9_gD_0)
>
> It's insane. It was such an amazing experience on Apple Vision Pro.
>
> The most amazing part is that there's a section in the music video, where there's a lot of smoke from smoke machines.
>
> As someone who worked in live productions and concert lighting for many years, I've worked with smoke machines a LOT.
>
> When watching this music video in Apple Vision Pro, I could literally TASTE the smoke machines.
>
> My brain was apparently so convinced that what I was seeing was real, that it somehow triggered some prior memories and made me taste and feel something, that wasn't actually real.
>
> This is super interesting, and it's really something you need to watch on Apple Vision Pro to experience.
>
> The music video is amazing - it has some incredible visual effects, and the fact you can look around the frame is pretty amazing - the 2D trailer above really doesn't do it justice.
>
> If you get a chance to experience this epic music video in Apple Vision Pro, please do. You can watch it for free through the Apple TV app on Apple Vision Pro.

As someone who fricken LOVED Twisters in 4DX (my DREAM JOB is programming 4DX experiences) - you can watch a fun little video on [YouTube](https://www.youtube.com/watch?v=d67EV4YsjEY):

[![](/static/twisters-4dx.jpg)](https://www.youtube.com/watch?v=d67EV4YsjEY)

...I can absolutely see the appeal of Immersive video.

Needless to say, I think the rumours of Apple "giving up" on Vision Pro are simply that... dumb rumours.

Brenton Henry writes on his blog post, [Mark Gurman Has Been Burying the Apple Vision Pro Since Before It Shipped. I’m Out of Patience](https://www.frontrow.co/blog/mark-gurman-has-been-burying-the-apple-vision-pro-since-before-it-shipped-im-out-of-patience/):

> Mark Gurman has personally written some variant of "the Apple Vision Pro is dying" roughly every three months for the past three years. MacRumors has syndicated each one. 9to5Mac has helped — including one delicious case I'll come back to in a minute. AppleInsider has occasionally played referee. The story has been wrong every single time. It is wrong this time too. And the cumulative damage of three years of inaccurate obituaries is being paid by the thousands of developers, studios, broadcast engineers, surgeons, educators, and small-business operators trying to build companies on this platform — me included.

If you search for Vision Pro jobs on Apple's Jobs site - there's literally [600+ jobs listed](https://jobs.apple.com/en-us/search?search=vision+pro&sort=relevance&location=united-states-USA).

Apple is not giving up on Vision Pro. Blackmagic is not giving up on Immersive - in fact, if you watch Blackmagic's pre-NAB video, you'll see they're going more full-steam-ahead with Immersive than any other company in the world.

Dan Moren writes on Six Colors, [The Vision Pro: Not quite dead yet](https://sixcolors.com/post/2026/04/the-vision-pro-not-quite-dead-yet/):

> Now, I’m not privy to MacRumors’s sources but I’m going to say that I’m skeptical of this pronouncement. And I’m not the only one: Jonathan Wight, who worked in Apple’s AR/VR group until 2022, disputed the report on [Mastodon](https://mastodon.social/@schwa/116490616429431828), and that jibes with what I’ve heard privately.

John Gruber writes on Daring Fireball, [On the Future of Apple’s Vision Platform](https://daringfireball.net/2026/04/on_the_future_of_apples_vision_platform):

> It’s a strange thing for MacRumors to state so categorically something I believe has no truth to it whatsoever. And if there is *some* truth to it, it’s not what the article implies, which is that the whole thing has been shut down, somehow without the world knowing until now. Just two weeks ago John Ternus and Greg Joswiak were interviewed by Mark Spoonauer at Tom’s Guide, and [both spoke of a bright future for spatial computing](https://www.youtube.com/watch?v=kkBudtxgor0&t=746s). Joz describing Vision Pro as a product pulled into the present from the future is a good way of emphasizing the *yet* regarding a product — and category — that’s not there yet. Apple executives know how to give a non-answer answer to a question they don’t want to answer honestly. (Exhibit A: [Tim Cook “squashing” rumors that he was about to retire](https://daringfireball.net/2026/03/squashing) ... one month before he announced he was stepping aside as CEO.) The way Ternus and Joz were talking about the platform, and immersive content, *this month* was not lacking in enthusiasm. It was asking for patience.

I think Immersive is here to stay. I think the Immersive team at Apple is working as hard as every other department at Apple.

The Vision Pro is expensive, yes. But if you get to watch **The Weeknd: Open Hearts** music video on Apple Vision Pro, it'll blow your mind - it's incredible.

Whilst I don't imagine I'll be buying a Blackmagic URSA Cine Immersive or a Vision Pro anytime soon - I LOVE the idea of supporting Immersive filmmakers who WANT to use Final Cut Pro.

This is the key for me... I don't like the fact that people are FORCED to use DaVinci Resolve.

Whilst I absolutely LOVE Blackmagic, and especially Grant (you can read my previous [massive blog post about Blackmagic's history](/news/20260413/)) - I still strongly maintain that Final Cut Pro is just more fun to do creative editing with.

I'm sure eventually, we'll see **Vision Air** from Apple. It's just a matter of time.

It's also interesting to see what lays ahead for Apple, for example, [Tim Cook returned $1 trillion to shareholders. John Ternus is being given permission to keep it](https://thenextweb.com/news/apple-ternus-ceo-buyback-cash-strategy).

Alina Maria Stan [writes](https://thenextweb.com/news/apple-ternus-ceo-buyback-cash-strategy):

> Apple dropped its net cash neutral policy after seven years, signalling that incoming CEO John Ternus will have greater flexibility to invest in AI infrastructure and acquisitions rather than returning all excess cash to shareholders. The shift came alongside Q2 2026 results of $111.2 billion in revenue and a new $100 billion buyback, but analysts read the policy change as preparation for a more investment-led strategy.

Certainly interesting times ahead!

In the meantime...

**BRAW Toolbox v3.1.0 (Build 85)** contains the following changes:

**🔨 Improvements:**
- This release has MAJOR under-the-hood improvements for the Media Extension in terms of playback performance. The playback performance now more closely matches the legacy BRAW Toolbox Workflow Extension. It's not quite as good as DaVinci Resolve - but it's super close now. Thanks for reporting Dustin Painter & Robin! Thanks for your help Final Cut Pro team! Thanks for your ideas and suggestions AdrianEddy & Brian Elliott Tate!
- Gyroflow support in the Media Extension has also had MAJOR under-the-hood improvements. The results in the Media Extension should now exactly match the official Gyroflow application and Gyroflow Toolbox. Thanks for reporting mhbsavant! Thanks heaps AdrianEddy!
- The Media Extension now has the ability to read Gyroflow projects as sidecar files. If your BRAW file has a `.gyroflow` file with the same filename next to it, the Media Extension will use the Gyroflow settings from that file.
- There's a new **Immersive Export** feature in BRAW Toolbox. If you create a 16320x7200 @ 90fps timeline in Final Cut Pro and cut together Blackmagic RAW Immersive clips using the Media Extension, you can now export a ProRes and FCPXML, and use BRAW Toolbox to generate an Apple Immersive Video Universal (`.aivu`) file that can be loaded on the Apple Vision Pro.
- We now bundle two transitions in Final Cut Pro, **Immersive Fade** and **Immersive Cross Fade**, that don't do anything visually in your Final Cut Pro timeline, but tell the **Immersive Export** tool to apply transitions to these clips via metadata.

**🐞 Bug Fix:**
- The BRAW Toolbox v3.0.0 Media Extension was creating cache files that were not always correctly cleaned up - wasting hard drive space. This is now fixed. Thanks for reporting Iain Anderson & Christian Miranda!
- If the BRAW Toolobox v3.0.0 Media Extension was unexpectedly taking up hard drive space, please manually delete the `/Users/YOUR-USER-NAME/Library/Containers/com.latenitefilms.BRAWToolbox.FormatReader` and `/Users/YOUR-USER-NAME/Library/Containers/com.latenitefilms.BRAWToolbox.RAWProcessor` folders on your system to clean up the space.
- Fixed a bug where Blackmagic RAW clips were not displaying correctly in Apple Compressor. Thanks for your help Final Cut Pro team!
- The **Launch Final Cut Pro** button in the BRAW Toolbox application now works with Final Cut Pro Creator Studio (subscription) and the Final Cut Pro v11 free trial. Thanks for reporting Sebastian Leitner!
- Fixed a bug in the Final Cut Pro Workflow Extension, where the **Relink BRAW Clips within an LIBRARY / EVENT / PROJECT** Toolbox didn't support Final Cut Pro Creator Studio (subscription) or Final Cut Pro v11 free trial. Thanks for reporting Aldo!
- Reduced the application bundle file size by compressing a TIFF. Thanks for reporting Dmitry Lavrov!

You can download and learn more on the [BRAW Toolbox website](https://brawtoolbox.fcp.cafe).

As for CorridorKey by LateNite...

![](/static/corridorkey-by-latenite-icon.png)

**CorridorKey by LateNite** brings [Corridor Digital's](https://www.corridordigital.com) [CorridorKey](https://github.com/nikopueringer/CorridorKey) to Final Cut Pro. 🥳

This is **NOT** a fork. We've taken the blue and green CorridorKey models, converted them to MLX and built a completely new Swift & Swift UI engine powered by modern Apple frameworks. 🔥

Whilst there are already some great fork's of CorridorKey, such as [EZ-CorridorKey](https://github.com/edenaion/EZ-CorridorKey), none of them are purposely build for **Mac & Apple Silicon**.

It brings an Effect directly into **Final Cut Pro**, as well as a **Standalone Editor**.

Optimised for **ProRes** in and out with hardware decoding and encoding. 🏎️

It has been built for **Final Cut Pro** editors.

It gives you all the power of CorridorKey, directly in your Final Cut Pro timeline.

![Footage courtesy of Corridor Digital's Benchmark Test Footage](/static/corridor-key-build-4.png)

It has been built for **Apple Silicon Mac's**.

It makes full use of the GPU, Neural Engine, Metal and MPX - pushing the hardware to the max. 🔥

If you're working with ProRes or HEVC, it makes use of Apple Silicon's hardware encoders and decoders.

It uses Apple's [Vision Framework](https://developer.apple.com/documentation/vision) to use machine learning to "cut out" any foreground people, to use as a "hint" for CorridorKey.

![Footage courtesy of Corridor Digital's Benchmark Test Footage](/static/corridorkey-by-latenite.png)

**CorridorKey by LateNite v1.0.0 (Build 10)** contains the following changes:

**🔨 Improvements:**
- This is the first release on the Mac App Store! 🥳
- We now have a new icon, designed by the amazing [Matthew Skiles](http://matthewskiles.com)!
- Now runs on macOS Sonoma 14.6 or later (on Apple Silicon only).
- Increased the default window size for the Standalone Editor.
- Added a built-in default **Custom Image Background** of a castle for easier testing out-of-the-box.
- Combined two MLX render stages for slightly faster performance.

You can download and learn more on the [CorridorKey by LateNite website](https://corridorkeybylatenite.fcp.cafe).

And because it's a FREEZING day in Melbourne, here's some interesting videos I've come across to keep you warm and entertained:

Marques Brownlee shares [My Take on The New Apple](https://www.youtube.com/watch?v=i9TvUGeTltE):

[![](/static/my-take-on-the-new-apple.jpg)](https://www.youtube.com/watch?v=i9TvUGeTltE)

Matthew O'Brien shares [So How Do We Feel About Final Cut Pro?](https://www.youtube.com/watch?v=sVjszn23-eA):

[![](/static/how-do-we-feel-about-apple.jpg)](https://www.youtube.com/watch?v=sVjszn23-eA)

Jenn Jager shares [9 Time Saving (and Butt Saving!) AI Tools in FCP](https://www.youtube.com/watch?v=tF825ywlf8I):

[![](/static/time-saving-ai-tools.jpg)](https://www.youtube.com/watch?v=tF825ywlf8I)

I also came across this AWESOME project:

> We’re working on 3D Movie Maker Remastered, a browser-based community remake of Microsoft’s 3D Movie Maker from 1995.
>
> We already have an early editor prototype with characters, animations, depth-based backgrounds, timeline tools, onion skin, take management, and early video export.
> Long term, it could also grow into a lightweight tool for previs, storyboard animation, scene blocking, and 2D/3D animation/compositing.
>
> We’re currently looking for help with assets, especially backgrounds, characters, textures, rigging, animation, cutscenes, and general Blender/compositing work.
>
> It’s currently a community passion project, but if you’re into retro software, animation tools, or pre-rendered 90s workflows, feel free to reach out.
>
> Juls / 3DMM Remastered

I grew up on 3D Movie Maker - and I fricken LOVE it - so this is an awesome project!

You can learn more on their [website](https://phantomcrew.eu/3DMM/).

Finally, **FCG 203: Social Media Tutorial** is out now on YouTube:

[![](/static/fcp-grill-ep203.jpg)](https://www.youtube.com/watch?v=QZ9xCgDJI30)

There's also some fun [YouTube Shorts](https://www.youtube.com/@finalcutgrill/shorts) on the channel.

You can find all the past podcast episodes on the [Final Cut Grill website](https://grill.fcp.cafe).

---

**Sebastian Leitner** has released four free vibe-coded apps on his [website](https://sebastianleitner.com/apps/):

> **Make It BRAW**
> A small FCPXML/MLD tool that bulk-relinks .mov proxy edits (created externally) back to their original .braw media automatically. It also updates metadata in bulk so you can stay in FCP without loss of applied adjustments/effects – if you just installed BRAW Toolbox v3 but started the proxy edit without it before, that is.
>
> **Make It RELINK**
> An advanced and specialized tool designed for "impossible" relinking scenarios. While FCP's native relink command is strict—requiring nearly identical metadata (duration, format, audio channels), this app is for when you know the media is correct despite those differences. The app uses a "global replace" logic to bypass FCP's internal restrictions.
>
> **Make It Move**
> A simple tool for cloning used-media only, copying all source clips referenced in a project/edit to a new location. No need to give someone else 20 TB if you can hand over your actually used clips only. A much-needed step when working with multiple editors or transferring an edit to a different machine.
>
> **Make It SRT**
> A small but mighty subtitles utility for DCI workflows, which cleans and checks SRTs exported from an NLE or delivered by a transcription AI to make them SMPTE standard-compliant. It takes FPS conversions, character limits depending on resolution, and fixed time shifts into account. It also batch-extracts SRTs from given FCPXMLs.

You can hear him talk about them on Richard Taylor's YouTube channel:

[![](/static/richard-youtube-live.jpg)](https://www.youtube.com/live/GvR8NEb3OAA)

You can download and learn more on his [website](https://sebastianleitner.com/apps/).

---

**Tomislav Brdjanović** writes:

> Hey Final Cut Pro community!
>
> I'm a filmmaker and videographer with 23 years in broadcast television. I got tired of retyping timecodes on paper, so 1 built AVScript.
>
> What it does:
> - Mark IN/OUT points with JKL navigation
> - Transcribe footage with Al select text to set IN/OUT automatically
> - Story Al analyzes your project and suggests narrative structure
> - Export FCPXML 1.13 with full metadata directly into Final Cut Pro
> - Works on web, mobile and desktop
>
> New in v2 - MetaFlow:
> Import one FCPXML and get your entire project in FCP with transcripts, speaker tags, emotion markers and scene keywords. Already tagged. Already searchable.
> The core editor is free and open source.
>
> Looking for 10-15 people to test the workflow and tell me what's broken, what's missing, what doesn't make sense.
>
> First testers get 3 months Pro free. No credit card needed.
> Happy to answer any questions!

You can learn more on the [AVScript website](https://avscript.tv).

---

**Doza Assist v3.2.2** is out now.

> A pre-beta security release plus a Transcript-tab editing pass: search, highlighter-strength label colors, right-click to remove a label, and a multi-step Undo button.

You can find the full release notes on [GitHub](https://github.com/DozaVisuals/doza-assist/releases/tag/v3.2.2).

You can download and learn more on [GitHub](https://github.com/DozaVisuals/doza-assist/).

[!button text="Discuss this news item" variant="info"](news/20260507/#discuss-this-page)

---

!!!warning Sponsored
_Tight. Terse. Terrific. Bim. Bam. Boom._ – Cut/daily reader<br />
Post Production insight delivered to your inbox.<br />
Sign up for **free** at [Cut/daily.com](https://www.cut-daily.com)
!!!

---

### [2nd May 2026](/news/20260502)

Happy Saturday! 👋

Episode 2 of The Grill is now live with special guest [Alex "4D" Gollner](https://alex4d.com)! 🔥

You can watch **FCG-202: The Final Cut Grill is Back!!!!** on [YouTube](https://www.youtube.com/watch?v=zGNBWtY_a_o):

[![](/static/fcp-grill-202.jpg)](https://www.youtube.com/watch?v=zGNBWtY_a_o)

The description reads:

> It’s been way too long since I sat with my friend Alex Gollner and discussed the state of our industry, the world of Apple Computer and our favorite editorial application, Final Cut Pro. We discuss a bunch of fun stuff including the “Open Letter to Apple” and what it means now that Tim Cook is stepping down and John Ternus will take the CEO chair at Apple. Surprisingly we don’t pan Premiere all that much. Don’t worry, we got Alex’s mic distortion sorted about 5 minutes in, but then, he went out of sync. Whatever… its color, it moves and its on the internet. Sorry about that.

You can find all the past podcast episodes on the [Final Cut Grill website](https://grill.fcp.cafe).

In random news, I came across this cool app - [WhatCable](https://github.com/darrylmorley/whatcable).

> A small macOS menu bar app that tells you, in plain English, what each USB-C cable plugged into your Mac can actually do, and why your Mac might be charging slowly.
>
> USB-C hides a lot under one connector. Anything from a USB 2.0 charge-only cable to a 240W / 40 Gbps Thunderbolt 4 cable, all looking identical in your drawer. macOS already exposes the relevant info via IOKit; WhatCable surfaces it as a friendly menu bar popover.

You can download for free on [GitHub](https://github.com/darrylmorley/whatcable).

---

**Jeff Asher**, from our awesome Final Cut Pro community has released his first app on TestFlight!

**PromptKit v1.5.0** contains the following changes:

**Facial Recognition:**
- New face detection feature that automatically identifies faces in your images
- Assign faces to named characters and manage them through a new Character Manager
- Faces are grouped and tracked across your media assets in the inspector

**Smart Collections & Folders:**
- New Smart Collections with customizable predicates to auto-organize assets
- New sidebar Folders support for manual organization
- Improved sidebar with better project and keyword row management

**Bug Fixes & Tweaks:**
- Various fixes to the asset detail view and keyword editor
- Improvements to comparison preview and asset card layout
- Asset import helper improvements
- Sidebar and keyword browser stability fixes

You can learn more and download on [TestFlight](https://testflight.apple.com/join/H87x62sH).

---

**CorridorKey by LateNite v1.0.0 (Build 9)** is now up on TestFlight.

It contains the following changes:

**🔨 Improvements:**
- **Screen Colour: Blue** now uses Corridor Digital's dedicated blue-screen MLX model (`CorridorKeyBlue v1.0`). Previously the renderer rotated blue footage into the green domain so the green-only model could process it. The new path feeds blue source straight into a model trained on actual blue-screen footage and produces noticeably cleaner mattes on hair, motion blur, and translucent fabric.
- Despill, edge decontaminate, and the chroma-prior alpha hint are now screen-colour aware throughout — every post-process stage operates on the user's chosen screen colour rather than always assuming green.
- Green-screen behaviour and quality are unchanged. The green model and pipeline continue to ship as the default.
- **Hint: Apple Vision Framework** now layers the Vision subject mask on top of the chroma prior. Vision's foreground-instance detector segments people, animals, and salient subjects but ignores generic foreground objects. On shots with props (a sword, an instrument, a piece of set dressing) those would previously fall out of the matte. The combined hint keeps Vision's strong subject signal where it fires and falls back to chroma everywhere else, so foreground props in front of the screen stay in the key.
- Every parameter row in the **Standalone Editor** inspector now shows a **↺ Reset to Default** button next to the value when it differs from the factory default, so a single click restores the factory default value without the user having to remember the original number.
- **Despill Strength** now also pulls matte alpha toward zero in pixels strongly biased toward the screen colour, matching the original CorridorKey reference's "premultiply despilled foreground by alpha" output convention. Previously, model-error pixels in the screen background showed up as a coloured halo on the composite — light blue at strength 0, greenish at strength 1 — because the despilled colour stayed bound to a non-zero alpha. Pushing the slider up now does what the name implies: the spill goes away, transparently.
- The **Standalone Editor** now auto-detects the **Screen Colour** from the first frame on import and sets the picker accordingly, so a blue-screen plate keys correctly without the user having to flip the popup first. The user's manual choice still takes precedence after import — the auto-detect only runs once per clip load.
- The Standalone Editor now remembers the last used **Quality**, **Hint**, and **Upscale Method** between sessions, so a user who's tuned their workflow doesn't have to re-pick the same three popups every time the editor opens. Per-clip parameters (sliders, screen colour) still start fresh — the Reset to Default affordance covers factory recovery for those.
- The Standalone Editor now also remembers the last-picked **Player Background** (checkerboard / white / black / yellow / red / custom colour / custom image) between sessions, so the preview opens with the same backdrop the user left it on. The custom-image bookmark already survived restarts. The new persistence covers the picker's current case so the choice itself is no longer reset to checkerboard on every launch.
- The **Player Background** picker now shows a small coloured swatch next to each preset (white / black / yellow / red) so the rows are visually distinguishable, and the **Custom Colour…** row mirrors the user's current swatch so the menu shows what you'll actually get without opening the colour wheel first. The previous icons were all rendered with the system foreground tint and were indistinguishable from each other.
- Quitting the **Standalone Editor** while an analyse pass is in progress now drains MLX's GPU stream and every Metal command queue before the process exits. Without this, Debug builds with Metal API Validation enabled would trip a `notifyExternalReferencesNonZeroOnDealloc` assertion when global pipeline state objects released while a command buffer still referenced them. Release builds were not crashing, but the lifecycle was racy - both paths are now deterministic.
- **Despill Strength** range expanded from 0–1 to 0–5 in both the Final Cut Pro inspector and the Standalone Editor. Pushing past 1 over-corrects the chroma in problem regions (heavy reflection on hair, dense motion-blur edges) and the new spill-alpha attenuation pulls the matte to zero in spill regions, so the over-correction lands as transparency instead of a garish anti-screen tint. The default stays at 0.5 - existing projects open identically.

This is still very much a work-in-progress, so ideas, feedback, comments and suggestions welcome!

Once our fancy new icon is ready, we'll release on the Mac App Store.

You can learn more on the [CorridorKey by LateNite website](https://corridorkeybylatenite.fcp.cafe).

---

**Sequence Shortener v1.0.2** is out now.

It contains the following changes:

- Added new mode: Target Duration. Specify the duration you want to get down to and let Sequence Shortner take more from longer clips and less from shorter clips
- Improvements resulting in fewer XML warnings on import

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/sequence-shortener/id6757253020).

---

**MC Auto Cut v1.0.3** is out now.

It contains the following changes:

- Improvements to the speaker detection algorithm
- New controls you to specify the speakers and and their angle relationship in your multicam clip, allowing you to choose different picture and sound sources

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/mc-auto-cut/id6761138330).

---

**Cut Shelf v1.0.2** is out now.

It contains the following changes:

- Improved iCloud Drive handling
- Fix to case where FCP reported a frame alignment error on import

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/cut-shelf/id6757250209).

[!button text="Discuss this news item" variant="info"](news/20260502/#discuss-this-page)

---

!!!warning Sponsored
Native Blackmagic RAW support in Final Cut Pro.<br />
[Download BRAW Toolbox](https://brawtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

## April

### [30th April 2026](/news/20260430)

Happy Thursday! 👋

Oh, wow, - it's been 16 years since Apple acquired Siri. 🤯

[![](/static/siri.jpg)](https://x.com/avstorm/status/2049225450535129181)

It'll certainly be interesting to see what Apple announces at the upcoming WWDC!

I also came across this awesome [gofundme project](https://www.gofundme.com/f/rescuing-the-past) today:

> Your donations can help us to rescue rare films, audio tapes, and lost moments of Supermarionation history from vanishing forever.
>
> **WHO ARE WE?**
> We're Century 21 Films, a UK independent production company, with a particular interest in archive film and television. Over the last decade our productions have included the ITV drama series Endeavour, Thunderbirds: The Anniversary Episodes, and Cartoon Carnival - a history of silent animation and the efforts to preserve it.
>
> Now, we are engaged on our own mission to rescue the past - but this time a different form of animation. Super Marionette Animation - or as it's better known "Supermarionation" – the production technique used to make the many 1960s Gerry & Sylvia Anderson television shows such as Stingray, Captain Scarlet & the Mysterons, and, of course, Thunderbirds.
>
> **ABOUT THE PROJECT:**
> We've always been interested in preserving ephemera to do with these shows as part of our on-going work documenting the behind the scenes story for our many documentaries. However, over the last year this has accelerated at some considerable pace following the discovery by the family of Len Walter, the Supervising Editor on Thunderbirds, of 22 cans of 35mm film. After taking these films away, it turned out that these weren't ordinary prints of Thunderbirds, but specially struck prints used by the production team in the making of the series. Despite having been stored in a garden shed, we were able to recover excellent images from the prints, even though they were already suffering from Vinegar Syndrome - effectively the chemical breakdown of the film which eventually leaves just slush.
>
> From this collection, we recovered three episodes of Thunderbirds as alternative edits, including a rejected version of the second episode to enter production, "Pit of Peril", which had footage from Thunderbirds unseen in 60 years - the first "new" footage to appear from the series since it finished in the 1960s. This has now been cleaned and scanned in 4K, preserving it for future generations.
>
>
> The resulting news coverage has led to an avalanche of other material being offered to us to investigate and we have now helped recover more missing items, including unbroadcast footage from Supercar, missing music by Barry Gray written for Thunderbirds and other shows, plus, previously unseen photographs, paperwork, and even original voice artist dialogue tracks extracted from the guard bands of old 1/4" tape with a specially modified tape deck.

You can watch this great documentary on [YouTube](https://www.youtube.com/watch?v=pUB3cq0ujiY):

[![](/static/thunderbirds.jpg)](https://www.youtube.com/watch?v=pUB3cq0ujiY)

If you can, please support the [gofundme project](https://www.gofundme.com/f/rescuing-the-past).

---

**CorridorKey by LateNite v1.0.0 (Build 7)** is now up on TestFlight.

It contains the following changes:

**🔨 Improvements:**
- Added the ability to load custom background colours and custom images into the Standalone Editor.
- Cleaned up the launch screen on the Standalone Editor.
- Opening Final Cut Pro from the Standalone Editor no longer quits the Standalone Editor.
- **Spill Method** now defaults to **Ultra (Chroma Project)**.
- Cleaned up the header section in the Final Cut Pro Effects Inspector to better match the Standalone Editor.
- Improvements to the on-screen controls in Final Cut Pro.
- Improvements to how we handle the colour space in Final Cut Pro, which improves the Apple Vision Framework Hint pipeline.

This is still very much a work-in-progress, so ideas, feedback, comments and suggestions welcome!

Once our fancy new icon is ready, we'll release on the Mac App Store.

You can learn more on the [CorridorKey by LateNite website](https://corridorkeybylatenite.fcp.cafe).

---

**KROCK.IO - Launcher v1.2** is out now.

It includes the following changes:

- FCP Compatibility: Full support for the latest Final Cut Pro update.
- Ul Modernization: Fixed dependencies on legacy user interface libraries.
- Resolved version-specific launch crashes.

You can learn more and download on the [Mac App Store](https://apps.apple.com/app/krock-io-launcher/id6747078342)

---

**Doza Assist v3.1.0** is out now.

> This release adds a built-in operating manual the local LLM consults on every clip-selection, narrative-ordering, and format-adaptation question — and fixes a long-running annoyance where the chat ignored explicit clip counts.

You can find the full release notes on [GitHub](https://github.com/DozaVisuals/doza-assist/releases/tag/v3.1.0).

You can download and learn more on [GitHub](https://github.com/DozaVisuals/doza-assist/).

[!button text="Discuss this news item" variant="info"](news/20260430/#discuss-this-page)

---

!!!warning Sponsored
Gyroscope Stabilisation in Final Cut Pro.<br />
[Download Gyroflow Toolbox](https://gyroflowtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [29th April 2026](/news/20260429)

Happy Wednesday! 👋

The Grill is back! 🔥

**FCG-201: John Ternus, Don’t forget to Change the World** is out now on [YouTube](https://www.youtube.com/watch?v=hSCo-CKH82U):

[![](/static/fcp-grill-201.jpg)](https://www.youtube.com/watch?v=_tHdyD9TGCA)

The description reads:

> Not my title!!! My friend Jeff Greenberg came up with it. This is a weird episode… basically just me ranting and frankly if you don’t actually WORK AT APPLE… you can skip it. But please like and subscribe it, and if you know anyone that works at The Orchard, let them know about this.
>
> And yea… leave me alone… I’ll try to clean the teleprompter glass. You'll find as you watch these episodes, I'm not "A YouTuber"... I'm just a guy with some stuff to say and I've decided to put it on YouTube in hopes that you'll see it.
>
> I'm not pouring over analytics, I'm not testing thumbnails and I'm not "using the Gen Z Shake" to increase urgency and build a following. Frankly... if anyone watches this at all... I'll be kind of shocked.
>
> And also… thx to the few close friends in the industry who I shared this with before I shared it with you. You all had great insight and input and suggestions but I think ultimately, I just had to say this stuff.
>
> Welcome to The Grill.

You can find all the past podcast episodes on the [Final Cut Grill website](https://grill.fcp.cafe).

In the next episode you'll hear from the amazing [Alex "4D" Gollner](https://alex4d.com).

Exciting times!

In other news... **Claude & Adobe** are collaborating.

> Adobe for creativity brings capabilities across the creative cloud into a unified, creative connector. Access 50+ tools across Photoshop, Lightroom, Illustrator, Firefly, Premiere, Express, InDesign, and Adobe Stock — all through natural language, without switching apps. Describe what you want to achieve, from editing photos and vectors to designing assets and formatting video. Sign in with your Adobe account for higher usage limits, more tools, and cross-session continuity.

It includes a bunch of skills:

![](/static/adobe-claude-skills.png)

You can read more on [Adobe's Developer Site](https://developer.adobe.com/adobe-for-creativity/).

I also came across a cool new iPhone & iPad app on [Reddit](https://www.reddit.com/r/Filmmakers/comments/1sszshh/i_was_tired_of_fixing_phone_screens_in_post_so_i/) called **prefx**.

The developer writes:

> Last year I was shooting a commercial and the client wanted a social media feed last minute. No time to prep, no clean solution on set (until now). We put trackers on the phone and replaced it in post. It worked, but it cost real time and money. I kept thinking: I can't be the only one dealing with this.
>
> So I got together with some developer friends and built the tool I wished existed. After a year of trial and error, Prefx is out today on the App Store. Turns your iPhone or iPad into a production-ready digital prop.
>
> Clearance-ready UI assets: social feed, news layout, messaging, and a custom stitch (the one that started all of this).
> Scrollable, interactive interfaces. Actors scroll through feeds in real time. Sounds minor but the eyeline difference is real.
> Kelvin + RGB lighting controls. Every screen is a practical light source. Built this originally for green screen spill but it became its own thing, a lot of creative flexibility there.
> Green screen mode as a fallback, including black with trackers for comping in post.
> Pricing: $9.99/month or $99 lifetime. Professional utility, not a consumer app. One hour of VFX work costs more than the lifetime option. Free trial included so you can test it on set first.
>
> Live now. If you try it and plan on sticking with it, reach out directly. Always happy to connect with people solving the same problems.
>
> Genuine question: what's the weirdest UI you've ever had to fake on a shoot? Dating apps, obscure OS, fictional in-world interfaces? Building the next update around real use cases.

You can learn more on the [iPad App Store](https://apps.apple.com/app/prefx/id6761247126).

---

**First Rush v1.0.4** is out now.

It contains the following changes:

- **Preview cadence fix** — 23.976 / 29.97 / 59.94 fractional NTSC sources had a subtle hitch from the integer-Hz rounding mismatch. Preview loop now runs at display cadence and renders only on new buffers, so 24000/1001 sources stay smooth.
- **SDI status chips** — each source tile shows TC / REC / ANC / Audio / OCR state at a glance. If auto-fill isn't working you can see why immediately (signal missing? ANC missing? OCR didn't fire?) instead of guessing.
- **SDI Diagnostic Export** — Help menu has Copy / Export / Email. Captures version, signal format, TC, REC flag, audio channel info, last 60 frames of ANC packets (DID/SDID/payload prefix), OCR attempt/success counts, metadata sources. Pure on-set debugging tool — DM the output if you hit a weird issue.
- **Slate "Reset to Default"** — restores the default name format for the current slate mode without touching customizations in other modes.
- **Mock playback audio fix** — the "VU moves but no sound" issue with file playback is gone.
- **Mock OCR auto-trigger** — file playback now auto-fills metadata without needing the Camera Reel toggle.
- **Token palette real-time** — clicking palette tokens / presets now reflects immediately in the chip bar and preview.
- **DeckLink `com_ptr` `null` safety** — caught by xcodebuild analyze.
- Auto-recording core (RP188 trigger, debounce, start/stop state machine) was deliberately untouched. Working on-set, not touching it.
- Also: subscription checkout is now available alongside the existing 7-day in-app trial. No change for trial users — just an option if you want to keep using it past the trial.

You can download and learn more on the [First Rush website](https://editorhan.me/tools/).

--

**Apple Immersive Video Utility v1.4** is out now.

It includes the following changes:

- Preview metadata during playback
- Visualize playback commands
- Take timecode stamped notes while previewing content, Bug fixes, connection and performance improvements

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/apple-immersive-video-utility/id6477489398).

[!button text="Discuss this news item" variant="info"](news/20260429/#discuss-this-page)

---

!!!warning Sponsored
_Tight. Terse. Terrific. Bim. Bam. Boom._ – Cut/daily reader<br />
Post Production insight delivered to your inbox.<br />
Sign up for **free** at [Cut/daily.com](https://www.cut-daily.com)
!!!

---

### [28th April 2026](/news/20260428)

Happy Tuesday! 👋

First up, Corridor Key Toolbox has been renamed to **CorridorKey by LateNite**.

**CorridorKey by LateNite v1.0.0 (Build 6)** is currently up on TestFlight for testing. 🥳

![](/static/corridor-key-build-4.png)

It's been built for Final Cut Pro editors. It gives you all the power of [CorridorKey](https://github.com/nikopueringer/CorridorKey), directly in your Final Cut Pro timeline.

However, there's also a very powerful **Standalone Editor** too.

![](/static/corridor-key-standalone.png)

The official [CorridorKey](https://github.com/nikopueringer/CorridorKey) repository does work on Mac, *however* it's written in Python and is not *really* optimised for the latest Apple Silicon hardware.

We wanted to take the amazing [MLX Models](https://huggingface.co/alexandrealvaro/corridorkey-models/tree/main) compiled by [Alexandre Alvaro](https://huggingface.co/alexandrealvaro) for [CorridorKey-Runtime](https://github.com/alexandremendoncaalvaro/CorridorKey-Runtime), and use them in something that's specifically built and optimised for Final Cut Pro and Mac's.

Using the models as a starting point, we wanted to make something that feels native to Mac.

Whilst we have other open source FxPlug effects on GitHub (such as [Gyroflow Toolbox](https://gyroflowtoolbox.fcp.cafe)), we also wanted to showcase this as a great complex FxPlug, that others can use as a reference - as it has everything, Metal, MLX, OSC, etc.

We hope this will be a great open source resource for people to really dive deep into FxPlug.

**CorridorKey by LateNite** has been built for Apple Silicon Mac's.

It makes full use of the GPU, Neural Engine, Metal and MPX - pushing the hardware to the max.

If you're working with ProRes or HEVC, it makes use of Apple Silicon's hardware encoders and decoders.

If you enable **Auto Subject Hint** it uses Apple's [Vision Framework](https://developer.apple.com/documentation/vision) to use machine learning to "cut out" any foreground people, to use as a "hint" for CorridorKey.

You can download and learn more on the [CorridorKey by LateNite website](https://corridorkeybylatenite.fcp.cafe).

We're currently waiting on the genius that is [Matthew Skiles](http://matthewskiles.com) to come up with a new icon - and once that's done, we'll try submit to the Mac App Store as a free download.

---

Some other fun things I've found online recently...

**Graphite** is a free, open source vector graphics editor and animation engine, available now in alpha. Get creative with a fully nondestructive editing workflow that combines layer-based compositing with node-based generative design.

You can download and learn more on the [Graphite website](https://graphite.art).

In a world of vibe coding, I found this article super interesting: [The West Forgot How to Make Things. Now It’s Forgetting How to Code](https://techtrenches.dev/p/the-west-forgot-how-to-make-things).

This video from Apple is SUPER fun - you can watch on [YouTube](https://www.youtube.com/shorts/y4DnsCzJTRQ):

[![](/static/apple-handmade-magic.jpg)](https://www.youtube.com/shorts/y4DnsCzJTRQ)

It just goes to show how much fricken work goes into these little videos! Amazing stuff!

And for the real nerds amongst us: [MIT’s Secure Hardware Design Class](https://shd.mit.edu/home/)

Thanks team! Chat later!

---

A while back we reported that **Audio Design Desk (ADD)** has gone a bit radio silent, and hasn't been updated. It's most like DOA. 😭

We're told that Audio Design Desk will make a formal announcement about what's happening soonish.

In the meantime though, the amazing **Ryan Francesconi** (the lead developer on ADD) has released some super cool stuff on GitHub:

**SPFKBase**
The foundational layer for the SPFK package ecosystem. SPFKBase provides core utilities, type extensions, and shared infrastructure used across all SPFK packages.

**SPFKTime**
A Swift package for time representation, formatting, and high-precision timing across real-time, timecode (SMPTE), and musical domains. Designed for professional audio/video applications with support for multiple frame rates, tempo-based musical time, and display-linked transport timers.

**SPFKPlaylistData**
Lightweight playlist data types and definitions extracted from `SPFKData`.

**SPFKAudioHardware**
A Swift concurrency-first abstraction over the Core Audio Hardware Abstraction Layer (`HAL`) for macOS. Provides a type-safe, `Sendable` interface to audio device management built on actors and `async`/`await`.

**SPFKUtils**
A Swift utility library providing UI definitions, audio extensions, and Foundation/CoreGraphics conveniences for macOS and iOS development.

**SPFKMetadataBase**
Pure Swift audio metadata data types extracted from [SPFKMetadata](https://github.com/ryanfrancesconi/spfk-metadata). No C++, TagLib, or libsndfile dependency — suitable for lightweight consumers that need metadata type definitions without file I/O.

**SPFKMetadata**
Swift based audio metadata I/O library wrapping TagLib via spfk-taglib and Core Audio to provide unified tag reading/writing, marker parsing, and broadcast wave (BEXT) support across common audio formats.

**SPFKTesting**
A Swift package providing shared test resources and utilities for all SPFK test targets. Bundles a catalog of audio and image files used across the SPFK ecosystem, with platform-aware resource resolution for macOS and iOS.

**spfk-taglib**
[TagLib](https://taglib.org/) packaged for Swift Package Manager.

You can download and learn more on his [GitHub Repository](https://github.com/ryanfrancesconi?tab=repositories).

In addition to open source projects, he's also released **ShadowTag** - a professional audio metadata editor for macOS.

![](/static/shadowtag-marker-color.png)

Ryan explains:

> Built for sound designers, sample library owners, and post-production teams who need complete, accurate metadata across large collections of audio files.
>
> ShadowTag is a first class modern macOS application. Designed for macOS 26, all tools are multi-threaded and run as fast as possible — scaling across every available core. Process a handful of files or an entire library — the work happens in parallel. ShadowTag is fast.
>
> ShadowTag reads and writes every major metadata standard — ID3v2, Vorbis Comments, MP4 atoms, BEXT, iXML, XMP, and UCS — directly into your audio and video files, keeping your library portable and compatible with any DAW, asset management system, or licensing platform.
>
> Everything is non-destructive to audio. ShadowTag only modifies metadata.

ShadowTag is free, and ShadowTag Pro is **USD$99**.

You can download and learn more on the [ShadowTag website](https://spongefork.com/shadowtag/).

---

It's been a busy time for **Wes Plate** over at **Automatic Duck** with lots of new apps out!

Introducing...

**Cut Shelf** is an app and workflow extension that acts as a global clip library that you can share across your computers, or even with collaborators!

It's very similar to our own [Recall Toolbox](https://recalltoolbox.fcp.cafe) - but with a really neat "shelf" concept.

You can use Cut Shelf to store elements like VLOG opens and closes, drag the compound clip from your library to Cut Shelf and the FCPXML is stored in Cut Shelf to be dragged back to a new library or event.

Or use Cut Shelf to share projects and clips with other editors but saving a shelf on shared storage or cloud storage.

You can watch a demo video on [YouTube](https://www.youtube.com/watch?v=PhjWLtXFPxo):

[![](/static/cut-shelf-youtube.jpg)](https://www.youtube.com/watch?v=PhjWLtXFPxo)

You can learn more and download on the [Mac App Store](https://apps.apple.com/app/cut-shelf/id6757250209).

**MC Auto Cut** is an app and workflow extension that creates rough cuts automatically from your synced multicam clips.

After you sync your angles and create a multicam clip, drag the multicam clip into the MC Auto Cut workflow extension, and then specify whether you want your rough cut based on the angle of the person who is speaking, or you can choose automatic edits based on a specified clip duration.

You can watch a demo video on [YouTube](https://www.youtube.com/watch?v=MZhOhE3t4PM):

[![](/static/mc-auto-cut-youtube.jpg)](https://www.youtube.com/watch?v=MZhOhE3t4PM)

You can learn more and download on the [Mac App Store](https://apps.apple.com/app/mc-auto-cut/id6761138330).

**Sequence Shortener** is an app and workflow extension that shortens sequences by trimming every eligible clip in your timeline by a small amount that you specify.

You can choose to ignore clips based on role, ignore through edits and gaps, and also choose the a duration not to allow clips to go below.

Sequence Shortener is great for quickly shortening a rough cut to get it closer to your desired duration.

You can watch a demo video on [YouTube](https://www.youtube.com/watch?v=Hy7g8P-PlRw):

[![](/static/sequence-shortener-youtube.jpg)](https://www.youtube.com/watch?v=Hy7g8P-PlRw)

You can learn more and download on the [Mac App Store](https://apps.apple.com/app/sequence-shortener/id6757253020).

Then there's **Library Slim**.

Embedded media in a Final Cut Pro library can be convenient, but sometimes you wish your embedded media was external to the library bundle.

Library Slim makes it easy to move your embedded media files out of your library bundle, replacing them with links to the media’s new location.

You can watch a demo video on [YouTube](https://www.youtube.com/watch?v=4Q15WWEWZUM):

[![](/static/library-slim-youtube.jpg)](https://www.youtube.com/watch?v=4Q15WWEWZUM)

You can learn more and download on the [Mac App Store](https://apps.apple.com/app/library-slim/id6761352856).

Gotta collect them all!

You can learn more about the full range of their apps on the [Automatic Duck website](https://www.automaticduck.com).

---

**ATEM TO FCP v1.5.3** is out now:

- DSK USK Color Source Fix
- Previously, when a Downstream or Upstream Key used a Color or Black source as fill (instead of a camera or graphic), the key events were silently ignored and omitted from the exported timeline. They are now correctly exported as Color Generator clips in their respective key lanes, matching the on/off timing recorded by the ATEM switcher.

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/atem-to-fcp/id6760610577).

---

**First Rush v1.0.2** is out now.

This release includes the following changes:

- **Preview stutter fix** — the "monitoring goes choppy after 5 minutes" several of you reported. Two layers: SwiftUI rebuild storm at 24Hz timecode callbacks, plus Metal preview was polling at 60Hz regardless of source FPS. Both gone.
- **DeckLink color match** — preview now matches the recorded file exactly. The 0.9.18 sRGB encoding chain was subtly desaturating preview vs. ProRes output.
- **Slate filename edits stick** — delete `_C` / `_S` from your name format and it stays deleted across mode changes. Each mode (Standard/Drama/ARRI/Custom/Test) now remembers its own customizations.
- **New: Test Clip mode** — 5th slate mode for lighting/lens/rehearsal takes. Records as `S01_C03_TEST-01-A` style, doesn't touch the main take counter, auto-tags keyword: test for FCP/Resolve smart filtering.
- **Burn-in TC + source name** — actually bakes into the file now. Was a UI-only toggle before, embarrassing miss but finally wired through end-to-end.
- ~50 smaller fixes across capture pipeline, writer error UX (disk-full / permission-denied properly surfaced now), AudioMixer thread safety, FCPXML NTSC frame duration was inverted (!), DeckLink/AJA exception boundaries, license key Keychain migration.

You can download and learn more on the [First Rush website](https://editorhan.me/tools/).

---

**SpliceKit v3.3.8** is out now.

It has the following changes:

**🐞 Bug Fixes:**
- Crash fixes from Sentry triage: silences false-positive 'FCP terminated shortly after launch' Sentry events on normal user quits.
- Suppresses Xcode CLT prereq from crash dashboards.
- Ships `whisper-transcriber` so the Whisper `large-v3` / `large-v3-turbo` engines in the social captions panel actually work.
- Hardens `NSTask` termination handling in transcript/caption transcription paths.
- Fixes a playhead-overlay `UAF` during timeline teardown.
- Rejects malformed `RPC` params instead of crashing.
- Fixes a string-argument crash in `system.callMethodWithArgs`.

You can follow along the adventure over on the [FCP Cafe Discord](https://ltnt.tv/discord).

You can download and learn more on the [SpliceKit Website](https://splicekit.fcp.cafe).

[!button text="Discuss this news item" variant="info"](news/20260428/#discuss-this-page)

---

!!!warning Sponsored
Native Blackmagic RAW support in Final Cut Pro.<br />
[Download BRAW Toolbox](https://brawtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [26th April 2026](/news/20260426)

Happy Sunday! 👋

First up some interesting news and observations...

**OZU** has released **CinemaCLIP** into the world!

> OZU builds video products to understand and explore stories at scale.
>
> We're a remote-first startup based in Brooklyn NY and backed by angels, VCs, and entrepreneurs from Figma, Atlassian, Runway, NVIDIA, and Maximum Effort.
>
> Introducing CinemaCLIP - A hybrid CLIP model and taxonomy for the visual language of cinema
>
> CinemaCLIP is one part of a family of models and techniques that we built at OZU to understand the art of visual storytelling, and is the backbone for a suite of tools and processes that power OZU's state of the art narrative understanding systems.
>
> It offers a demonstrable improvement over CLIP and VLM models for many industry professional use cases. Not only is it more accurate in understanding cinematic concepts, it can also be run on commodity hardware on edge, at greatly faster than real-time rates. This enables opportunities like real-time video search and retrieval systems, live camera assist systems, on set validation, and more.
>
> Our key contributions besides the model itself are two-fold: a dataset and ontology of visual language at the frame level, and a novel training recipe to add domain expertise to CLIP models while mitigating catastrophic forgetting. We believe this recipe is generic and can be adapted to other domains as well.

You can read more about CinemaCLIP in a [detailed article on their website](https://www.ozu.ai/cinemaclip/).

You can download it on [GitHub](https://github.com/Synopsis/cinemaclip) and [HuggingFace](https://huggingface.co/OZU-Technology/CinemaCLIP).

It'll be super interesting to see what people build with it!

**Shade** [Raises $14M](https://shade.inc/blog/shade-raises-14m-to-build-the-intelligent-file-system-for-creative-teams) to Build The Intelligent File System for Creative Teams. 🤯

> We're excited to announce that we just raised a $14M fundraising round led by Khosla Ventures, with Construct Capital and Bling Capital. That brings Shade to $20M in total funding.
> This funding lets us keep building Shade as that system of record — one place for creative teams to ingest, search, review, archive, and automate, without shuttling files between six or seven tools.

This kind of investment just blows my mind. The amount of insanely awesome stuff I could build in the FCP world if I had a million dollars, let alone $14 million.

I've played around with Shade quite a bit over the years, and have seen it grow and evolve.

I've chatted with CEO Brandon Fan over Zoom.

Whilst I'm not a subscriber of Shade currently (we use a mixture of [Synology Drive](https://www.synology.com/en-global/dsm/feature/drive) and [Frame.io](https://frame.io)), it's certainly great to see good companies and great people kicking goals!

In other news... **Apple** is hiring! 🥳

They're currently trying to fill this role: [Senior Software Engineer — Video Applications (FX Plug API’s)](https://jobs.apple.com/en-us/details/200658688-3543/senior-software-engineer-video-applications-fx-plug-api-s?team=SFTWR)

This is great news for Final Cut Pro users, as it means that Apple is actively working on improving [FxPlug](/developers/fxplug/) - the developer technology behind Motion Templates in Final Cut Pro.

The job reads:

> **Description:**
> As a Senior Software Engineer on the Motion team, you’ll be the bridge between the core engineering team and our 3rd party developer ecosystem. You’ll design and develop new FxPlug APIs that enable developers to create powerful new effects for Final Cut Pro and Motion, as well as maintaining the existing FxPlug APIs. You'll own the developer experience end-to-end—from API design to community engagement.
> This is a hands-on role for someone who thrives on solving complex problems by creating clear and consistent developer-facing interfaces.
>
> **Responsibilities:**
> - Design and implement robust, well-documented FxPlug APIs that enable 3rd party developers to extend the capabilities of our applications
> - Diagnose and debug integration issues with our applications and the FxPlug APIs
> - Identify and resolve performance bottlenecks in the implementation of the FxPlug APIs
> - Maintain existing FxPlug APIs and their implementation.
> - Write automated tests to exercise the FxPlug APIs
> - Write clean, testable code
> - Participate in code reviews, both giving and receiving feedback
> - Create and maintain FxPlug API documentation and sample code
> - Provide technical support and guidance to 3rd party developers, including communicating directly with them and helping them with troubleshooting
> - Prioritize FxPlug API improvements by balancing 3rd party developer needs as well as Apple’s own roadmap

This is the part that makes me REALLY excited:

**Provide technical support and guidance to 3rd party developers, including communicating directly with them and helping them with troubleshooting**

As I've explained in the past, Blackmagic is the leader in 3rd party developer support.

They have a great [public forum](https://forum.blackmagicdesign.com/viewforum.php?f=12&sid=cd58f2dc02b3ce18136fd548dc223fe6), excellent [developer support](https://www.blackmagicdesign.com/developer/products/capture-and-playback/overview) and a big developer presence at trade shows like NAB.

HOPEFULLY, this job ad points to Apple offering better developer support in the future. We'll see.

In the world of vibe coding, every day there seems to be a new Final Cut Pro on the market.

Today I have two super interesting applications to share from two very interesting people...

**Ulti.Media** has released **Media Matcher**.

![](/static/media-matcher.jpg)

> Media Matcher is a sophisticated macOS application designed to solve the critical problem of media disconnection in professional post-production. It leverages advanced mathematics and high-performance engineering to reconnect "To Match" media with original sources, regardless of filename changes.

You can watch a simple demo video on [YouTube](https://www.youtube.com/watch?v=byf81iFK-dw):

[![](/static/media-matcher-youtube.jpg)](https://www.youtube.com/watch?v=byf81iFK-dw)

You can download and learn more on the [Ulti.Media website](https://ulti.media/matcher/).

**Jinkyu Han**, an on-set film editor working in Seoul, Korea has also released **First Rush**.

![](/static/firstrush.png)

Jinkyu explains:

> Long-time admirer of CommandPost — it's been quietly running on a lot of FCP rigs over here too — and a regular reader of fcp.cafe.
>
> I just shipped 1.0 of something I built for myself called **First Rush** — a native macOS multi-cam SDI recorder designed around the Final Cut Pro pipeline. It came out of the same kind of frustration that produced CommandPost (workflow automation that nobody else was going to build), and I'd love to know if it might be a fit for a piece on fcp.cafe — or even a quick mention in the news feed.
>
> **What it is:**
> A Movie Recorder alternative born from real on-set frustration. Korean drama productions stack ARRI ALEXA / Sony Venice / DJI Ronin 4D in the same shoot, and getting clean FCP-ready clips out of that mix — synchronized, with metadata that flows into Final Cut without any post-import cleanup — was always the bottleneck.
>
> **Highlights for fcp.cafe readers:**
> Master camera REC trigger — detects the SMPTE RP 188 RECORD flag from ARRI ALEXA / Sony Venice / DJI Ronin 4D / Blackmagic URSA and synchronizes every video channel automatically.
>
> - **HUD OCR** — reads Clip · Reel · ISO · WB · shutter directly from the camera HUD via the Vision framework, writes them into clip metadata before recording even starts.
> - **NLE-ready metadata** — Reel · Scene · Take · Camera Name embedded into the .mov userdata atom. Final Cut Pro's Info inspector and DaVinci Resolve's metadata columns recognize them natively. No FCPXML round-trip needed for the basics.
> - **Multi-cam grid + gang recording** — up to 4×4 layouts, ⌘-click to group cameras and start/stop in sync.
> - **Multi-source bulk configuration** — apply Overlay / LUT / destination / auto-recording to multiple cameras in a single operation.
> - **Portrait 9:16 mode** — for Reels / Shorts / TikTok productions where cameras are mounted sideways. Both preview and recorded output rotate.
> - **16-channel audio** - SDI embedded audio at 24-bit / 48 kHz with cross-source routing (route any camera's audio onto another clip — useful when the wide camera's mic is too far from the talent).
>
> **Why it might be interesting for fcp.cafe:**
> The biggest pain point I keep hearing from FCP editors here in Korea is "the metadata never comes through cleanly." First Rush writes exactly what Final Cut Pro reads — Reel · Scene · Take · Camera columns populate themselves — so the editor opens the project and starts cutting, no manual tagging. Tested through real Korean drama productions before 1.0.
-
> **Stack:**
> Native Swift / SwiftUI / Metal · Apple Silicon optimized · macOS 14+
> Capture: Blackmagic DeckLink / AJA Kona / IoX3
> Output: ProRes (Proxy / 422 / HQ / 4444), H.264, HEVC
>
> **Try it:**
> [v1.0 build](https://editorhan.me/tools/) (7-day free trial, no key required)
>
> Thanks for fcp.cafe and CommandPost — both have been quiet companions for our part of the FCP world.

This looks super interesting!

You can download and learn more on the [First Rush website](https://editorhan.me/tools/).

Enjoy the rest of your weekend!

---

**SpliceKit** has now been downloaded **670** times! 🥳

**SpliceKit v3.3.5** has the following changes:

**🔨 Improvements:**
- Adds the Siri-style command palette with voice dictation.
- Polished liquid-glass layout and single-selection handling.
- Immersive Blackmagic RAW preview support.
- Patcher diagnostics/Sentry runtime hardening.

**SpliceKit v3.3.6** has the following changes:

**🔨 Improvements:**
- Adds Whisper large-v3 CoreML transcription for the social captions plugin (engine picker with Parakeet v3, Whisper large-v3-turbo, and Whisper large-v3; models download on first use).
- Adds Sentry Logs support.

**🐞 Bug Fixes:**
- Fixes caption positions resetting to center on FCP relaunch by running the persisted-caption repair headlessly when the panel isn't open.

**SpliceKit v3.3.7** has the following changes:

**🔨 Improvements:**
- Continues the Apple Immersive/BRAW work-in-progress with safer immersive preview decoding, reduced-resolution playback handling, fisheye/equirect preview improvements, native viewer state hardening, and crash fixes for affected users.

You can follow along the adventure over on the [FCP Cafe Discord](https://ltnt.tv/discord).

You can download and learn more on the [SpliceKit Website](https://splicekit.fcp.cafe).

---

**ATEM TO FCP v1.5.2** is out now:

- This update focuses on audio accuracy, multicam consistency, keyer correctness, and import stability in Final Cut Pro.

**Audio:**
- Fixed preroll: sessions starting with Color Generator or Media Player now include correct audio from frame one (PGM, MIC1, MIC2).
- AFV behavior aligned with ATEM: no audio under Color/Media Player if the source has none.
- Improved audio dissolves: fades now start at transition onset with proper fade-in/out, removing audible bumps.
- Separated extended audio lanes (-1 / -2) to avoid visual merging in FCP.
- RELINK + PGM: extended audio correctly references original ISO files with ATEM mix.

**Multicam:**
- All available audio angles are always included (ISO WAVS, MIC1, MIC2, PGM for RELINK). Mapping selects the active angle; others remain available for post.

**Keyer:**
- Fixed Flying Luma/Chroma Key: correct keyer filters (Luma / Green Screen) now applied independently from DVE transforms.
- Keyer filters now correctly applied to Media Player sources (not only camera ISOs).

**Stability:**
- Fixed FCP import error "IDREF references unknown ID" in sessions with only KEY/ USK transitions.
- Resolved "Syntax of value for attribute ref of filter-audio" by ensuring consistent transition effect allocation.

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/atem-to-fcp/id6760610577).

[!button text="Discuss this news item" variant="info"](news/20260426/#discuss-this-page)

---

!!!warning Sponsored
Gyroscope Stabilisation in Final Cut Pro.<br />
[Download Gyroflow Toolbox](https://gyroflowtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [23rd April 2026](/news/20260423)

Happy Thursday! 👋

First up, I came across this new YouTube Channel, which I think is going to be pretty awesome.

**Joanna Stern** writes:

> It’s finally here! The new thing I’ve been building for the last few months: New Things!
>
> It’s a newsletter. It’s a video series. It’s independent tech journalism. And yes, it’s fun!
>
> Today we launched our YouTube channel with a video about why I left The Wall Street Journal, what we're building with this new publication and a cameo from the great Casey Neistat, who encouraged me to do my own thing long ago.
>
> We also launched our newsletter on beehiiv. The design looks fantastic, and I hope you’ll find the reporting and stories even better. Sign up to become a paid member now!
>
> Thank you to all the humans—and yes, the AI—joining me on this wild ride, especially David Hall and Amaya Austin. Read more about them on our new website. Truly a dream team. And a huge shout-out to Kenny Wassus for making my home studio look offensively good, and to Jason Snyder and Briana Feola for the gorgeous branding and hand-drawn font.
>
> Please watch, subscribe and come see what we’re building!

The first episode of New Things is titled **Why I Left My Prestigious Job to Make YouTube Videos**.

You can watch on [YouTube](https://www.youtube.com/watch?v=Qd2Dyr0m3BI):

[![](/static/new-things.jpg)](https://www.youtube.com/watch?v=Qd2Dyr0m3BI)

I think this is going to be a really fun channel to follow along, so please, like and subscribe, *like and subscribe*.

It's also update day, and new product announcement day! 🥳

First up... After a month of heavy beta testing and eight TestFlight releases, **Keyframe Toolbox v1.1.0 (Build 39)** is out now!

![](/static/keyframe-toolbox-1-1-0-info-1.png)

![](/static/keyframe-toolbox-1-1-0-info-2.png)

![](/static/keyframe-toolbox-1-1-0-info-3.png)

![](/static/keyframe-toolbox-1-1-0-info-4.png)

![](/static/keyframe-toolbox-1-1-0-info-5.png)

![](/static/keyframe-toolbox-1-1-0-info-6.png)

It contains the following changes:

**🔨 Improvements:**
- **Clicking the name of a property creates a keyframe at the current time**, maintaining the current graph shape.
- **Shift-clicking a property name creates a keyframe on all graphs.** Thanks for requesting, Honusan and others!
  - Related — clicking the name of a property while over a keyframe (or double-clicking the keyframe property name) opens that keyframe for numeric editing. Thanks for requesting, Honusan and others!
- **Graphs can now be zoomed horizontally.** Use two fingers on a trackpad or hold option while scrolling. Alternatively, double-click in empty space to zoom in to show just 25% of the graph width. When zoomed in, a scroll indicator at the bottom shows the visible part of the total graph. This can be dragged manually. Alternatively, you can scroll with a horizontal scroll on a trackpad or by holding shift while using a scroll wheel. Thanks for requesting, Jake, Honusan and others!
- **Presets can be saved**, using the new Save Preset option at the end of the Presets menu. When you apply one of your own presets, you’ll be able to control limits, scale handles up or down, and flip the preset as you can with the other presets. Thanks for requesting, cinestillsamurai, Honusan and others!
  - Use **Manage Presets**, in the same menu, to reveal a folder containing all your presets. Share presets with your friends if you wish!
  - Renaming presets renames them in the menu; deleting them removes them.
- **Easing has been added** to the graph menu and right-click menu, for Ease In, Ease Out, or Ease In+Out, for many common curve types (Linear, Sine, Quad, Cubic, Quart, Quint, Circ, Expo, Back). If you’re a fan of Easy Ease in After Effects, try Sine here. Note that selecting two or more keyframes applies easing to the curves between the presets, while selecting a single keyframe applies easing to the handles around that keyframe. Thanks for requesting something like this, Alex Gollner!
- **Clicking on a line connecting two keyframes selects both keyframes.** This makes it easier to apply easing to the graph between two keyframes. (Note that double-clicking on a line still creates a new linear keyframe.)
- **Settings can now be saved as default.** If you always want to use Motion Blur and Absolute Timing, set your preferred options, then press the new button at the bottom of the Settings panel. This affects new instances of Keyframe Toolbox. Thanks for requesting, Honusan!
- **In Absolute Timing mode, time is now shown in frames and timecode.** If a clip is less than a minute long, only seconds and frames are shown. Thanks for requesting, Honusan!
- Several improvements to numeric editing.
  - **When you double-click a keyframe, the playhead moves to that frame** so you can see your changes directly.
  - When editing values numerically, use up/down to change by 1, ⇧-up/down to change by 10, and (new!) ⌥-up/down to change by 100.
  - **Changing values with arrow keys now immediately updates** a keyframe or handle.
  - **Left and right arrow keys now switch to editing neighbouring keyframes** (and move the playhead) so you can easily edit all values in a graph numerically if you wish.
- If you wish, hold Command while using the scroll wheel to move the playhead.

**🐞 Bug Fixes:**
- Important: property changes now more closely follow extreme graph curves. Please check any existing animations to make sure they're still doing what you want; very minor tweaks may be needed.
- Scrolling behavior is more consistent.
- It's easier to select groups of keyframes.

You can download and learn more on the [Keyframe Toolbox website](https://keyframetoolbox.fcp.cafe).

Secondly... After a month of heavy beta testing and six TestFlight releases, **ScriptStar v1.5.0 (Build 26)** is out now!

![](/static/scriptstar-app-store-1.png)

![](/static/scriptstar-app-store-2.png)

![](/static/scriptstar-app-store-3.png)

![](/static/scriptstar-app-store-4.png)

![](/static/scriptstar-app-store-5.png)

![](/static/scriptstar-app-store-6.png)

This release includes local transcription with downloadable models! You'll find all the changes on the page where you can add `SRT`s and kick off the processing.

To create a **New Transcript** for any clip, whether it's been transcribed by Final Cut Pro already or not, just check the box for that clip in the **New Transcript** column, or click the **New Transcript** column header itself to check that box for all clips.

All transcriptions are local, private, free, and never leave your Mac.

Models include:

- **Parakeet v3** (fast, multiple European languages)
- **Whisper v3-large** (slow, but includes Asian languages like Chinese and Japanese)
- **Apple's SpeechTranscriber** model that's built in (fast, but not as accurate as the other models, and seemingly the model Final Cut Pro uses natively, with poor multi-language support).

You can choose the model to use in the **Options** panel, and the first time you transcribe, the model will download automatically, displaying a progress bar as it does so.

For the most accurate timing, don't use the built-in transcripts — just re-transcribe with Parakeet. It's fast, and the timing is more accurate than Final Cut Pro's own transcripts.

You shouldn't need to manage these models, but if you try Whisper and find it doesn't work for you, just hold `COMMAND+OPTION` as you choose that option to delete its files.

You can download and learn more on the [ScriptStar website](https://scriptstar.fcp.cafe).

Finally, because apparently I have too much free time and not enough apps to wrangle, I've got something new to share...

Back on [15th March 2026](/news/20260315) I posted:

> Our good friends at **Corridor Digital** have got into the software development game, and it's impressive!
>
> They've released a new website video on their **Corridor Crew** channel titled, **It Took Me 30 Years to Solve this VFX Problem**.
>
> You can watch on [YouTube](https://www.youtube.com/watch?v=3Ploi723hg4):
>
> [![](/static/fixed-green-screens.jpg)](https://www.youtube.com/watch?v=3Ploi723hg4)
>
> You can join their [Discord Community too](https://discord.com/invite/bHPZvbhS4).

Since then they've posted another epic video titled, **I accidentally started a green screen revolution...**

You can watch on [YouTube](https://www.youtube.com/watch?v=Y3Dfw969itU):

[![](/static/corridor-crew-green-screen-youtube.jpg)](https://www.youtube.com/watch?v=Y3Dfw969itU)

I've known the Corridor Crew for a long time, and have caught up with Wren and the gang a few times over the years at NAB.

![](/static/chris-and-wren.jpg)

The first time was back in 2016, where I did a presentation on the Adobe stage for our show, [The Wizards of Aus](https://latenitefilms.com/live-action/the-wizards-of-aus/).

If you're interested, you can watch the presentation below:

<div style="position: relative; padding-top: 56.25%;">
  <iframe
    src="https://customer-2n8dqn7i3032pr6x.cloudflarestream.com/16266cba6edc841d21ccff3ae2fd5712/iframe?poster=https%3A%2F%2Fcustomer-2n8dqn7i3032pr6x.cloudflarestream.com%2F16266cba6edc841d21ccff3ae2fd5712%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D17s%26height%3D600"
    loading="lazy"
    style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
    allowfullscreen="true"
  ></iframe>
</div>

Needless to say, I love the Corridor Crew, and everything they do, and when Niko released the above videos, I was obviously totally into this.

And so... introducing **Corridor Key Toolbox**! 🥳

![](/static/corridor-key-toolbox-01.png)

This is still VERY early days, and very much a work-in-progress, but it's currently functional.

![](/static/corridor-key-toolbox-02.png)

It's all written in Swift and Swift UI and uses MLX for the ML processing pipeline.

It uses Final Cut Pro's analysis API, so you can actually do the analysis in the background.

The plan is to release this on TestFlight ASAP, then on the Mac App Store as soon as it's ready.

It's open source (`CC BY-NC-SA 4.0`), and you can find the (ever evolving) code on [GitHub](https://github.com/latenitefilms/CorridorKeyToolbox).

Stay tuned for the TestFlight launch!

Finally, we have a new bundle on the Mac App Store! Introducing... [**Pro Editor Bundle v4**](https://apps.apple.com/app-bundle/pro-editor-bundle-v4/id1895132701).

Onwards & Upwards! 🛸

---

As you would expect, **SpliceKit** also continues to bash along, but mostly with bug fixes the last few days, as more and more people take it for a spin!

SpliceKit has now been downloaded **578** times! 🥳

**SpliceKit v3.3.2** has the following changes:

**🐞 Bug Fixes:**
- Fixes Blackmagic RAW thumbnail crash when third-party Media Extensions are installed.
- Restores LiveCam camera/microphone access.
- Fixes rare installer signing failures from stray extended attributes.
- Adds build-time guards against undefined `SpliceKit_` symbols.

**SpliceKit v3.3.3** has the following changes:

**🐞 Bug Fix:**
- Fixes the patcher signing path for existing modded installs so nested SpliceKit bundles, framework, and app wrapper are re-signed correctly during rebuilds and updates.

**SpliceKit v3.3.4** has the following changes:

**🐞 Bug Fixes:**
- Fixes the patcher update path on existing modded installs by rebuilding SpliceKit.
- Framework cleaned before signing, avoiding recursive framework symlink loops that caused the installer to fail at Re-signing application.
- Also re-signs nested SpliceKit bundles during patch/update and makes `xattr` clean-up non-fatal so harmless attribute clean-up issues do not abort the install.

You can follow along the adventure over on the [FCP Cafe Discord](https://ltnt.tv/discord).

You can download and learn more on the [SpliceKit Website](https://splicekit.fcp.cafe).

---

**CineDream** is currently having a **25% off** sale for NAB!

You can find out more on the [CineDream website](https://www.cinedream.io/nab2026#pricing).

---

**Jumper v2026.04.22 (Build 3115)** is out now!

You can read a blog post about the update on the [Jumper Blog](https://getjumper.io/blog/release_notes_april_22_2026).

It contains the following changes:

**🥳 New Features:**

- LM Studio local LLM integration - you can now run a completely local LLM (e.g. Gemma, Qwen) in LM Studio and have it talk to Jumper just like you can with Claude or Codex!
- Negative search term support in visual search - specify terms you want to *avoid* alongside your search query, e.g. "people talking, not in a meeting room".
- "Add to project" for outside-project visual search results in Adobe Premiere Pro and DaVinci Resolve - import matching clips straight into your active project from the search results.
- Onboarding now lets you specify a license server up front, for setups where clients need to connect to one from the start.

**🔨 Improvements:**
- Face analysis data is now stored as packed TIFF files instead of thousands (or even millions) of individual JPEG files. Especially important for NAS setups where huge amounts of small files can cause issues.
  *IMPORTANT* this update makes existing face analysis collections *read-only* - so you will not be able to analyse new media into an existing Face Collection, but you can still assign names to faces.
- Context picker in the side panel is horizontally resizable, so long nested bin or folder paths are fully visible.

**🐞 Bug Fixes:**
- Windows: fix an issue where Jumper installation could fail if DaVinci Resolve was not installed. Thanks for reporting Jai Cave!
- macOS: Fix an issue in the FCP plugin and standalone Jumper app where if loading analysis data on startup took longer than 60 seconds, the UI would stall. Thanks for reporting @TheTapesArchive!
- Avid: fix an issue with loading media if a Grouped Clip with missing metadata is found. Thanks for reporting Jonathan Seal!
- Your explicit search-inclusion choices (files you've manually included or excluded) now survive media/project state refreshes. Thanks for reporting Simonas Slizys!
- Frame extraction fallback to AVFoundation on macOS to handle issue with ProRes RAW footage from Ronin 4D cameras. Thanks for reporting Zak Melms!
- Faster error-handling if transcription fails for some file - no more overhead reloading speech-to-text AI models.
- Handled several edge cases during analysis such as empty frames, non-RGB images, extremely long filenames, and missing metadata.

You can download and learn more on the [Jumper website](https://getjumper.io).

[!button text="Discuss this news item" variant="info"](news/20260423/#discuss-this-page)

---

!!!warning Sponsored
_Tight. Terse. Terrific. Bim. Bam. Boom._ – Cut/daily reader<br />
Post Production insight delivered to your inbox.<br />
Sign up for **free** at [Cut/daily.com](https://www.cut-daily.com)
!!!

---

### [22nd April 2026](/news/20260422)

Happy Wednesday! 👋

This is a big day for FCP Cafe!

**BRAW Toolbox v3.0.0** is out now with Media Extension support! 🥳

![](/static/braw-toolbox-v3-0-0-immersive.png)

This is something I've been working on, literally for YEARS.

Back on [20th November 2024](/news/20241120) I wrote:

> Whilst Apple did announce at the 2024 Final Cut Pro Creative Summit that **Final Cut Pro 11** now supports the new macOS system-wide [MediaExtension Framework](https://developer.apple.com/documentation/mediaextension), and that Blackmagic will at some point release a Blackmagic RAW Media Extension - there is currently no time frame, so we have no idea if this is coming in days, weeks, or months.
>
> In [2023](https://x.com/chrisatlatenite/status/1667015417175625734) Apple announced a new framework called **MediaExtension**, that provides a means for developers to create format readers and video decoders for media that the system doesn’t natively support - such as **Blackmagic RAW** and **Nikon NRAW**.
>
> This was supposed to come in **macOS Sonoma**, but they silently killed it - only for it to reappear in this years WWDC for **macOS Sequoia**.
>
> Whilst it's been out for a while, the documentation is insanely complicated and limited and the only person I know who's done ANYTHING with it so far is the incredible [Anton Marini](https://x.com/_vade), who's been building an **ffmpeg** Media Extension over on GitHub [here](https://github.com/vade/FFMPEGMediaExtension).
>
> I originally started playing with and testing MediaExtension's both back in 2023, and during the macOS Sequoia beta's, but never made much progress, as Final Cut Pro 10.8.1 didn't support Media Extensions anyway.
>
> However, given there's no certainty as to when Blackmagic will release a Blackmagic RAW Media Extension, we're going to go back and see if we can bring a Blackmagic RAW Media Extension to market sooner rather than later.
>
> Apple announced 3rd party Motion Templates were "coming soon" to iPad at launch, and that functionality is still not out - so we don't really want to waste time waiting for something that could be a year away.

For the last three years, I've been constantly thinking about Media Extensions and how I could get things working for BRAW Toolbox.

I've had MANY failed attempts.

I've chatted with MANY smart people - especially my friends and co-workers at [Hedge](https://hedge.co).

I've paid the incredible [Anton Marini](https://github.com/vade) for some freelance consulting time to pick his brain.

I've chatted with the amazing people at trade events, and have tried many times to get answers out of Apple.

It was HARD... there's little documentation, no sample code, submitting an Apple Developer Technical Support (DTS) ticket just got closed and refunded without comment, and no one from Apple could connect me to the MediaExtension team.

But... despite everyone telling me it was kinda impossible, and to just give up... I persisted, and inch-by-inch I eventually solved issues.

I used OpenAI's Codex. I used Claude Code. I used ChatGPT. I used them all together comparing notes.

Even with LLMs, it was HARD.

But eventually, with a lot of "human coding" and a lot of help from old mate **Opus 4.7 1M Max**, I EVENTUALLY got something working.

**BRAW Toolbox v3.0.0** is now up on the Mac App Store for the world to play with! 🥳

![](/static/braw-toolbox-v3-0-0.png)

The original/legacy BRAW Toolbox is all still there, so we don't break projects where you've currently using BRAW Toolbox.

In some ways, the original might actually be better, as you can keyframe all the RAW parameters - something not possible with Media Extensions.

The hero BRAW Toolbox application (i.e. the application you actually download from the Mac App Store and launch from your `/Applications` folder) has had a facelift:

![](/static/braw-toolbox-v3-0-0-wrapper.png)

It now also contains a Blackmagic RAW Player for easy testing of the Media Extension:

![](/static/braw-toolbox-v3-0-0-player.png)

And thanks to the incredible [AdrianEddy](https://github.com/AdrianEddy) - the creator of Gyroflow - we even have Gyroflow built in:

![](/static/braw-toolbox-v3-0-0-gyroflow.png)

The original BRAW Toolbox was always a bit of a hack job. The website explains:

> Because Final Cut Pro's decode API is private - we had to just make do with the two public API's we had access to - [Workflow Extensions](https://developer.apple.com/documentation/professional_video_applications/workflow_extensions) and [FxPlug4](https://developer.apple.com/documentation/professional_video_applications/fxplug?language=objc).
>
> We use the Workflow Extension API as our "user interface", where users can select the footage they want to import, and preset any RAW controls.
>
> We use the FxPlug4 API as our "renderer". Essentially, BRAW Toolbox is just a Filter in Apple Motion, and an Effect in Final Cut Pro, but instead of "processing" the source clip, we replace the clip contents with the processed BRAW clip.
>
> We use Blackmagic's official [BRAW SDK](https://www.blackmagicdesign.com/developer/product/camera) - so you get all the same colour science and processing speed as DaVinci Resolve.
>
> As far as we know, BRAW Toolbox is the first application on the Mac App Store to include an FxPlug4 effect.
>
> Then in **BRAW Toolbox v3.0.0** we added a Media Extension for native Blackmagic RAW in QuickTime Player, Final Cut Pro and any other application that supports Media Extensions!

Media Extensions is similarly a bit of a hack job... the BRAW SDK and the Media Extensions SDK aren't really compatible.

One expects a file path, and filesystem access - the other is totally sandboxed and just wants individual frame data for processing.

But, after lots of experimenting, and trying every trick in the book - I eventually got something working, that actually plays back well.

Media Extensions are REALLY locked down. The RAW Processor can't use App Group's, and you can't use Security-Scoped Bookmarks to get access to files. It's REALLY sandboxed.

So there was a LOT of problems to solve - and this was all unchartered territory. Whilst there's two open source Media Extensions in the wild now - neither use the RAW Processor, and neither actually try get metadata into Final Cut Pro.

Blackmagic have always been SUPER helpful with the BRAW side of things, but they couldn't help with the Media Extension side of things.

With no help from Apple... I just had to fly solo.

Again, Apple & Blackmagic did announce that an official Blackmagic RAW Media Extension was coming at the **2024 Final Cut Pro Creative Summit** - however it's now 2026, and it's still not here.

I was fully expecting to see it at NAB 2026 - but when it wasn't mentioned in Grant's announcement video - I knew I just had to ship my own version.

The super interesting thing about Media Extensions (which shows that SOMEONE at Apple is thinking ahead!), is that you can pick which one you want to use for specific codecs in **System Settings**:

![](/static/braw-toolbox-v3-0-0-system-settings.png)

So if/when Apple & Blackmagic do ship the official Blackmagic RAW Media Extension, users will have a choice.

I'm going to GUESS that Blackmagic will do a minimal effort Media Extension - and probably not deeply support Blackmagic URSA Cine Immersive clips, and probably not feed in all the metadata to Final Cut Pro - because let's face it - Blackmagic want you to cut in DaVinci Resolve.

Regardless... it was exciting when BRAW Toolbox was the first solution to bring native Blackmagic RAW to Final Cut Pro, and now I'm super happy to bring Blackmagic RAW to the whole of macOS!

For a strictly limited time, as a thank you for your patience, love and support, BRAW Toolbox is currently discounted to **USD$49.99** (down from USD$79.99) on the Mac App Store.

For users that have already purchased BRAW Toolbox - there's no upgrade fee - just download the latest version from the Mac App Store.

If you run into any bugs, or have ideas or feature requests, the best place to do this is on [GitHub](https://github.com/latenitefilms/brawtoolbox/issues).

So what's next for BRAW Toolbox? I'm going deep into Immersive workflows.

You can read about my early Immersive Workflow notes on [FCP Cafe](https://fcp.cafe/learn/immersive/).

I want to add a **Share Destination** to Final Cut Pro that allows you to export BRAW Immersive timelines directly for Vision Pro.

I want to build realtime previews from your Final Cut Pro BRAW Immersive timelines to your Vision Pro.

I want to make it so that you don't HAVE to use DaVinci Resolve - Final Cut Pro SHOULD be a valid workflow for Vision Pro Immersive, and it's CRAZY that it's currently not.

Onwards & Upwards!

---

**Curves v1.2** is out now.

It includes the following changes:

- Add anchor point parameter: Hold the option key and drag the control point to offset the anchor point
- Improve motion blur for large slow-moving objects
- Fix scaling bug when scaling with Final Cut's built-in transform

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/curves-for-final-cut/id6760507188)

---

**ShotPut IO v1.1.1 (Build 9)** is out now.

![](/static/shotput-io.png)

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/shotputio/id6760034904)

[!button text="Discuss this news item" variant="info"](news/20260422/#discuss-this-page)

---

!!!warning Sponsored
Native Blackmagic RAW support in Final Cut Pro.<br />
[Download BRAW Toolbox](https://brawtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [21st April 2026](/news/20260421)

Happy Tuesday! 👋

Well, it's a big day at Apple.

![](/static/apple-john-ternus-tim-cook.jpg)

**Tim Cook** will become the **Apple Executive Chairman**.

You can read the [Community Letter from Tim](https://www.apple.com/community-letter-from-tim/).

I have emailed Tim Cook (and Craig Federighi) before - when Apple originally rejected Transfer Toolbox - and whilst I never got a personal reply from Tim or Craig, I did hear from several people close to Apple, that he definitely got the email, and meetings were had - so I do believe Tim (and/or his team) read EVERY email.

**John Ternus** will become the new **Apple CEO**.

The transition happens on **1st September** this year.

Whilst this has been rumoured for a long time, I personally didn't see it happening so soon.

You can read the official Apple Press Release in the [Apple Newsroom](https://www.apple.com/newsroom/2026/04/tim-cook-to-become-apple-executive-chairman-john-ternus-to-become-apple-ceo/).

To quote the press release:

> Ternus joined Apple’s product design team in 2001 and became a vice president of Hardware Engineering in 2013. He joined the executive team in 2021 as senior vice president of Hardware Engineering. Throughout his tenure at Apple, Ternus has overseen hardware engineering work on a variety of groundbreaking products across every category. He was instrumental in the introduction of multiple new product lines, including iPad and AirPods, as well as many generations of products across iPhone, Mac, and Apple Watch.
>
> Ternus’s work on Mac has helped the category become more powerful and more popular globally than at any time in its 40-year history. That includes the recent introduction of MacBook Neo, an all-new laptop that makes the Mac experience even more accessible to more people around the world. This past fall, his team’s efforts were on full display with the introduction of a redefined iPhone lineup, including the incredibly powerful iPhone 17 Pro and Pro Max, the radically thin and durable iPhone Air, and the iPhone 17, which has been an incredible upgrade for users. Under his leadership, his team also drove advancements in AirPods to make them the world’s best in-ear headphones, with unprecedented active noise cancellation, as well as the capability to become an all-in-one hearing health system that can serve as over-the-counter hearing aids.
>
> Ternus led much of the company’s focus in areas like reliability and durability, introducing new techniques that have made Apple products remarkably resilient. He has also driven much of Apple’s innovation in materials and hardware design that have reduced the carbon footprint of its products, including the creation of a new, recycled aluminum compound that has been introduced across multiple product lines, the use of 3-D printed titanium in Apple Watch Ultra 3, and innovations in repairability that have increased the lifespans of several Apple products.
>
> Prior to Apple, Ternus worked as a mechanical engineer at Virtual Research Systems. He holds a bachelor’s degree in Mechanical Engineering from the University of Pennsylvania.

In addition, Johny Srouji is now **Apple’s Chief Hardware Officer**.

![](/static/apple-johny-srouji.jpg)

Certainly an interesting and exciting time for Apple, and it will be super interesting to watch the WWDC keynote later this year!

AppleInsider has an interesting article, [Don't expect changes from Apple anytime soon, even with new leadership](https://appleinsider.com/articles/26/04/20/dont-expect-changes-from-apple-anytime-soon-even-with-new-leadership).

I agree - Apple doesn't really move quickly, and they move very, very carefully. The way they handled iPhone's in space is a great example of their restraint, patience, and professionalism.

In other news, this sounds interesting:

> conform.tools builds the tools post professionals wish existed. Convert timelines between any NLE, ship only the frames your edit touches, and wire workflow shortcuts directly into your editor.

You can learn more on the [conform.tools website](https://conform.tools).

---

**SpliceKit's** new icon is now shipping! 🥳

The SpliceKit icon was designed by the amazing [Matthew Skiles](http://matthewskiles.com).

![](/static/splicekit-3-3-1.png)

**SpliceKit v3.3.0** has the following changes:

**🔨 Improvements**
- New icon by the amazing [Matthew Skiles](http://matthewskiles.com). 🥳
- Wider Wizard layout so the update buttons fit correctly when updating.
- **Launch Final Cut Pro** button improvements. Thanks for reporting Jonny!
- Help button now opens the website.
- Switched Sparkle from a vendored framework to Swift Package Manager for easier updating.

**SpliceKit v3.3.1** has the following changes:

**🔨 Improvements**
- Adds a Vision Pro preview panel, Bonjour discovery for `_ivtpreviewclient._tcp`, MCP bridge additions for the Vision Pro tools, and the Resolve Immersive BRAW reverse-engineering notes.

**🐞 Bug Fixes:**
- Fixes crash-on-launch regression in `v3.3.0`. The SpliceKitBridgeMetadata module had its declaration and call site committed but its implementation file was never included in the build, so the safe-install block jumped to `0x0` during Final Cut Pro's `didFinishLaunching` fanout.

You can follow along the adventure over on the [FCP Cafe Discord](https://ltnt.tv/discord).

You can download and learn more on the [SpliceKit Website](https://splicekit.fcp.cafe).

[!button text="Discuss this news item" variant="info"](news/20260421/#discuss-this-page)

---

!!!warning Sponsored
Gyroscope Stabilisation in Final Cut Pro.<br />
[Download Gyroflow Toolbox](https://gyroflowtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [20th April 2026](/news/20260420)

Happy Monday! 👋

On **Tuesday 19th April 2022**, a group of over 100 people in TV and film production worldwide (myself included) sent an [open letter](https://fcp.cafe/openletter/) to Tim Cook of Apple about Final Cut Pro.

Crazy to think that yesterday, that marks 4 years ago! 🤯

> Knut Hake BFS, editor of ‘Blood Red Sky,’ a feature film distributed by Netflix and edited using Final Cut Pro commented, “I think it would make a big difference for workflow consultants, systems integrators and third-party developers if there was a public Beta program for Final Cut Pro. Apple already do it for iOS, macOS and even Safari. It would make Final Cut more reliable and make it much easier for people to fit Final Cut into their plans for the future.”

Sadly, we still don't have any official public beta program.

> Steven Sanders, editor in chief of of the Fox TV series ‘War of the Worlds’ season 3 said “The two main reasons why I am often not allowed to chose my favourite editing application, which is Final Cut Pro are: 1. Collaboration! Editing big productions needs collaboration. Different users have to be able to access the same library at the same time. There is no way around this. Avid Media Composer does it and even DaVinci Resolve does it. Apple still targets the single user. They have to change that. That will change everything. 2. Many professionals do not know how Final Cut works. They are afraid of it, even regard is as ‘iMovie Pro.’ I hear that all the time in my business. This perception really has to change."

Sadly, we still don't have any real collaboration tools, outside of the amazing [Hedge PostLab](https://hedge.co/products/postlab).

> Jeff Asher, editor of ‘Big Sky,’ a US TV series on ABC and Hulu, says “As a TV editor, my job consists of being creative and being fast. Final Cut is the best NLE to achieve both of those goals. Now we need Apple on board with a roadmap and open dialogue with Film and TV creators to restore confidence lost over ten years ago.”

Apple was slowly getting better at communicating and being more open.

The [last Final Cut Pro Creative Summit](https://fcp.cafe/fcp-creative-summit/#2024) was pretty amazing - listening to the Apple's Fitness+ team [talk about their workflow](https://fcp.cafe/news/20241114/) was really great.

But that was 2024 - it's now 2026, and who knows what's happening with the Final Cut Pro Creative Summit.

> We'd love to see Apple publicly support and certify the suppliers of the third-party products and services we use to integrate Final Cut Pro into industry-standard workflows.

Sadly, we haven't really seen any movement in this space.

As someone who runs a Final Cut Pro news site, and also builds niche apps specifically for Final Cut Pro users, there really is a BIG difference between how Blackmagic operates and how Apple does.

At Blackmagic, they have a dedicated Developers section at their NAB booth. Sadly, the only way you'll see Apple staff at NAB is if you happen to know them already.

I wonder... is it time for another open letter, or is it better to just keep bashing along, and build the future we want to make, using tools like [CommandPost](https://commandpost.fcp.cafe) and [SpliceKit](https://splicekit.fcp.cafe)?

Speaking of which... introducing the new **SpliceKit** logo, coming very soon!

![](/static/splicekit-logo.png)

As LLMs become more powerful, and ANYONE can build ANYTHING they want (already we have non-coding video editors making INCREDIBLE things in SpliceKit!) - it'll be interesting to see how Apple reacts and adapts, because it's certainly a crazy world where a non-coding video editor can fix bugs in Final Cut Pro faster than Apple can.

Interesting times ahead!

In other unrelated news, **RØDE Sonaura** sounds super interesting.

You can watch this video on [YouTube](https://www.youtube.com/watch?v=lqXdtqCNZ50):

[![](/static/sonaura.jpg)](https://www.youtube.com/watch?v=_tHdyD9TGCA)

You can read the [news article](https://rode.com/en-au/about/news-info/sonaura) and read more on the [website](https://rode.com/en-au/about/sonaura).

As someone who's done a lot of sound recording on film sets over the years, this sounds SUPER interesting!

If you're at NAB, make sure you head to the **Accsoon Booth in Central Hall (Booth #C7338)** and track down my good friend Bradley Andrew from [FilmDrives](https://filmdrives.com).

He's demoing his amazing iPad app, [Video Assist](https://apps.apple.com/app/video-assist/id6464140279).

Also, if you spot anything cool and interesting at NAB, please let me know!

To wrap things up, here's a fun image that someone sent me recently...

![](/static/apple-ad-01.jpg)

![](/static/apple-ad-02.jpg)

Always cool to see the behind the scenes of a shot!

Thanks team! Onwards & Upwards!

---

Speaking of **SpliceKit**, it continues to move at rapid pace... 🔥

**SpliceKit v3.2.03** has the following changes:

**🥳 New Features:**
- **URL import workflow** — pull remote media straight into your library or timeline. Supports direct `.mp4`/`.mov`/`.m4v`/`.webm` links plus YouTube VOD URLs. Access via the Command Palette (**Import URL to Library** / **Import URL to Timeline**), Lua, or MCP (`import_url`, `import_url_status`, `cancel_import_url`). Three placement modes: import-only, insert at playhead, append to end. Async downloads with live progress, cancellation, and a clear guard against live streams. Requires `yt-dlp` and `ffmpeg` on PATH — run `brew install yt-dlp ffmpeg` and `make url-import-tools` to wire them in. Thanks to @JT-Apps (#40).

**SpliceKit v3.2.04** has the following changes:

**🥳 New Features:**
- **LiveCam** — native webcam booth that records direct to your Library or active timeline without leaving Final Cut Pro. Live preview with looks, color/exposure/contrast/saturation/temperature/sharpness/glow adjustments, audio meter, mirror, date/time stamp overlay, and Library / Timeline placement (Append, At Playhead, or Connected Above). Subject-lift green screen uses Visions `VNGenerateForegroundInstanceMaskRequest` (macOS 14+) for a tight, edge-aware matte that works on people and objects, with a custom Metal pipeline that runs joint-bilateral edge refinement, signed choke, temporal smoothing, spill suppression, and light wrap every frame; falls back to person segmentation on macOS 12-13.
- **Transparent recording** — pick "Transparent" as the green-screen color and LiveCam writes ProRes 4444 with a real alpha plane via `CIRenderDestination` + `kVTCompressionPropertyKey_AlphaChannelMode`, so the clip drops onto your timeline ready to composite without an external keyer. Open via the LiveCam toolbar button, the Enhancements menu, the Command Palette, or `liveCam.show` / `open_livecam`.

**🔨 Improvements**
- URL import now auto-discovers `yt-dlp` and `ffmpeg` from your login shell PATH and symlinks them into the SpliceKit tools dir at install time, so Homebrew installs work without `make url-import-tools`.
- Fixes scroll dead space in the Captions panel.

**SpliceKit v3.2.05** has the following changes:

**🥳 New Features:**
- **MKV / WebM imports** — drop `.mkv` or `.webm` files onto Final Cut and SpliceKit generates a shadow `MP4` remux on the fly so Final Cut Pro sees a native container while the original file stays untouched on disk. Highest Quality toggle for URL imports — new checkbox in the Import URL dialog fetches the highest available resolution from YouTube / Vimeo (1080p, 1440p, or 4K via `VP9` / `AV1`) instead of YouTube's 720p progressive-mp4 cap; leave it off for the fast path.

**🔨 Improvements**
- **URL import reliability** — fixes an FCPXML parse failure when downloaded filenames contain ampersands or other XML-reserved characters (e.g. 'PS5 & PS5 Pro'), replaces the misleading twin-percent progress HUD with a single smooth readout, and vertically aligns the spinner with its label.
- **Share Logs** — one-click upload of the latest Final Cut Pro crash log plus SpliceKit logs to filebin.net, added to the Patcher status panel.
- LiveCam mask kernel dispatch and shader-coordinate fix resolves subject-lift / green-screen edge artifacts on some machines.
- BRAW settings inspector locks to dark appearance to match FCP's other inspectors.
- Points the bundled `.mcp.json` at the `mcp-setup venv` interpreter so Claude Desktop MCP works without hand-editing Python paths.

**SpliceKit v3.2.06** has the following changes:

**🔨 Improvements**
- Shadow-remux now handles h264, hevc, av1, and prores Matroska sources (previously VP9/VP8 only), with audio transcoded to AAC when the source codec can't go into MP4.
- HEVC gets the hvc1 sample-entry tag so Final Cut actually decodes Main-10 MKVs.
- Subtitle and attachment tracks are dropped from the mux.
- B-frame-safe CFR timestamp rewrite preserves h264/hevc/av1 display order.
- Media Import 'Processing files for import...' no longer stalls on folders with unrelated files — the hook short-circuits non-Matroska extensions and uses a deterministic shadow path so the same source is never remuxed twice.
- Menu renamed from Enhancements to Splices; Debug dropdown hidden from the menu bar.

**SpliceKit v3.2.07** has the following changes:

**🔨 Improvements**
- HEVC MP4s tagged hev1 (Dolby Vision, DV.HDR10+ WEB-DLs, and other tool-transcoded HEVC material) now import into Final Cut.
- Previously those files showed up as unimportable because AVFoundation / QuickTime / Final Cut only decode HEVC muxed with the hvc1 sample-entry tag.
- SpliceKit now detects hev1 at import time and retags the file using an APFS clonefile() COW snapshot plus a 2-byte edit to the moov box — no stream-copy remux required, no extra disk space consumed, a few seconds even on 19 GB files. The original file on disk is untouched; only the clone is modified.

You can follow along the adventure over on the [FCP Cafe Discord](https://ltnt.tv/discord).

You can download and learn more on the [SpliceKit Website](https://splicekit.fcp.cafe).

---

**Mat X** writes:

> I've released new version v2.2 build 2 of Media Trust Tools, which comprise **CopyTrust** (card copy ingest), **Drop Verify** (contact sheet, MHL and exif metadata creation), and **Folder Copy Compare** (compare any two folders and make them equal).
>
> **Relay session, rename file, more contact sheet codecs added**
>
> **Media Trust Tools:**
>
> Four macOS apps and a CLI tool for media integrity — copy, verify, and prove it.
>
> Current testing version 2.2 build 2: more features, more fun
>
> Current CopyTrust focus on testing:
> - relay-chain copy workflow with ordered destinations and Queue Relay Chain
> - destination reordering for A -> B -> C style copies
> - startup guidance that stays out of the way until needed
> - real-world resumable CopyTrust ingests
> - external-codec previews, richer metadata, and trust-first background artifacts"
>
> The idea is to load up camera card and walk away (so you can get them gear packed up and put away!).
> The biggest change in this new version is the relay-chain copies (copy safely to first drive then onward it goes).
>
> User Guides and ReadMe in repo, also the [CopyTrust website](https://code.matx.ca/#copytrust) is a good place to start with an overview of CopyTrust and other tools.

You can learn more on [GitHub](https://github.com/macvfx/MHL/releases).

---

**Doza Assist v2.5.0** is out now.

You can learn more on [GitHub](https://github.com/DozaVisuals/doza-assist).

---

**FCP Library Cleaner v0.8.1** is out now with the following changes:

- **Missing Files Handling:** Missing files are now displayed as warnings in the library, and no longer cause the consolidate feature to fail.
- **Maintenance:** Updated dependencies to improve stability and reliability.

You can learn more and download on the [Mac App Store](https://apps.apple.com/app/fcp-library-cleaner/id6499542720)

[!button text="Discuss this news item" variant="info"](news/20260420/#discuss-this-page)

---

!!!warning Sponsored
_Tight. Terse. Terrific. Bim. Bam. Boom._ – Cut/daily reader<br />
Post Production insight delivered to your inbox.<br />
Sign up for **free** at [Cut/daily.com](https://www.cut-daily.com)
!!!

---

### [18th April 2026](/news/20260418)

Happy Saturday! 👋

Well, the lead up to NAB has certainly been interesting already!

There's lots of big industry news and changes.

The big one for the Final Cut Pro community is that [axle.ai](https://www.axle.ai) has brought [FCP.co](https://fcp.co) back from the dead! 🥳

![](/static/fcp-co.jpg)

Interestingly, axle.ai also owns [Larry Jordan's website](https://larryjordan.com) - so now they own two of the biggest Final Cut Pro news sites, despite not really playing in the Final Cut Pro world.

Their USD$20/TB/month **Axle AI Cloud** solution sadly only has a Adobe Premiere panel - no Final Cut Pro Workflow Extension.

It will be interesting if they start heading more down the [Eddie AI](https://www.heyeddie.ai) and [Strada](https://strada.tech) route and start to really try break into the Final Cut Pro community.

The only reason FCP Cafe exists is because of FCP.co's closure.

The origin story of FCP Cafe comes back to [this tweet](https://twitter.com/chrisatlatenite/status/1661729178826477569), where [Alex Gollner](https://twitter.com/Alex4D) tweeted that "fcp.co is no longer the Final Cut Pro watercoooler place", and I replied with "Screw it... I just registered [finalcutpro.tech](https://finalcutpro.tech). Let’s do this thing!".

I eventually decided that FCP Cafe was a better name/domain (inspired by Chris Fenwick's [FCP Grill](https://grill.fcp.cafe)), and as a result, this site was born.

Since creating the site, [lots of people](https://github.com/CommandPost/FCPCafe/pulls?q=is%3Apr+is%3Aclosed) have contributed - which has been AMAZING.

Just a friendly reminder... that the original idea for this website was not that I would be writing stuff, it was that YOU would be writing stuff. That hasn't quite panned out - but it is YOUR site - [you can push content to it](https://fcp.cafe/contribute/)!

Our [FCP Cafe Discord](https://ltnt.tv/discord) has also grown into my absolute favourite online community, filled with some of the nicest, smartest and most talented people I know.

Welcome back FCP.co - it's so awesome to have all those old articles back online!

You can read some of the articles related to me here:

- [Chris Hocking from LateNite Films Explains How His Team Used Final Cut Pro X to Edit, Mix, Grade, and Deliver the Much Anticipated Series "Neighbours - Erinsborough High" For Fremantle Australia (20 November 2019)](https://fcp.co/final-cut-pro/articles/2226-chris-hocking-from-latenite-films-explains-how-his-team-used-final-cut-pro-x-to-edit-mix-grade-and-deliver-the-much-anticipated-series-neighbours-erinsborough-high-for-fremantle-australia)
- [BRAW Toolbox and Gyroflow Toolbox (30 January 2023)](https://fcp.co/final-cut-pro/news/2610-braw-toolbox-and-gyroflow-toolbox)
- [Native BRAW Editing in Final Cut Pro with Chris Hocking (08 February 2023)](https://fcp.co/final-cut-pro/tutorials/2612-native-braw-editing-in-final-cut-pro-with-chris-hocking)

It's certainly also an interesting time for Adobe!

In addition to [Autograph](https://www.maxon.net/en/autograph) and the [Blackmagic DaVinci Resolve Photo page](https://www.blackmagicdesign.com/products/davinciresolve/photo), [Canva](https://www.canva.com) has released [Cavalry](https://cavalry.studio/en/) for free! 🤯

> Motion design reinvented
> Professional, real-time animation software. For free.

![](/static/cavalry-features.png)

This now brings Canva head-to-head with After Effects. Adobe is literally getting attacked from all sides.

Speaking of Adobe, Michelle Gallina over at ProVideo Coalition has written a great article, [Why Adobe Rebuilt Color From Scratch](https://www.provideocoalition.com/why-adobe-rebuilt-color-from-scratch/).

This speaks more of the WHY, whereas Scott Simmons [article](https://www.provideocoalition.com/burning-questions-about-adobe-premiere-betas-new-dedicated-color-mode/) I posted earlier talking more of the HOW.

Not to be out-done, Maxon has also created waves by offering **Cinema 4D** for free on iPad. 🤯

You can watch their YouTube video below titled, [Announcing Cinema 4D for iPad, Free Tools, and Windows on Arm Support](https://www.youtube.com/watch?v=6DiS4GC9ZB4).

[![](/static/cinema4d-ipad.jpg)](https://www.youtube.com/watch?v=6DiS4GC9ZB4)

Also interesting is **Innovative Dreams**.

> Innovative Dreams keeps human creativity at the center of the filmmaking process, while using performance capture, virtual production, and generative AI to get stories told that weren’t possible before. We seek to use technology to usher in a new era of filmmaking creativity.

You can watch a video on [Twitter](https://x.com/innovdreams/status/2044794972059168814?s=20).

Certainly interesting times - and we haven't even got to NAB yet!

---

Speaking of crazy and exciting news... **SpliceKit** now has native Blackmagic RAW support! 🤯

As usual, things have been moving quickly...

**SpliceKit v3.1.149** had the following changes:

**🥳 New Features:**
- Native Blackmagic RAW (BRAW) playback in Final Cut Pro — import, preview, and edit .braw files from URSA Cine / BMPCC / Pocket 4K/6K cameras without transcoding. Works with every codec variant we've seen in the wild (braw, brxq, brst, brvn) including URSA Cine 17K. Playback runs through the Blackmagic RAW SDK with zero-copy Metal decode and realtime framerates at 6K+.

**SpliceKit v3.1.150** had the following changes:

**🐞 Bug Fix:**
- Fix a BRAW decode crash: when VideoToolbox tore down a session while a decode was in flight on our BRAW serial queue, the race could free the host callback mid-Unbind and abort FCP. Release now serializes through the same queue as decode.

**SpliceKit v3.1.151** had the following changes:

**🐞 Bug Fix:**
- Fix missing BRAW support on fresh installs. The patcher was shipping only the SpliceKit framework dylib — the VideoToolbox decoder and MediaToolbox format-reader bundles that actually register .braw with Final Cut Pro were never getting installed. Drag-and-drop and Import Media now work out of the box on every machine.

**SpliceKit v3.2.01** had the following changes:

**🥳 New Features:**
- Native Blackmagic BRAW Color Grading. New BRAW Settings inspector menu modeled after FCP's ProRes RAW panel — Gamma / Gamut / Color Science Gen, ISO / Color Temp / Tint / Exposure / Analog Gain, full tone curve (Saturation, Contrast, Midpoint, Highlights, Shadows, Black Level, White Level), Highlight Recovery, Gamut Compression, and 3D LUT Mode. Open it from the Info inspector by clicking 'Modify BRAW…' on any selected .braw clip. Fixed playback for several BRAW files that were silently dropping persisted color settings on library reopen — the in-process decoder now primes its settings cache from the asset's persisted dict during render setup, so adjustments apply on the first frame after relaunch instead of only after touching a slider. Also fixed a thumbnail-thread race that could crash FCP on rapid slider drags.

**SpliceKit v3.2.02** had the following changes:

**🐞 Bug Fixes:**
- Fix jerky Effects browser category sidebar scroll on installs with many effects. Every row vended during scroll was re-filtering the full effect registry with ~10k locale-aware string comparisons per frame (via FFBKEffectLibraryFolder.items → FFEffect.userVisibleEffectIDs → bsearch); those results are now cached per-folder and invalidated on effect-registry notifications.

This is honestly all amazing - not only is SpliceKit now adding features that we've been trying to solve for decades (like native BRAW), but it's also fixing Apple's bugs like the jerky Effects Browser! 🤯

You can follow along the adventure over on the [FCP Cafe Discord](https://ltnt.tv/discord).

You can download and learn more on the [SpliceKit Website](https://splicekit.fcp.cafe).

---

**ScriptBlade v2.0.1** is out now with the following changes:

**Improvements:**
- Fixed an issue where save actions (Export SRT, Save Project, etc.) were triggered in all open windows. Now only the active window responds
- Fixed a bug where incorrect session content could overwrite files
- Fixed an issue where text edits in blocks were not saved properly
- Improved project save reliability and consistency

**New Features:**
- Added an Export SRT button to the Paper Edit panel for quicker access
- Added clearer visual distinction between focused and selected blocks (yellow for focus, blue for selection)

You can learn more and download on the [Mac App Store](https://apps.apple.com/app/scriptblade/id6758888024).

[!button text="Discuss this news item" variant="info"](news/20260418/#discuss-this-page)

---

!!!warning Sponsored
Native Blackmagic RAW support in Final Cut Pro.<br />
[Download BRAW Toolbox](https://brawtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [16th April 2026](/news/20260416)

Happy Thursday! 👋

In very interesting news, [Frame.io](https://frame.io) has teamed up with [Suite](https://www.suitestudios.io) to bring the world **Frame.io Drive**.

![](/static/frameio-drive.jpg)

> Mount Frame.io projects to your desktop, and your media is live in Premiere, Photoshop, After Effects, and every other tool your team uses. No waiting for downloads. Work can start the moment you mount the project.

This is super interesting because Adobe owns Frame.io, and has a [stake](https://www.lucidlink.com/blog/lucidlink-series-c) in [LucidLink](https://www.lucidlink.com) - which is essentially a competitor to Suite.

You can read more on the [Frame.io website](https://frame.io/features/mounted-storage) and [blog](https://blog.frame.io/2026/04/15/introducing-frame-io-drive-access-your-media-anywhere-instantly/).

In other super interesting industry news, **Maxon** has just released [Autograph](https://www.maxon.net/en/autograph) for free to the world! 🤯

Autograph is free 2D/3D motion graphics & VFX software with the following features:

- Free access to Autograph for individuals
- Access to Universe Plugins and Red Giant OFX tools (license required)
- Access to Cineversity Training
- Integration with third party VFX tools

With Blackmagic now going after Photoshop with the new Photos page in DaVinci Resolve, and now Autograph targeting After Effects, this is certainly an interesting time for Adobe!

Meanwhile, Adobe has just announced a new dedicated **Color Mode** for Adobe Premiere.

You can read all about it from Scott Simmons over at [ProVideo Coalition](https://www.provideocoalition.com/burning-questions-about-adobe-premiere-betas-new-dedicated-color-mode/).

Completely unrelated, someone sent us this free audio plugin today which seems super cool - [Real-time Noise Suppression Plugin](https://github.com/werman/noise-suppression-for-voice).

---

**OrangeCue Hub (for Mac)** and **OrangeCue Client (for Vision Pro)** is out now.

This is a super interesting collection of apps created by **Oliver Holtkamp** - whom I originally created [News Import](https://newsimport.fcp.cafe) for!

Oliver writes:

> OrangeCue is a synchronized multi-device playback and show-control suite built for shared Apple Vision Pro experiences. It enables operators to manage media libraries and playlists, distribute clips to connected headsets, launch shows manually or on a schedule, trigger precise synchronized starts, and monitor playback status, progress, and device connectivity in real time. The platform includes a Mac-based Hub, an iPad control interface, a visionOS client, plus iPhone and Apple Watch remote control for fast transport access during live operation. It also supports welcome screens, looped start videos, branded startup modes, and automatic re-sync for headsets that join a show late.
>
> Beyond playback control, OrangeCue provides an end-to-end workflow for immersive show preparation and delivery. OrangeCue APMP Drop converts and packages 360 media for headset playback, OrangeCue Cable Uploader enables reliable wired transfer of large files, and Stream Deck support adds tactile control for event environments. Designed for operation across devices on the same local network, OrangeCue brings synchronized playback, media preparation, deployment, monitoring, and mobile remote control together in one streamlined solution for immersive screenings, installations, live events, and shared audience experiences.
>
> On App Store: OrangeCue Hub (Mac, Maximum of 2 x Vision Pro) , OrangeCue Client (Vision Pro, free)
>
> Later this month: OrangeCue Event (Mac, up to 100 Vision Pro via FxFactory), OrangeCue iHub for iPad, OrangeCue Assistant (iPhone + Apple Watch)

You can find OrangeCue Hub on the [Mac App Store](https://apps.apple.com/app/orangecue-hub/id6759935750).

![](/static/orangecue-01.png)

![](/static/orangecue-02.png)

![](/static/orangecue-03.png)

You can find OrangeCue Client on the [Vision Pro Store](https://apps.apple.com/app/orangecue-client/id6760079200).

![](/static/orangecut-04.jpg)

It'll be super interesting to see where this goes!

---

**G.Splatting v1.0.0** is out now - a Gaussian Splatting plugin for Final Cut Pro with real-time Metal GPU rendering.

> Next-generation 3D scene reconstruction powered by Metal. Immersive volumetric environments for your timeline.
>
> Native `.PLY`: The industry gold standard for high-fidelity Gaussian Splats and custom training pipelines.
>
> Optimized `.SPLAT` & `.KSPLAT`: Lightning-fast loading and playback for compressed, lightweight models from Luma AI, Polycam, and Postshot

You can learn more on the [G.Splatting website](https://www.gphyx.com).

---

**Scene Cut Detector v2.0.0** is out now.

It has the following changes:

- Added FCP 7 XML export for DaVinci Resolve (replaces EDL)
- Fixed frame drift caused by misidentifying 24fps as 23.976fps
- Fixed missing frame at cut points in 29.97fps
- Added 47.952fps, 119.88fps support
- For variable frame rate (VFR) videos, we recommend transcoding to a constant frame rate before analysis.

You can learn more and download from the [Mac App Store](https://apps.apple.com/app/scene-cut-detector/id6759056281).

---

As usual, SpliceKit has been bashing along at a rapid pace... 🔥

**SpliceKit v3.1.144** had the following changes:

**🔨 Improvements**
- Transcript Editor diagnostics, timestamp mapping fixes, speaker cleanup, and faster pause deletion.

**SpliceKit v3.1.145** had the following changes:

**🔨 Improvements**
- Audio Mixer: managed role-bus effects, solo/mute controls, FX menu, state mirroring, diagnostics.

**SpliceKit v3.1.146** had the following changes:

**🐞 Bug Fix:**
- Fix an Audio Mixer bug that could cause a major performance drop after adding audio bus effects. Mixer polling now avoids repeated effect-stack mutations while keeping bus effects attached to their roles.

**SpliceKit v3.1.147** had the following changes:

**🐞 Bug Fix:**
- Fix OTIO and FCPXML import reliability: preserve source in-points, normalize media URLs, avoid library-picker fallbacks, and import projects through the in-process pipeline.

**SpliceKit v3.1.148** had the following changes:

**🔨 Improvements**
- Automatically expose Apple's AUSoundIsolation effect on startup so Voice Isolation stays available in the audio effects browser across launches.

You can download and learn more on the [SpliceKit Website](https://splicekit.fcp.cafe).

---

**Doza Assist** has also had a heap of updates.

Doza Assist now exports to Final Cut Pro, Premiere Pro, or DaVinci Resolve.

Pick your editing platform once with the new Edit in: selector in the project header — every export button throughout the app updates automatically to generate the right format.

**Doza Assist v2.4.0** contains the following changes:

- **Final Cut Pro → FCPXML 1.11** — unchanged from v2.3, pre-cut timeline with source media references and keyword ranges
- **Premiere Pro → Final Cut Pro 7 XML (xmeml v5)** — the format Adobe officially recommends for third-party round-tripping. Imports cleanly via File → Import with V1 + A1/A2 tracks, integer-frame timecode, and NTSC-aware rate handling (23.976 / 29.97 / 59.94)
- **DaVinci Resolve → CMX 3600 EDL** — imports via File → Import → Timeline → Pre-Conformed EDL. Source clip names and Doza Assist's editorial notes are preserved as EDL comments. HH:MM:SS:FF non-drop timecode, sanitized reel names
- Platform choice **persists per-project** and updates the global default for new projects
- Preferences stored at `~/Library/Application Support/Doza Assist/preferences.json`

**Under the hood:**
- New `exporters/` package with a `BaseExporter` interface and a router
- FCPXML path is byte-for-byte identical to v2.3 — the new wrapper delegates to the existing `fcpxml_export.py` code (regression firewall, asserted by a golden test)
- Ffprobe resolution/framerate helpers extracted from two duplicated inline copies in `app.py` into a shared `media_probe` module
- **36 tests** (22 new), including Premiere XML NTSC frame math, EDL 1-hour timecode (caught a 4-second drift mid-build), and the FCPXML byte-identity check

You can download and learn more on [GitHub](https://github.com/DozaVisuals/doza-assist).

[!button text="Discuss this news item" variant="info"](news/20260416/#discuss-this-page)

---

!!!warning Sponsored
Gyroscope Stabilisation in Final Cut Pro.<br />
[Download Gyroflow Toolbox](https://gyroflowtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [15th April 2026](/news/20260415)

Happy Wednesday! 👋

It's still VERY early days, but we finally have Blackmagic RAW running natively in Final Cut Pro via a Media Extension! 🥳

![](/static/braw-media-extension-fcp.png)

I still have a lot of problem solving and testing to do before this is ready for prime time, so it's entirely possible Blackmagic & Apple will release their version first, but I'm HOPING to include it in BRAW Toolbox in the not-so-distant future.

Stay tuned!

As NAB edges closer and closer, we've already started getting industry news coming out.

The big news today is that **Thomas Riedel** has acquired premium manufacturer **ARRI**. 🤯

![](/static/arri-01.jpg)

![](/static/arri-02.jpg)

We basically shoot 80% of our stuff on ARRI cameras - pretty much every major DOP in Melbourne has one.

The remaining 20% is probably Blackmagic Pocket's on Ronin's - so they're normally a B-camera, with an ARRI as the main - so this news hits pretty close to home!

The press release [reads](https://www.wallstcom.com/Riedel/260414.html):

> **Thomas Riedel Acquires Premium Manufacturer ARRI**
> *Strategic Alignment With the Riedel Group for Innovation and Growth*
>
> *WUPPERTAL / MUNICH, Germany — April 14, 2026* — Thomas Riedel, founder and owner of Riedel Communications and the Riedel Group, has acquired ARRI, the Munich-based premium manufacturer of camera and lighting technology for motion picture and live entertainment. The entrepreneur from Wuppertal was chosen in a competitive international process with his concept for a new home for ARRI, marking the largest acquisition of his career to date.
>
> The Riedel Group is a globally recognized specialist in advanced audio, video, and data technology, delivering infrastructure solutions for many of the world’s most demanding broadcast, live event, and sports productions. Through the acquisition of ARRI, Thomas Riedel establishes a close strategic alignment between ARRI and the Riedel Group, expanding its expertise across the entire production chain — from camera optics to distribution. ARRI’s ecosystem of camera, lighting, and systems technology perfectly complements the Riedel Group’s existing portfolio and opens up new technological and strategic market opportunities for both companies.
>
> Founded in 1917, ARRI has been family-owned ever since and is regarded as a global leader in professional film technology, having been recognized with 20 scientific and technical awards from the Academy of Motion Picture Arts and Sciences. “For more than a century, ARRI has stood for engineering excellence, innovation, and the highest quality. This success story will now continue and remain in German ownership,” said Dr. Walter Stahl, Managing Director of ARRI GmbH and member of the founding family.
>
> Through close collaboration, ARRI and Riedel aim to unlock new areas of growth, especially in live entertainment and sports. By combining their respective technologies, the companies plan to develop integrated solutions that open new creative and technical possibilities for customers. As the first joint milestone of this collaboration, ARRI will debut its camera technology at the Eurovision Song Contest, where Riedel serves as the technology provider and NEP oversees production.
>
> Under the new ownership of Thomas Riedel, ARRI’s existing management team will continue to lead the company and further advance its ongoing transformation. The company will retain independent operations and remain headquartered in Munich.
>
> “Thomas Riedel has built a first-generation family business and stands for entrepreneurial continuity and long-term thinking,” said Chris Richter, Managing Director of ARRI. “We look forward to working with a successful entrepreneur and to the resulting market opportunities and access — both in existing and new markets.”
>
> “The Riedel Group brings highly complementary technologies and extensive expertise in live production to this partnership,” added David Bermbach, Managing Director of ARRI. “This strengthens our strategic direction as a ‘Trusted Technology Leader for the Next Generation of Media & Entertainment.’”
>
> “My entrepreneurial path has been closely tied to ARRI for years,” said Thomas Riedel. “This acquisition represents the most significant personal milestone of my career so far. I have great respect for this exceptional brand, its outstanding products, and its strong team. At the same time, I see tremendous potential and am confident that, together, we can position ARRI for long-term stability and future success.”
>
> **About ARRI:**
> “Inspiring images. Since 1917.” ARRI is a global player within the motion picture and live entertainment industries. Named after its founders August Arnold and Robert Richter, ARRI was established in Munich, Germany, where the headquarters is still located today. Other subsidiaries are in Europe, North and South America, Asia, and Australia.
>
> The ARRI Group consists of the business units Camera Systems, Lighting, and Rental, all dedicated to synergizing creativity and future technologies to enhance moving images and live events. ARRI is a leading designer and manufacturer with a worldwide distribution and service network. The product portfolio includes digital cameras, lenses, lighting fixtures, apps, and accessories. ARRI also offers first-class services through ARRI Rental’s provision of both standard and exclusive camera, lighting, and grip packages to professional productions around the world. ARRI’s virtual production and innovative workflows solutions boost efficiency for a broad range of studio operators, producers, and corporations. In recognition of its innovative contributions to the film and television industries, ARRI has been honored with 20 scientific and technical awards from the Academy of Motion Picture Arts & Sciences and six Engineering Emmys from the Television Academy and the National Academy of Television Arts & Sciences.
>
> For locations and more information, please visit [www.arri.com](https://www.arri.com).
>
> **About Thomas Riedel:**
> Thomas Riedel is a Wuppertal-based entrepreneur and innovator and the founder, 100% shareholder, and CEO of the Riedel Group. His innovative spirit and passion made him a pioneer and storyteller in the entertainment technology industry, where he has been shaping and redefining sports and entertainment formats with courage and creativity for almost four decades. In addition to his CEO duties, Thomas Riedel personally participates in numerous projects around the world as an investor, advisor, and driver of digital transformation.
>
> **About Riedel Communications:**
> Riedel Communications is a leading provider of live production tools in the worlds of media, sports, and entertainment. The company's hard- and software solutions span from distributed video and audio networks over intercom and replay solutions to WAN and MPLS applications. Thanks to Riedel's holistic approach, its three business units — Product Division, Managed Technology Division, and Networks Division — can leverage powerful synergies to provide flexible infrastructures, tools, and services for both fixed and temporary installations around the globe, enabling Riedel customers to run even the most complex projects on-site, remotely, or in the cloud. Riedel is locally headquartered in Santa Clarita, California, with its global headquarters in Wuppertal, Germany. Riedel employs over 1,000 people in 30 locations throughout Europe, Australia, Asia, and the Americas.

Whilst I don't know a lot about Thomas Riedel, this doesn't seem like the worst news - at least ARRI is still owned by someone in the industry. Kinda sad though that ARRI's struggling.

---

**VidCore** is currently looking for TestFlight testers.

It adds `.mkv` support to macOS, including QuickTime and Final Cut Pro via a Media Extension.

You can read more on [Reddit](https://www.reddit.com/r/TestFlight/comments/1rpe0za/vidcore_add_mkv_support_to_macos_including/).

---

**Eddie AI v3** is out now!

**Shamir Allibhai** writes:

> We launched Eddie AI v3 today!
>
> For the past few months we’ve been quietly working on something we’re really excited about.
>
> It began with an idea: what if you could finish a shoot day, send Eddie your footage, and wake up to a rough cut?
>
> Today, that idea is reality. Eddie v3 is live.
>
> The headline feature is Night Shift: text Eddie a link to your footage in Frame.io, Google Drive, or Dropbox - literally just send it to +1 650 444 9211 and by 8am the next morning you've got a rough cut, logs, and organized media ready to open in Premiere, Resolve, or Final Cut.
>
> It also handles B-roll placement for docu-style projects now with interview soundbites, story structure, and B-roll sequences assembled automatically.
>
> We built Night Shift because the best time to process footage is when nobody’s awake to watch the progress bar.
>
> Get started by texting Eddie a hello: +1 650 444 9211
> Or download Eddie AI > New Project > Show All Modes > Night Shift
>
> For those going to NAB, text Eddie NAB2026 to get a link to our party with Reddit Post Pro.
>
> I'd love to hear what you think of Eddie v3!

Regardless of what you think of Eddie AI, we STRONGLY recommend you sign up to their newsletter, [The Rough Cut](https://roughcut.heyeddie.ai/subscribe) - it's amazing.

You can download and learn more on the [Eddie AI website](https://www.heyeddie.ai).

---

Yet again, things have been busy in the world of **SpliceKit**! 🔥

The Audio Mixer has been dramatically improved. 🎚️

You can watch a demo video on [YouTube](https://www.youtube.com/watch?v=sKZHMD_mYxI):

[![](/static/audio-mixer.jpg)](https://www.youtube.com/watch?v=sKZHMD_mYxI)

**SpliceKit v3.1.14** had the following changes:

**🥳 New Features:**
- **All-new Audio Mixer UI:** role-colored faders with gradient strips, segmented LED meters with clipping detection, per-fader automation arming, real-time volume during playback, keyframe management

**SpliceKit v3.1.141** had the following changes:

**🐞 Bug Fix:**
- Fix Remove All Keyframes command: recursive discovery of keyframe targets across child clips, effect stacks, and audio channels

**SpliceKit v3.1.142** had the following changes:

**🐞 Bug Fix:**
- Fix audio mixer clip discovery for nested compound clips and storylines, handle deduplication, caption panel visibility guard

**SpliceKit v3.1.143** had the following changes:

**🔨 Improvements**
- Add song cut workflow for beat-synced video assembly from sequence-backed sources. Fix cumulative frame drift in FCPXML builds, fix connected song alignment, add half-beat pairing rule, add sequence name substring matching, resolve timeline clips to browser equivalents for native insertion.

You can download and learn more on the [SpliceKit Website](https://splicekit.fcp.cafe).

---

**Doza Assist** has also had a heap of updates.

**Doza Assist v2.2.0** contains the following changes:

**FCPXML Framerate Auto-Detection**
- FCPXML exports now automatically detect the source media's framerate via ffprobe instead of defaulting to 23.976fps. This fixes "Invalid edit with no respective media" errors when importing into Final Cut Pro with non-23.976 footage (25fps PAL, 29.97, etc.). The Export tab dropdown also pre-selects the detected framerate.

**Expanded Language Support (29 languages)**
- Added Czech, Danish, Dutch, Finnish, Greek, Hebrew, Hungarian, Indonesian, Malay, Norwegian, Polish, Romanian, Slovak, Swedish, Thai, Turkish, Ukrainian, and Vietnamese to the language dropdown — up from 12 to 29 languages.

**Retranscribe Button:**
- You can now change the language and re-run transcription on existing projects without recreating them. Open any transcribed project and click Retranscribe in the header bar to pick a new language. (#8)

**Doza Assist v2.2.1** contains the following changes:

**Non-English Transcription Quality:**
- WhisperX was loading Whisper large-v3 with int8 quantization for speed. This is fine for English but significantly degrades quality for morphologically rich languages like Czech, Polish, Russian, Slovak, Hungarian, etc. — making transcriptions nearly unusable compared to tools like MacWhisper that use the unquantized model.
- Doza now uses float32 on CPU (matching MacWhisper's quality). Transcription will be somewhat slower but quality will be dramatically better for non-English languages.

**Doza Assist v2.2.2** contains the following changes:

**Non-English Transcription Now Actually Works**
- v2.2.1 was supposed to fix non-English transcription quality but didn't — the real root cause was two bugs layered on top of each other:
- WhisperX was never installed in the venv (the installer only installs parakeet-mlx and openai-whisper), so the multilingual code path always failed silently and fell through to the fallback.
- The fallback used Whisper base — a tiny 74M parameter model that produces roughly phonetic gibberish for morphologically rich non-English languages (Czech, Polish, Russian, etc.).

**The Fix:**
- Doza now uses Whisper large-v3-turbo (1.62 GB) — the exact same model MacWhisper uses. Verified locally on a Czech test file: the output now matches MacWhisper's near-perfect transcription.
- The turbo model is a distilled version of large-v3 with 4 decoder layers instead of 32, making it ~8× faster than large-v3 while maintaining comparable quality including strong non-English support.
- First transcription after updating will download the 1.51 GB model — subsequent transcriptions use the cached copy.

You can download and learn more on [GitHub](https://github.com/DozaVisuals/doza-assist).

[!button text="Discuss this news item" variant="info"](news/20260415/#discuss-this-page)

---

!!!warning Sponsored
_Tight. Terse. Terrific. Bim. Bam. Boom._ – Cut/daily reader<br />
Post Production insight delivered to your inbox.<br />
Sign up for **free** at [Cut/daily.com](https://www.cut-daily.com)
!!!

---

### [14th April 2026](/news/20260414)

Happy Tuesday! 👋

Following on from yesterday's Blackmagic-heavy post, their NAB 2026 video went live last night.

You can watch it on [YouTube](https://www.youtube.com/watch?v=RQP06snnWOY):

[![](/static/blackmagic-nab-2026.jpg)](https://www.youtube.com/watch?v=RQP06snnWOY)

I just really love these launch videos - they're perfect.

Grant is just awesome - he's so knowledgeable, so on-top of everything, and clearly just loves what he does, and what his and his team builds.

I get so much joy at watching him geeking out over "beautiful racks" of gear.

It's clear that he's VERY excited about Immersive Filmmaking - especially for live broadcast.

As this is a Final Cut Pro site, I won't go into too much detail over the changes in DaVinci Resolve - however it's basically what I was expecting.

[Jumper](https://getjumper.io) now has competition in the DaVinci Resolve space, and there's a HEAP of incredible new machine learning tools.

[Fairlight Live](https://www.blackmagicdesign.com/au/products/fairlightlive) looks AMAZING - and insanely powerful.

You can learn more about all their announcements and new products on the [Blackmagic website](https://www.blackmagicdesign.com).

Interestingly, the one thing we didn't actually see released is an official Blackmagic RAW Media Extension, which was announced at the previous Final Cut Pro Creative Summit - so [BRAW Toolbox](https://brawtoolbox.fcp.cafe) remains the best way to get BRAW footage into Final Cut Pro.

I'm still tinkering with a BRAW Toolbox Media Extension - but it's a very tricky problem to solve, so no promises or ETA.

In other news, Apple has removed the old Pages, Keynote, Numbers apps from the Mac App Store, which is kinda sad - leaving only the Apple Creator Studio versions.

You can read more on [9to5Mac](https://9to5mac.com/2026/04/13/apple-removes-old-pages-keynote-numbers-apps-for-macos/).

---

Things have been busy in the world of **SpliceKit**! 🔥

We now have OpenTimelineIO import and export, and the beginnings of an Audio Mixer! 🥳

There's been a quite few releases in the last 24 hours...

**SpliceKit v3.1.8** had the following changes:

**🐞 Bug Fixes:**
- **Transcript persistence across projects** — switching projects no longer shows stale transcript from previous project; added `transcript.clear` RPC endpoint
- **addTodoMarker fixed** — was returning "No responder handled"; now uses direct sequence method
- **Silence detection** — was returning 0 silences on clips with obvious pauses; improved threshold algorithm and added start-to-start interval detection
- **Timeline duration** — was reporting 0.000s; now falls back to summing spine clip durations
- **add_markers_at_times offset** — now accounts for timeline start offset (e.g. 01:00:00:00)

**🥳 New Features:**
- **OpenTimelineIO import/export** — universal timeline exchange with DaVinci Resolve, Premiere Pro, Avid (`.otio`, `.edl`, `.aaf`)
- **Native OTIO-to-FCPXML converter** — frame-exact conversion with canonical SMPTE timebases
- **Compound clip drilling** — `get_timeline_clips` now exposes `isCompound`, `nestedItemCount`, and `include_nested` parameter
- **Batch editing tools** — `apply_transition_to_all_clips`, `batch_apply_effect`, `batch_color_correct`
- **Expanded command palette** — full categorized action lists, comprehensive AI capabilities prompt
- **Lua example** — `shuffle_clips.lua` script

**SpliceKit v3.1.9** had the following changes:

**🐞 Bug Fixes:**
- Fix patcher signing on macOS 15.7.3 — the patcher was applying only 1 entitlement (cs-disable-library-validation) instead of the full set needed for ad-hoc signing. This caused the re-signed app to launch unsigned on some systems, triggering a CloudKit crash (EXC_BREAKPOINT in CloudContentCatalog.updateCatalogAndRegistry()). Now applies all 4 required entitlements including explicit app-sandbox=false to prevent CloudKit entitlement validation failures. Fixed across all patcher paths: GUI app (initial patch + update), shell script, and entitlements.plist. (Fixes #23)

**📄 Documentation:**
- Added plain-English explainer — What Is SpliceKit? covers what it is, how it works, and whether it's safe, written for non-technical users. Linked from the top of the README.

**SpliceKit v3.1.10** had the following changes:

**🐞 Bug Fix:**
- Fix CloudKit crash on Final Cut Pro 12.2+, patcher diagnostic logging to `~/Library/Logs/SpliceKit/patcher.log`, comprehensive startup diagnostics in `dylib`, disable spring-loaded blade.

**SpliceKit v3.1.11** had the following changes:

**🐞 Bug Fix:**
- Fix transcript editor missing connected clips (`FFAnchoredClip` URL resolution), mixer panel, caption enhancements, CloudContent diagnostic logging, patcher launch monitoring.

**SpliceKit v3.1.12** had the following changes:

**🔨 Improvements**
- Live audio metering in mixer panel, Final Cut Pro role colors, keyframed volume support.

**SpliceKit v3.1.13** had the following changes:

**🐞 Bug Fix:**
- Mixer metering works without Audio Meters panel, CALayer tree search for mini transport meters.

You can download and learn more on the [SpliceKit Website](https://splicekit.fcp.cafe).

---

**PostLab v26.1.2** has been released with the following changes:

**Improved:**
- Much improved and faster Synology Drive support.

**Fixed:**
- On Synology Drive, Box and Dropbox, an error could occur when switching and loading collections. Also, loading and saving could take longer than expected. Thanks for reporting, Felipe, Matthieu and Sam!

You can learn more and download on the [PostLab website](https://hedge.co/products/postlab).

---

**Doza Assist v2.1.0 and v2.1.1** have been released with the following changes:

**Stories Sidebar:**
- Browse, rename, and switch between stories in the left sidebar
- Duration and clip count shown per story
- Trash button with confirmation dialog

**Chat Story Building:**
- Build stories directly from Chat using natural language
- Build as Story button when chat returns clips
- Inline story results in chat with clip previews and Open in Story Builder action

**UI Improvements:**
- Reordered tabs: Transcript > AI Analysis > Chat > Story Builder > Clips > Export
- Removed story topbar, moved Play All to action buttons
- Better sidebar scrolling - video player stays visible
- Clean spacing between action buttons and story clips

**Bug Fixes:**
- Fixed story clips not rendering when opening Story Builder from Chat
- Speakers section hidden on Story Builder tab to reduce clutter

You can download and learn more on [GitHub](https://github.com/DozaVisuals/doza-assist).

---

**FCP Library Cleaner v0.8.0** is out now with the following improvements:

- Cleanup Options: Added a "Delete All Temporary Files" button to quickly remove render, proxy, optimized, and optical flow files in a single click.
- Library Import: Enhanced macOS integration allowing libraries to be imported by dragging and dropping them directly onto the application icon.
- Translations: Expanded language support with new translations for German, Spanish, and Portuguese.
- User Interface: Refined the interface for a more intuitive experience.
- Error Handling: Improved internal logic to catch and display detailed error messages directly within the interface for better diagnostics.
- Maintenance: Updated dependencies and refactored internal code architecture to improve stability and reliability.

You can learn more and download from the [Mac App Store](https://apps.apple.com/app/fcp-library-cleaner/id6499542720).

---

**Change List X v1.2.27** is out now with the following bug fix:

- Critical bug fix for a crash caused by audio with no timecode

You can learn more and download from the [Mac App Store](https://apps.apple.com/app/change-list-x/id694746044).

[!button text="Discuss this news item" variant="info"](news/20260414/#discuss-this-page)

---

!!!warning Sponsored
Native Blackmagic RAW support in Final Cut Pro.<br />
[Download BRAW Toolbox](https://brawtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [13th April 2026](/news/20260413)

Happy Monday! 👋

At 3AM tonight (Melbourne time) Blackmagic will be pushing out their NAB update video to the world. 🥳

[![](/static/bmd-nab-2026.png)](https://www.blackmagicdesign.com)

Whilst I most likely won't watch the video until a more sensible hour, like 6AM (unlike WWDC where I'll generally get up in the middle of the night) - Blackmagic's pre-NAB announcements are always super exciting and interesting.

To give some backstory... Blackmagic Design was founded on 7 September 2001 by the amazing and seemingly unstoppable **Grant Petty**, in my hometown of **Melbourne, Australia**.

![](/static/grant-petty.jpg)

Blackmagic’s first breakthrough was not a cinema camera or an editing suite. It was **DeckLink**, launched in 2002: a capture card for Mac workflows that brought uncompressed 10-bit video into a price range that was startlingly low for the era.

One official release framed the value proposition bluntly: **high-quality uncompressed video at US$995**.

Later Blackmagic materials would describe DeckLink as having launched a broader revolution in affordability for post-production.

![](/static/grant-petty-2.jpg)

That detail matters because it reveals something fundamental about Grant’s operating style. He did not begin with a prestige product meant to impress the top end of Hollywood. He began at a pressure point: a technical bottleneck where price and capability were wildly out of balance.

That pattern would repeat again and again over the next two decades. Blackmagic rarely behaved like a luxury manufacturer. It behaved like a company studying where incumbents had become complacent - then using engineering and cost discipline to collapse the old margin structure.

Blackmagic became known as the company that brought high-end post production tools to the world.

Grant has always been about bringing professional hardware to the masses. He makes products for EVERYONE - not the Hollywood elite.

He grew up in a housing commission flat - his family didn't have much money.

In a [Financial Review](https://www.afr.com/wealth/people/he-grew-up-in-a-housing-commission-now-he-s-worth-1-4b-20220712-p5b14k) article he explained:

> “When you’ve come from that [humble] background, you realise that the world you’re in is too fat and too lazy and too slow and too greedy. You realise that what you actually have is a very nimble, unconstrained thing. And what you’re going to do is, basically, take over the whole industry.”

Grant has described his early experience in television as a confrontation with a strange contradiction: the industry was full of creative people, but the tools were priced and structured in ways that concentrated power in a handful of large facilities.

In the early 2000s, high-end post-production hardware could cost extraordinary sums, which meant much of the industry behaved less like a creative field and more like an expensive equipment-rental hierarchy.

That insight became the foundation for Blackmagic Design.

This is what makes the Blackmagic story so interesting. It was never just a product story. It was an argument about access.

Grant was not trying merely to sell gear into an existing system. He wanted to alter who could participate in that system at all.

The company’s enduring philosophy - professional capability at dramatically lower prices - makes the most sense when you see it not as a pricing strategy, but as a political philosophy of technology.

Blackmagic’s products are designed to move power away from gatekeepers and toward editors, colourists, cinematographers, small studios, students, and eventually YouTubers, indie filmmakers, live producers, and entire classrooms.  ￼

Many company histories become less interesting the moment the founder becomes a “visionary” in the vague corporate sense. Grant's story is more compelling because he never seems to have fully left the engineering bench behind.

Profiles of Grant emphasize that he remained unusually close to the technical and operational guts of the business, including writing internal SQL code that helped run company systems. [CineD](https://www.cined.com/the-story-of-blackmagic-design-how-grant-petty-changed-the-industry/), drawing on [Forbes’](https://www.forbes.com/sites/schifrin/2022/04/11/how-an-aussie-from-the-housing-projects-became-a-billionaire-making-gear-for-next-gen-spielbergs/) reporting, described this as part of what makes Blackmagic so unusual: a founder-CEO still directly engaged in the architecture of how the company works.  ￼

That detail helps explain Blackmagic’s culture. The company often comes across less like a brand-management machine and more like a deeply opinionated engineering organisation.

Grant has consistently argued for practical knowledge over corporate polish, and for keeping decision-making close to the people who actually understand the tools and the users.

[SmartCompany’s interview](https://www.smartcompany.com.au/entrepreneurs/blackmagic-design-founder-grant-petty-on-how-a-burning-revelation-led-him-to-create-his-300-million-video-technology-company/) with him captures that ethos clearly: he speaks less like a financier and more like a builder who distrusts distance between problem and solution.  ￼

If you look at Blackmagic's branding - it's super slick. Every product photo is hyper stylised, and Photoshop'd to the max.

You never see messy cables, to wear and tear on equipment - it always looks perfect.

![](/static/blackmagic-hollywood.jpg)

On the flip side, if you watch Blackmagic's previous NAB videos, like the below:

[![](/static/blackmagic-nab-2025.jpg)](https://www.youtube.com/watch?v=GxX-Wnfi51k)

It's just Grant talking directly to camera - constantly going off script - but always talking with an insane amount of product knowledge.

He's always wearing his trademark black Blackmagic shirt.

Unlike a modern Apple Keynote video, Grant and Blackmagic do something more like Steve Jobs - it's just Grant talking honestly and enthusiastically directly to his audience. And I love it.

Despite being the CEO - Grant is INSANELY hands on, and I would guess that he probably knows more about Blackmagic's products, both inside and out, than anyone else in the world.

Grant has built one of the most influential companies in modern screen production not by chasing glamour, but by attacking a simple problem over and over again.

Why should the best creative tools be locked behind absurd prices? Why should the people with the strongest ideas have the weakest access?

According to Petty’s own retellings, that frustration was not a side note. It was the mission.

I've never actually had the pleasure or privilege of talking directly to Grant before (despite being in the same room as him many times in the past), but even just being in the same space as him, you certainly learn a lot.

For example, I was editing and filming content for Pause Fest for several years in Melbourne, where Blackmagic was a major sponsor, and Grant was a special guest.

You can watch his 2019 presentation at Pause Fest on [YouTube](https://www.youtube.com/watch?v=N_2G7EMK_lQ):

[![](/static/grant-pausefest-video.jpg)](https://www.youtube.com/watch?v=N_2G7EMK_lQ)

You can watch his 2025 presentation at Pause Fest on [YouTube](https://www.youtube.com/watch?v=xuKP5VecUj4):

[![](/static/grant-pausefest-2025.jpg)](https://www.youtube.com/watch?v=xuKP5VecUj4)

The first year I worked on Pause Fest, Blackmagic, as a major sponsor, supplied all the cameras and production equipment to film the conference - with all the labour being supplied by Swinburne University.

Blackmagic's Engineers were on-location to train up students to film the live event.

Blackmagic brought in some of their big production cameras and racks of gear.

The students were trained, very quickly, on how to do each of their chosen tasks (i.e. camera operator, vision switcher, CCU operator, sound mixer, etc) by the Blackmagic team and set to work to film every main stage talk, with some of the most amazing speakers on the planet.

The event was amazing, and the speakers on the stage were incredible, however what I found most interesting was observing Grant look at the setup.

Even from afar, you could see the wheels were turning - "why do we need so many racks", "these cameras are too large", "we're running too many cables", etc.

The Swinburne students filmed everything on the main stage, EXCEPT when Grant was talking - this is where the Blackmagic staff took over, and operated the cameras and switches.

Then after this presentation, you could see all the Blackmagic team having a big debrief - what worked, what didn't.

The next time I did Pause Fest, Blackmagic had smaller ATEM mixers, and smaller cameras. Their camera system and built-in comms, and could run everything over fibre.

Grant had looked at the problems, and his incredible team solved them.

The first year I did Pause Fest, the Swinburne students were also doing all the edits on-location, using iMac's supplied by Swinburne - editing in Adobe Premiere Pro.

They didn't have any shared storage (only a single big Promise Pegasus), and the amount of data they were getting from each session was pretty insane, so I helped them interconnect all their edit suites with Thunderbolt connections, so they could more easily share data.

The next year however, all the students were using DaVinci Resolve. But when Grant went into the editing room and saw the students working (again using the Promise shared over Thunderbolt), I could again see him looking at the situation and brainstorming.

The next year or so, Blackmagic came out with the [Blackmagic Cloud Store](https://www.blackmagicdesign.com/products/blackmagiccloudstore).

Again, Grant looked at the situation, identified the issues, then his team came out with new products to solve the issues.

I was very fortunate to see this play out in real time, over the number of years. Each year Blackmagic came out with new products, to make their real world production experience easier.

But as far as I can tell, Grant always looks at things from a traditional broadcast eye. He's not a filmmaker - he's a technician, who's quite happy to be deep within an OB truck patching SDI cables.

Everything Blackmagic do, is very much with a broadcast eye - as opposed to a indie filmmakers eye - which is why we have things like the [Speed Editor](https://www.blackmagicdesign.com/products/davinciresolve/keyboard) and [Editor's Keyboard](https://www.blackmagicdesign.com/products/davinciresolve/keyboard) - which are very much tied into that broadcast/EVS-style world.

The second act of the Blackmagic story is about expansion, but not in the usual startup sense.

Rather than simply releasing adjacent products, the company began acquiring critical pieces of the professional production pipeline.

In **2009**, Blackmagic bought the assets of **Da Vinci Systems**, one of the most important names in high-end colour correction.

[![](/static/davinci-old.jpg)](https://www.youtube.com/watch?v=-UmLkGO7PaY)

In **2010**, it acquired **Echolab**, bringing ATEM live production switchers into the fold.

[![](/static/echolab.jpg)](https://www.youtube.com/watch?v=PmGmHxJX3Nk)

In **2012**, it acquired **Cintel’s** assets.

[![](/static/cinetel.jpg)](https://www.youtube.com/watch?v=O4pUc1PB-do)

In **2014**, it acquired **eyeon Software**, maker of **Fusion**.

[![](/static/fusion.jpg)](https://www.youtube.com/watch?v=1XvzmPKyaws)

In **2016**, it acquired **Fairlight**, a storied Australian audio technology company. Blackmagic’s own release archive and announcements make that progression clear.  ￼

[![](/static/fairlight.jpg)](https://www.youtube.com/watch?v=bDnxZHbHeE8)

Fun fact, the **PYXIS** name actually came from Fairlight! I'm guessing Grant looked at the list of trademarks he owned, and decided to save some cash!

Seen one by one, these look like smart deals. Seen together, they look like a map.

Colour. Live switching. Film scanning. VFX compositing. Audio post.

Blackmagic was not merely collecting brands. It was assembling an end-to-end production and post-production ecosystem.

That is why DaVinci Resolve matters so much to the company’s identity. Resolve became the place where several of those acquired capabilities could converge into one integrated environment.

By **2017**, Blackmagic was publicly describing DaVinci Resolve 14 as effectively three high-end applications in one: editing, colour correction, and Fairlight audio tools.  ￼

That integration is one of Grant's most important achievements. Plenty of technology companies lower prices. Fewer manage to lower prices while also simplifying the workflow itself.

Perhaps the clearest expression of Blackmagic’s worldview is what it did with Resolve.

Da Vinci had long been associated with elite colour finishing. Under Blackmagic, Resolve was not just maintained; it was progressively transformed into a much broader platform and distributed in versions that dramatically widened access, including free and lower-cost editions in the early 2010s.

Blackmagic announcements from 2011 document the release of DaVinci Resolve Lite and the company’s push to make the software available more broadly, including on Windows.  ￼

This was classic Grant strategy: take a tool associated with elite post houses, repackage it for creative users, lower the price barrier, and expand the market by making the pie bigger rather than simply fighting over the old premium tier.

[SmartCompany’s](https://www.smartcompany.com.au/entrepreneurs/blackmagic-design-founder-grant-petty-on-how-a-burning-revelation-led-him-to-create-his-300-million-video-technology-company/) profile of Grant captures this theme directly, including his view that creative ambition does not disappear just because the industry’s old economics are irrational.  ￼

Blackmagic did not merely make professional tools cheaper. It changed expectations about what professional tools should cost.

Side note... given that we're on FCP Cafe (and this is going massively down a rabbit hole) - back in 2009 I released a blog post titled, [Final Cut Studio 3 Predictions](https://fcp.cafe/blog/final-cut-studio-3-predictions/).

Reading this back now, and it almost seems like the Blackmagic team read this and used it as a bible for DaVinci Resolve.

For example:

> So what will make this new FCX so different? Well, it’s our prediction that most of the Final Cut Studio (i.e. Final Cut Pro, Soundtrack Pro, Color, LiveType, etc.) will be merged into the one application. We predict a MASSIVE interface and workflow overhaul. No longer will you need to Send to Soundtrack Pro, or use XML workarounds to get your timeline into Color. Everything will be in the one “box”. In typical Apple style – we predict they’ll make things better, by making them substantially simpler.
>
> So how the hell will this actually work? We believe the key is a new Universal Timeline and a set of different Rooms.

This is basically what DaVinci Resolve has become.

There are many successful hardware and software companies in media technology. Very few inspire the kind of loyalty Blackmagic does.

Part of that is **practical**. The company has products across cameras, capture, switching, colour, storage, monitoring, and finishing.

Part of it is **symbolic**. For a generation of creators, Blackmagic represents the moment professional production stopped feeling like a private club.

Official company materials routinely describe DeckLink as revolutionary for affordability, and customer-facing narratives around Blackmagic products repeatedly frame the brand as giving smaller teams access to capabilities once reserved for major facilities.

[CineD’s](https://www.cined.com/the-story-of-blackmagic-design-how-grant-petty-changed-the-industry/) summary of the company’s history makes the same point in broader terms: Blackmagic built high-quality tools for filmmakers without the traditional price tag.  ￼

That does not mean every product launch has been perfect, or that the company has avoided controversy. But even critics usually concede the larger truth: Blackmagic shifted the industry’s centre of gravity.

Once creators saw what was possible at Blackmagic prices, the old premium logic became much harder to defend.

A good example of this is back in 2012, I wrote another blog post titled, [Blackmagic Cinema Camera](https://fcp.cafe/blog/blackmagic-cinema-camera/).

The amazing Australian cinematographer [John Brawley](https://www.johnbrawley.com) - who's DOP on Shrinking, Bad Monkey, The Morning Show, etc. leant us his camera to just play with.

This was the start of our love of Blackmagic Cameras.

I was at university when the RED ONE first came out (I actually shot my [3rd year Uni film on it](https://www.youtube.com/watch?v=Wfmk7tLZSw0)) - but RED's were never really affordable for regular people.

Blackmagic's cameras on the other hand, were cheap, yet still achieved absolutely beautiful images.

Unrelated, there's a fun image from around that era:

![](/static/blackmagic-and-r3d.jpg)

Fun fact... if you go to the Blackmagic Forums, my 2017 [Frequently Asked Questions post](https://forum.blackmagicdesign.com/viewtopic.php?f=2&t=7952) is still pinned in the Camera Forums, haha.

This love of Blackmagic cameras actually gave me my first professional software product that I released on the Mac App Store, [BRAW Toolbox](https://brawtoolbox.fcp.cafe).

Over the years, I've worked pretty closely with the Blackmagic team - and their support has been INCREDIBLE.

In the early days of BRAW Toolbox I had zero idea what I was doing - I knew very little about C++, I knew very little about Metal, I knew very little about codecs in general - but the team was always happy to answer my dumb questions, and help were they can.

Another fun side-story... **Hook Stowers** is the "Frequency Wrangler" at Blackmagic - he looks after camera colour science, BRAW and other things at Blackmagic. Previously he was based in Melbourne, but now he's based in LA.

Why oh why would you move from the most magical place on earth (Melbourne) to LA you might ask?

Well, turns out, whilst [John Brawley](https://www.johnbrawley.com) has been shooting Shrinking for Apple, Hook has been grading it! 🤯

![](/static/shrinking-01.jpg)

![](/static/shrinking-02.jpg)

![](/static/shrinking-03.jpg)

![](/static/shrinking-04.jpg)

![](/static/shrinking-05.jpg)

![](/static/shrinking-06.jpg)

![](/static/shrinking-07.jpg)

...and it's beautiful.

But back to Grant...

The most interesting thing about Grant is not that he became wealthy, though profiles from [Forbes](https://www.forbes.com/sites/schifrin/2022/04/11/how-an-aussie-from-the-housing-projects-became-a-billionaire-making-gear-for-next-gen-spielbergs/) and the [Financial Review](https://www.afr.com/wealth/people/he-grew-up-in-a-housing-commission-now-he-s-worth-1-4b-20220712-p5b14k) note that Blackmagic’s success eventually made him a billionaire.

The more important point is how unusual his route was: he built a global screen-technology company from **Melbourne** by serving the people who had historically been underestimated by the industry’s power structure.  ￼

His story is ultimately about conviction in the hands of users.

Grant seems to have understood earlier than most that when you make creative tools cheaper, you are not merely changing budgets.

You are changing who gets to experiment, who gets to learn, who gets to fail, and who gets to become excellent.

Lowering the cost of entry does not diminish an art form. Very often, it expands it.

That is why Blackmagic Design matters.

It is a case study in what happens when an engineer decides that the structure of an industry is itself a design problem.

And once Grant saw that problem, he spent the next two decades building tools that made the old order harder and harder to justify.

And I fricken love that.

So the big question... what do we expect from Blackmagic's NAB video?

Well, I think we'll definitely see Blackmagic expand into [Jumper](https://getjumper.io) territory and bring machine learning search to DaVinci Resolve.

However, looking at Blackmagic's hiring for the last year - I do think that **cloud** will play a massive role, as they seem to be employing and searching for more **Golang** programmers than C++ programmers these days.

I think a big focus of this years NAB will be camera to cloud - going directly from Blackmagic Cameras to Blackmagic's Cloud Storage to Blackmagic's local on-premises shared storage, and straight into DaVinci Resolve.

Whilst Apple has been avoiding collaboration in Final Cut Pro (and even between iPad and Mac) like the plague - I think Grant see's collaboration as a REALLY important thing to solve.

I've written about this before:

> The problem with Final Cut Pro is that had some awesome ideas to simplify things, and made the frontend slick and amazing, but under the hood everything’s not really designed for purpose. The creatives had more power than the engineers.
>
> Whereas Blackmagic is almost the opposite - the engineers rule the land, so you have incredible technology under the hood, but the frontend also looks like a spaceship.
>
> Blackmagic really has built the most amazing platform that continues to improve at a dramatic pace because under the hood, they have the power, tools and technology to do anything. They have an amazing ML platform, amazing colour science pipeline, a true multi-user collaborative database backend, a powerful cloud platform, and it works across Mac, Windows and Linux. They also have some of the smartest engineers across every aspect of the film and television industry from acquisition to delivery.
>
> Apple on the other hand struggle with performance of large timeline, struggle with audio thumbnails, struggle with third party audio effects (despite using Apple’s own Audio Units as the plugin infrastructure) and struggle to play nicely with third party developers. I’m not sure how fixable these problems are, and how much of a priority it is for Apple to fix, or if they’ll just continue to wait until hardware gets faster and faster.
>
> As Blackmagic continues to add more ML features and workflow improvements, and more people actually start using Resolve’s Edit page for creative editing, Blackmagic will continue to iterate and improve based on real-world feedback.
>
> I think there’s a tipping point where Resolve’s advantages will eventually outweigh FCP’s - but it won’t be because of a single feature or change - it’ll be because Resolve makes the whole pipeline easier, with the ability to edit footage whilst camera’s still rolling, on-device ML syncing and logging, real collaborative editing, and powerful delivery tools - the one-stop-shop.

Final Cut Pro definitely allows me to be the most creative and have the most fun. With Resolve, I feel like I’m driving a spaceship, whereas Final Cut Pro feels like I’m playing a fun musical instrument.

I can do things faster which leaves me more time to experiment and be creative.

Whilst I have the upmost respect for DaVinci Resolve - for now... it's not the most fun tool to play with.

Hopefully Grant can eventually change that. Time will tell.

You can watch this great interview of Grant by **The Interview** on [YouTube](https://www.youtube.com/watch?v=ZTJFXSNl6YE):

[![](/static/grant-the-interview.jpg)](https://www.youtube.com/watch?v=ZTJFXSNl6YE)

You can watch this great interview of Grant by **Conversation Bytes** on [YouTube](https://www.youtube.com/watch?v=xBxy3q-xe94):

[![](/static/conversation-bytes-grant.jpg)](https://www.youtube.com/watch?v=xBxy3q-xe94)

You can read more about Grant Petty below (a lot of which I reference to above as I was doing some digging):

- [CineD: The Story of Blackmagic Design – How Grant Petty Changed the Industry (13th April 2022)](https://www.cined.com/the-story-of-blackmagic-design-how-grant-petty-changed-the-industry/)
- [The Australian Financial Review: "Stop caring about how you look or what people think of you - and focus" (20th July 2022)](https://www.afr.com/wealth/people/he-grew-up-in-a-housing-commission-now-he-s-worth-1-4b-20220712-p5b14k)
- [Forbes: How An Aussie From The Housing Projects Became A Billionaire Making Gear For Next-Gen Spielbergs (11th April 2022)](https://www.forbes.com/sites/schifrin/2022/04/11/how-an-aussie-from-the-housing-projects-became-a-billionaire-making-gear-for-next-gen-spielbergs/)
- [SmartCompany: Blackmagic Design founder Grant Petty on how a “burning revelation” led him to create his $300 million video technology company (11th July 2017)](https://www.smartcompany.com.au/entrepreneurs/blackmagic-design-founder-grant-petty-on-how-a-burning-revelation-led-him-to-create-his-300-million-video-technology-company/)

Somewhat related, in other crazy Melbourne news, **Atomos** recently announced the acquisition of **Flanders Scientific (FSI)**, one of the most respected names in professional reference monitoring.

Colourists and video editors all over the world LOVE their Flanders Scientific monitors - so this is big news!

**Bram Desmet** (CEO & GM Flanders Scientific, Inc.) [writes](https://www.linkedin.com/posts/bram-desmet-9965582_extremely-excited-to-finally-be-able-to-share-activity-7449259607509708800-QVIe):

> Extremely excited to finally be able to share this news!
>
> Joining ATOMOS is a significant and exciting moment for Flanders Scientific. FSI was built on the simple premise that professionals responsible for image fidelity deserve tools they can trust. That standard has never changed, and it won't. What this partnership gives us is the infrastructure and reach to stand behind that promise for more customers, in more markets, more effectively than we could on our own.
>
> FSI will continue to operate as a distinct brand within the Atomos group, with the same team, same products, and same commitment to the work we do together. I'm excited about what we can deliver jointly, not just for the broadcast, DIT, and colorist communities we have always served, but for the broader production world that Atomos reaches every day.
>
> Everything our customers have valued about working with FSI remains in place, now with the additional backing, resources, and talent of the Atomos team.
>
> A special thank you to Peter Barber and the entire Atomos team for putting their trust in us and sharing our vision for building something truly special together. I'm more invigorated than ever and so looking forward to the road ahead.

For those that don't know, Atomos was founded in 2010 by Jeromy Young & Ian Overliese after both leaving Blackmagic because they disagreed with Grant Petty's business plans.

Blackmagic and Atomos have always had a BIG rivalry.

You can watch this amazing **Frame Voyager** documentary on YouTube, titled **The DISTURBING history of ATOMOS**:

[![](/static/frame-voyager-atomos.jpg)](https://www.youtube.com/watch?v=nHiokt2g94E)

For those that don't know, **Estelle McGechie** mentioned in the video above was ALSO born in Melbourne (are we seeing a pattern here?!), and has an INCREDIBLE CV including:

- 2006-2009: Video Engineering & Workflow Specialist @ Disney
- 2004-2010: Product Marketing, Professional Video Applications @ Apple
- 2013-2019: Senior Manager, Worldwide Product Development and Product Marketing @ Apple (responsible for Final Cut Pro)
- 2019-2020: Senior Director - Global Head of Video, Creativity and Productivity @ Logitech
- 2020-2021: Vice President Marketing @ Frame.io
- 2021-2023: Product Advisor @ Hedge
- 2023-2024: Vision Pro Engineering Program Manager @ Apple
- 2024-2026: Vision Pro Strategic Partnerships Manager, Production Technology & Cameras @ Apple

What's even more interesting though is that in **2025**, two-time Atomos CEO **Jeromy Young** was replaced with **Peter Barber**, who was also a co-founder of Blackmagic Design. 🤯

Jeromy Young remains at Atomos as a non-executive director.

You can read more about this on [PetaPixel](https://petapixel.com/2025/05/06/two-time-atomos-ceo-jeromy-young-replaced-by-co-founder-of-blackmagic-design/).

You can real the full press release on the [Atomos site](https://www.atomos.com/2026/04/07/flanders-scientific-aquisition/).

Pretty crazy to think Blackmagic, Atomos and [Rode](https://rode.com) are all Australian companies hitting well above their weight - and that there's so many talented Aussie's in Apple as well! 🦘

How crazy would it be if Blackmagic, Atomos and Rode all combined. 🤯

---

**SpliceKit v3.1.7** is out now!

This release includes a new amazing feature, **Sections**.

- Sections bar for timeline song structure, add default transition to all clips command, fuzzy search stop-word handling

You can watch it in action on [YouTube](https://www.youtube.com/watch?v=plirvqHe6o0):

[![](/static/splicekit-sections-youtube.jpg)](https://www.youtube.com/watch?v=plirvqHe6o0)

You can download and learn more on the [SpliceKit Website](https://splicekit.fcp.cafe).

---

**Production's Best Friend** is out now by the amazing team at [Intelligent Assistance](https://www.intelligentassistance.com).

Interestingly, Production's Best Friend is an eventual replacement for [Producer's Best Friend](https://www.intelligentassistance.com/productions-best-friend/).

Producer's Best Friend is currently built for Intel Mac's and only runs on Apple Silicon with Rosetta 2, which is being removed in [macOS 28](https://developer.apple.com/documentation/apple-silicon/about-the-rosetta-translation-environment/).

![](/static/producers-best-friend-activity-monitor.png)

You can watch an introduction video on [YouTube](https://www.youtube.com/watch?v=-00a6BpQf2M):

[![](/static/productions-best-friend.jpg)](https://www.youtube.com/watch?v=-00a6BpQf2M)

The website says:

> Stop building production reports by hand.
> Production’s Best Friend turns your Projects into a professional Excel spreadsheet — instantly.
>
> Whether you’re the editor generating it, the coordinator submitting it, or the producer signing off on it — Production’s Best Friend speaks everyone’s language.
>
> - Generate clip lists, shot lists and track-accurate sequence reports instantly
> - Deliver editorial metadata to VFX, audio, QC, grading, legal and archive teams
> - Capture effects, transitions and markers — perfect for editorial turnovers
> - Designed for Final Cut Pro
> - Exports clean Excel for producers, coordinators and post teams

Purchase Options:

- Monthly for $19.99
- One Year for $129.99
- Three Years for $199.99

At $19.99 a month, Production’s Best Friend costs less than an hour of a post coordinator’s time and saves many.

Or save 46% on an annual plan and reduce admin.

You can learn more on the [Production's Best Friend website](https://www.intelligentassistance.com/productions-best-friend/).

[!button text="Discuss this news item" variant="info"](news/20260413/#discuss-this-page)

---

!!!warning Sponsored
Gyroscope Stabilisation in Final Cut Pro.<br />
[Download Gyroflow Toolbox](https://gyroflowtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [12th April 2026](/news/20260412)

Happy Sunday! 👋

First up... this is a fun read... [We Found a Ticking Time Bomb in macOS TCP Networking - It Detonates After Exactly 49 Days](https://photon.codes/blog/we-found-a-ticking-time-bomb-in-macos-tcp-networking).

**BRAW Toolbox v2.1.0** is out now! 🥳

It contains the following changes:

**🔨 Improvements:**
- Blackmagic URSA Cine Immersive clips now import as `16320x7200` side-by-side clips into Final Cut Pro. We apply the BRAW Toolbox effect to a `16320x7200 TIFF` (as opposed to a Motion Generator) to workaround some bugs/limitations in Final Cut Pro's Spatial/Stereo 3D workflow. HUGE thank you to Iain Anderson for all his testing and support!

**🐞 Bug Fix:**
- Fixed a major regression/bug in BRAW Toolbox v2.0.0 where scaling a BRAW Toolbox clip broke the image quality due to caching. HUGE thank you to Nuno Meneses, Matt, camilledelbos and everyone else in the FCP Cafe Community for all your bug reports, support and patience!

Even I'm pretty blown away that BRAW Toolbox now supports massive `16320x7200` BRAW files! 🤯

![](/static/braw-toolbox-immersive-2-1-0.png)

Even on my 2021 16-inch MacBook Pro (M1 Max, 64GB RAM, 8TB SSD), the playback performance is pretty impressive!

If you want to play around, you can download a bunch of Immersive BRAW clips from the [Blackmagic website](https://www.blackmagicdesign.com/products/blackmagicursacineimmersive/gallery).

I don't actually own or have access to a Vision Pro personally, so I'm super interested and excited to see what people do with this!

However, this is only the start of our Immersive journey.

I'm currently working on adding a Final Cut Pro **Share Destination** so that you can export your Immersive timeline directly to a Vision Pro friendly format.

I'm also working on adding an **AV Output** so that you can live stream your Immersive timeline directly to the Vision Pro.

For those that don't really care about Immersive, I'm also working on bringing Gyroflow directly into BRAW Toolbox, so that you don't need to Gyroflow Toolbox for BRAW clips.

I've also been working on a **Blackmagic RAW Media Extension**, so that we can bring native BRAW to every Mac application.

![](/static/braw-media-extension.png)

However, Media Extensions are HARD - really HARD - even in a world of large language models - and even if I get it working in a stable condition, due to the limitations of the Media Extensions API, I'm not entirely sure it will be better than what BRAW Toolbox already does.

Media Extensions in Final Cut Pro are also pretty limited - so already, BRAW Toolbox can already do things that a Media Extension can never do in Final Cut Pro - such as key-framing RAW parameters.

The main challenge is that the BRAW SDK expects you to feed in a path to the BRAW file, and you get frames out of it, whereas the Media Extension SDK expects you to pass in individual frames.

Media Extensions are completely sandboxed, so the decoder has ZERO access to the filesystem. This brings with it lots of fun technical challenges.

We've been tinkering with Media Extensions for a few years now though - so it's entirely likely that Apple & Blackmagic will beat us to the chase - maybe even at NAB - we'll see.

HUGE THANK YOU to the amazing [Anton Marini](https://github.com/vade) for all his on-going ideas, help and support with BRAW Toolbox.

You can download and learn more on the [BRAW Toolbox website](https://brawtoolbox.fcp.cafe).

[!button text="Discuss this news item" variant="info"](news/20260412/#discuss-this-page)

---

!!!warning Sponsored
_Tight. Terse. Terrific. Bim. Bam. Boom._ – Cut/daily reader<br />
Post Production insight delivered to your inbox.<br />
Sign up for **free** at [Cut/daily.com](https://www.cut-daily.com)
!!!

---

### [10th April 2026](/news/20260410)

It's **Apple Creative Studio** release day! 🥳

![](/static/apple-creator-studio-updates.png)

There's new updates across the board:

- [Compressor Creator Studio v5.2](https://support.apple.com/en-us/102745)
- [Compressor v5.2](https://support.apple.com/en-us/102745)
- [Final Cut Camera v2.2](https://support.apple.com/en-us/120849)
- [Final Cut Pro Creator Studio v12.2](https://support.apple.com/en-us/102825)
- [Final Cut Pro for iPad 3.2](https://support.apple.com/en-us/102731)
- [Final Cut Pro v12.2](https://support.apple.com/en-us/102825)
- [Keynote Creator Studio v15.2](https://support.apple.com/en-au/guide/keynote/tan700f60676/mac)
- [Logic Pro Creator Studio v12.2](https://support.apple.com/en-us/109503)
- [Logic Pro v12.2](https://support.apple.com/en-us/109503)
- [MainStage Creator Studio v4.2](https://support.apple.com/en-us/101568)
- [MainStage v4.2](https://support.apple.com/en-us/101568)
- [Motion Creator Studio v6.2](https://support.apple.com/en-us/102746)
- [Motion v6.2](https://support.apple.com/en-us/102746)
- [Numbers Creator Studio v15.2](https://support.apple.com/en-au/guide/numbers/tan700f60676/mac)
- [Pages Creator Studio v15.2](https://support.apple.com/en-au/guide/pages/tan700f60676/mac)
- [Pixelmator Pro Creator Studio v4.2](https://support.apple.com/en-us/126257)
- [Pixelmator Pro v3.8](https://support.apple.com/en-us/126257)

It seems that Apple Creator Studio's model is to release updates for everything all at once... well, most of the time at least.

So the big question... given that Final Cut Pro skipped `v12.1`, what's in `v12.2`?

Sadly... not a lot:

- Learn to edit with speed and precision in the Magnetic Timeline with an all-new video tutorial.
- Reduces startup time when opening Final Cut Pro with many Audio Units installed.
- Fixes an issue that sometimes caused Final Cut Pro to quit when adjusting zoom levels in the timeline with Beat Detection enabled.

...so basically a minor bug fix update. 🫠

However, **Final Cut Pro for iPad v3.2** includes the following enhancements:

- Learn to edit with speed and precision in the Magnetic Timeline with an all-new video tutorial.

**Improvements and bug fixes:**
- Fixes an issue that caused the app to close unexpectedly when splitting a clip using a connected keyboard or Apple Pencil.
- Addresses an issue that prevented onscreen controls for certain effects from being selected after adding keyframes.
- Resolves an issue that sometimes caused undo to stop working after moving a keyframe.
- Fixes an issue that caused the Projects screen to shift upward unexpectedly when opening a new or existing project.
- Addresses an issue that sometimes caused the timeline preview in the Projects screen to appear cropped during playback.
- Resolves an issue that sometimes caused the app to close unexpectedly when dragging a built-in soundtrack to the timeline.
- Fixes an issue that sometimes caused Transcript Search results to not appear if a project was exported during media analysis.
- Includes stability and performance improvements.

...so basically a slightly bigger bug fix update. 🫠

Compared with **Logic Pro v12.2**:

**New features and enhancements:**
- Reinstall legacy content missing in the initial release of Logic Pro 12 with the Logic Pro Legacy Patches, Logic Pro Legacy Instruments, and Logic Pro Legacy Loops sound packs. Learn how to install legacy content
- Logic Pro can now export Spatial Audio projects as encoded Dolby Digital Plus with Dolby Atmos and Dolby AC-4 L4 mp4 files.

**Stability and reliability:**
- Resolves an issue where clicking on the Program slot on an External MIDI channel in the Mixer could cause Logic to quit unexpectedly.
- Resolves an issue where Logic could quit unexpectedly when zooming in on Intel or systems running in Rosetta mode.
- Resolves an issue where Logic would quit unexpectedly when Control-clicking a region in a take folder.
- Autosave now recalls changed plug-in settings made before the last manual save operation.
- Resolves an issue where audio regions in some existing projects could be missing when opened in Logic Pro 12 and later.
- SysEx faders unpacked from Macros no longer lose their data, and cause Logic to quit unexpectedly if they are subsequently edited.
- Resolves an issue where zooming in an empty space in the Tracks area by dragging with modifier keys would cause Logic Pro to quit unexpectedly on Intel Macs, or in Rosetta mode.
- Resolves an issue where Logic Pro could quit unexpectedly when setting the number of steps in a Pattern Region.
- Fixes an issue where Logic Pro could quit unexpectedly when opening the Audio Track editor from a Take that has Flex Pitch enabled.
- Resolves an issue where Logic Pro could hang when launching in Rosetta mode.

**Performance:**
- Export entries under the Files menu are now reliably available the first time Logic Pro is launched after a restart.

**Chords and Chord Track:**
- Resolves an issue where running "Analyze Chords" on a region a second time could add the chords to the Chord Track.
- When Apply Region Chords to Chord Track is applied to an empty region, the Chord track now shows a root note value of No Chord, as expected.
- When Apply Region Chords to Chord Track is applied to two selected regions, both regions now contribute to the Chord Track, as expected.

**Apple Loops:**
- Apple loops can now be dragged and dropped into the Loops Browser.
- Fixes an issue where the Loops Browser could appear to be empty after importing several loops in column view.

**Plug-ins:**
- Notes generated by the Ultrabeat sequencer now sound properly when Voice Mute is active.
- Resolves an issue where using the Modulator MIDI plug-in to modulate the ES1 octave paramater could lead to loud clicks.

**Flex:**
- It is now possible to edit Flex Pitch notes in a Take folder the first time the folder is opened.
- Changes to the positions of Flex markers in Takes are now shown in the Audio Track Editor.

**Session Players:**
- Fixes an issue where the Sequenced Bass Session Player could unexpectedly play notes in the wrong key.
- The Session Player character picker now reliably opens when clicked.

**Drummer and Drum Kit Designer:**
- Crash Cymbal Stops now work correctly in multi-channel instances of Drum Kit Designer.

**Spatial Audio:**
- Binaural rendering settings for Apple headphones saved in a Spatial Audio project are now recalled correctly when the project is re-opened.

**Mastering Assistant:**
- Transparent mode in Mastering Assistant now works in projects set to a sample rate of 192 kHz.

**Live Loops:**
- The region name in the Region Parameter box updates correctly when selecting different takes in a Live loops cell.

**Step Sequencer:**
- Step Sequencer Patterns with more than 16 steps now save correctly.

**Takes and comping:**
- The view in an open Takes folder containing a large number of Takes no longer jumps to the top take when vertically zooming.

**MIDI:**
- Resolves an issue where sending certain MIDI CC messages could prevent some MIDI notes from sounding.

**Editing:**
- Fixes an issue where performing a region edit could unexpectedly activate the Clip Length region setting as a default.
- The Audio Track editor now updates to show currently selected region as expected.
- Snap to Scale in MIDI editors now works correctly.
- SysEx manufacturer IDs are now correctly displayed in the Event List.
- Resolves an issue where pasting MIDI events to the left of a region that has been shortened to exclude MIDI events on the right could unexpectedly lengthen the region.
- Pasting MIDI events to before the left border of a selected region now extends the border to the left as expected.
- "No overlap" now works reliably when dragging audio files on top of existing audio in a track.
- Resolves an issue where dragging notes downward in the Piano Roll could cause them to scroll out of view.
- Dragging a note upward beyond the currently visible area in the Piano Roll now works correctly.

**Control surfaces and MIDI controllers:**
- Control surfaces can now be used to control Mixer channels that are not assigned to a track in the Main window.
- Instances of Channel EQ in the first insert slot on a channel now open properly when a Presonus FaderPort 2 control surface is connected.
- Resolves an issue where a connected control surface fader could unexpectedly shift from a specific channel to the master channel
- Resolves various issues using Korg Keystage as a MIDI controller with Logic Pro.

**General:**
- The links to the Logic Pro Effects and Logic Pro Instruments user guides in the Help menu now work as expected.
- Changing the order of Global tracks is now possible.
- It's now possible to quit Logic Pro when the Sound Pack details sheet is open.
- Audio files copied from the Finder now correctly paste into the Tracks area.
- Fixes an issue where Revert to Defaults in the Track header could increase its width.
- The secondary time ruler now displays as expected after Copy Section Between Locators is performed.
- Sorting regions in the Project Audio window now works as expected.

It's kinda mind-blowing that the Logic Pro team can achieve so much, compared to the Final Cut Pro team who's had LONGER to work on an update - and yet, they can only get a few bug fixes across the line.

It's kinda sad, but also exciting that [SpliceKit](https://splicekit.fcp.cafe) seems to be adding new features to Final Cut Pro faster than Apple.

**Pixelmator Pro v4.2** seems like a substantial update:

- Enjoy full support for compressed RAW images from Sony Alpha ILCE-7M5, FUJIFILM GFX 100S II, and FUJIFILM GFX 100RF cameras.
- Work with High Efficiency (HE) and High Efficiency Star (HE*) RAW images from Nikon Z5II and Nikon Z50II cameras.
- RAW images from Panasonic LUMIX DC-S1RM2 cameras captured in High Resolution mode are now also supported.
- Discover the updated template and mockup categories, including App Screenshot, Bento Grid, and Devices, now featuring new iPhone 17 mockups.
- Open and edit RAW images from Panasonic LUMIX DC-S1RM2 cameras captured in High Resolution mode.
- Easily change layer opacity using number keys 1 through 9 in all supported tools.
- Cycle through layer blend modes using the Shift-Plus and Shift-Minus keyboard shortcuts in all supported tools.

**Motion v6.2** only gets:

- This update includes stability improvements and bug fixes.

But it could be worse... **Compressor v5.2** just seems to REMOVE things. 😭

- Removes H.264 for Blu-ray encoding support.
- Removes support for encoding H.264 interlaced video.
- Removes support for Dolby Digital.
- Removes support for encoding to AVC-Intra on Apple silicon.

**Final Cut Camera v2.2** has the following changes:

- Fixes an issue that prevented format settings from being preserved across sessions.
- Addresses an issue that caused thumbnails to refresh unexpectedly in the media browser when selecting all media.
- Includes stability and performance improvements.

As of today, **FxPlug SDK v4.3.4** and **Workflow Extensions SDK v1.0.3** are still the latest and haven't been updated.

**FCPXML v1.14** is still the latest and greatest.

Some what's actually changed between Final Cut Pro versions?

Final Cut Pro v12.2.0 is not primarily an editing-features release — the timeline, effects, color, transitions, captions, and FCPXML format are all structurally unchanged.

What is new is infrastructure for Apple to engage and retain users: remote push notifications via `NotificationKit`, a pre-permission warming sheet, an **Introducing Allie Sherlock** demo-project onboarding flow, a magnetic-timeline tutorial launcher, a subscription-aware feature-flag system, and a new `AppleMediaServicesKit` account hub.

On the housekeeping side, Blu-ray H.264 and Dolby Digital encoders are gone, Canon RAW and AVC-Intra codecs have been reorganized (with AVC-Intra explicitly isolated as "x86-only"), the launch sequence was refactored to accommodate onboarding, and the Audio Units "Validating" phase was renamed to "Scanning".

For those geeky developers out there...

**New classes in the main FCP binary:**
- `PEPushNotificationHandler` / `PEPushNotificationHandler.m`
- `PEPushNotificationTokenManager`
- `PENotificationAuthorizationProvider`
- `FFPushNotificationsTokenData`

**New notification handlers in Flexo:**
- `FFNotificationAuthorizationManager`, `FFDefaultNotificationAuthorizationProvider`, `FFNotificationHandling` protocol
- `FFCaptionsNotificationHandler`, `FFShareNotificationHandler`, `FFRADNotificationHandler`

**Observable behaviour:**
- Registers with APNS via `registerForRemoteNotificationTypes:`
- POSTs the APNS token as JSON to `https://notification-kit.apple.com` (mac-prod environment)
- Debug log prefix: `[PushNotifications] Registering with NotificationKit`, `Registration successful`, `Token has changed`
- Endpoint path: `/apns/v2/device/com.apple.FinalCutApp`

**New "Warming Sheet" UI** — a pre-permission prompt shown before the system TCC dialog:
- `PENotificationWarmingSheetAndTCCWindowController` + new XIB `Base.lproj/PENotificationWarmingSheet.nib`
- New localizations (de/es/fr/ja/ko/zh_CN) with buttons "Continue" / "Not Now" / "Later"
- Persistent dismissal tracking: `PENotificationWarmingSheetDismissalCount`, `PENotificationWarmingSheetLastDismissalDate` — throttles re-prompting via `shouldShowWarmingSheetForLastDismissalDate:dismissalCount:isNotificationTriggered:now:cooldownInterval:`

**Major New Feature: Demo Project / Engagement Onboarding:**

`ProOnboardingFlowModelOne` framework grew by **+177 KB** — the biggest relative growth of any framework.

**New Swift classes** (`ProOnboardingFlowModelOne`):
- `DemoProjectDownloadHelper` (Final_Cut_Pro namespace)
- `EngagementSheetCoordinator`, `EngagementSheetPresenter`, `EngagementSheetSource` + factories
- `DownloadDemoView`, `LoopingVideoPlayerView` (looping AVPlayer for demo trailers)
- `AppKitWindowDetector`, `WindowDetecting`

**New string table** `DemoProject.strings` in 9 languages:
```
"Onboarding.SampleProject.title"  = "Start Editing with a Demo Project"
"Onboarding.SampleProject.project" = "Introducing Allie Sherlock"
"Onboarding.SampleProject.DownloadButton.title" = "Download"
"Onboarding.SampleProject.NotNowButton.title" = "Not Now"
```

New user-defaults key: `com.apple.videoApps.POFDisplayEngagementSheetOnAppActivation`.

**New: Magnetic Timeline Tutorial Entry Point**

- New selector `showMagneticTimelineTutorial:`
- New URL key `PEMagneticTimelineTutorialURL`

**Subscription Feature Refactor (`ProCore`)**

- **Removed:** `PCAppFeature`, `registerFeatureDefaults`, `shouldDelayLibraryUpdate`, `PCDelayLibraryUpdateKey`
- **Added:** `PCSubscriptionFeature` (with `shouldEnable` property)

Feature flags are being moved from generic app features onto subscription-aware equivalents, consistent with FCP's move toward the Creator Studio / iPad subscription model.

**AppleMediaServicesKit Subscription/Account Hub (+303 KB)**

- New resource: `Frameworks/AppleMediaServicesKit.framework/Versions/A/Resources/amsuikit-account-hub.jetpack`
- New classes: `AMSCB2PBagProtocol`, `AMSCB2PHARLifecycleObserver`, `BagBridgeAdapter`
- Removed: `AMSCore`

**Launch Flow Refactor (`PEAppController.m`)**

Old launch sequence (removed):
- `applicationContinueDidFinishLaunching:`, `applicationContinueDidFinishLaunching2:`
- `ensureEffectsRegistered`

New launch sequence (added):
- `dismissSplashAndContinueLaunch:`
- `ensureEffectsRegisteredAndContinueLaunching:`, `ensureEffectsRegisteredWithCompletionHandler:`
- `mainWindowIsReady`, `splashStartTime` tracking, `runOnboardingFlow:`

Launch is now split into phases so the onboarding/demo-project flow can run before effect registration completes.

**User-Facing String Changes:**

**Audio Units scan wording changed:**
- `FFAudioUnitValidating` "Validating Audio Units…" is now `FFAudioUnitScanning` "Scanning Audio Units (finalized %1$ld of %2$ld)"

**Removed strings:**
- `FFMIOIngesUserNotificationActionButtonTitle`
- `FFTranscoderUNShareDetailsButton`, `FFTranscoderUNShareShowButton`, `FFTranscoderUNShareVisitButton` (old Share-completion notification buttons — replaced by the new handler architecture)
- `PERestoringWindowLayout`

**Legal copy tweak:** the analytics-identifier reset description in `en.lproj/Localizable.strings` now mentions iCloud Passwords & Keychain sync.

**Plugin / Codec Reorganization:**

**Deleted entirely:**
- `PlugIns/BluRayH264Encoder.appex/` — Blu-ray H.264 encoder removed
- `PlugIns/DolbyDigitalEncoder.appex/` — Dolby Digital encoder removed
- `PlugIns/Codecs/AppleAVCLGCodecEmbedded.bundle/Contents/Frameworks/mc_enc_avc.framework/` — MainConcept AVC encoder stripped from the LG codec bundle

**Moved to new subfolder `PlugIns/Codecs-x86-only/`:**
- `AppleAVCIntraEncoder.bundle` (confirmed still x86_64-only Mach-O — being segregated, likely in prep for dropping Intel support)

**Reorganized into subfolders:**
- `PlugIns/Codecs/AppleCanonRAWDecoder.bundle` → `PlugIns/Codecs/CanonRAW/AppleCanonRAWDecoder.bundle`
- `PlugIns/FormatReaders/AppleCanonRAWImport.bundle` → `PlugIns/FormatReaders/CanonRAW/AppleCanonRAWImport.bundle`

**Framework Binary Size Deltas:**

**Grew (new functionality):**

| Framework | Δ bytes |
|---|---|
| AppleMediaServicesKit | +303,584 |
| ProOnboardingFlowModelOne | +177,184 |
| Interchange | +65,584 |
| AppAnalytics | +42,288 |
| ProMedia | +17,552 |
| PMLCloudContent | +14,176 |
| ProGL | +13,648 |
| MXFExportSDK | +11,152 |

**Shrunk (optimization / code removal):**

| Framework | Δ bytes |
|---|---|
| Flexo | **−266,592** |
| CloudContent | −138,672 |
| Ozone | −93,184 |
| Lithium | −73,056 |
| MusicUnderstandingEmbedded | −43,168 |
| TimelineKit | −42,768 |
| ProCore | −30,496 |
| TextFramework | −28,560 |

The across-the-board shrinkage of every Pro* framework (except `ProMedia`/`PMLCloudContent`) suggests a full compiler/toolchain rebuild with the macOS 26.4 SDK, plus consolidation of the feature-flag/library-update/app-lifecycle code paths into the new subscription model.

So... not really a big update, and no real hints/clues as to what's coming up - but it's always nice to see a bug fix update!

I still expect to see SOMETHING from the Final Cut Pro team at NAB - so we'll see if that actually happens or not.

---

**SpliceKit** continues to move forward at rapid speed! 🔥

**SpliceKit v3.1.5** contains the following improvements:

- Improves patcher update detection and rebuild/update flows, fixes bundled Parakeet packaging for updates, and reduces patched-app signing friction by removing unnecessary debug entitlements.

**SpliceKit v3.1.6** contains the following improvements:

- Dual timeline workflow updates, cross-window drag and copy, secondary window controls, and browser sizing/layout fixes.

You can download and learn more on the [SpliceKit Website](https://splicekit.fcp.cafe).

[!button text="Discuss this news item" variant="info"](news/20260410/#discuss-this-page)

---

!!!warning Sponsored
Native Blackmagic RAW support in Final Cut Pro.<br />
[Download BRAW Toolbox](https://brawtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [9th April 2026](/news/20260409)

Happy Thursday! 👋

In super interesting news, Hedge isn't going to NAB this year. 😢

The Hedge team writes in their [newsletter and blog](https://hedge.co/blog/march-26-news):

> **No NAB**
>
> Usually around this time of the year, we’re ready to go to Las Vegas for the annual NAB Show. This year, it being our 10th anniversary, we planned some really cool stuff.\
> But it’s not to be - after seeing events unfold this last year, and having two of our team members who live in Minneapolis right in the thick of it, we realized we couldn’t guarantee our EU team’s safety traveling to the US. While the risk is tiny, it’s not worth taking when it directly affects families back home.\
> So, no NAB this year. Let’s instead meet in Amsterdam in September at IBC, and hope for better times ✌️\
> On to the fun bits, as it’s currently raining 26.1 releases 🙂

This certainly isn't surprising - I think there's a lot of people all over the world that are wary of travelling anywhere in the current climate, let alone to the USA.

I would think this might be one of the reasons the Final Cut Pro Creative Summit has been delayed and/or cancelled too - I've certainly suggested to FMC in the past to maybe move it to IBC or another country like Singapore (how cool would it be to do a FCP Creative Summit at the Apple Store in Singapore - Blackmagic or ILM would also be a fitting location!).

What is surprising is that Hedge is 10 years old! That makes me feel old as I remember vividly when Hedge was brought into the world.

Even more scary... LateNite turns 20 years next year. 😳

I actually first met the Hedge team in person back in NAB in 2019:

![](/static/chris-and-hedge-at-nab.jpg)

As the show was ending, I offered to help them pack up the stand, and we had a drink and a long nerdy chat afterwards.

![](/static/chris-and-hedge-at-nab-02.jpg)

We stayed in touch, and years later, we teamed up to work on [Hedge Arctic](https://hedge.co/products/arctic).

Goes to show... who knows where the contacts you make along the way will end up!

In other news, for any developers following along, I did a presentation tonight for [Melbourne CocoaHeads](https://melbournecocoaheads.com).

You can watch my presentation on [YouTube](https://www.youtube.com/watch?v=0TbMkst_9JI):

[![](/static/cocoaheads-194-youtube.jpg)](https://www.youtube.com/watch?v=0TbMkst_9JI)

This was my third presentation for CocoaHeads:

- [Melbourne CocoaHeads No. 170 — October 2023](https://www.youtube.com/watch?v=nm0dMV3HVO0)
- [Melbourne CocoaHeads No. 162 - February 2023](https://www.youtube.com/watch?v=KYpYJHWbZUg)

And whilst we're talking nerdy videos, FxFactory has just come out with an epic one, titled **Meet FxCore: Node-based Compositing for VFX Artists and Developers on the Mac**.

You can watch this on [YouTube](https://www.youtube.com/watch?v=8SbcvJ0UQ80):

[![](/static/meet-fxcore.jpg)](https://www.youtube.com/watch?v=8SbcvJ0UQ80)

---

**SpliceKit** has been moving at a RAPID speed. 🔥

We've also added a dedicated SpliceKit website to FCP Cafe - [splicekit.fcp.cafe](https://splicekit.fcp.cafe)!

This website is still a work-in-progress, and we encourage you to help contribute and make it as useful as it can be!

**SpliceKit v3.1.3** includes the following changes:

**Apple Intelligence+ (Agentic Mode):**
- New **Apple Intelligence+** engine in the Command Palette — an agentic AI mode powered by Apple's on-device FoundationModels framework with tool-calling capabilities
- Apple Intelligence+ can read your timeline, seek to specific times, blade/cut clips, add markers, apply effects, execute menu commands, and repeat actions at intervals — all from a natural language prompt
- 6 built-in tools: **edit** (timeline actions), **seek** (playhead positioning), **clips** (read timeline state), **repeat_action** (batch operations like "blade every 5 seconds"), **effect** (apply effects), **menu** (execute any Final Cut Pro menu command)
- Timeline-aware context: Apple Intelligence+ automatically knows your project name, duration, clip count, frame rate, and playhead position
- Smart pattern detection: phrases like "cut every 3 seconds" or "add markers every 10 seconds" are intercepted for fast direct execution
- Three AI engines selectable from the Command Palette dropdown: **Apple Intelligence** (basic), **Gemma 4** (local MLX), and **Apple Intelligence+** (agentic with tools) — Apple Intelligence+ is now the default
- Engine preference persists across sessions via `NSUserDefaults`

**Lua Scripting Engine:**
- Embedded Lua 5.4 VM running directly in FCP's process (zero latency)
- `sk` module with 25+ actions: `sk.blade()`, `sk.seek()`, `sk.clips()`, `sk.rpc()`, `sk.eval()`
- REPL panel (`CONTROL+OPTION+L`) for interactive scripting
- Live coding: save `.lua` files to `~/Library/Application Support/SpliceKit/lua/auto/`
- 8 built-in menu scripts (timeline report, remove silences, blade every 5s, balance color, cross dissolves, generate captions, export XML, screenshot viewer)
- 25+ example scripts (podcast producer, music video editor, conform tool, batch export, and more)
- MCP tools: `lua_execute`, `lua_execute_file`, `lua_reset`, `lua_watch`, `lua_state`

**Social Captions (Improved):**
- Uses Final Cut Pro's built-in Basic Title — works on all Final Cut Pro installations, no custom templates needed
- Word-by-word karaoke highlighting via per-word `<text-style>` colouring
- Auto-transcribe: generates captions without manual transcription step
- Drop shadow on all caption text for readability
- Lower-third positioning via Motion channel hierarchy
- Screen freeze hides temp project switch (seamless UX)
- `reloadMicaDocument` fix: no more greyed-out text or Inspector crashes

**Default Spatial Conform Type (PR #22):**
- Override default spatial conform (Fit/Fill/None) for new timeline clips
- Menu: `Enhancements > Options > Default Spatial Conform`
- Options panel dropdown + Command Palette cycling
- Bridge API: `set_bridge_option_value("defaultSpatialConformType", "fill")`

**Bug Fixes:**
- Fix Lua RPC main thread deadlock: `sk.rpc()` no longer forces every call through main thread, preventing soft deadlocks during polling loops
- Fix caption engine override: caption generation now uses the user's configured transcription engine instead of forcing FCP Native
- Fix parakeet-transcriber build for updated FluidAudio API (`AsrManager.initialize` → `loadModels`, new model version enum variants)
- Caption script is now non-blocking for long clips with transcript reuse

**SpliceKit v3.1.4** includes the following change:

- Improves social caption insertion and relaunch restore. Fixes title placeholder recovery on restart, preserves caption placement on reload, and tightens word highlighting behavior.

You can download and learn more on the [SpliceKit Website](https://splicekit.fcp.cafe).

---

**ATEM TO FCP v1.5.1** is out now.

It includes the following changes:

- **Restored macOS Compatibility:** Fixed a technical issue where the app incorrectly required macOS 26.2. It is now fully compatible with macOS 15 Sequoia and later.
- **General Fixes:** Minor stability improvements and optimizations for the new Relink workflow.

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/atem-to-fcp/id6760610577).

[!button text="Discuss this news item" variant="info"](news/20260409/#discuss-this-page)

---

!!!warning Sponsored
Gyroscope Stabilisation in Final Cut Pro.<br />
[Download Gyroflow Toolbox](https://gyroflowtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [8th April 2026](/news/20260408)

**ATEM Exporter v1.1.0** is out now! 🥳

HUGE thank you to Vlad at Amid Films for all his work improving and testing ATEM Exporter! THANK YOU!

It contains the following improvements:

- Adds an optional checkbox to log preview bus camera changes alongside program bus cuts. Thanks Vlad at Amid Films!
- Adds a dropdown to select which Mix/Effect bus (M/E 1-4) to log cuts from. Defaults to M/E 1. Both program and preview bus handlers now filter events by the selected M/E. Thanks Vlad at Amid Films!
- Allows a recorded cut log to be saved as a readable XML file and reimported later, so FCPXML export can be done at any time without needing to be connected to the ATEM. Thanks Vlad at Amid Films!

You can download and learn more on the [ATEM Exporter website](https://atemexporter.fcp.cafe).

---

**SpliceKit v3.1.1** was released with the following update:

- **Support Final Cut Pro Creator Studio:** fixed subscription validation and CloudKit crash on ad-hoc signed builds

Quickly followed by **SpliceKit v3.1.2**:

- App Store receipt validation for Creator Studio: verify subscription locally via PKCS7 receipt before launching, show alert if no valid subscription found

You can download and learn more on the [SpliceKit GitHub](https://github.com/elliotttate/SpliceKit).

---

**PostLab v26.1.1** is out now with the following changes:

**Improved:**
- Significant stability improvements when using unreliable network connections. Thank you for reporting, Elias!
- Delayed background activity from still-open apps is handled more reliably, helping prevent conflicts while saving your work. Thanks, Fabrice!
- [PRO] When your cloud storage is not yet ready, PostLab now shows a more specific warning so you know exactly what's going on.

**Fixed:**
- Working with Suite could result in an incorrect "Drive not available" alert.

You can download and learn more on the [Hedge website](https://hedge.co/products/postlab).

---

**Keyframeless v2026-04-07** is out now.

It's so cool to see that [SpliceKit](https://github.com/elliotttate/SpliceKit) is already helping 3rd party developers!

It contains the following improvements:

**Timing:**
- Up to 10s for animate in and out.
 - ⚠️ Any existing usage will be limited to the old 2s limit. You'll need to delete and re-apply any any effects (Rounded, MagicMove).

**Keyframeless X - Audio:**
- Drag straight to timeline without compound clips being created - shout out to [SpliceKit](https://github.com/elliotttate/SpliceKit) for making this possible.
- Add import button - allows choosing a library and imports as a new Captions event.
- Font on published parameters - taking templates one step closer to not needing editing in Final Cut Pro 🎉
- Caption styling options always visible
- Ability to update community templates.
- Paste to FCP button - clicking this button pastes straight to timeline
 - ‼️ requires granting Accessibility permissions for Keyframeless X, needed for overlapping clips, or use Import button as an alternative
- Fix color picker hiding behind windows when Final Cut Pro timeline hovered.
- Fix 59.94fps causes line break in dropdown.
- Preview not representative of where title ends up in Final Cut Pro

**Magic Move:**
- New 3D rotation OSC - hold `OPTION` key to access these

You can download and learn more on [GitHub](https://github.com/overpolish/keyframeless).

---

**Doza Assist** is out now for free on GitHub.

> A local-first AI-powered interview transcription and editing tool for documentary filmmakers.
>
> Built for video production workflows — transcribe interviews, discover clips with AI, highlight and organize selects, and export pre-cut timelines directly to Final Cut Pro.

You can download and learn more on [GitHub](https://github.com/DozaVisuals/doza-assist).

[!button text="Discuss this news item" variant="info"](news/20260408/#discuss-this-page)

---

!!!warning Sponsored
_Tight. Terse. Terrific. Bim. Bam. Boom._ – Cut/daily reader<br />
Post Production insight delivered to your inbox.<br />
Sign up for **free** at [Cut/daily.com](https://www.cut-daily.com)
!!!

---

### [7th April 2026](/news/20260407)

Happy Tuesday! I hope everyone had an awesome fun and relaxing long weekend! 🥳

Someone asked me what movies I've watched in the cinema recently, so here you go...

I love them all - all five stars out of five! ⭐️⭐️⭐️⭐️⭐️

- [Hard Truths (2024)](https://www.imdb.com/title/tt11891850/)
- [Project Hail Mary (2026)](https://www.imdb.com/title/tt12042730/)
- [Out of Season (2023)](https://www.imdb.com/title/tt27704325/)
- [There’s Still Tomorrow (2023)](https://www.imdb.com/title/tt21800162/)

I also recently went to see **Art of the Score: James Horner**, performed by the **Melbourne Symphony Orchestra**, and it was wonderful.

So many great soundtracks!

- Star Trek II: The Wrath of Khan
- Apollo 13: Suite
- Aliens: Suite
- The Rocketeer: The Flying Circus
- Braveheart: Suite
- Willow: Theme
- A Beautiful Mind: A Kaleidoscope of Mathematics
- The Amazing Spiderman: Promises and End Credits
- Field of Dreams: The Place Where Dreams Come True
- The Mask of Zorro: The Ride
- Avatar: Suite
- Titanic: Suite

For anyone in Melbourne, you can learn more on the [MSO website](https://www.mso.com.au/performance/2026-art-of-the-score-james-horner).

In other news... Things have been moving fast in the world of **SpliceKit**!

**SpliceKit v3.0.2** contains the following fixes:

- **Auto-discover FCP** — Uses Spotlight to find Final Cut Pro anywhere on the system (e.g. `/Applications/New/Final Cut Pro.app`), not just the default `/Applications` path
- **Browse for FCP** — If auto-discovery fails, a `Browse for Final Cut Pro...` button lets users locate the app manually
- **Fix launch crash** — `SpliceKitLogPanel.m` was missing from the dylib build script, causing FCP to crash on launch with `symbol not found '_OBJC_CLASS_$_SpliceKitLogPanel'`
- **Fix version display** — PlistBuddy error text (`File Doesn't Exist, Will Create:`) no longer shown as the FCP version when the app is at a non-standard path

**SpliceKit v3.1.0** contains the following changes:

- **Configurable J/L Playback Speed Ladders:**
 - Swizzle `fastForward:` and `rewind:` on `FFPlayerModule` so each press of `L` or `J` walks a user-configurable speed ladder instead of the hardcoded `1→2→4→8→16→32` progression.
 - **Custom speed steps** — add intermediate speeds like 1.5x and 1.8x (e.g. 1, 1.5, 1.8, 2, 4, 8)
 - **Configure via menu** — Enhancements > Playback Speed > click `L` Speeds or `J` Speeds to edit
 - **Configure via API** — `set_bridge_option("lLadder", value=[1, 1.5, 2, 4, 8])`
 - **New MCP tool** — `set_playback_speed(rate=1.5)` for exact rates, `set_playback_speed(action="faster")` for progressive shuttle
 - **Rate reporting** — `get_playhead_position()` now returns current playback rate
 - **K+L / K+J** - single-frame stepping preserved from original Final Cut Pro behaviour
 - Settings persist across restarts via `NSUserDefaults`

You can download and learn more on the [SpliceKit GitHub](https://github.com/elliotttate/SpliceKit).

---

**ATEM TO FCP v1.5** is out now.

It includes the following changes:

- **New:** Relink ISO Files — replace ATEM recordings with camera originals while preserving the live edit
- **New:** Flexible sync modes - shared timecode or manual reference alignment
- **New:** Project Resolution override (HD / UHD / DCI / QHD)
- **New:** Color Generator support with per-segment color accuracy
- **Improved:** Frame-accurate timing for NTSC and Drop Frame formats
- **Improved:** Automatic handling of midnight crossover timecode
- **Improved:** Reconstruction of Flying Key animations
- **Improved:** Accurate alignment of simultaneous transitions and overlays
- **Improved:** Smarter handling of missing media with offline-ready export
- **Improved:** More reliable audio mapping and WAV matching
- **UI:** Cleaner layout, collapsible sections, and improved feedback

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/atem-to-fcp/id6760610577).

[!button text="Discuss this news item" variant="info"](news/20260407/#discuss-this-page)

---

!!!warning Sponsored
Native Blackmagic RAW support in Final Cut Pro.<br />
[Download BRAW Toolbox](https://brawtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [6th April 2026](/news/20260406)

First up, **Tim de Groot** from Hedge has released a little personal project - introducing [TV Knight](https://apps.apple.com/au/app/tv-knight/id6757367595).

![](/static/tv-knight.png)

Next up... Bye-bye **FCPBridge**, hello, **SpliceKit**! 🥳

With input from the [FCP Cafe community](https://ltnt.tv/discord), the application has been renamed, and the installation process has been dramatically simplified and made much more consumer-friendly.

A new icon is currently being designed by the incredible [Matthew Skiles](https://matthewskiles.com) - and should be done at some point in the next week or so.

**SpliceKit v3.0.0** contains the following changes:

- **New name:** FCPBridge is now SpliceKit
- **Wizard UI:** 3-panel setup wizard (Welcome, Patching, Status) with separate log window
- **Xcode project:** Proper build system replaces raw `swiftc` compilation
- **DMG distribution:** Professional macOS disk image with Applications shortcut
- **"Enhancements" menu:** Final Cut Pro menu bar item renamed from product name to feature-oriented label
- **Portable paths:** All hardcoded user-specific paths removed — tools are found via standard locations (`~/Applications/SpliceKit/tools/`)
- New app icon

**SpliceKit v3.0.1** contains the following changes:

- Fix Sparkle showing false update when already on latest version (`CFBundleVersion` mismatch)
- Bundle pre-built parakeet-transcriber in the DMG — transcription works out of the box without Xcode CLT
- Improved Parakeet error messages with specific guidance for common failures (short clips, missing media, network issues, disk space, permissions, Apple Silicon requirement)
- Skip clips shorter than 0.5s instead of sending them to Parakeet and failing
- Deploy tools (parakeet, silence-detector) to ~/Applications/SpliceKit/tools/ during make deploy
- Detailed logging of search paths and file status for easier debugging

If you look on the [SpliceKit GitHub repository](https://github.com/elliotttate/SpliceKit) there's already a lot of new stuff not yet released, so definitely exciting times ahead!

You can now easily install the **Enhancements** into Final Cut Pro with a couple of clicks.

![](/static/splicekit-01.png)

![](/static/splicekit-02.png)

![](/static/splicekit-03.png)

![](/static/splicekit-04.png)

![](/static/splicekit-05.png)

![](/static/splicekit-06.png)

![](/static/splicekit-07.png)

SpliceKit is SUPER interesting and exciting, as it opens up basically unlimited possibilities with Final Cut Pro, but it also gives developers a much better insight into the inner workings of Final Cut Pro, allowing developers to build even better Workflow Extensions and FxPlug Filters.

---

**OnderK Studio v1.0.1** is out now.

![](/static/onderk-studio.png)

You can download and learn more on the [OnderK Studio website](https://onderk.com/apps/onderk-studio).

[!button text="Discuss this news item" variant="info"](news/20260406/#discuss-this-page)

---

!!!warning Sponsored
Gyroscope Stabilisation in Final Cut Pro.<br />
[Download Gyroflow Toolbox](https://gyroflowtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [5th April 2026](/news/20260405)

Happy Easter Sunday! Hope the bunny delivered you lots of yummy chocolate eggs! 🐣

For some lazy Sunday morning viewing, below are some fun videos.

First up we have a Steve Wozniak showcasing the "Revolutions" exhibit at the The Computer History Museum, in Mountain View California back in 2011.

You can watch it on [YouTube](https://www.youtube.com/watch?v=da62VjETjsg):

[![](/static/woz-video.jpg)](https://www.youtube.com/watch?v=da62VjETjsg)

Next up we have the handsome [Iain Anderson](https://iain-anderson.com) talking about all things AI on Office Hours Global.

You can watch it on [YouTube](https://www.youtube.com/live/q6iv0opOT9A):

[![](/static/iain-anderson-live.jpg)](https://www.youtube.com/live/q6iv0opOT9A)

Finally, we have the unstoppable **Richard Taylor** talking about all things Final Cut Pro & NAB 2026.

You can watch it on [YouTube](https://www.youtube.com/watch?v=i7J7omWq5ns):

[![](/static/fcpradio-nab-2026.jpg)](https://www.youtube.com/watch?v=i7J7omWq5ns)

In more nerdy news, here's some cool things:

- [VOID: Video Object and Interaction Deletion](https://github.com/Netflix/void-model)
- [MLXStudio: The native macOS desktop app for local AI on Apple Silicon](https://github.com/jjang-ai/mlxstudio)
- [apfel: FREE local Apple Intelligence LLM on your Mac](https://github.com/Arthur-Ficial/apfel)

If you want to go even more nerdy, here's some great reads from the **FCPBridge** project:

- [Content Exchange with Final Cut Pro](https://github.com/elliotttate/FCPBridge/blob/main/docs/CONTENT_EXCHANGE_GUIDE.md)
- [FCPXML Format Reference](https://github.com/elliotttate/FCPBridge/blob/main/docs/FCPXML_FORMAT_REFERENCE.md)
- [Final Cut Pro Internal API Reference](https://github.com/elliotttate/FCPBridge/blob/main/docs/FCP_API_REFERENCE.md)
- [FCP Pasteboard & Media Linking: Restoring Clips with Attributes](https://github.com/elliotttate/FCPBridge/blob/main/docs/FCP_PASTEBOARD_MEDIA_LINKING.md)
- [FxPlug 4 Plugin Development Guide](https://github.com/elliotttate/FCPBridge/blob/main/docs/FXPLUG_PLUGIN_GUIDE.md)
- [Dragging FCPXML Content Directly onto the FCP Timeline](https://github.com/elliotttate/FCPBridge/blob/main/docs/TIMELINE_DRAG_DROP_GUIDE.md)
- [Workflow Extensions Guide](https://github.com/elliotttate/FCPBridge/blob/main/docs/WORKFLOW_EXTENSIONS_GUIDE.md)

The amazing Brian Elliott Tate has also open-sourced **Spectra** - a high-performance FxPlug4 plugin for Final Cut Pro that applies `.cube` 3D LUTs (Look-Up Tables) for color grading. Runs out-of-process via XPC with Metal GPU rendering.

You can learn more an download on [GitHub](https://github.com/elliotttate/Spectra).

---

**FCPBridge v2.8.4** is out now.

It contains the following changes:

**Effect Browser Favorites:**
- Right-click any effect in the Effects Browser to Add to Favorites or Remove from Favorites
- Uses FCP's built-in favorites API — favorites persist across sessions

**FCP Internal Debug & Diagnostics:**
- Expose Final Cut Pro's built-in developer tools via MCP:
 - **Timeline visual overlays:** lane indices, misaligned edges, hidden gaps, render bars
 - **Performance monitoring:** framerate monitor, video decoder logging, frame drop tracking
 - **Logging system:** ProAppSupport structured logging with configurable levels and categories
 - **Presets for quick enable/disable:** `timeline_visual`, `performance`, `verbose_logging`, `all_off`

**Patcher Signing Fix:**
- Use ad-hoc signing only — preserves Apple framework signatures
- Fixes crash in ProAppSupport when Developer ID certificate was present

**Crash Prevention:**
- Block known unsafe trim selectors with nil error pointers that caused segfaults

**Bug Fixes:**
- Fix `retimeHold` action mapping (was using non-existent `retimeHoldFromSelection:`, now correctly uses `retimeHold:`)
- Updated patcher shell script with same signing fix

You can download and learn more on [GitHub](https://github.com/elliotttate/FCPBridge).

---

**PaperCut Pro v1.0** is now live.

This is created by [Chenxing Liu](https://patrokiras.com), the same developer behind [Workspace Remapper](https://fcpbooster.com/workspace-remapper/) and [Subtitle Wrangler](https://fcpbooster.com/subtitle-wrangler/).

> PaperCut Pro is a browser-based, text-driven rough cut editor for language-heavy content such as interviews, monologues, and dialogue.
>
> Import transcribed footage (media + SRT/VTT/ITT, or FCPXML with captions). Edit directly on the text — copy, cut, paste, and rearrange like a document, with media staying in sync for preview. Export timelines as FCPXML for finishing in Final Cut Pro.
>
> Projects can be shared for collaboration — structure can be shaped in text and returned as a timeline foundation, without rebuilding from scratch.
>
> Built as a side project to address a long-standing pain point in FCP documentary workflows.
>
> Free and fully local (runs in the browser, no uploads). Google Chrome recommended.

You can learn more on the [PaperCut Pro website](https://fcpbooster.com/paper-cut-pro/).

---

**FCP Backup Manager v0.8.0** is out now.

It includes the following changes:

**Added:**
- Preferred Time: optional time-of-day picker for daily and weekly schedules (e.g., run at 6:00 PM every day instead of on a rolling interval)
- Quiet Hours: optional time window during which scheduled backups are suppressed (e.g., skip 9:00 AM to 5:00 PM to avoid running during editing sessions)
- Quiet hours supports overnight windows (e.g., 10:00 PM to 6:00 AM)
- Setup JSON support for preferredTimeEnabled, preferredTime, quietHoursEnabled, quietHoursStart, quietHoursEnd (all times in HH:mm format)
- MDM profile support for PreferredTimeEnabled, PreferredTime, QuietHoursEnabled, QuietHoursStart, QuietHoursEnd
- Config export now includes preferred time and quiet hours when enabled
- Wake-from-sleep detection resets the schedule timer to avoid drift after the Mac wakes

**Fixed:**
- MDM profile support for preferred time and quiet hours keys was missing — PreferredTimeEnabled, PreferredTime, QuietHoursEnabled, QuietHoursStart, QuietHoursEnd are now read from managed preferences, applied at highest priority, and locked in the Settings UI
- Schedule timer now starts at app launch instead of waiting for the user to open the menu bar dropdown — previously, if the app launched via Login Items and the user never clicked the menu icon, scheduled backups would never fire
- Overdue backup catch-up: if a scheduled backup was missed while the app was quit or the Mac was asleep, the app now fires the backup shortly after launch instead of waiting the full interval
- Menu bar "Next:" display now accounts for preferred time and quiet hours when calculating the next run

**Changed:**
- Schedule settings moved to their own Schedule tab in the Settings sidebar under Utilities, giving more room for the new preferred time and quiet hours controls

You can download and learn more on [GitHub](https://github.com/macvfx/FCP-Backup-Manager).

[!button text="Discuss this news item" variant="info"](news/20260405/#discuss-this-page)

---

!!!warning Sponsored
_Tight. Terse. Terrific. Bim. Bam. Boom._ – Cut/daily reader<br />
Post Production insight delivered to your inbox.<br />
Sign up for **free** at [Cut/daily.com](https://www.cut-daily.com)
!!!

---

### [4th April 2026](/news/20260404)

For anyone interested in on-device transcription, **ScriptStar v1.5.0 (Build 23)** is now available for testing on **TestFlight**.

You can find TestFlight links to all of LateNite's products over on the [FCP Cafe Discord](https://ltnt.tv/discord).

This is really the best place to chat to other Final Cut Pro gurus.

There's some cool changes to **Keyframe Toolbox** hitting TestFlight VERY soon!

Whilst the FCP Creative Summit looks like it might have quietly disappeared, NAB is going full stream ahead!

![](/static/fcp-creative-summit-2026.png)

FMC writes:

> **The Apple Creator Studio Track Is Here**
>
> If you create with Apple tools—or want to discover how Apple Creator Studio can elevate your next production—this dedicated track at **Post|Production World** Las Vegas is crafted for you.
>
> It brings together real-world workflows, practical techniques, and advanced tools across Final Cut Pro, Motion, and Pixelmator Pro.
>
> Whether you're editing on tight deadlines, building dynamic templates, or optimizing your creative pipeline, these sessions are designed to help you work with greater speed, intelligence, and creative control.

![](/static/post-production-world-2026.jpg)

The sessions include a bunch of industry legends:

> `8:15 – 9:15 AM`
> **Mobile Production with Live Multicam**
> Steve Martin
>
> `9:30 – 10:30 AM`
> **Create Your Own Final Cut Pro Templates!**
> Jenn Jager
>
> `10:45 – 11:45 AM`
> **AI-Enhanced Creator Studio Workflows**
> Mark Spencer
>
> `1:30 – 2:30 PM`
> **Pixelmator Pro Crash Course**
> Jenn Jager
>
> `2:45 – 3:45 PM`
> **10 Apple Motion Secrets or Plugins & Workflow Accelerators for FCP**
> Dylan Bates
>
> `4:00 – 5:00 PM`
> **The Ultimate Creator Studio Tips and Tricks**
> Jenn Jager, Steve Martin, Mark Spencer, Dylan Bates
>
> From live multicam production to advanced Motion workflows, this is where Apple creators level up.

Steve, Mark, Jenn & Dylan are four of the nicest, kindest, smartest and most attractive experts in the Final Cut Pro community, and such great presenters!

If you're heading to NAB, I would HIGHLY recommend heading to **Post|Production World**.

Sadly, I won't be making the trek to NAB this year - both for cost and safety reasons, given the current state of the world.

I'm ASSUMING this is similar reasons why the **FCP Creative Summit** has been delayed or cancelled all-together.

Based on the years that I've been, a large portion of the FCP Creative Summit attendees and presenters were from overseas, and I think travelling anywhere, let alone the USA in the current climate is a lot more challenging than it was a year ago.

I also think, with Apple's recent MotionVFX acquisition, the Apple team probably isn't entirely sure of timelines for product releases - it's probably all still an evolving work-in-progress.

I do however expect to see SOME kind of announcement about Final Cut Pro and MotionVFX at NAB - what exactly I have no idea.

As I've written on FCP Cafe, I would be REALLY surprised if Apple just add all of MotionVFX's collection to Apple Creator Studio.

It's POSSIBLE they might just move all the **MotionVFX DesignStudio** elements to Apple Creator Studio:

![](/static/motionvfx-design-studio.png)

It'll be interesting to see if they keep **mExtension** or if they just include all the Motion Templates as optional downloads in the Effects/Transitions/Titles/Generator Browsers, like they currently do on both Mac and iPad.

[![](/static/motionvfx-minstaller.png)](https://www.youtube.com/watch?v=lF5DNGmLlPE)

Either way, NAB will be interesting times!

[!button text="Discuss this news item" variant="info"](news/20260404/#discuss-this-page)

---

!!!warning Sponsored
Native Blackmagic RAW support in Final Cut Pro.<br />
[Download BRAW Toolbox](https://brawtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [3rd April 2026](/news/20260403)

Happy Easter Friday! 🐣

First up... [Bruce the Wonder Yak](https://codybrom.github.io/CallTheYak/) is back! 🥳

![](/static/bruce.png)

A few weeks ago the amazing [Samantha Bell](https://www.samanthabell.com.au) invited me to her podcast, [Natural Genius](https://naturalgenius.com.au/).

I love Sam - she's a genius, so lovely, so smart, and just so much fun.

You can watch it on [YouTube](https://www.youtube.com/watch?v=WLByY6z1cR4):

[![](/static/chris-on-natural-genius.jpg)](https://www.youtube.com/watch?v=WLByY6z1cR4)

You can also listen to it on [Spotify](https://open.spotify.com/episode/0LdfHsWbaec7WAst52PsOe) and [Apple Podcasts](https://podcasts.apple.com/us/podcast/31-chris-hocking-saying-yes-solving-problems-and/id1866513082?i=1000758937097).

Hope you enjoy my rants!

**The Wall Street Journal** has also released an awesome little video titled **Apple Just Showed Us Rare Prototypes—Even Tim Cook Hasn’t Seen Them**.

You can watch it on [YouTube](https://www.youtube.com/watch?v=74qPQt_5DdM):

[![](/static/wsj-tim-cook.jpg)](https://www.youtube.com/watch?v=74qPQt_5DdM)

Also, following on from yesterday's news post, there's been some cool things in the **FCPBridge** world!

There's an awesome geeky read on [Final Cut Pro Application Internals](https://github.com/elliotttate/FCPBridge/blob/main/docs/FCP_APPLICATION_INTERNALS.md).

There's also an equally geeky and great read on [Final Cut Pro: Mac vs iPad — Deep Dive Comparison Report](https://github.com/elliotttate/FCPBridge/blob/main/docs/FCP_Mac_vs_iPad_Comparison.md).

We now have a dedicated FCPBridge channel in the [FCP Cafe Discord](https://ltnt.tv/discord).

For those that celebrate, have an awesome fun and relaxing Easter long-weekend break! 🍫

---

**FCPBridge v2.8.3** is out now.

![](/static/effect-drag.png)

It includes the following improvement:

- **Effect drag as adjustment clip:** drag effects to empty timeline space to create named adjustment clips with effects applied, toggle via FCPBridge menu

You can learn more and download from [GitHub](https://github.com/elliotttate/FCPBridge).

[!button text="Discuss this news item" variant="info"](news/20260403/#discuss-this-page)

---

!!!warning Sponsored
Gyroscope Stabilisation in Final Cut Pro.<br />
[Download Gyroflow Toolbox](https://gyroflowtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [2nd April 2026](/news/20260402)

Happy Thursday! 👋

I think today is a **BIG** day for Final Cut Pro users. Maybe even the biggest day in the last decade.

Two weeks ago, [elliotttate](https://www.reddit.com/user/elliotttate/) made a [little post on Reddit](https://www.reddit.com/r/finalcutpro/comments/1ry48b9/final_cut_pro_x_commandpost_mcp_almost_instantly/) about building a MCP server for CommandPost:

> **Final Cut Pro X CommandPost MCP - Almost instantly do things like cut to scene changes, remove silence in videos, etc.**
>
> MCP can be really powerful for automatically making any automation with CommandPost. I made a PR here if anyone wants to test it: https://github.com/CommandPost/CommandPost/pull/3514
>
> Essentially, anything you'd ever want to automate, you can just type in a prompt and the MCP through CommandPost will figure out a way to do it. Automate cut to scene changes, remove silence in videos, export info from your timeline to a CSV, make changes based on edits you make to text, etc. the sky is pretty much the limit.

He also made a pull request to the [CommandPost GitHub](https://github.com/CommandPost/CommandPost/pull/3514) giving his work to the world for free, completely open source.

This was amazing and impressive in itself.

Sadly, in the last two weeks, I still haven't had a chance to properly review and work out how best to release this in CommandPost.

But whilst I was busy with life and work, [elliotttate](https://www.reddit.com/user/elliotttate/) was even busier.

A day ago he [posted](https://www.reddit.com/r/finalcutpro/comments/1s8zqiv/true_native_text_based_editing_plugin_more/):

> **True Native Text Based Editing Plugin (+ more powerful MCP)**
>
> It's wild that Apple hasn't add this yet when it took Claude about 20 seconds to write this.
>
> I built out a modding platform for Final Cut Pro X that lets plugins safely access the true power of FCPX to do anything (including LLMs like Claude through its MCP) https://github.com/elliotttate/FCPBridge
>
> This is an example of a plugin Claude created in about 20 seconds that gives full native text based editing to FCPX. The features that you can add to FCPX are limitless and it's been really fun to finally do a lot of things I've wanted to for a long time with FCPX. Really unlocks all kinds of amazing workflows.
>
> TL;DR - This differs from the Command Post MCP that I showed recently in that the LLM has direct access to FCPX. This lets it directly control things programmatically rather than using limited accessibility features. Need to add a thousand markers, each at scene changes? Boom, it can do all 1,000 instantly. It's not limited by any UI limitations thus making this extremely powerful and fast.

Then a mere 12 hours ago he [posted](https://www.reddit.com/r/finalcutpro/comments/1s9swj6/more_modded_fcp_examples_apple_intelligence/):

> **More Modded FCP Examples - Apple Intelligence, Command Palette, Speaker Detection, Remove Silences, Scene Change Cuts & More**
>
> A few more examples of what an LLM can do with modded FCP through [FCPBridge](https://github.com/elliotttate/FCPBridge)
>
> You can instantly do anything in FCP with Apple Intelligence like cut out silences, detect scene changes, cut to specific parts, add transitions, effects, titles, text based editing, text based color grading, etc.
>
> The Command Palette is something I added last night and is really powerful and can instantly do thousands of things. And if anything is missing, you can just ask Claude, etc. and it will almost instantly create the workflow that can be reused. It uses Apple Intelligence so you can ask it things in a sentence form to do.
>
> I also added a lot of new features to the text based editing such as speaker detection, silence detection, etc. It should be fully on par with Adobe Premiere and DaVinci Resolve's text based editing now.
>
> Anything you all would want to see added?

This is WILD. 🤯

![](/static/fcpbridge-patcher.png)

Why? Well, none of the techniques he's using are exactly new.

![](/static/fcpbridge-in-action.png)

I was experimenting with code injection in the original [FCPX Hacks](https://fcp.cafe/blog/final-cut-pro-hacks/) days.

We even "injected" our "hacks" into the Final Cut Pro Command Editor:

![](/static/blog/09-fcpx-40-commandeditor-813x1024.png)

We manipulated things at the file system level to get access to things we shouldn't have access to:

![](/static/blog/01-06.png)

![](/static/blog/01-secret_fcpx_settings.jpg)

It was an exciting time. It was the wild west. This is where [CommandPost](https://commandpost.fcp.cafe) was born.

But eventually, I realised that **FCPX Hacks** was too scary for most people, and Apple HATED it.

Eventually, **FCPX Hacks** became [CommandPost](https://commandpost.fcp.cafe), and we dropped a lot of the features that manipulated the Final Cut Pro Application Bundle.

![](/static/commandpost-fcp-preferences.png)

Jump forward a decade, and now CommandPost is the boring old school app that has a lot of users, and the developers (i.e. me) moves slowly, and [FCPBridge](https://github.com/elliotttate/FCPBridge) COMPLETELY changes the game.

It's simple, but insanely clever, and it literally changes the game.

For example, this genius moves FAST:

![](/static/timeline-batch-export.png)

...within four hours, we now have [Timeline Batch Export](https://www.youtube.com/watch?v=OQEFKqCCJlk) that's FAR superior than CommandPost.

Why waste time building Workflow Extensions and external tools, when you could just fix and completely revamp Final Cut Pro directly?

But the crazy part isn't what [elliotttate](https://www.reddit.com/user/elliotttate/) has built, it's HOW it was built.

[elliotttate](https://www.reddit.com/user/elliotttate/) is using LLMs to do INSANELY awesome things.

And already, people like [Knut Hake](http://www.knuthake.de) are using lessons learned from FCPBridge to build new and exciting tools.

This is literally day one - and it's already HUGELY exciting and amazing.

Imagine what will happen when someone like [Alex4D](https://alex4d.com) applies the same techniques to Apple Motion!

This is exciting times, but it's also kinda scary times.

LLMs can now do ANYTHING, and can be driven by ANYONE.

Anyone can make these tools, anyone can change the game overnight.

This blog post mostly focusses on Final Cut Pro, but the same techniques could be applied to ANY Mac Application.

And now that LLMs have full control over Final Cut Pro, the question is... why do LLMs even NEED Final Cut Pro, OR human editors?

Certainly very exciting... and crazy times ahead!

Should YOU try [FCPBridge](https://github.com/elliotttate/FCPBridge)? Well, that's completely up to you.

[elliotttate](https://www.reddit.com/user/elliotttate/) writes:

> **Is This Legal / Safe to Use?**
>
> A few things worth clarifying up front -- this isn't for everyone, but it's very easy to set up if you do want to try it.
>
> **On reverse engineering and the EULA:** Reverse engineering for interoperability is explicitly protected under the DMCA ([17 U.S.C. § 1201(f)](https://www.law.cornell.edu/uscode/text/17/1201)) and similar laws in the EU. This is the same legal basis that allows tools like Homebrew, Hammerspoon, and countless other macOS utilities that hook into Apple apps. Apple's EULA doesn't override federal law. That said, FCPBridge doesn't really involve reverse engineering in the traditional sense -- once the library is loaded, Final Cut Pro exposes all of its own classes and methods through the Objective-C runtime. There's no decompilation required.
>
> **On "injecting code":** What FCPBridge does is no different from what accessibility tools, screen readers, and automation utilities do every day on macOS. `DYLD_INSERT_LIBRARIES` is a documented Apple mechanism -- it's not an exploit. Apps like BetterTouchTool, Alfred, and Bartender all inject into running processes using the same techniques.
>
> **On Apple disabling your Apple ID:** There is no precedent for Apple disabling an Apple ID for running a modified local app. Apple can't even distinguish between "ran a modded app" and "loaded a dylib for debugging in Xcode," which developers do constantly. Apple's focus is on protecting the App Store and code signing for distribution -- not policing what developers do on their own machines.
>
> **The real risk** is the same as any unsigned software: make sure you trust the source. The code is fully open, the techniques are well-established, and nothing here is novel or dangerous from a security perspective.
>
> On a personal note -- I've been frustrated by how little progress Final Cut Pro has made over the years, and my hope is that this project can help it finally get some of the features it desperately needs. There's a huge precedent in modding software and games. I've modded quite a few games where the developers officially adopted features based on community work. It can be a really productive relationship where proof of concepts demonstrate what would be genuinely useful to add officially.

My suggestion... if you're comfortable with macOS Terminal and tinkering - then go nuts. It's SUPER fun to play with.

If you've never opened up macOS Terminal - then I would probably hold off for now until FCPBridge has a nice website and goes more "mainstream".

If you're a nerd that's coded your own stuff in Lua with CommandPost - then this is for YOU! Let's see what crazy stuff we can make!

Onwards & Upwards! 🤯

---

**LUT Robot v1.1.1 (Build 7)** is now available on the Mac App Store! 🥳

This release contains the following change:

- Updated to FCPXMLKit v1.1.3 and Swift 6.

You can download and learn more on the [LUT Robot website](https://lutrobot.fcp.cafe).

---

**captionTranslator v1.0.4** is out now with the following bug fixes:

- Bug fix for translating to Spanish

You can learn more and download on the [Mac App Store](https://apps.apple.com/app/captiontranslator/id6737919696).

[!button text="Discuss this news item" variant="info"](news/20260402/#discuss-this-page)

---

!!!warning Sponsored
_Tight. Terse. Terrific. Bim. Bam. Boom._ – Cut/daily reader<br />
Post Production insight delivered to your inbox.<br />
Sign up for **free** at [Cut/daily.com](https://www.cut-daily.com)
!!!

---

### [1st April 2026](/news/20260401)

Pinch and a punch for the first day of the month! 👊

FWIW - We won't be doing April Fools junk on FCP Cafe.

However, in the big news this week, **Boris FX** has acquired **Vegas Pro**! 🤯

This is kinda unexpected and a big surprise, at least for me.

Back on **17th March 2026** I wrote:

> Whilst I was pretty confident MotionVFX was looking to be sold for a LOT of money, I had my money on Adobe, Artlist, or MAYBE BorisFX - whilst it makes perfect sense for Apple to buy MotionVFX, I really didn't expect it to happen.

Boris FX buying MotionVFX would have made sense to me - as then they would basically control a HUGE marketplace, and be able to really go head-to-head with FxFactory.

It was a pretty big shock that Apple would actually buy MotionVFX - but now that they've done it, and Boris FX has bought Vegas Pro - that's kinda a big deal.

Boris FX is an INCREDIBLE company:

> Two Academy Awards, four Emmys, and over 1 million users. We are Boris FX.
>
> Through artificial intelligence and machine learning (ML), computer vision, image processing, and intelligent design, we solve the hard problems so our users can work more efficiently in the creative process.
>
> Boris FX is a leading developer of visual effects software and plugins for film, video, and photography creative professionals. For years our products have been used on the most celebrated films and shows of our time including Star Wars, Avatar, Black Panther, the Harry Potter series, Game of Thrones, Stranger Things, The Mandalorian, and countless others.
>
> Founded in 1995, the company’s success lies in its ability to tightly integrate and leverage technologies through strong partnerships with Adobe, Apple, Avid, Autodesk, Blackmagic Design, Foundry, VEGAS Pro, and other developers of video software.
>
> Our Mission? To create the highest quality creative tools available for editors, colorists, VFX artists, designers, and animators. Through computer vision, image processing, and intelligent design, we solve the hard problems so our users can work more efficiently in the creative process.
>
> Our Customers. We are proud to serve and partner closely with many leaders in the media and entertainment industry, including Netflix, Disney, Marvel, BBC, ILM, Weta, Framestore, Double Negative, Deluxe, MLB, HBO, NBC, Fox, SkyTV, Al Jazeera, Technicolor/MPC, and many more.

I've worked closely with some of the Boris FX team over the years - especially the **Mocha Pro** team, who I love dearly (Mocha Pro might just be my FAVOURITE piece of software).

> The Boris FX Suite bundles our award-winning product family in one easy subscription that delivers the ultimate post-production toolkit at the best value. Includes Sapphire, Continuum, Mocha Pro, Silhouette, SynthEyes, CrumplePop, Optics, and Particle Illusion Pro.
>
> Streamline your pipeline with powerful AI-driven tools and creative effects for editing, motion graphics, VFX, 2D/3D motion tracking, rotoscoping, digital paint, audio, and photography tasks. Includes free access to premium training series with project files and footage to follow along.
>
> **Sapphire** — Create stunning organic looks in seconds with Emmy Award-winning lens flares, glow effects, transitions, and highly stylized effects. Includes built-in Mocha planar tracking & masking and a powerful Effect & Transition Builder. Available as a plugin for Adobe, Avid, and OFX host applications.
>
> **Continuum** — Meet daily content creation demands with the plugin industry’s most comprehensive collection. Includes AI-powered tools, 300+ effects, 5000+ presets, built-in Mocha tracking, keying & compositing, 3D titles, Particle Illusion, and more to fit. Available as a plugin for Adobe, Avid, FCP, and OFX host applications.
>
> **Mocha Pro** — Make quick work out of visual effects tasks like screen inserts, object removes, set extensions, and more with Academy and Emmy Award-winning planar tracking and masking tools. Available as a plugin for Adobe, Avid, and OFX host applications.
>
> **Silhouette** — Achieve total creative control over every pixel with the feature film industry’s leading advanced rotoscoping, non-destructive paint, and compositing tools. Winner of both an Academy and Emmy Award. Available as a standalone application and plugin for Adobe/OFX hosts.
>
> **SynthEyes** — Access powerful, fast, and precise 3D tracking and matchmove tools. Offers complete control over tracking and camera-solving workflows with extensive lens distortion analysis. Available as a standalone application with export options to leading 3D and compositing applications.
>
> **Optics** — Transform photos into cinematic art with Hollywood-quality lighting and lens effects, curated film looks, and realistic particle creation. Includes thousands of presets and powerful photo editing options. Available as a plugin for Adobe Photoshop/Lightroom and a standalone application.
>
> **CrumplePop** — Make audio sound its absolute best, thanks to AI-powered restoration tools. Instantly remove wind, traffic, and pops or even enhance vocal quality with a user-friendly and simple interface. Available as a plugin for video editing and audio applications.
>
> **Particle Illusion Pro** — Create stunning 3D particle animations for VFX, motion graphics, titles, and more inside a standalone application that allows video background imports.

Boris FX has some of the smartest minds in visual effects, post production and sound, some insanely great technology & frameworks, and even a bunch of very important patents.

Now that they have Vegas Pro - they basically have all the foundations to really mess with the video editor space.

Currently Vegas Pro only runs on Windows - which is a deal breaker for me personally, but it's entirely possible Boris FX could do a Blackmagic and make it cross-platform.

The Boris FX team also have great knowledge in video codecs and video pipelines - so it's also entirely possible they could do major refactoring to the Vegas Pro code to make it faster, better and more modern.

**Boris Yamnitsky**, the founder of Boris FX, is a genius and a super innovative, and lovely guy - so it's HUGELY exciting to see another video editor really step up in the market.

Will Vegas Pro compete with Final Cut Pro? If it comes to Mac... maybe? It already has some very innovative features that other NLEs don't have.

> It’s about being bold. Doing things your way. That’s how you edit. Vegas Pro gives you fast, powerful, straightforward tools to bring your ideas to life.

Vegas Pro 2026 by Boris FX introduces:

> **Advanced 2D & 3D Titling for Vegas Pro**
> Vegas Pro 2026 now includes the Continuum Title Pack, a professional set of 2D and 3D titling tools built directly accessible from the Vegas timeline. Design, extrude, deform, and animate text and graphics without leaving your edit.
>
> **Built for the Vegas Timeline**
> All Continuum Title Pack tools operate as standard video effects inside Vegas Pro.
>
> - Apply directly to events
> - Animate using Vegas keyframes
> - Combine with compositing and blending modes
> - Fully compatible with the Vegas Core Engine
> - Professional motion graphics titling — fully integrated into your editing workflow.
>
> **Title Studio**
> A complete motion graphics titling environment inside Vegas Pro.
>
> - Create 2D and true 3D titles
> - Full extrusion, bevel, and depth control
> - Materials, lighting, reflections, and shadows
> - Built-in animation timeline for precise keyframing
> - Lower third and broadcast-ready templates
> - Spline-based shape tools for custom graphics
>
> Title Studio enables advanced openers, branded graphics, and cinematic titles — all from a single effect.
>
> **Type On Text**
> Precision text reveal animation with procedural control.
>
> - Animate by character, word, or line
> - Typewriter-style animation
> - Custom easing and timing controls
> - Gradient fills, outlines, and drop shadows
> - Optional cursor animations
>
> Perfect for tutorials, callouts, social content, and modern kinetic typography.
>
> **Layer Deformer**
> Reshape and animate titles in 3D space.
>
> - Bend and arc text layers
> - Apply perspective-based warping
> - Create dimensional motion effects
>
> Layer Deformer adds dynamic curvature and depth without complex compositing.
>
> **Extruded Text**
> Create depth-rich 3D typography directly in Vegas Pro.
>
> - True 3D text extrusion
> - Adjustable bevel and depth controls
> - Real-time lighting and shadow casting
> - Material and surface styling
>
> Ideal for logo builds, dramatic title sequences, and broadcast graphics.
>
> **Extruded Spline**
> Turn custom shapes into 3D geometry.
>
> - Extrude spline-based shapes
> - Animate 3D panels and graphic elements
> - Apply lighting and material controls
>
> Design dimensional graphic elements with precise shape control
>
> **Extruded EPS**
> Import and extrude vector artwork in 3D.
>
> - Load EPS vector files
> - Convert logos into 3D geometry
> - Control depth, bevel, lighting, and shadows
>
> Bring branded assets into 3D space for polished intros and identity graphics.
>
> **Engineered for Speed and Precision**
> New and improved AI for depth modeling, transcription, and voice generation, so you can move faster and stay focused on your edit.
>
> **Native 4:2:2 GPU Decoding on NVIDIA Blackwell**
> Vegas Pro 2026 adds hardware-accelerated AVC and HEVC 4:2:2 decoding on NVIDIA Blackwell GPUs. Editors working with high-quality camera formats can now:
>
> - Play back 4:2:2 footage smoothly without software decoding bottlenecks
> - Edit multi-cam projects more efficiently
> - Maintain full chroma precision throughout the pipeline
>
> Fully compatible with Vegas Core Engine features, including the Zero Copy Pipeline.
>
> **Z-Depth 2.0 with Updated AI Depth Model**
> Z-Depth 2.0 features a newly trained Boris FX AI depth model for more accurate foreground and background separation.
>
> - Higher-resolution depth masks
> - More detailed depth layer detection
> - Improved temporal smoothing
> - Reduced flicker across frames
>
> **Fully Offline Speech-To-Text (Subscription Only)**
> Keep your data private with the new offline Speech to Text transcriptions. Fully offline and completely secure.
>
> Vegas Pro 2026 includes multiple AI models so you can choose between faster CPU processing or maximum quality on supported GPUs.
>
> - Text-based editing
> - Automatic subtitle creation
> - Support for 100+ languages
> - Unlimited transcription usage
> - No internet connection required
>
> **Fully Offline Text-To-Speech (Subscription Only)**
> Generate voice-overs directly on your PC without uploading audio or relying on cloud services.
>
> - 9 supported languages
> - 54 voice options
> - Adjustable speed, pitch, and volume
> - No length restrictions
> - Fully local processing
>
> **Integrated Storyblocks Access (Subscription Only)**
> Subscription users receive integrated access to the Storyblocks content library. Download video footage, music, and sound effects directly inside Vegas without interrupting your workflow.
>
> - Unlimited downloads
> - Multiple resolution and format options
> - Direct integration through the Explorer window
>
> **General Performance and Stability Improvements**
> Vegas Pro 2026 includes extensive engine optimizations and performance enhancements designed to improve reliability and responsiveness across projects.
>
> - Core engine optimizations
> - Improved GPU utilization
> - Faster project loading and timeline responsiveness
> - Stability improvements across complex workflows

Let's be honest... in their first update, Boris FX has already done more to Vegas Pro than Apple has done to Final Cut Pro, and especially Motion in a decade.

Competition is always a great thing.

Blackmagic DaVinci Resolve continues to get bigger and better with every update. The Blackmagic team of developers are INSANELY fast and INSANELY talented.

But DaVinci Resolve is still a spaceship - it can do ANYTHING, but you really need to become a Resolve expert to do anything with it, as the default settings are not always that logical for 90% of users.

First and foremost DaVinci Resolve is still a colourists tool - and they're rapidly bolting on additional tools for editors and sound designers - but always ensuring that they don't mess up their Colour Pipeline.

Boris FX now have the opportunity to re-look at thinks with fresh eyes. They're already innovating all over the place with machine learning in the VFX and sound space. Now they can take all this knowledge and apply it to a video editor.

SUPER exciting times ahead!

---

**Recall Toolbox v1.1.1** is out now! 🥳

![](/static/recall-toolbox-v1-1-1.png)

We actually pushed out two updates today, because of some regressions. Thanks Apple App Review for turning around the updates so quickly! ❤️

**Recall Toolbox v1.1.0** contained the following changes:

**IMPROVEMENTS:**
- Various under-the-hood improvements to iCloud Sharing on macOS Tahoe. Thanks for reporting Daniel Malferrari!
- Added the ability to resize thumbnails. Thanks for suggesting Daniel Malferrari!
- Added List Mode, in addition to the existing Thumbnail mode. Thanks for suggesting Florian Duffe!
- Added a "User Guide" button in the "Settings" settings. Thanks for suggesting Vigneswaran Rajkumar!
- Added additional right-click menu items for Folders and Items. Thanks for suggesting Florian Duffe & Vigneswaran Rajkumar!

...then we followed up with **Recall Toolbox v1.1.1** quickly after with some fixes:

**IMPROVEMENTS:**
- Improved automatic iCloud refreshing. Thanks for reporting Daniel Malferrari!
- Added option to manually refresh when right-clicking on a Folder and Item.
- Adjusted the Final Cut Pro Workflow Extension minimum width.

**BUG FIX:**
- Fixed a regression that caused the Final Cut Pro Workflow Extension to crash. Thanks for reporting Daniel Malferrari!

You can download and learn more on the [Recall Toolbox website](https://recalltoolbox.fcp.cafe).

[!button text="Discuss this news item" variant="info"](news/20260401/#discuss-this-page)

---

!!!warning Sponsored
Native Blackmagic RAW support in Final Cut Pro.<br />
[Download BRAW Toolbox](https://brawtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

## March

### [31st March 2026](/news/20260331)

**VFX Toolbox v1.0.1 (Build 6)** is now available on the Mac App Store & TestFlight! 🥳

This update contains the following improvements:

- Improves timeline marker accuracy and fixes several issues affecting VFX Delivery exports.
- Correct marker placement for clips with multiple markers.
- More accurate VFX Delivery timecodes and frame-aligned clip trimming.
- Improved handling of nested and sync clip marker extraction.
- Resolved duplicate marker placement when compound clips share source footage.
- Additional stability and workflow improvements.

You can download and learn more on the [VFX Toolbox website](https://vfxtoolbox.fcp.cafe).

---

**Jumper v2026.03.30** has now been released for macOS (Apple silicon + Intel) and Windows.

**For macOS:** preferred way to update is to use the "auto-check for updates"-function in the Jumper launcher app.

**For Windows:** download and run installer from the [Jumper website](https://download.getjumper.io/).

**🥳 New Features:**
- Folder hierarchy in the media panel: browse your media organized by folder structure, Final Cut Pro Libraries & Events, and bins across all NLE platforms.
- Export and import Watch Folder configurations as `JSON` files: easily back up or transfer your watch folder setups.
- Analysis folder repair tool: fixes a bug where using multiple different analysis folders could cause data to "bleed" between them, with the option to remove analysis data for deleted source media.
- Final Cut Pro Creator Studio v12 (subscription) is now supported.

**🔨 Improvements:**
- You can now paste file paths directly into the Watch Folders dialog.
- Keyboard navigation for folder selection in the media panel.
- Script Inspector now shows selected item counts in button labels.
- Refreshed splash screen with new visual effects and branding.
- Improved contrast for selected segments in Script Inspector (light mode).
- Watch Folders processing is now faster with larger batch sizes and reduced wait times.

**🐞 Bug Fixes:**
- Fixed a bug where silence segments could show negative durations in Script Inspector.
- Fixed incorrect cropping of `BRAW` and `R3D` files during visual analysis.
- Fixed transcription and people analysis data not being cleared when switching analysis folders.
- Fixed an issue where multiple analysis jobs could run concurrently.
- Fixed misaligned folder icon in Shared Scan MXF Metadata section.
- Fixed a brief flash of the onboarding overlay on app startup.

You can download and learn more on the [Jumper website](https://getjumper.io).

---

**Mat X** writes on the [FCP Cafe Discord](https://discord.com/channels/1365861122720137276/1470279605104414882/1488024914417156177):

> Hi. I wanted to share my **FCP Backup Manager** app with everyone.
>
> It's free. And it watches your Final Cut Pro backups in `~/Movies` and `ZIP`'s up the `.fcpbundles` to any locations you want.
>
> I use it to backup all my clients' Final Cut Pro project backups on their workstations to shared storage where my Archiware P5 backups run.
>
> But you can use it to move to any NAS, SSD or whatever you prefer.
>
> Those Final Cut Pro project backups can be a real life saver. Also has `MDM` and `JSON` easy config options when you're managing more than your own workstation.
>
> Check out the [FCP Backup Manager GitHub Page](https://github.com/macvfx/FCP-Backup-Manager) and see all my free tools for Final Cut Pro, Media Trust, and P5 Archive on [my main code site](https://code.matx.ca/).

---

**Marker Data v2.0.0** by [Vigneswaran Rajkumar](https://bsky.app/profile/vigneswaranrajkumar.com) is out now.

Marker Data now only supports **macOS Sequoia v15.7** or later, starting with version v2.0.0.

🔨 Improvements:

- Overhaul Marker Data's GUI to Liquid Glass
- Updated Marker Data's application icon for macOS Tahoe
- Verified to run under macOS Tahoe and Final Cut Pro 12
- Excel export profile now has the ability to automatically embed images
- Improved compatibility of CSV export profile and TSV export profile when data contains special characters
- Added support and compatibility for FCPXML v1.14 (Final Cut Pro 12)
- Added support for Final Cut Pro Creator Studio (Subscription Version)
- Dock Icon's Progress now uses Squircle Style
- Updated Airtable Module Airlift to version 1.3.3
- Updated Notion Module CSV2Notion Neo to version 2.1.0
- Updated Pagemaker Module to version 1.1.1
- Marker Data's Uninstaller has been rewritten in Swift
- Updated core dependencies
- Codebase updates for Xcode 26.4

🐞 Bug Fix:

- Removed unintended exposure of the XML Path column in Notion Database Profile
- Fixed an issue that prevented macOS notifications for Marker Data
- Fixed an issue that caused Dropbox setup to fail on macOS Tahoe due to Apple restrictions
- Fixed an issue where the Dock Icon progress toggle was not working
- Fixed an issue where the Queue table sort was not working
- Embedding extracted images with Swatch Palette is not supported for Excel Profile

You can download and learn more on the [Marker Data website](https://markerdata.theacharya.co).

[!button text="Discuss this news item" variant="info"](news/20260331/#discuss-this-page)

---

!!!warning Sponsored
Gyroscope Stabilisation in Final Cut Pro.<br />
[Download Gyroflow Toolbox](https://gyroflowtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [30th March 2026](/news/20260330)

Happy Monday! 👋

Gotta collect them all! Niche professional apps with beautiful icons!

[Keyframe Toolbox](https://keyframetoolbox.fcp.cafe), [VFX Toolbox](https://vfxtoolbox.fcp.cafe) & [Notion Toolbox](https://notiontoolbox.fcp.cafe) are now up on the **Mac App Store**! 🥳

![](/static/mac-apps-march-2026.png)

**Keyframe Toolbox** is a collaboration with the handsome and amazing, Queensland-based [Iain Anderson](https://iain-anderson.com).

**VFX Toolbox** & **Notion Toolbox** is a collaboration with the equally handsome and amazing Berlin-based [Sam Plümacher](https://www.linkedin.com/in/sam-plümacher-747b66116/) (with the help of [Knut Hake](https://www.knuthake.de) as well, who's also working on a HEAP of incredible stuff).

Iain, Sam & Knut have real-world high-end professional problems that they NEED to solve for the projects they're currently working on. They're building tools that they'll use every day on jobs you'll probably watch - I'm helping bring those tools to everyone else, so that even indie filmmakers get to play with the big kid toys!

All of these tools also "unlock" [CommandPost](https://commandpost.fcp.cafe)!

Onwards & Upwards!

[!button text="Discuss this news item" variant="info"](news/20260330/#discuss-this-page)

---

!!!warning Sponsored
_Tight. Terse. Terrific. Bim. Bam. Boom._ – Cut/daily reader<br />
Post Production insight delivered to your inbox.<br />
Sign up for **free** at [Cut/daily.com](https://www.cut-daily.com)
!!!

---

### [29th March 2026](/news/20260329)

Happy Sunday! 👋

After a lot of frustrating back-and-forth with Apple's App Review, **Keyframe Toolbox v1.0.0** is now finally available for purchase on the Mac App Store! 🥳

You can purchase it for **USD$19.99** on the [Mac App Store](https://apps.apple.com/app/keyframe-toolbox/id6759331578).

**Keyframe Toolbox** finally brings advanced keyframe animation to Final Cut Pro.

![](/static/keyframe-toolbox-01.png)

Whilst Final Cut Pro has some basic keyframe controls for Opacity, Position, Scale, Rotation, it includes only limited control over how keyframes transition into one another. In many contexts, only linear keyframes can be created, leading to clunky animations.

Though the classic Final Cut Pro included basic keyframe graphs, no version of the modern Final Cut Pro has ever offered a complete set of integrated keyframe controls.

It's time.

Built directly into the Final Cut Pro Inspector, Keyframe Toolbox gives you complete control of your keyframes so you can really refine your movements, rotations, scales, fades and virtual focus pulls.

This is a power-user’s tool to help editors and animators create complex, precise animations on the Final Cut Pro timeline.

Keyframe Toolbox takes all the very best keyframe controls from Apple Motion (color, repeating animation patterns), Adobe After Effects (scalable keyframe groups), Blender (precise value editing) and more.

We've made our graphs as easy to edit as curves in Adobe Illustrator, and included flexible oscillations and other common patterns to make it easy to create and then tweak many kinds of animations.

Keyframe Toolbox is a one-time purchase, not a subscription, and we hope you love it.

You can learn more on the [Keyframe Toolbox website](https://keyframetoolbox.fcp.cafe).

If you need help, the please place to go is the [FCP Cafe Discord](https://ltnt.tv/discord).

Please share the news far and wide - we've love everyone to test out Keyframe Toolbox!

Unfortunately we're still waiting on Apple's App Review to release [VFX Toolbox](https://vfxtoolbox.fcp.cafe) and [Notion Toolbox](https://notiontoolbox.fcp.cafe).

However, you can still access them via TestFlight in the meantime. Stay tuned!

---

**FCP Template Manager v1.6** is out now.

It now supports **Final Cut Pro Creator Studio v12 (subscription)** and the **Final Cut Pro v11 Free Trial**.

It also includes various bug fixes and user interface improvements.

You can learn more on the [FCP Template Manager website](https://robtoearth.com/).

---

**Keyframeless v2026-03-27** is out now for free on GitHub.

It contains:

- See where your captions will be broken apart, and add manual breaks.
- Added Intel Support.
- Added support for macOS 15 Sequoia.
- **Fixed:** Have to reboot Final Cut Pro after download template for it to become usable
- **Fixed:** Behaviours not mapping correctly to FCPXML
- **Fixed:** Downloaded templates not exposing styling
- **Fixed:** Freezing and no audio waveforms
- **Fixed:** Rounded crash on launch

You can download and learn more on [GitHub](https://github.com/overpolish/keyframeless).

---

**Colourlab AI** has some big announcements ahead...

> We know it’s been quiet. - That wasn’t by accident.
>
> While things may have looked calm on the surface, behind the scenes we’ve been rebuilding Colourlab from the ground up. The last six months have been some of the most intense R&D we’ve ever done — including bringing real-time 4K AI colour grading to mobile through our partnership with ARRI and HONOR.
>
> That wasn’t the end goal. That was the foundation.
> Now comes the part that matters to you.
>
> At NAB, we will introduce **Colourlab AI v4**. Not an update. Not a patch. A complete rewrite.
>
> And this time, we didn’t just focus on new features — we focused on fixing what was broken.
>
> Playback issues. Linking problems. Licensing confusion. Trials that didn’t work the way they should. Subscriptions that felt messy. We heard you — clearly — and we’ve rebuilt the system to remove that friction entirely.
>
> If you’ve been frustrated with us in the past, you had a reason.
> And we’ve done something about it.
>
> Version 4 introduces a new way of working — what we call agentic AI workflows — where the system starts to understand intent, not just execute commands. It’s faster, cleaner, and far more aligned with how you actually want to work.
>
> We’re also rethinking training from the ground up, because powerful tools only matter if you can truly use them.
>
> On April 10, we’ll show you the first glimpse of what’s coming ahead of NAB.
> If you’ve been waiting for us to get this right — this is where it starts.

You can register for the [Live Stream on 10th April](https://colourlab.ai/?ns_url=25b6&mid=3431363&fch=bac109f8) to learn more.

---

**Marker to Reminder v1.5** is out now.

It includes the following change:

- Added user-requested marker filtering based on marker text, available as in-app purchase.

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/marker-to-reminder/id6757208568).

---

**Curves v1.1.1** is out now.

It includes the following changes:

- Add projection mode parameter: Select either object or world projection to configure how your 3D rotations are rendered
- If you have an older version of Curves installed:
 - Update the Curves app from the App Store
 - Open the Curves app and click **Upgrade Effect**
 - Restart Final Cut Pro

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/curves-for-final-cut/id6760507188)

---

**Backups for Final Cut Pro v2.1.6** is out now.

It includes the following changes:

- Verified to work with Final Cut Pro v12.0.
- Sterner warring if you try to just restore a Project or Event instead of a whole library.

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/backups-for-final-cut-pro/id586594646)

[!button text="Discuss this news item" variant="info"](news/20260329/#discuss-this-page)

---

!!!warning Sponsored
Native Blackmagic RAW support in Final Cut Pro.<br />
[Download BRAW Toolbox](https://brawtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [26th March 2026](/news/20260326)

Happy Thursday! 👋

For anyone not following along in our [FCP Cafe Discord](https://ltnt.tv/discord), we're currently gearing up to release two new apps on the Mac App Store created by the amazing Sam Pluemacher.

[Notion Toolbox](https://notiontoolbox.fcp.cafe) is a macOS application for merging CSV files and importing data into Notion databases.

![](/static/notion-toolbox-01.png)

[VFX Toolbox](https://vfxtoolbox.fcp.cafe) is for visual effects editors and post-production supervisors working with Final Cut Pro.

![](/static/vfx-toolbox-01.png)

Notion Toolbox, VFX Toolbox and [Keyframe Toolbox](https://keyframetoolbox.fcp.cafe) are all just patiently sitting in Apple's App Review.

Stay tuned!

---

**Simon Says Transcription v3.9.91** is out now.

This release contains "Solve bugs and Improve User Experience".

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/simon-says-transcription/id1441555493).

---

**Keyframeless v2026-03-24** is out now for free on GitHub.

It contains:

- Keyframeless X with automated Caption generation
- Rounded Corners Plugin
- Motion Blur Plugin

You can download and learn more on [GitHub](https://github.com/overpolish/keyframeless).

[!button text="Discuss this news item" variant="info"](news/20260326/#discuss-this-page)

---

!!!warning Sponsored
Gyroscope Stabilisation in Final Cut Pro.<br />
[Download Gyroflow Toolbox](https://gyroflowtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [25th March 2026](/news/20260325)

Happy Wednesday! 👋

Firstly... did you listen to the **Final Cut Grill** back in the day, hosted by the amazing Chris Fenwick?

I did, and I LOVED it - but I realised, it was gone from the interwebs. Well, now it's back - you can download and listen to ALL the old Episodes on [FCP Cafe](https://grill.fcp.cafe)!

I'm HOPING that Chris will release new episodes soon too! Stay tuned.

My sincerest apologies for the lack of updates to **BRAW Toolbox v2.0.0** - I hope to get a bug fix update out ASAP.

I've just submitted **Metaburner v1.2.2** to FxFactory and the Mac App Store with bug fixes and improvements. Hopefully it's out very soon!

**Keyframe Toolbox v1.0.0 (Build 30)** is now out on [TestFlight](https://discord.com/channels/1365861122720137276/1473245182387556363) and submitted to Mac App Store Review.

You can learn more on the [Keyframe Toolbox website](https://keyframetoolbox.fcp.cafe).

We hope to release ASAP - we're just waiting on Apple. Sadly, I think with the rise of "vibe coded" apps, and WWDC nearing closer, App Review is taking longer and longer these days.

**ScriptStar v1.5.0 (Build 22)** is also now available for testing on [TestFlight](https://testflight.apple.com/join/rBww3mHe).

This release includes local transcription with downloadable models! You'll find all the changes on the page where you can add `SRT`s and kick off the processing.

To create a **New Transcript** for any clip, whether it's been transcribed by Final Cut Pro already or not, just check the box for that clip in the **New Transcript** column, or click the **New Transcript** column header itself to check that box for all clips.

All transcriptions are local, private, free, and never leave your Mac.

Models include:

- **Parakeet v3** (fast, multiple European languages)
- **Whisper v3-large** (slow, but includes Asian languages like Chinese and Japanese)
- **Apple's SpeechTranscriber** model that's built in (fast, but not as accurate as the other models, and seemingly the model Final Cut Pro uses natively, with poor multi-language support).

You can choose the model to use in the **Options** panel, and the first time you transcribe, the model will download automatically, displaying a progress bar as it does so.

For the most accurate timing, don't use the built-in transcripts — just re-transcribe with Parakeet. It's fast, and the timing is more accurate than Final Cut Pro's own transcripts.

You shouldn't need to manage these models, but if you try Whisper and find it doesn't work for you, just hold `COMMAND+OPTION` as you choose that option to delete its files.

Once we get enough feedback that **ScriptStar v1.5.0** is stable and bug free, we'll release on the Mac App Store.

Feedback on all of the above is very welcome!

Thanks team!

---

**ATEM TO FCP v1.0** has launched on the Mac App Store.

Convert ATEM ISO projects into multicam-ready Final Cut Pro timelines.

Unlike our own [ATEM Exporter](https://atemexporter.fcp.cafe) this software only works with the **ATEM Mini Pro ISO**.

![](/static/atemtofcp.png)

> ATEM TO FCP is a professional macOS application designed to transform live recording sessions from ATEM Mini Pro ISO switchers into complete editorial timelines ready for post-production in Final Cut Pro.
>
> Developed for directors, editors, and content creators, the app automates the frame-accurate reconstruction of every cut, transition, and choice made during the live broadcast, removing the need for manual synchronization and ISO file management.
>
> ATEM TO FCP serves as the intelligent bridge between Blackmagic Design ATEM Mini Pro ISO and the Final Cut Pro editing environment, allowing you to start your creative edit moments after the recording ends.

You can download and learn more on the [ATEM TO FCP website](https://www.marcobucci.eu/atem-to-fcpxml.html).

---

**FCP Template Manager v1.5.0** is out now.

![](/static/fcp-template-manager-1-5.png)

Rob the developer writes:

> No major new features in this one, but...
> - You can now filter some things from the UI in Settings -> General to make it less cluttered.
> - You can exclude built-in and hidden templates from the UI.
> - If you click those little clapboard, eye, or lock icons next to the category, it will cycle a temporary filter for that category. For instance, if you have a yellow eye it means there are some hidden templates in that category. If you click the eye once, it will show you the hidden templates. Again, it will filter out the hidden templates. A third time will reset to normal.
> - If FCPTM could not detect your instance of FCP, you can set it manually in Settings. I forgot some of you like to rename things. Or have multiple things. So hopefully my thing fixes that thing.

![](/static/fcp-template-manager-launch.png)

You can download and learn more on the [FCP Template Manager website](https://robtoearth.com).

---

**Scene Cut Detector v1.0.3** is out now.

![](/static/scenecut-detector.png)

It includes the following improvement:

- Added Korean localization for App Store screenshots.

You can learn more and download from the [Mac App Store](https://apps.apple.com/app/scene-cut-detector/id6759056281).

---

**ScriptBlade v1.0.4** is now available on the Mac App Store.

![](/static/scriptblade-ui.png)

It includes the following improvements

**UI and Layout:**
- Improved input panel header
- Open File is moved to a sub toolbar and aligned with the Paper Edit header height
- Auto collapse input panel. The input pnale slides out after processing and can be toggled from the sidebar.
- Paper Edit header info. Displays segment count, kept, dropped, and selected duration over total percentage in a single line.
- Selection ratio bar. A 4 pixel blue bar under the sub toolbar shows the keep ratio in real time.
- Simplified bottom bar. Only the FCPXML button remains.
- Target Duration. Set target duration in sub toolbar. Supports seconds, `MM SS`, and `HMM SS` formats.
- Header color feedback. Grey for in progress, orange when near, green when on target, and red when over.

**Editing Enhancements:**
- Keyboard navigation. Use arrow keys to move between segments and press `SPACEBAR` to toggle Keep or Drop.
- Auto focus first segment. Start navigating immediately after processing.
- Click to focus sync. Continue keyboard navigation from the clicked segment.
- Undo and Redo. Use `COMMAND+Z` and `COMMAND+SHIFT+Z`.
- Keyword batch selection. Search and apply Keep or Drop to all matching segments.

**Project Management:**
- SB Project file support.
- Save SRT, Keep and Drop states, and settings.
- Unified file menu. Use `COMMAND+S` to save, `COMMAND+SHIFT+S` for Save As, and Open Project.

**Export:**
- Export via File menu. Use `COMMAND+E` to export `SRT` and `COMMAND+SHIFT+E` to export FCPXML.

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/scriptblade/id6758888024).

---

**Curves v1.0** is out now.

![](/static/curves.png)

Curves for Final Cut brings powerful animation tools right into the Final Cut Pro timeline.

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/curves-for-final-cut/id6760507188).

[!button text="Discuss this news item" variant="info"](news/20260325/#discuss-this-page)

---

!!!warning Sponsored
_Tight. Terse. Terrific. Bim. Bam. Boom._ – Cut/daily reader<br />
Post Production insight delivered to your inbox.<br />
Sign up for **free** at [Cut/daily.com](https://www.cut-daily.com)
!!!

---

### [21st March 2026](/news/20260321)

**Jumper v2026.03.19 (Build 3032)** has now been released for macOS and Windows.

It now basically gives you script-based editing in Final Cut Pro (and other NLEs)!

![](/static/jumper-speech.png)

You can read more about the Script Editor on the [Jumper Blog](https://getjumper.io/blog/script_editor).

This update includes the following changes:

**🥳 New Features:**
- **Script Inspector:** A new transcript viewer that lets you read, search, and navigate full transcripts with timeline integration.
- **Transcript Export:** You can now export transcripts directly from Jumper.

**🔨 Improvements:**
- macOS analysis speed improved by 25-30% for **Accurate** and **Most Accurate** visual search models.
- Visual search accuracy improved across all models.
- Context Picker performance optimized for large media libraries.
- License handling reworked to be more reliable across different NLE integrations.
- Final Cut Pro and DaVinci Resolve: Speech search results now navigate to the exact frame.

🐞 Bug Fixes
- Fixed a bug where 'Search by Frame' could fail for `BRAW` and `R3D` files.
- Fixed visual analysis incorrectly cropping BRAW files.
- Fixed text clipping in the "Add to timeline" behavior dropdown.
- Fixed media table layout offset on larger screens.
- Fixed button styling issues in the onboarding flow.
- Fixed the uninstaller on macOS.
- **Avid:** Fixed Shared MXF Metadata styling.

You can download and learn more on the [Jumper website](https://getjumper.io).

---

**FCPX AutoDuck v1.50.0 (Build 10513.628)** by Ulti.Media is out now!

![](/static/fcp-autoduck.png)

You can download and learn more on the [Ulti.Media website](https://ulti.media/fcp-autoduck/).

---

**FilmConvert Nitrate** and **CineMatch** now include dedicated profiles for the **DJI Osmo Action 6**, helping you build a consistent look when grading FX2 footage alongside other cameras.

You can learn more on the [FilmConvert website](https://www.filmconvert.com).

---

**CrumplePop 2026** is out now with the following new features:

- **Rebuilt SoundApp 2026:** New GPU-accelerated SoundApp features 3 AI stem separation models, on-the-fly processing to quickly find, preview, and isolate specific audio, and a redesigned user interface.
- **Demix Audio with SoundApp:** Do the unthinkable! Take a fully mixed audio file and separate it into editable and exportable elements.
- **Readjust & Extract Audio from Any Video:** Cinema 4 Stems lets you split any video or audio file into Voice, Music, Sound Effects, or Other. Readjust levels, export, or remove each aspect easily.
- **Split Music into 4 Instruments:** SoundApp's Music 4 Stems separates any music track into Vocals, Drums, Bass, and Other (Guitar, Synth & More) for adjustments or full exports.
- **Cleanly Separate Voice from Music:** Use Voice 2 Stems to pull voice from any music. Create instrumental or karaoke tracks, isolate vocals for sampling, or reduce background music.

You can learn more on the [BorisFX website](https://borisfx.com/news/crumplepop-2026-unmix-any-audio-with-ai/).

---

**Strada v2026.3.17** is out now.

Austin Case explains:

> Hey @everyone we launched Strada V99 (V100 is in the queue already!!! CRAZY!!!) with agent version 2026.3.17 🔥
>
> In this release we shipped a HUGE AND SUPER COOL feature... UPLOAD LINKS this is available to everyone for a limited time but will ultimately be moved to our unlimited plan at $24/month/user 🤯
>
> - On any folder that you have Edit or Admin permissions to you can create a public link for users to drop files into. The goal of this is so that users do NOT have to sign up, install an agent, just to give you a few files. This is limited to 2GB files and 10GB total... of course if you want to transfer more then that, you can always invite that user to the folder. They just have to go through the sign up and then they can transfer unlimited amounts!
> - Upload Link features
>  - Set a custom name for the link
>  - Optionally set a password for the link
>  - Optionally set an expiration for the link
>  - Send an email with a custom message right to people from within Strada
> - Link Library! On the left hand side of Strada is a new 'links' page! Here you can see ALL the links you have made or others have made on your agents. You can manage these links at anytime, changing their settings, copying the link, etc...
>
> This was a feature we started JUST two weeks ago. For many months the engineering team at Strada has been focused on building foundational elements and we can feel the momentum build where we get to build cool features like this in a super short amount of time at a high quality. Thank you to some of you who found the feature and have helped us work out some of the day 1 quirks. We have a few more releasing over the coming days!
>
> **Fixes:**
> - Everywhere in the app now displays the correct filesize / jobsize / etc... we were previously showing you the size in base 2 instead of base 10 🤓
> - Rotated Videos now rotate
> - Job gets stuck initializing even after refresh
>
> We now support playback of Blackmagic RAW (beta)!! This is very exciting because its the first demonstration of RAW in Strada. We are the first product that allows for instant remote playback of a RAW file regardless of bandwidth.
>
> This is a step towards the future. Where there is no more online/offline workflows. No duplication of media via proxies.
>
> The future filmmaker who is in 5th grade right now will not know how difficult digital file formats USED to be and how much it effected everything. How much you had to learn. Its like the future engineer who won't know what it was like to learn to code without AI.
>
> Notes/Limitations
> the source computer must be macOS but users can playback the files on any desktop or mobile platform
> no audio support (obviously not very common except for scratch tracks, but just noting)
>
> Anyways, we will keep adding more formats over time... but cheers 🍻  to the next step in building a future where you shoot and edit without worrying about what file a computer is on, what format it is, or even your internet bandwidth!!

You can download and learn more on the [Strada website](https://strada.tech).

[!button text="Discuss this news item" variant="info"](news/20260321/#discuss-this-page)

---

!!!warning Sponsored
Native Blackmagic RAW support in Final Cut Pro.<br />
[Download BRAW Toolbox](https://brawtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [18th March 2026](/news/20260318)

Now owned by Apple, MotionVFX has released a new YouTube video titled, **One Toolkit. Endless Creation — Enter the MotionVFX Universe**.

It's really great. You can watch on YouTube:

[![](/static/motionvfx-youtube.jpg)](https://www.youtube.com/watch?v=DssJ-YmXpHs)

There has also been some confusion with MotionVFX in terms of previously purchased assets no longer being available.

Back on **27th February 2026**, MotionVFX sent out a mass email titled, **Action required ⚠️ Download your products by March 12.**:

![](/static/motionvfx-final-days.png)

The link pointed to their [Product Archive page](https://www.motionvfx.com/product-archive), which is still active.

If you visit the [Product Archive page](https://www.motionvfx.com/product-archive) you can see all the products that are now **LEGACY** and no longer available for download.

If you log in, you'll be able to see all the products you previously owned, that are no longer available.

For example, there are many templates I own, that are now **LEGACY** and can't be download on both Mac:

![](/static/motionvfx-legacy-mac.png)

...and a couple on iPad (even though on iPad they still have a non-functional download button):

![](/static/motionvfx-ipad.png)

Basically, all these **LEGACY** products are now 100% gone from the Internet - and there's THOUSANDS of them **3616 products** to be exact.

If you haven't already downloaded them - you no longer have access to them.

Of course, not EVERYTHING is legacy - it's mostly old m02 models, older products, After Effects templates, etc.

Lots of people have asked me in the last 24 hours what I think will happen with MotionVFX, and this is what I've posted elsewhere on the Interwebs:

> Personally, I think it's VERY unlikely that Apple will basically give all MotionVFX content away for free with Creator Studio. Apple didn't come the richest company in the world by giving things away for free.
>
> My prediction... MotionVFX will remain a standalone company/brand - they'll continue to do Resolve & Adobe Motion Templates.
>
> All the current products will remain on a MotionVFX subscription BUT eventually Apple will also allow you to buy individual Motion Templates via an in-app store, directly in Final Cut Pro. This online store will also be available to third parties, so that the Dylan Bates for example, can sell his plugins directly in FCP, with Apple taking a 15-30% cut. They'll become the same as FxFactory.
>
> However, it's possible that all the FxPlug effects will be bundled in FCP for free in the next major FCP update.
>
> The MotionVFX team will make NEW templates, specifically for Final Cut Pro Creator Studio subscribers - these will be all new/modern Motion Templates. At some point this year, they'll release Motion Templates for iPad, and all of the free templates that come bundled will be created by the MotionVFX team. We already knew MotionVFX was working on iPad Motion Templates - Apple has said it coming "soon" for years now.
>
> I would predict that M03 will be included natively in Motion at some point.
>
> We'll see!

...and:

> Given the amount of subscription revenue MotionVFX generates, I just can't imagine Apple Shareholders being happy with Apple charging LESS than what MotionVFX was already charging.
>
> Apple has more money than God, so they could easily have just hired a bunch of incredible Motion Designers, just like Microsoft did with ClipChamp if they wanted to - and just released a whole bunch of Motion Templates themselves without having to buy MotionVFX.
>
> I think the benefit of Apple owning MotionVFX is they can use this as a "framework" for a new in-app App Store - and to be honest, I wouldn't be surprised if Blackmagic implemented this before the Final Cut Pro team (as has been the case with a LOT of things, such as Vision Pro Immersive editing). I think Apple would really like 15-30% of Blackmagic's Motion Templates sales on Mac - not just on iPad.
>
> Apple now have a HEAP of Final Cut Pro, Adobe Premiere Pro/After Effects AND DaVinci Resolve Motion Templates that they own and can sell. I think this is more an infrastructure move.
>
> Really though, I'm just guessing... I'm still kinda surprised Apple bought MotionVFX, and even more surprised this happened AFTER the launch of Apple Creator Studio.
>
> Also, given Apple now already owns and controls MotionVFX - if they were going to just bundle all the MotionVFX in Apple Creator Studio - why wouldn't they just do this at launch? Why just silently announce it on the website, kill lifetime/perpetual versions of all their Motion Templates, and update the terms and conditions? If they were going to do it, why not just do it at launch and create a positive PR story?
>
> Guess, time will tell.

Honestly... your guess is as good as mine. Certainly interesting times ahead!

---

**Hedge PostLab v26.1** is out now!

It includes the following changes:

**New & Improved:**
- Improved handling of syncing conflicts, with changes appearing only after a successful sync.
- `[PRO]` The app activity indicator now includes syncing activity for certified storage providers.
- `[PRO]` PostLab now checks if your certified storage provider is available.
- `[PRO]` PostLab now supports Maestral, the open-source Dropbox client.
- Opening Team Bundles and large documents is now noticeably faster.
- You can now set a status for a Collection.
- PostLab can now import a Logic Project folder.
- The app activity indicator has been redesigned with a fresh new look.
- The installer now includes an option to uninstall PostLab.

**Fixed:**
- When creating a Collection while working from Dropbox, a sync alert could incorrectly appear. This has been fixed. Thanks for the report, John!
- In some cases, when switching Team Bundles, a database error could occur. This is fixed.

You can download and learn more on the [PostLab website](https://hedge.co/products/postlab).

---

**Magic Captions v1.3** is out now on FxFactory.

You can download and learn more on [FxFactory](https://fxfactory.com/info/magiccaptions/).

[!button text="Discuss this news item" variant="info"](news/20260318/#discuss-this-page)

---

!!!warning Sponsored
Gyroscope Stabilisation in Final Cut Pro.<br />
[Download Gyroflow Toolbox](https://gyroflowtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [17th March 2026](/news/20260317)

**MotionVFX is becoming a part of Apple.** 🤯

This is something that has been rumoured/guessed for a while, but to be honest, after the Creative Studio release, I didn't think it would happen, as I would have ASSUMED if they were going to buy MotionVFX they would have done it for the Creative Studio launch.

Whilst I was pretty confident MotionVFX was looking to be sold for a LOT of money, I had my money on Adobe, Artlist, or MAYBE BorisFX - whilst it makes perfect sense for Apple to buy MotionVFX, I really didn't expect it to happen.

Apple has always been pretty careful buying out companies like this, as they don't want to appear as a monopoly, however with the current USA government, maybe that's no longer a concern.

I’ve been wrong the whole time on this topic, but my GUESS is that MAYBE at WWDC we’ll see in-app App Stores added, and Apple can populate the FCP App Store with MotionVFX stuff? I still think this is all related to FCP for iPad - they still need to release third party Motion Templates there, as currently the only way to do this is with [Transfer Toolbox](https://transfertoolbox.fcp.cafe).

MotionVFX was originally founded by **Szymon Masiak**, but later sold to investors:

> **MotionVFX Gains Momentum with New Management and Investors**
>
> Szymon Masiak from MotionVFX is stepping down from running the company, the new management will continue to push for the best quality MotionVFX is known for.
>
> Mid-December 2020, MotionVFX, a top vendor of FCP assets for video editors and content creators for over a decade, changed ownership. Szymon ‘Simon’ Masiak, the company’s founder and CEO, decided the time had come for him to step down from the daily operations and find a long-term partner to support the ambitious plans for MotionVFX.
> He chose Andrzej ‘Andrew’ Basiukiewicz and Wojciech ‘Voytec’ Korpal to come on board as the new co-CEOs. The duo brings along a group of over 20 international private and institutional investors to back the transaction and support the growth of MotionVFX. That group of investors, coming mainly from the USA, Germany, France, Poland and Spain, now holds a majority stake in the company, while Szymon remains the single largest individual investor.
>
> Andrzej and Wojciech, who are long-time university friends, bring to the table their vast experience gathered while working for large organizations in the UK, Poland and the Middle East. They had been preparing to run the company for a long time: they spent the last six months of 2020 learning the products, understanding the market, and working closely with Szymon to ensure a smooth transition.
> Even though Szymon stepped down as CEO, he remains involved in crucial aspects of the company’s activity. He joined the newly formed Board, together with two experienced representatives of the investor group: Blake Winchell and George Jankovic. Blake Winchell is a California-based entrepreneur, investor and acclaimed university lecturer with over 35 years of experience in private equity and venture capital. George Jankovic is an entrepreneur and investor from the USA who built and grew several businesses, most notably the publicly listed NutriSystem Inc., which he led as President & COO and expanded over tenfold.
>
> What does all this mean for MotionVFX? These changes mainly affect the daily operations and are aimed at general growth. Co-CEO Andrzej Basiukiewicz assures that the firm keeps its high pace and focus on the FCP market, but also has a vision of expanding their activity in many different fields. MotionVFX is building out all departments of its creative crew: software developers, motion designers and other specialists are sought. You can see the [current openings, both on-site and remote, on the company’s website.
> The recent developments at MotionVFX coincided with Apple’s transition to Silicon chips. “We are hard at work creating a fully native Apple Silicon experience for all of our products. Our developers have already converted over 150 products,” says co-CEO Wojciech Korpal. “We’re thrilled to take full advantage of the new hardware architecture and we have completely new exciting products planned for 2021 as well. We want to keep delivering the best possible plugins, templates and compositing elements to facilitate and enhance your work, whether you are editing your first video, working on content for social media channels, or delivering world-class projects for TV & cinema.”
> Lastly, we want to ensure you that the great MotionVFX creative team of Developers, Graphic Designers, Video Specialists, and the Support Crew stay onboard and unchanged.
>
> P.S. Szymon can be found on Instagram @leica_simon
>
> ![](/static/motionvfx-sold.png)

The MotionVFX website now says:

> This is our biggest edit yet...
>
> MotionVFX joins Apple!
>
> We are extremely excited to share that MotionVFX is joining the Apple team to continue to empower creators and editors to do their best work.
> For over 15 years, we’ve been on a mission to create world-class, visually inspiring content and effects for video editors. From the very beginning, we’ve been all about quality, ease of use, and great design. These are also the values that we admire most in Apple’s products, and we’re thrilled to be able to embrace them together.
> We’d like to take this opportunity to thank all our amazing customers and supporters who have been with us through all these years. You inspired us, you challenged us, and you helped our products become what they are today. We are incredibly grateful to be part of this amazing community and excited to continue our work to serve you.
> This is the beginning of something truly wonderful!

MacRumours [reports](https://www.macrumors.com/2026/03/16/apple-acquires-motionvfx/):

> MotionVFX's 70 employees today joined Apple as part of the acquisition. The company was already a worldwide partner of Apple.
>
> MotionVFX did not indicate whether its existing products will continue to be sold independently following the acquisition. For now, the company's plugin catalog remains available through its website and the MotionVFX marketplace.

MotionVFX has always been an incredibly loved part of the Final Cut Pro eco-system, however, recently the love has been tested, as MotionVFX pushes everyone towards subscription.

My PREDICTION is that MAYBE Apple will turn this around, and offer all their Motion Templates as single purchases in a Final Cut Pro in-app store.

It's also entirely possible that the FxPlug gurus at MotionVFX will now work alongside the ProApps team, and we might FINALLY see some big improvements to Apple Motion.

It's entirely possible they could take all their FxPlug Plugins like mFilmLook and mO2 and offer them for free in Final Cut Pro. Time will tell.

!!!warning Correction (17th March 2026 1130)
It doesn't look like MotionVFX has removed the [DaVinci Resolve](https://www.motionvfx.com/store/davinci-resolve) or [Adobe Premiere/After Effects](https://www.motionvfx.com/store/adobe-premiere-after-effects) for sale despite reports on Twitter. Apologies for any misreporting!
!!!

You can watch Patrick Stirling has posted on YouTube about this:

[![](/static/motionvfx-resolve.jpg)](https://www.youtube.com/watch?v=sh0-rla1oAo)

~~It looks like Apple has already removed all the DaVinci Resolve plugins from the website, and it sounds like the DaVinci Resolve team has already been let go:~~

![](/static/motionvfx-resolve.png)

However, it's definitely R.I.P for **mCredits** - they've been completely removed from the website, and remove from Apple's new Terms & Conditions. 🪦

Speaking of [Terms & Conditions](https://www.motionvfx.com/conditions-new) (you can find the [old ones here](https://www.motionvfx.com/conditions))...

**What stayed broadly the same:**
- Digital products, generally non-refundable
- Subscriptions auto-renew
- One-user license model
- One main device plus one extra owned device
- No resale, sharing, reverse engineering
- No stock/template/competitive-product use
- Termination on breach or subscription/trial end

**What changed the most:**
- Privacy/GDPR and cookie disclosures were stripped out
- Account-operation detail was removed
- Trial/subscription mechanics were simplified
- Support/update discontinuation rights became more explicit
- Liability cap was added
- License wording became shorter and broader
- Backup-copy and explicit client-use language disappeared
- New harmful/unlawful/infringing-use restriction was added

The most notable items from a user-risk perspective are the **new liability cap**, the **explicit right to discontinue products/support/updates**, and the **replacement of the detailed privacy notice with a brief reference to an Apple privacy URL**.

In other MotionVFX news, **mTracker 3D v2.1.6** is out now with an updated tracking engine! I wonder if it's using Apple's code?

Certainly interesting times ahead!

[!button text="Discuss this news item" variant="info"](news/20260317/#discuss-this-page)

---

!!!warning Sponsored
_Tight. Terse. Terrific. Bim. Bam. Boom._ – Cut/daily reader<br />
Post Production insight delivered to your inbox.<br />
Sign up for **free** at [Cut/daily.com](https://www.cut-daily.com)
!!!

---

### [16th March 2026](/news/20260316)

**FidelityFuze v2.7.0** is out now.

It includes the following changes:

- Temporal Upscaling has been rebuilt from the ground up as a true temporal upscaler, and the biggest leap FidelityFuze has taken since `v2.0`. Where previous versions blended neighboring frames together, this release decides for every pixel, every frame, whether history is worth trusting at all. Motion, color correspondence, and local scene context are evaluated independently, and a contribution is only accepted when all three agree. The result is temporal accumulation that behaves like judgment, not averaging. Detail that repeats across frames is reinforced. Detail that doesn't is left alone. Ghosting is suppressed at the source rather than managed after the fact.
- Temporal Upscaling now operates in perceptual color space, using the same human-vision-aligned algorithms introduced in `v2.6` for detail recovery. Frame-to-frame differences are measured the way your eyes would measure them, as a single perceptual distance, not as separate channel values. Blending decisions are more accurate, more stable, and less prone to false triggers. Static regions accumulate with more confidence. Motion boundaries hold cleanly without compromise.
- Because only detail that remains consistent across frames is accumulated, non-repeating signal such as sensor noise or grain does not build up over time, delivering effective temporal noise reduction that produces a cleaner and more stable image while preserving real structure.
- The licensing system has been rebuilt from the ground up. Activation is now handled entirely by the companion app, with no network calls or license validation taking place inside Final Cut Pro. The plugin receives what it needs at install time and works from there, no delays, no outbound connections, no interference with rendering. Incomplete installs are detected and recovered automatically.

You can download and learn more on the [FidelityFuze website](https://www.fidelityfuze.com).

[!button text="Discuss this news item" variant="info"](news/20260316/#discuss-this-page)

---

!!!warning Sponsored
Native Blackmagic RAW support in Final Cut Pro.<br />
[Download BRAW Toolbox](https://brawtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [15th March 2026](/news/20260315)

**ScriptStar v1.4.0 (Build 20)** is out now!

It includes the following improvements:

- We've improved the error messages for the Open Dialog's and Permission Dialog prompts. Thanks for your feedback FCP Cafe Discord team!
- We've improved the handling of comma-delimited decimals when using in `Point2D` in `FCPXML`. Thanks David Peterson for your genius!
- We now support both Compound Clips and Synchronised Clips (although we still strongly recommend using Multicam clips)! Thanks Bill (from Bill and Ben) and TechMixr!

You can learn more and download on the [ScriptStar website](https://scriptstar.fcp.cafe).

---

**Jonathan Harris** has finally done it! The first working open source **MediaExtension**! 🥳

**QuickLook Video v3.05** is out now!

> This app allows macOS Finder to display thumbnails/cover art, QuickLook previews, and metadata for most types of audio and video files.
>
> QuickLook, AVFoundation and Spotlight understand a limited number of media files - mostly only MPEG audio and video codecs within MPEG container files. This app adds support for wide range of other codecs and "non-native" media file types, including:
>
> **File formats:** Matroska (`.mka`, `.mkv`), WebM (`.webm`), Windows Media (`.wma`, `.wmv`), Ogg Video (`.ogm`, `.ogv`), AVI (partial support) (`.avi`), Flash Video (`.flv`, `.f4v`), Real Media (`.ra`, `.rm`, `.rv`), SMPTE (`.gxf`, `.mxf`)
> **Audio codecs:** Vorbis, Windows Media Audio, WavPak, ATRAC, etc.
> **Video codecs:** VP6, VP8, VP9, AV1, VVC/H.266, Dolby Vision, Theora, Sorenson 1 & 3, Cinepak, Flash, Real Video, Intel Indeo, etc.
>
> The app contains a Spotlight extension that adds support for non-native file formats, and two Media Extensions that add support to AVFoundation for non-native file formats and video codecs. (Long-time Mac users may remember Perian which performed a similar function with the QuickTime framework before QuickTime was replaced by AVFoundation).

Whilst it's still a work-in-progress, and there's some performance issues, this is an awesome step in the right direction!

I've been experimenting with MediaExtension's for years now for BRAW Toolbox, but have never gotten as far as Jonathan Harris has gone.

[Anton Marini](https://github.com/vade) was the first person playing in this space, with his [FFMPEGMediaExtension](https://github.com/Fabric-Project/FFMPEGMediaExtension), but it's still not currently ready for prime time.

Anton has also been helping me with BRAW Toolbox (he's a genius.

Congratulations Jonathan Harris - hopefully this is the start of more MediaExtension's hitting the Open Source world!

---

**Apple** to celebrate 50 years of thinking different!

> Apple today announced it will mark its 50th anniversary, celebrating five decades of thinking different and the innovations that have helped shape the way people connect, create, learn and experience the world.
>
> Since its founding on 1 April 1976, Apple has been driven by a belief that progress comes from those who challenge convention and imagine what could be. That spirit of thinking different has led to products and services that have transformed entire industries and enriched the lives of people around the globe. From groundbreaking products like Apple II and Macintosh, to iPod, iPhone, iPad, Apple Watch, Mac and Apple Vision Pro, and to services that users rely on every day, from the App Store to Apple Music, Apple Pay, iCloud and Apple TV, Apple has consistently combined powerful technology with intuitive design to empower individuals to do extraordinary things.
>
> While Apple is known for looking forward, this milestone offers a special moment to reflect on the journey that has brought the company here, to celebrate the people and communities who have thought different with us, and to honour the enduring values that continue to guide our work.
>
> To mark this occasion, CEO Tim Cook has [shared a letter on apple.com](https://www.apple.com/50-years-of-thinking-different/) reflecting on the company’s history and values, and celebrating people who have shaped Apple over the past 50 years.
>
> In the coming weeks, Apple and its global community will celebrate the company’s 50th anniversary, recognising the creativity, innovation and impact that people around the world have made possible with Apple technology.
>
> “Thinking different has always been at the heart of Apple,” said Tim Cook, Apple’s CEO. “It’s what has driven us to create products that empower people to express themselves, to connect and to create something wonderful. As we celebrate 50 years, we are deeply grateful to everyone who has been part of this journey and who continues to inspire what comes next.”
>
> From the beginning, Apple has believed that technology alone is not enough. It is the intersection of technology and the liberal arts, guided by a human touch, that makes its products meaningful. That belief continues to shape Apple’s work today, from advancing Apple Intelligence, to creating products and services designed with privacy at their core, built for accessibility and created with the planet in mind.
>
> As Apple celebrates this milestone, the company remains focused on the future and on continuing to think different in the years ahead. Apple will continue to innovate in groundbreaking silicon, life-enriching products, transformative software and services that improve people’s lives, while deepening its commitments to environmental responsibility, education and community impact around the world. Press Contacts

---

The amazing **Mat X** has written a great blog post titled, **Trust but Verify - Why I stopped worrying and built my own MHL verification apps**.

You can read more on his [blog](https://macvfx.blog/2026/03/13/trust-but-verify/).

---

Our good friends at **Corridor Digital** have got into the software development game, and it's impressive!

They've released a new website video on their **Corridor Crew** channel titled, **It Took Me 30 Years to Solve this VFX Problem**.

You can watch on [YouTube](https://www.youtube.com/watch?v=3Ploi723hg4):

[![](/static/fixed-green-screens.jpg)](https://www.youtube.com/watch?v=3Ploi723hg4)

You can join their [Discord Community too](https://discord.com/invite/bHPZvbhS4).

---

**Pro Zooms For Final Cut Pro v4.1.1** is out now!

You can learn more and download on **Dylan Bates** (aka The Final Cut Bro)'s [website](https://fcbplugins.com/b/prozooms).

---

**FilmConvert Nitrate** and **CineMatch** now include dedicated profiles for the **Sony FX2**, helping you build a consistent look when grading FX2 footage alongside other cameras.

You can learn more on the [FilmConvert website](https://www.filmconvert.com).

---

MacRumors reports, **New Apple Studio Displays Double Internal Storage to 128GB**. Fun!

You can read more on the [MacRumors website](https://www.macrumors.com/2026/03/11/studio-display-internal-storage-128gb/).

---

Episode 442 of **The Talk Show** is out now, and talks about Apple Creator Studio.

> Jason Snell returns to the show to discuss the 2025 Six Colors Apple Report Card, MacOS 26 Tahoe, Apple Creator Studio, along with what we expect/hope for in next week’s Apple product announcements.

If you don't have time to listen, you can [read a transcript](https://podsearch.david-smith.org/episodes/7915).

You can download and learn more on the [Daring Fireball website](https://daringfireball.net/thetalkshow/2026/02/28/ep-442).

---

**Richard Taylor** had another one of his weekly live streams titled, **What to Expect for Final Cut Pro for 2026?**

You can watch on [YouTube](https://www.youtube.com/live/VcixaDbiWoA):

[![](/static/fcp-radio-march-2026.jpg)](https://www.youtube.com/live/VcixaDbiWoA)

---

The handsome and talented **Tyler Stalman** has released a new video titled, **MacBook Neo: Can It Handle Pro Apps?**.

You can watch on [YouTube](https://www.youtube.com/watch?v=d-VOt9559Gk):

[![](/static/macbook-neo-youtube.jpg)](https://www.youtube.com/watch?v=d-VOt9559Gk)

---

**Bowdler v1.1.0** is out now.

It includes the following changes:

**Subtitles**
- FCPXML Style editor - customize font, size, position, face color/opacity, and outline directly from the app with a live preview

**Silence Removal**
- Delete Click Sound - removes the audible click that appears at cut points when background music is present
- FCP Autocut - exports an FCPXML where the video is already cut and trimmed

**Censorship**
- FCP Autocut - exports an FCPXML where the video is already cut and trimmed

**General**
- Better timeline zoom - smooth pinch/scroll zoom centered on cursor position
- AAC Support - process AAC audio files natively
- Export quality & speed improvements - faster processing with better output quality
- Better Export flow - stay on the current screen after export, see results inline, and jump back with one click
- UI Improvements - gray area settings when editing, other improvements

You can learn more and download on [GitHub](https://github.com/whyaang/Bowdler/releases/tag/v1.1.0).

---

**The VFX Campus** is closing.

As a thank you to their community, every course they've ever created is now available at no cost — no account, no payment required.

Stream all videos on Vimeo and download the complete class files below while access lasts.

You can download and learn more on [The VFX Campus website](https://thevfxschool.com).

[!button text="Discuss this news item" variant="info"](news/20260315/#discuss-this-page)

---

!!!warning Sponsored
Gyroscope Stabilisation in Final Cut Pro.<br />
[Download Gyroflow Toolbox](https://gyroflowtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [9th March 2026](/news/20260309)

Since the announcement of the **MacBook Neo**, a lot of people have asked me if this laptop is suitable for Final Cut Pro?

The answer is... hell yes.

A lot of people are incorrectly saying that the A18 Pro chip is not "good enough", or that there's not enough RAM.

That's honestly just bullshit.

The MacBook Neo comes with:

> **Apple A18 Pro chip**
> - 6‑core CPU with 2 performance cores and 4 efficiency cores
> - 5‑core GPU
> - Hardware-accelerated ray tracing
> - 16-core Neural Engine
> - 60GB/s memory bandwidth
>
> **Media Engine**
> - Hardware-accelerated H.264, HEVC, ProRes, and ProRes RAW
> - Video decode engine
> - Video encode engine
> - ProRes encode and decode engine
> - AV1 decode

When it comes to playing back H.264, HEVC, ProRes and ProRes RAW - it doesn't really even need to put ANY load on the CPU/GPU - this is all decoded on-device.

It might only have **8GB unified memory**, but it has a super fast **256GB or 512GB SSD**, so once the system uses 8GB of RAM, it will just move "old memory" off to the SSD.

As long as you keep your 256/512GB internal drive relatively clean, and store all your non-Applications stuff on an external SSD or Network Drive - this thing will FLY.

If you think Final Cut Pro on iPad is snappy - Final Cut Pro on MacBook Neo will be AWESOME.

People love to complain... but I think the MacBook Neo will be the ultimate low-cost Final Cut Pro editing machine, and I'd still use this over the most expensive Windows machine running Resolve or Premiere.

My 2c.

---

**Dylan Bates (The Final Cut Bro)** has released a new video titled, **I can't believe this app is FREE for Final Cut Pro**.

[![](/static/fcp-template-manager-youtube.jpg)](https://www.youtube.com/watch?v=F6AK5LO1eiY)

---

**Keyframe Toolbox v1.0.0 (Build 23)** is now available for testing on TestFlight.

We'd still LOVE your ideas, thoughts, comments and suggestions!

You can learn more on the [Keyframe Toolbox website](https://keyframetoolbox.fcp.cafe).

---

**Jumper v2026.03.07 (Build 2984)** is out now.

It includes the following changes:

**🥳 New Features:**
- You can now reveal media files directly in Finder on macOS or File Explorer on Windows from the media list.
- Avid: You can now save Scan MXF Metadata results to a shared location so multiple machines can reuse them.

**🔨 Improvements:**
- The Settings view has been redesigned to make common options easier to find.
- Media list interactions are much faster, especially when selecting large numbers of files.
- If a speech download is missing, you now also see this in Watch Folders. Thanks for reporting Simon Cull!
- Large file and selection counts are easier to read at a glance.
- Windows file picking is faster when browsing large network drives.
- Speech analysis is more reliable with a wider range of audio files. Thanks for reporting Jim Young!
- Shared analysis folders work more reliably when multiple people use the same storage.
- DaVinci Resolve works better with media on mapped network drives. Thanks for reporting Claudio Domenicali!

**🐞 Bug Fixes:**

- Fixed Final Cut Pro 11 Free Trial support. Thanks for reporting Charles Teton!
- Fixed media list checkbox layout issues in Standard Jumper. Thanks for reporting Max_B!
- Fixed dialog and popover issues on older Avid versions.
- Fixed cases where speech analysis could mishandle missing or silent files. Thanks for reporting Samuel Bignell!
- Fixed some issues that could cause thumbnails or problematic media files to fail unexpectedly.

You can download and learn more on the [Jumper website](https://getjumper.io/?ref=fcpcafe).

---

**Scene Cut Detector v1.0.2** is out now.

It has the following improvements:

- Improved Scene Detection Accuracy
- Hard cuts are now detected more reliably, including in fast-paced content like show reels and action sequences
- Fixed cases where obvious cuts were occasionally missed due to the adaptive threshold being set too conservatively
- The detector now combines a global threshold with a local adaptive one, so cuts only need to clear one of the two to be flagged

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/scene-cut-detector/id6759056281).

---

**fontAudition-X v1.1.0** is out now.

It includes the following improvement:

- Code optimized to handle thousands of fonts.
- Bug fixes.

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/fontaudition-x/id1554676357)

---

There's a new kid on the block... Introducing [Focus](https://use-focus.com).

> The editor's shortcut from footage to delivery.
> Search by meaning, assemble sequences, and export to Premiere, Resolve, or Final Cut.

Sadly however, the Final Cut Pro integration is currently a bit broken and buggy, but we'll keep our eye on this.

---

**MotionVFX** have updated a bunch of their applications:

- **mCallouts Simple v3.0.4** - Minor bug fixes
- **mMessage v3.0.4** - Minor bug fixes
- **mCallouts Simple 2 v3.0.4** - Minor bug fixes
- **mPointer v3.0.4** - Minor bug fixes
- **mFlare 2 v3.1.11** - Minor bug fixes
- **mPuppet v2.1.5** - Fixed alpha blending issues, improved stability and major crash fixes
- **mMessage 2 v3.0.4** - Minor bug fixes
- **mHUD 2 v3.0.4** - Minor bug fixes
- **mHUD 3 v3.0.4** - Minor bug fixes

You can learn more on the [MotionVFX website](https://www.motionvfx.com).

[!button text="Discuss this news item" variant="info"](news/20260309/#discuss-this-page)

---

!!!warning Sponsored
_Tight. Terse. Terrific. Bim. Bam. Boom._ – Cut/daily reader<br />
Post Production insight delivered to your inbox.<br />
Sign up for **free** at [Cut/daily.com](https://www.cut-daily.com)
!!!

---

### [5th March 2026](/news/20260305)

It's beta day, and we need your help!

**SyncScript Pro v1.0.0 (Build 6)** is out now on **TestFlight**, and we'd LOVE your feedback!

**SyncScript Pro** allows you to synchronise script lines with transcribed Captions and generate Keywords on Browser clips for script lines.

![](../static/syncscript-pro-01.png)

![](../static/syncscript-pro-02.png)

You can learn more and download on the [SyncScript Pro website](https://syncscriptpro.fcp.cafe/).

---

**Keyframe Toolbox v1.0.0 (Build 19)** is out now on **TestFlight**, and we'd LOVE your feedback!

**Keyframe Toolbox** brings advanced keyframes to Final Cut Pro.

![](/static/keyframe-toolbox-01.png)

You can learn more and download on the [Keyframe Toolbox website](https://keyframetoolbox.fcp.cafe).

---

**SpeedScriber v3.0.5** is out now.

It includes the following changes:

- Logging out now works correctly when no file has been opened.
- Minor cosmetic fixes.

You can learn more and download from the [Mac App Store](https://apps.apple.com/au/app/speedscriber/id1101502006).

[!button text="Discuss this news item" variant="info"](news/20260305/#discuss-this-page)

---

!!!warning Sponsored
Native Blackmagic RAW support in Final Cut Pro.<br />
[Download BRAW Toolbox](https://brawtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [4th March 2026](/news/20260304)

Mark Spencer at **Ripple Training** has done an awesome new video on **ScriptStar**!

You can watch on [YouTube](https://www.youtube.com/watch?v=JZS6NxQ3V7o):

[![](/static/scriptstar-ripple-training.jpg)](https://www.youtube.com/watch?v=JZS6NxQ3V7o)

Thanks Mark!

---

**FCP Template Manager v1.4.4 (Build 222)** is out now.

The lead developer Rob explains...

> FCP Template Manager 1.4 Brings Free Professional Template Organization to Final Cut Pro Editors.
>
> New and completely free macOS app tackles the chaos of thousands of Titles, Effects, Transitions, and Generators with a dedicated browser, favorites management, drag-and-drop installer, and library and project repair tools.
>
> FCP Template Manager, a dedicated macOS application for organizing and managing Final Cut Pro Motion templates launched version 1.4 today — a major milestone that adds the ability to relink missing templates in libraries and projects, as well as create template profiles.
>
> Final Cut Pro editors working with large template libraries have long had to manage templates by hand, digging through Finder to install, remove, create favorites, or locate templates used in old projects. FCP Template Manager replaces that workflow with a dedicated browser purpose-built for the job.
>
> **Browse, Search, and Organize Every Template in One Window:**
>
> FCP Template Manager indexes all Motion templates installed on the system — Titles, Effects, Generators, and Transitions — and presents them in a three-column browser alongside built-in FCP templates. Templates can be renamed, tagged, themed, and opened directly in Motion. A full-text search narrows results instantly across names, tags, and categories.
>
> ![](/static/fcptm-main-view.png)
>
> **Favorites, Archives, Hiding, and Template Profiles:**
>
> Three organizing tools give editors non-destructive control over what appears in the FCP browser:
>
> - **Favorites** copy frequently used templates to quick-access folders, with CRC-based relationship tracking that follows the copy back to its source.
> - **Archive** safely moves templates aside without deleting them. Archived templates disappear from FCP's browser but remain on disk, restorable at any time.
> - **Hide** templates from FCP's browser but the files remain in place, without breaking any timelines.
> - **Template Profiles** take organization further, letting editors create named sets of templates. When a profile is active, only its member templates appear in the FCP browser — ideal for switching between client projects or template collections without moving a single file.
>
> ![](/static/fcptm-profile-active-split.png)
>
> **The Installifier - Drag-and-Drop Template Packs:**
>
> Installing a third-party template pack used to mean unzipping a folder, reading a README, and manually copying files to the right spot in `~/Movies/Motion Templates`. FCP Template Manager eliminates that process entirely.
>
> The Installifier accepts folders or ZIP files dropped directly into the sidebar. The app deep-scans the contents, infers the correct FCP folder structure (Titles, Effects, Generators, Transitions), and shows a preview of what will be installed. Templates can be installed individually, by category, by type, or all at once — with live install-status badges showing what's already in place. You can also rename or reorganize whatever you want *before* you install.
>
> **Usage Tracking: Know Which Templates Are Actually in Use:**
>
> FCP Template Manager scans Final Cut Pro libraries and project files to build a live usage index. Each template row shows which libraries and projects reference it. A project heat map highlights the most frequently used templates across all scanned projects — making it easy to know what's safe to archive and what should stay put.
>
> **Library and Project Repair:**
>
> When a template is moved, renamed, or archived, Final Cut Pro libraries and exported FCPXML project files can lose track of it. FCP Template Manager includes dedicated repair wizards for both:
>
> The **Library Repair** wizard identifies missing template references in libraries, automatically matches replacements using CRC fingerprints and display-name lookups, and exports a repaired copy of the library. The **Project Repair** wizard does the same for exported FCPXML and FCPXMLD project files. Neither workflow modifies the original file.
>
> When a rename or move action is performed, the app warns which libraries and projects are affected and offers to repair them in the same step.
>
> ![](/static/fcptm-library-repair.png)
>
> **Additional Features:**
>
> - **Preview Generation** — Generate video previews and PNG thumbnails for templates using Apple Compressor, with concurrent rendering and real-time progress.
> - **Misplaced Template Detection** — Scans for templates stored in the wrong type folder (e.g., a Generator file inside Titles) and provides a guided fix workflow.
>
> **Requirements:**
>
> FCP Template Manager requires macOS `v14.6` or later and Final Cut Pro. Apple Compressor for video/thumbnail generation. Apple Motion to edit templates.

I'm hoping to (force/bully) Rob to do a full developer case study in the coming weeks! Stay tuned.

You can download and learn more on the [FCP Template Manager website](https://robtoearth.com).

[!button text="Discuss this news item" variant="info"](news/20260304/#discuss-this-page)

---

!!!warning Sponsored
Gyroscope Stabilisation in Final Cut Pro.<br />
[Download Gyroflow Toolbox](https://gyroflowtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [3rd March 2026](/news/20260303)

Scott Simmons has written a great article over at ProVideo Coalition titled, **Useful Tools for Editors: Where Ya Been? Edition**.

You can read it on [ProVideo Coalition](https://www.provideocoalition.com/useful-tools-for-editors-where-ya-been-edition/).

---

**LUT Robot v1.1.0** is out now!

Automatically apply Camera LUTs with matching filenames.

When working on big long-form projects, such as feature films and television shows, DITs on-set create unique Camera LUTs for each shot.

For example, the production might be shooting on an ARRI Alexa and when they hand over the rushes, they also hand over LUTs for each camera file.

LUT Robot automatically applies Camera LUTs with matching filenames, saving hours of work for Assistant Editors, who until now, had to manually set the Camera LUT for each clip.

You can select a specific sub-folder within your Camera LUTs folder to scan.

This is a simple niche app, that saves high-end professional assistant editors using Final Cut Pro hours of time.

This release includes support for `FCPXML v1.14` and **Final Cut Pro v12**.

You can learn more and download on the [LUT Robot website](https://lutrobot.fcp.cafe).

[!button text="Discuss this news item" variant="info"](news/20260303/#discuss-this-page)

---

!!!warning Sponsored
_Tight. Terse. Terrific. Bim. Bam. Boom._ – Cut/daily reader<br />
Post Production insight delivered to your inbox.<br />
Sign up for **free** at [Cut/daily.com](https://www.cut-daily.com)
!!!

---

### [2nd March 2026](/news/20260302)

It's March 2026, and the world has changed... dramatically.

Every man, woman and dog is now creating their own tools and software using LLMs like Codex and Claude Code.

Every filmmaker and post production nerd is now becoming a developer.

When I first started working on BRAW Toolbox a few years ago, there was ZERO information about FxPlug online, and very few who knew anything about it.

Now in this new world, the most traffic to hit FCP Cafe is LLMs reading information about FxPlug and Workflow Extensions.

Crazy times indeed. So over the coming weeks and months, I expect to see a LOT more Final Cut Pro tools hit the market, both from myself, and many, many others.

LLMs like Codex and Claude Code have changed the game DRAMATICALLY. You can now EASILY build whatever you imagine.

This will be absolutely awesome for creative filmmakers who have a very clear vision of what they want.

This will be absolutely devastating from indie developers who previously made all their income from Final Cut Pro applications.

Please, please, please, continue to support those Final Cut Pro developers who have been with us since the beginning, such as [Intelligent Assistance](https://www.intelligentassistance.com), [CoreMelt](https://coremelt.com), [FxFactory](https://fxfactory.com), [Ripple Training](https://www.rippletraining.com/product-category/plugins/), [Digital Anarchy](https://digitalanarchy.com/), etc.

Because once we start loosing all the old guards... it'll be way worse for everyone.

---

**gAnalyzer v1.1 (Build 22)** is out now for **USD$9.99**.

The website explains:

> Instant plugin intelligence for Final Cut Pro. Identify any effect, find missing plugins, and see vendor, category, and file path — without leaving the timeline.

It's a Final Cut Pro Workflow Extension.

![](/static/ganalyzer-v1-1.png)

You can download and learn more on the [gAnalyzer website](https://www.gphyx.com/#products).

---

**pravMotion v1.1.0** is out now for free on GitHub.

It's a free and open-source FxPlug4 effect.

You can download and learn more on [GitHub](https://github.com/pravbk100/pravMotion).

---

**ISD Caption Converter** is out now for free online.

> Say goodbye to boring, outdated captions! 🛑 Elevate your workflow with ISD Caption Converter.\
> Tired of blank white captions? Convert them to fully customisable FCP captions in seconds! 🚀\
> ✨ You'll love it because:\
>  • Load up to 8 caption styles simultaneously.\
>  • Batch editing: Change styles for multiple lines in one click.\
>  • Smart break tool: Automatically calculates timing when breaking long captions.\
>  • Error-free: Creates a clean XML file for FCP.\
>  🔥 Exclusive to Final Cut Pro | 100% Free Forever!\
> \
> See the workflow [here](https://sites.google.com/view/isdcreate) 📥
> \
> (If this saves you hours of editing time, please consider buying me a coffee! ☕️)

You can learn more on the [ISD Caption Converter website](https://sites.google.com/view/isdcreate).

---

**ScriptBlade v1.0.2** is now available on the Mac App Store.

![](/static/scriptblade.png)

The Mac App Store reads:

> SRT-based paper editing for Final Cut Pro - now with Multitrack FCPXML support for Multicam, Sync Clip, and Compound Clips.
>
> ScriptBlade turns your SRT into a rough cut timeline for Final Cut Pro — without touching a single clip manually.
>
> Select the lines you want to keep, hide the rest, and export a trimmed FCPXML. Final Cut Pro opens it as a pre-cut timeline, ready to refine.
>
> **What You Can Do:**
>  - Build a paper edit from any SRT file
>  - Select, deselect, and hide unwanted sections
>  - Multi-select with & / Shift — or use Select All / Deselect All
>  - Export FCPXML and import directly into Final Cut Pro
>  - Supports Multicam, Sync Clip, and Compound Clip timelines •
>  - Import .fcpxmld packages exported from Final Cut Pro
>  - 100% offline — all processing happens locally on your Mac.
>  - Nothing is uploaded or sent to any server.
>
> **How It Works:**
>  - Prepare an SRT file (generated with any external transcription tool)
>  - Select only the sections you want to keep
>  - Export → link your original FCPXML → generate → import into Final Cut Pro
>
> **Best For:**
> - Interviews (including multi-camera setups), documentaries, lectures — any long-form content where you need to find the moments that matter.
>
> **Note:**
> ScriptBlade does not include transcription. You'll need an SRT file created with an external tool. Source media must already be available in your Final Cut Pro library for the exported timeline to link correctly.
> All operations are performed locally. No files, media, or script content are ever uploaded.
>
> **FAQ:**
>  - The clips are offline after import. Why?
>    The FCPXML references your original source media. Make sure the same files exist in your FCP library.
>    Use Final Cut Pro's Relink tool if needed.
>  - Does it transcribe audio or video?
>    No - transcription is not included. ScriptBlade works with existing SRT files only.

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/scriptblade/id6758888024).

[!button text="Discuss this news item" variant="info"](news/20260302/#discuss-this-page)

---

!!!warning Sponsored
Native Blackmagic RAW support in Final Cut Pro.<br />
[Download BRAW Toolbox](https://brawtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

## February

### [28th February 2026](/news/20260228)

Apple has brought back their **Final Cut Pro ecosystem** content to their [support page](https://support.apple.com/en-us/125519).

This website has some great links to all the 3rd party Final Cut Pro tools, and includes links to FCP Cafe! 🥳

---

**gAnalyzer v1.0 (Build 21)** is out now for **USD$9.99**.

The website explains:

> Instant plugin intelligence for Final Cut Pro. Identify any effect, find missing plugins, and see vendor, category, and file path — without leaving the timeline.

It's a Final Cut Pro Workflow Extension.

You can download and learn more on the [gAnalyzer website](https://www.gphyx.com/#products).

[!button text="Discuss this news item" variant="info"](news/20260228/#discuss-this-page)

---

!!!warning Sponsored
Gyroscope Stabilisation in Final Cut Pro.<br />
[Download Gyroflow Toolbox](https://gyroflowtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [27th February 2026](/news/20260227)

**ScriptStar v1.3.3** is out now! 🥳

Yes, we jumped from `v1.1.0` to `v1.3.3` very quickly, haha. Thanks to all our awesome TestFlight testers! 🥰

This is a BIG update.

**🔨 Improvements:**
- It’s now possible to drag a **Library** or **one or more Events** to ScriptStar. If an Event is dragged, the Library location must be chosen in a following step. This allows users to save processing time in large libraries, and also to avoid `FCPXML` issues related to processing some kinds of clips in other Events.
- This release also adds a **Show Options** button to the page where `SRT`'s can optionally be added. Press this button to choose the conversion mode - **Named Favorites**, **Named Favorites on current Favorite ranges only** or **Notes on Keywords**. Please refer to the online [How to Use](/how-to-use/) page for more information on these modes. Thanks for suggesting Jeff Roy!
- All transcription formats (`CSV`, Word, `PDF`) can now be exported at once with a new button below the individual format choices.  Thanks for suggesting Richard Taylor!

**🐞 Bug Fixes:**
- A bug related to handling of clips at `47.95fps` was fixed in [FCPXMLKit](https://fcp.cafe/latenite/#fcpxmlkit). Thanks for reporting FernKraft!
- A bug related to handling of Point 2D data in FCPXML was fixed in [FCPXMLKit](https://fcp.cafe/latenite/#fcpxmlkit). Thanks for reporting Fernando Gorrotxategi Ugarte!

You can learn more and download on the [ScriptStar website](https://scriptstar.fcp.cafe).

---

**Keyframe Toolbox** is out now for public beta!

We would LOVE your ideas and feedback!

![](/static/keyframe-toolbox.png)

You can learn more on the [Keyframe Toolbox website](https://keyframetoolbox.fcp.cafe).

---

**Scene Cut Detector v1.0.1 (Build 3)** is out now.

It includes the following improvement:

- Added `FCPXML` version selection: Choose the `FCPXML` version on export for better compatibility with older versions of Final Cut Pro.

You can learn more and download from the [Mac App Store](https://apps.apple.com/app/scene-cut-detector/id6759056281).

[!button text="Discuss this news item" variant="info"](news/20260227/#discuss-this-page)

---

!!!warning Sponsored
_Tight. Terse. Terrific. Bim. Bam. Boom._ – Cut/daily reader<br />
Post Production insight delivered to your inbox.<br />
Sign up for **free** at [Cut/daily.com](https://www.cut-daily.com)
!!!

---

### [26th February 2026](/news/20260226)

**Jumper v2026.02.25** has been released for macOS and Windows - and it's a pretty big one! 🥳

Also, the amazing [Iain Anderson](https://iain-anderson.com) has just released an article title **Visual search tools compared** on [ProVideo Coalition](https://www.provideocoalition.com/visual-search-tools-compared/).

Iain did some very detailed testing:

![](/static/data-1.jpg)

![](/static/data-2.jpg)

![](/static/data-3.jpg)

...and concludes:

> Overall, as you can see from the chart above, Jumper gave me the most consistently good results. Premiere came second, but has a few UI niggles that make its results harder to use. Final Cut Pro and Peakto can definitely find clips on most of the searches I tried, but they fell short more than I’d like.

Make sure you read the full article on [ProVideo Coalition](https://www.provideocoalition.com/visual-search-tools-compared/) as it's a great read.

If you need the very best visual search directly in your video editing software, or as a desktop application - you can't go past Jumper!

The latest **Jumper v2026.02.25** release includes:

**New Features:**
- AI Agent support: Jumper can now be controlled by AI assistants like Claude or Codex. You can read more in the [documentation](https://docs.getjumper.io/core-concepts/agentic-editing).
- Added a new more accurate and faster speech model for English. Does frame-accurate transcription of a 2h+ podcast in 1.5 minutes.
- Public API: Added a local Public API for third-party integrations. You can read more in the [API reference](https://docs.getjumper.io/api-reference).
- Global speech searches. Like you could already do for visual searches, you can now use speech searches across all analysed media, not just the media in your current project.
- Added `CSV` export for search results in Standalone mode.
- Adobe Premiere Pro v26 support.
- Added drag-and-drop support in macOS and Windows for adding media in the standalone app.
- Added a splash screen when starting Jumper on Windows.

**Improvements:**
- Media Panel checkboxes are disabled while analysis is running to prevent accidental selection changes.
- Added pagination to improve load times in the People Panel for large collections. Thanks, recfocus and Claudio Domenicali!
- Added duplicate name checks when creating face collections.
- Premiere Pro UI: Fixed issues with dialog windows being off.

**Bug Fixes:**
- Searches no longer fail silently when cache files are deleted or moved. Thanks for reporting Youssef Toufik!
- Fixed drop-frame timecode issues that caused incorrect results or errors in speech/transcript searches.
- Fixed an issue where naming face clusters could fail or produce mismatched results. Thanks, Claudio Domenicali!

You can learn more and download a free trial of Jumper on the [Jumper website](https://getjumper.io/?ref=fcpcafe).

---

**Pro Zooms For Final Cut Pro v4.0.1** is out now!

It's currently on sale for **US$36.00** (25% off).

You can learn more and download on Dylan Bates (aka The Final Cut Bro)'s [website](https://fcbplugins.com/b/prozooms).

[!button text="Discuss this news item" variant="info"](news/20260226/#discuss-this-page)

---

!!!warning Sponsored
Native Blackmagic RAW support in Final Cut Pro.<br />
[Download BRAW Toolbox](https://brawtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [25th February 2026](/news/20260225)

**Neat Video v6.1** is out now for Final Cut Pro users!

It includes the following improvements:

- Added support for Final Cut Pro 12 and Motion 6
- New controls to make it easier to set up and use a fixed noise profile and filter preset when working with a series of clips that have the same noise (in order to speed up the overall setup process for multiple instances of the noise reduction effect)
    - Controls to set the Default Noise Profile using the current noise profile
        - New button with popup menu in Device Noise Profile panel
        - New commands in the main menu under Profile
    - Controls to set the Default Filter Preset using the current filter settings
        - New button with popup menu in Filter Settings panel
        - New commands in the main menu under Filter
- New Reset button in the Device Noise Profile panel and command in the main menu under Profile to reset the current noise profile
- New Reset button with popup menu in the Preferences dialog to reset settings in the current page, in all pages, and to re-enable all optional messages and dialogs
- Improved representation of the names of the current noise profile and current filter preset when defaults are used
- Several performance optimizations for GPU processing on Apple Silicon hardware of M3 and newer series
- The Input Data Gain section in Preferences is disabled when Default Noise Profile is used (since the actually applied gain is determined by Default Noise Profile in this case)
- Fixed several minor issues

You can download and learn more on the [Neat Video website](https://www.neatvideo.com/features/version-history/nv6fc?os-tab=mac#mac_6_1_0).

---

**Marker to Reminder v1.4.1** is out now.

It now includes an **optional** subscription via in-app purchase of **USD$14.99/year** to support development.

You can download and learn more on the [Mac App Store](https://apps.apple.com/app/marker-to-reminder/id6757208568).

[!button text="Discuss this news item" variant="info"](news/20260225/#discuss-this-page)

---

!!!warning Sponsored
Gyroscope Stabilisation in Final Cut Pro.<br />
[Download Gyroflow Toolbox](https://gyroflowtoolbox.fcp.cafe) today from the Mac App Store.
!!!

---

### [20th February 2026](/news/20260220)

**ScriptStar v1.0.3** is now [available for purchase on the Mac App Store](https://apps.apple.com/app/scriptstar/id6759045715) for **USD$9.99**! 🥳

![](/static/scriptstar-01.png)

**ScriptStar** brings text-based editing to Final Cut Pro.

It was created by the amazing [Iain Anderson](https://iain-anderson.com).

This product uses LateNite's [FCPXMLKit](/latenite/#fcpxmlkit) for FCPXML processing, created by [David Peterson](https://github.com/randomeizer/).

The **ScriptStar** icon was designed by the amazing [Matthew Skiles](http://matthewskiles.com).

You can watch the intro video on Vimeo:

[![](/static/scriptstar-vimeo.png)](https://scriptstar.fcp.cafe/#intro-video)

It converts Final Cut Pro’s built-in transcripts into named favourite ranges on the same browser clips. This lets you see exactly what was said, instantly select it, and add it to your timeline.

To start, import your clips into a Final Cut Pro library as usual, and organize them into events if you like.

By default in **Final Cut Pro v12** (lifetime/perpetual) and **Final Cut Pro Creator Studio v12** (subscription), **Transcribe in English** is enabled by default.

![](/static/fcp-preferences.png)

ScriptStar uses this transcription data. However, if you didn't transcribe your clips on import (which will be the case if your library was created before FCP 12) then you can transcribe them now. Select one or many clips, right-click, choose Analyze and Fix, and check Transcribe in English in the dialog that appears.

However, If you'd prefer to use your own transcripts, which is necessary for non-English captions, you can provide an `SRT` file that will be used in place of the built-in transcripts.

With clips transcribed, you can now launch ScriptStar from either your `/Applications` folder, or via the Final Cut Pro Workflow Extensions button in the toolbar and menubar.

![](/static/scriptstar-extension-smaller.png)

Once launched, simply drag your **Final Cut Pro Library** from the Final Cut Pro Browser interface into the drop zone in ScriptStar to get started.

Due to sandbox requirements, if this is the first time you have worked with this Library, you will also have to give permission to access it.

To confirm, you need to drag the Final Cut Pro Library from the Final Cut Pro interface, and **NOT** Finder.

![](/static/scriptstar-01.png)

Choose the events you want to process, then press **Continue**.

![](/static/scriptstar-02.png)

At this point you can replace any of the built-in transcripts by dragging in `SRT` files that match the names of any of your existing clips.

This is great for foreign languages, if you’ve had clips transcribed or edited by humans, or if Final Cut Pro’s transcript hasn’t worked or has poor results.

![](/static/scriptstar-04.png)

Press **Continue** to send the named favorites back to Final Cut Pro.

They'll appear in new events with a star at the end of the name.

Before you leave ScriptStar, there’s one more optional step.

If you want to send your clients a timed transcript, so they can highlight the most important phrases in interviews, or if you'd found it useful yourself, you can now export those transcripts in whatever format suits your workflow.

Formats include `CSV`, `Word` and `PDF`.

![](/static/scriptstar-05-cropped.jpg)

Back in Final Cut Pro, look for the events with the star in the name, and twirl each clip’s disclosure triangle to see every line of transcribed dialogue.

Select a line, play it back by pressing / \(slash\), then drag it to a timeline or tap `E` to append it.

The transcript search in Final Cut Pro still works, but if you want to search through the named favorites, choose **Favorites** in the Clip Filtering menu. If you don't do this, searches return the entire source clip.

![](/static/scriptstar-still-clip-filtering-crop.jpg)

Scriptstar works with regular clips and Multicam clips, and it's a great way to find not just dialogue, but anything said out loud during a shoot.

If something great just happened, or there's anything else you need to remember, say it out loud and you'll see it in your Browser during the edit.

![](/static/scriptstar-logging-crop.jpg)

You can learn more on the [ScriptStar website](https://scriptstar.fcp.cafe).

[!button text="Discuss this news item" variant="info"](news/20260220/#discuss-this-page)

---

!!!warning Sponsored
_Tight. Terse. Terrific. Bim. Bam. Boom._ – Cut/daily reader<br />
Post Production insight delivered to your inbox.<br />
Sign up for **free** at [Cut/daily.com](https://www.cut-daily.com)
!!!

---

### [19th February 2026](/news/20260219)

Following on from yesterday's post, **macOS Tahoe 26.4 Beta** also [breaks Karabiner-Elements](https://x.com/tekezo/status/2024132161717330388).

Given Apple seems to have made some MAJOR under-the-hood changes to **macOS Tahoe 26.4 Beta**, I would avoid upgrading for the time being.

---

[Iain Anderson](https://iain-anderson.com) and myself (Chris Hocking) will be on **Final Cut TV LIVE!** tonight!

We'll be chatting about our upcoming [ScriptStar](https://scriptstar.fcp.cafe) application release.

You can watch on [YouTube](https://www.youtube.com/live/5RIfXrnd3ZM):

[![](/static/fcp-live-podcast.jpg)](https://www.youtube.com/live/5RIfXrnd3ZM)

---

**Dylan Higginbotham** has posted a new blog post titled, **The Easiest Way to Add Captions in Final Cut Pro (Just 3 Steps)**.

You can read about it on the [Stupid Raisins blog](https://stupidraisins.com/the-easiest-way-to-add-captions-in-final-cut-pro-just-3-steps/).

---

Introducing **Agentic Editing** in **Jumper**! 🥳

![](/static/jumper-in-claude-code.png)

Jumper now integrates with Claude Desktop and OpenAI Codex Desktop, allowing AI agents to operate directly inside Jumper.

This is pretty crazy stuff.

These integrations let agents query Jumper’s backend and orchestrate multi-step workflows across your analysed media.

With these new integrations, the agent can operate Jumper just like a human.

- Search visually across analyzed footage
- Search across transcriptions
- Retrieve clip segments
- Find similar clips
- Find clips by face recognition
- Trigger workflow actions (e.g. export a sequence to Premiere, Final Cut Pro, DaVinci Resolve or Avid Media Composer)

But it can also do things that you can’t do with the normal Jumper interface.

For example:

- Export scenes as individual files to a folder
- Export a set of clips as a sequence for your editing software

Since the agent is acting as the orchestrator of the workflow, you can give it a complex task and it will break it down into smaller steps and execute them in the correct order. For example:

- “use Jumper to find all shots of Anna smiling, export as individual files and also export a sequence to premiere”
- “use Jumper to cut a sizzle reel from the event footage in /day1_footage/ and the voiceover is sizzle_reel_audio.wav”

This has the potential to speed up time consuming tasks that are a part of the routine media production process. Finding B-roll that matches a script, pulling every clip of a certain person, creating sequences of selects and probably a host of other tasks that we haven’t thought of yet.

Since you can run multiple agents in parallel, you can fire off multiple tasks at the same time and focus on other tasks while the agents are working.

![](/static/example-jumper-claude.jpg)

At the moment, Jumper is compatible with Claude Desktop (Chat, Cowork and Code) and OpenAI Codex Desktop. The team are working on adding support for other agents in the future.

If you're interested in testing out MCP support in Jumper, make sure you sign up for a [free trial](https://getjumper.io/?ref=fcpcafe) and join the Discord.

---

**Pipeline Neo v2.3.1** has been released!

For those unfamiliar, Pipeline Neo is an experimental FCPXML library built with the assistance of LLM tools.

It currently supports reading, creating, and modifying FCPXML documents and bundles, with parsing and validation against bundled DTDs spanning versions `v1.5` through `v1.14`.

Typed models cover resources, clips, adjustments, filters, transitions, multi-cam, captions, smart collections and many more.

Pipeline Neo provides a strong foundation and the essential building blocks for expanding FCPXML parsing and reading capabilities and adding features.

You can learn more on [GitHub](https://github.com/TheAcharya/pipeline-neo).
