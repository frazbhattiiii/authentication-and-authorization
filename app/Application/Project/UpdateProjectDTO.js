export default class UpdateProjectDTO {
  constructor(projId, name, description) {
    this.projId = projId;
    this.name = name;
    this.description = description;
  }

  getProjectId() {
    return this.projId;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.description;
  }

  getProject() {
    const { projId, name, description } = this;
    return { name, description, projId };
  }
}
