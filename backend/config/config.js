/* Busca el archivo .env con las variables de entorno
y las trae, funciona en cualquier archivo */
require('dotenv').config();

const database = {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASENAME,
    dev: process.env.NODE_ENV !== "production",
};

module.exports = { database };