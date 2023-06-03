const fs = require('fs');
const RSS = require('rss');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

function convertDateToRFC822(dateString) {
    // Remove ordinal indicators
    dateString = dateString.replace(/\b(\d+)(st|nd|rd|th)\b/g, "$1");
    let date = new Date(dateString);
    return date.toUTCString();
}

function generateUrl(title) {
    return 'https://fcp.cafe/#' + title.toLowerCase().replace(/ /g, '-');
}

fs.readFile('docs/README.html', 'utf8', function(err, data) {
    if (err) {
        console.error(err);
        return;
    }

    const dom = new JSDOM(data);
    const document = dom.window.document;

    const feed = new RSS({
        title: 'FCP Cafe',
        description: 'Latest News from FCP Cafe',
        feed_url: 'https://fcp.cafe/rss.xml',
        site_url: 'https://fcp.cafe',
        generator: 'FCP Cafe'
    });

    const articles = document.querySelectorAll('doc-anchor-target');
    articles.forEach(article => {
        let title = article.getAttribute('id');
        let date = convertDateToRFC822(title);

        let content = '';

        let node = article;
        while (node.nextSibling && node.nextSibling.nodeName !== 'HR') {
            node = node.nextSibling;
            if (node.outerHTML) {
                content += node.outerHTML;
            }
        }
        
        const url = generateUrl(title);
        
        feed.item({
            title: title,
            guid: title,
            description: content,
            url: url,
            date: date
        });
    });

    fs.writeFileSync('docs/rss.xml', feed.xml({indent: true}));
});
