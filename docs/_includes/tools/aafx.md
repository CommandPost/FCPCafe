### AAFx

Send a Final Cut Pro timeline to Pro Tools without losing a role or a
timecode. AAFx reads an FCPXML or a `.fcpxmld` bundle and writes a
self-contained AAF: the audio essence travels inside the file, so the
mixer can open the session without ever seeing your rushes.

Every role and subrole becomes a named Pro Tools track. Dialogue opens
the session, then the roles you created in Final Cut, then effects and
music. Clips of the same role that overlap take neighbouring sub-tracks
instead of piling up.

Each region carries the source timecode of its own rush, which keeps
conforming possible months later. When a drive is offline, AAFx names
every missing file, its role, how many clips use it and the volume it
expects — then relinks by source timecode and exact duration rather
than by filename, so two rushes with the same name from different
shooting days can never be confused.

Pro Tools only reads mono audio essence inside an AAF, which is why an
interleaved stereo region turns into saturated noise. AAFx splits every
source into one mono track per channel that actually carries sound, and
discards silent channels — a 16-track field recording does not flood
the session with 16 empty tracks.

Multicam clips are resolved to their active audio angles, compound
clips are expanded, and clips whose audio you disabled in the edit stay
out of the AAF. Handles are adjustable from zero to thirty seconds.

Nothing is installed on your Mac: Python and the audio extractor travel
inside the application. No Homebrew, no ffmpeg, no Terminal. Nothing
leaves your machine.

Requirements

- macOS 11 or later
- Final Cut Pro 10.4 to 12.3, FCPXML up to 1.14, `.fcpxml` and
  `.fcpxmld` bundles
- Pro Tools for AAF import, via File > Import > Session Data

Complete seven-day trial, no watermark and no credit card. One-off
price, no subscription: 79 € for a single Mac, 139 € for four
simultaneous floating seats.

[!button text="Visit Website" target="blank" variant="info"](https://aafx.app/)
