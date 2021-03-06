var mysql = require("mysql");

//local//
var connection = mysql.createConnection({
   host: "localhost",
   port: 8080,
   user: "root",
   password: "password",
   database: "burgers_db"
 });


var connection = mysql.createConnection(process.env.BURGERSDB_URL);


connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
