const { Router } = require('express');

const router = Router();

router.get('/materials', (req, res) => {
    res.send('materials router');
})