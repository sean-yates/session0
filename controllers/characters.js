const db = require('../models');

module.exports = {
    feed,
    newCharacter,
    create,
    deleteCharacter,
    viewCharacter,
    editCharacter,
  };

// show all characters
function feed(req, res, next) {
    db.Character.find({}).
    populate('user').
    exec( function(err, characters) {
      res.render('feed', {
         characters,
       currentUser: req.user,
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
    req.body.user = req.user
    db.Character.create( req.body, (err, createdCharacter ) => {
      if (err) return console.log(err);
      
      res.redirect('/characters')
    });
  }

  // delete character

  function deleteCharacter(req,res){
    db.Character.deleteOne({ _id: req.params.id }, function (err) {
      if(err) console.log(err);
      console.log("Successful deletion");
    });
    res.redirect(`/characters`);
  }

  // view character

  function viewCharacter(req,res){
    db.Character.findById(req.params.id).
    populate('user').
    exec( function(err, currentCharacter) {
      res.render('viewCharacter', {
        currentCharacter,
       currentUser: req.user,
       title: 'View Character',
       });
    });
  }

  // edit character page

  function editCharacter(req,res){
    db.Character.findById(req.params.id).
    populate('user').
    exec( function(err, currentCharacter) {
      res.render('editCharacter', {
        currentCharacter,
       currentUser: req.user,
       title: 'Edit Character',
       });
    });
  }