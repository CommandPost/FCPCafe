const fs = require('fs');
const path = require('path');

const directoryPath = path.join(process.env.GITHUB_WORKSPACE, 'docs/_includes/news');
const sponsorsPath = path.join(process.env.GITHUB_WORKSPACE, 'docs/_includes/sponsors');
const outputFile = path.join(process.env.GITHUB_WORKSPACE, 'docs/_includes/generated-latest-news.md');
const newsOutputDirectory = path.join(process.env.GITHUB_WORKSPACE, 'docs/news');  // Directory for individual news files in YYYYMMDD.md format

try {
    // Read the news files and find the latest date
    const newsFiles = fs.readdirSync(directoryPath)
        .filter(file => path.extname(file) === '.md')
        .sort()
        .reverse();

    if (newsFiles.length === 0) {
        throw new Error('No news articles found.');
    }

    const latestNewsDate = newsFiles[0].replace('.md', '');
    const latestYear = parseInt(latestNewsDate.slice(0, 4), 10);
    const latestMonth = parseInt(latestNewsDate.slice(4, 6), 10) - 1; // Months are 0-indexed
    const latestDate = new Date(latestYear, latestMonth);

    // Calculate the start date of the 3-month period
    const threeMonthsAgo = new Date(latestDate);
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 2); // 3 months including the current month
    const startYear = threeMonthsAgo.getFullYear().toString();
    const startMonth = (threeMonthsAgo.getMonth() + 1).toString().padStart(2, '0');  // Months are 0-indexed, so we add 1

    // Read the sponsor files
    const sponsorFiles = fs.readdirSync(sponsorsPath)
        .filter(file => path.extname(file) === '.md')
        .sort();

    let outputContent = '';
    let currentYear = '';
    let currentMonth = '';
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let sponsorIndex = 0;

    newsFiles.forEach((file, index) => {
        const date = file.replace('.md', '');
        const year = date.slice(0, 4);
        const month = date.slice(4, 6);
        if (year < startYear || (year === startYear && month < startMonth)) {
            return;
        }

        const monthName = monthNames[parseInt(month, 10) - 1];

        // Update the year and month headers if needed
        if (year !== currentYear) {
            outputContent += `# ${year}\n`;
            currentYear = year;
        }
        if (monthName !== currentMonth) {
            outputContent += `## ${monthName}\n\n`;
            currentMonth = monthName;
        }

        outputContent += `{{ include "news/${date}" }}\n\n[!button text=\"Discuss this news item\" variant=\"info\"](news/${date}/#discuss-this-page)\n\n---\n\n`;

        // Add sponsor
        if (sponsorFiles.length > 0) {
            // Always show sponsor-01.md as the first sponsor item, but only once.
            if (index === 0) {
                outputContent += `{{ include "sponsors/${sponsorFiles[0]}" }}\n\n---\n\n`;
            } else {
                sponsorIndex = (sponsorIndex % (sponsorFiles.length - 1)) + 1;
                outputContent += `{{ include "sponsors/${sponsorFiles[sponsorIndex]}" }}\n\n---\n\n`;
            }
        }
    });

    // Write to the output file
    try {
        fs.writeFileSync(outputFile, outputContent);
        console.log(`Successfully written to ${outputFile}`);
    } catch (err) {
        throw new Error('Unable to write to file: ' + err);
    }

} catch (err) {
    console.error(err);
}