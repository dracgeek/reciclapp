/* Conexion de la BD traida al index.js */
const { database } = require('./lib/dbConnect');
/* -------------------------------------------- */

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const flash = require('connect-flash');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');
const passport = require('passport');

//Initializations
const app = express();
/* Lo que passport necesita para trabajar */
require('./lib/passport');

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
/* Inicia Passport a trabajar*/
app.use(passport.initialize());
app.use(passport.session());

//Global Variables
// app.use((req, res, next) => {
//   app.locals.success = req.flash('success');
//   app.locals.message = req.flash('message');
//   next();
// });

//Routes
app.use('/api/users', require('./routes/api/authentication'));
app.use('/api/usersForm', require('./routes/api/usersForm'));
app.use('/api/products', require('./routes/api/productsRouter'));
app.use('/api/materials', require('./routes/api/materialsRouter'));
app.use('/api/locations', require('./routes/api/LocationsRouter'));
app.use('/api/collects', require('./routes/api/collectsRouter'));

// Starting The Server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});