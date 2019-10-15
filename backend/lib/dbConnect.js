const mysql = require('mysql');

/*Mysql no permite promesas sino callbacks, pero con 
este paquete de node, las puedo utilizar con tranquilidad
y además se puede utilizar async-await*/
const { promisify } = require('util');

/*Aqui es la conexion con la base de datos */
const { database } = require('../config/config');

/* POOL es el método que nos permite conectar a la BD */
const mysqlPool = mysql.createPool(database);

mysqlPool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }
    if (connection) connection.release();
    console.log('DB is connected')
    return;
});

/* Todo lo que comience con querys puedo aplicarle
el async-await o promesas, gracias al metodo promisify
del modulo util */
mysqlPool.query = promisify(mysqlPool.query);

module.exports = mysqlPool;