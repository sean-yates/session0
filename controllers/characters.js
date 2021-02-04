const db = require('../models');

module.exports = {
    feed,
    newCharacter,
    create,
    deleteCharacter,
    viewCharacter,
    editCharacter,
    updateCharacter,
    createComment,
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
      if(err) console.log(err);
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
      if(err) console.log(err);
      res.render('editCharacter', {
        currentCharacter,
       currentUser: req.user,
       title: 'Edit Character',
       });
    });
  }


  // update character

  function updateCharacter(req,res){
    const id = req.params.id;
  
    db.Character.findByIdAndUpdate( 
      id,
      {
        $set: {
          ...req.body
        },
      },
      {
        new: true
      },
      ( err, updatedCharacter ) => {
        if ( err ) return console.log( err );
  
        res.redirect(`/characters/${id}`)
      });
  }


  // COMMENTS

  function createComment(req,res){
    console.log('*****START OF CREATING A COMMENT******')
    req.body.user = req.user
    
    db.Character.findById(req.params.id).
    exec(function(err, currentCharacter) {
      if(err) console.log(err);

      currentCharacter.comments.push(req.body)

      currentCharacter.save(function(err) {
        if(err) console.log(err);
        res.redirect(`/characters/${req.params.id}`)
      })
  })
}
