const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const Blog = require('../models/blog');

router.get('/blogs/:id/comments/new', (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if (err) console.log(err);
        res.render('comments/new', {blog: foundBlog});
    });
});
router.post('/blogs/:id/comments', (req, res) => {
    Comment.create(req.body, (err, createdComment) => {
        if (err) console.log(err);
        res.redirect('/blogs/' + req.params.id);
    });
});

module.exports = router;
