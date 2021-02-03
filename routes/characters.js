const router = require('express').Router();
const charactersCtrl = require('../controllers/characters');

router.get('/characters', charactersCtrl.feed)
router.post('/characters', charactersCtrl.create)


  module.exports = router;