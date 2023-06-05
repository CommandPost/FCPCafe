const fs = require('fs');
const RSS = require('rss');
const MarkdownIt = require('markdown-it');
const FeedParser = require('feedparser');

const md = new MarkdownIt({html: true});

function convertDateToRFC822(dateString) {
    dateString = dateString.replace(/\b(\d+)(st|nd|rd|th)\b/g, "$1");
    let date = new Date(dateString);
    return date.toUTCString();
}

function generateUrl(title) {
    return 'https://fcp.cafe/#' + title.toLowerCase().replace(/ /g, '-');
}

function entriesAreEqual(entry1, entry2) {
    return entry1.title === entry2.title &&
           entry1.guid === entry2.guid &&
           entry1.description === entry2.description &&
           entry1.url === entry2.url;
}

let pubDate = null;
let lastBuildDate = null;
let isContentChanged = false;
let oldFeedItems = [];

if (fs.existsSync('docs/rss.xml')) {
    const feedparser = new FeedParser();

    fs.createReadStream('docs/rss.xml').pipe(feedparser);

    feedparser.on('meta', function(meta) {
        pubDate = meta.pubdate || new Date();
        lastBuildDate = meta.date || new Date();
    });

    feedparser.on('readable', function() {
        let post;
        while (post = this.read()) {
            oldFeedItems.push(post);
        }
    });
}

const feed = new RSS({
    title: 'FCP Cafe',
    description: 'Latest News from FCP Cafe',
    feed_url: 'https://fcp.cafe/rss.xml',
    site_url: 'https://fcp.cafe',
    generator: 'FCP Cafe',
    pubDate: pubDate,
});

fs.readFile('docs/README.md', 'utf8', function(err, data) {
    if (err) {
        console.error(err);
        return;
    }

    const entries = data.split('\n---\n');
    let currentTitle = '';
    let currentDate = '';

    for (const entry of entries) {
        const lines = entry.trim().split('\n');

        if (lines[0].startsWith('### ')) {
            currentTitle = lines[0].substring(4);
            currentDate = convertDateToRFC822(currentTitle);
            lines.shift();
        }

        if (lines.length === 0 || lines[0].startsWith('{{ include')) {
            continue;
        }

        let content = lines.join('\n').trim();

        content = md.render(content);

        content = content.replace(/{{ include ".*" }}/g, '')
            .replace(/\!\[([^\]]*)\]\(([^)]*)\)/g, (match, alt, src) => {
                if (src.startsWith('../')) {
                    src = `https://fcp.cafe/${src.substring(3)}`;
                }
                return `<img src="${src}" alt="${alt}">`;
            })
            .replace(/\[\!button text="([^"]*)" target="([^"]*)" variant="([^"]*)"\]\(([^)]*)\)/g, '<a href="$4">$1</a>')
            .replace(/\{target="[^"]*"\}/g, '')
            .replace(/{target="_blank"}/g, '');

        const url = generateUrl(currentTitle);

        const newEntry = {
            title: currentTitle,
            guid: currentTitle,
            description: content,
            url: url,
            date: currentDate
        };

        const existingEntryIndex = oldFeedItems.findIndex(item => item.guid === newEntry.guid);

        if (existingEntryIndex === -1 || !entriesAreEqual(oldFeedItems[existingEntryIndex], newEntry)) {
            isContentChanged = true;
            feed.item(newEntry);

            if (existingEntryIndex !== -1) {
                oldFeedItems.splice(existingEntryIndex, 1);
            }
        }
    }

    // Add all items in oldFeedItems back into the feed
    for (const oldItem of oldFeedItems) {
        feed.item(oldItem);
    }

    if (isContentChanged) {
        let newXMLContent = feed.xml({indent: true});
        const newLastBuildDate = new Date().toUTCString();
        newXMLContent = newXMLContent.replace(/<lastBuildDate>.*<\/lastBuildDate>/, `<lastBuildDate>${newLastBuildDate}</lastBuildDate>`);
        newXMLContent = newXMLContent.replace(/{target=&quot;_blank&quot;}/g, '');
        newXMLContent = newXMLContent.replace(/\.\.\/static\//g, 'https://fcp.cafe/static/');
        fs.writeFileSync('docs/rss.xml', newXMLContent);
    }
});