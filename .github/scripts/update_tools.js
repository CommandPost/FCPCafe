const fs = require('fs');
const path = require('path');

const directoryPath = path.join(process.env.GITHUB_WORKSPACE, 'docs/_includes/tools');
const outputFile = path.join(process.env.GITHUB_WORKSPACE, 'docs/_includes/tools.md');

try {
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      throw new Error('Unable to scan directory: ' + err);
    }

    let fileContent = '';

    // Sort filenames in alphabetical order
    files.sort();

    files.forEach(function (file) {
      // Ignore if not a markdown file
      if(path.extname(file) !== '.md') return;

      // Removing file extension for include command
      const fileNameWithoutExtension = path.parse(file).name;

      // Construct the title from the filename
      const title = fileNameWithoutExtension.split('').map((c, i) => i === 0 ? c.toUpperCase() : c).join('');

      fileContent += `## ${title}\n\n{{ include "${fileNameWithoutExtension}" }}\n\n---\n\n`;
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