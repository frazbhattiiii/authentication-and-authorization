import { organizationValidation } from "./validations";

class OrganizationService {
  constructor(organizationRepository) {
    this.organizationRepository = organizationRepository;
  }

  async addOrganization(dto) {
    if (organizationValidation(dto) != true) {
      return { status: 400, message: organizationValidation(dto).message };
    }

    const result = await this.organizationRepository.add(dto.getOrganization());

    if (!result) {
      return { status: 400, message: "Organization cannot be added" };
    }

    return { status: 200, message: "Organization added successfully" };
  }

  async updateOrganization(dto) {
    if (organizationValidation(dto) != true) {
      return { status: 400, message: organizationValidation(dto).message };
    }

    const Organization = await this.organizationRepository.fetchById(
      dto.getOrganizationId()
    );

    if (Organization.length == 0) {
      return { status: 404, message: "No Organization found with such title" };
    }

    const result = await this.organizationRepository.update(
      dto.getOrganization()
    );

    if (!result) {
      return { status: 400, message: "Organization update failed" };
    }

    return { status: 200, message: "Organization updated successfully" };
  }

  async findOrganization(dto) {
    const Organization = await this.organizationRepository.fetchById(
      dto.getOrganizationId()
    );

    if (Organization.length == 0) {
      return { status: 404, message: "no Organization found against the provided input"};
    }

    return { status: 200, message: Organization };
  }

  async getOrganizations() {
    const result = await this.organizationRepository.fetchAll();

    return { status: 200, message: result };
  }

  async deleteOrganization(dto) {
    const Organization = await this.organizationRepository.fetchById(
      dto.getOrganizationId()
    );

    if (Organization.length == 0) {
      return { status: 400, message: "Organization doesn't exists" };
    }

    await this.organizationRepository.remove(dto.getOrganizationId());

    return { status: 200, message: "Organization deleted successfully" };
  }
}

module.exports = OrganizationService;
