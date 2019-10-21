const { Router } =require('express');
const router = Router();

/* La biblioteca tiene los métodos de autenticación creados anteriormente en passport.js */
const passport = require('passport');

router.post('/signin', async(req, res, next) => {
  passport.authenticate('local.signin', {
    // successRedirect: '../../../src/components/Login.jsx',
    // failureRedirect: '../../../src/components/RegisterOne.jsx',
    // failureFlash: true
  }, async() => {
  })(req, res, next)
});

router.post('/signup', async(req, res, next) => {
  passport.authenticate('local.signup', {
    // successRedirect: '../../../src/components/Login.jsx',
    // failureRedirect: '../../../src/components/RegisterOne.jsx',
    // failureFlash: true
  }, async () => {
  })(req, res, next);
});

module.exports = router;