const { Router } = require('express');
const router = Router();

router.get('/show', (req, res) => {
    res.send('user router');
})

module.exports = router;




