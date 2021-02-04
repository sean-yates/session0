const db = require('../models');

module.exports = {
    createComment,
    deleteComment,
  };



// COMMENTS

  //create comment
  function createComment(req,res){
    console.log('*****START OF CREATING A COMMENT******')
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
    // none of this is valid anymore because of model switch
//   db.Character.findById(req.params.id).
//   exec( function(err, currentCharacter) {
//     if(err) console.log(err);

//     currentCharacter.comments = currentCharacter.comments.filter(function( comment ) {
//       return comment._id !== req.params.cid;
//     })
//     // curently here, not working
//     currentCharacter.save(function(err) {
//         if(err) console.log(err);
//         res.redirect(`/characters/${req.params.id}`)
//       })
//   });
console.log('delete comments here')
}