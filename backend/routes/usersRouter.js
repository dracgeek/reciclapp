const { Router } = require('express');
const router = Router();



router.get('/users', (req, res) => {
    res.send('user router');
})

module.exports = router;