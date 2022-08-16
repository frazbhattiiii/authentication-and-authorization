require("dotenv").config();

module.exports = {
    APP_NAME: process.env.APP_NAME,
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET

};