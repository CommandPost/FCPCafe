# Update Guide

All software has bugs, and new updates to software can sometimes have regressions that break features that were working fine in previous versions.

Unfortunately when it comes to apps on the Apple App Store, you can only ever download the latest software, and you don't have any access to older versions.

This means, if you're a professional Final Cut Pro editor, you need to be very careful about keeping copies of older versions of Final Cut Pro, Compressor and Motion as backups incase there's bugs, but also incase you have to access older Libraries in the future that may not open in the latest version of Final Cut Pro.

You can learn more about [backing up Final Cut Pro on Apple's site](https://support.apple.com/HT203010).

You can read our current recommendations below:

---

## Summary

**Last Updated:** 16th November 2024

For most users, on modern Apple Silicon Mac's **Final Cut Pro 10.8.1** is rock solid.

**Final Cut Pro 11.0.0** is brand new - but from early reports, aside from some weirdness with Magnetic Mask and collaboration - everything else seems fairly solid.

**Final Cut Pro 10.8** is very similar to Final Cut Pro 10.7.1, so if you're still on 10.7.1 on a major project, there's no rush to update.

If you're still on **Final Cut Pro 10.6.5** or earlier on **Intel** machines - just stay there until you buy an Apple Silicon Mac.

If you're currently on **Final Cut Pro 10.6.10**, you can safely upgrade to **Final Cut Pro 10.7**.

If you're currently on **Final Cut Pro 10.7**, you can safely update to **Final Cut Pro 10.7.1**.

If you're on **macOS Ventura** - you should be fine to update to **macOS Sonoma**.

If you're on **macOS Sonoma** - you should be fine to update to **macOS Sequoia**.

You can read full answers below...

_FWIW - I've put my 2021 16-inch MacBook Pro (M1 Max, 64GB RAM, 8TB SSD) with Sonoma 14.1.2 and FCPX 10.7 through hell since the 10.7 release, and it's been rock solid. Zero crashes. Zero issues. Faster exports. More responsive. Rock solid. I was previously on Monterey & 10.6.8, but Sonoma + Final Cut Pro 10.7 seems way more solid and reliable._

---

## Final Cut Pro 11

**Final Cut Pro 11** was released at the Final Cut Pro Creative Summit on 13th November 2024.

One interesting thing about the new **Magnetic Mask** in Final Cut Pro is that it saves all the analyse data in a folder called `VideoSegmentationFiles` within the Final Cut Pro Library bundle.

You can't move it outside the bundle - it needs to live inside the Library bundle (unlike other cache files). This is super interesting, and may present some challenges with collaborative workflows (i.e. with Postlab).

**Magnetic Mask** data is also not transferred with FCPXML - so if you export a project/timeline containing a clip with a Magnetic Mask, then re-import the FCPXML, the mask won't correctly come across - in fact, you'll just get an empty effect.

Unfortunately in Final Cut Pro 11, **Magnetic Masks** don't work with **Send to Compressor**.

This has been reported to Apple.

You can follow along via our [FCP Cafe bug report](https://github.com/CommandPost/FCPCafe/issues/419).

![](/static/magnetic-mask-fail.jpeg)

There are some early reports of issues with Custom Overlays and exporting PNGs - but these are not yet confirmed.

We've updated to Final Cut Pro 11 and haven't had any major issues yet - but tread with care, as this is a major update, as Final Cut Pro is now sandboxed.

{.compact}
| Plugin                   | Known Issues                                                                                            |
|--------------------------|---------------------------------------------------------------------------------------------------------|
| BRAW Toolbox             | No Known Issues                                                                                         |
| Capacitor                | **Requires an update to support FCPXML v1.13**                                                          |
| Color Finale             | No Known Issues                                                                                         |
| CommandPost              | **Requires an update to support FCPXML v1.13**                                                          |
| CoreMelt                 | No Known Issues                                                                                         |
| evrExpanse               | No Known Issues                                                                                         |
| Fast Collections         | No Known Issues                                                                                         |
| FxFactory                | No Known Issues                                                                                         |
| Generic Motion Templates | No Known Issues                                                                                         |
| Gyroflow Toolbox         | No Known Issues                                                                                         |
| Hedge Arctic             | **Use Arctic v24.3**                                                                                    |
| LUT Robot                | No Known Issues                                                                                         |
| Marker Toolbox           | No Known Issues                                                                                         |
| MotionVFX                | No Known Issues                                                                                         |
| Recall Toolbox           | No Known Issues                                                                                         |

---

## macOS Sequoia 15

We know a lot of people that used Final Cut Pro right throughout the macOS Sequoia beta period without any major issues.

If you're running macOS Sonoma, we expect macOS Sequoia to be very similar to Final Cut Pro users.

However, as macOS Sequoia 15.0 is brand new - take care, and don't rush to update unless you need to. Make sure you have backups!

Sweetwater also has an incredibly detailed [macOS Sequoia Compatibility Guide](https://www.sweetwater.com/sweetcare/articles/macos-sequoia-compatibility-guide/) for editors that also use DAWs like Logic Pro.

We have had no issues with macOS Sequoia 15.0.0 or 15.0.1.

---

## macOS Sonoma 14

**iZotope** is currently warning against it's users upgrading to **macOS Sonoma 14.4**.

They write:

> Apple has recently released the macOS 14.4 Sonoma update, which has resulted in compatibility issues for plug-ins protected by PACE / iLok with Audio Units host DAWs, such as Logic Pro, on Apple silicon Macs. Users have reported encountering problems with these plug-ins following the installation of the update, including DAW crashes.
>
> If you are using Audio Units on an Apple silicon computer, it is advisable to postpone the macOS update until further information becomes available. We will keep you informed as soon as a resolution is found.

See [iZotope's support article about issues with macOS 14.4 Sonoma](https://support.izotope.com/hc/en-us/articles/17519558551581-Issues-with-macOS-14-4-Sonoma).

Generally speaking, upgrading from **macOS Ventura to macOS Sonoma** is fairly smooth sailing, with no major widespread issues reported.

However, it's worth reading Larry Jordan's post on [Don’t Hurry to Upgrade](https://larryjordan.com/articles/caution-dont-hurry-to-upgrade/).

If you're still on much older version of macOS and Final Cut Pro, such as **Final Cut Pro 10.6.5** - keep in mind that FxPlug3 was depreciated and removed in Final Cut Pro 10.6.6, so older plugins may stop working.

Keep an eye on the [Final Cut Pro bug tracker](/bugtracker/) for more niche issues too before updating.

If you use **MotionVFX**, mLUT, mFlare 2, mFilmLook, mMuppet & mTracker all requires updates for macOS Sonoma.

**MotionVFX** also reports on [Twitter](https://twitter.com/motionVFX/status/1724434901804458426):

> ⚠️ On another note, If you're having issues with our products on macOS Sonoma (mainly red screen in FCP), please make sure to update mInstaller (3.0.2 version) 🚀Only once that's done, uninstall the product and install it again (don't use the "repair" option this time) 😉

If you can't use your camera or video output device after updating to **macOS Sonoma 14.1**, Apple has released a workaround.

Starting in **macOS Sonoma 14.1**, cameras and video output devices that don't use modern system extensions won't be available to use unless you restore the legacy settings. You can read [Apple's support article about Sonoma 14.1 and legacy video devices](https://support.apple.com/HT213969).

---

## Final Cut Pro 10.8.1

**Final Cut Pro 10.8.1** was released on the Mac App Store on 13th August 2024.

This is just a minor bug fix release, so if you're already on 10.8, it's worth updating.

So far there's no reports of things breaking between 10.8 and 10.8.1.

{.compact}
| Plugin                   | Known Issues                                                                                            |
|--------------------------|---------------------------------------------------------------------------------------------------------|
| BRAW Toolbox             | No Known Issues                                                                                         |
| Capacitor                | No Known Issues                                                                                         |
| Color Finale             | No Known Issues                                                                                         |
| CommandPost              | No Known Issues                                                                                         |
| CoreMelt                 | No Known Issues                                                                                         |
| evrExpanse               | No Known Issues                                                                                         |
| Fast Collections         | No Known Issues                                                                                         |
| FxFactory                | No Known Issues                                                                                         |
| Generic Motion Templates | No Known Issues                                                                                         |
| Gyroflow Toolbox         | No Known Issues                                                                                         |
| Hedge Arctic             | No Known Issues                                                                                         |
| LUT Robot                | No Known Issues                                                                                         |
| Marker Toolbox           | No Known Issues                                                                                         |
| MotionVFX                | No Known Issues                                                                                         |
| Recall Toolbox           | No Known Issues                                                                                         |

---

## Final Cut Pro 10.8.0

**Final Cut Pro 10.8** was released on the Mac App Store on 20th June 2024.

One potentially annoying bug that's been reported is:

- [No audio when going frame-by-frame via arrow keys](https://github.com/CommandPost/FCPCafe/issues/363)

{.compact}
| Plugin                   | Known Issues                                                                                            |
|--------------------------|---------------------------------------------------------------------------------------------------------|
| BRAW Toolbox             | Use BRAW Toolbox v1.3.8 or later                                                                        |
| Capacitor                | Use Capacitor v1.0.1 or later                                                                           |
| Color Finale             | No Known Issues                                                                                         |
| CommandPost              | Use CommandPost v1.4.26 or later                                                                        |
| CoreMelt                 | No Known Issues                                                                                         |
| evrExpanse               | Use evrExpanse v4.3.8 or later                                                                          |
| Fast Collections         | No Known Issues                                                                                         |
| FxFactory                | No Known Issues                                                                                         |
| Generic Motion Templates | No Known Issues                                                                                         |
| Gyroflow Toolbox         | Use Gyroflow Toolbox v1.1.5 or later                                                                    |
| Hedge Arctic             | Use Arctic v24.2.0 or later                                                                             |
| LUT Robot                | Use LUT Robot v1.0.1 or later                                                                           |
| Marker Toolbox           | No Known Issues                                                                                         |
| MotionVFX                | Use mInstaller to update to the latest plugins                                                          |
| Recall Toolbox           | No Known Issues                                                                                         |

---

## Final Cut Pro 10.7.1

**Final Cut Pro 10.7** was released on the Mac App Store on 30th November 2023.

If you're currently using **Final Cut Pro 10.7** on macOS Ventura or Sonoma, there are currently no major reported issues that would prevent you from updating.

However, there are some **bugs** that [we reported in the news feed](/news/20231202/), so if you're on an earlier version (such as Final Cut Pro 10.6.5), it may be wise to just stay there for now.

{.compact}
| Plugin                   | Known Issues                                                                                            |
|--------------------------|---------------------------------------------------------------------------------------------------------|
| BRAW Toolbox             | No Known Issues                                                                                         |
| Color Finale             | Use Color Finale v2.7.3 or later                                                                        |
| CommandPost              | No Known Issues                                                                                         |
| CoreMelt                 | No Known Issues                                                                                         |
| Fast Collections         | No Known Issues                                                                                         |
| FxFactory                | _Some issues with Titles not respecting parameters when rendering._                                     |
| Generic Motion Templates | No Known Issues                                                                                         |
| Gyroflow Toolbox         | No Known Issues                                                                                         |
| Marker Toolbox           | No Known Issues                                                                                         |
| MotionVFX                | Update to latest versions of plugins                                                                    |
| Recall Toolbox           | No Known Issues                                                                                         |

---

## Final Cut Pro 10.7

**Final Cut Pro 10.7** was released on the Mac App Store on 30th November 2023.

If you're currently using **Final Cut Pro 10.6.10** on macOS Ventura or Sonoma, there are currently no major reported issues that would prevent you from updating.

However, there are some **bugs** that [we reported in the news feed](/news/20231202/), so if you're on an earlier version (such as Final Cut Pro 10.6.5), it may be wise to just stay there for now.

{.compact}
| Plugin                   | Known Issues                                                                                            |
|--------------------------|---------------------------------------------------------------------------------------------------------|
| BRAW Toolbox             | No Known Issues                                                                                         |
| Color Finale             | Use Color Finale v2.7.3 or later                                                                        |
| CommandPost              | No Known Issues                                                                                         |
| CoreMelt                 | No Known Issues                                                                                         |
| Fast Collections         | No Known Issues                                                                                         |
| FxFactory                | _Some issues with Titles not respecting parameters when rendering._                                     |
| Generic Motion Templates | No Known Issues                                                                                         |
| Gyroflow Toolbox         | No Known Issues                                                                                         |
| Marker Toolbox           | No Known Issues                                                                                         |
| MotionVFX                | Update to latest versions of plugins                                                                    |
| Recall Toolbox           | No Known Issues                                                                                         |

---

## Final Cut Pro 10.6.10

**Final Cut Pro 10.6.10** was released on the Mac App Store on 6th October 2023.

FxFactory has confirmed that this fixes object tracking and face recognition for any FxFactory plug-ins working on the Title layer. Woohoo!

If you're currently using **Final Cut Pro 10.6.9** on macOS Ventura or Sonoma, there are currently no major reported issues that would prevent you from updating.

{.compact}
| Plugin                   | Known Issues                                                                                            |
|--------------------------|---------------------------------------------------------------------------------------------------------|
| BRAW Toolbox             | No Known Issues                                                                                         |
| Color Finale             | [Requires Color Finale 2.7.0 Build 552](https://colorfinale.com)                                        |
| CommandPost              | No Known Issues                                                                                         |
| CoreMelt                 | No Known Issues                                                                                         |
| Fast Collections         | No Known Issues                                                                                         |
| FxFactory                | No Known Issues                                                                                         |
| Generic Motion Templates | No Known Issues                                                                                         |
| Gyroflow Toolbox         | No Known Issues                                                                                         |
| Marker Toolbox           | No Known Issues                                                                                         |
| MotionVFX                | mLUT, mFlare 2, mFilmLook, mMuppet & mTracker all requires updates for macOS Sonoma                     |
| Recall Toolbox           | No Known Issues                                                                                         |

---

## Final Cut Pro 10.6.9

**Final Cut Pro 10.6.9** was released on the Mac App Store on 19th September 2023.

This update drops support for macOS Monterey - only macOS Ventura and Sonoma are now supported.

This update unfortunately breaks any FxPlug4 effects that use the [Analysis API](https://developer.apple.com/documentation/professional_video_applications/fxanalysisapi_v2?language=objc) on Titles.

**FxFactory** writes:

> Final Cut Pro 10.6.9 is now available on the Mac App Store. This version breaks all FxFactory products that perform object tracking or face recognition through the Title layer.
>
> Regrettably this constitutes the entirety of our catalog featuring object tracking or face detection, since developers and users alike have come to favor the Title layer for its flexibility.
>
> Because of the large number of products affected, we recommend that you do not apply this update.

Read more [about this bug in FxFactory's alert](https://fxfactory.com/news/finalcutpro-10.6.9-skip-the-update/).

If you use FxFactory Trackers, we recommend sticking with an earlier version of Final Cut Pro for the time being.

CoreMelt's Tracking Tools are not affected, as they don't use the Analysis API on their Title effects.

If you're currently using **Final Cut Pro 10.6.8** on macOS Ventura or Sonoma, and don't use FxFactory's Trackers, then there are currently no major reported issues that would prevent you from updating.

Motion templates with an applied **Align To** behavior also display an incorrect animation.

{.compact}
| Plugin                   | Known Issues                                                                                            |
|--------------------------|---------------------------------------------------------------------------------------------------------|
| BRAW Toolbox             | No Known Issues                                                                                         |
| Color Finale             | [Requires Color Finale 2.7](https://colorfinale.com)                                                    |
| CommandPost              | No Known Issues                                                                                         |
| CoreMelt                 | No Known Issues                                                                                         |
| FxFactory                | [Tracking using Title Templates Broken](https://fxfactory.com/news/finalcutpro-10.6.9-skip-the-update/) |
| Generic Motion Templates | No Known Issues                                                                                         |
| Gyroflow Toolbox         | No Known Issues                                                                                         |
| Marker Toolbox           | No Known Issues                                                                                         |
| MotionVFX                | [Tracking using Title Templates Broken](https://fxfactory.com/news/finalcutpro-10.6.9-skip-the-update/) |

---

## Final Cut Pro 10.6.8

**Final Cut Pro 10.6.8** was released on the Mac App Store on 1st August 2023.

If you're currently using **Final Cut Pro 10.6.6 or earlier** we recommend sticking with that for the time being, as this release has a [lot of unreproducible crashes](https://github.com/CommandPost/FCPCafe/issues/238).

However, if you're using **Final Cut Pro 10.6.7** we recommend updating, as it resolves some issues with the Viewer going black and various crashes.

You can learn more about [the issues in **Final Cut Pro 10.6.7**](https://github.com/CommandPost/FCPCafe/issues/223).

{.compact}
| Plugin                   | Known Issues                                                                                            |
|--------------------------|---------------------------------------------------------------------------------------------------------|
| BRAW Toolbox             | No Known Issues                                                                                         |
| Color Finale             | No Known issues                                                                                         |
| CommandPost              | No Known Issues                                                                                         |
| CoreMelt                 | No Known Issues                                                                                         |
| FxFactory                | No Known Issues                                                                                         |
| Generic Motion Templates | No Known Issues                                                                                         |
| Gyroflow Toolbox         | No Known Issues                                                                                         |
| Marker Toolbox           | No Known Issues                                                                                         |
| MotionVFX                | No Known Issues                                                                                         |