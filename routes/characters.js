const router = require('express').Router();
const charactersCtrl = require('../controllers/characters');
const { isLoggedIn } = require('../controllers/users');


router.delete('/characters/:id', charactersCtrl.deleteCharacter)
router.get('/characters/new', isLoggedIn, charactersCtrl.newCharacter)
router.get('/characters/:id', charactersCtrl.viewCharacter)
router.get('/characters', charactersCtrl.feed)
router.post('/characters', charactersCtrl.create)

  module.exports = router;