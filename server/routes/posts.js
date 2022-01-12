// Using Express router.
const express = require('express');
const router = express.Router();
// Load controller.
const posts = require('../controllers/posts');
const Post = require('../models/post');

// TEST (success).
router.get('/test', (req, res) => res.send('test worked! testing!'));
// @route [GET]: get all posts
router.get('/', posts.index);

// @route [GET]: get current post
router.get('/:post_id', posts.getPost);

// @route [POST]: create new post
router.post('/new', posts.insertPost);

// @route [POST]: delete post by id
router.post('/delete/:post_id', posts.deletePost);

module.exports = router;