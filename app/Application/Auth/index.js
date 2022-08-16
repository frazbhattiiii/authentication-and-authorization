const AuthService = require("./AuthService");
const usersRepository = require("@Infrastructure/Repositories/User");
const tokensRepository = require("@Infrastructure/Repositories/tokens");
const authService = new AuthService(usersRepository,tokensRepository);

module.exports = authService;
