const ProjectController = require("./ProjectController");
const projectService = require("@Application/Project");
const projectController = new ProjectController(projectService);

module.exports = projectController;