---
title: Avid Experiments
date: 2009-08-04
author:
  name: Chris Hocking
  avatar: https://fcp.cafe/static/chrishocking.jpg
layout: blog
---
# Avid Experiments

If you have read any of my previous blog entries here you would know that I am a long time Final Cut Pro user, but since the beginning of this year I have been working at an offline edit house (in addition to the time I spend doing *latenite* things!) that primarily uses Avid on Macs. As we solely do offline editing here and all of the grading and online is done at other more specialised post production facilities, generally speaking we don’t have to worry too much about gamma, colour spaces and getting files in and out of various programs. Most of our jobs are shot on 35mm, and get telecined to DVCAM which we then edit in DV-PAL, export an EDL + OMF and we’re done. For RED Projects we normally get dumped a hard drive full of R3Ds which we convert to DNxHD using RED Rushes and bring all these files in Avid via an ALE. Everything is fairly simple and straight forward.

However, I tend to do a lot more things that fall outside of the offline banner. Sometime there might be some visual effects elements I’ll throw together in After Effects or Shake, other times I might want to do some hardcore grading in Color, or maybe I just want to export out a really high quality DVD.

Unlike in Final Cut Pro, getting consistent images into and out of Avid seems to be kind of a black art. The RGB vs 601 terminology is at times confusing, and despite the wealth of information out there on the World Wide Web – there still seems to be a lot of misinformation and head scratching. Even creating a dead simple DVD via DVD Studio Pro using Avid footage seems to be a real challenge (the solution on forums normally tends to be use one of Avid’s Sonic products).

Well, rather than spend even more time trying to find answers on the various Avid forums, I thought I’d do some tests and see how things actually work in the real world. This isn’t a formal experiment, nor is it anything like a technical white paper – all I’m really doing is having a bit of a muck-around and documenting what I do for future reference. It’s more for myself than anything else, to try and help get my head around everything. So apologies in advance if this blog entry is a bit of a mess!

To start things off, here are my system specifications. Now, before you all drill me, yes I know I’m running an older version of Avid, and yes I know that technically speaking I’m running a newer version of Quicktime than I should be (as you can see by reviewing the [Avid Version Matrix](http://avid.custkb.com/avid/app/selfservice/search.jsp?DocId=267087&Hilite=version+matrix+Composer+Version+Matrix "Avid Version Matrix")). But as more and more people tend to run Avid and Final Cut Pro on the same system, the more I see Avid running alongside newer versions of Quicktime that what the developers originally intended. As Avid is completely backwards compatible (which is both amazing and EXTREMELY handy!), the less often people tend to upgrade the Avid software. If it ain’t broke – why fix it?

Here are the system specifications of the machine I will be using for these tests:

**System Specs:
Processor:** 2 x 2.8 GHz Quad-Core Intel Xeon
**Memory:** 2 GB 800 MHz DDR2 FB-DIMM
**Mac OS X:** 10.5.7
**Quicktime:** 7.6.2 (1327)
**Avid:** 3.0.5
**Final Cut Pro:** 7.0
**Photoshop:** 11.0

For the purposes of these tests I will be using a **720 x 576 PAL** test chart from [Belle Nuit](http://www.belle-nuit.com/testchart/ "Belle Nuit Test Chart").

[![720 x 576 Test Chart](/static/blog/2009-07-testchart_small.jpg "720 x 576 Test Chart")](http://www.belle-nuit.com/download/testchartpal.tif "Test Chart")

Once I had a test chart the next step was to convert it to a Quicktime file. To do this I opened up Final Cut Pro, and set up a new Sequence with the following settings:

![FCP Sequence Settings](/static/blog/2009-07-fcp_settings_qt_none.jpg "FCP Sequence Settings")

I also set the **Motion Filtering Quality** to **Best** for good measure (in the **Video Processing** tab).

I then imported the test chart TIFF into the timeline and exported it as a **Quicktime Movie**.

To make sure something weird wasn’t going on, I then opened up the original TIFF file and the Quicktime File in Photoshop. Using the eye dropper tool I then double checked that all of the value were correct. They were…!

![Quicktime Value](/static/blog/2009-07-qt_none_values.jpg "Quicktime Value")

OK… So now I had a Quicktime file that identically matched the TIFF test chart.

The next step was to do some experiments with Avid. First up I created a new **25p PAL** project. I then imported the Quicktime Test Chart, as well as the straight TIFF Test Chart a few different ways:

**Method 1**
**Format:** OMF
**Video Resolution:** 1:1 OMF
**File Pixel to Video Mapping:** Computer RGB (0-255)

**Method 2**
**Format:** OMF
**Video Resolution:** 1:1 OMF
**File Pixel to Video Mapping:** Computer RGB (Dither Image Colours)

**Method 3**
**Format:** OMF
**Video Resolution:** 1:1 OMF
**File Pixel to Video Mapping:** 601 SD or 709 HD (16-235)

**Method 4**
**Format:** MXF
**Video Resolution:** 1:1 MXF
**File Pixel to Video Mapping:** Computer RGB (0-255)

**Method 5**
**Format:** MXF
**Video Resolution:** 1:1 MXF
**File Pixel to Video Mapping:** Computer RGB (Dither Image Colours)

**Method 6**
**Format:** MXF
**Video Resolution:** 1:1 MXF
**File Pixel to Video Mapping:** 601 SD or 709 HD (16-235)

Now that the test charts were successfully in the Avid, it was already time to try and get them back out again!

To export out of Avid I used these settings:

![Avid Export Settings](/static/blog/2009-07-avid_export_settings.jpg "Avid Export Settings")

For each method, I exported out a Quicktime movie using both the **601** and **RGB** Colour Levels.

Here are the results in regards to bringing in the Quicktime Files (with the Compression type set to *None*) and exporting them out of Avid.

Please be aware that to generate the images shown below I opened the exported Quicktimes in Photoshop, resized them to fit in with the blog design, and then saved them as a JPEG. They are only displayed here as a general guide.

**Method 1**

**601:**

**![qt_omf_1to1_rgb_601](/static/blog/2009-07-qt_omf_1to1_rgb_601.jpg "qt_omf_1to1_rgb_601")**

**RGB:**

**![qt_omf_1to1_rgb_rgb](/static/blog/2009-07-qt_omf_1to1_rgb_rgb.jpg "qt_omf_1to1_rgb_rgb")**

**![Method 01](/static/blog/2009-07-qt_method_01.jpg "Method 01")**

**Method 2**

**601:**

**![qt_omf_1to1_rgb_dither_601](/static/blog/2009-07-qt_omf_1to1_rgb_dither_601.jpg "qt_omf_1to1_rgb_dither_601")**

**RGB:**

**![qt_omf_1to1_rgb_dither_rgb](/static/blog/2009-07-qt_omf_1to1_rgb_dither_rgb.jpg "qt_omf_1to1_rgb_dither_rgb")**

**![Method 2](/static/blog/2009-07-qt_method_02.jpg "Method 2")**

**Method 3**

**601:**

**![qt_omf_1to1_601_601](/static/blog/2009-07-qt_omf_1to1_601_601.jpg "qt_omf_1to1_601_601")**

**RGB:**

**![qt_omf_1to1_601_rgb](/static/blog/2009-07-qt_omf_1to1_601_rgb.jpg "qt_omf_1to1_601_rgb")**

**![Method 3](/static/blog/2009-07-qt_method_03.jpg "Method 3")**

**Method 4**

**601:**

**![qt_mxf_1to1_rgb_601](/static/blog/2009-07-qt_mxf_1to1_rgb_601.jpg "qt_mxf_1to1_rgb_601")**

**RGB:**

**![qt_mxf_1to1_rgb_rgb](/static/blog/2009-07-qt_mxf_1to1_rgb_rgb.jpg "qt_mxf_1to1_rgb_rgb")**

**![Method 4](/static/blog/2009-07-qt_method_04.jpg "Method 4")**

**Method 5**

**601:**

**![qt_mxf_1to1_rgb_dither_601](/static/blog/2009-07-qt_mxf_1to1_rgb_dither_601.jpg "qt_mxf_1to1_rgb_dither_601")**

**RGB:**

**![qt_mxf_1to1_rgb_dither_rgb](/static/blog/2009-07-qt_mxf_1to1_rgb_dither_rgb.jpg "qt_mxf_1to1_rgb_dither_rgb")**

**![Method 5](/static/blog/2009-07-qt_method_05.jpg "Method 5")**

**Method 6**

**601:**

**![qt_mxf_1to1_601_601](/static/blog/2009-07-qt_mxf_1to1_601_601.jpg "qt_mxf_1to1_601_601")**

**RGB:**

**![qt_mxf_1to1_601_rgb](/static/blog/2009-07-qt_mxf_1to1_601_rgb.jpg "qt_mxf_1to1_601_rgb")**

**![Method 6](/static/blog/2009-07-qt_method_06.jpg "Method 6")**

Here are the results in regards to bringing in the original TIFF file and exporting it out of Avid:

**Method 1**

**601:**

**![tiff_omf_1to1_rgb_601](/static/blog/2009-08-tiff_omf_1to1_rgb_601.jpg "tiff_omf_1to1_rgb_601")**

**RGB:**

**![tiff_omf_1to1_rgb_rgb](/static/blog/2009-08-tiff_omf_1to1_rgb_rgb.jpg "tiff_omf_1to1_rgb_rgb")**

**![Method 1](/static/blog/2009-07-tiff_method_01.jpg "Method 1")**

**Method 2**

**601:**

**![tiff_omf_1to1_rgbdith_601](/static/blog/2009-08-tiff_omf_1to1_rgbdith_601.jpg "tiff_omf_1to1_rgbdith_601")**

**RGB:**

**![tiff_omf_1to1_rgbdith_rgb](/static/blog/2009-08-tiff_omf_1to1_rgbdith_rgb.jpg "tiff_omf_1to1_rgbdith_rgb")**

**![Method 2](/static/blog/2009-07-tiff_method_02.jpg "Method 2")**

**Method 3**

**601:**

**![tiff_omf_1to1_601_601](/static/blog/2009-08-tiff_omf_1to1_601_601.jpg "tiff_omf_1to1_601_601")**

**RGB:**

**![tiff_omf_1to1_601_rgb](/static/blog/2009-08-tiff_omf_1to1_601_rgb.jpg "tiff_omf_1to1_601_rgb")**

**![Method 3](/static/blog/2009-07-tiff_method_03.jpg "Method 3")**

**Method 4**

**601:**

**![tiff_mxf_1to1_rgb_601](/static/blog/2009-08-tiff_mxf_1to1_rgb_601.jpg "tiff_mxf_1to1_rgb_601")**

**RGB:**

**![tiff_mxf_1to1_rgb_rgb](/static/blog/2009-08-tiff_mxf_1to1_rgb_rgb.jpg "tiff_mxf_1to1_rgb_rgb")**

**![Method 4](/static/blog/2009-07-tiff_method_04.jpg "Method 4")**

**Method 5**

**601:**

**![tiff_mxf_1to1_rgbdith_601](/static/blog/2009-08-tiff_mxf_1to1_rgbdith_601.jpg "tiff_mxf_1to1_rgbdith_601")**

**RGB:**

**![tiff_mxf_1to1_rgbdith_rgb](/static/blog/2009-08-tiff_mxf_1to1_rgbdith_rgb.jpg "tiff_mxf_1to1_rgbdith_rgb")**

![Method 5](/static/blog/2009-07-tiff_method_05.jpg "Method 5")

**Method 6**

**601:**

**![tiff_mxf_1to1_601_601](/static/blog/2009-08-tiff_mxf_1to1_601_601.jpg "tiff_mxf_1to1_601_601")**

**RGB:**

**![tiff_mxf_1to1_601_rgb](/static/blog/2009-08-tiff_mxf_1to1_601_rgb.jpg "tiff_mxf_1to1_601_rgb")**

![Method 6](/static/blog/2009-07-tiff_method_06.jpg "Method 6")

OK… So now what? What’s the result of all of these tables and charts?

**Hint #1:** If you brought in your footage into Avid as RGB – then export as RGB. If you brought in your footage into Avid as 601, then export as 601.

If you look at all the different methods – this certainly seems to be the case. When using the same file pixel to video mapping setting for both import and export the file coming in is very SIMILAR to the file coming out – not EXACTLY – but very similar.

**Hint #2:** I hate to state the obvious, but Computer RGB (Dither Image Colours) only applies when you import still images. If you import a Quicktime movie using this option, it will just export as regular Computer RGB.

According to the Media Composer ReadMe file:

> **RGB (Computer RGB (0-255)):** Select this option if the imported graphics file uses RGB graphics levels. Most computer-generated graphics use RGB graphics levels. The RGB color values are remapped to ITU-R 601 (formerly CCIR 601) or ITU-R709 video color values appropriate for the Avid system.
>
> **RGB, dithered (Computer RGB, dither image colors):** Select this option if the imported graphics file uses complex color effects, such as a gradation, and you are importing at a high resolution (2:1). Do not use this option to reimport an image that has already been imported with dithering.
>
> **601/709 (601 SD or 709 HD (16-235))**: Select this option if the imported graphics file uses video levels based on the ITU-R 601 (formerly CCIR 601) or ITU-R709 (HD) standard. These graphics include Avid color bars or images that include superblack (zero black) for keying purposes.

Now with this new found knowledge, it was time to do some further, more detailed tests. First up let have a closer look at what happens to an image if we import it in as 601, and export it as 601.

**Original Test Chart:**

![720 x 576 Test Chart](/static/blog/2009-07-testchart_small.jpg "720 x 576 Test Chart")

**601 to 601:**

![qt_omf_1to1_601_601](/static/blog/2009-07-qt_omf_1to1_601_601.jpg "qt_omf_1to1_601_601")

![detailed_601_to_601](/static/blog/2009-08-detailed_601_to_601.jpg "detailed_601_to_601")

Apart from a few very minor differences where the values are off by one (highlighted in bold), the import is basically exactly the same as the output.

Interestingly however, if you use the [DigitalColor Meter](http://en.wikipedia.org/wiki/DigitalColor_Meter "DigitalColor Meter") to measure the values directly from the preview monitors in Avid, the white (255) section reads exactly 255, despite the fact that the output file reads 254. Apart from that using the meter everything else matches the above table.

The only different is the resolution.

**Original Test Chart:**

![resolution_original](/static/blog/2009-08-resolution_original.jpg "resolution_original")

**601 to 601:**

**![resolution_601to601](/static/blog/2009-08-resolution_601to601.jpg "resolution_601to601")**

As the test chart was originally 8bit in RGB space,

So now we know that if you import footage as 601 and export as 601 the colours pretty much stay the same. But it’s one thing to do these kind of tests – it’s another thing to try it with real footage. So that’s what we’ll try next…

In Final Cut Pro I created a new sequence with the following settings:

![fcp_sequence_settings](/static/blog/2009-08-fcp_sequence_settings.jpg "fcp_sequence_settings")

…and everything set to best quality:

![fcp_video_processing](/static/blog/2009-08-fcp_video_processing.jpg "fcp_video_processing")

I then dragged in a FCP Bars & Tone generator for a second, then the test chart we’ve been using for another second, and then some 4K RED footage. I threw a quick 3-way Colour Correction filter on top of the footage to tweak it a bit and then exported out a **Quicktime Movie**. This Quicktime will become our test footage.

After I exported out the Quicktime Movie I then opened it up in Photoshop to have a look at the values on the chart:

![footage_from_fcp](/static/blog/2009-08-footage_from_fcp.jpg "footage_from_fcp")

Obviously all of these values had some kind of gamma/luma shift applied to them. Just to double check I then exported out the same timeline but with the Compressor set to None to see what would happen:

![test_sequence_qt_none](/static/blog/2009-08-test_sequence_qt_none.jpg "test_sequence_qt_none")

OK… so obviously Quicktime is doing something funky behind the scenes. This is something we’ll have to look into later, but for now the purpose of this test is to try and get footage into and back out of Avid without any nasty changes. As long as we know what the values are of the chart before the footage gets into Avid, it doesn’t really matter if the values aren’t “correct” (i.e. Grey 71 on the chart doesn’t have to equal 71 using the eye dropper).

I then brought the test footage into the Avid as OMF, 1:1, 601. Using the DigitalColor Meter, I then checked the values of the preview monitor:

![avid_colorpicker_footage_test](/static/blog/2009-08-avid_colorpicker_footage_test.jpg "avid_colorpicker_footage_test")

Then I noticed that something wasn’t right. Turns out that for whatever reason the DigitalColor Meter tool and the Photoshop Eyedropper don’t match up!

![photoshop_eyedropper_problems](/static/blog/2009-08-photoshop_eyedropper_problems.jpg "photoshop_eyedropper_problems")

After a slight panic, and a bit of hair pulling, I opened up **Color Settings** in Photoshop and changed the RGB Working Space from **sRGB IEC61966-2.1** to my monitor working space. And with a quick click of the OK button, all of a sudden everything started working as per normal. It seems that I just completely forgot about display profiles for a second there! Thanks also to Cail Young at Inspiration Studios for his almost instant Twitter reply!

**Hint #3:** Don’t forget about display profiles!

I then compared what was in the Avid to the original file as viewed in the Quicktime Player. When “Enable Final Cut Studio color compatibility” was selected in the Quicktime Preferences, using DigitalColor Meter I obtained the following results:

![qt_player_eyedrops](/static/blog/2009-08-qt_player_eyedrops.jpg "qt_player_eyedrops")

When you turn off Final Cut Studio colour compatibility you obtain these results:

![qt_player_eyedrops_fcs_off](/static/blog/2009-08-qt_player_eyedrops_fcs_off.jpg "qt_player_eyedrops_fcs_off")

I then went to a specific frame on both Avid and Quicktime Player. I took a screen shot, and compared the two images side by side in Photoshop. So far so good – the image in Quicktime Player looks visually identical to the video in Avid when Final Cut Studio colour compatibility is turned on. So the media looks good whilst IN the Avid – what about when it comes out again? To test this I exported a “Same as Source” 601 Quicktime file from Avid.

I then opened up the newly exported Quicktime movie in Photoshop for review:

![avid_export_footage_601to601](/static/blog/2009-08-avid_export_footage_601to601.jpg "avid_export_footage_601to601")

Interestingly, the Avid seems to have “corrected” the bars so that they more closely match where they’re supposed to be. At this stage I have no idea why this is or how it’s being done – but all I can assume for now is that the data out of Final Cut Pro was always correct – it just wasn’t being handled correctly in Photoshop or Quicktime Player.

Visually comparing the original file to the file exported out of Avid, what I can say is that they are identical in terms of colour and tone. You cannot tell the difference between the two:

![side_by_side_comparison](/static/blog/2009-08-side_by_side_comparison.jpg "side_by_side_comparison")

OK – so it seems that it is possible to get footage into and out of Avid without the image being degraded.

Here’s an interesting bit of information I found on the Avid [forum](http://community.avid.com/forums/p/71873/402146.aspx "Avid Forums"):

> I have done some fairly extensive testing (with an oscilloscope and vectorscope….)…. It seems impossible to get certain footage with certain codecs to go through transparently through Compressor (or be imported correctly into FCP). A good test to do is the following: Import a testcard such as the one here:
>
> http://www.belle-nuit.com/testchart/
>
> into Avid with 601 levels.
>
> Export with your chosen codec then import the QT file into FCP. Observe the results in FCP’s waveform monitor, noting in particular the gray scale ramp which should be linear and have no curve. The patches marked 16 and 235 should be correctly positioned in the waveform.
>
> DV footage with the Avid codec consistently has gamma issues (even though with RGB levels the black and 235 white levels are correct).
>
> DV footage without the Avid codec works as from FCP 6.0 but had problems in 5.1.4 as Avid does not insert the image description extensions that describe the colorimetry (primaries, transfer fn and matrix). FCP 6.0 (and the version of compressor that comes with it) appears to deduce the correct primaries, xfer fn and matrix from the image size and codec (at least in the case of DV pal) if the ‘nclc’ QT extension is absent (which it always is from avid).
>
> I have had little luck with the other codecs (prores, and native avid codecs) which are not transparent with a Avid->Compressor (or FCP) workflow. I think something is up with how Avid presents the image samples to the quicktime compression session. I suspect that given the absence of the ‘nclc’ extension which describes the colorimetry in the output QT file, Media Composer gives the codec no information as to the colorimetry of the samples, so the codec makes a best guess. Of course with the Avid codecs this works (the problem is with decode on FCP and not in the encoding), but with third-party codecs such as Apple ProRes there is a problem. As a result gamma correction is incorrectly applied to the source samples when it should not be. It would be nice if this would be addressed for greater compatibility with other software…..

This is also another interesting bit of information I found on the same [forums](http://community.avid.com/forums/p/21437/119606.aspx "Avid Forums"):

> Well the main difference between RGB and 601 color space is the ability to have super white and negative black.
>
> If you were to create a black and white image in say Photoshop with the black being 0 and the white being 255 and then brought it into the Avid using RGB, the black part of the screen would be, in an analog world, 7.5IRE and the white would be 100IRE just what you’d expect. However if you brought it it in as 601, your levels would be about 0IRE and 107IRE.
>
> An image created in Photoshop with “black” being 16 and “white” being 235 and then brought into an Avid in the 601 color space would then have correct black and white levels. Obviously this is very handy if you want to key something.
>
> If you want to export a tiff sequence you can use either color space you want, just make note of which you use and make sure that whoever you give it to knows which you use. If you create it in 601 and bring it back into an Avid as RGB, it will look very washed out.

Here is some other [information](httphttp://www.elultimodeseo.com/archives/2008/04/correcting_blac/ "Correcting BLAC") I found which is really interesting:

> When I export your sample to Sheer Y’CbCr[A] 8bv 4:2:2:[4] with QuickTime Player, QuickTime Player feeds the images to the Sheer Y’CbCr[A] 8bv 4:2:2[:4] encoder in the RGB 8bf ‘ARGB’ pixel format. I find this odd, since the Avid Meridien Uncompressed (AVUI) codec purportedly stores the data in Y’CbCr[A] 8bv 4:2:2[:4] format. On inspecting the AvidAVUICodec, I see that ARGB is the only pixel format that the AVUI codec supports for input and output; it lacks the ‘cpix’ resource used to list other supported pixel formats.
>
> For the last few frames in the movie (Silicon Artists presenta El Último Deseo), the “black” ARGB pixels passed to the Sheer Y’CbCr[A] 8bv 4:2:2[:4] encoder have the value:
>
> ARGB = {0xFF,0x10,0x10,0x10} (hexadecimal)
> ARGB = {255,16,16,16} (decimal)
>
> When encoding to the Avid Meridien Uncompressed (AVUI) codec the settings dialog (‘Avid Meridien Uncompressed Codec Configuration – v1.8.0’) lets you specify the input color range as either ITU-R 601 video-range [16..235] or full-range [0..255]. However, QuickTime does not provide any mechanism to specify settings for a decoder. QuickTime unequivocally defines the ARGB pixel format as having full-range components, so the fact that AVID’s AVUI decompressor outputs video-range ARGB is just wrong.

OK… so now what I want to have a quick look at is the difference between the vector scopes in Avid and Final Cut Pro using the same source footage.

**Avid 3.0.5:**

![bars_in_avid](/static/blog/2009-08-bars_in_avid.jpg "bars_in_avid")

![bars_in_avid_scopes](/static/blog/2009-08-bars_in_avid_scopes.jpg "bars_in_avid_scopes")

**Final Cut Pro 7:**

![bars_in_fcp](/static/blog/2009-08-bars_in_fcp.jpg "bars_in_fcp")

![bars_in_fcp_scopes](/static/blog/2009-08-bars_in_fcp_scopes.jpg "bars_in_fcp_scopes")

With this knowledge, it was now time to try and bring the test footage that was exported out of Avid back into Final Cut Pro. Just to re-cap, I originally created the Quicktime Movie in Final Cut Pro, exported as a 10-Bit Uncompressed QT, brought it into Avid as OMF 1:1, 601 and then exported out as 601.

Amazingly, the export from Avid *almost* perfectly matched the original file that was sent from Final Cut Pro.

![back_to_fcp_comparison](/static/blog/2009-08-back_to_fcp_comparison.jpg "back_to_fcp_comparison")

**Original Footage (10-bit Uncompressed from Final Cut Pro):**

**![back_to_fcp_fcp_scopes](/static/blog/2009-08-back_to_fcp_fcp_scopes.jpg "back_to_fcp_fcp_scopes")**

**Avid Footage (Avid Same as Source imported into FCP):**

**![back_to_fcp_avid_scopes](/static/blog/2009-08-back_to_fcp_avid_scopes.jpg "back_to_fcp_avid_scopes")**

I then decided to have a look through the Avid documentation once again and found the following information in regards to how Avid handles Field Ordering:

> Allows you to select the field ordering (sometimes referred to as field dominance) of the media you are importing. For 23.976p, 24p, or 25p projects, these options do not appear; all fields are automatically exported as progressive (still) frames.
>
> When the field ordering (or spatial field position) of the imported media matches the field ordering of the project format, no special processing is required. For more information, see “Field Ordering in Graphic Imports and Exports” on page 499.
>
> This setting does not apply to OMFI imports when the import resolution matches the OMFI file.
>
> The following options are available:
>
> * Non-interlaced (Properly ordered for current format): Use this option when the file to be imported has been correctly field ordered for the video format being used (ex: Even or lower ordered for NTSC, Odd or upper ordered for 1080i HD). This is the default option.
> * Odd (Upper Field First) Odd (Upper Field First) ordered: Choose this option if the file was odd ordered and you are importing it into an even ordered format. For example, importing PAL DV into PAL.
> * Even (Lower Field First) Even (Lower Field First) ordered: Choose this option when importing a file with even ordering into a video format with odd ordering. For example, importing NTSC into 1080i HD.

OK, so now that brings us to the final test of the day. For this test I will capture some standard PAL DV footage into Avid and then export it and try to bring it into Final Cut Pro, hopefully without introducing any strange artefacts, field dominance issues or gamma/luma shifts.

The Avid project is **25p PAL**.The Media Type is **OMF**. We will be using a **DV 25P 420** video resolution. I used the **Software DV 25 Codec** (which I later [discovered](http://community.avid.com/forums/t/41464.aspx "Avid Forums") is not so good for PAL footage!).

Here is a screenshot of the footage as it sits in the Avid preview monitor:

![footage_in_avid](/static/blog/2009-08-footage_in_avid.jpg "footage_in_avid")

Here are the screen shots of exported footage from the Avid brought into Final Cut Pro:

**Same as Source (601):**

**![dvtest_sameassource601](/static/blog/2009-08-dvtest_sameassource601.jpg "dvtest_sameassource601")**

**Same as Source (RGB):**

**![dvtest_sameassourcergb](/static/blog/2009-08-dvtest_sameassourcergb.jpg "dvtest_sameassourcergb")**

**Same as Source (Avid DV / 601):**

**![dvtest_sameassourceaviddv601](/static/blog/2009-08-dvtest_sameassourceaviddv601.jpg "dvtest_sameassourceaviddv601")**

**Same as Source (Avid DV / RGB):**

**![dvtest_sameassourceaviddvrgb](/static/blog/2009-08-dvtest_sameassourceaviddvrgb.jpg "dvtest_sameassourceaviddvrgb")**

**Quicktime Animation (601):**

**![dvtest_qtanimation601](/static/blog/2009-08-dvtest_qtanimation601.jpg "dvtest_qtanimation601")**

**Quicktime Animation (RGB):**

**![dvtest_qtanimationrgb](/static/blog/2009-08-dvtest_qtanimationrgb.jpg "dvtest_qtanimationrgb")**

So it seems that if you want to get footage that looks right from Avid to Final Cut Pro, then **Same as Source (Avid DV Codec / 601)** or something like the **Quicktime Animation Codec (601)** seem like viable solutions. Given that, I did a couple more tests:

**Avid DV (601):**

Instead of exporting as “Same as Source” and selecting “Avid DV”, I exported as a standard Quicktime File, but used the Avid DV codec. It’s important to note that the Avid DV Codec has some additional options:

**![dvtest_aviddv_options](/static/blog/2009-08-dvtest_aviddv_options.jpg "dvtest_aviddv_options")**

**![dvtest_aviddv601](/static/blog/2009-08-dvtest_aviddv601.jpg "dvtest_aviddv601")**

**DV PAL (601):**

**![dvtest_dvpal601](/static/blog/2009-08-dvtest_dvpal601.jpg "dvtest_dvpal601")**

**ProRes HQ (Automatic Gamma Correction / 601):**

Just to see what happens, I exported the footage both using and not using gamma correction.

**![prores_options](/static/blog/2009-08-prores_options.jpg "prores_options")**

**![dvtest_proreshq_auto_601](/static/blog/2009-08-dvtest_proreshq_auto_601.jpg "dvtest_proreshq_auto_601")**

**ProRes HQ (No Gamma Correction / 601):**

**![dvtest_proreshq_none_601](/static/blog/2009-08-dvtest_proreshq_none_601.jpg "dvtest_proreshq_none_601")**

So, although no very scientific, and purely based on visual observation rather than mathematical fact, it seems that as long as you keep **601** checked, getting footage from Avid into Final Cut isn’t that big a deal after all.

As I said at the start of this blog entry – this was always going to be a bit all over the place as I did random tests and tried out new things. Apologies if you got to the end of this an realised that I didn’t answer any real questions or teach you something you didn’t already know. I really hope it was some help! The more time I have to spend with Avid, and the more time I have to work out viable workflows of getting stuff into and out of it, the more things will hopefully become clear in my head. I will certainly post anything I think is useful here. One thing’s for certain… after looking through so many Avid forums, and reading hundreds of articles randomly scattered on the web, it’s clear that I’m not the only one that’s confused. Like a lot of things these days, it takes a lot of patience, hair-pulling and vigorous workflow testing to get things right. Everything is so complex – and it just takes one little glitch to throw everything off balance.

Happy editing!

Best Regards, *Chris!*