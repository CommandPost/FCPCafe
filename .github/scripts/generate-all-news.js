const fs   = require('fs');
const path = require('path');

const directoryPath       = path.join(process.env.GITHUB_WORKSPACE, 'docs/_includes/news');
const sponsorsPath        = path.join(process.env.GITHUB_WORKSPACE, 'docs/_includes/sponsors');
const outputFile          = path.join(process.env.GITHUB_WORKSPACE, 'docs/_includes/generated-all-news.md');
const newsOutputDirectory = path.join(process.env.GITHUB_WORKSPACE, 'docs/news');

try {
    // 1) Read and sort sponsor files
    const sponsorFiles = fs
      .readdirSync(sponsorsPath)
      .filter(file => path.extname(file) === '.md')
      .sort();

    // 2) Scan the “news include” directory
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            throw new Error('Unable to scan directory: ' + err);
        }

        // Filter only .md, sort descending (latest first)
        const mdFiles = files
          .filter(file => path.extname(file) === '.md')
          .sort()
          .reverse();

        let outputContent  = '';
        let currentYear    = '';
        let currentMonth   = '';
        const monthNames   = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        let sponsorIndex   = 0;

        mdFiles.forEach((file, index) => {
            const date        = file.replace('.md', '');              // e.g. "20230526"
            const year        = date.slice(0, 4);                     // "2023"
            const month       = monthNames[parseInt(date.slice(4, 6), 10) - 1]; // "May"

            // ─────────────────────────────────────────────────────────────────────────────
            // (A) BUILD “generated-all-news.md” (the long page that lists every news item)
            // ─────────────────────────────────────────────────────────────────────────────

            // 1. Insert a new year header if needed
            if (year !== currentYear) {
                outputContent += `# ${year}\n`;
                currentYear = year;
                // Whenever the year changes, reset the month tracker
                currentMonth = '';
            }

            // 2. Insert a new month header if needed
            if (month !== currentMonth) {
                outputContent += `## ${month}\n\n`;
                currentMonth = month;
            }

            // 3. Include the entire file via Retype’s include syntax, then a “Discuss” button, then a separator
            outputContent += `{{ include "news/${date}" }}\n\n`;
            outputContent += `[!button text="Discuss this news item" variant="info"](news/${date}/#discuss-this-page)\n\n`;
            outputContent += `---\n\n`;

            // 4. Rotate through sponsors
            if (sponsorFiles.length > 0) {
                if (index === 0) {
                    // Show sponsorFiles[0] once at the very top
                    outputContent += `{{ include "sponsors/${sponsorFiles[0]}" }}\n\n---\n\n`;
                } else {
                    sponsorIndex = (sponsorIndex % (sponsorFiles.length - 1)) + 1;
                    outputContent += `{{ include "sponsors/${sponsorFiles[sponsorIndex]}" }}\n\n---\n\n`;
                }
            }

            // ─────────────────────────────────────────────────────────────────────────────
            // (B) BUILD THE “DAILY” PAGE: docs/news/YYYYMMDD.md (one file per day)
            // ─────────────────────────────────────────────────────────────────────────────

            // Extract day-of-month and turn it into an ordinal suffix:
            const newsYear  = date.slice(0, 4);                                   // "2023"
            const newsMonth = monthNames[parseInt(date.slice(4, 6), 10) - 1];    // "May"
            const newsDay   = parseInt(date.slice(6, 8), 10);                     // 26
            let suffix      = 'th';
            if (newsDay % 10 === 1 && newsDay !== 11) suffix = 'st';
            else if (newsDay % 10 === 2 && newsDay !== 12) suffix = 'nd';
            else if (newsDay % 10 === 3 && newsDay !== 13) suffix = 'rd';

            const formattedDateLabel = `${newsDay}${suffix} ${newsMonth} ${newsYear}`;
            const dailyOutputFile    = path.join(newsOutputDirectory, `${date}.md`);

            // Build frontmatter for the daily page
            const dailyMetadata = `---
label: ${formattedDateLabel}
meta:
  title: "News - ${formattedDateLabel}"
icon: broadcast
image: /static/thumbnail.jpg
---

`;

            // The “daily” page just shows a year/month heading plus an include of the raw file
            const dailyContent = dailyMetadata +
                                 `# ${newsYear}\n## ${newsMonth}\n\n` +
                                 `{{ include "news/${date}" }}`;

            try {
                fs.writeFileSync(dailyOutputFile, dailyContent);
                console.log(`Successfully written daily page: ${dailyOutputFile}`);
            } catch (err) {
                throw new Error('Unable to write daily news file: ' + err);
            }

            // ─────────────────────────────────────────────────────────────────────────────
            // (C) BUILD “INDIVIDUAL” ENTRY PAGES: docs/news/YYYYMMDD-01.md, -02.md, etc.
            // ─────────────────────────────────────────────────────────────────────────────

            // 1) Read the raw markdown for this date
            const rawData = fs.readFileSync(path.join(directoryPath, file), 'utf8');

            // 2) Split on “\n---\n” to get each entry
            const entries = rawData.split('\n---\n');

            entries.forEach((entryBlock, entryIndex) => {
                // Trim away leading/trailing whitespace, then split into lines
                const lines = entryBlock.trim().split('\n');
                let entryTitle = formattedDateLabel; // fallback if no “### …” heading present

                // If the first line is a “### …” heading, extract the bracketed text
                if (lines[0].startsWith('### ')) {
                    const headingLine = lines.shift().substring(4).trim();
                    // headingLine might look like “[26th May 2023](/news/20230526)”
                    const match = headingLine.match(/\[(.*?)\]\(.*?\)/);
                    if (match) {
                        entryTitle = match[1]; // e.g. "26th May 2023"
                    } else {
                        entryTitle = headingLine.replace(/^###\s*/, '');
                    }
                }

                // Re‐join the remaining lines as the “body” of this entry
                const entryBody = lines.join('\n').trim();

                // Zero-pad the entry index (01, 02, etc.)
                const ordinal = String(entryIndex + 1).padStart(2, '0');
                const entrySlug = `${date}-${ordinal}`; // e.g. "20230526-01"
                const entryOutputFile = path.join(newsOutputDirectory, `${entrySlug}.md`);

                // Build frontmatter for the individual‐entry page
                const entryMetadata = `---
label: ${entryTitle}
meta:
  title: "News - ${entryTitle}"
icon: broadcast
image: /static/thumbnail.jpg
---

`;

                // Combine frontmatter + entry body
                const entryContent = entryMetadata + entryBody;

                try {
                    fs.writeFileSync(entryOutputFile, entryContent);
                    console.log(`Successfully written entry page: ${entryOutputFile}`);
                } catch (err) {
                    throw new Error('Unable to write individual entry file: ' + err);
                }
            });
        });

        // Finally, write the “generated‐all‐news.md” index
        try {
            fs.writeFileSync(outputFile, outputContent);
            console.log(`Successfully written to index file: ${outputFile}`);
        } catch (err) {
            throw new Error('Unable to write to file: ' + err);
        }
    });
} catch (err) {
    console.error(err);
}