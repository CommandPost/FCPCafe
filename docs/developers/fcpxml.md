# FCPXML

This section of the site is dedicated to **FCPXML**.

FCPXML is insanely complicated and confusing. Because all its time units are in rational numbers, it also makes it hard to easily work things out without a spreadsheet, drawing or calculator.

Sadly, even ChatGPT gets confused by it.

The purpose of this page is to try and make FCPXML less scary with examples and breakdowns.

If you have questions about FCPXML, [please let us know](/contribute/) so that we can update this page accordingly.

---

## Frequently Asked Questions

### Why does FCPXML use Rational Numbers?

Final Cut Pro expresses time values as a rational number of seconds with a 64-bit numerator and a 32-bit denominator.

Frame rates for NTSC-compatible media, for example, use a frame duration of 1001/30000s (29.97 fps) or 1001/60000s (59.94 fps).

If a time value is equal to a whole number of seconds, Final Cut Pro may reduce the fraction into whole seconds (for example, 5s).

So... Why?

Because one of Apple's core frameworks/technologies, [Core Media](https://developer.apple.com/documentation/coremedia) also represents time as a rational value, with a time value as the numerator and timescale as the denominator.

The structure can represent a specific numeric time in the media timeline, and can also represent nonnumeric values like invalid and indefinite times or positive and negative infinity.

---

## Official Documentation

You can find the official FCPXML documentation [here](https://developer.apple.com/documentation/professional_video_applications/fcpxml_reference?language=objc).

---

## Getting Started

You can read [Demystifying Final Cut Pro XMLs by Philip Hodgetts and Gregory Clarke](/developer-case-studies/fcpxml/) on FCP Cafe, which gives a fantastic introduction to FCPXML.

---

## DAWFileKit

[Steffan Andrews](https://github.com/orchetect) has created an amazing Swift Framework called [DAWFileKit](https://github.com/orchetect/DAWFileKit), which can read and process FCPXML.

---

## Pipeline Neo

[Pipeline](https://github.com/reuelk/pipeline) was originally developed by [Reuel Kim](https://github.com/reuelk) and it is no longer maintained. **Pipeline Neo** was created as a spin-off project to fix and update the library when necessary.

**Pipeline Neo** extends the `XMLDocument` and `XMLElement` classes in the Foundation framework. It adds properties and methods that simplify the creation and management of FCPXML document structure.

**Pipeline Neo** also includes supplemental classes and a `CMTime` extension to help in the processing of FCPXML data. For example, you can easily convert a timing value that looks like `59983924/30000s` in the XML to `00:33:19,464` for display in an app.

In most cases, we'd recommend [DAWFileKit](https://github.com/orchetect/DAWFileKit) instead of Pipeline Neo, however we include it here as it does have some functionality that DAWFileKit is currently lacking.

You can learn more [here](https://github.com/TheAcharya/pipeline-neo).

---

## Preferred XML Editor

I'm a massive fan of [BBEdit 14](https://www.barebones.com/products/bbedit/).

It has a 30 day free trial, and is also available on the Mac App Store.

---

## DTD Validation

macOS has a built in XML lint tool - allowing you to validate a `FCPXML` document against it's `DTD` file.

!!!primary What's a DTD?
A DTD (Document Type Definition) file is used in XML to define the structure and the legal elements and attributes of an XML document. It's a set of markup declarations that provide a rulebook for a specific type of XML document, describing what the document contains and how those elements and attributes are organised.
!!!

You can download all the [`FCPXML` `DTD` files](https://github.com/CommandPost/CommandPost/tree/develop/src/extensions/cp/apple/fcpxml/dtd).

You can then use this Terminal Command to validate things:

```
xmllint --dtdvalid "/path/to/FCPXMLv1_9.dtd" "/path/to/your/file.fcpxml"
```

!!!primary Tip!
You can just drag in a file from Finder into Terminal, and Terminal will write out the file's path.<br />
Simply type `xmllint --dtdvalid`, then drag in the `DTD` file from Finder, and then your `FCPXML` file.
!!!

---

## Getting Source Timecode

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

If we look at the `start`, it's the same as the timecode we calculated earlier:

> 27613100 / 2500 = 11045.24 seconds (`03:04:05:06` / 276131 frames)

This is the start timecode of the source clip (i.e. the first frame of the clip) - `03:04:05:06`.

Now let's say we wanted to find the source timecode of the Video clip at the timeline/project timecode of `01:02:07:06` (3727.24 seconds / 93181 frames).

For now, we'll just cheat! We can double-click on the Synchronised Clip in Final Cut Pro, and use the **Source Timecode** window to get the answer:

> `03:04:19:07` (11059.28 seconds / 276482 frames).

We know that the point of interest (`01:02:07:06`) is 4.08 seconds from the start of the timeline/project because:

> 3727.24 - 3723.16 = 4.08 seconds

By going **inside** the Synchronised Clip in Final Cut Pro, we know that the timecode position we want is at `00:00:55:23` (55.92 seconds / 1398 frames) in timeline/container time.

We can confirm this with maths by doing:

> `asset-clip.offset` - `asset-clip.start` = (104700/2500) - (27613100/2500) = -11003.36 seconds<br />
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

---

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

If we use the same formula, we get:

> `asset-clip.start` + `frameOfInterest` − `asset-clip.offset` + `sync-clip.start` − `sync-clip.offset`<br />
> (27613100/2500) + 3734.24 - 0 + (23300/2500) - (37291200/10000) = 11059.68 seconds / `03:04:19:17` / 276492 frames

---

Now to complicate things, let's do the same idea with a **Multicam Clip**.

Here's our FCPXML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE fcpxml>

<fcpxml version="1.11">
    <resources>
        <format id="r1" name="FFVideoFormat1080p24" frameDuration="100/2400s" width="1920" height="1080" colorSpace="1-1-1 (Rec. 709)"/>
        <media id="r2" name="33-3-1" uid="wZrV8FLjRn+s3t95Kzdlmg" modDate="2024-02-07 12:23:51 +1100">
            <multicam format="r3" tcStart="20495/24s" tcFormat="NDF" renderFormat="FFRenderFormatProRes422LT">
                <mc-angle name="Cam A" angleID="angle1_236353">
                    <gap name="Gap" offset="0s" start="3600s" duration="4/24s"/>
                    <sync-clip offset="4/24s" name="33-3-1 Cam A" start="20495/24s" duration="1332/24s" format="r4" tcFormat="NDF">
                        <asset-clip ref="r5" offset="20495/24s" name="33-3-1" start="20495/24s" duration="1332/24s" format="r1" tcFormat="NDF">
                            <clip lane="-1" offset="846s" name="33-3T01" start="846s" duration="1523/24s" format="r6" tcFormat="NDF">
                                <audio ref="r7" offset="609120015/720000s" start="609120015/720000s" duration="70s" role="dialogue.Mix" srcCh="1">
                                    <audio ref="r7" lane="-2" offset="609120015/720000s" start="609120015/720000s" duration="70s" role="dialogue.Alex" srcCh="3"/>
                                    <audio ref="r7" lane="-1" offset="609120015/720000s" start="609120015/720000s" duration="70s" role="dialogue.Boom 1" srcCh="2"/>
                                </audio>
                                <metadata>
                                    <md key="com.apple.proapps.studio.reel" value="SPAA004"/>
                                    <md key="com.apple.proapps.studio.scene" value="33-3"/>
                                    <md key="com.apple.proapps.studio.shot" value="01"/>
                                </metadata>
                            </clip>
                        </asset-clip>
                    </sync-clip>
                </mc-angle>
                <mc-angle name="Cam B" angleID="angle2_5913">
                    <gap name="Gap" offset="0s" start="20495/24s" duration="79/24s"/>
                    <sync-clip offset="79/24s" name="33-3-1 Cam B" start="20573/24s" duration="1217/24s" format="r4" tcFormat="NDF">
                        <asset-clip ref="r8" offset="20573/24s" name="33-3-1" start="20573/24s" duration="1217/24s" format="r1" tcFormat="NDF">
                            <clip lane="-1" offset="846s" name="33-3T01" start="846s" duration="743/12s" format="r6" tcFormat="NDF">
                                <audio ref="r7" offset="609120015/720000s" start="609120015/720000s" duration="70s" role="dialogue.Mix" srcCh="1">
                                    <audio ref="r7" lane="-2" offset="609120015/720000s" start="609120015/720000s" duration="70s" role="dialogue.Alex" srcCh="3"/>
                                    <audio ref="r7" lane="-1" offset="609120015/720000s" start="609120015/720000s" duration="70s" role="dialogue.Boom 1" srcCh="2"/>
                                </audio>
                            </clip>
                        </asset-clip>
                    </sync-clip>
                </mc-angle>
            </multicam>
        </media>
        <format id="r3" frameDuration="1/24s" width="1920" height="817" colorSpace="1-1-1 (Rec. 709)"/>
        <format id="r4" frameDuration="1/24s" width="1920" height="817"/>
        <asset id="r5" name="A_0006C026_230427_231258_p1CR1" uid="EE96BCF7AA1CE838CF6A1C4F10082E15" start="10493440/12288s" duration="682496/12288s" hasVideo="1" format="r1" videoSources="1">
            <media-rep kind="original-media" sig="EE96BCF7AA1CE838CF6A1C4F10082E15" src="file:///Folder/A_0006C026_230427_231258_p1CR1.mov"/>
        </asset>
        <format id="r6" name="FFVideoFormat720p24" frameDuration="100/2400s" width="1280" height="720" colorSpace="1-1-1 (Rec. 709)"/>
        <asset id="r7" name="33-3T01" uid="A3B2B4718BD2E1A076285939AB9A6210" start="40608001/48000s" duration="70s" hasAudio="1" audioSources="1" audioChannels="3" audioRate="48000">
            <media-rep kind="original-media" sig="A3B2B4718BD2E1A076285939AB9A6210" src="file:///Folder/33-3T01.wav"/>
        </asset>
        <asset id="r8" name="B_0004C001_230428_001354_p1CU6" uid="88A3210D69C7EC80E8B239693F940DFC" start="10533376/12288s" duration="623616/12288s" hasVideo="1" format="r1" videoSources="1">
            <media-rep kind="original-media" sig="88A3210D69C7EC80E8B239693F940DFC" src="file:///Folder/B_0004C001_230428_001354_p1CU6.mov"/>
        </asset>
    </resources>
    <project name="My Timeline" uid="9EFD5FEE-0CBE-4BF6-9AA4-80702AE8B90B" modDate="2024-02-07 13:41:21 +1100">
        <sequence format="r1" duration="2720/1920s" tcStart="3600s" tcFormat="NDF" renderFormat="FFRenderFormatProRes422LT" audioLayout="stereo" audioRate="48k">
            <spine>
                <mc-clip ref="r2" offset="3600s" name="33-3-1" start="1679040/1920s" duration="2720/1920s">
                    <mc-source angleID="angle1_236353" srcEnable="audio">
                        <audio-role-source role="dialogue.Alex" active="0"/>
                        <audio-role-source role="dialogue.Boom 1" active="0"/>
                        <audio-role-source role="dialogue.Mix"/>
                        <adjust-colorConform enabled="1" autoOrManual="manual" conformType="conformNone" peakNitsOfPQSource="1000" peakNitsOfSDRToPQSource="203"/>
                    </mc-source>
                    <mc-source angleID="angle2_5913" srcEnable="video"/>
                </mc-clip>
            </spine>
        </sequence>
    </project>
</fcpxml>
```

This time our frame of interest is: `01:00:00:18` / 3600.75 seconds / 86418 frames

Looking in Final Cut Pro's Source Timecode display we know the answer is: 875.21 seconds

We can use this same idea:

> `asset-clip.start` + `frameOfInterest` − `asset-clip.offset` + `sync-clip.start` − `sync-clip.offset`

However we need to go a few more layers deep:

> `asset-clip` > `sync-clip` > `multicam` > `mc-clip`

Confusingly, for the `multicam` node, instead of `offset` we use `tcStart`. Also, because there is no `start` value in the `multicam` node, we can just use 0.

The formula now looks like this:

> `asset-clip.start` + `frameOfInterest` − `asset-clip.offset` + `sync-clip.start` − `sync-clip.offset` + 0 - `multicam.tcStart` + `mc-clip.start` - `mc-clip.offset`

When we put in the numbers we get:

> (20573/24) + 3600.75 - (20573/24) + (20573/24) - (79/24) + (1679040/1920) - (3600) + 0 - (20495/24) = 875.21 seconds

---

!!!danger Under Construction
The below information is incomplete and most likely incorrect.<br />
We will update the below once we get our heads around it better. Stay tuned.
!!!

Now to complicate things even further, let's try a **25fps clip** inside a **24fps timeline**:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE fcpxml>

<fcpxml version="1.11">
    <resources>
        <format id="r1" name="FFVideoFormat1080p24" frameDuration="100/2400s" width="1920" height="1080" colorSpace="1-1-1 (Rec. 709)"/>
        <asset id="r2" name="Test Clip - 25fps - 01-02-03-04" uid="F03C4D168FE7934996E6408D973FFB97" start="9307900/2500s" duration="60s" hasVideo="1" format="r3" hasAudio="1" videoSources="1" audioSources="1" audioChannels="2" audioRate="48000">
            <media-rep kind="original-media" sig="F03C4D168FE7934996E6408D973FFB97" src="file:///Folder/Test%20Clip%20-%2025fps%20-%2001-02-03-04.mov"/>
        </asset>
        <format id="r3" name="FFVideoFormat1080p25" frameDuration="100/2500s" width="1920" height="1080" colorSpace="1-1-1 (Rec. 709)"/>
    </resources>
    <project name="24fps Timeline" uid="99AB3F85-FDA0-49CD-83BB-B663A0F6FEA9" modDate="2024-02-10 06:02:11 +1100">
        <sequence format="r1" duration="12000/1920s" tcStart="7148480/1920s" tcFormat="NDF" audioLayout="stereo" audioRate="48k">
            <spine>
                <asset-clip ref="r2" offset="7148480/1920s" name="Test Clip - 25fps - 01-02-03-04" start="93079/25s" duration="12000/1920s" format="r3" tcFormat="NDF" audioRole="dialogue">
                    <conform-rate srcFrameRate="25"/>
                </asset-clip>
            </spine>
        </sequence>
    </project>
</fcpxml>
```

If we click on this clip in the timeline, in the Inspector we can see:

![](/static/fcpx-rate-conform.png)

Final Cut Pro is forcefully doing a rate conform from 25 converted to 24.

This time our frame of interest is: `01:02:08:07` / 3728.29 seconds / 89479 frames.

Looking in Final Cut Pro's Source Timecode display we know the answer is: `01:02:08:02` / 3728.08 seconds / 93202 frames

We can use this same idea, however the maths isn't quite right:

> `asset-clip.start` + `frameOfInterest` − `asset-clip.offset`<br />
> (93079/25) + 3728.08 - (7148480/1920) = 3728.07333333333

Based on the `conform-rate` within the `asset-clip` we know we need to convert 25fps to 24fps.

According to the FCPXML [documentation](https://developer.apple.com/documentation/professional_video_applications/fcpxml_reference/story_elements/conform-rate):

> When your media has specific combinations of timeline frame rate and media frame rate, Final Cut Pro automatically applies rate conforming by converting the media frame rate to match the timeline frame rate, as shown in the Final Cut Pro rate conforming chart below. As a result, Final Cut Pro also adjusts the duration. When this occurs, the Rate Conform section appears in Final Cut Pro Video Inspector. Use the conform-rate element to indicate rate conforming.
>
> ![](/static/fcpxml-conform-rate.png)

To convert from 25fps to 24fps, we need to adjust the playback speed so that every second of 25fps footage plays back in the same duration as it would at 24fps. Essentially, we're slowing down the 25fps footage to match the duration of 24fps footage.

In this case, Final Cut Pro is using **time-stretching**, where the duration of each frame from the 25fps footage is slightly extended so that the total number of frames still fits within the timeline of the 24fps project.

In this case, time-stretching doesn't mean that frames are being skipped or added - instead, the playback speed of each frame is slightly reduced so that all frames from the 25fps clip can be played back in a 24fps timeline without losing any frames. This is achieved by increasing the duration of each frame by a factor that corresponds to the ratio of the two frame rates.

To adjust the maths to reflect this time-stretching process and correctly calculate the "source" timecode of the clip in the 24fps project, we need to apply a conversion factor that reflects the slight extension in the duration of each frame.

This factor can be calculated as the ratio of the original frame rate to the new frame rate:

> Conversion Factor = (Original Frame Rate / New Frame Rate) = 25 / 24

You would then apply this conversion factor to the timecodes involved in the calculation to reflect the time-stretched duration of the footage in the 24fps timeline.

However, none of these combinations add up exactly:

> ( (93079/25) * ((100/2400) / (100/2500)) ) + 3728.08 - ( (7148480/1920) * ((100/2400) / (100/2500)) ) = 3728.07<br />
> ( (93079/25) * ((24) / (25)) ) + 3728.08 - ( (7148480/1920) * ((24) / (25)) ) = 3728.07<br />
> ( (93079/25) * ((100/2500) / (100/2400)) ) + 3728.08 - ( (7148480/1920) * ((100/2500) / (100/2400)) ) = 3728.07<br />
> ( (93079/25) * ((25) / (24)) ) + 3728.08 - ( (7148480/1920) * ((25) / (24)) ) = 3728.07

This could be due to rounding errors, a logic error/misunderstanding of the above, or maybe Final Cut Pro is doing something entirely different internally.

I will update this information once I get my head around it.

---

Hopefully this now gives you a good deep understanding of how source timecode works in FCPXML.

If you have any questions, please post them in [Discussions](https://github.com/CommandPost/FCPCafe/discussions/categories/developer-discussions) and we'll do our best to answer!

---

{{ include "contribute-learn-more" }}