const tokensRepository = require("./tokensRepository.js");
const connection = require("../../Database/mysqlConnection");
const TokensRepository = new tokensRepository(connection);

module.exports = TokensRepository;