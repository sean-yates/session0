const router = require('express').Router();
const charactersCtrl = require('../controllers/characters');

router.get('/characters', charactersCtrl.feed)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }

  module.exports = router;