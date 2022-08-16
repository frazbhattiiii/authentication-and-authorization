require("dotenv").config();
require = require('esm')(module);
require('module-alias/register')

const config = require("../App/Infrastructure/Config");
const app = require("../App/HTTP/Server");

const {server} = config

app.listen(`${server.PORT}`, () => {
	console.log(`[HTTP]: ${server.APP_NAME} Listening on port ${server.PORT} `);
});