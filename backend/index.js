const express = require('express');





//Initializations
const app = express();




//Setting




//Middlewares




//Global Variables







//Routes
app.use(require('./routes/indexRouter'));
app.use(require('./routes/usersRouter'));
app.use(require('./routes/productsRouter'));
app.use(require('./routes/materialsRouter'));
app.use(require('./routes/LocationsRouter'));
app.use(require('./routes/collectsRouter'));




//Static Files