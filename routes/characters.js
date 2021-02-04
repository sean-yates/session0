const router = require('express').Router();
const charactersCtrl = require('../controllers/characters');
const { isLoggedIn } = require('../controllers/users');

//characters
router.delete('/characters/:id', charactersCtrl.deleteCharacter)
router.get('/characters/new', isLoggedIn, charactersCtrl.newCharacter)
router.get('/characters/:id/edit', charactersCtrl.editCharacter)
router.get('/characters/:id', charactersCtrl.viewCharacter)
router.get('/characters', charactersCtrl.feed)
router.post('/characters', charactersCtrl.create)
router.put('/characters/:id', charactersCtrl.updateCharacter)


// Comments
router.post('/characters/:id/comments',isLoggedIn, charactersCtrl.createComment)

  module.exports = router;