const express = require('express');
const bodyParser = require('body-parser');




//Initializations
const app = express();




//Setting




//Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



//Global Variables







//Routes
app.use('api', require('./routes/indexRouter'));
app.use('api', require('./routes/usersRouter'));
app.use('api', require('./routes/productsRouter'));
app.use('api', require('./routes/materialsRouter'));
app.use('api', require('./routes/LocationsRouter'));
app.use('api', require('./routes/collectsRouter'));




//Static Files