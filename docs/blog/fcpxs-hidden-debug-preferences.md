---
title: FCPX’s Hidden Debug Preferences
date: 2014-01-30
author: Chris Hocking
layout: blog
---
# FCPX’s Hidden Debug Preferences

**Written by Chris Hocking on 30th January 2014**

**UPDATE (JUNE 2017):** The *PEAppDebugPreferencesModule.nib* file no longer exists in the Final Cut Pro 10.3.4 package, but has been replaced with *PEAppAudioPreferencesModule.nib* and *PEAppUserPreferencesModule.nib*.

---

Back in November last year, I was listening to a [FCPX Grill episode](http://digitalcinemacafe.com/2013/11/26/fcg003-reading-the-fcpx-tea-leaves-feat-alex-gollner/) with [Alex Gollner](http://blog.alex4d.com), where he talked about talked about a secret “debug mode” he discovered whilst looking through all the FCPX .plist and .nib files.

For those that don’t know, property list files (commonly referred to as “p-list files”) are files that store serialised objects, such as user settings and information about bundles and applications. They’re essentially an XML file that store a list of settings or preferences (very similar to .ini files on Windows).

Nib files on the other hand contain user interface design information. They allow programmers using Apple’s free [Xcode](https://developer.apple.com/xcode/) application to create and manipulate user interfaces graphically instead of programmatically – giving developers the chance to see the results of their changes instantly. This means that they can change the layout and design of a user interface with a few mouse drags, rather than rewriting any code – speeding up development time.

So where do you find these files? Mac OS X handles most applications as “bundles”. A bundle is a directory structure that groups related files together, and are used for GUI applications, frameworks, and installer packages. These are presented to the user as one file in the Finder. When set up correctly, bundles make for easy deployment – as end users just need to deal with one file, rather than a whole bunch of files (like you’d find on Windows). This is one of Apple’s biggest strengths – because to an end user, when they download an Application, in most cases all they need to do is drag a single file to their Applications folder and you’re done – as opposed to Windows, where you need to run a installer which throws files all over the place. To access the contents of a bundle, all you need to do is simply right click on an application in Finder and select “Show Package Contents”.

As Alex explains on his [blog](http://blog.alex4d.com/2012/07/25/secret-fcpx-4-debug-mode/), he basically went digging through all the files within the FCPX bundle to see if he could discover – and he found some pretty interesting things, such as some Experimental and Work-In-Progress tools. The problem was – even if you know these functions are there, how do the actually access them?

Back when I first listened to Alex talking about these discovers on the podcast, I thought it was cool and interesting, but as I wasn’t actually using FCPX for jobs, I didn’t really think too much else of it. However, now that I’ve been [playing with FCPX](./../2014/01/28/fcpx-rant/) more and more, these “secret” options seemed more and more intriguing – specifically, I was really interested to see what these mysterious “Guard” functions where – especially given that Apple has some [patents in editing collaboration technology](http://www.fcp.co/final-cut-pro/news/884-apple-s-new-patent-hints-at-collaborative-media-production-with-final-cut-pro?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed:+FCPdotCO+(FCPdotCo+Main+RSS+Feed)). Alex also spoke a bit about what these features could be in his [blog](http://blog.alex4d.com/2011/07/18/secret-fcpx-xml-multi-user-editing/).

So, long story short – I decided to do some testing of my own…

**DISCLAIMER:** This blog post is purely for EDUCATIONAL PURPOSES ONLY. Only use these instructions at your OWN RISK. I will NOT be responsible for any profit, loss and/or damage of ANY TYPE WHAT-SO-EVER. The debug functions that these instructions reveal were never intended to be publicly accessible, so who knows what they’ll break or do to your system. Basically… please, do NOT try this at home folks, and if you do go against this advice, don’t blame me for anything that happens what-so-ever!

![01](/static/blog/01-01.png)

**Step 1:** Duplicate the “Final Cut Pro.app” within Finder by right clicking on the application and selecting duplicate, or pressing CMD+D. You can rename the new file to whatever you like (i.e. “Final Cut Pro Debug”).

![02](/static/blog/01-02.png)

**Step 2:** Right click on the new file and select **Show Package Contents**.

![03](/static/blog/01-03.png)

**Step 3:** Navigate to the **Contents > Resources > en.lproj** folder (assuming you’re working on an English machine).

![04](/static/blog/01-04.png)

**Step 4:** Rename the **PEAppGeneralPreferencesModule.nib** file to **PEAppGeneralPreferencesModuleOLD.nib**.

![05](/static/blog/01-05.png)

**Step 5:** Rename the **PEAppDebugPreferencesModule.nib** file to **PEAppGeneralPreferencesModule.nib**.

![06](/static/blog/01-06.png)

**Step 6:** Now when you open the new Final Cut Pro file, the General Preferences panel will be replaced by the Debug options – simple as that! These changes ONLY affect the duplicated Final Cut Pro application – so if you open the original Final Cut Pro application, the General preferences will still be there.

I’ve had a play with most of the functions revealed – but there’s nothing really useful in there that I can see (except maybe the “Periodic Backup Interval” and the “Suspend Background Options During Playback” – but I’ll have to do some more testing). I was really hoping that enabling “Guards” would do something magical – but it doesn’t seem to do anything as far as I can tell – although maybe if you have two clients accessing the same project over a SAN, you’d see additional options? The “Automatic Crossfade Duration” also seems interesting – but again, I couldn’t actually work out what it did. Like the name suggests – these are all DEBUG functions – so unless you’re an Apple developer with access to the FCPX code, they’re not very useful or helpful.

Once you’ve finished playing – you can simply [trash your FCPX preferences](http://support.apple.com/kb/ts3893) to undo all the debug preferences changes (keeping in mind this will reset ALL the preferences for FCPX). It’s important to note that Mavericks seems to do some caching with plist files – so you actually need to do a restart for the plist files to actually “reset”. You can then delete the duplicated Final Cut Pro application, and go back to the way things were.

Another way to activate these hidden features is to simply modify your own FCPX preferences file.

If you open **~/Library/Preferences/com.apple.FinalCut.plist** in your [preferred editor](http://support.apple.com/kb/ht4850), you can add these secret options to activate hidden things:

```
<key>FFAllowOverlappedEdits</key>
<true/>
<key>FFAudioDisableWaveformDrawing</key>
<true/>
<key>FFAudioEffectDisableLatencyCompensationKey</key>
<true/>
<key>FFAudioWaveformsDisplayLinear</key>
<true/>
<key>FFAutomaticCrossfadeDuration</key>
<string>1000.0</string>
<key>FFBGRenderShowDescriptions</key>
<true/>
<key>FFBrowseSequenceContent</key>
<true/>
<key>FFCheckSequenceForValidity</key>
<true/>
<key>FFColorDisplayRegionPicker</key>
<true/>
<key>FFDebugDrawing</key>
<true/>
<key>FFDrawConformHint</key>
<true/>
<key>FFDrawInterlaced</key>
<integer>2</integer>
<key>FFEnableFaceRecognitionFeatures</key>
<true/>
<key>FFEnableGuards</key>
<true/>
<key>FFEnableScreenSizeOverride</key>
<true/>
<key>FFEnableSequenceFramespreads</key>
<true/>
<key>FFFaceRecognitionOnlyShowOSCOnRollover</key>
<true/>
<key>FFHeliumNumCPUs</key>
<integer>5</integer>
<key>FFLogHeliumGraphs</key>
<true/>
<key>FFLogHeliumGraphsDotFile</key>
<true/>
<key>FFLogHeliumRenderStats</key>
<true/>
<key>FFNearestNeighborKey</key>
<true/>
<key>FFOpticalFlowAnalyzer</key>
<integer>1</integer>
<key>FFPlayAllFramesQuickly</key>
<true/>
<key>FFPlayerWarnAboutExcessiveDiskDrops</key>
<true/>
<key>FFSequenceAutoPulldownDetection</key>
<true/>
<key>FadeInGhostWaveform</key>
<true/>
<key>NSProDebugPaneEmphasis</key>
<true/>
<key>NSProHighlightFPOPreference</key>
<true/>
<key>PERFORMANCE_MONITORING</key>
<true/>
<key>PEShowWorkInProgressTools</key>
<true/>
```

Again, I don’t think actually having access to these debug features is particularly useful, and I wouldn’t recommend messing with them on a production system – but it’s a bit of fun none-the-less.

If anyone has FCPX running on a SAN and works out how to activate and use the “Guards” functionality – let me know! Hopefully this is feature we’ll see in a future FCPX release (ideally with iCloud integration!).

![secret_fcpx_settings](/static/blog/01-secret_fcpx_settings.jpg)