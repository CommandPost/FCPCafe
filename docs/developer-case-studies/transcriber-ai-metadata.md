# Transcriber with AI Metadata

This is a story that starts not so long ago, about what I call the hardest job of all after being a dad: being a good husband...

Hi, I'm **Alex Raccuglia**, I'm a filmmaker and editor from Milan (in Italy, if maybe European geography isn't your thing), but I studied to be a software engineer, so in the past years I started writing tools to help me in my profession, and now it has become a real second job: I have a software house, called **[Ulti.Media](https://ulti.media)**, and I produce apps designed for people doing my (first) job.

---

### 2023-2024: The years of Artificial Intelligence

I think that if you have not been locked under a rock or hiding your head in the sand like ostriches, you can agree with me that the last 18 months have been really crazy when it comes to some application areas of artificial intelligence.

We have been talking, often even a bit inappropriately, about artificial intelligence for a long time, but never before has it been more apparent than in recent times that it is also possible to do something creative with these tools that have more technology than soul.

I'll make it clear: I can't draw anything that isn't a scribble, so platforms that allow you to create artwork by simply typing in text have been something very appealing to me from the beginning.

![](/static/transcriber-ai-metadata-Firefly.png)

Then Goliath came along, ChatGPT, and it was a game changer for everybody, going on to create new needs and, literally, revolutionizing more than one industry.

If you've come this far, I guess there's nothing new in my words, right?

So *why the preamble?*

---

### The favors a husband does for his wife.

Meanwhile, my wife has started collaborating on a project for [a new company here in Milan](https://www.atlaswinestudio.com).

I would love to tell you what they do, but I'll first show you the video I made for them:

[![](/static/transcriber-ai-metadata-youtube-01.jpg)](https://youtu.be/B8FnQ5VeSkE)

Just for some publicity, here is the video of the launch evening:

[![](/static/transcriber-ai-metadata-youtube-02.jpg)](https://youtu.be/GKCax0cv-Kk)

In the months that followed, my wife had to create several pieces of content for social platforms, and she often found herself with blank sheet syndrome, so she would come to me for help.

Me, busy with a thousand other things, I have to be honest: I was not particularly creative, however, I had learned how to create rather complex and rich prompts, so that I could have in response, quickly, the texts of posts for Instagram, complete with hashtags and emoji.

My wife would then use these texts as a starting point, reworking them, rewriting them, but no longer having the fear of not knowing where to start.

And maybe that's the point: not having a machine do all the creative work, but leveraging the underlying language model to have a starting point to think about.

---

### The Morning Rant

![](/static/transcriber-ai-metadata-TheMorningRant.jpg)

For the past year in English, and for the past three years in Italian, I have been producing a series of videos that I record in my car while driving from home to the office, called **[The Morning Rant](https://www.youtube.com/playlist?list=PLrDR4S9nie2YG87vJe_AjZRloVOucr7zk)**, in which, as if it were a podcast, I narrate what happens to me, both in my work as a filmmaker and in my work as a software developer, trying to have an effective and, especially in Italian, also entertaining narrative.

For the last two years I've been making use of this internal tool I wrote myself, called **SciattaGPT** (the literal translation would be “*dull*, *sloppy*, *scrappy GPT*”), which I use to create the episode summary and title suggestion, always making use of ChatGPT, first with the 3.5 model, then with GPT-4 and now with GPT-4o-mini.

![](/static/transcriber-ai-metadata-SciattaGPT.png)

In the case of this SciattaGPT, all prompts are predefined, rather statically.

At some point, though, all these ingredients, in my head, came together, and I said to myself, I have sufficient (not excellent, but sufficient) experience with OpenAI prompts and APIs, I've been doing this for myself for a very long time...

*Can't I just put it all together?*

---

### NQR

I started out developing a very simple application that would act as a front end to a relatively complex underlying system, which I called **NQR** (which stands for **Natural Query Responses**), the meaning of the acronym of which I found later because I liked the way the three letters sounded.

![](/static/transcriber-ai-metadata-NQR.png)

NQR is, in its conception, and also a bit in its implementation, relatively simple: a system for managing prompts that generate content from other content, in this case, given a rather long text, which could very well be the transcript of a video, I prepared several prompts that generate a summary of it, an ideal title, a list of bullet points, ... in short things like that.

And to make the application of these prompts usable and fast, I have developed a grouping system that allows you to organize different prompts within sets, there is a set for **YouTube**, a set for **social media**, a set for **meta data**, ... In this way a user can apply and execute different prompts just by selecting the single set.

![](/static/transcriber-ai-metadata-NQR2.png)

Perhaps this thing I wrote may sound a bit ... “*pompous*,” or “ *self-praising*,” however, I tried very hard to think from the end user's point of view: the organization of prompts into sets allows you to generate an immense amount of content by simply doing two clicks by first selecting the set and then running the analysis.

My competitor with this application, [MacWhisper](https://goodsnooze.gumroad.com/l/macwhisper), an application that I greatly value and respect (let me be clear!) has been providing for several months now the ability to query ChatGPT with prompts, but these must be written by hand.

My system, on the other hand, provides for *doing the work once*, and then applying it later all the times automatically, and in the case of more common prompts, these are ready-made and implemented by yours truly.

The system by the way allows for prompts and sets to be updated, continuously, without having to update the application.

---

### One small planet, many different languages

![](/static/transcriber-ai-metadata-OneSmallPlanet.jpg)

When I started writing the first prompts-which, I recall, are the “*questions*” posed to the artificial intelligence to be answered-I thought I would have to create numerous prompts in all the languages I wanted to support.

Of course, I started with English, thinking that I would then be able to translate all these prompts more or less automatically, specifying the language as well.

Later, almost by accident, I submitted an Italian text for analysis using English prompts. To my surprise, I noticed that in most cases the response was still given in Italian. By repeating the processing several times, I was sometimes getting answers in Italian, sometimes in English.

It is important to know that unless you intentionally force them, the responses of all these artificial intelligence systems, not just ChatGPT, have a component of probabilistic variability. This means that, using the exact same prompt, you can get very different results as well.

These systems do not really understand languages, but rather are formidable imitators of human language. They do not even know the words themselves, but rather the particles that make them up (in jargon called *tokens*). They respond by trying to find the best solution to the question formulated.

If most of the text is in Italian, even if the question is asked in English, there is a good chance they will answer in Italian.

So I went a step further: at all system prompts I specified to answer using the same language as the content, even if the question is in English. In this way, I was able to achieve a very high success rate: to date, out of more than 200 prompts, in only one case was the answer given in English against a text in Italian. By repeating the request, I obtained the desired solution.

In conclusion, with a margin of error of less than 1% (and probably much less), NQR provides results in the same language as the content being analyzed. Text quality is definitely higher for widely used languages such as English, Spanish, French, but also Portuguese, German, Italian, Russian, and others.

It can be said that the quality of the response is comparable to what would be obtained by asking a question directly to ChatGPT.

---

### Transcriber

I released Transcriber, perhaps my most successful application, a little over a year ago.

![](/static/transcriber-ai-metadata-PakSideSite_Transcriber_00000.jpg)

I've [talked about it](/developer-case-studies/transcriber/) but it's okay to repeat a little, right?

Transcriber is a tool that performs audio and video transcription, for creating subtitles with a strong skew toward direct export to Final Cut Pro.

It has at its core a text editor that I think is pretty good, especially in the perspective of text that needs to be in sync with video.

So I thought I would add NQR to Transcriber so that I could do analysis and content generation from the transcribed text.

*Brand name*? **AI Metadata** (always use “*AI*” because it increases perceived value...).

Something useful for me, for my The Morning Rant, but which I later thought was perfect and suitable for a lot of other people....

---

### But in simple terms, how does this stuff work?

Yeah, how does it work? I'd rather show you with a visual example than describe it in words.

[![](/static/transcriber-ai-metadata-youtube-03.jpg)](https://youtu.be/Z-W3vGPxDVE)

Now I will say something unusual for someone in my position: *this system is not perfect*. The user interface could be improved, and as development continues, I will release updates to make the whole workflow easier and more intuitive.

However, I am quite satisfied with the result, especially because all this information, or rather, this meta-information, is well organized. The various versions are managed so that nothing is lost and everything is saved. It is relatively easy to add new features, not only from my point of view as a developer, but also from the end users' point of view.

---

### A couple of things I learned from using this class of artificial intelligence

Ever since I started developing my applications, their main purpose was to automate repetitive tasks as much as possible, so that I would be free to focus on the creative component and on solving new problems.

When ChatGPT came along, as I'm sure you all did, I was dazzled by the potential of the tool. And we were still talking about GPT-3 a couple of years ago. I had seen with my very own eyes, finally, *a machine pass the Turing test* brilliantly.

![](/static/transcriber-ai-metadata-TuringTest.jpg)

But then, as with all things, I delved deeper, had my own experience, and realized which things LLMs do excellently and which, still, struggle to solve even with sufficiency.

Given that these tools are continually improving, at a breakneck pace (but at some point the power consumption will be so high that they cannot go beyond a certain ceiling), I have learned to exploit them for what they are: a great help, an excellent kick-start, something that can get you out of the deadlock of the white paper, but definitely not a final solution.

When I record an episode of my podcast, rather quickly, I take advantage of these tools to have description, tags, title. But then, for the most important information, I get on the keyboard and correct the errors, take out what is not needed and add the misses.

My philosophy is to take this metadata that is generated and rework it in such a way that from a “just enough” level you get to “more than satisfactory.”

You have to look at the responses of artificial intelligence a little bit like the work of a newly hired intern: you always have to check what it is doing, because, in the end, anyway, the people who put the face on it are us...

---

### Discovering hidden things

When I handed over the final version of the application to the guys at [**FxFactory**](https://fxfactory.com/) for them to publish on the store, I then focused on the prompts.

Since these could be added and changed without updating the application, I thought it would be a nice gift for all users to have as much functionality as possible ready “*out of the box*”.

Always starting from the content I create, particularly the wine podcast, I developed some prompts that allowed me to have a fresh look at the content itself.

Initially I started with URLs: I wanted to know what links were being quoted in the broadcast, so I created this prompt:

![](/static/transcriber-ai-metadata-LinksPrompt.png)

A relatively simple thing that, however, when I ran it, made me discover that there were many more references in an episode than I remembered:

![](/static/transcriber-ai-metadata-LinksResult.png)

For me it was really a revelation: the clever “*stupidity*” of LLMs had made me discover something I had forgotten.

Now, if you think about it for a moment, this is one of the most important and relevant things about this whole article, but also about everything we think or can think about this class of tools!

These objects do a cold analysis, without love, without passion, without even understanding what they are doing, however, they do it rather precisely. I emphasize: “*rather precise*,” not “*infallible*,” let me be clear.

Simply put, they make us discover or, better yet, rediscover something about the content, so that we can really have metadata that also has semantic meaning!

I went ahead and developed other prompts, such as this one that identifies brands:

![](/static/transcriber-ai-metadata-BrandsResult.png)

Or this one that tries to figure out who the participants are if they are mentioned:

![](/static/transcriber-ai-metadata-PeopleResult.png)

I realize that I have only begun to scratch the surface of what can be done. In the coming weeks, either at the request of app users or out of personal push, I will be developing more such prompts.

---

### Image Generation

For my experiments, for my podcast and YouTube show, since I am a subscriber, I use [Adobe's Firefly](https://firefly.adobe.com/) for image generation, knowing full well that the level of quality is far below that of other systems, foremost among them [Midjourney](https://www.midjourney.com/).

So I generated a prompt that generates a prompt... Basically, instead of me writing what I needed, as I always did, I asked the artificial intelligence, again via one of NQR's prompts, to write the prompt for generating the image, to be passed then, by copying and pasting it, into Firefly.

![](/static/transcriber-ai-metadata-ImagePrompt.png)

It is interesting this first level of recursiveness: one prompt generating another prompt...

But then, since OpenAI has the API to directly generate images with the DALL-E model, I thought it would be nice to bypass this whole round. At a not insignificant cost-we're speaking of a few cents, not a few thousandths-I decided to go ahead with direct generation.

That said, as of now images can be generated directly from within Transcriber!

![](/static/transcriber-ai-metadata-ImageGeneration.png)

You can choose the model, DALL-E 2 or DALL-E 3 (DALL-E 2 is absolutely unqualifiable in quality, I think they only keep it on because there are some applications that use it). For DALL-E 3 you can choose to generate a square or 16:9 image, either horizontally or vertically.

![](/static/transcriber-ai-metadata-ImageGeneratorSettings.png)

You can also choose to generate a standard image or one with a “vivid” pattern, which creates more aesthetically pleasing results that look more like stock photos instead of regular photos.

Generating a 16:9 image comes in at a cost of $0.12.

---

### Money, Money, Money!

![](/static/transcriber-ai-metadata-Costs.jpg)

But how much does this stuff cost?

Probably by the time you read this article I will have updated Transcriber with the new version of the system that also shows how much you paid per generation.

The costs, using the GPT-4o-mini model, are really low: we're talking about **$0.15 per million prompt tokens** (**$0.60 per million response tokens**), which translates, roughly speaking, to something like **$0.003-0.004** for a single prompt and its response on a 30-minute video.

Simply put, doing a dozen or so prompts, more or less, with even an image, you end up spending something in the range of $0.15-0.25.

If you are not interested in image generation, the costs drop into the range of $0.01-0.03!

*A lot? Little?* I'll leave it up to you to decide; as far as I'm concerned, these are really small prices.

Just to do the math: with what a coffee at the bar costs here in Italy (which, despite being the home of coffee, is one of the places where coffee, although *the best in the world*, costs less) you can run hundreds of prompts.

In August, in which I tested this system far and wide with all my content, even generating dozens of images, I spent only $4 with OpenAI: the cost of a cappuccino and a brioche...

You may argue that the model I use, GPT-4-o-mini, is much cheaper than GPT-4, which is, according to OpenAI, more refined. However, from my experience I have seen that the difference in quality is unnoticeable.

---

### Before the conclusion

I don't know what kind of article you were expecting. Probably anyone else, in my place, with the opportunity of such an important showcase (*I cannot thank you enough, Chris*), would have opted for a much more promotional text.

I, since I do not know how to sell myself well - the cross and delight of my life - thought I would tell you what my discovery experience has been, to share what I have figured out by developing this application and, in this case, this infrastructure that allows you to analyze text.

At this point, before the final mentions, the ball is in your court for those of you who have read. Let me know what you think, whether you have tried the app or simply read these lines. I am really curious and hungry for interactions with people to converse with!

---

### Try it out, it's (kind of) free!

If you have already purchased Transcriber, **this update is free** and you are all set.

On the other hand, if you are curious, pop over to [**FxFactory**'s website](https://fxfactory.com/info/transcriber/) and download the application: the trial version allows you to work on the first 45 seconds of video (I know, it's not much, but it's enough to get an idea).

I would like to take this opportunity to thank FxFactory for helping to introduce Transcriber to a much wider audience than I ever could have done on my own. In addition, they encouraged me to create a better app: more performant, intuitive, and pleasant to use and see.

Is there anything else to add? 

*Another thanks to Chris for this space*.

If you have any questions, please leave a comment on this article!

---

### About Alex

![](/static/transcriber-ai-metadata-alexraccuglia.jpg)

Alex Raccuglia, 50, from Milan, Italy, studied computer engineering but, fortunately for him, ended up as a director of TV commercials and promotional videos, accumulating a fair amount of experience in the field of visual effects.

Over the years he continued to develop software and, at some point, decided to start selling his apps on [**Ulti.Media**](https://ulti.media).

He also has a [**YouTube channel**](https://www.youtube.com/@ulti_media), run somewhat messy.

He is a founding member of [**Runtime Radio**](https://runtimeradio.it), an Italian podcast network.

*He hates the traffic in Milan and wrote this article dictating it to Siri during his commute to work.*