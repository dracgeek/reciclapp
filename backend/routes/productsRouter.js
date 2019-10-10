const { Router } = require('express');

const router = Router();

router.get('/products', (req, res) => {
    res.send('products router')
})

module.exports = router;