//Require moduls express other packets
const express = require('express');



//Initializations
const app = express();



//Settings
app.set('port', process.env.PORT || 3000);






//Middlewares






//Routes
app.use('/', require('./routes/indexRouter'));






//Static Files






//Server is listenning
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})