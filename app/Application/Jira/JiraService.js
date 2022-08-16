class JiraService {
  constructor(jira) {
    this.jira = jira;
  }

  async authUrl() {
    const response = await this.jira.authUrl();
    return response;
  }
  async token(code,userId) {
    const response = await this.jira.token(code,userId);
    return response;
  }
  async getUser(userId) {
    const response = await this.jira.getUser(userId);
    return response;
  }
  async getAllprojects(userId) {
    const response = await this.jira.getAllprojects(userId);
    return response;
  }
  async createProject( dto,userId) {
    const response = await this.jira.createProject( dto,userId);
    return response;
  }
  async getProjectById(userId, projectId) {
    const response = await this.jira.getProjectById(
      userId,
      projectId
    );
    return response;
  }
  async updateProject(userId, dto,projectId) {
    const response = await this.jira.updateProject( userId, dto, projectId);
    return response;
  }
  async deleteProject(userId, projectId) {
    const response = await this.jira.deleteProject( userId,projectId);
    return response;
  }
  async createIssue(userId,dto){
    const response = await this.jira.createIssue(userId,dto);
    return response;
  }
  async getIssueById(userId,issueId){
    const response = await this.jira.getIssueById(userId,issueId);
    return response;
  }
  async updateIssue(userId,issueId,dto){
    const response = await this.jira.updateIssue(userId,issueId,dto);
    return response;
  }

}

module.exports = JiraService;
