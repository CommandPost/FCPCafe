---
title: Calculating Timecode in Excel
date: 2011-08-11
author:
  name: Chris Hocking
  avatar: https://fcp.cafe/static/chrishocking.jpg
layout: blog
---
# Calculating Timecode in Excel

**UPDATE (26th January 2017):** As Brad mentions in the comments below, you can now download the [TC.XLAM 2.0 beta](http://www.belle-nuit.com/tc-xla), which is no longer password protected and works on modern versions of Excel. For those that no longer use Excel, there’s also a [Google Sheets](./../calculating-timecode-in-google-sheets/) version explained here.

---

Today I was contacted by a filmmaker friend that wanted to work out a way to calculate timecode within an Excel spreadsheet. Fortunately there are some great Macro’s out there that allow you to do just that, however the one I recommended is not terribly well documented, so I thought I would jot down some notes here.

The tool I recommended was [Excel Time Code Extension](http://www.belle-nuit.com/timecode/) by Matthias Bürcher. It hasn’t been updated since 1997, however it still works great, even on the later versions of Excel. Although there is some great documentation floating around on the Internet ([this blog](http://www.talino.org/blog/using-timecode-in-excel/) is probably the best resource – especially the comments), when I first downloaded it all I really wanted was a Installation Guide and an Example.

Here’s a crash course for Mac users out there – although the workflow is very similar for PC users. I tested this on MacOS 10.6.8 and Excel 2008.

1. Download the XLA script from [here](http://www.belle-nuit.com/download/tc.xla.zip) (I hope you don’t mind Matthias, but I’ve also mirrored it [here](./../downloads/tc.zip/) – just in case your site ever goes down).

2. Unzip the download, and then drag the XLA file into Excel.

![](/static/blog/2011-08-03.jpg "03")

3. You will be presented with a Macro Warning – just click Open.

![](/static/blog/2011-08-01-441x171.jpg "01")

4. You will now be left with a blank Excel workbook. To activate the plugin, press **Command+Option+T** (Windows users can just press **Control + T** I’m told, although I haven’t tested it personally yet). In the bottom status bar you should see a message like the below to confirm that everything is working properly:

![](/static/blog/2011-08-02.jpg "02")

5. You can now start getting to work! Select the fields you want to use as timecode fields, then click **Format > Style** from the top menu bar.

![](/static/blog/2011-08-04-441x305.jpg "04")

6. Then select **Time Code** from the Style Name and click **OK**.

![](/static/blog/2011-08-05-441x378.jpg "05")

7. You can now enter timecode into the fields you selected previously. Enter it as a full number, without any spaces (for example 01013000). Excel will automatically format it nicely (i.e. 01:01:30:00).

![](/static/blog/2011-08-06.jpg "06")

8. With that complete, you can now start doing some calculations. For the purposes of this demonstration, let’s just add A1 and A2 together. There’s probably a much quicker way to do this, but the most reliable method I’ve found is to convert the timecode values to frames, do the calculations as frames, then convert the frames back to timecode at the end. So, in B1 let’s display the value of A1 as frames (at 25fps). To do this type:

> =TCtoframes(A1,25)

![](/static/blog/2011-08-07.jpg "07")

9. And do the same for B2:

> =TCtoframes(A2,25)

![](/static/blog/2011-08-08.jpg "08")

10. Now add B1 and B2 together:

> =B1+B2

![](/static/blog/2011-08-09.jpg "09")

11. Now let’s use the cell A4 to show our final calculation. The first thing you need to do is change it to a timecode style (as per step five and six above), then you can enter the following calculation:

> =framestoTC(B3,25)

![](/static/blog/2011-08-10.jpg "10")

12. And assuming everything was typed in correctly – you should now have your finished calculation!

![](/static/blog/2011-08-11.jpg "11")

There is a list of all the different functions you can use [here](http://www.belle-nuit.com/timecode/), although there’s a more detailed explanation on the [French](http://www.belle-nuit.com/timecode/f/) page (which you can use [Google Translator](http://translate.google.com/translate?js=n&prev=_t&hl=en&ie=UTF-8&layout=2&eotf=1&sl=auto&tl=en&u=http%3A%2F%2Fwww.belle-nuit.com%2Ftimecode%2Ff/) or similar to translate).

However, most functions don’t really need much explanation, so here’s a summary of what’s available:

* TCtoframes(TC,fps)
* framestoTC(frames,fps)
* TCplus(TC1,TC2,fps)
* TCminus(TC1,TC2,fps)
* TCmult(TC1,facteur,fps)
* TCdiv(TC1,facteur,fps)
* TCsum(TCref,fps)
* TCtrans(TC,fromfps,tofps)
* TCtofeet(TC,gauge,fps)
* feettoTC(feet,gauge,fps)
* TCtometer(TC,gauge,fps)
* metertoTC(meter,gauge,fps)
* timetoTC(intime)
* TCtotime(inTC)
* texttoTC(intext)
* TCtotext(inTC,fps)
* isTC(TC,fps)

Finally, [here](./../downloads/timecode_example.zip/) is an nice and simple example Excel sheet you can download and test for yourself. It’s basically exactly the same as the above example, except laid out a bit nicer. Hope it helps!

![](/static/blog/2011-08-12.jpg "12")