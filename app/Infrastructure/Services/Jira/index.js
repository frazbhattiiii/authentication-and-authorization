const tokensRepository = require("../../Repositories/tokens");
const Jira = require("./Jira");
const jira = new Jira(tokensRepository);

module.exports = jira;