export default class GetProjectDTO {
	constructor(projId) {
		this.projId = projId;
	}

	getProjectId() {
		return this.projId;
	}
}