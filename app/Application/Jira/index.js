const JiraService = require("./JiraService");
const jira = require("@Infrastructure/Services/Jira");
const jiraService = new JiraService(jira);

module.exports = jiraService;
