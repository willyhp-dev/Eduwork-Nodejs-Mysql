const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pontianak1",
  database: "eduwork-testing",
});

module.exports = connection;
