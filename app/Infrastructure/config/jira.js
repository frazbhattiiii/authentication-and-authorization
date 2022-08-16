require("dotenv").config();

module.exports = {
    JIRA_CLIENT_ID: process.env.JIRA_CLIENT_ID,
    JIRA_CLIENT_SECRET: process.env.JIRA_CLIENT_SECRET,
    JIRA_AUTHCODE_URI: process.env.JIRA_AUTHCODE_URI,
    JIRA_TOKEN_BASE_URI: process.env.JIRA_TOKEN_BASE_URI,
    JIRA_TOKEN_REDIRECT_URI: process.env.JIRA_TOKEN_REDIRECT_URI,
};