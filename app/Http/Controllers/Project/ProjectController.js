import CreateProjectDTO from "@Application/Project/CreateProjectDTO.js";
import GetProjectDTO from "@Application/Project/GetProjectDTO";
import UpdateProjectDTO from "@Application/Project/UpdateProjectDTO";
import DeleteProjectDTO from "@Application/Project/DeleteProjectDTO";

class ProjectController {
	constructor(projectService) {
		this.projectService = projectService
	}

	addProject= async (req, res) => {
		const { name,description,userID } = req.body
		const dto = new CreateProjectDTO(name,description,userID)
		
		const response = await this.projectService.addProject(dto);
		res.send(response)
	}

	updateProject = async (req, res) => {
		const { projId } = req.params
		const {name,description} = req.body
		const dto =new UpdateProjectDTO(projId,name,description)
		
		const response = await this.projectService.updateProject(dto);
		res.send(response)
	}

	findProject = async (req, res) => {
		const { projId } = req.params
		const dto = new GetProjectDTO(projId)

		const response = await this.projectService.findProject(dto)
		res.send(response)
	}

	getProjects = async (req, res) => {
		const response = await this.projectService.getProjects()
		res.send(response)
	}

    deleteProject= async (req, res) => {
        const { projId } = req.params
		const dto = new DeleteProjectDTO(projId)

		const response = await this.projectService.deleteProject(dto)
		res.send(response)
    }
}

module.exports = ProjectController;