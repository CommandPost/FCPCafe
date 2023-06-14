const fs = require('fs');
const path = require('path');

const pageName = 'fxplug';
const directoryPath = path.join(process.env.GITHUB_WORKSPACE, `docs/_includes/${pageName}`);
const outputFile = path.join(process.env.GITHUB_WORKSPACE, `docs/_includes/generated-${pageName}.md`);

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
                // Add '---' for the new section except the first
                if (lastInitial !== '') {
                    fileContent += '\n---\n\n';
                }

                fileContent += `## ${currentInitial}\n\n`;
                lastInitial = currentInitial;
            }

            fileContent += `{{ include "${pageName}/${fileNameWithoutExtension}" }}\n\n`;
        });

        // Remove the last extra line and '---'
        fileContent = fileContent.slice(0, -2);

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