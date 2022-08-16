const jiraController = require("./jiraController");
const jiraService = require("@Application/Jira");
const JiraController = new jiraController(jiraService);

module.exports = JiraController;
