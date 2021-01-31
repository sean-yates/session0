const router = require('express').Router();
const passport = require('passport');
const { isLoggedIn, account } = require('../controllers/users');

router.get('/', function(req, res) {
  res.render('feed', {
    user: req.user,
    title: "Character Feed"
  });
});

router.get('/account',isLoggedIn,account)

router.get('/auth/google', passport.authenticate('google', {scope: [ 'profile','email' ]}))
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/characters',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;