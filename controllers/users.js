const db = require('../models');

module.exports = {
    isLoggedIn,
    account
  };

  function account(req,res){
    res.render('account',{title:'My Account'})
  }


  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }