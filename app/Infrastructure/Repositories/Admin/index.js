const AdminRepository = require("./AdminRepository");
const connection = require("../../Database/mysqlConnection");
const adminRepository = new AdminRepository(connection);

module.exports = adminRepository;