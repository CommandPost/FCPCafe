# Contribute

FCP Cafe is entirely **open source** and hosted on [GitHub](https://github.com) & [CloudFlare Pages](https://pages.cloudflare.com).

[GitHub](https://github.com) is a **safe and secure** developers platform used by **over 73 million users** worldwide.

FCP Cafe uses [CloudFlare](https://www.cloudflare.com) for DNS and [hosting](https://pages.cloudflare.com), and [VentraIP](https://ventraip.com.au) for domain registration.

You can make changes to the site by [submitting pull requests on GitHub](https://github.com/CommandPost/FCPCafe).

We welcome and encourage users submitting their own **case studies**, **articles**, **products** and **news items**.

You can see all the [current contributors](https://github.com/CommandPost/FCPCafe/graphs/contributors). Everything is tracked and archived on [GitHub](https://github.com/CommandPost/FCPCafe).

The entire site is written in [Markdown](https://www.markdownguide.org), so it's very easy to modify and update without necessarily knowing any HTML or code.

The website is build on [Retype](https://retype.com), which has a lot of power and flexibility, so you can easily add all kinds of [components](https://retype.com/components/) just using Markdown.

However, if you're not confident using GitHub, you can also email us content here: [support@latenitefilms.com](mailto:support@latenitefilms.com?subject=FCPCafe)

---

### Our To-Do List

If you're interested in collaborating, and helping FCP Cafe grow, here's some ideas of some of the things you can do:

- Make sure all your Final Cut Pro feature requests are added to our [Wish List](/wishlist/).
- Make sure all your Final Cut Pro bug reports are added to our [Bug Tracker](/bugtracker/).
- If you've worked on a professional product (feature film, short film, television commercial, television series, etc), consider writing a case study.
- Add information to our [FAQ](/faq/).
- Add any missing [Motion Templates](/ecosystem/motiontemplates/), [Tools](/ecosystem/tools/) and [Plugins](/ecosystem/plugins/).
- Add personalised reviews to any [Motion Templates](/ecosystem/motiontemplates/), [Tools](/ecosystem/tools/) and [Plugins](/ecosystem/plugins/) you use regularly.
- Expand the [Motion Templates](/ecosystem/motiontemplates/) page. For example, rather than just having one section for [MotionVFX](/ecosystem/motiontemplates/#motionvfx) and [FxFactory](/ecosystem/tools/#fxfactory), we should also list their best/most useful products.

There's a bunch of TVCs we can add to the [Cut on Final Cut Pro](/cut-on-fcp/) page:

- [Dominic Leung](https://marsheen.com/editors/dominic-leung)
- [Dave Davis](https://marsheen.com/editors/dave-davis)
- [Elise Butt](https://trimediting.com/elise-butt/)
- [Fouad Gaber](https://trimediting.com/fouad-gaber/)
- [Ross Hallard](https://trimediting.com/ross-hallard/)
- [Ed Hanbury](https://trimediting.com/ed-hanbury/)
- [Matt Newman](https://trimediting.com/matt-newman/) (last 3 years only!)
- [Paul Hardcastle](https://trimediting.com/paul-hardcastle/) (last 9 months only!)
- [Rohan Zerna](https://theeditors.com.au/rohan-zerna) (earlier TVCs were cut in FCP7)

There's a bunch of stuff we can add to the FAQ - these are real questions from the community:

- XML workflow between PP is still a biatch.
- working remotely online / proxy editing
- captions (we now use filmora for speech to text captions)
- Media management, everything from how to setup the library and best practices to its using all my drive space to export settings.
- Backups and how to.
- Media usage, drive bandwidth, proxy, etc
- Rendering or exporting failing normally due to a corrupt rendered frame
- Why "Leave In Place", doesn't when Importing copied card structures from a drive, using the Import window. This consistently baffles and confuses folks, often resulting in the dreaded "missing camera icon", due to crashing and slowness because they are unwittingly copying media back to the source, where the media already is.
- ‘What’s that red box in the viewer’ (zoomed in, shift Z to ‘fit to window’)
- ‘What have I done’ you’ve opened the precision editor, ESC will close it.
- Help!!! It’s saying my storage is full and I’m only working on a five minute zoom call!!!!
- (Turn off background rendering and select leave files in place…)
- Why do we have to render over and over again a project with titles every time we close the program

---

### Our Mission

We want this site to be:

- **Open:** This site will remain open-source on GitHub for anyone to suggest pull requests
- **Up-to-date & Relevant:** We want this site to always be up-to-date and relevant
- **No bullshit:** We want this site to be honest, truthful, useful and professional
- **Community Driven:** This isn't our site, it's "owned" by the professional Final Cut Pro Community
- **Modern:** This site should work great on the latest browsers, including mobile
- **Fast & Clean:** This site should load quickly, and be easy to navigate
- **No analytics or user tracking:** No cookies here!

---

### Advertising & Sponsored Content

We're open to promoting Final Cut Pro products and services on the front page within the Latest News in a clean and useful way.

For example, here's a sponsored post that could appear on the home page within the Latest News:

!!!warning Sponsored
_Tight. Terse. Terrific. Bim. Bam. Boom._ – Cut/daily reader<br />
Post Production insight delivered to your inbox.<br />
Sign up for **free** at [Cut/daily.com](https://www.cut-daily.com)
!!!

Sponsored posts can just be plain text, with a single link. We don't allow images, videos, or other embedded elements.

If you would like to advertise on FCP Cafe, please contact us to discuss: [support@latenitefilms.com](mailto:support@latenitefilms.com?subject=FCPCafe)

---

### What's a Pull Request?

Imagine you're working with a group of friends on a big school project, and you're all adding different parts to it. Now, you're all using the same master copy of the project, but you're all working separately. When you're ready to add your part to the master copy, you don't just want to plop it in there. You want your friends to check it over, make sure it fits with everything else, and then add it in when they agree it's ready. This way, you ensure that everyone's work meshes well together and the project doesn't become a mess.

A GitHub pull request is basically the same idea. When you're working on a shared codebase, or "project," you often work on your own copy, or "branch". When you think your changes are ready to be added to the shared codebase, you make a "pull request". This is a proposal that says "I think these changes I made should be added to our shared project".

Your teammates then can look over your changes, suggest edits, and finally, if they agree that your changes are good, they "merge" them into the shared project. This way, everyone keeps the code clean and organized, and you have a record of who added what and when.

So, in simple terms, **a pull request is a way of proposing changes to a shared project** and allowing others to review and approve those changes before they're added.

---

### Navigating GitHub

To create the fastest website possible, FCP Cafe is what's called a "static site". It just a collection of HTML files in a folder - nothing fancy.

However, to make sure the website is super easy to update and improve, we use [GitHub Actions](https://github.com/features/actions) to "do stuff" to our markdown files whenever we submit a pull request.

For example, each time you make a pull request, our [fancy GitHub Action](https://github.com/CommandPost/FCPCafe/blob/main/.github/workflows/retype-action.yml) does the following:

- Looks at all the individual **Asset Management** in [this folder](https://github.com/CommandPost/FCPCafe/tree/main/docs/_includes/asset-management), and generates an alphabetical list of them for the [Asset Management](/ecosystem/asset-management/) page.
- Looks at all the individual **Camera Formats** in [this folder](https://github.com/CommandPost/FCPCafe/tree/main/docs/_includes/camera-formats), and generates an alphabetical list of them for the [Camera Formats](/camera-formats/) page.
- Looks at all the individual **Tools & Frameworks** in [this folder](https://github.com/CommandPost/FCPCafe/tree/main/docs/_includes/developer-tools-and-frameworks), and generates an alphabetical list of them for the [Tools & Frameworks](/developers/toolsandframeworks/) page.
- Looks at all the individual **FAQ** in [this folder](https://github.com/CommandPost/FCPCafe/tree/main/docs/_includes/faq), and generates an alphabetical list of them for the [FAQ](/faq/) page.
- Looks at all the individual **FxPlug** in [this folder](https://github.com/CommandPost/FCPCafe/tree/main/docs/_includes/fxplug), and generates an alphabetical list of them for the [FxPlug](/developers/fxplug/) page.
- Looks at all the individual **Motion Templates** in [this folder](https://github.com/CommandPost/FCPCafe/tree/main/docs/_includes/motion-templates), and generates an alphabetical list of them for the [Motion Templates](/motiontemplates/) page.
- Looks at all the individual **News** item in [this folder](https://github.com/CommandPost/ResolveCafe/tree/main/docs/_includes/news), and generates an alphabetical list of them for the [Latest News](/) page.
- Looks at all the individual **Plugins** in [this folder](https://github.com/CommandPost/FCPCafe/tree/main/docs/_includes/plugins), and generates an alphabetical list of them for the [Plugins](/ecosystem/plugins/) page.
- Looks at all the individual **Sponsors** in [this folder](https://github.com/CommandPost/FCPCafe/tree/main/docs/_includes/sponsors), and uses them on the [Latest News](/) page.
- Looks at all the individual **Tools** in [this folder](https://github.com/CommandPost/FCPCafe/tree/main/docs/_includes/tools), and generates an alphabetical list of them for the [Tools](/ecosystem/tools/) page.
- Looks at all the individual **Workflow Extensions** in [this folder](https://github.com/CommandPost/FCPCafe/tree/main/docs/_includes/workflow-extensions), and generates an alphabetical list of them for the [Workflow Extensions](/ecosystem/workflowextensions/) page.
- Looks at all the **Latest News** items and generates an [RSS feed](/rss.xml)

This means, if you want to add a Tool, Motion Template, Workflow Extension, News item, etc. you can just add a new markdown file in that folder, and once the pull request is approved, everything will be updated automagically.

---

### How to Edit Pages

If you're not already registered with GitHub, [create a free account](https://github.com/join).

There's an **Edit this page on GitHub** link at the bottom of every page.

![Edit this file](/static/editthispage.png)

You can edit the contents of this page by clicking the link at the bottom of this page.

To make changes simply click the little pencil **Edit this file** button.

![Edit this file](/static/editthisfile.png)

You can then make changes in the text editor using the Markdown syntax. Copying and pasting existing syntax is the best way to get started.

You should make sure all external links open in a new tab/window (edit this page to see how that works).

If you're modifying a list of Tools or Workflow Extensions, everything should be sorted in alphabetical order.

You can learn more about [basic formatting](https://retype.com/guides/formatting/).

![Edit this file](/static/editor.png)

Once done click **Commit changes**. You can enter a message and description for the commit. Press **Commit changes** again.

![Edit this file](/static/proposechanges.png)

You will now be presented with a **Open a pull request** page.

You can add a title and detailed description to the pull request. Once you're done click **Create pull request**.

![Edit this file](/static/pullrequest.png)

This will send your changes to the FCP Cafe team to review and approve.

If changes are required, they'll add comments within the pull request.

If you have questions, you can ask them on the [Discussions board](https://github.com/CommandPost/FCPCafe/discussions).

You can also email us here: [support@latenitefilms.com](mailto:support@latenitefilms.com?subject=FCPCafe)

---

### GitHub Web-based Editor

You can use the [github.dev](https://github.dev) web-based editor to edit files and commit your changes.

Simply replace the `.com` with `.dev` on any GitHub URL.

For example to edit this page you can use:

```
https://github.dev/CommandPost/FCPCafe/blob/main/docs/contribute.md
```

You can learn about [the github.dev web-based editor](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor).

---

### External Links

All external links should open in a new tab/window.

This is handled automatically by Retype.

---

### Embedded Videos

To keep that site as fast as possible, and free from tracking/cookies, we've decided **not** to allow embedded videos.

Instead, we'll be posting the Video Thumbnail as a clickable link to the video.

Here's an example of how this looks in Markdown:

```
[![](/static/caption-converter.jpg)](https://www.youtube.com/watch?v=2VOY70LfA-4)
```

You can use [this website](https://youtube-thumbnail-grabber.com) for download YouTube Thumbnails.

---

### Images

All images should be stored within the [`/docs/static/` folder on GitHub](https://github.com/CommandPost/FCPCafe/tree/main/docs/static).

---

### GitHub Desktop

You can also use GitHub Desktop to essentially "clone" the entire FCP Cafe website to your local machine.

You can then make changes locally, and once done, submit a pull request back to the main GitHub repository.

You can download [GitHub Desktop](https://desktop.github.com).

You can then use a text editor like [BBEdit](https://www.barebones.com/products/bbedit/) to edit your Markdown files on your Mac.

---

### Powered by Retype

FCP Cafe is powered by [Retype](https://retype.com) and hosted on [CloudFlare](https://www.cloudflare.com) Pages.

We've VERY thankful for [all the support](https://github.com/retypeapp/retype/issues/created_by/latenitefilms) Retype has given us!

The comments feature at the bottom of every page is powered by [giscus](https://giscus.vercel.app).

---

### Contributor Covenant Code of Conduct

#### Our Pledge

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone, regardless of age, body
size, visible or invisible disability, ethnicity, sex characteristics, gender
identity and expression, level of experience, education, socio-economic status,
nationality, personal appearance, race, caste, color, religion, or sexual
identity and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming,
diverse, inclusive, and healthy community.

#### Our Standards

Examples of behavior that contributes to a positive environment for our
community include:

* Demonstrating empathy and kindness toward other people
* Being respectful of differing opinions, viewpoints, and experiences
* Giving and gracefully accepting constructive feedback
* Accepting responsibility and apologizing to those affected by our mistakes,
  and learning from the experience
* Focusing on what is best not just for us as individuals, but for the overall
  community

Examples of unacceptable behavior include:

* The use of sexualized language or imagery, and sexual attention or advances of
  any kind
* Trolling, insulting or derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or email address,
  without their explicit permission
* Other conduct which could reasonably be considered inappropriate in a
  professional setting

#### Enforcement Responsibilities

Community leaders are responsible for clarifying and enforcing our standards of
acceptable behavior and will take appropriate and fair corrective action in
response to any behavior that they deem inappropriate, threatening, offensive,
or harmful.

Community leaders have the right and responsibility to remove, edit, or reject
comments, commits, code, wiki edits, issues, and other contributions that are
not aligned to this Code of Conduct, and will communicate reasons for moderation
decisions when appropriate.

#### Scope

This Code of Conduct applies within all community spaces, and also applies when
an individual is officially representing the community in public spaces.
Examples of representing our community include using an official e-mail address,
posting via an official social media account, or acting as an appointed
representative at an online or offline event.

#### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported to the community leaders responsible for enforcement at
[INSERT CONTACT METHOD].
All complaints will be reviewed and investigated promptly and fairly.

All community leaders are obligated to respect the privacy and security of the
reporter of any incident.

#### Enforcement Guidelines

Community leaders will follow these Community Impact Guidelines in determining
the consequences for any action they deem in violation of this Code of Conduct:

##### 1. Correction

**Community Impact**: Use of inappropriate language or other behavior deemed
unprofessional or unwelcome in the community.

**Consequence**: A private, written warning from community leaders, providing
clarity around the nature of the violation and an explanation of why the
behavior was inappropriate. A public apology may be requested.

##### 2. Warning

**Community Impact**: A violation through a single incident or series of
actions.

**Consequence**: A warning with consequences for continued behavior. No
interaction with the people involved, including unsolicited interaction with
those enforcing the Code of Conduct, for a specified period of time. This
includes avoiding interactions in community spaces as well as external channels
like social media. Violating these terms may lead to a temporary or permanent
ban.

##### 3. Temporary Ban

**Community Impact**: A serious violation of community standards, including
sustained inappropriate behavior.

**Consequence**: A temporary ban from any sort of interaction or public
communication with the community for a specified period of time. No public or
private interaction with the people involved, including unsolicited interaction
with those enforcing the Code of Conduct, is allowed during this period.
Violating these terms may lead to a permanent ban.

##### 4. Permanent Ban

**Community Impact**: Demonstrating a pattern of violation of community
standards, including sustained inappropriate behavior, harassment of an
individual, or aggression toward or disparagement of classes of individuals.

**Consequence**: A permanent ban from any sort of public interaction within the
community.

#### Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage],
version 2.1, available at
[https://www.contributor-covenant.org/version/2/1/code_of_conduct.html][v2.1].

Community Impact Guidelines were inspired by
[Mozilla's code of conduct enforcement ladder][Mozilla CoC].

For answers to common questions about this code of conduct, see the FAQ at
[https://www.contributor-covenant.org/faq][FAQ]. Translations are available at
[https://www.contributor-covenant.org/translations][translations].

[homepage]: https://www.contributor-covenant.org
[v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
[Mozilla CoC]: https://github.com/mozilla/diversity
[FAQ]: https://www.contributor-covenant.org/faq
[translations]: https://www.contributor-covenant.org/translations
