# FCPXML

This section of the site is dedicated to **FCPXML**.

FCPXML is insanely complicated and confusing. Because all its time units are in rational numbers, it also makes it hard to easily work things out without a spreadsheet, drawing or calculator.

Sadly, even ChatGPT gets confused by it.

The purpose of this page is to try and make FCPXML less scary with examples and breakdowns.

If you have questions about FCPXML, [please let us know](/contribute/) so that we can update this page accordingly.

---

### Official Documentation

You can find the official FCPXML documentation [here](https://developer.apple.com/documentation/professional_video_applications/fcpxml_reference?language=objc).

---

### Getting Started

You can read [Demystifying Final Cut Pro XMLs by Philip Hodgetts and Gregory Clarke](/developer-case-studies/fcpxml/) on FCP Cafe, which gives a fantastic introduction to FCPXML.

---

### DAWFileKit

[Steffan Andrews](https://github.com/orchetect) has created an amazing Swift Framework called DAWFileKit, which can read and process FCPXML.

You can learn more [here](https://github.com/orchetect/DAWFileKit).

---

### Pipeline Neo

[Pipeline](https://github.com/reuelk/pipeline) was originally developed by [Reuel Kim](https://github.com/reuelk) and it is no longer maintained. **Pipeline Neo** was created as a spin-off project to fix and update the library when necessary.

**Pipeline Neo** extends the `XMLDocument` and `XMLElement` classes in the Foundation framework. It adds properties and methods that simplify the creation and management of FCPXML document structure.

**Pipeline Neo** also includes supplemental classes and a `CMTime` extension to help in the processing of FCPXML data. For example, you can easily convert a timing value that looks like `59983924/30000s` in the XML to `00:33:19,464` for display in an app.

In most cases, we'd recommend [DAWFileKit](https://github.com/orchetect/DAWFileKit) instead of Pipeline Neo, however we include it here as it does have some functionality that DAWFileKit is currently lacking.

You can learn more [here](https://github.com/TheAcharya/pipeline-neo).

---

### Preferred XML Editor

I'm a massive fan of [BBEdit 14](https://www.barebones.com/products/bbedit/).

It has a 30 day free trial, and is also available on the Mac App Store.

---

### DTD Validation

macOS has a built in XML lint tool - allowing you to validate a `FCPXML` document against it's `DTD` file.

!!!primary What's a DTD?
A DTD (Document Type Definition) file is used in XML to define the structure and the legal elements and attributes of an XML document. It's a set of markup declarations that provide a rulebook for a specific type of XML document, describing what the document contains and how those elements and attributes are organised.
!!!

You can download all the `FCPXML` `DTD` files [here](https://github.com/CommandPost/CommandPost/tree/develop/src/extensions/cp/apple/fcpxml/dtd).

You can then use this Terminal Command to validate things:

```
xmllint --dtdvalid "/path/to/FCPXMLv1_9.dtd" "/path/to/your/file.fcpxml"
```

!!!primary Tip!
You can just drag in a file from Finder into Terminal, and Terminal will write out the file's path.<br />
Simply type `xmllint --dtdvalid`, then drag in the `DTD` file from Finder, and then your `FCPXML` file.
!!!

---

### Getting Source Timecode

I have created a very simple Final Cut Project project.

It's **1920x1080 @ 25fps**, with a start timecode value of `01:02:03:04` (3723.16 seconds / 93079 frames):

![](/static/fcpxml-example-01.png)

It looks like this in Final Cut Pro:

![](/static/fcpxml-example-02.png)

There's **1 second** of Gap at the start then a single Synchronised Clip.

The Synchronised Clip starts at `01:02:04:04` (3724.16 seconds / 93104 frames) in timeline/project time.

When you double click on it or **Clip > Open Clip** from the menubar, it looks like this:

![](/static/fcpxml-example-03.png)

On the Primary Storyline we have a Gap, and then a **1920x1080 @ 25fps** ProRes clip with audio.

Attached to the Gap is an audio clip underneath the Primary Storyline.

The Synchronised Clip starts at a `00:00:00:00` timecode value in timeline/project time.

The Gap duration is `00:00:41:22` (41.88 seconds / 1047 frames).

This means the Video Clips starts at `00:00:41:22` (41.88 seconds / 1047 frames) as well.

The duration of the Video clip is `00:01:00:00` (60 seconds / 1500 frames).

The start source timecode of the Video Clip is `03:04:05:06` (11045.24 seconds / 276131 frames).

The FCPXML of the timeline is (I've removed the bookmark data and metadata to simplify):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE fcpxml>

<fcpxml version="1.11">
    <resources>
        <format id="r1" name="FFVideoFormat1080p25" frameDuration="100/2500s" width="1920" height="1080" colorSpace="1-1-1 (Rec. 709)"/>
        <asset id="r2" name="Veaceslav Draganov - Cloud Drawings" uid="6794EE6DAE868F4CC943039DC32A0875" start="0s" duration="7832386/44100s" hasAudio="1" audioSources="1" audioChannels="2" audioRate="44100">
            <media-rep kind="original-media" sig="6794EE6DAE868F4CC943039DC32A0875" src="file:///Folder/Veaceslav%20Draganov%20-%20Cloud%20Drawings.wav"/>
        </asset>
        <format id="r3" name="FFVideoFormatRateUndefined"/>
        <asset id="r4" name="Test Clip - 25fps - 03-04-05-06" uid="F0E3A9BB00C452BBB3B3EA82BB6434E1" start="27613100/2500s" duration="60s" hasVideo="1" format="r1" hasAudio="1" videoSources="1" audioSources="1" audioChannels="2" audioRate="48000">
            <media-rep kind="original-media" sig="F0E3A9BB00C452BBB3B3EA82BB6434E1" src="file:///Folder/Test%20Clip%20-%2025fps%20-%2003-04-05-06.mov"/>
        </asset>
    </resources>
    <project name="My Timeline" uid="D2F469B3-51B8-4655-964D-BE6F7CF8C7E0" modDate="2024-01-27 19:01:51 +1100">
        <sequence format="r1" duration="325200/10000s" tcStart="7446320/2000s" tcFormat="NDF" audioLayout="stereo" audioRate="48k">
            <spine>
                <gap name="Gap" offset="37231600/10000s" start="3600s" duration="1s"/>
                <sync-clip offset="37241600/10000s" name="Sync Clip" start="132100/2500s" duration="78800/2500s" tcFormat="NDF">
                    <spine>
                        <gap name="Gap" offset="0s" start="3600s" duration="104700/2500s">
                            <asset-clip ref="r2" lane="-1" offset="3600s" name="Veaceslav Draganov - Cloud Drawings" duration="127875689/720000s" format="r3" audioRole="music"/>
                        </gap>
                        <asset-clip ref="r4" offset="104700/2500s" name="Test Clip - 25fps - 03-04-05-06" start="27613100/2500s" duration="60s" tcFormat="NDF" audioRole="dialogue"/>
                    </spine>
                    <sync-source sourceID="storyline">
                        <audio-role-source role="dialogue.dialogue-1" active="0"/>
                    </sync-source>
                </sync-clip>
            </spine>
        </sequence>
    </project>
</fcpxml>
```

The FCPXML is really made up of two parts:

```xml
<fcpxml version="1.11">
    <resources/>
    <project/>
</fcpxml>
```

Looking at the `sequence` we can see:

```xml
<sequence format="r1" duration="325200/10000s" tcStart="7446320/2000s" tcFormat="NDF" audioLayout="stereo" audioRate="48k">
```

Looking at the `tcStart`, we can do the maths and confirm it matches the timecode we're seeing in FCPX:

> 7446320 / 2000 = 3723.16 seconds (`01:02:03:04` / 93079 frames)

Within the `sequence` we have the `spine`. Within the `spine` he have our Gap and Synchronised Clip (the `...` signals things that have been removed for simplicity):

```xml
<spine>
    <gap name="Gap" offset="37231600/10000s" start="3600s" duration="1s"/>
    <sync-clip offset="37241600/10000s" name="Sync Clip" start="132100/2500s" duration="78800/2500s" tcFormat="NDF">
        ...
    </sync-clip>
</spine>
```

The Gap offset is the same as our `tcStart`:

> 37231600 / 10000 = 3723.16 seconds (`01:02:03:04` / 93079 frames)

If we look inside the `sync-clip`, the Video clip inside is actually an `asset-clip`.

```xml
<sync-clip offset="37241600/10000s" name="Sync Clip" start="132100/2500s" duration="78800/2500s" tcFormat="NDF">
    <spine>
        <gap name="Gap" offset="0s" start="3600s" duration="104700/2500s">
            ...
        </gap>
        <asset-clip ref="r4" offset="104700/2500s" name="Test Clip - 25fps - 03-04-05-06" start="27613100/2500s" duration="60s" tcFormat="NDF" audioRole="dialogue"/>
    </spine>
    ...
</sync-clip>
```

If we look at the `offset`, it's the same as the Gap Duration:

> 104700 / 2500 = 41.88 seconds (`00:00:41:22` / 1047 frames)

If we look at the `start`, it's the same as the timecode we calcuated earlier:

> 27613100 / 2500 = 11045.24 seconds (`03:04:05:06` / 276131 frames)

This is the start timecode of the source clip (i.e. the first frame of the clip) - `03:04:05:06`.

Now let's say we wanted to find the source timecode of the Video clip at the timeline/project timecode of `01:02:07:06` (3727.24 seconds / 93181 frames).

For now, we'll just cheat! We can double-click on the Synchronised Clip in Final Cut Pro, and use the **Source Timecode** window to get the answer:

> `03:04:19:07` (11059.28 seconds / 276482 frames).

We know that the point of interest (`01:02:07:06`) is 4.08 seconds from the start of the timeline/project because:

> 3727.24 - 3723.16 = 4.08 seconds

By going **inside** the Synchronised Clip in Final Cut Pro, we know that the timecode position we want is at `00:00:55:23` (55.92 seconds / 1398 frames) in timeline/container time.

We can confirm this with maths by doing:

> `asset-clip.offset` - `asset-clip.start` = (104700/2500) - (27613100/2500) = -11003.36 seconds
> 11059.28 - 11003.36 = 55.92

Let's now go back and have a look at the `sync-clip` again:

```xml
<sync-clip offset="37241600/10000s" name="Sync Clip" start="132100/2500s" duration="78800/2500s" tcFormat="NDF">
```

The `offset` value is:

> 37241600 / 10000 = 3724.16 seconds (`01:02:04:04` / 93104 frames).

This is the timeline/project timecode of where the `sync-clip` **starts**.

The `start` value is:

> 132100 / 2500 = 52.84 seconds (`00:00:52:21` / 1321 frames)

This value is the start of the visible range of the Compound Clip as used in the timeline/project:

![](/static/fcpxml-example-04.png)

So how do we get the source timecode of the Video Clip at `01:02:07:06` (3727.24 seconds / 93181 frames)?

We know that the `sync-clip` starts at `00:00:01:00` because, `sync-clip.offset` minus `sequence.tcStart`:

> `sync-clip.offset` - `sequence.tcStart` = (37241600/10000) - (7446320/2000) = 1 second

We know that the timeline/project timecode value of where the `sync-clip` starts in the timeline/project is:

> `sequence.tcStart` + (`sync-clip.offset` - `sequence.tcStart`) = (7446320/2000) + (37241600/10000) - (7446320/2000) = 3724.16 seconds

If we minus the source timecode we want (i.e. `01:02:07:06` / 3727.24 seconds / 93181 frames) from that value we get:

> 3727.24 - 3724.16 = 3.08 seconds (`00:00:03:02` / 77 frames)

So we know that the frame we're after is 3.08 seconds AFTER the start of the `sync-clip` in the timeline.

There's 10.96 seconds (`00:00:10:24` / 1316 frames) at the start of the `asset-clip` that's not visible on the timeline (i.e. the start of the clip has been trimmed).

To recap:

- `frameOfInterest` is the project/timeline value of the frame we're interested in = 3727.24 seconds / `01:02:07:06` / 93181 frames

- `sequence.tcStart` is the start timecode of the project/timeline = 7446320/2000s / 3723.16 seconds / `01:02:03:04` / 93079 frames

- `sync-clip.offset` is the timeline/project timecode of where the `sync-clip` starts = 37241600/10000s / 3724.16 seconds / `01:02:04:04` / 93104 frames
- `sync-clip.start` is the timeline/container timecode of the start of the visible range of the Compound Clip as used in the timeline = 132100/2500s / 52.84 seconds `00:00:52:21` / 1321 frames

- `asset-clip.offset` is the timeline/container timecode (inside the `sync-clip`) of where the `asset-clip` starts = 104700/2500s / 41.88 seconds / `00:00:41:22` / 1047 frames
- `asset-clip.start` is the start timecode of the source clip = 27613100/2500s / 11045.24 seconds / `03:04:05:06` / 276131 frames

Here's a hand-drawn image to visually explain:

![](/static/fcpxml-drawing.jpg)

To find the exact source timecode of the `asset-clip` at the timeline/project timecode of `01:02:07:06` (which we already know is `03:04:19:07` / 11059.28 seconds / 276482 frames), we can use the following formula:

> `asset-clip.start` + `frameOfInterest` − `asset-clip.offset` + `sync-clip.start` − `sync-clip.offset`

For example:

> (27613100/2500) + 3727.24 - (104700/2500) + (132100/2500) - (37241600/10000) = 11059.28

Let's try another example.

This time our frame of interest is: `01:02:14:06` / 3734.24 seconds / 93356 frames

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE fcpxml>

<fcpxml version="1.11">
    <resources>
        <format id="r1" name="FFVideoFormat1080p25" frameDuration="100/2500s" width="1920" height="1080" colorSpace="1-1-1 (Rec. 709)"/>
        <asset id="r2" name="Test Clip - 25fps - 03-04-05-06" uid="F0E3A9BB00C452BBB3B3EA82BB6434E1" start="27613100/2500s" duration="60s" hasVideo="1" format="r1" hasAudio="1" videoSources="1" audioSources="1" audioChannels="2" audioRate="48000">
            <media-rep kind="original-media" sig="F0E3A9BB00C452BBB3B3EA82BB6434E1" src="file:///Folder/Test%20Clip%20-%2025fps%20-%2003-04-05-06.mov"/>
        </asset>
    </resources>
    <project name="Test 2" uid="0E5B7C32-FFFB-479E-91F2-7DFC50A1772B" modDate="2024-02-05 14:07:10 +1100">
        <sequence format="r1" duration="290800/10000s" tcStart="7446320/2000s" tcFormat="NDF" audioLayout="stereo" audioRate="48k">
            <spine>
                <gap name="Gap" offset="37231600/10000s" start="3600s" duration="59600/10000s"/>
                <sync-clip offset="37291200/10000s" name="Sync Clip One Clip" start="23300/2500s" duration="57800/2500s" tcFormat="NDF">
                    <asset-clip ref="r2" offset="0s" name="Test Clip - 25fps - 03-04-05-06" start="27613100/2500s" duration="60s" tcFormat="NDF" audioRole="dialogue"/>
                    <sync-source sourceID="storyline">
                        <audio-role-source role="dialogue.dialogue-1" active="0"/>
                    </sync-source>
                </sync-clip>
            </spine>
        </sequence>
    </project>
</fcpxml>
```

We we use the same formula, we get:

> `asset-clip.start` + `frameOfInterest` − `asset-clip.offset` + `sync-clip.start` − `sync-clip.offset`
> (27613100/2500) + 3734.24 - 0 + (23300/2500) - (37291200/10000) = 11059.68 seconds / `03:04:19:17` / 276492 frames

---

{{ include "contribute-learn-more" }}