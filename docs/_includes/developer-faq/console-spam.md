### Console spam from FxPlug4

When you create an FxPlug4 plugin, you'll see a lot of these messages in Console:

![](/static/fcpx-console-spam.png)

Unfortunately, there's no way to stop it. It’s harmless, though.

I think what it’s trying to tell us is that the FxPlug4 process doesn’t have some files related to the UI that Apple display in Motion and Final Cut Pro.

The reason it cares about this is because they use `ViewBridge` to show `NSView`'s from your process in their process. But because of the way they show them, it ends up not mattering.

I wish there were a way to turn off the spew, but it’s in macOS itself.