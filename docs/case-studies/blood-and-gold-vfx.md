# Blood & Gold

**Final Cut Pro to After Effects VFX Workflow**

![](/static/blood-and-gold-vfx-image-01.jpeg)

**Blood & Gold** premiered on Netflix on Friday May 26th 2023. Fully edited in Final Cut Pro. Directed by Peter Thorwarth and edited by Knut Hake.
I (Sam Pluemacher) was the Assistant & VFX Editor on this production. If there are any questions please feel free to [reach out](https://sammathis.com/contact-me/) to me.

A lot of special effects you see in Blood & Gold were done on-set, but some cleanup or enhancements had to be done in post. While we try to do some effects directly in Final Cut Pro, I rely on After Effects or Fusion to do some more complex pre-visualizations.

Thanks to Ximport AE (by [Automatic Duck](https://www.automaticduck.com/) on [FxFactory](https://fxfactory.com/)) I could quickly send plates or rough layouts from Final Cut Pro to After Effects without exporting or rendering the clips. This is a quick rundown how we used Ximport AE to greatly speed up the previz process.

Ximport AE can be purchased through FxFactory, which is greatly known for its vast selection of Final Cut Pro plugins and makes it really easy to move from one machine to another.

---

## Quick Facts

- Netflix feature film (2022) - 95 minutes
- 47 shooting days near Prague, Czech Republic
- 185 VFX shots realised by Accenture Song VFX & Pixomondo
- Edited on a MacBook Pro M1 Max and Final Cut Pro 10.6.5 in Berlin & Munich

> *Huge thanks to FxFactory for providing me with a test license of Ximport AE to test the workflow beforehand.*

---

## Ximport AE Workflow

![](/static/blood-and-gold-vfx-image-02.png)

Having worked together with Knut Hake (editor) and Peter Thorwarth (director) on [Blood Red Sky](https://www.netflix.com/de-en/title/80198645), which was a VFX heavy feature film, I expected quite a few special effects on this show. Therefore I was looking for tools that would allow for quick pre-visualization turnovers once Knut and Peter finished sequences that I could start working on.

I found Ximport AE by Automatic Duck on FxFactory which makes the process of sending plates or rough layouts as easy as exporting a fcpxml and importing it into After Effects.

Once a sequence is ready to be worked on, I will create compound clips for our VFX shots and name them accordingly - e.g. "BAG_001-0010". Compound clips are great for VFX shots, because any changes inside the compound clip will automatically be reflected in all instances of that compound clip. I will usually add 24 frames of handles to each VFX shot as it gives Knut some flexibility in the editing process.

![](/static/blood-and-gold-vfx-14h07m04.png)

![](/static/blood-and-gold-vfx-14h07m42.png)

The compound clips will also show up in your browser and in order to get these layouts over to After Effects, you simply select all shots and export a fcpxml.

![](/static/blood-and-gold-vfx-14h09m06.png)

Over in After Effects you select "Import... > Ximport AE..." and start the import process. This only takes a few seconds and all your compound clips will be imported as Compositions right away. You will also find the original media files next to those. There's a few settings in the import dialogue, but I mostly keep them at default. As Ximport AE references the original media files, you can always adjust the length of any clip in your AE Composition. This is super helpful and an added benefit compared to working with exported/rendered clips.

![](/static/blood-and-gold-vfx-14h00m46.png)

Open your Composition and you will find all your layers inside, as well as a marker showing you any effect that was applied in Final Cut Pro. Not only does it preserve the layers and timing of your shots, but it will also import the audio of your Synchronized/Multicam clips. This was very helpful on this project, because there were a lot of muzzle flashes that needed to fit to the sound layout.

![](/static/blood-and-gold-vfx-13h31m15.png)

![](/static/blood-and-gold-vfx-13h32m00.png)

After organizing and checking all my imported Comps I could quickly start working on the pre-visualizations. Here's a few examples:

![](/static/blood-and-gold-vfx-14h05m06.gif)

![](/static/blood-and-gold-vfx-13h31m36.png)

![](/static/blood-and-gold-vfx-14h22m19.gif)

![](/static/blood-and-gold-vfx-14h20m58.png)

![](/static/blood-and-gold-vfx-14h21m11.png)

Once the work on a shot was done, I'd color-label the shots in After Effects. Using Templates and presets I was quickly able to add the shots to the Render Queue and export them to a pre-defined folder.

![](/static/blood-and-gold-vfx-13h33m35.png)

Back in Final Cut Pro I would import the shots and assign them to our "VFX-Previz" role. All shots then go into their respective compound clip. The compound clips also act as a reference for which clips have been used for a specific composition. This is extremely helpful once you need to turnover the shots to your VFX vendor.

![](/static/blood-and-gold-vfx-14h25m44.png)

It also allows me to add versions to the compound clips and easily toggle them on or off directly in the timeline without searching for them in the browser.

Whenever there were editing changes or shots changed significantly, I would simply export a new fcpxml (name them by date or version number) and import them into After Effects. Ximport AE will create new folders for each import which makes it very organized and lets you keep track of each iteration.

That's about it. Please feel free to reach out if you have any questions to this workflow.

---

## Trailer

[![](/static/blood-and-gold.jpg)](https://www.youtube.com/watch?v=mqNzrsUerYw)