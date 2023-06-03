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

        let content = '';
        let contents = [];
        let nodes = article.nextSibling ? Array.from(article.nextSibling.parentNode.childNodes) : [];
        nodes.forEach(node => {
            if (node.nodeName === 'HR') {
                contents.push(content.trim());
                content = '';
            } else if (node.outerHTML) {
                if (!node.outerHTML.match(/<p>\{\{ include "(.*?)" \}\}<\/p>/g)) {
                    content += node.outerHTML;
                }
            }
        });

        if (content.trim() !== '') {
            contents.push(content.trim());
        }

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

