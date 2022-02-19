const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // ADD SENHA MYSQL
  database: 'model_example'
});

module.exports = connection;
