const authController = require("./authControllers");
const authService = require("@Application/Auth");
const AuthController = new authController(authService);

module.exports = AuthController;
