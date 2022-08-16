const userRepository = require("./userRepository");
const connection = require("../../Database/mysqlConnection");
const UserRepository = new userRepository(connection);

module.exports = UserRepository;