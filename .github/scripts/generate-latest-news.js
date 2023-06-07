const fs = require('fs');
const path = require('path');

const directoryPath = path.join(process.env.GITHUB_WORKSPACE, 'docs/_includes/news');
const outputFile = path.join(process.env.GITHUB_WORKSPACE, 'docs/_includes/latest-news.md');

try {
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            throw new Error('Unable to scan directory: ' + err);
        }

        // Filter markdown files and sort in descending order
        const mdFiles = files
            .filter(file => path.extname(file) === '.md')
            .map(file => file.replace('.md', ''))
            .sort()
            .reverse()
            .slice(0, 5);  // take top 5

        let outputContent = '';
        mdFiles.forEach((file, index) => {
            outputContent += `{{ include "news/${file}" }}\n{{ include "discuss-todays-news" }}\n\n---\n\n`;
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