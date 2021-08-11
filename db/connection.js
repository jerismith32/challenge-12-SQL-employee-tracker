const mysql = require('mysql2');
const dotenv = require('dotenv').config();

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: process.env.PASSWORD,
  database: 'employeeTracker'
});

module.exports = db;