const { Router } = require('express');

const router = Router();

router.get('/locations', (req, res) => {
    res.send('locations router');
})