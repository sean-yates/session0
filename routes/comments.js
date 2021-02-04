const router = require('express').Router();
const commentsCtrl = require('../controllers/comments');
const { isLoggedIn } = require('../controllers/users');

// Comments
router.delete('/characters/:id/comments/:cid',commentsCtrl.deleteComment)
router.post('/characters/:id/comments',isLoggedIn, commentsCtrl.createComment)
router.get('/characters/:id/comments/:cid/edit', commentsCtrl.editComment)
router.put('/characters/:id/comments/:cid', commentsCtrl.updateComment)

module.exports = router;