const db = require('../models');

module.exports = {
    feed,
    newCharacter,
    create,
  };

// show all characters
function feed(req, res, next) {
    db.Character.find({}, function(err, characters) {
     res.render('feed', {
        characters,
      user: req.user,
      title: 'Character Feed',
      });
   });
  }

// new character page

function newCharacter(req, res) {
  res.render('newCharacter', {title: 'New Character'})
}

// creation of new character
  function create(req,res){
    db.Character.create( req.body, (err, createdCharacter ) => {
      if (err) return console.log(err);
      
      res.redirect('/characters')
    });
  }