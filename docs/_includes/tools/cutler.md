### Cutler

Claude or ChatGPT does the assistant editor's work: syncs, logs, picks selects and builds a first cut, then hands Final Cut Pro a real project.

![A Final Cut Pro library after Cutler: keyword collections, flagged defects, and Selects and Unused smart collections](/static/cutler-final-cut.jpg)

Cutler is a Mac app that connects your own Claude or ChatGPT to your footage. Point it at a folder of rushes. It transcribes everything on your Mac, syncs sound by waveform (no timecode needed), builds multicam clips, flags soft, dark and shaky takes, and logs keywords and selects. The AI then proposes a first cut with a reason for every clip, and brings the judgement calls back to you as questions instead of guessing.

![Cutler's cut page: the AI explains its choices on the left, and the proposed cut lists a reason for every clip on the right](/static/cutler.jpg)

The result is a Final Cut Pro project, not a render: an editable timeline with roles, keywords and native multicam, pointing at your original media where it already lives. Nothing is installed into Final Cut Pro, and every FCPXML is validated against Apple's DTD before Final Cut Pro sees it.

![Cutler's panel inside the Claude app: the cut as picture, cover, motion and music lanes, with the decisions Claude made](/static/cutler-claude.jpg)

- **Your AI, your plan:** works through Claude Code, the Claude app, Codex in the ChatGPT app, or Cutler's own window signed in with your ChatGPT account. No API key and no credits. Cutler has no AI of its own and adds nothing to your provider's bill.
- **Local where it matters:** transcription (Whisper) runs on your Mac and video files are never uploaded. When the AI looks at shots, it sees still frames through your own account, or through a local model (Qwen) on Macs with 32 GB of memory or more.
- **Plain-language changes:** ask for "tighten it to four minutes" or "why this take?", and only what you ask for changes.
- **Other NLEs:** Premiere Pro and DaVinci Resolve XML export is in beta, included in every licence.

[![Cutler in 90 seconds, on YouTube](/static/cutler-video.jpg)](https://www.youtube.com/watch?v=gj-KTVQq580)

The app is code-signed and notarized. It's a one-time purchase (€25 for the first 100 founder licences, with 12 months of updates included; the app keeps working after that, no subscription) with a 7-day free trial of the full app, no card needed. Requires an Apple Silicon Mac running macOS 14 or later.

Made by Erik Lindgren, an editor in Cascais, Portugal, with over 20 years of cutting, mostly in Final Cut Pro. The FCPXML import lessons from building Cutler are published as an open-source skill on [GitHub](https://github.com/erikvideos-tech/fcpxml-field-notes). Learn more at [cutler.miracontents.com](https://cutler.miracontents.com/?ref=fcpcafe).

[!button text="Visit Website" target="blank" variant="info"](https://cutler.miracontents.com/?ref=fcpcafe)
