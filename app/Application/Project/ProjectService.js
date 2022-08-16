import { projectValidation } from "./validations";

class ProjectService {
  constructor(projectRepository) {
    this.projectRepository = projectRepository;
  }

  async addProject(dto) {
    if (projectValidation(dto) != true) {
      return { status: 400, message: projectValidation(dto).message };
    }

    const result = await this.projectRepository.add(dto.getProject());

    if (!result) {
      return { status: 400, message: "Project cannot be added" };
    }

    return { status: 200, message: "Project added successfully" };
  }

  async updateProject(dto) {
    if (projectValidation(dto) != true) {
      return { status: 400, message: projectValidation(dto).message };
    }

    const Project = await this.projectRepository.fetchById(dto.getProjectId());

    if (Project.length == 0) {
      return { status: 404, message: "No Project found with such title" };
    }

    const result = await this.projectRepository.update(dto.getProject());

    if (!result) {
      return { status: 400, message: "Project update failed" };
    }

    return { status: 200, message: "Project updated successfully" };
  }

  async findProject(dto) {
    const Project = await this.projectRepository.fetchById(dto.getProjectId());

    if (Project.length == 0) {
      return {  status: 404, message: "no Project found against the provided input"};
    }

    return { status: 200, message: Project };
  }

  async getProjects() {
    const projects = await this.projectRepository.fetchAll();

    return { status: 200, message: projects };
  }

  async deleteProject(dto) {
    const Project = await this.projectRepository.fetchById(dto.getProjectId());

    if (Project.length == 0) {
      return { status: 400, message: "Project doesn't exists" };
    }

    await this.projectRepository.remove(dto.getProjectId());

    return { status: 200, message: "Project deleted successfully" };
  }
}

module.exports = ProjectService;
