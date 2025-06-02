const fs = require('fs');
const path = require('path');

const directoryPath = path.join(process.env.GITHUB_WORKSPACE, 'docs/_includes/news');
const sponsorsPath   = path.join(process.env.GITHUB_WORKSPACE, 'docs/_includes/sponsors');
const outputFile     = path.join(process.env.GITHUB_WORKSPACE, 'docs/_includes/generated-latest-news.md');

try {
    // Read all news files, sort descending (latest first)
    const newsFiles = fs.readdirSync(directoryPath)
        .filter(file => path.extname(file) === '.md')
        .sort()
        .reverse();

    if (newsFiles.length === 0) {
        throw new Error('No news articles found.');
    }

    // Only keep the first 50 news items
    const itemsToShow = newsFiles.slice(0, 50);

    // Read sponsor files
    const sponsorFiles = fs.readdirSync(sponsorsPath)
        .filter(file => path.extname(file) === '.md')
        .sort();

    let outputContent = '';
    let currentYear  = '';
    let currentMonth = '';
    const monthNames = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];
    let sponsorIndex = 0;

    itemsToShow.forEach((file, index) => {
        // file looks like "YYYYMMDD.md", so strip extension
        const dateStr = file.replace('.md', '');
        const year    = dateStr.slice(0, 4);
        const month   = dateStr.slice(4, 6);
        const monthName = monthNames[parseInt(month, 10) - 1];

        // Insert a new year header if we've moved into a different year
        if (year !== currentYear) {
            outputContent += `# ${year}\n`;
            currentYear = year;
            // Reset month tracking any time the year changes
            currentMonth = '';
        }

        // Insert a new month header if we've moved into a different month
        if (monthName !== currentMonth) {
            outputContent += `## ${monthName}\n\n`;
            currentMonth = monthName;
        }

        // Include the actual news snippet
        outputContent += `{{ include "news/${dateStr}" }}\n\n`;
        outputContent += `[!button text="Discuss this news item" variant="info"](news/${dateStr}/#discuss-this-page)\n\n`;
        outputContent += `---\n\n`;

        // Insert a sponsor block after each news entry
        if (sponsorFiles.length > 0) {
            if (index === 0) {
                // Always show the first sponsor (sponsorFiles[0]) only once at the top
                outputContent += `{{ include "sponsors/${sponsorFiles[0]}" }}\n\n---\n\n`;
            } else {
                // Cycle through the remaining sponsors
                sponsorIndex = (sponsorIndex % (sponsorFiles.length - 1)) + 1;
                outputContent += `{{ include "sponsors/${sponsorFiles[sponsorIndex]}" }}\n\n---\n\n`;
            }
        }
    });

    // Write the generated Markdown to the output file
    try {
        fs.writeFileSync(outputFile, outputContent);
        console.log(`Successfully written to ${outputFile}`);
    } catch (err) {
        throw new Error('Unable to write to file: ' + err);
    }

} catch (err) {
    console.error(err);
}