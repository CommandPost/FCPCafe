# Sixty Minutes

**From script to line-by-line keywords, with CommandPost**

_Written by [Iain Anderson](https://iain-anderson.com)_.

Knut Hake (editor) and Sam Pluemacher (assistant editor) have been behind a few Netflix films now — all in German, and directed by Peter Thorwarth. There’s 2021’s [Blood Red Sky](https://www.netflix.com/watch/80198645), 2023's [Blood and Gold](https://www.netflix.com/title/81557402), and the freshly released [Sixty Minutes](https://www.netflix.com/title/81486233), out now.

These films were all cut in Final Cut Pro, and made use of [CommandPost](https://commandpost.io) to help the process along.

Keywords allow most editors to organise footage, but in a feature film workflow, where the director might ask to see all the alternative takes of any particular line, a bit of extra preparation goes a long way. With a little help from CommandPost, Sam and Knut can create a keyword for each line of dialogue, then attach these keywords to specific parts of each shot, and then gather all the shots for each specific line of dialogue in a custom keyword collection. It’s not quite the same as Avid’s ScriptSync, but it accomplishes similar goals.

This is, however, not a text-recognition system, there’s no AI involved, and it’s not text-based editing. In a script-first workflow, you want to organise the clips based on the script, even if there’s improvisation.

Start with [Sync-N-Link X](/ecosystem/tools/#sync-n-link-x) from Intelligent Assistance. This tool can batch-sync a day’s worth of jam-synced audio and video clips, and it’s a big time saver here.

![](/static/sixty-minutes-01.png)

Next, automatically assemble all those clips, sorted by timecode into a fresh timeline — a dailies stringout, in order of shooting. CommandPost’s Auto Sequence Toolbox does this trick, and was developed specifically for Knut and Sam to support this workflow.

![](/static/sixty-minutes-02.png)

That dailies timeline now has all the different takes of each scene, numbered and waiting to be tagged with the day’s scripts. Manual keywording would be very time consuming, so use CommandPost again. First, the lines in the script will be placed into titles, and then, those titles will be placed above each of the shots, to match each line exactly.

To get started, head to the CommandPost Toolbox, choose **Titles to Keywords**, and look in the lower half of the panel, called **Create Titles from Text**. Paste in all the script lines that you want to generate titles for, and CommandPost will automatically number these lines, in order, with an optional prefix and suffix, then send these titles to Final Cut Pro.

![](/static/sixty-minutes-03.png)

Timing and positioning these titles is the only manual part of the process, but it’s not difficult to duplicate a storyline with titles from one scene to another take, then perform minor retiming on the duplicate titles.

The titles are set to become keywords, but you can also create titles named **FAVORITE** or **REJECT** to apply those ratings too. Multiple titles can be placed atop the same clip; they’ll all turn into keywords or ratings.

![](/static/sixty-minutes-04.png)

When it’s all complete, head back to the **Titles to Keywords** toolbox and use the top half of the panel to create a new Event with Keywords.

![](/static/sixty-minutes-05.png)

Now, you’ll have a Keyword Collection for every line of dialog, numbered in order, with good takes marked as favorites and bad takes rejected. Keywords and Ratings are a fantastic advantage of using Final Cut Pro, and CommandPost can help you to use your script to create those keywords quickly.

Lastly, if you’re considering using FCP to cut a feature for Netflix, it’s actually possible. You’ll need to prove that you know your workflow as well as Knut and Sam do, and you should probably check out Knut’s [Notion workflow for feature film editing](https://knuthake.notion.site/Final-Cut-Pro-Workflow-for-feature-films-8ba47cb0860049eebca48e4317ba2c09).

Many thanks to Knut and Sam, and congratulations on your repeated success!

Many thanks to Chris Hocking for making this workflow possible in CommandPost.