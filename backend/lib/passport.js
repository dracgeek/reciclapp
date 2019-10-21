/* Aqui vamos a utilizar los metodos de autenticación */
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

/* Referencia a la BD */
const poolConnection = require('../lib/dbConnect');

/* Encriptar contraseña */
const {encryptPassword, matchPassword } = require('./helpers');

passport.use('local.signin', new LocalStrategy({
  usernameField: 'email',
  passwordField:'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  const registros = await poolConnection.query('SELECT FROM users WHERE email = ?', [email]);

  if (registros.length > 0) {
    const user = registros[0];
    const validPassword = await matchPassword(password, user.password);

    if (validPassword) {
        done(null, user, req.flash('success', 'Bienvenido ' + user.fullName));
    } else {
        done(null, false, req.flash('message', 'Contraseña Incorrecta'));
    }
} else {
    return done(null, false, req.flash('message', 'El Usuario No Existe'));
}}));

passport.use('local.signup', new LocalStrategy({
  usernameField: 'email',
  passwordField:'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  const { fullName } = req.body;
  const newRegister = {
    email,
    password,
    fullName
  }
  newRegister.password = await encryptPassword(password);
  const result = await poolConnection.query('INSERT INTO users SET ?', [newRegister]);
  // newRegister.id = result.insertId;
  return done(null, newRegister);
}));

passport.serializeUser((userRegistred, done) => {
  done(null, userRegistred.id);
});

passport.deserializeUser(async(id, done) => {
  const rows = await poolConnection.query('SELECT * FROM users WHERE id = ?', [id]);
  done(null, rows[0]);
});