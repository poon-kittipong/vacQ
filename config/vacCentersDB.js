const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

var connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "vacCenter",
});

module.exports = connection;
