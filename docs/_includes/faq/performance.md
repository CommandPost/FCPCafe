### Performance - Stay Snappy

**What is causing delay and laggy behaviour or even increased freezes?**

FCP can lag with **timelines longer than 30 minutes**. Aside from slow drives, too less RAM or bad media management, it is the sheer amount of clips (Audio and Video) in a timeline that could hit on performance. It's hard to pin-point exactly, but it starts from around 500 assets (clips, titles, effects) in the timeline.

Apple Silicon Macs do perform significantly better than Intel Macs. With M1 Pro/Max+ timelines of 40-60 minutes should be no problem.

there are several tricks and workarounds to keep long timelines without lags

**workarounds**

RAM should increase with the lengths of your projects. Though it's possible to edit 90 minutes with 16 GB, we would recommend 32-64 GB of RAM with feature-length timelines. This reduces the risk of freezes, when FCP has to suddenly load big Events.

working in reels: 

You can segment your timeline into regions of around 20-25 minutes and put them into Compound Clips. Inside the Compounds you drive the edit. "Outside" the Compounds you compose the film. For example you could try out different styles of music. With smart Role-management you can turn on/off different music types, for example. important note: before export, you always have to check the joints between the reels.

stay snappy:

With the aforementioned reels-system you could have even 3-hour-timelines. you also could temporarily put a segment of the edit into a Compound to work faster and break it apart afterwards.

stay snappier:

We are big fans of transcoding beforehand. So every video that goes in is ProRes and any Audio is transcoded to WAV. There are reports of reliable workflows with (high resolution) h264-.mov on Apple Silicon. But you have to take care that the TC runs within the container for postproduction.

We would also recommend having fast thunderbolt SSD-RAIDs or even enough internal SSD-storage for all your media (4-8 TB). This practically neagtes load-times for waveforms and thumbnails, for example while zooming in or out the TL.

beware the bug 

As of June 2023 there's still' a bug, when you have long titles or effects that span over the entire timeline, such as Watermarks, TC-burnin and color adjustments. This can slow down the whole system. Try to avoid those or only apply for export. You can apply them to the "reels"-TL, without limitations.

