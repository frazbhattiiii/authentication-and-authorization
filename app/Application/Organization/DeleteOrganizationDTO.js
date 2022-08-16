
export default class DeleteOrganizationDTO {
	constructor(orgId) {
		this.orgId = orgId;
	}

	getOrganizationId() {
		return this.orgId;
	}
}
