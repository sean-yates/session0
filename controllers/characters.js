const db = require('../models');

module.exports = {
    feed,
  };

function feed(req, res, next) {
    db.Character.find({}, function(err, characters) {
     res.render('feed', {
        characters,
      user: req.user,
      title: 'Character Feed',
      });
   });
  }