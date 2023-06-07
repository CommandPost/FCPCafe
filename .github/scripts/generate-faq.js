const fs = require('fs');
const path = require('path');

const directoryPath = path.join(process.env.GITHUB_WORKSPACE, 'docs/_includes/faq');
const outputFile = path.join(process.env.GITHUB_WORKSPACE, 'docs/_includes/generated-faq.md');

try {
    fs.readdir(directoryPath, async function (err, files) {
        if (err) {
            throw new Error('Unable to scan directory: ' + err);
        }

        // filter out non-markdown files and create an array of objects containing file info
        const fileInfo = files.filter(file => path.extname(file) === '.md').map(file => {
            const content = fs.readFileSync(path.join(directoryPath, file), 'utf-8');
            const firstLine = content.split('\n')[0];
            return { file, firstLine };
        });

        // sort the fileInfo array based on the first line
        fileInfo.sort((a, b) => a.firstLine.localeCompare(b.firstLine));

        let fileContent = '';
        let lastInitial = '';

        fileInfo.forEach(function ({ file, firstLine }) {
            // Removing file extension for include command
            const fileNameWithoutExtension = path.parse(file).name;

            // Extract first character of the file name
            const currentInitial = firstLine.charAt(0).toUpperCase();

            // If current initial is different from last initial, then add a new section
            if (currentInitial !== lastInitial) {
                // Don't add '---' for the first section
                if (lastInitial !== '') {
                    fileContent += '\n---\n\n';
                }

                fileContent += `## ${currentInitial}\n\n`;
                lastInitial = currentInitial;
            }

            fileContent += `{{ include "faq/${fileNameWithoutExtension}" }}\n\n---\n\n`;
        });

        // Remove the last extra line and '---'
        fileContent = fileContent.slice(0, -5);

        // Write to the output file
        try {
            fs.writeFileSync(outputFile, fileContent);
            console.log(`Successfully written to ${outputFile}`);
        } catch (err) {
            throw new Error('Unable to write to file: ' + err);
        }
    });
} catch (err) {
    console.error(err);
}