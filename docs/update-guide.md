# Update Guide

All software has bugs, and new updates to software can sometimes have regressions that break features that were working fine in previous versions.

Unfortunately when it comes to apps on the Apple App Store, you can only ever download the latest software, and you don't have any access to older versions.

This means, if you're a professional Final Cut Pro editor, you need to be very careful about keeping copies of older versions of Final Cut Pro, Compressor and Motion as backups incase there's bugs, but also incase you have to access older projects in the future that may not open in the latest version of Final Cut Pro.

You can learn more about backing up Final Cut Pro on Apple's site [here](https://support.apple.com/en-au/HT203010).

You can read our current recommendations below:

---

## Final Cut Pro 10.6.9

**Final Cut Pro 10.6.9** was released on the Mac App Store on 19th September 2023.

This update drops support for macOS Monterey - only macOS Ventura and Sonoma are now supported.

If you're currently using **Final Cut Pro 10.6.6 or earlier** we recommend sticking with that for the time being.

**Final Cut Pro 10.6.8** resolved some issues with the Viewer going black and various crashes, but **Final Cut Pro 10.6.9** breaks all third party trackers using Title Templates.

FxFactory writes:

> In what is now an established pattern, Apple released an update to Final Cut Pro 10.6.9 that contains a rather horrible regression. As they fixed the “Opacity” slider bug affecting some Motion Templates, they broke something worse.
>
> Many of our products rely on what they call the “Analysis API” to analyze sequences of frames. Most products do so within the context of a Title Template, because developers and users have come to prefer Title-layer effects above all else.
> In Final Cut Pro 10.6.9, any Title-layer effect that attempts to perform analysis via an object tracker or face detector no longer works. As the status window will clearly show you, the host app is feeding the top-right 1/4 of the frame. This obviously makes the algorithm fail.
>
> In the coming days we are going to face a disaster, as thousands of users with products based on analysis will fail."
>
> We request that you file feedback [here](https://www.apple.com/feedback/finalcutpro.html).
>
> Next, submit a bug report [here](https://feedbackassistant.apple.com/).

Read more about this bug [here](https://fxfactory.com/news/finalcutpro-10.6.9-skip-the-update/).

---

## Final Cut Pro 10.6.8

**Final Cut Pro 10.6.8** has been released on the Mac App Store on 1st August 2023.

If you're currently using **Final Cut Pro 10.6.6 or earlier** we recommend sticking with that for the time being.

However, if you're using **Final Cut Pro 10.6.7** we recommend updating, as it resolves some issues with the Viewer going black and various crashes.

You can learn more about the issues in **Final Cut Pro 10.6.7** [here](https://github.com/CommandPost/FCPCafe/issues/223).

Additionally, **Final Cut Pro 10.6.7** and **Final Cut Pro 10.6.8** use a newer Library format than **Final Cut Pro 1.1 (for iPad)**.

This means that if you want to use [Transfer Toolbox](https://transfertoolbox.io) to go from Mac to iPad, you should keep using **Final Cut Pro 10.6.6 (for Mac)**.