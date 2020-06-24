const dotenv = require("dotenv").config({path : '../.env'});
const pool = require("mysql2");

pool.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
});

module.exports = pool.promise();

