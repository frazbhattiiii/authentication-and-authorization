export default class UpdateOrganizationDTO {
  constructor(orgId, name, type) {
    this.orgId = orgId;
    this.name = name;
    this.type = type;
  }

  getOrganizationId() {
    return this.orgId;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }

  getOrganization() {
    const { orgId, name, type } = this;
    return { name, type, orgId };
  }
}
