# Workflow Extensions

This section of the site is dedicated to **Workflow Extensions**.

You can find the official [Workflow Extensions documentation](https://developer.apple.com/documentation/professional_video_applications/workflow_extensions?language=objc).

If you want a real-world example of a Workflow Extension, you can look at [CommandPost](https://github.com/CommandPost/CommandPost-App/tree/master/CommandPost%20Workflow%20Extension).

---

## Frequently Asked Questions

### Why do developers make Workflow Extension icon's greyscale?

Apple recommends using a greyscale icon - but why?

Most Workflow Extensions icons are greyscale - for example:

![](/static/workflow-extensions-list.png)

However, SOME are in colour.

So why do third party developers make greyscale icons?

If the user only has a single Workflow Extension installed, rather than having a Dropdown List, Final Cut Pro will just display that single Workflow Extension in the toolbox.

For example, here's BRAW Toolbox:

![](/static/braw-toolbox-workflow-extension-icon.png)

This looks good.

But if we look at Audio Design Desk's DAWBridge, which has a coloured icon:

![](/static/dawbridge-workflow-extension-icon.png)

It looks like this in Final Cut Pro when it's the only Workflow Extension installed:

![](/static/dawbridge-bad-workflow-extension-icon.png)

Given this, we strongly recommend you use a greyscale icon for Workflow Extensions.

---

### Unknown argument: '-e_ProExtensionMain'

If you're a developer who works with Final Cut Pro **Workflow Extensions**, you may have noticed that things break when you upgrade to **macOS Sequoia 15.0** and **Xcode 16.0**. Doh!

Thankfully the fix is fairly simple once you know the trick...

If you're setting this:

![](/static/workflow-extension-error-1.jpg)

Simply change this:

![](/static/workflow-extension-error-2.png)

To this:

![](/static/workflow-extension-error-3.png)

This is because in Xcode 16.0, a clang fix was made that now requires a space after the entry linker option `-e` to disambiguate this option from other options that start with the letter `e`.

To fix the error, you simply need to separate out the `-e` from `_ProExtensionMain` in the **Other Linker Flags** build setting.

As of today, the [Workflow Extensions SDK](https://developer.apple.com/documentation/professional-video-applications/workflow-extensions?language=objc) hasn't been updated, but hopefully we'll see this fixed in the Xcode template soon.

Thanks to Phil in the [CocoaHeads](http://cocoaheads.org/au/Melbourne/index.html) community for helping me work this out!

---

{{ include "contribute-learn-more" }}
