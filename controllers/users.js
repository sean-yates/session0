const db = require('../models');

module.exports = {
    isLoggedIn,
    login
  };

  function login(req,res){
    res.redirect('/auth/google');
  }


  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }