const db = require('../models');

module.exports = {
    createComment,
    deleteComment,
    editComment,
    updateComment,
  };



// COMMENTS

  //create comment
  function createComment(req,res){
    req.body.user = req.user
    db.Comment.create( req.body, (err, createdComment ) => {
        if (err) return console.log(err);
        db.Character.findById(req.params.id).
            exec(function(err, currentCharacter) {
                if(err) console.log(err);

                currentCharacter.comments.push(createdComment._id)

                currentCharacter.save(function(err) {
                if(err) console.log(err);
                    res.redirect(`/characters/${req.params.id}`)
                })
            })
      });
}

// delete comment

function deleteComment(req,res){
    db.Comment.deleteOne({ _id: req.params.cid }, function (err) {
        if(err) console.log(err);
        console.log("Successful deletion");
        res.redirect(`/characters/${req.params.id}`)
      });
}



// edit comment page
function editComment(req,res){
    db.Comment.findById(req.params.cid).
    populate('user').
    exec( function(err, currentComment) {
      if(err) console.log(err);
      res.render('editComment', {
       currentCharacterId: req.params.id,
       currentComment,
       currentUser: req.user,
       title: 'Edit Comment',
       });
    });
  }

// update comment


function updateComment(req,res){
    const id = req.params.cid;
  
    db.Comment.findByIdAndUpdate( 
      id,
      {
        $set: {
          ...req.body
        },
      },
      {
        new: true
      },
      ( err, updatedComment ) => {
        if ( err ) return console.log( err );
  
        res.redirect(`/characters/${req.params.id}`)
      });
  }

