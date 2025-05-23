# Explore LateNite's Tools

This website has been thrown together by [Chris Hocking](https://twitter.com/chrisatlatenite) at [LateNite](https://latenitefilms.com).

Constantly looking for ways to innovate, LateNite is as passionate about production and post production as it is storytelling. Their pursuit of creative excellence has seen them work closely with global cinematic technology companies to craft post workflow solutions and critically celebrated software in-house.

![](/static/latenite-apps.png)

---

{{ include "latenite/custom-tools" }}

---

{{ include "latenite/pro-editor-bundle" }}

---

{{ include "latenite/collaborations" }}

---

### Jumper

Introducing **Jumper** by Witchcraft Software in Sweden. 🇸🇪

**A powerful AI search engine for your footage.**

**No clouds. No uploads. All on device.**

Please watch this launch video on YouTube:

[![](/static/jumper.jpg)](http://ltnt.tv/jumper)

You can also watch a detailed tutorial video [here](https://docs.getjumper.io/videos/).

I’m very biased, but it’s amazing. I basically describe it as **Spotlight for your NLE**.

You should stop reading this and go download it now from [here](https://getjumper.io/?ref=fcpcafe).

You can learn more about my involvement via [this FCP Cafe news article](https://fcp.cafe/news/20241106/).

---

### Motion Template Version Fixer

The most common reason for the ugly red screen of death on a plugin in Final Cut Pro is due to a versioning issue.

The Motion Template Version Fixer solves that.

The technical name for these versions are OZML and Display Versions... But all you need to know is that this app fixes it... fast!

Features:
- Elegant Easy to use interface.
- Fully integrated backup system, with easy recovery.
- Incredibly fast processing.
- No subscriptions. All updates will be free... forever!

Chris helped Dylan migrate his original Python code-base to Swift/SwiftUI.

You can buy Motion Template Version Fixer on [Dylan's online store](https://fcbplugins.com/b/motiontemplatefixer).

---

### Arctic

Arctic (previously Final Cut Library Manager) is your single-view source of truth for all your Final Cut Pro libraries, whether they are connected or in a cupboard. Locate media, assets, caches, and clean up what you no longer need.

Chris is the Lead Developer on Hedge's Arctic, and also helps out with other Hedge applications such as [EditReady](https://hedge.co/products/editready).

You can learn more [about how this happened](https://blog.hedge.video/a-new-home-for-final-cut-library-manager/).

You can learn more [about Arctic](https://hedge.co/products/arctic).

---

### BretFX

BretFX is a leading provider of plugins, effects, titles, transitions and templates for Final Cut Pro.

Chris helped Bret throw together a Swift/SwiftUI installer, bringing BretFX to the Apple App Store.

You can check out [BretFX's apps on the Mac App Store](https://apps.apple.com/au/developer/poptop-production-llc/id1744600123).

---

### Marker Data

The avant-garde Marker extraction application crafted for Final Cut Pro. It allows users to extract, convert and create databases from Final Cut Pro’s Marker metadata effortlessly.

Chris helped Vigneswaran Rajkumar right throughout the Marker Data development process from the initial idea through to release, and threw together [ShareDestinationKit](https://github.com/latenitefilms/ShareDestinationKit) to help get Custom Share Destinations working.

You can learn more [about Marker Data](https://markerdata.theacharya.co).

---

## Mac App Store

Here's some of our products currently for sale on the **Mac App Store**:

---

{{ include "latenite/braw-toolbox" }}

---

{{ include "latenite/gyroflow-toolbox" }}

---

{{ include "latenite/marker-toolbox" }}

---

{{ include "latenite/fast-collections" }}

---

{{ include "latenite/recall-toolbox" }}

---

{{ include "latenite/capacitor" }}

---

{{ include "latenite/lut-robot" }}

---

{{ include "latenite/news-import" }}

---

{{ include "latenite/metaburner" }}

---

## FxFactory

Here's some of our products currently for sale on the **FxFactory**:

---

{{ include "latenite/metaburner" }}

---

## Free Apps

Here's some of our free tools used by professional editors worldwide...

---

{{ include "latenite/commandpost" }}

---

{{ include "latenite/transfer-toolbox" }}

---

{{ include "latenite/rename-avid-mxf-files" }}

---

## In Development

Here's a **sneak peak** of some of the things we have in various stages of development:

---

### Library Duplicator

Ability to quickly create a shareable Final Cut Pro library, which also consolidates Motion Templates and Fonts.

---

### FCP Preferences Cleaner

Inspect and clean your Final Cut Pro Preferences, rather than "trashing" them.

---

### Timecode Toolbox

We're spinning out the **Sony Timecode Repair Toolbox** from [CommandPost](https://commandpost.io) and making it a standalone app.

In addition to the current functionality, you'll also be able to modify the original camera files to add Final Cut Pro friendly timecode.

Here's what the Toolbox currently looks like in CommandPost:

![](/static/sony-timecode-repair.png)

---

### RAW Toolbox

Following in the footsteps of [BRAW Toolbox](#braw-toolbox), RAW Toolbox will initially add **Nikon N-RAW** support to Final Cut Pro.

---

### Import Toolbox

**Import Toolbox** will be a Workflow Extension that allows you to import files with better metadata and preset controls (i.e. clip volume).

We will also be spinning out the **Watch Folders** from CommandPost and moving them into this app.

---

### Assistant Toolbox

**Assistant Toolbox** will be a Workflow Extension that spins out **Titles to Keywords** and **Auto Sequence** from CommandPost.

It'll include various improvements and enhancements to make the job even easier for Assistant Editors working on long-form feature film projects.

This project is currently at the exploration and experiment stage.

Here's what the Toolbox's currently look like in CommandPost:

![](/static/titles-to-keywords.png)
![](/static/auto-sequence.png)

---

### Magic Toolbox

**Magic Toolbox** is our first Machine Learning experiment.

You'll be able to add **Titles** to the timeline, to trigger Machine Learning actions such as:

- **SUBTITLES** - Analyses the audio and adds subtitles
- **NARRATION** - Turns text into speech in a narration tone
- **VOICE** - Turns text into speech based on your description
- **GRADE** - Adds Color Effects based on your description
- **MUSIC** - Adds stock music or machine learning generated music based on your description
- **SFX** - Adds sound effects from places like FreeSound.org
- **VIDEO** - Adds machine learning generated video based on your description

Magic Toolbox will use existing services like [ChatGPT](https://chat.openai.com) and [ElevenLabs](https://beta.elevenlabs.io) - and it'll be BYO API Key (subject to Apple's approval).

![](/static/magic-toolbox.jpg)