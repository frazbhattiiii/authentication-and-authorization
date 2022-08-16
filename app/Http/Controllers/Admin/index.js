const AdminController = require("./AdminController");
const adminService = require("@Application/Admin");
const adminController = new AdminController(adminService);

module.exports = adminController;