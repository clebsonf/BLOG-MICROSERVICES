const router = require('express').Router();
const {postController} = require('../../../controller/');

router.get('/posts', postController.getAllPosts);

router.post('/posts', postController.creatPost);

module.exports = router;