export default class GetOrganzationDTO {
	constructor(orgId) {
		this.orgId = orgId;
	}

	getOrganizationId() {
		return this.orgId;
	}
}