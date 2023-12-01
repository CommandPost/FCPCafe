const fs = require('fs');
const path = require('path');

const directoryPath = path.join(process.env.GITHUB_WORKSPACE, 'docs/_includes/news');
const sponsorsPath = path.join(process.env.GITHUB_WORKSPACE, 'docs/_includes/sponsors');
const outputFile = path.join(process.env.GITHUB_WORKSPACE, 'docs/_includes/generated-latest-news.md');
const newsOutputDirectory = path.join(process.env.GITHUB_WORKSPACE, 'docs/news');  // Directory for individual news files

// Get the current date and calculate the start date of the 3-month period
const currentDate = new Date();
const threeMonthsAgo = new Date(currentDate);
threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
const startYear = threeMonthsAgo.getFullYear().toString();
const startMonth = (threeMonthsAgo.getMonth() + 1).toString().padStart(2, '0');  // Months are 0-indexed, so we add 1

try {
    // Read the sponsor files
    const sponsorFiles = fs.readdirSync(sponsorsPath).filter(file => path.extname(file) === '.md').sort();

    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            throw new Error('Unable to scan directory: ' + err);
        }

        // Filter markdown files and sort in descending order
        const mdFiles = files
            .filter(file => path.extname(file) === '.md')
            .sort()
            .reverse()
            .filter(file => {
                const year = file.slice(0, 4);
                const month = file.slice(4, 6);
                return year > startYear || (year === startYear && month >= startMonth);
            });

        let outputContent = '';
        let currentYear = '';
        let currentMonth = '';
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let sponsorIndex = 0;

        mdFiles.forEach((file, index) => {
            const date = file.replace('.md', '');
            const year = date.slice(0, 4);
            const month = monthNames[parseInt(date.slice(4, 6), 10) - 1];

            // Update the year and month headers if needed
            if (year !== currentYear) {
                outputContent += `# ${year}\n`;
                currentYear = year;
            }
            if (month !== currentMonth) {
                outputContent += `## ${month}\n\n`;
                currentMonth = month;
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
    });
} catch (err) {
    console.error(err);
}