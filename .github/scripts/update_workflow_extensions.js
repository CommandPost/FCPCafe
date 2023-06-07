const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../../../docs/_includes/workflow-extensions');
const outputFile = path.join(__dirname, '../../../docs/_includes/workflow-extensions.md');

fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    let fileContent = '';

    files.forEach(function (file) {
        // Ignore if not a markdown file
        if(path.extname(file) !== '.md') return;

        // Removing file extension for include command
        const fileNameWithoutExtension = path.parse(file).name;

        fileContent += `{{ include "${fileNameWithoutExtension}" }}\n\n---\n\n`;
    });

    // Remove the last extra line and '---'
    fileContent = fileContent.slice(0, -5);

    // Write to the output file
    fs.writeFileSync(outputFile, fileContent);
});