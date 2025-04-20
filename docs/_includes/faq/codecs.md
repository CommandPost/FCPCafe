### Codecs - What codecs are supported?

You can find every supported file format and codec [on Apple's site](https://support.apple.com/en-au/guide/final-cut-pro/ver2833f855/mac).

Final Cut is capable of displaying almost any standard codec, even DNxHD (Avid). If codecs aren't optimized for editing it is transcoding them "on the fly". Some, like mp3, are immediately transcoded into an optimized version.

However, for best results regarding playback, rendering and export, we recommend using the Apple Pro Res family, since Apple Silicon has dedicated chips for encoding/decoding Pro Res. For bigger projects Pro Res LT seems to be the best option between data size and quality. If you got the storage capacity and speed you even can edit in Pro Res HQ or higher. 

There is even a point to be made for HEVC and even h.264 (both in .mov container!) as an editing codec in FCP. **No recommendation here**, but we are aware of h.264-workflows that are running smoothly since years. In this case the transcoding from original files has to be meticulously tested, to ensure that timecode sync and rendering quality is preserved. Using a Quicktime container would also be mandatory, to ensure metadata is preserved along the way.

Also, for larger projects with a postproduction pipeline after editing (external Color Grading, Sound Design etc.) we recommend a strict procedure in using the same codecs all the time. It will save you a lot of headaches after the fact, regarding metadata export, relinking to original files and AAF export (via X2pro). All these workflows to Sound Design and Color Grading should be tested properly before the start of editing. 

We also highly recommend a pipeline that uses only one set of codecs going in to the edit, preferably Pro Res for Video and PCM (.wav or .aiff container) for Audio. That means to transcode any Video or Audio that is not in the correct codec **before importing into FCP**. **We especially warn about using mp3-files** in any edit that will be sent to Pro Tools! A single clip of mp3 can delay your export workflow for hours of troubleshooting. Stick with PCM aka WAV or AIFF.

Once you’ve got your clips imported to FCP you can use the inbuilt Proxy Workflow to conveniently reduce file sizes, for example for travel, and to take off an edge of demanding editing or rendering tasks. There's also a workflow for getting Proxies rendered outside of FCP, for example in Davinci Resolve (tbd).

For so-called reference clips (also: ref-QT), exports you send to review or to postproduction with burned-in timecode so they can match your edit with original files, HEVC (h.265) is a no-brainer. It’s just the best quality to file size ratio and even export is very fast. Hint: with Apple Compressor you can build your own HEVC export-templates for FCP with your preferred data rate. If your sound designers are hesitant about HEVC just try to do a short clip of workflow-test. It should work if their workstation is decently up to date - they just don't know it yet ;)
