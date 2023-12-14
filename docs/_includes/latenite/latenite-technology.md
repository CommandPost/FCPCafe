# Explore LateNite's Tools

This website has been thrown together by [Chris Hocking](https://twitter.com/chrisatlatenite) at [LateNite](https://latenitefilms.com/technology).

Constantly looking for ways to innovate, LateNite is as passionate about production and post production as it is storytelling. Their pursuit of creative excellence has seen them work closely with global cinematic technology companies to craft post workflow solutions and critically celebrated software in-house.

![](/static/latenite-apps.png)

---

{{ include "latenite/pro-editor-bundle" }}

---

## Mac App Store

Here's some of our products currently for sale on the **Mac App Store**:

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

## Free Apps

Here's some of our free tools used by professional editors worldwide:

{{ include "latenite/commandpost" }}

---

{{ include "latenite/transfer-toolbox" }}

---

### Rename Avid MXF Files

This simple Python script is used to rename MXF files generated from Avid Media Composer to match the **Package Name** in their metadata.

The script can process a **single file** or a **folder** containing multiple MXF files.

This is useful if you want to move native Avid MXF files from Avid Media Composer to Final Cut Pro.

This script is very basic, and doesn't contain any special error handling or messaging. It may not work in all use cases.

You should duplicate the MXF files you want to process prior to using, as there's no "undo" once you run the script.

You can learn more [here](https://github.com/CommandPost/RenameAvidMXFFiles).

---

## Custom Tools

If you have a specific post production workflow problem you need to solve or automate, we can help.

We’ve developed custom plugins and solutions for post production studios, production companies, and individual editors all over the world.

For example, we developed a transcription plugin for [Apollo: Missions to the Moon](https://www.imdb.com/title/tt9782756/) (edited by [David Tillman](https://twitter.com/davidtillman)) as well as specific CommandPost features for Denmark’s second largest production company, [Metronome Productions](https://web.archive.org/web/20220629061650/https://fcp.co/final-cut-pro/news/867-metronome-celebrate-a-documentary-series-cut-on-fcpx-with-a-birthday-cake).

The **FCPXML Titles Processor**, **Shot Data** and **Titles to Keywords** in CommandPost’s Toolbox are other examples of commissioned tools.

[Email us](mailto:support@latenitefilms.com) to discuss your specific requirements.

---

## In Development

Here's a **sneak peak** of some of the things we have in development:

---

### Metaburner Toolbox

**Metaburner Toolbox** is an Final Cut Pro adjustment layer that allows you to "burn" metadata information from the timeline over to top of your existing video.

We hope it will have the same power and flexibility as DaVinci Resolve's Data Burn-in Tool:

![](/static/resolve-data-burn-in.jpg)

This project has been started and we hope to release in early 2024.

---

### Timecode Toolbox

We're spinning out the **Sony Timecode Repair Toolbox** from [CommandPost](https://commandpost.io)( and making it a standalone app.

In addition to the current functionality, you'll also be able to modify the original camera files to add Final Cut Pro friendly timecode.

Here's what the Toolbox currently looks like in CommandPost:

![](/static/sony-timecode-repair.png)

This project has been started, but we have no ETA on competition.

---

### RAW Toolbox

Following in the footsteps of [BRAW Toolbox](#braw-toolbox), RAW Toolbox will initially add **Nikon N-RAW** support to Final Cut Pro.

This project is currently at the exploration and experiment stage.

---

### Import Toolbox

**Import Toolbox** will be a Workflow Extension that allows you to import files with better metadata and preset controls (i.e. clip volume).

We will also be spinning out the **Watch Folders** from CommandPost and moving them into this app.

This project is currently at the exploration and experiment stage.

---

### Assistant Toolbox

**Assistant Toolbox** will be a Workflow Extension that spins out **Titles to Keywords** and **Auto Sequence** from CommandPost.

It'll include various improvements and enhancements to make the job even easier for Assistant Editors working on long-form feature film projects.

This project is currently at the exploration and experiment stage.

Here's what the Toolbox's currently look like in CommandPost:

![](/static/titles-to-keywords.png)T
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

This project is currently at the exploration and experiment stage.