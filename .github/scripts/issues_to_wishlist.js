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

  return response.data.filter(issue => issue.labels.some(label => label.name === "Feature Request"));
};

const generateMarkdown = (issues) => {
  let content = '# Wish List\n\n';
  content += 'Here\'s a list of the 30 most recently added Final Cut Pro feature requests:\n\n';

  for (const issue of issues) {
    const date = new Date(issue.created_at).toLocaleDateString("en-US", { day: 'numeric', month: 'long', year: 'numeric' });
    content += `- [${issue.title} (${date})](${issue.html_url})\n`;
  }

  fs.writeFileSync('docs/wishlist.md', content);
};

getIssues().then(generateMarkdown);
