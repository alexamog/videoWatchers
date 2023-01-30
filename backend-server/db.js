const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'db',
  password : '123',
  database : 'events'
});
 
connection.connect();   

connection.end();