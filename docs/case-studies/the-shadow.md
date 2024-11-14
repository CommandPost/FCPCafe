# Der Schatten (The Shadow)

**Case Study for a Mystery Thriller Series**

## The Story

A young journalist, Norah, moves from Berlin to Vienna to start a new job. She is starting to research in the local art-scene and with homeless people.

A homeless woman makes a prophecy to her: In 6 weeks Norah would kill a stranger with good reasons.

This prophecy is tangling up with her own past - lots of  flashbacks into her teenage years - and gradually drives her into despair and self-doubt.

This television series is an adaptation of the novel by **Melanie Raabe**.

![Still frames of Der Schatten. A woman in front of a painting of a wounded woman, a winding staircase, two people in a mortuary, a steep escalator](/static/the-shadow-1.jpg)

You can [watch the show](https://www.zdf.de/serien/der-schatten) (eventually geofenced, if you are not in Germany).

---

## Trailer

[![](/static/the-shadow-youtube.jpg)](https://www.youtube.com/watch?v=u9uRBf6o_IA)

---

## Stats

> **6 x 45min Television Series**<br />
> 53 shooting days, 174 shifts of editing, 29 days / episode<br />
> 89 hours of footage, 3946 Video Clips, 3491 Audio Clips<br />
> 6 main FCP-Libraries, one per episode
>
> **Production Company:**<br />
> [Keshet Tresor Fiction](https://www.tresor.tv/en/keshet-tresor-fiction/)
>
> **Public Broadcaster:**<br />
> ZDFneo ("young" Side-Channel of ZDF)
>
> **Budget:**<br />
> Estimated budget of 650k-800k / episode (day-time-budget TV in Germany)
>
> **Post Crew:**
> - 3 Film Editors
> - 1 Assistant Editor
>
> **Workstations:**
> - MacStudio (M1 Max)
> - MacMini (M1)
> - iMac (i7)
> - MacBook Pro (i7)
>
> **Storage:**
> - OWC Thunderblade, SanDisk Extreme Pro, LaCie rugged SSD Pro, et al.
>
> **Tools Used:**
> - Final Cut Pro 10.6.4
> - [Sync-N-Link](/ecosystem/tools/#sync-n-link-x) - _Creating Sync Clips with Metadata_
> - [CommandPost](/ecosystem/tools/#commandpost) - _Using **Titles to Keywords** for line-by-lines_
> - [Notion](https://www.notion.so/) - _To build a digital bulletin board, one scene = one card_
> - [PostLab](/ecosystem/tools#postlab) - _Collaborating in 6 libraries on 4 workstations in 3 cities_
> - [X2Pro](/ecosystem/tools/#x2pro) - _Send Audio to Soundpost ([Sleepwalker](http://www.sleepwalker.cz/))_
> - [Producers Best Friend](/ecosystem/tools/#producers-best-friend) - _Creating lists (ADR, VFX, Music, DI, Motion Design)_

---

## Locations

Principal shooting took place in and around Prague, Czechia, with additional exterior shots on location in Vienna, Austria.

Main post-production was handled in Prague. Rough-cut was done in 3 different German Cities at once. For the fine-cut we gathered in Berlin.

![Map Europe, highlighting data-flow between Berlin, Prague, Vienna, Munich and Ulm](/static/the-shadow-2.jpg)

---

## How hard was it to get FCP approved?

Not that hard. In this case the director, Nina Vukovic, knew and liked FCP - so the Production quickly agreed to my editing concept. Additionally I can point to half a dozen major projects I have done so far on Final Cut Pro.

But of course, since FCP is not as common as Avid MC in the industry, it always takes a little bit of convincing of every department to approve such a workflow. And its essential to have well-trained Assistant Editors. Fortunately, for AEs, its easy to switch to FCP. If you already are an experienced Assistant, the basics can be learned in two days, with a little remote support over the following week.
Whats also true: if you dont have a post-production facility that knows FCP to their heart, its my responsibility as Head of Editing to be informed of the entire workflow. I have to guarantee that it will work and I have to fix it when it doesn't. Thats a burden Ill gladly carry, because the maintenance of the FCP ecosystem is way more easy to handle than for example Media Composer. And I have a solid international community to back me.

---

## Editors

2021 was a very busy year in the industry (in Germany) and it was not easy to find Editors at all. After a few calls [Martin Wunschick](https://bfs-filmeditor.de/profil/martin-wunschick/), an FCP-native like me, gave me his ok that he could join us later in the game. He suggested [Silke Botsch](https://bfs-filmeditor.de/profil/silke-botsch/), a very experienced Editor, who had occasionally edited on FCP before, features and animation projects.
Since I was just finishing another TV-feature when principal shooting began in July 2021, we agreed that Silke would start with selecting and assemblies while I would part-time-organise post-pro workflows and AEs. After 4 weeks I joined as an Editor and Martin joined 2 weeks before the director would hit our editing rooms. Until then every Editor selected and assembled what whatever came from set, regardless which episode. With Martins arriving we finally settled into our episodes, two per Editor. From there we had around 6 weeks with director Nina Vukovic left to lock the picture.

![Editors, from left: Florian, Silke, Martin](/static/the-shadow-3.jpg)

![Assistant Editor Raja Weiler @ Work](/static/the-shadow-4.jpg)

This is my mobile editing room in Berlin. I opted for a 1 display + 1 A/V-Output setup for max flexibility.

![Mobile editing setup (Berlin)](/static/the-shadow-5.jpg)

My studio setup in Munich has 2 in front + 1 A/V-Output (different movie, though).

![Studio editing setup (Munich)](/static/the-shadow-6.jpg)

---

## Workflow

I counted. Der Schatten is my 8th major project in FCP(X).

At this stage, it's a proven and constantly improved workflow.

**DIT (Prague, [Magic Lab](http://www.magiclab.cz/))**
- Pre-Grade and Transcode to ProRes Proxy on set. (I would prefer ProRes LT, but we opted for Proxy to have less data to download)
- Upload onto cloud server (Prague), QC in-house (Prague)

**Assistant Editor (Ulm, [Awesome Pixels](https://www.awpi.de)):**
- Downloads Masterfiles on local drive
- Creates Sync Clips with Sync-N-Link (+ Audio Metadata import)
- Further adjustments in FCP (markers, notes from Script Supervisor)
- Creates parts in FCP via [CommandPost](/ecosystem/tools/#commandpost)'s **Titles to Keywords**
- Moves every Masterclips into each episode-library.
- Populates scene-Events with Sync Clips and moves them into dedicated episode.
- Updates Notion database with necessary information for the shooting day

**Editors (Munich, Berlin):**
- Download Masterfiles on local drive
- Relink new files with FCP once, the rest is taken care of by PostLab
- Start editing

---

## PostLab

The PostLab workflow is pretty straight forward and feels very safe. It stores every upload in the cloud. Fast internet is mandatory with big projects for this setup to work.

**1 episode = 1 production (PostLab) = 1 Library (FCP)**

Below you can see that 3 editors worked on the same episode within 3 days. Everybody has to leave a short note, what they were working on. At any time it's possible to go back to these instances and revisit or copy over the former edit.
If a library is opened by another Editor, it's locked for everyone else.
But you can open a copy of the last safe at any time.

![Main user interface of PostLab](/static/the-shadow-7.jpg)

All additional Media, like Music, VFX-mixdowns, SoundFX, etc., is synced via postlab.drive.
Setting up PostLab.drive to sync the additional files on 4 workstations correctly takes a little bit of effort, comparable to other backup-structures. The goal here is to not duplicate files or overwrite folders. (Thanks [Sam Plue](https://twitter.com/sam_plue?s=20) for the help!)

This was the Finder folder structure on every workstation:

![Screenshot of Finder structure, dedicated folders for Masterclips, FCP original Media Folder. Every Editor has its own folder for additional footage](/static/the-shadow-8.jpg)

With the flexibility of PostLab - and fast SSD-RAIDs - we could easily jump between episodes. When our Assistant Raja had anything to manage, e. g. importing new scenes, it was easy as closing the project, make coffee, come back to work. Sure, with increasing complexity of the project we had longer upload-times, but we are talking maybe 4-5 minutes twice a day. Compared to how long other NLEs take to even open big projects - nothing to worry here.

Also worth noting is that the user support of the PostLab team is very fast and helpful.

---

## Organisation inside FCP

Every Masterclip goes into every episode. Sync Clips go into their episode.

![Conceptional diagram of the distribution of Masterclips and Sync Clips into every episode](/static/the-shadow-9.jpg)

### Why all the Masterclips in every Episode?

Our Mystery-Thriller script featured many flashbacks. We opted for this approach to keep the flexibility and move selected scenes to other episodes without the risk of accidentally recreating Masterclips, a feature/bug Apple yet has to tackle. With this system we were able to freely gather moments from other episodes, for example for a dream-sequence.
And boy did we make use of it! Now we only needed to open a copy of another episode (PostLab) and could steal a cut from our fellow editors.

### Masterclips

The Masterclips are purposefully put into 1 Event per 5 shooting days to not overload an Event. They just have keywords for their shooting day.

![Screenshot of an Event, shooting day 26 to 30 with 508 clips in it](/static/the-shadow-10.jpg)

When Final Cut loads an Event (or Compound or Timeline) and the clips inside reference to other Events, FCP hast to load these events, too. If these are very big (> 1000 Clips) FCP seems to struggle with reloading. Its one of those things that are no big deal when they occur occasionally (just wait a few seconds), but can annoy when they appear every other time you switch the Timeline. So, we break up the Masterclip-Events into chunks of 500-1000 Clips. Meaning 11 Events for 53 shooting days in this case.

### Event Structure

Because there are no folders for Events we have to be creative with the naming. It may look frightening, but in practice it's a minor issue. As Editors we are used to long lists and many files. That said: all FCP-Professionals wish for Event-Folders and Apple is aware of that.
We will get them eventually.

![All the Events of episode 5, roughly 100.](/static/the-shadow-11.jpg)

Alright, we do it the old way then, with a prefix before the name that sorts the Events accordingly. The Events are named with scene numbers, sometimes we use Emojis or additional text to describe the state of the scene.

![Sorting system with * and Spaces in the beginning of Event-names](/static/the-shadow-12.jpg)

A scene Event contains the Sync Clips + the Compound Clips with the Assembly or Rough-Cut versions + additional files such as wild tracks. Tight and tidy and helps with orientation.

![One single scene with around 30 clips (takes) in it.](/static/the-shadow-13.jpg)

The Scene-Compounds then are assembled into a timeline. In this way we can easily rearrange the order of scenes, test out music or different versions of scenes. Below you can see that some scenes havent been shot yet. So we place title-cards as placeholders. Close to the fine-cut we take blocks of scenes and put them into bigger Compound Clips. In this way we can see the wider flow of the episode and refine the edit inside the Compounds.

Rather late in the process, maybe 3 days before Picture Lock, we break apart the Compounds to have the whole episode in front of us for last refinements. This is both, an organising decision and an efficiency measure, because FCP is still getting slower with complex timelines longer than 30 minutes. If youre working in reels the App stays snappy.

![Episode 2 in the timeline, with several Compound Clips of different lengths](/static/the-shadow-14.jpg)

---

## Notion Database

To complement the flood of footage and keep 4 Editors in the loop about the shooting schedule we use [notion.so](http://notion.so). (credit to [Knut Hake](https://twitter.com/knurrrrrrt) for finding this!) Its like a bulletin board in the cloud with flexible views.

Below you see the arrangement for every shooting day. We can look ahead what is coming the next days, what is shot, but not yet delivered to us and what is ready to edit.

![View of a notion database, every shooting day is a column, every column shows cards for the scheduled scenes](/static/the-shadow-15.jpg)

Each scene is represented by a card. It provides a summary of the state of shooting and syncing. Additionally there is a screenshot, special comments from director and Assistant Editor. We can write notes of our own about the state of editing in case someone else will pick up the scene later on, and even report back to the set, for example to the Script Supervisor.

![Notion card in detail, different properties like Location, notes, shooting day and episode are filled with information](/static/the-shadow-16.jpg)

You can sort and filter the database. In this case (below), the list shows shots that are not yet finished or have missing data.

![A smaller list, which only shows scenes that comply with the selected filter requests](/static/the-shadow-17.jpg)

Or you can simply have a nice gallery of your episode to get an impression of the visual concept. Great for directors and DoPs!

![A gallery view of episode 1. storyboard style.](/static/the-shadow-18.jpg)

---

## Line-by-Lines (Parts)

!!!secondary  TIP
Line-by-Lines, or parts, as I call it, is the process of splitting every take of one scene into little chunks, usually for one line of dialogue or one particular action. These little chunks are reordered so that you can watch every similar part of every take in succession. In this way you can quickly compare every angle and find the best shot or dialogue.
!!!

Shortly before our production started Chris Hocking had the **Titles to Keywords** feature for [CommandPost](/ecosystem/tools/#commandpost) ready (commissioned by Knut Hake) and it rendered my old workflow obsolete. Before, we would tag every Sync Clip in the Browser with keywords. Even with dedicated shortcuts and scripting it was not an easy task. If you made a mistake and had to go back one step you could loose orientation. Now, we can complete the entire process within a timeline and with titles and we can also adjust each step throughout the process.

As you can see below its as easy as:

- Create a title with dedicated name (e.g. part 01)
- Copy it over to the next take, adjust length, and so on

then you send it to Titles to Keywords and are presented with an Event, where all takes are thoroughly tagged with a keyword for every part , which you can then rename with more information, if needed. (screenshot further down below)

This process even works with Multicams and stacked Sync Clips (multiple cameras layered in sync with TC).

![Timeline with all takes in a row. above it titles with different lenghts are placed on the clips](/static/the-shadow-19.jpg)

![finished Event, one keyword is selected. one short line in each take is highlighted yellow to demonstrate the ability to find a moment in the take very fast](/static/the-shadow-20.jpg)

For the sake of efficiency my approach is to not have every line, but 2-3 lines (around 20-25 seconds) in one keyword. This is small enough to have good orientation and, at the same time, not too many keywords, which also can be distracting. Depending on the length of the scene, we would have 5-9 keywords for our "parts"-system. The new process takes around than 20 minutes per scene, compared to the old approach, which could take up to 1 hour. The result is something like what's shown in the picture above: When you click on the keyword, which has parts of dialogue or a description of the moment in the name, you can quickly find the line you're looking for (circled in yellow). With the skimmer, it's a matter of milliseconds to play them in succession, select one, and exchange it with the take in the timeline.
I also use this for the initial selection process in longer scenes. This is an excellent way to compare different takes on a macro-level.

---

## Deliveries

After Picture Lock we sent:

- `FCPXML` to DaVinci Resolve for Color Grading and VFX
- `AAF` via [X2Pro](/ecosystem/tools/#x2pro) to Sound Design and Music (if the timelines are well maintained beforehand sound-designers will be happy)
- Lists for ADR, DI, VFX, Motion Design and Music via [Producers Best Friend](/ecosystem/tools/#producers-best-friend)

---

## Conclusion

Even though we edited in three different places simultaneously and moved to Berlin in the middle of the production everything went fairly smooth.

[CommandPost](/ecosystem/tools/#commandpost)s **Title to Keywords** sped up the AE-workflow significantly.

Final Cut and PostLab enabled us to concentrate on the creative work and even jump between episodes to build a compelling story.

The visuality of the Browser, the Magnetic Timeline and the overall efficiency of Final Cut Pro provide us with the necessary tools to be creative, even in time-demanding scenarios.

---

## About the Author

After his studies of Fine Arts in Munich, Germany, **Florian Duffe** started as an Assistant Editor in feature films (Hell, FCP 7, 2010, Finsterworld, Avid MC, 2013).

He made his debut as main Editor with Luna (FCPX, 2015) and has since cut several Movies (Tatort) and Series for national Television, most of them in Final Cut Pro.

In 2020 he was credited Associate Editor at the team of dystopian Sci-Fi-Thriller The Colony (FCPX, Director: Tim Fehlbaum, Editor: Andreas Menn).

Follow Florian here:

- [Twitter](https://twitter.com/FlowDefoe)

---

## Poster

![](/static/the-shadow-poster.jpg)
