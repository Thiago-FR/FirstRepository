require('dotenv').config();

const { MYSQL_USER, MYSQL_PASSWORD, HOST, DB_PORT, DATABASE, DIALECT } = process.env;

module.exports = {
  development: {
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: DATABASE,
    host: HOST,
    port: DB_PORT,
    dialect: DIALECT,
  },
  test: {
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: DATABASE,
    host: HOST,
    port: DB_PORT,
    dialect: DIALECT,
  },
  production: {
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: DATABASE,
    host: HOST,
    port: DB_PORT,
    dialect: DIALECT,
  },
};