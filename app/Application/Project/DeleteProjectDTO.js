
export default class DeleteProjectDTO {
	constructor(projId) {
		this.projId = projId;
	}

	getProjectId() {
		return this.projId;
	}
}
