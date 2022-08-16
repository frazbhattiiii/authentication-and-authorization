const OrganizationService = require("./OrganizationService");
const organizationRepository = require("@Infrastructure/Repositories/Organization");
const organizationService = new OrganizationService(organizationRepository);

module.exports = organizationService;