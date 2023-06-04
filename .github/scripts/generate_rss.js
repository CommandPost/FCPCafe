const fs = require('fs');
const RSS = require('rss');
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt({html: true}); // Allow inline HTML

function convertDateToRFC822(dateString) {
    // Remove ordinal indicators
    dateString = dateString.replace(/\b(\d+)(st|nd|rd|th)\b/g, "$1");
    let date = new Date(dateString);
    return date.toUTCString();
}

function generateUrl(title) {
    return 'https://fcp.cafe/#' + title.toLowerCase().replace(/ /g, '-');
}

fs.readFile('docs/README.md', 'utf8', function(err, data) {
    if (err) {
        console.error(err);
        return;
    }

    const feed = new RSS({
        title: 'FCP Cafe',
        description: 'Latest News from FCP Cafe',
        feed_url: 'https://fcp.cafe/rss.xml',
        site_url: 'https://fcp.cafe',
        generator: 'FCP Cafe'
    });

    const entries = data.split('\n---\n');

    let currentTitle = '';
    let currentDate = '';

    for (const entry of entries) {
        const lines = entry.trim().split('\n');

        // if the line starts with '###', it's a new date
        if (lines[0].startsWith('### ')) {
            currentTitle = lines[0].substring(4);
            currentDate = convertDateToRFC822(currentTitle);
            lines.shift();  // remove the date line
        }

        // skip empty entries or entries starting with an include line
        if (lines.length === 0 || lines[0].startsWith('{{ include')) {
            continue;
        }

        let content = lines.join('\n').trim();

        // Render markdown to HTML
        content = md.render(content);

        // Handle non-standard markdown after HTML rendering
        content = content.replace(/{{ include ".*" }}/g, '')
            .replace(/\!\[([^\]]*)\]\(([^)]*)\)/g, '<img src="https://fcp.cafe/$2" alt="$1">')
            .replace(/\[\!button text="([^"]*)" target="([^"]*)" variant="([^"]*)"\]\(([^)]*)\)/g, '<a href="$4">$1</a>')
            .replace(/\{target="[^"]*"\}/g, '');

        const url = generateUrl(currentTitle);

        feed.item({
            title: currentTitle,
            guid: currentTitle,
            description: content,
            url: url,
            date: currentDate
        });
    }

    const oldXMLContent = fs.existsSync('docs/rss.xml') ? fs.readFileSync('docs/rss.xml', 'utf8') : '';
    const newXMLContent = feed.xml({indent: true});

    // Only write to the file if the content has changed
    if (newXMLContent !== oldXMLContent) {
        feed.pubDate = new Date();
        feed.lastBuildDate = new Date();
        fs.writeFileSync('docs/rss.xml', feed.xml({indent: true}));
    }
});