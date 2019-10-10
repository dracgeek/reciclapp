const { Router } = require('express');

const router = Router();

router.get('/collects', (req, res) => {
    res.send('collects router');
})


module.exports = router;