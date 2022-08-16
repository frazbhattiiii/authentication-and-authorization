import CreateProjectDTO from "@Application/Jira/CreateProjectDTO";
import CreateIssueDTO from "../../../Application/Jira/CreateIssueDTO";
class jiraController {
  constructor(jiraService) {
    this.jiraService = jiraService;
  }
  authUrl = async (req, res) => {
    const response = await this.jiraService.authUrl();
    res.send(response);
  };
  token = async (req, res) => {
    const code = req.query.code;
    const userId = "xyz";//User Id not coming just to check hard coded value
    const response = await this.jiraService.token(code, userId);
    res.send(response);
  };
  getUser = async (req, res) => {
    const userId = req.headers.user_id;
    const response = await this.jiraService.getUser(userId);
    res.send(response);
  };
  getAllprojects = async (req, res) => {
    const userId = req.headers.user_id;
    console.log(userId)
    const response = await this.jiraService.getAllprojects(userId);
    res.send(response);
  };
  createProject = async (req, res) => {
    const {
      key,
      name,
      projectTypeKey,
      projectTemplateKey,
      description,
      leadAccountId,
      url,
      assigneeType,
      avatarId,
    } = req.body;
    const userId = req.headers.user_id;
    const dto = new CreateProjectDTO(
      key,
      name,
      projectTypeKey,
      projectTemplateKey,
      description,
      leadAccountId,
      url,
      assigneeType,
      avatarId
    );
    const response = await this.jiraService.createProject( dto, userId);
    res.send(response);
  };
  getProjectById = async (req, res) => {
    const userId = req.headers.user_id;
    const { projectId } = req.params;
    const response = await this.jiraService.getProjectById( userId, projectId);
    res.send(response);
  };
  updateProject = async (req, res) => {
    const {
      key,
      name,
      projectTypeKey,
      projectTemplateKey,
      description,
      leadAccountId,
      url,
      assigneeType,
      avatarId,
    } = req.body;
    const id = req.headers.id;
    const userId = req.headers.user_id;
    const { projectId } = req.params;
    const dto = new CreateProjectDTO(
      key,
      name,
      projectTypeKey,
      projectTemplateKey,
      description,
      leadAccountId,
      url,
      assigneeType,
      avatarId
    );
    const response = await this.jiraService.updateProject(
      userId,
      dto,
      id,
      projectId
    );
    res.send(response);
  };
  deleteProject = async (req, res) => {
    const userId = req.headers.user_id;
    const { projectId } = req.params;
    const response = await this.jiraService.deleteProject(
      userId,
      projectId
    );
    res.send(response);
  };
  createIssue = async (req, res) => {
    const userId = req.headers.user_id;
    const {
      summary,
      description,
      projectId,
      issueType,      
    } = req.body;
    const dto= new CreateIssueDTO(summary,description,issueType,projectId);
    const response = await this.jiraService.createIssue( userId,dto);
    res.send(response);
  }
  getIssueById = async (req, res) => {
    const userId = req.headers.user_id;
    const { issueId } = req.params;
    const response = await this.jiraService.getIssueById(
      userId,
      issueId
    );
    res.send(response);
  };
  updateIssue = async (req, res) => {
    const userId = req.headers.user_id;
    const { issueId } = req.params;
    const {
      summary,
      description,
      projectId,
      issueType,      
    } = req.body;
    const dto= new CreateIssueDTO(summary,description,issueType,projectId);
    const response = await this.jiraService.updateIssue(
      userId,
      issueId,
      dto
    );
    res.send(response);
  };


}
module.exports = jiraController;
