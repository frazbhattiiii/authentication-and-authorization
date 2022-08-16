const mysql2 = require("mysql2");
const config = require("../Config");

const {database: {mysql}} = config

const connection = mysql2.createConnection({
	user: mysql.USERNAME,
	host:mysql.HOST,
	password: mysql.PASSWORD,
	database:mysql.DB
})

// creating db if not exists
connection.query(`CREATE DATABASE IF NOT EXISTS ${mysql.DB};`);
connection.query(`USE ${mysql.DB};`);

// creating tables if not exist
// connection.query("CREATE TABLE IF NOT EXISTS `books` (`id` VARCHAR(100) NOT NULL,`categoryId` VARCHAR(100) DEFAULT NULL,`name` TEXT NOT NULL,`noteId` VARCHAR(100) DEFAULT NULL,`pageNo` INT(11) NOT NULL DEFAULT '0',`createdAt` DATE NOT NULL,`path` TEXT NOT NULL,PRIMARY KEY (`id`));");


module.exports = connection;