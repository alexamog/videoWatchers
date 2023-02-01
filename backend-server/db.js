const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'videouser',
  password: 'videouser3495',
  database: 'videoapp'
});


conn.connect(function (err) {
  if (err) {
    console.log(err);
  }
  else {
    console.log("Database connected.");
  }
});

module.exports = conn;