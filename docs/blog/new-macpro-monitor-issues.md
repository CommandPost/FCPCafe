---
title: New MacPro Monitor Issues
date: 2009-11-02
author:
  name: Chris Hocking
  avatar: https://fcp.cafe/static/chrishocking.jpg
layout: blog
---
# New MacPro Monitor Issues

The company I work for (when I’m not busy doing latenite films related work) recently purchased a brand new MacPro. Nothing too fancy, just something that can easily handle offline editing in Avid Media Composer and Final Cut Pro. Here are the specs:

> One 2.66GHz Quad-Core Intel Xeon
> 4GB RAM (4 x 1GB)
> 640GB 7200-rpm Serial ATA 3Gb/s
> ATI Radeon HD 4870 512MB Graphics Card

![New MacPro Box](/static/blog/2009-11-MacPro.jpg "New MacPro Box")

And so, once it arrived, I open up the box, took out the tower, and hooked it up to some monitors we already had. It booted fine, and loaded Snow Leopard. “Ah, no” I thought to myself, and added a mental note that the first thing I will need to do it get rid of Snow Leopard. But, while it’s up and running, I might as well check out some of the new Snow Leopard features. Then I noticed it. Something was not right. For about half a second every five seconds the computer seemed to “stall”. It would just stop for half a second. It was almost as if it had a faulty heart and was missing a beat every now and again. I’ve never seen this before, so I was a little bit scared that maybe this brand new machine might had serious hardware problems. Either that – or Snow Leopard was causing the poor machine some major, major grief. So first thing I did after a diagnostics test (in which the machine passed all tests), was try and dump Snow Leopard and put on Leopard 10.5. I put in the Retail DVD of Leopard we have, clicked install, and waited for the machine to reboot. Then nothing happened. Ummm… Strange! Why wasn’t it booting? I tried another Retail DVD of Leopard we have. Same problem. Ummm… very strange! Time for Google. I hit my first major stumbling block – you can only install Leopard 10.5.6 or later on these new MacPro’s and all our Retail DVDs are 10.5. With no copy of Leopard 10.5.6 on DVD, and no dealers stocking 10.5.6 on the shelves, it was time to sent it back to the retailer so that they can install 10.5.6 and work out what’s going on with the strange freezing issue. We can always grab another copy of 10.5.6 on DVD from Apple’s discontinued software division later (as we’ll need to install the OS again on other partitions anyway).

And so, the Mac went back to the shop. The weird thing however was that the machine worked perfectly once they received it. No lagging, no freezing – it worked perfectly. So they installed 10.5.6, ran the diagnostics tool, swapped out the RAM as a precaution, and sent it back to us. They did say however that they have come across this issue once before, and put it down to electromagnetic interference in the room it was being used in – putting the machine in another room seemed to fix the problem. Very strange!

I got it back, plugged it in, and the same issue occurred. It would freeze for about half a second every five or so seconds. And so, as a test, I tried it in a different room. It worked fine. Very strange! So I tried it in another room. Same freezing issue. In another room. Same freezing issue. In another room. It worked fine! So it seemed that this silly machine would only work in specific locations, and I had no idea why!

Not convinced that electromagnetic interference would do this, I tried swapping out cables, the keyboard, the mouse, and then finally, I tried different combinations of monitors.

And then I found the solution. For some reason **certain monitors connected via the DVI port cause the system to lag (i.e. literally freeze for half a second every five or so seconds) if connected via the DVI or Mini DisplayPort**. However, all monitors seem to work fine over VGA using adapters.

I’ve tried every single possible combination of screen resolutions and refresh rates – so that’s not the issue.

I’ve tried Googling similar issues, but apart from finding a whole heap of issues with the 4870 graphics card, I couldn’t seem to find anything like this.

![Lots of Computer Screens](/static/blog/2009-11-screens.jpg "Lots of Computer Screens")

Here is a list of monitors I tried:

**Works over DVI, Mini DisplayPort & VGA:**

Samsung 205BW 16:9 LCD
Benq G2420 HD (Model: ET-0027-B) 16:9 LCD

**Works over VGA:**
Kogan X19WB 16:9 LCD
Sony LMD-2030W 16:9 LCD
Sony KLV-325200A 16:9 LCD
Sony KDL-2054000 16:9 LCD

**Doesn’t Work over DVI or Mini DisplayPort:**
Samsung 940B 4:3 LCD
Benq T2200HD (Model: W2108) 16:9 LCD
Benq G2200W (Model: ET-0016-N) 16:9 LCD

When I get the time, I’ll also try a few other monitors we’ve got lying around including some big old CRTs!

So, to cut a long story short, if you get a new MacPro and it looks like it’s lagging – try a different screen! If anyone has a reason as to why this happens, I’d also love to hear it!

Happy editing!

Best Regards, *Chris !*