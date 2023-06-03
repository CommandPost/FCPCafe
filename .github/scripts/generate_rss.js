const fs = require('fs');
const RSS = require('rss');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

function convertDateToRFC822(dateString) {
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

        let node = article;
        let content = '';
        while (node.nextSibling && node.nextSibling.nodeName !== 'HR') {
            node = node.nextSibling;
            if (node.outerHTML) {
                // Skip lines that are includes
                if (!node.outerHTML.match(/<p>\{\{ include "(.*?)" \}\}<\/p>/g)) {
                    content += node.outerHTML;
                }
            }
        }

        // Split content by <hr />, ignore empty and include-only parts
        let contents = content.split('<hr />').filter(part => part.trim() !== '' && !part.match(/<p>\{\{ include "(.*?)" \}\}<\/p>/g));
        contents.forEach((content, index) => {
            const url = generateUrl(`${title}-${index+1}`);
        
            feed.item({
                title: `${title} News item ${index+1}`,
                guid: `${title}-${index+1}`,
                description: content,
                url: url,
                date: date
            });
        });
    });

    fs.writeFileSync('docs/rss.xml', feed.xml({indent: true}));
});
