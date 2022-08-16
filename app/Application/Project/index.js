const ProjectService = require("./ProjectService");
const projectRepository = require("@Infrastructure/Repositories/Project");
const projectService = new ProjectService(projectRepository);

module.exports = projectService;