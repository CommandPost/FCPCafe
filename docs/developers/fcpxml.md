# FCPXML

This section of the site is dedicated to **FCPXML**.

You can find the official Workflow Extensions documentation [here](https://developer.apple.com/documentation/professional_video_applications/fcpxml_reference?language=objc).

You can also read [Demystifying Final Cut Pro XMLs by Philip Hodgetts and Gregory Clarke](/developer-case-studies/fcpxml/) on FCP Cafe.

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

The Synchronised Clip starts at `01:02:04:04` (3724.16 seconds / 93104 frames).

When you double click on it or **Clip > Open Clip** from the menubar, it looks like this:

![](/static/fcpxml-example-03.png)

On the Primary Storyline we have a Gap, and then a **1920x1080 @ 25fps** ProRes clip with audio.

Attached to the Gap is an audio clip underneath the Primary Storyline.

The Synchronised Clip starts at a `00:00:00:00` timecode value.

The Gap duration is `00:00:41:22` (41.88 seconds / 1047 frames).

This means the Video Clips starts at `00:00:41:22` (28.77 seconds / 719 frames) as well.

The duration of the Video clip is `00:01:00:00` (60.00 seconds / 1500 frames).

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

Within the `sequence` we have the `spine`. Within the `spine` he have our Gap and Synchronised Clip:

```xml
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
```

The Gap offset is the same as our `tcStart`:

> 37231600 / 10000 = 3723.16 seconds (`01:02:03:04` / 93079 frames)

The Video clip is actually an `asset-clip`.

If we look at the `offset`, it's the same as the Gap Duration:

> 104700 / 2500 = 41.88 seconds (`00:00:41:22` / 1047 frames)

If we look at the `start`, it's the same as the timecode we calcuated earlier:

> 27613100 / 2500 = 11045.24 seconds (`03:04:05:06` / 276131 frames)

This is the start timecode of the source clip (i.e. the first frame of the clip).

Now let's say we wanted to find the source timecode of the Video clip at the timeline timecode of `01:02:07:06` (3727.24 seconds / 93181 frames).

We can double click on the Synchronised Clip in Final Cut Pro to get the answer: `03:04:19:07` (11059.28 seconds / 276482 frames).

We know it's 4.08 seconds from the start:

> 3727.24 - 3723.16 = 4.08 seconds

We know that inside the Synchronised Clip, the timecode position we want is at `00:00:55:23` (55.92 seconds / 1398 frames).

Let's now go back and have a look at the `sync-clip` again.

The `offset` is:

> 37241600 / 10000 = 3724.16 seconds (`01:02:04:04` / 93104 frames).

This is the timeline timecode of where the `sync-clip` starts.

The `start` is:

> 132100 / 2500 = 52.84 seconds (`00:00:52:21` / 1321 frames)

This value is the start of the visible range of the Compound Clip as used in the timeline:

![](/static/fcpxml-example-04.png)

So how do we get the source timecode of the Video Clip at `01:02:07:06` (3727.24 seconds / 93181 frames)?

_**...to be continued.**_

---

{{ include "contribute-learn-more" }}