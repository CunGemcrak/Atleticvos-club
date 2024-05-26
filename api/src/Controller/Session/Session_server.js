const server = require('../../app');
const cookieparser = require('cookie-parser');
const session = require('express-session');
const {
    APP_SECRET
  } = process.env;


server.use(cookieparser());
server.use(session(
    {
      name: 'sid',
      secret:APP_SECRET, // Debería estar en un archivo de environment
      resave:false,
      saveUninitialized:false,
      cookie:{
        maxAge: 1000 * 60 * 60 * 2 // Está en milisegundos --> 2hs
      }
    }
  ));


  const redirectLogin = (req, res, next) => {
    if(!req.session.userId) {
      res.redirect('/login');
    } else {
      next();
    }
  }