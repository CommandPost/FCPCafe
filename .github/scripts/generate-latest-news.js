const fs = require('fs');
const path = require('path');

const directoryPath = path.join(process.env.GITHUB_WORKSPACE, 'docs/_includes/news');
const outputFile = path.join(process.env.GITHUB_WORKSPACE, 'docs/_includes/generated-latest-news.md');

try {
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            throw new Error('Unable to scan directory: ' + err);
        }

        // Filter markdown files and sort in descending order
        const mdFiles = files
            .filter(file => path.extname(file) === '.md')
            .sort()
            .reverse();

        let outputContent = '';
        let currentYear = '';
        let currentMonth = '';
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

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

            outputContent += `{{ include "news/${date}" }}\n\n---\n\n{{ include "discuss-todays-news" }}\n\n---\n\n`;
            if (index < 4) {
                outputContent += `{{ include "sponsors/sponsor-0${index + 1}" }}\n\n---\n\n`;
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