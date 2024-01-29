# Workflow Extensions

This section of the site is dedicated to **Workflow Extensions**.

You can find the official Workflow Extensions documentation [here](https://developer.apple.com/documentation/professional_video_applications/workflow_extensions?language=objc).

If you want a real-world example of a FxPlug4 application, you can look at [CommandPost](https://github.com/CommandPost/CommandPost-App/tree/master/CommandPost%20Workflow%20Extension).

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

{{ include "contribute-learn-more" }}
