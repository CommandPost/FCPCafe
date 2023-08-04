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

const feed = new RSS({
    title: SITE_TITLE,
    description: `Latest News from ${SITE_TITLE}`,
    feed_url: `${SITE_URL}/rss.xml`,
    site_url: SITE_URL,
    generator: SITE_TITLE,
    pubDate: new Date(),
});

const newsDir = path.join(process.env.GITHUB_WORKSPACE, 'docs/_includes/news');

// Find all markdown files in newsDir
const files = fs.readdirSync(newsDir).filter(fn => fn.endsWith('.md'));

for (const file of files) {
    const data = fs.readFileSync(path.join(newsDir, file), 'utf8');

    const entries = data.split('\n---\n');
    let currentTitle = '';
    let currentDate = '';

    for (const entry of entries) {
        const lines = entry.trim().split('\n');

        if (lines[0].startsWith('### ')) {
            const line = lines[0].substring(4);

            const newFormatRegex = /\[(.*?)\]\(.*?\)/;

            if (newFormatRegex.test(line)) {
                currentTitle = line.match(newFormatRegex)[1];
            } else {
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

        feed.item({
            title: currentTitle,
            guid: currentTitle,
            description: content,
            url: url,
            date: currentDate
        });
    }
}

let newXMLContent = feed.xml({indent: true});
newXMLContent = newXMLContent.replace(/{target=&quot;_blank&quot;}/g, '');
newXMLContent = newXMLContent.replace(/\.\.\/static\//g, '${SITE_URL}/static/');
fs.writeFileSync('docs/rss.xml', newXMLContent);