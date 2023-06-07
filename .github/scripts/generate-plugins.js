const fs = require('fs');
const path = require('path');

const directoryPath = path.join(process.env.GITHUB_WORKSPACE, 'docs/_includes/plugins');
const outputFile = path.join(process.env.GITHUB_WORKSPACE, 'docs/_includes/generated-plugins.md');

try {
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            throw new Error('Unable to scan directory: ' + err);
        }

        let fileContent = '';
        let lastInitial = '';

        // Sort files array to guarantee alphabetical order
        files.sort();

        files.forEach(function (file) {
            // Ignore if not a markdown file
            if(path.extname(file) !== '.md') return;

            // Removing file extension for include command
            const fileNameWithoutExtension = path.parse(file).name;

            // Extract first character of the file name
            const currentInitial = fileNameWithoutExtension.charAt(0).toUpperCase();

            // If current initial is different from last initial, then add a new section
            if (currentInitial !== lastInitial) {
                // Don't add '---' for the first section
                if (lastInitial !== '') {
                    fileContent += '\n---\n\n';
                }

                fileContent += `## ${currentInitial}\n\n`;
                lastInitial = currentInitial;
            }

            fileContent += `{{ include "${fileNameWithoutExtension}" }}\n\n---\n\n`;
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