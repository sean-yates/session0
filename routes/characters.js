const router = require('express').Router();
const charactersCtrl = require('../controllers/characters');

router.get('/characters', charactersCtrl.feed)



  module.exports = router;