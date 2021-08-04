const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'Dobby.love32!',
  database: 'employeeTracker'
});

module.exports = db;