const fs = require('fs');
const RSS = require('rss');
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

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

    // Ignore everything above the first date
    const entriesStartIndex = data.indexOf('### ');
    data = data.substring(entriesStartIndex);

    const entries = data.split('\n---\n');

    for (const entry of entries) {
        const lines = entry.split('\n');
        let title = lines[0].trim();

        // Remove the leading '### ' from the title
        if (title.startsWith('### ')) {
            title = title.substring(4);
        } else {
            continue; // skip entries without date headings
        }

        const date = convertDateToRFC822(title);

        let content = lines.slice(1).join('\n').trim();

        // Remove the videocontainer, !!! and !!!info Sponsored
        // Include non-standard markdown replacements
        content = content.replace(/:::videocontainer/g, '')
            .replace(/:::/g, '')
            .replace(/!!!/g, '')
            .replace(/!!!info Sponsored[\s\S]*!!!/g, '')
            .replace(/Want to contribute or advertise\? \[Learn more here!\]\(https:\/\/fcp\.cafe\/contribute\/\)/g, '')
            .replace(/{{ include ".*" }}/g, '')
            .replace(/\!\[([^\]]*)\]\(([^)]*)\)/g, '<img src="https://fcp.cafe/$2" alt="$1">')
            .replace(/\[\!button text="([^"]*)" target="([^"]*)" variant="([^"]*)"\]\(([^)]*)\)/g, '<a href="$4">$1</a>');

        content = md.render(content);

        const url = generateUrl(title);

        feed.item({
            title: title,
            guid: title,
            description: content,
            url: url,
            date: date
        });
    }

    fs.writeFileSync('docs/rss.xml', feed.xml({indent: true}));
});