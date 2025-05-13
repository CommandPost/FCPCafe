---
title: Calculating Timecode in Google Sheets
date: 2014-06-24
author: Chris Hocking
layout: blog
---
# Calculating Timecode in Google Sheets

**Written by Chris Hocking on 24th June 2014**

One of the most popular blog posts we’ve ever done has been on [Calculating Timecode in Excel](./../calculating-timecode-in-excel/). Even though it’s now around 3 years old, it still gets a constant amount of views each week.

Although the Excel article is still relevant and useful – personally, I don’t actually use Microsoft Excel very often any more, much preferring Apple’s [Numbers](https://www.apple.com/au/mac/numbers/) (which comes free with every [Mac](https://www.apple.com/au/creativity-apps/mac/); and iPad/iPhone for that matter). Unfortunately however, getting timecode to work successfully and reliably in Numbers has never been something I’ve been able to fully accomplish. Hopefully one day someone puts together some incredibly clever [AppleScripts](http://www.macworld.com/article/2090831/applescript-makes-a-comeback-in-numbers/) that add this functionality, however in the meantime…

[Google Docs](https://docs.google.com/) is a free, web-based office suite offered by Google within its [Google Drive](https://support.google.com/drive/answer/2424384?hl=en) service – allowing you to create and share your work online and access your documents from anywhere. As part of that suite, [Google Sheets](http://www.google.com.au/sheets/about/) is basically Google’s version of Excel/Numbers. It’s web-based, but there are also iOS and Android versions that all play nicely together. It’s also completely compatible with Excel and Numbers – and it’s free.

What’s REALLY exciting though, is that the incredibly clever Stockholm-based [Henrik Cednert](https://twitter.com/NEO_AMiGA) has put together an awesome script (inspired by [Nuke/Hiero Timecode Calculator](http://www.nukepedia.com/hiero/python/nuke/hiero-timecode-calculator)) that allows you to calculate timecode within a Google Sheets document. It’s early days, and the code does not currently support obscure non-even frame rates (i.e. 23.976fps) – but apart from that, it’s incredibly simple and powerful, with support for timecode addition, subtraction, division, multiplication, percentages as well as timecode conversion (i.e. 24fps to 25fps). If you’re in 25fps land, this is an incredibly useful tool that you can make use of today. For assistant editors who have to spend a lot of time crunching timecode within a spreadsheet – this could save you a HUGE amount of time.

As Google Sheets is cloud-based, this is nothing something you can just download and install – you need to have a Google Account, and then “Make A Copy” of Henrik’s document, storing your own version in your personal Google Drive account. Once you make a copy of the document you can modify it to your heart’s content – although if you do make any useful changes to the code (i.e. if you add non-even frame rate support), I encourage you to share them with Henrik so that the whole post community can benefit.

You can access the sheet [here](http://goo.gl/bzvwWU), which contains some examples as well as basic instructions on how to use the document.

HUGE thanks to Henrik for sharing this great tool!

Happy Calculating!