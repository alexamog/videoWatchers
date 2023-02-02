const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'videouser',
  password: 'videouser3495',
  database: 'videoapp'
});


db.connect(function (err) {
  if (err) {
    console.log(err);
  }
  else {
    console.log("Database connected.");
  }
});

module.exports = db;