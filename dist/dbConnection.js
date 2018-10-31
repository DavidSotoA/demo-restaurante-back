"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var pgp = require("pg-promise")();
var connection = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABSE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
};
var db = pgp(connection);
exports.default = db;
//# sourceMappingURL=dbConnection.js.map