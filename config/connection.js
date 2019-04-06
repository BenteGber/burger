const mysql = require('mysql');
let connection;

if (process.env.JAWSDB_URL) {
    console.log('JAWS')
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    console.log("local")
  connection = mysql.createConnection({
    host: 'localhost',
    port: process.env.PORT || 3306,
    user: process.env.MYSQLDEVUSRNAME,
    password: process.env.MYSQLDEVPWD,
    database: 'burgers_db',
  });
}

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
