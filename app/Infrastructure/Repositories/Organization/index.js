const OrganizationRepository = require("./OrganizationRepository");
const connection = require("../../Database/mysqlConnection");
const organizationRepository = new OrganizationRepository(connection);

module.exports =organizationRepository;