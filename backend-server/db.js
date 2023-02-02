const mysql = require('mysql');

const conn = mysql.createConnection({
  host: '10.5.0.7',
  user: 'videoapp-user',
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