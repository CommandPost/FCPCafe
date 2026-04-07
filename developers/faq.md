# Frequently Asked Questions

This page is dedicated to answering the most common developer questions about FxPlug4, Workflow Extensions, etc.

You can use the Search Tool at the top right of this page to search the FAQ.

---

!!!
Something missing or have a question? [Learn more here!](/contribute/)
!!!

---

## C

### Console spam from FxPlug4

When you create an FxPlug4 plugin, you'll see a lot of these messages in Console:

![](/static/fcpx-console-spam.png)

Unfortunately, there's no way to stop it. It’s harmless, though.

I think what it’s trying to tell us is that the FxPlug4 process doesn’t have some files related to the UI that Apple display in Motion and Final Cut Pro.

The reason it cares about this is because they use `ViewBridge` to show `NSView`'s from your process in their process. But because of the way they show them, it ends up not mattering.

I wish there were a way to turn off the spew, but it’s in macOS itself.

---

## W

### What is disableDRT in a FCPXML?

**DRT** is **dynamic range tracking**.

It’s an internal name the Final Cut Pro team use for the new automatic HDR settings.

The **disableDRT** setting in the FCPXML tells the app not to enable the automatic HDR settings on older projects created before the setting existed.

If you have existing projects and want to ensure they render the same as they did in previous versions, you don’t want to touch that value.

---

!!!
Something missing or have a question? [Learn more here!](/contribute/)
!!!

---

## Discuss this page

<script src="https://giscus.app/client.js"
        data-repo="CommandPost/FCPCafe"
        data-repo-id="MDEwOlJlcG9zaXRvcnk5NTAwMjEwMg=="
        data-category="Website Discussions"
        data-category-id="DIC_kwDOBamd9s4CW0qy"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="dark"
        data-lang="en"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
</script>
