# Bug Tracker

!!!success Want to add something to the Bug Tracker?
Create a free GitHub account then [create a ticket](https://github.com/CommandPost/FCPCafe/issues/new?assignees=&labels=&projects=&template=bug-report.md&title=)!
!!!

This page is dedicated to keeping track of the latest Final Cut Pro bugs and issues.

**The only way Apple's management will put bug fixes and feature requests into their engineers work queue is if they have a Feedback Request about it.**

You can read our [recommendations on if you should update Final Cut Pro](/update-guide/).

We keep track of these bugs via our [GitHub issues site](https://github.com/CommandPost/FCPCafe/issues).

[GitHub](https://github.com) is a **safe and secure** developers platform used by **over 73 million users** worldwide.

To submit a new bug report, simply sign up for a **free GitHub account** and [post an issue](https://github.com/CommandPost/FCPCafe/issues/new?assignees=&labels=&projects=&template=bug-report.md&title=).

If you'd prefer not to use GitHub, then you can always email us your bug report: [support@latenitefilms.com](mailto:support@latenitefilms.com)

Whenever posting a new bug/issue to GitHub, we also submit feedback directly to Apple via [Feedback Assistant](https://feedbackassistant.apple.com).

You can also send feedback directly to the Final Cut Pro team via their [Feedback Form](https://www.apple.com/feedback/finalcutpro/), however, unlike Feedback Assistant you can't track your request or add additional information after submitting, nor can you have a discussion with the Apple team via the comments - so we generally recommend you use Feedback Assistant as well.

---

### Recently Added

Here's a list of the **30 most recently added** Final Cut Pro bug reports:

{{ include "bugtracker-recent" }}

The above list is pulled from our [GitHub issues site](https://github.com/CommandPost/FCPCafe/issues).

---

### Most Popular

Here's a list of the **30 most popular** Final Cut Pro bug reports:

{{ include "bugtracker-reactions" }}

The above list is pulled from our [GitHub issues site](https://github.com/CommandPost/FCPCafe/issues).

---


### Final Cut Pro 11

Here's a list of the **30 most recently added** Final Cut Pro 11 bug reports:

{{ include "bugtracker-latest" }}

The above list is pulled from our [GitHub issues site](https://github.com/CommandPost/FCPCafe/issues).

---

### Final Cut Pro 10.8.1

Here's a list of the **30 most recently added** Final Cut Pro 10.8.1 bug reports.

Some of these bugs may eventually be migrated to the Final Cut Pro 11 list once confirmed.

{{ include "bugtracker-previous" }}

The above list is pulled from our [GitHub issues site](https://github.com/CommandPost/FCPCafe/issues).

---

### Finding Crash Logs

You can find previous crash logs in this folder:

`~/Library/Logs/DiagnosticReports/`

You can paste the above path into Finder's **Go > Go to Folder...** menubar tool to reveal this hidden folder.

Alternatively, you can find your **User Library** (as opposed to the System Library) by holding down **OPTION** when you click the **Go** menubar item from Finder.

If the crash logs have already been uploaded to Apple, they will be in a folder called `Retired`.

Crash logs will either have a `.ips` or `.diag` file extension.

For example:

![](/static/crash-log-folder.jpg)

Because crash logs are really large, the easiest way to share them on GitHub (and with Apple via feedback) is via a [GitHub Gist](https://gist.github.com).

---

### Final Cut Pro Diagnostics Bundle

If you hold down **OPTION** when clicking the **Help** menubar item in Final Cut Pro, you'll see a new **Gather App Diagnostics** option magically appear:

![](/static/gather-app-diagnostics.jpeg)

When you click this, wait a few minutes and eventually a Finder window will popup revealing a file with a filename like `VideoAppDiagnostics-FinalCut-2023-12-08-083149.tar.gz`.

When you unzip this file, it contains:

- **AppInfo:** The version information from Final Cut Pro.
- **Caches:** Your cache files. They will be hidden - press COMMAND+SHIFT+DOT to show.
- **Preferences:** Your Final Cut Pro Preferences.
- **Projects:** Copies of your most recent Final Cut Pro libraries.
- **SystemLog:** Any system logs.
- **SystemProfile:** Your system profile.
- **WindowLayouts:** Your Final Cut Pro Custom Workspaces.

You can share this file with Apple, a third party developer or FCP Cafe's Bug Tracker, and it contains all the information someone would ever need to reproduce/fault-find a bug or crash.

---

### Third Party Software

It's important to note that since **Final Cut Pro 10.6.6** Apple has dropped **FxPlug3** support.

When the effect or look you want to achieve can't be created with the filters or generators provided with Final Cut Pro or Motion, the FxPlug software development kit (SDK) allows you to write your own custom visual effects.

FxPlug is a compact, powerful image-processing plug-in architecture that lets you create unique, hardware-accelerated or CPU-based effects plug-ins with customized UI and onscreen controls.

In **Final Cut Pro 10.6.5** and earlier, **FxPlug3** plugins ran "inside" Final Cut Pro, and a bad plugin could crash Final Cut Pro.

However, since **Final Cut Pro 10.6.6**, only **FxPlug4** is supported, and all FxPlug4 plugins are run "out of process" - meaning they're effectively their own application, and if they crash, Final Cut Pro doesn't.

Generally speaking if a FxPlug4 plugin crashes, then Final Cut Pro will just try restart it, and if it crashes 5 times or so, then it'll display the "this plugin is not responding" message.

All **Workflow Extensions** also run out of process.

For example, you can see all the different processes in Activity Monitor:

![](../static/fcp-activity-monitor.png)

If you manually try and force quit a process, you'll see Final Cut Pro start it up again when needed.

What this means is that since **Final Cut Pro 10.6.6**, if Final Cut Pro crashes, it's NOT a third party FxPlug4 effect or a Workflow Extension - it's something in Apple's own code, and there's nothing third party developers can do about it, so there's no point emailing FxFactory, CoreMelt, MotionVFX, etc. to complain, as they'll just have to relay this information to Apple anyway.

---

### Analysing Crash Logs

Joe Marler has [written some detailed information](https://github.com/CommandPost/FCPCafe/issues/327#issuecomment-1906883104) about how to analyse crash logs in one of the bug reports, which I've added here as it's such a good reference:

> Was the export to a local APFS or HFS+ disk file on a volume with plenty of space? Was it exported to a NAS location?
>
> Immediately after one of these happens, it would be interesting to hold down the **OPTION** key then press **Help > Gather App Diagnostics** from the Final Cut Pro menubar and examine the logs.
>
> If that doesn't reveal anything, it's possible to export a more verbose FCP log using this command:
>
> `sudo log show --process "Final Cut Pro" > ~/Documents/LogShowFCP.txt`
>
> The text file can be large, so using BBEdit or similar is best. Look for items nearby the timestamp of the crash.
>
> If that doesn't reveal anything, it's possible to extract a range of the entire macOS log if done right after the crash. This can be very large, so should be handled with BBEdit or similar, and may require multiple filtering passes.
>
> Syntax to extract all events from prior 60 seconds of MacOS log to a text file.
>
> Assumes the event of interest (such as FCP crash) happened within that period:
>
> `sudo log show --last 60s > ~/Documents/LogShow60s.txt`
>
> Extract last 5 minutes of MacOS log (even larger):
>
> `sudo log show --last 5m > ~/Documents/LogShow5m.txt`
>
> If the event of interest happened before that, it's possible to give a start/end range for 'log show'.
>
> The below extracts to a text file all events in the MacOS log over a 5 minute period starting at 08:00.
>
> **Note:** the log is greatly pruned after a few hours from present time. So you can't see highly detailed data from the prior day.
>
> `log show --start '2024-01-22 14:00:00' --end '2024-01-22 14:05:00' > ~/Documents/LogShow1400_plus5m_yesterday.txt`
>
> If the log is too verbose to make sense of, it's possible in BBEdit to use **progressive exclusion**, whereby all lines matching an iterative series of search strings will be excluded...
>
> In BBEdit search dialog, enable `grep` and `show matches` text boxes.
>
> Enter this in Find box, where `exclusion_string1`, etc are strings contained in the lines you wish to discard. You can add more exclusion strings, separating each by a `|` (SHIFT+backslash key, which is a logical 'OR').
>
> `^(?![^\n]*(exclusion_string_1|exclusion_string_2)).+$`
>
> BBEdit will immediately color-code in orange the lines matching the exclusion list, IOW those you want to discard.
>
> Therefore to discard the matched lines (which preserves all unexcluded lines), press **Extract** button.
>
> Repeat above procedure, on each successive extract, adding new exclusion strings to omit those lines from subsequent extracts.
>
> BBEdit dynamically shows you in real time the matched vs unmatched lines as you type the grep command, therefore before pressing the "Exclude" button, you already know what to expect.
>
> You can copy/paste strings from the extract results to the Find dialog, to avoid making a typo.
>
> If you save the grep strings corresponding to common "noise" log messages, those can all be concatenated to a single larger compound exclusion term which you can copy/paste to a new BBEdit log filtering session.

Thanks Joe!

---

!!!
Want to contribute? [Learn more here!](/contribute/)
!!!