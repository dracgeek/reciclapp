/* Conexion de la BD traida al index.js */
const { database } = require('./lib/dbConnect');
/* -------------------------------------------- */

const express = require('express');
const cors = require('cors');

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Global Variables

//Routes
app.use('/api', require('./routes/api/indexRouter'));
app.use('/api/users', require('./routes/api/usersRouter'));
app.use('/api/usersForm', require('./routes/api/usersForm'));
app.use('/api/products', require('./routes/api/productsRouter'));
app.use('/api/materials', require('./routes/api/materialsRouter'));
app.use('/api/locations', require('./routes/api/LocationsRouter'));
app.use('/api/collects', require('./routes/api/collectsRouter'));

// Starting The Server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});