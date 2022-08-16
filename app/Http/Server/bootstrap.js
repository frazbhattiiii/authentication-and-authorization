require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

module.exports = app;