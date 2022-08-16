const ProjectRepository = require("./ProjectRepository");
const connection = require("../../Database/mysqlConnection");
const projectRepository = new ProjectRepository(connection);

module.exports =projectRepository;