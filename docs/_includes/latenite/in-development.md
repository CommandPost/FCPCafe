## In Development

Here's a **sneak peak** of some of the things we have in various stages of development:

---

### SplitTake

A simple Swift/Swift UI application for capturing your screen, webcam and external microphone to ProRes for editing in Final Cut Pro.

---

### SyncScript Pro

**SyncScript Pro** (previously referred to as **Assistant Toolbox**) will be a Workflow Extension that spins out **Titles to Keywords** and **Auto Sequence** from CommandPost.

It'll include various improvements and enhancements to make the job even easier for Assistant Editors working on long-form feature film projects.

This project is currently at the exploration and experiment stage.

Here's what the Toolbox's currently look like in CommandPost:

![](/static/titles-to-keywords.png)

![](/static/auto-sequence.png)

---

### Timecode Toolbox

We're spinning out the **Sony Timecode Repair Toolbox** from [CommandPost](https://commandpost.io) and making it a standalone app.

In addition to the current functionality, you'll also be able to modify the original camera files to add Final Cut Pro friendly timecode.

Here's what the Toolbox currently looks like in CommandPost:

![](/static/sony-timecode-repair.png)

---

### Library Duplicator

Ability to quickly create a shareable Final Cut Pro library, which also consolidates Motion Templates and Fonts.

---

### FCP Preferences Cleaner

Inspect and clean your Final Cut Pro Preferences, rather than "trashing" them.

---

### RAW Toolbox

Following in the footsteps of [BRAW Toolbox](#braw-toolbox), RAW Toolbox will initially add **Nikon N-RAW** support to Final Cut Pro.

This is probably less relevant now that we have MediaExtension's built into the operating system, but we'll see what happens with Blackmagic's BRAW MediaExtension ships.

---

### Import Toolbox

**Import Toolbox** will be a Workflow Extension that allows you to import files with better metadata and preset controls (i.e. clip volume).

We will also be spinning out the **Watch Folders** from CommandPost and moving them into this app.

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