const fs = require('fs');
const path = require('path');
const RSS = require('rss');
const MarkdownIt = require('markdown-it');
const cheerio = require('cheerio');

const { SITE_TITLE, SITE_URL } = process.env;

const md = new MarkdownIt({html: true});

function convertDateToRFC822(dateString) {
    dateString = dateString.replace(/\b(\d+)(st|nd|rd|th)\b/g, "$1");
    let date = new Date(dateString);
    return date.toUTCString();
}

function generateUrl(title) {
    return `${SITE_URL}/#${title.toLowerCase().replace(/ /g, '-')}`;
}

function entriesAreEqual(entry1, entry2) {
    return entry1.title === entry2.title &&
           entry1.guid === entry2.guid &&
           entry1.description === entry2.description &&
           entry1.url === entry2.url;
}

let oldFeedItems = [];

if (fs.existsSync('docs/rss.xml')) {
    const rssContent = fs.readFileSync('docs/rss.xml');
    const $ = cheerio.load(rssContent, { xmlMode: true });
    $('item').each((i, elem) => {
        oldFeedItems.push({
            title: $(elem).find('title').text(),
            guid: $(elem).find('guid').text(),
            description: $(elem).find('description').text(),
            url: $(elem).find('link').text(),
            date: new Date($(elem).find('pubDate').text())
        });
    });
}

const feed = new RSS({
    title: SITE_TITLE,
    description: `Latest News from ${SITE_TITLE}`,
    feed_url: `${SITE_URL}/rss.xml`,
    site_url: SITE_URL,
    generator: SITE_TITLE,
    pubDate: oldFeedItems.length > 0 ? oldFeedItems[0].date : new Date(),
});

const newsDir = path.join(process.env.GITHUB_WORKSPACE, 'docs/_includes/news');

// Find all markdown files in newsDir
const files = fs.readdirSync(newsDir).filter(fn => fn.endsWith('.md'));
let isContentChanged = false;

for (const file of files) {
    const data = fs.readFileSync(path.join(newsDir, file), 'utf8');

    const entries = data.split('\n---\n');
    let currentTitle = '';
    let currentDate = '';

    for (const entry of entries) {
        const lines = entry.trim().split('\n');

        if (lines[0].startsWith('### ')) {
            const line = lines[0].substring(4);

            // Regular expression for new format e.g. '[23rd May 2023](/news/20230523)'
            const newFormatRegex = /\[(.*?)\]\(.*?\)/;

            if (newFormatRegex.test(line)) {
                // If the line matches new format, extract the date from inside brackets
                currentTitle = line.match(newFormatRegex)[1];
            } else {
                // Else consider the whole line as title
                currentTitle = line;
            }

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
                    src = `${SITE_URL}/${src.substring(3)}`;
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
}

// Write to file only if content has changed
if (isContentChanged) {
    let newXMLContent = feed.xml({indent: true});
    const newLastBuildDate = new Date().toUTCString();
    newXMLContent = newXMLContent.replace(/<lastBuildDate>.*<\/lastBuildDate>/, `<lastBuildDate>${newLastBuildDate}</lastBuildDate>`);
    newXMLContent = newXMLContent.replace(/{target=&quot;_blank&quot;}/g, '');
    newXMLContent = newXMLContent.replace(/\.\.\/static\//g, 'https://fcp.cafe/static/');
    fs.writeFileSync('docs/rss.xml', newXMLContent);
}