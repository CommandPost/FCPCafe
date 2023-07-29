# Transcriber

_**A Developers Story**_

### Initial disclaimer

Hi, before I start I would like to say a couple of things about what you will read: this article will talk about a product that I have for sale.

Let me be very clear: I am not writing this article to advertise myself, that maybe, eventually, will come later... Every time I make a product I end up writing somewhere, on some website, an article that tells the genesis of that product, its story.

And I am here precisely to tell you a story, a five-month long story about the launch of my latest app, [**Transcriber**](https://ulti.media/transcriber/), that I will try to condense into "a few" paragraphs...

![](/static/transcriber-PakSideSite_Transcriber_00000.jpg)

So I am not here to sell you the product whose story I am about to tell you, but to chat, and if downstream of this reading you would like to interact with me, ask me some questions, ask me for insights, even give me some criticism, more or less constructive, I am here, absolutely happy to debate and learn something new.

---

### First of all: who am I?

Again, before we begin two words about yours truly: my name is Alex, I live and work in Milan, Italy, I studied computer engineering and then, "fortunes" in life led me to become first an editor and then a video producer.

![](/static/transcriber-alexraccuglia.jpg)

Now my official label, as far as my occupation is concerned, is "director of TV commercials and promotional videos," however, I deal with all aspects of production and especially post-production in a small company called [Exmachina](https://Exmachina.it), also in Milan.

Throughout my career as a video maker, however, I have always made small tools, tiny programs, utilities that we use internally in the company as an aid to the management of the video and audio production processes (I probably forgot to tell you that I have also been doing podcasts for 12 years, my last show, if you know some Italian, is [Techno Pillz](https://www.spreaker.com/show/technopillz) in which I talk about my work as a programmer and video maker).

After the great crisis of 2008, which was overwhelmingly felt in Italy in 2011, I had to kind of find a way to reinvent myself, so I started in 2017 to refine some of the applications I had made and then sell them directly on the [Ulti.Media](https://Ulti.Media) website.

Initially it was not even a second job, as much as, let's say, a kind of hobby, but for a few years now in this second job has become a very important part of both my personal and professional life, with a market that is starting to get interesting.

Today I spend half of my time making videos and the other half of my time making programs that help those like me who make videos, audio, podcasts, and so on...

---

### It all started with a tweet

Towards the end of 2022, and in January 2023, I started working on a very ambitious application, a voice synthesis application, with the goal of becoming an interesting replacement for the "cheaper" versions of video tutorials: the ability to have not simply a text-to-voice generator, but a real project management system as if you were directing a virtual speaker.

![](/static/transcriber-Speechal.jpg)

I don't know if this program will be able to see the light of day before the end of 2023, I'm still working on it and it's quite a long process, at any rate, also earlier this year, I had started to do some experiments with [Whisper](https://openai.com/research/whisper), for transcribing audio, something that is quite handy for me to find keywords in podcasts (and which I've already done using Siri in another application of mine, [FCP Video Tag](https://ulti.media/fcp-video-tag-automatic-keyword-generator-for-final-cut-pro/)).

![](/static/transcriber-PakSideSite_FCP-Video-Tag_00000.jpg)

In early February someone asked on Twitter if and how it is possible to automate the transcription of video so that I can then use that transcription to generate subtitles in Final Cut Pro.

And someone added, "it would be interesting to see what the guys from Ulti.Media would be able to do in this regard.”

When someone mentions you on Twitter, first you are honored, then amazed, then you respond with such sincerity, "I was actually just working on this thing..."

And that's where it all came from, the idea of making an application that can use a much more efficient, effective and qualitatively better engine than Siri's to pull out subtitles in SRT format.

In my head, during my car rides between home and office, I began to form the idea of an application that would not only pull out subtitles but also allow text editing, something derived from the same text editing engine as the other application I am developing, the one that does the exact opposite, from text to voice.

I was just about to start putting down some code and data structures, when I do a little research: surely I'm not the first one who has something like this in mind, let's see what others have done.

So I come across [Macwhisper](https://goodsnooze.gumroad.com/l/macwhisper), an excellent application by [Jordi Bruin](https://twitter.com/jordibruin), download it, try it out, and decide not to pursue developing my own application: this competitor has already done it all and done it very well, too!

(Note that in an article in which I talk about one of my products, I quote one of my competitors and give him high compliments: at the very least in marketing school they would have flunked me with a grade worse than unclassifiable...).

---

### "But I can do something different."

Sometimes I think Christopher Nolan's movie Inception is based on the ideas that become mental woodworms in the space between my ears... I kept thinking about how I would develop the application because while Macwhisper was perfect in some ways, it was more designed for transcribing audio, and not for managing subtitle streams with easy, visual, in-sync editing...

Part of me simply said to myself, "you can do it too, and do it different enough so that your application can still have its own dignity."

This is probably referred to in psychology as "megalomania." I think it's more unconsciousness, however, often and often the most fun things I've done in my life I've done just with a considerable amount of unconsciousness.

You know what? F*ck you, I do that too!

Well, yes, I decide to develop my application anyway and focus it on a different, probably fuller workflow than Macwhisper's, and I start testing with Whisper's Large model, made available in open source by the people who created it: [OpenAI](https://openai.com/), yes, the same people as [ChatGPT](https://chat.openai.com/).

---

### Why ChatGPT?

Let's make a nice technical digression, since we're here among friends, pretend we're in a pub, and we've made it to the third round of beer, only instead of talking about soccer or some other sport, we're nerdy enough to get excited about something technological...

So why is Whisper so important? And what ties it to ChatGPT? I will try to explain things in a simple and certainly inaccurate way, so those who understand a little about artificial intelligence, plug their ears...

Whisper is a transformer, and while Siri, Alexia, and Google try to understand the word or phrase that was spoken, Whisper goes a little bit wide and also tries to understand the context of each phoneme, and through a very broad knowledge base as well as statistical calculations, tries to make each word follow the word that makes the most sense, consistent with what is being spoken.

Whisper's wide model takes up a good 3GB, a little more in memory when it runs, but it is still to be considered a "basic" model, probably ChatGPT four is at least 100 times bigger - which is why it will be difficult to run something like this on our computers.

Rose-water technical details aside, this is one explanation of why Whisper is so much more accurate and also succeeds where other transcription systems stall: in the unfortunate event that it does not understand a word or part of a word, it "reconstructs" it from what comes before and what comes after.

Another major struggle was to "teach" (although perhaps the correct term would be to specify) Whisper to also generate punctuation marks, such as periods, commas, question marks, and escalation marks.

Pay attention to this: when you dictate to Siri you have to specify the punctuation mark you want to add.

*Small color note: this very article is accomplished by dictating to Siri while I am moving between home and office by car.*

![](/static/transcriber-Dictating_to_Siri_while_Driving.jpg)

One of the great peculiarities of Whisper is that it can also figure out what punctuation marks are, but this is not something it does automatically, you have to specify some input parameters so that it understands that the context has to include them as well.

---

### Before the prototype

In short, teased by the Twitter discussion and the endorsement, I started playing around with this system, trying to figure out what I could get out of it and what the limitations of the technology were.

I think I managed to make a very first prototype, with, of course, a horrible user interface within 7-10 days. And, of course, I started testing it with all the work I was doing in March 2023, projects of various kinds: from pharmaceutical video presentations to a video game trailer to some tutorials.

![](/static/transcriber-Transcriptor_V0.jpeg)

Here I encountered the first limitations of Whisper, which performs exceptionally well when the audio is quite clear, content with a speaker or interviews, while it goes deeply into crisis in case music or sound effects are present.

Initially, I told myself that this would not be a big problem, just specify in the requirements that the application was best suited for spoken content, nevertheless I felt the need to refine it, so I rolled up my sleeves and wondered if there was a possibility of parsing the audio in such a way as to find the points where there was speech and then eliminate those where there was only music or sound effects.

I succeeded by taking advantage of some libraries provided by Apple for analyzing sounds.
Subsequently, one thing I have been working on in parallel with both this app and the one that does text-to-speech is the highlighting of sentences in sync with the video (or, rather, with the audio).

![](/static/transcriber-Audio_pre_analisys3D.jpg)

I always thought that when doing a speech review, physically, the people in charge have in front of them a sheet, printed in Courier font, with all the features of the script.
For this very reason I wanted the words and sentences to be written in this same style, not so much for skeuomorphism, but because it is still the most effective and efficient method of reading the text while listening to the related audio.

![](/static/transcriber-Like_A_Paper_Document.jpg)

I worked not a little in such a way as to continuously highlight the line of text that is "spoken" at a particular moment in time.

When there is information that varies over time, the concept of a timeline is one of the strongest: it transforms the horizontal axis into that of time, so the playhead moves from left to right as the playback continues.

![](/static/transcriber-Timed_Hilite.jpg)

Showing in a two-dimensional screen information that evolves over time is never a trivial matter, not least because it involves making user interfaces and real-time interaction methods, which in some ways have more to do with video games than with video writing programs...

This is why I am particularly proud of this part of the code; not only is the segment highlighted with the sentence being spoken, but it is also easy to interact with it by correcting any transcription errors.

It sounds like a breeze, but believe me, it's not!

---

### 3GB of passion

Another big problem stemmed from the fact that the model I wanted to use, again in open source and with respect to legality, takes up a good 3GB, as I mentioned earlier.

Downloading a 3GB application, as annoying as it may seem, is not that problematic, for the installation to begin with.

But then I thought about all the times there would be a need for an upgrade, and downloading 3 GB of stuff, most of it always the same, would be particularly troublesome, especially in areas of the world where connection speeds are not comparable to those of the big European or North American metropolises.

So I set to work on making a system that would allow the downloading of the template only the first time, and among other things in "shared" mode, so that in case I wanted to develop another application based on the same technology, it could safely use the model already downloaded (spoiler: thing I have actually already done with FCP Video Tag).

![](/static/transcriber-DownloadingModel.png)

---

### The field test

At the end of April I had to go to Florence to attend a medical conference and do several interviews with many doctors, in a total of 12 languages, including English, French, Spanish, Italian, German, Polish, and Brazilian Portuguese.

And it was during the interviews that it was asked if it was possible to have even a rough transcript of what was being said for medical and scientific review.

"Of course yes!", I replied, and the fact that I had a real use case, with tight deadlines and a not inconsiderable qualitative demand, led me to work heavily on the application, so as to improve as much as possible the interface and also the possibility of exporting the subtitles in different formats, including text with total transcription, unsynchronized, and later also RTF with time code indication in a different style.

You see, my applications are born and grow in a fairly almost "autistic" way, but then it is really with user testing (and also when I make tutorials) that I discover the limitations and areas where they can be improved.

Just by making these doctor interview videos, I told myself that by keeping the video played at the top of the interface separate with the transcribed text at the bottom, the user's attention would be focused on only one of the two.

And since Transcriber's purpose is to extract the subtitles from the audio, I thought, more or less simply, to add precisely the subtitle overlay to the video, so the eyes are all and always in the same area of the screen.

![](/static/transcriber-Timed_Hilite_With_Superimpose.jpg)

This also sounds like a no-brainer, but it's not, not least because the system, during playback, continuously updates itself (about 30 times per second) to try to figure out where it is, among all the phrases being spoken which one is active at that instant of time, and then highlights it at the bottom and shows the text content superimposed on the video.

I patted myself on the back because this stuff, in the end, among the transcription applications, I guess I only had it...

Just looking at the overlay subtitles, I realized that although I had struggled not a little to try to get Whisper to digest the punctuation marks, in some cases the sentences were so long that they would result in huge subtitles that would take up too much of the screen.

I told myself that there had to be a way to "split" a subtitle while still keeping the text in sync with the video.

In the end I decided that, as an option enabled by default, the system tries to figure out whether the user has pressed the `ENTER` button to wrap, and when it is pressed, the split sentence automatically generates two subtitles that are fairly synchronized to the video, where "fairly" means "more or less imperceptibly."

This has led to better fluidity in handling the interface and the ability to interact very easily and very quickly on the text stream.

Let me be clear: I have always considered Transcriber as a semi-automatic tool, this means that the transcription should still be reviewed a human being.

In practice, the traditional transcription process, which involved typing the texts while continuing to pause the video, translates into an automatic process of "raw" transcription, which must necessarily be followed by a (much faster) checking phase.

This is the philosophy of all the apps I make: automate as much as possible, while still leaving control, verification and, not least, responsibility to a flesh-and-blood guy.

The boundary conditions are simple: artificial intelligences are very fast, very efficient and also very effective, but they don't understand what they are doing; it's just data to them. It's up to us to maintain control.

---

### Text Editor

One of the features of Transcriber that I like best is the text editor, the subtitle editor.

From a purely technical and data structure point of view, each of the scripts corresponds to a different record in the document's "internal database," called the Session.

When working with text, however, for example with Microsoft Word or Pages, what appears in the sheet is a single text that can be edited easily.

![](/static/transcriber-Like_A_Paper_Document.jpg)

I did a lot of work so that text editing would be as similar as possible to that of a traditional word processor, while still allowing for the ability to manage how the texts remain "attached" (i.e., synchronized) to the video.

The whole component of transcription, and managing the synchronized texts, was one of the most complex but at the same time also quite elegant things I have ever done.

I tried to make things as simple as possible and as intuitive as possible for the user, while going out of my way to mask any complexities.

If a title is too long, it is highlighted with a red dot which means that, given its length, it would take up too much space in the frame.

![](/static/transcriber-Long_Sentence.jpg)

The user then has the option of standing anywhere in the text and pressing the `ENTER` button to wrap, and by wrapping, in a natural way, the subtitle is broken into two different titles while still keeping all the words in sync.

Said like that sounds like a piece of cake, but believe me, this is something non-trivial!
And this is also how I have operated with regard to the separation of subtitles while they are being transcribed and generated: trying to isolate sentences or sentence segments (separated by commas, ",") as much as possible, so that we always have meaningful content to display, without truncated sentences or with subjects being in one subtitle and verbs being in another subtitle.

---

### I got a publisher!

At the end of 2022 I was contacted by the guys at [FxFactory](https://fxfactory.com/) because they were interested in publishing some of my apps on their store, on their marketplace.

This filled me with joy, pride, and also with fear: for the first time I would be playing in the big leagues, and I would have to maintain much higher quality standards; this time I would not be doing everything myself, but I would also have to be accountable to someone else for my work.

Initially we had planned to bring a couple of my most popular apps, such as [BeatMark Pro](https://ulti.media/bmpro) or [FCP Diet 2](https://ulti.media/fcp-diet-2/), to this marketplace, adding features and cleaning up the interface.

I, however, proposed that they start with a completely new app, whose name initially was *Transcriptor*.

I initially met some resistance, partly because such apps already existed, such as the aforementioned Macwhisper.

I then explained the reasons why this new app of mine could be something alternative and provide added and different value than the others.

In concomitance with NAB, where several apps that make use of artificial intelligence to aid production and post production were presented or announced, those in charge of FxFactory were convinced and switched on the green light.

One thing needs to be emphasized: FxFactory is not only a store, a showcase, but those who run it put their faces first and consequently require a level of quality, communication, and even user experience that is far superior to what I had had up to that point.

If I had commercialized Transcriber all by myself, it would probably have come out in some form of its own in late April or early May 2023.

Instead, FxFactory raised my bar higher and higher, trying to reach heights of communication, user interface, functionality, and overall quality level that I was not used to.

And, I have to be honest, I don't think I can thank them enough for making me grow, and making me grow so fast.

---

### Exporting to Final Cut Pro

Initially Transcriber was not supposed to allow exporting subtitles to Final Cut Pro because I already have an application in my catalog that does just that, [FCP SRT Importer 2](https://ulti.media/fcp-srt-importer-2/), by the way one of my most successful applications (which means that the gentlemen at Apple and whoever is in charge of managing Final Cut Pro development should ask themselves some questions if so many people need such a basic feature...).

Let's say I didn't want to cannibalize myself, even though I knew Transcriber would be a higher cost application, there would probably be enough of a market for one to buy Transcriber bundled with FCP SRT Importer 2.

But then, again for that Florence job, I realized that the double step: transcribing the subtitles, revising, exporting the subtitles to SRT format, then bringing them back into FCP SRT Importer 2, and finally communicating the whole thing with Final Cut Pro, was really... a big pain in the ass!

In the end I had all the technology, the know-how, why not add this feature to Transcriber as well?

And so I did, in the span of only one day I added all the features that were already in FCP SRT Importer 2 directly inside Transcriber.

![](/static/transcriber-FCP_Export.jpg)

It has to be said that, having chosen to make the UI in SwiftUI, creating configuration panels was never very complex, and one could focus more on business logic than on appearance and user interaction.

In short, the app was taking shape the decidedly concrete way.

---

### Multiple SRTs

The work of doctors in Florence has evolved over time, and the client also asked me for the ability to view interviews, but with subtitles translated into various languages.

Nothing could be simpler: after doing the transcription and export in SRT format, I proceeded to have these subtitles translated; and then imported into FCP SRT Importer 2 to make the localized videos in the various languages.

This, however, resulted in a decidedly disrupted workflow where I could not actually see the effect of the translated subtitles without first exporting them, or making a peer comparison between each individual sentence from the original to the translated version.

So it is, in a moment of madness (Alex, for next time, remember not to do this kind of thing again with a product that has not yet been released!) I expanded the underlying model, the data structure, to allow multiple subtitle imports.

Basically now Transcriber allows you to have infinite streams of subtitles, in various languages, and also to show side by side the original and translated sentence.

![](/static/transcriber-SideBySide.jpg)

It may sound like a triviality, but this is really a very powerful feature, especially for those working with "minor" languages, for which localization, translation, export, and management of different streams is an integral part of the production and post production process.

Basically, with all this work done under the hood, I had transformed Transcriber from an application that deals with a single link in the localization management chain, into an aggregation center that allows for a global and centralized view of projects, always in synchronization between text and video.

Oh boy, this stuff was getting serious!

---

### The Dome Factory

In the meantime, we got to the beginning of June 2023, I kept asking to get the application launched, but the publisher kept asking me for more and more refinements and better management of the interface.

They were certainly right, but the timing of these final cleanups and subsequent approval left me with an open project, and every time I used it, which happens pretty much every day, I would come up with little features to add.

As a result, what should have been a **"Minumum Viable Product"** was becoming an increasingly complex application, and of course with the need to handle any bugs I would generate by adding new code.

---

### Videos, videos, videos!

Since I had started to develop a system for synthetic speech of more or less "sufficient" quality, I decided to change the way I make promotional videos and this time use a synthetic speaker.

This might be a more or less debatable choice, I am the first to fear very much the "uncanny valley" effect, but I believe that the quality level of synthetic voices has reached such a level that, in any case, at least from my point of view, it is preferable to a promotional video made with only overlay text.

So here I made [my first promo video](https://youtu.be/mWcbe5q6-TQ).

And, because the application is definitely complex, some things may even seem intuitive, but to understand how the workflow works in my opinion you need to sit down for a moment and understand a little bit what is the best way to operate, I decided to also make some tutorials of increasing complexity, making use of both screen captures and animations made with Adobe After Effects, which is the program I use most in my first job as a video maker.

This time I tried to maintain a distinctly high level of quality, not only in the promo but also for all the side videos, it was a really big effort, maybe it might not look like it, however trying to show things in a quick, effective, clear, understandable way without becoming pompous, is not a child's play...

Find [all the videos I made for Transcriber here](https://www.youtube.com/playlist?list=PLrDR4S9nie2a3UlEVFRzAKT3tNUSQVsoM).

And, in addition, one important thing there is to say: every time I set out to make a tutorial, therefore trying to do things the way any user would do them, I find a lot of mistakes or things that can be improved, so to make a video of a few minutes, it can take me even several days because, in the meantime, I am working on the code and improving the interface or adding features.

---

### The run-up before the jump

By early July 2023, the application had reached a level of stability that FxFactory said was sufficient to be marketed.

I was then asked to create artwork and a minimum description for marketing, as well as a promotional video.

![](/static/transcriber-UM_Transcriber_LandingPageBanner.jpg)

All things I had already prepared, however, small problem: in the promotional video I had made I had used an image taken from a very famous movie.

Nothing you can't see anyway in any kind of promotional material from this same movie, however, the publisher politely asked me to replace it with something else so as to avoid any copyright issues.

Datum done, in one day I revamped [the promotional video](https://youtu.be/RMG-FelZY64) and made all the art work.

I was basically ready to go.

---

### The Launch

The launch was set for July 6, 2023, I received the news in the early afternoon, and on that day, I remember it was a Thursday, I was playing with my son and listening to some music.

I was so excited by the news that I started dancing, making my son jump up and down.

It was a scene somewhere between tender and ridiculous...

At 9:30pm, Italian time, the application was launched, and I noticed because I got the first email notification of successful transaction.

![](/static/transcriber-Transcriber_at_FxFactory.jpg)

I was finally able to post news of the launch on Twitter with the link to be able to download the app in trial mode (for the record: in the trial version it allows you to transcribe the first 45 seconds of the movie or import subtitles for the first 45 seconds).

I spent months raising expectations about this app on Twitter, to the point where I had probably lost some credibility as well: I felt I was ready to launch in late April, early May, and then instead it was a full two months later...

Was it worth the wait?

From the end users' point of view I don't know, from my point of view?

**Heck, yes!**

This was the craziest launch ever since I started having this small software development business.

Having a publisher like FxFactory behind me, I achieved in two weeks what I set out to achieve in two years!

This does not mean that I have become rich, this does not mean that the pressure has eased, and after the initial explosion, the values settle down to a more or less quiet regime.

And the first week, but perhaps also the second week, were weeks of great work on my part to improve the things that were missing, add the features that were requested, as well as fix some idiosyncrasies and bugs: I had never been able to test the application with complex languages like Chinese, Japanese, and Korean, and I found that syntactic construction and more or less "special" characters needed to be handled more accurately.

Let's say that I haven't slept, or slept very little, for about two weeks now...

---

### And now?

Now, that this app is in the world, since it is in the hands of so many people, I have discovered so many use cases and workflows that I had not thought about.

My task now, my commitment, is to satisfy as much as possible the requests of most users, going in and filling in any holes or things I had not thought of.

The first weeks, the first months after launch are characterized by a flood of new ideas and suggestions, many of which can be accepted and turned into new features, some of which cannot, because they would meet the needs of too few users or would be difficult to implement...

No app is perfect, no app is complete, software is increasingly something that is constantly evolving and transforming.

Very often I look back and think that many of the programs I have built over the years came about because Apple had not put some functionalities, even very basic ones, directly inside Final Cut Pro.

I have slipped into this "niche" by trying to find a way to speed up workflows and get users (but myself first and foremost) to focus on the more creative stages of the post production process, using the tools I create as if they were novice interns: young people who need to learn and need to be supervised, but who can contribute by doing boring, repetitive, even easy work with little added creative value.

In the meantime, I'm working on at least two or three other new apps that I'd like to bring to market, tools that can help video makers who do everything themselves speed up their work.

Well, the story, for now, stops here, but we can have a chat directly with the comments to this article, below, or [follow me on Twitter](https://twitter.com/ulti_media), I am quite active and respond quickly...

Finally, if you want to find out about the other things I do, and other apps I have developed, you can find everything on my website: [Ulti.Media](https://Ulti.Media.).

---

### Thank you

At the end of this long article, I hope I haven't bored you, I would like to sincerely thank [Chris](https://twitter.com/chrisatlatenite) for all the support he has given me these past months and all the knowledge he has provided... I can never offer enough beers to repay you!

Finally, thanks to the entire community on Twitter, who have supported me and put up with me patiently over the past few months while waiting for the release of Transcriber.

Thank you again, if, you have been an unparalleled energy boost!