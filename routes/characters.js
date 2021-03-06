const router = require('express').Router();
const charactersCtrl = require('../controllers/characters');
const { isLoggedIn } = require('../controllers/users');

//characters
router.get('/', charactersCtrl.feed)
router.delete('/characters/:id', charactersCtrl.deleteCharacter)
router.get('/characters/new', isLoggedIn, charactersCtrl.newCharacter)
router.get('/characters/:id/edit', charactersCtrl.editCharacter)
router.get('/characters/:id', charactersCtrl.viewCharacter)
router.get('/characters', charactersCtrl.feed)
router.post('/characters', charactersCtrl.create)
router.put('/characters/:id', charactersCtrl.updateCharacter)

module.exports = router;