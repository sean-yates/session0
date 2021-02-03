const db = require('../models');

module.exports = {
    feed,
    create,
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


  function create(req,res){
    db.Flight.create( req.body, (err, createdCharacter ) => {
      if (err) return console.log(err);
      
      res.redirect('/characters')
    });
  }