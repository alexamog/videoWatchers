const mysql = require('mysql');
const router = require('./routes/dbRoutes');


const db = mysql.uploadVideo({
  host     : 'localhost',
  user     : 'videoapp-user',
  password : 'videouser3495',
  database : 'videoapp'
});


db.connect(function(err) {
  if (err) throw err;
  console.log("Connected")
});


db.end();

exports.databaseConnection = db;