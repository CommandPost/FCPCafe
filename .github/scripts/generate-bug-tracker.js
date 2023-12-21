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
      per_page: 100
    }
  });

  return response.data;
};

const generateMarkdown = (issues, path, sortFunc) => {
  let content = '';

  // sort issues according to provided sort function
  issues.sort(sortFunc);

  // select top 30
  issues = issues.slice(0, 30);

  // build the new list
  for (const issue of issues) {
    const date = new Date(issue.created_at).toLocaleDateString("en-US", { day: 'numeric', month: 'long', year: 'numeric' });
    content += `- [${issue.title} (${date})](${issue.html_url})\n`;
  }

  fs.writeFileSync(path, content);
};

const sumReactions = issue => {
  let total = 0;
  total += issue.reactions['+1'] || 0;
  total += issue.reactions['-1'] || 0;
  total += issue.reactions['laugh'] || 0;
  total += issue.reactions['hooray'] || 0;
  total += issue.reactions['confused'] || 0;
  total += issue.reactions['heart'] || 0;
  total += issue.reactions['rocket'] || 0;
  total += issue.reactions['eyes'] || 0;
  return total;
}

getIssues().then(issues => {
  const issuesFilteredByRecent = issues.filter(issue => issue.labels.length > 0 && !issue.labels.some(label => label.name === "Feature Request"));
  const issuesFilteredByLatest = issuesFilteredByRecent.filter(issue => issue.labels.some(label => label.name === "FCPX 10.7.1"));
  const issuesFilteredByPrevious = issuesFilteredByRecent.filter(issue => issue.labels.some(label => label.name === "FCPX 10.6.8"));

  generateMarkdown(issuesFilteredByRecent, 'docs/_includes/bugtracker-recent.md', (a, b) => new Date(b.created_at) - new Date(a.created_at));
  generateMarkdown(issuesFilteredByLatest, 'docs/_includes/bugtracker-latest.md', (a, b) => new Date(b.created_at) - new Date(a.created_at));
  generateMarkdown(issuesFilteredByPrevious, 'docs/_includes/bugtracker-previous.md', (a, b) => new Date(b.created_at) - new Date(a.created_at));
  generateMarkdown(issuesFilteredByRecent, 'docs/_includes/bugtracker-reactions.md', (a, b) => sumReactions(b) - sumReactions(a));
});
