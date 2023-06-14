# Blood & Gold

**Blood & Gold** premiered on Netflix on Friday May 26th 2023. Fully edited in Final Cut Pro.

Directed by Peter Thorwarth and edited by Knut Hake.

I (Sam Pluemacher) was the Assistant & VFX Editor on this production. If there are any questions please feel free to [reach out](https://sammathis.com/contact-me/){target="_blank"} to me.

![](/static/blood-and-gold-1.jpg)

To get started, here's a short excerpt from an interview with director Peter Thorwarth about Blood & Gold published on [Blickpunkt:Film](https://www.blickpunktfilm.de/produktion/blood-und-gold-es-war-einmal-ein-deutscher-spagettiwestern-9fbcb9a84fc42fa2b1ad7850b6af5c87){target="_blank"}:

> **Once upon a time... a German spaghetti western**
>
> The origin of "Blood & Gold" goes back to 2006. As you saw with "Blood Red Sky", I can be persistent when it comes to material I really believe in.
>
> This time we shot a lot outside, on real locations. That generally creates more of a mood and a better atmosphere. For our little town of Sonnenberg, we went to Vysluní in the former Sudetenland. The story we're telling could have actually happened there. There is a big neo-Romanesque church there in the center [...] this had been desecrated by the communist government, which gave us the opportunity to really shoot our showdown there. To shoot an homage to the Italo-Western with a shootout in a church has always been my dream. Accordingly, the church was the main reason why we chose Vysluní as the location.
>
> Netflix was the gamechanger for me. They made two dream projects possible for me - both of which I had been trying in vain to get off the ground for more than ten years before that.
>
> **_Excerpt from [Blickpunkt:Film](https://www.blickpunktfilm.de/produktion/blood-und-gold-es-war-einmal-ein-deutscher-spagettiwestern-9fbcb9a84fc42fa2b1ad7850b6af5c87){target="_blank"} - Thomas Schultze 25.05.2023 12:48_**

---

### Quick Facts

- Netflix feature film (2022) - 95 minutes
- 47 shooting days near Prague, Czech Republic
- 185 VFX shots realised by Accenture Song VFX & Pixomondo
- Edited on a MacBook Pro M1 Max and Final Cut Pro 10.6.5 in Berlin & Munich

---

### Workflow

This workflow has been proven stable & reliable on 5 different Netflix productions & many more to date.

On previous shows we would mostly work remote from each other. With Blood & Gold we moved into a new studio in Berlin which made us reconsider a few key aspects of our workflow.

We've been using [PostLab](https://hedge.video/postlab){target="_blank"} for a couple of years already and love the stress-free collaboration and its backup abilities. Working on large libraries requires a lot of up- and downloading which were constrained by our internet bandwidth. I setup a PostLab Local server on a M1 Mac mini which greatly reduced upload times (down to around 60 secs from previously 10-15 mins). The instructions to setup a Local server can be found in the [Hedge documentation](https://docs.hedge.video/postlab/postlab-local){target="_blank"} and we were able to set it up in 2 days without any prior knowledge of GitLab. For additional security we implemented Tailscale (Wireguard VPN) to restrict access to the server, which also allows us to access libraries remotely.

We considered a [Jellyfish](https://www.lumaforge.com/jellyfish){target="_blank"} NAS for our media management, but couldn't justify the cost for our 2-person studio. PostLab Drive is a great tool for working remotely, but it still requires all media to be uploaded to their server. We were looking for a similar tool that would keep our media in sync which lead me to [Syncthing](https://syncthing.net/){target="_blank"}. It allows you to sync directly over your local ethernet network, but also syncs peer-to-peer over WAN access. For additional security these connections are also running through Tailscale. This setup allows us to be very mobile and we solely work off [OWC Envoy Pro SX 4TB](https://www.owc.com/solutions/envoy-pro-sx){target="_blank"} drives which are super-fast and rugged. In addition we keep daily backups on two [OWC ThunderBay Flex 8](https://www.owc.com/solutions/thunderbay-flex-8){target="_blank"} drives.

Before shooting started we talked with our post-production supervisor, sound recordist, script supervisor, camera department and DIT on set to align our workflows.

We discuss editing codecs and naming of media files. We usually prefer ProRes 422 LT files because of the excellent quality to size ratio that is suitable for cinema screenings.
It is especially important to make sure they shoot with permanently synced timecode. For the sound files it is important to carry over the iXML information so that FCP can read the correct channel names.

With all of the above set we continue to setup our edit bays and our workflow down this project. *An in-depth version of our workflow can be found here* [*Final Cut Pro Workflow for feature films*](https://knuthake.notion.site/Final-Cut-Pro-Workflow-for-feature-films-8ba47cb0860049eebca48e4317ba2c09){target="_blank"}

---

### System Setup

- [**Post Haste**](https://www.digitalrebellion.com/posthaste/){target="_blank"} allows you to save folder structures as a template. Huge timesaver as we name all drives or RAIDs identically and work with the exact same folder hierarchy.
- [**Syncthing**](https://syncthing.net/){target="_blank"} enables us to synchronize all media in the background between our different edit bays. It works over the internet as well as on a local network without the need to upload lots of data.
- [**Tailscale**](https://tailscale.com/){target="_blank"} is a super easy VPN solution for building secure networks and allows you to remotely access from any network or physical location.
- [**Notion**](https://notion.so){target="_blank"} is our database to keep track of the production status of each scene, VFX shots and other useful information.

![](/static/blood-and-gold-2.jpg)

![](/static/blood-and-gold-3.jpg)

![](blood-and-gold-4.png)

---

### Edit Preparation

We use a number of different tools to prepare our shooting days:

- [**PostLab**](https://hedge.video/postlab){target="_blank"} offers stress-free collaboration for Final Cut Pro. Upload your FCP Library and everybody on your team can access it over the cloud. It also serves as a time-machine as you can revert to any uploaded iteration of your library. Starting with this production we moved to PostLab Local.
- [**Lockit Network**](https://lockitnetwork.com/home/){target="_blank"} is a powerful script supervising tool that collects metadata on set which can be ingested into Final Cut Pro without the need to manually copy-paste important script notes.
- [**Sync-N-Link**](https://intelligentassistance.com/sync-n-lnk-x.html){target="_blank"} is a tool to batch synchronize dual-system audio and video and to batch-create multicams. You can also use a target project to create synced clips in a different aspect ratio.
- [**CommandPost**](https://commandpost.io/){target="_blank"} is the Swiss Army Knife for Post Production Professionals. It offers several toolboxes that offer huge time savings. One of which is to create line-by-line keywords:
"*The* ***Titles to Keywords** toolbox is a huge timesaver when editing complex scenes. Couldn’t live without it anymore. And directors love that every delivery of any line from any take is just one click away!" - Knut Hake -* Additional information can be found in this article [fcp.co - Script-focused feature film Workflow](https://fcp.co/final-cut-pro/2605-a-new-script-focused-feature-film-workflow-for-final-cut-pro){target="_blank"}

![](blood-and-gold-5.png)

---

### Editing

![](/static/blood-and-gold-6.png)

Here are a few tips for the editing part when working on a Netflix production:

- Use roles extensively as they help organize the timeline and makes turnovers easy and comprehensible.
- Netflix requires all non-english content to be captioned for all internal screenings. We used [**MacWhipser**](https://goodsnooze.gumroad.com/l/macwhisper?layout=profile){target="_blank"} with on-device transcription and then translate it using [**DeepL**](https://deepl.com/){target="_blank"} to generate captions.
- Blood & Gold included lots of fighting and shooting sequences. We used [Audio Design Desk](https://add.app/){target="_blank"} to do temp SFX layouts which made this process fun and super quick. Their Final Cut Pro integration made things a really smooth process.
- We used chapter markers to tag VFX shots as they are easily searchable in the timeline Index.
- Create a Compound clip for every VFX shot and place all iterations inside. They are very useful to update VFX shots in multiple timelines and have access to previous versions.

![](/static/blood-and-gold-7.png)

![](blood-and-gold-8.png)

---

### Turnovers

- [**X2Pro**](https://x2pro.net/){target="_blank"} will generate a ProTools AAF which includes roles as named tracks making the session very organized for the sound editor.
- [**EDL-X**](https://xmil.biz/EDL-X/EDL-X.shtml){target="_blank"} creates industry standard EDLs for either picture or sound turnovers and can be easily filtered by roles for specific turnovers.
- [**Producer's Best Friend**](https://intelligentassistance.com/producer-s-best-friend.html){target="_blank"} generates rich & detailed spreadsheets that we include with any turnover as they show all relevant metadata such as effects, keywords, markers. We also use those reports to ingest information into our Notion VFX database.
- [**Change List X**](https://intelligentassistance.com/change-list-x.html){target="_blank"} lets you compare two timelines and generate a detailed report that shows you all edit changes.

![](/static/blood-and-gold-9.png)

---

### Trailer

[![](/static/blood-and-gold.jpg)](https://www.youtube.com/watch?v=mqNzrsUerYw){target="_blank"}

---

### Additional Links

- [Final Cut Pro Workflow for feature films](https://knuthake.notion.site/Final-Cut-Pro-Workflow-for-feature-films-8ba47cb0860049eebca48e4317ba2c09){target="_blank"} by Knut Hake
- [fcp.co - Script-focused feature film Workflow](https://fcp.co/final-cut-pro/2605-a-new-script-focused-feature-film-workflow-for-final-cut-pro){target="_blank"} by Iain Anderson
