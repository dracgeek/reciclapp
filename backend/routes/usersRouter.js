const { Router } = require('express');
const router = Router();


//POOL hace referencia a la base de datos
const pool = require('../database');

router.get('/users', (req, res) => {
    res.send('user router');
})

module.exports = router;