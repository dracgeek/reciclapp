require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== "production",
    conect: process.env.DB_CONNECTION,
    port: process.env.PORT,
    dbUser: process.env.DB_USERNAME,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbName: process.env.DB_NAME
};

module.exports = { config }