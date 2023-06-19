const fs = require('fs');
const path = require('path');
const { PAGE_NAME } = process.env;

const directoryPath = path.join(process.env.GITHUB_WORKSPACE, `docs/_includes/${PAGE_NAME}`);
const outputFile = path.join(process.env.GITHUB_WORKSPACE, `docs/_includes/generated-${PAGE_NAME}.md`);

try {
    const files = fs.readdirSync(directoryPath);
    if (!files.length) {
        console.log(`No files found in the directory ${directoryPath}`);
    }

    let fileContent = '';
    let lastInitial = '';

    // Map files to an array of objects containing file name and first line
    let fileList = [];
    for (const file of files) {
        // Ignore if not a markdown file
        if(path.extname(file) !== '.md') {
            console.log(`Ignoring non-markdown file: ${file}`);
            continue;
        }

        const filePath = path.join(directoryPath, file);
        let fileContent = fs.readFileSync(filePath, 'utf-8');

        // Check if the first line is an include command
        const includeCommandRegex = /^\s*\{\{\s*include\s*"([^"]+)"\s*\}\}\s*$/;
        const match = fileContent.match(includeCommandRegex);

        if (match) {
            // If so, read the included file instead
            const includedFilePath = path.join(process.env.GITHUB_WORKSPACE, `docs/_includes/${match[1]}.md`);
            if (fs.existsSync(includedFilePath)) {
                fileContent = fs.readFileSync(includedFilePath, 'utf-8');
            } else {
                console.error(`The included file ${includedFilePath} doesn't exist.`);
                continue;
            }
        }

        const firstLineWithoutHashes = fileContent.split('\n')[0].replace(/^[#]*\s*/, ''); // remove hashes and leading space
        fileList.push({file, firstLine: firstLineWithoutHashes});
    }

    // Sort the array based on the first line of each file
    fileList.sort((a, b) => a.firstLine.localeCompare(b.firstLine));

    for (const {file, firstLine} of fileList) {
        const fileNameWithoutExtension = path.parse(file).name;

        // Extract first character of the first line
        const currentInitial = firstLine.charAt(0).toUpperCase();

        // If current initial is different from last initial, then add a new section
        if (currentInitial !== lastInitial) {
            // Add '---' for the new section except the first
            if (lastInitial !== '') {
                fileContent += '\n---\n\n';
            }

            fileContent += `## ${currentInitial}\n\n`;
            lastInitial = currentInitial;
        }

        fileContent += `{{ include "${PAGE_NAME}/${fileNameWithoutExtension}" }}\n`;

        // Add '---' separator if the next file is not of the same initial
        const nextFile = fileList[fileList.findIndex(f => f.file === file) + 1];
        if (nextFile && currentInitial !== nextFile.firstLine.charAt(0).toUpperCase()) {
            fileContent += '\n---\n\n';
        }
    }

    // Remove the last extra lines
    fileContent = fileContent.replace(/\n$/, '');

    // Write to the output file
    try {
        fs.writeFileSync(outputFile, fileContent);
        console.log(`Successfully written to ${outputFile}`);
    } catch (err) {
        throw new Error('Unable to write to file: ' + err);
    }
} catch (err) {
    console.error(err);
}