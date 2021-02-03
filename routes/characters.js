const router = require('express').Router();
const charactersCtrl = require('../controllers/characters');
const { isLoggedIn } = require('../controllers/users');


router.get('/characters', charactersCtrl.feed)
router.get('/characters/new', isLoggedIn, charactersCtrl.newCharacter)
router.post('/characters', charactersCtrl.create)
router.delete('/characters/:id', charactersCtrl.deleteCharacter)

  module.exports = router;