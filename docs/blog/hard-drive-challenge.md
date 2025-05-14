---
title: The Hard Drive Challenge
date: 2013-12-12
author: Chris Hocking
layout: blog
---
# The Hard Drive Challenge

![drives](/static/blog/12-drives.jpg)

I’ll be honest – I’m a bit of a hoarder and collector. I absolutely love film books, DVDs and all kinds of film gear. Our office, and my home (especially the garage!) is jam packed with all kinds of wonderful film related books, DVDs, BluRay’s, Lights, Grip Gear, Tripod’s, Magic Arm’s, etc.

But the one thing I have more than anything else, is **DATA**. Although we’ve very organised with LateNite jobs – always having active jobs on two separate RAID5’s in the office, and one standalone drive off-set (then eventually archiving to an on-site and off-site LTO5 tape) – when it comes to personal files over the years, everything just sadly piles up. When I moved out of home many years ago now – I put a whole pile of old hard drives in a box, with the intention to eventually archive anything important (I did have some self control though – and ended up throwing out thousands of floppy disks!). I wouldn’t consider any of this data vital or really important – it’s just random stuff I’ve done over the years (school projects, websites, programming, short films, animations, etc.) that I’ve long forgotten. Most of it is also backed up onto CDs and DVDs that I will probably never actually access that are still sitting in storage somewhere. Because of this, no care or respect has ever been given to these drives – they’ve just been thrown together in boxes, without proper static or moisture protection, and travelled with me as I’ve moved house.

Rather than just destroy all the drives and be done with it – I’ve decided to pull out the old FireWire 400 IDE adapter (and by that I mean dismantle an old hard drive enclosure), and see if any of the drives are still operational – maybe even find some old hidden gems.

There is always lots of discussion on the Internet about the shelf life of hard drives – so this will hopefully offer some insight as a real world example, with lots of different drives from a wide range of generations and era’s stored in pretty average and horrible conditions. We’ve had some stinking hot summers, and some awfully cold winters over the years – so these poor drives have just sat there whilst it’s been [snowing outside](./../2008/08/27/let-it-snow-let-it-snow-let-it-snow/), and also when there’s been bush fires nearby!

To give you some idea of what limits a hard drives shelf life, the longevity of the data stored on any drive depends on the conditions where it is stored and for how long. For hard drives, there are three main factors: **magnetic field breakdown, environmental conditions, and mechanical failure.**

---

## Magnetic Field Breakdown

Most sources state that permanent magnets lose their magnetic field strength at a rate of 1% per year. Assuming this is valid, after ~69 years, we can assume that half of the sectors in a hard drive would be corrupted (since they all lost half of their strength by this time). Obviously, this is quite a long time, but this risk is easily mitigated – simply re-write the data to the drive. How frequently you need to do this depends on the following two issues…

To periodically refresh the data on the drive, simply transfer it to another location, and re-writing it back to the drive. That way, the magnetic domains in the physical disk surface will be renewed with their original strength (because you just re-wrote the files back to the disk). If you’re concerned about filesystem corruption, you can also format the disk before transferring the data back. There are also [Terminal commands](http://www.larryjordan.biz/technique-refreshing-hard-disk-storage/) on MacOS that allow you to “access” all the files on your hard drive, which makes the hard drive re-write each used block on the hard drive.

You can also help to avoid this issue by archiving your data with recovery data and error correction when you put the data onto the drive. Many archive formats support the inclusion of data recovery algorithms, so even if you have a few corrupted sectors, you can still re-build the lost data.

---

## Environmental Conditions

Some government organizations “sanitise” hard drives by exposing them to a very powerful magnetic field, effectively (and literally) removing the data from the hard drive by “resetting” all of the sectors. It’s important to note that storing a hard drive in, or near the presence of magnetic fields (alternating *or* static) will severely impact the data stored on the drive.

[Geomagnetic storms](http://en.wikipedia.org/wiki/Geomagnetic_storm) have also been so powerful in some areas that they have actually corrupted hard disks in the past. If you worry about this issue, consider storing your drives in a basement or somewhere heavily insulated from the environment.

---

## Mechanical Failure

Some people believe that the actual physical motor in the hard drive will fail long before the data on the disk platters degrades significantly. While this is an issue for a hard disk that has been sitting around for a long time, if the disk is used once in a while (at least every 3-5 years), this should mitigate this problem.

That being said, you hear all the time of people booting up 10+ year old computers with no problems, the disks working perfectly. This issue isn’t as much of a concern compared to the previous one, since you should refresh the data periodically regardless. That being said, it’s important to be aware that mechanical problems are the primary failure of hard drives (and recovering data off of platters is not a trivial task, especially in the future when it may be difficult to find legacy drives). Chances are, if you leave a drive in storage for 20 years – it won’t spin up 90+% of the time.

Compared to conventional long-term storage mediums (tapes, optical discs), the appeal of hard drives is quite apparent – they are small, easy to move around, have very good transfer rates, switch between computers with ease, the data lasts for a fairly long time and they’re cheap! But, like all storage mediums, hard drives do not come without their own caveats. So long as you periodically “refresh” the data on the hard drive (and, in turn, ensure the mechanical aspects of the drive itself are still functioning), you should have no problems.

Depending on the priority of the data you’ve stored, you may want to refresh the hard disk more often. If it is essential data, I would recommend no less then 2 years at maximum. If you can withstand some chance of *minor* data loss (e.g. a few corrupted sectors here and there), go with 5 years. It doesn’t take long to copy the data off the drive, and copy it back.

One thing not considered is the servo tracks and markings. These are written one time at the factory and never again (on modern disks). No amount of re-writes by the user or so-called low-level formatting freshens these. Once they fade, they fade! It’s different with the first stepper motor disks of the 80’s. They don’t have servo tracks and a low-level format writes ALL of the bits – fresh.

![drivetower](/static/blog/12-drivetower.jpg)

But with all that said and done, let’s fire up some drives and see what happens. I have no idea how old all these drives are, but the capacity should give you some hints!

![drive01](/static/blog/12-drive01-216x300.jpg)

**Size:** 40GB**Result:** Success! Booted fine and was able to move data across to another drive.
**Contents:** Backup’s of my Brother’s Files from High School.

![drive02](/static/blog/12-drive02-223x300.jpg)

**Size:** 160GB
**Result:** Required formatting, but seemed to work fine afterwards.
**Contents:** Mystery!

![drive03](/static/blog/12-drive03-225x300.jpg)

**Size:** 40GB
**Result:** Spins up, and recognised by computer, but won’t mount or format. Assuming hardware malfunction.
**Contents:** Mystery!

![drive04](/static/blog/12-drive04-220x300.jpg)

**Size:** 250GB
**Result:** Success! Booted fine and was able to move data across to another drive.
**Contents:** Old Film Projects.

![drive05](/static/blog/12-drive05-222x300.jpg)

**Size:** 85.3 MB
**Result:** Sounded very loud. The system detected the drive fine, but won’t mount due to a LBA (logical block addressing) issue caused by to the newer enclosure (i.e. thinks it’s a 2.2TB drive).
**Contents:** Mystery!

![drive06](/static/blog/12-drive06-226x300.jpg)

**Size:** 500MB
**Result:** Sounded very loud. The system detected the drive fine, but won’t mount due to a LBA (logical block addressing) issue caused by to the newer enclosure (i.e. thinks it’s a 2.2TB drive).
**Contents:** Mystery!

![drive07](/static/blog/12-drive07-224x300.jpg)

**Size:** 42.7MB
**Result:** Sounded very loud. The system detected the drive fine, but won’t mount due to a LBA (logical block addressing) issue caused by to the newer enclosure (i.e. thinks it’s a 2.2TB drive).
**Contents:** Mystery!

![drive08](/static/blog/12-drive08-225x300.jpg)

**Size:** 122MB
**Result:** Sounded very loud. The system detected the drive fine, but won’t mount due to a LBA (logical block addressing) issue caused by to the newer enclosure (i.e. thinks it’s a 2.2TB drive).
**Contents:** Mystery!

![drive09](/static/blog/12-drive09-226x300.jpg)

**Size:** 40MB
**Result:** Sounded very loud. The system detected the drive fine, but won’t mount due to a LBA (logical block addressing) issue caused by to the newer enclosure (i.e. thinks it’s a 2.2TB drive).
**Contents:** Mystery!

![drive10](/static/blog/12-drive10-221x300.jpg)

**Size:** 270MB
**Result:** Success!
**Contents:** An installation of Microsoft Windows NT Server 4.0.

![drive11](/static/blog/12-drive11-224x300.jpg)

**Size:** 10GB
**Result:** Success!
**Contents:** A whole pile of awesome old stop frame animations and MIDI music. For example…

![drive12](/static/blog/12-drive12-224x300.jpg)

**Size:** 40MB**Result:** The system detected the drive fine, but won’t mount due to a LBA (logical block addressing) issue caused by to the newer enclosure (i.e. thinks it’s a 2.2TB drive).**Contents:** Mystery!

![drive13](/static/blog/12-drive13-227x300.jpg)

**Size:** 256MB**Result:** The system detected the drive fine, but won’t mount due to a LBA (logical block addressing) issue caused by to the newer enclosure (i.e. thinks it’s a 2.2TB drive).**Contents:** Mystery!

![drive14](/static/blog/12-drive14-218x300.jpg)

**Size:** 80MB**Result:** The system detected the drive fine, but won’t mount due to a LBA (logical block addressing) issue caused by to the newer enclosure (i.e. thinks it’s a 2.2TB drive).**Contents:** Mystery!

![drive15](/static/blog/12-drive15-225x300.jpg)

**Size:** 1055.9MB
**Result:** Success – although it sounded like death!
**Contents:** Windows 98SE installation with Premiere 6.5 & Sony Vegas installed for Video Editing.

![drive16](/static/blog/12-drive16-226x300.jpg)

**Size:** 245MB**Result:** The system detected the drive fine, but won’t mount due to a LBA (logical block addressing) issue caused by to the newer enclosure (i.e. thinks it’s a 2.2TB drive).**Contents:** Mystery!

![drive17](/static/blog/12-drive17-227x300.jpg)

**Size:** 120MB**Result:** The system detected the drive fine, but won’t mount due to a LBA (logical block addressing) issue caused by to the newer enclosure (i.e. thinks it’s a 2.2TB drive).**Contents:** Mystery!

![drive18](/static/blog/12-drive18-231x300.jpg)

**Size:** 212.6MB**Result:** The system detected the drive fine, but won’t mount due to a LBA (logical block addressing) issue caused by to the newer enclosure (i.e. thinks it’s a 2.2TB drive).**Contents:** Mystery!

![drive19](/static/blog/12-drive19-219x300.jpg)

**Size:** No idea!**Result:** The drive was labelled Dead, but we’re thought we’d give it a try anyway after a few hours in the freezer. Unfortunately though, judging from the sounds of it, it definitely is actually dead.**Contents:** Mystery!

![drive20](/static/blog/12-drive20-229x300.jpg)

**Size:** No idea!**Result:** The drive was labelled Dead, but we’re thought we’d give it a try anyway after a few hours in the freezer. Unfortunately though, judging from the sounds of it, it definitely is actually dead.**Contents:** Mystery!

![drive21](/static/blog/12-drive21-221x300.jpg)

**Size:** 120MB**Result:** Sounded like death. Hardware screwed.**Contents:** Mystery!

![drive22](/static/blog/12-drive22-229x300.jpg)

**Size:** 212.6MB**Result:** The system detected the drive fine, but won’t mount due to a LBA (logical block addressing) issue caused by to the newer enclosure (i.e. thinks it’s a 2.2TB drive).**Contents:** Mystery!

![drive23](/static/blog/12-drive23-233x300.jpg)

**Size:** 85.3MB**Result:** The system detected the drive fine, but won’t mount due to a LBA (logical block addressing) issue caused by to the newer enclosure (i.e. thinks it’s a 2.2TB drive).**Contents:** Mystery!

![drive24](/static/blog/12-drive24-222x300.jpg)

**Size:** 80GB
**Result:** Success!
**Contents:** 80GB of various sound effects.

[![lacie](/static/blog/12-lacie.jpg)](/static/blog/12-lacie.jpg)

Although not quite as ancient as all these other drives – we also had a bunch of old LaCie enclosures in storage that haven’t been touched for a number of years (most around 4-5 years) containing old University and High School films. The good news? All of these booted up fine without any issues. Although very over priced, we [used to love](./../2008/12/23/post-production-workflow/) these enclosures because of their triple (USB 2.0, FireWire 400 & FireWire 800) and quad (add eSATA) interfaces – which was great when you’re constantly moving from home and school, where each computer had different interfaces (our old iMac sadly only had FW400). You could buy a couple of these enclosures for current projects, then just go to a local computer store and buy bigger and cheaper internal drives and swap them out – so these enclosures became our “travel cases”. Now days we just use cheap quick release tool-less enclosures – but the LaCie’s still come out occasionally, when we’re working with clients that have ancient machines with only FireWire 400 or 800.

It took 51 years before hard disk drives reached the size of 1 TB (terabyte, i.e. 1,000 GB). This happened in 2007. In 2009, the first hard drive with 2 TB of storage arrived. So while it took 51 years to reach the first terabyte, it took just *two* years to reach the second. Considering that we now have tiny, cheap USB sticks that can hold up to 64 GB of data, which is about 1,600 times more than a normal hard disk drive in 1990 (40 MB), and 12,800 times more than the first consumer hard disk drive in 1980, things have certainly moved forward! It’s crazy to look back at these older drives, and think that at the time 40MB seemed like it was a lot!

In summary – most of the drives that we had sitting in storage surprisingly actually seemed to work fine. Sadly most of the really old drives (i.e. under 250MB) wouldn’t mount on my iMac – but that’s just a limitation of the hard drive enclosure I was using. Although I’m sure a [lot of people](http://drbobtechblog.com/not-all-usb-enclosures-can-handle-disk-drives-above-2-2-tb-here-is-what-you-need-to-know/) have come across the issue of older hard drive enclosures only being able to access 2.2TB of data contained within a 3TB drive – I doubt many people come across the opposite problem (i.e. the drive actually being TOO SMALL for the enclosure to handle). I’m fairly confident, if I was able to dig up an old PC, these drives would have worked fine – but for my purposes, I doubt there’s anything I desperately need stored within a 40MB drive! The fact that they were recognised by the machine at all was good enough for me. Admittedly, if I wanted to be really scientific, I would have done a scan of the whole drive to try and detect any corrupt files or bad blocks – but for all the drives that did mount fine, I was able to successfully move across all the data to another drive without issue.

So although it seems, you can leave drives on the shelf for quite some time without too many issues – I still would definitely NOT recommend it. LTO is [still our preferred](./../2011/09/07/swinburne-lecture-august-2011/) archiving method – but it’ll be interesting to see in 10 or so years time, if we still have access to the LTO decks to access our content! Even though most of these drives seemed to work – getting data off them is obviously another issue all together.