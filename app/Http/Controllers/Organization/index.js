const OrganizationController = require("./OrganizationController");
const organizationService = require("@Application/Organization");
const organizationController = new OrganizationController(organizationService);

module.exports = organizationController;