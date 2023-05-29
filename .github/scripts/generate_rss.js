const fs = require('fs');
const RSS = require('rss');
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

const generateRSS = () => {
  // Initialize RSS feed
  let feed = new RSS({
    title: 'FCP Cafe',
    description: 'The latest news from FCP Cafe',
    feed_url: 'https://fcp.cafe/rss.xml',
    site_url: 'https://fcp.cafe',
  });

  // Read and parse the Markdown file
  const fileContent = fs.readFileSync('docs/README.md', 'utf8');
  const tokens = md.parse(fileContent, {});

  // Loop through the tokens and add to the RSS feed
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i].type === 'heading_open' && tokens[i].tag === 'h3') {
      let title = tokens[i + 1].content;
      let description = tokens[i + 3].content;

      // Extract and parse date from title
      const datePattern = /\w+ \d{1,2}\w* \w+ \d{4}/g;
      const dateMatch = title.match(datePattern);
      let date;
      if (dateMatch) {
        date = new Date(dateMatch[0]);
      } else {
        date = new Date();
      }

      feed.item({
        title: title,
        description: description,
        date: date,
      });
    }
  }

  // Generate XML
  let xml = feed.xml({ indent: true });
  fs.writeFileSync('docs/rss.xml', xml);
};

generateRSS();
