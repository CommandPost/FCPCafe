const fs = require('fs');
const RSS = require('rss');
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

function convertDateToRFC822(dateString) {
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
        description: 'The latest news from FCP Cafe',
        feed_url: 'https://fcp.cafe/rss.xml',
        site_url: 'https://fcp.cafe',
        generator: 'RSS for Node'
    });

    const entries = data.split('\n### ');

    for (const entry of entries) {
        const lines = entry.split('\n');
        const title = lines[0].trim();
        const date = convertDateToRFC822(title);
        const content = md.render(lines.slice(1).join('\n').trim());
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
