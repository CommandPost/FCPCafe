const axios = require('axios');
const fs = require('fs');
const { GITHUB_TOKEN, REPO_NAME } = process.env;

const [owner, repo] = REPO_NAME.split('/');

const getIssues = async () => {
  const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/issues`, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`
    },
    params: {
      state: "open",
      per_page: 30
    }
  });

  return response.data.filter(issue => !issue.labels.some(label => label.name === "Feature Request"));
};

const generateMarkdown = (issues) => {
  // read the existing content
  let oldContent = fs.readFileSync('docs/bugtracker.md', 'utf-8');

  // split it at the marker line and keep only the part before it
  let marker = 'Here\'s a list of the 30 most recently reported Final Cut Pro bugs:';
  oldContent = oldContent.split(marker)[0];

  let newContent = `${oldContent}${marker}\n\n`;

  // build the new list
  for (const issue of issues) {
    const date = new Date(issue.created_at).toLocaleDateString("en-US", { day: 'numeric', month: 'long', year: 'numeric' });
    newContent += `- [${issue.title} (${date})](${issue.html_url})\n`;
  }

  fs.writeFileSync('docs/bugtracker.md', newContent);
};

getIssues().then(generateMarkdown);
