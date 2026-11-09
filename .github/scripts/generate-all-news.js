const fs   = require('fs');
const path = require('path');

const directoryPath       = path.join(process.env.GITHUB_WORKSPACE, 'docs/_includes/news');
const outputFile          = path.join(process.env.GITHUB_WORKSPACE, 'docs/_includes/generated-all-news.md');
const newsOutputDirectory = path.join(process.env.GITHUB_WORKSPACE, 'docs/news');
const archiveDirectory    = path.join(process.env.GITHUB_WORKSPACE, 'docs/news-archive');

try {
    fs.mkdirSync(archiveDirectory, { recursive: true });

    // Scan the daily news sources.
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            throw new Error('Unable to scan directory: ' + err);
        }

        // Sort dates chronologically so each archive runs January to December.
        const mdFiles = files
          .filter(file => /^\d{8}\.md$/.test(file))
          .sort();

        const archivePages = new Map();
        let currentMonth   = '';
        const monthNames   = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        mdFiles.forEach(file => {
            const date        = file.replace('.md', '');              // e.g. "20230526"
            const year        = date.slice(0, 4);                     // "2023"
            const month       = monthNames[parseInt(date.slice(4, 6), 10) - 1]; // "May"

            // Extract day-of-month and turn it into an ordinal suffix:
            const newsYear  = date.slice(0, 4);                                   // "2023"
            const newsMonth = monthNames[parseInt(date.slice(4, 6), 10) - 1];    // "May"
            const newsDay   = parseInt(date.slice(6, 8), 10);                     // 26
            let suffix      = 'th';
            if (newsDay % 10 === 1 && newsDay !== 11) suffix = 'st';
            else if (newsDay % 10 === 2 && newsDay !== 12) suffix = 'nd';
            else if (newsDay % 10 === 3 && newsDay !== 13) suffix = 'rd';

            const formattedDateLabel = `${newsDay}${suffix} ${newsMonth} ${newsYear}`;

            // (A) Build a lightweight yearly archive linking to the daily pages.
            if (!archivePages.has(year)) {
                archivePages.set(year, `---
label: "${year}"
icon: calendar
image: /static/thumbnail.jpg
---

# ${year} News

{{ include "hero-sponsor" }}

---
`);
                currentMonth = '';
            }

            let archiveContent = archivePages.get(year);
            if (month !== currentMonth) {
                archiveContent += `\n## ${month}\n\n`;
                currentMonth = month;
            }
            archiveContent += `- [${formattedDateLabel}](/news/${date})\n`;
            archivePages.set(year, archiveContent);

            // (B) Build the daily page: docs/news/YYYYMMDD.md.
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

        // Write each year page and keep the old archive URL as a small year index.
        for (const [year, content] of archivePages) {
            const archiveFile = path.join(archiveDirectory, `${year}.md`);
            fs.writeFileSync(archiveFile, content + '\n---\n\n{{ include "advertise-banner" }}\n');
            console.log(`Successfully written yearly archive: ${archiveFile}`);
        }

        const outputContent = Array.from(archivePages.keys())
            .map(year => `- [${year} News](/news-archive/${year})`)
            .join('\n') + '\n';

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
