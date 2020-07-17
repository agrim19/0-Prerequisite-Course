const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const Blog = require('../models/blog');

router.get('/blogs/:id/comments/new', isLoggedIn, (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if (err) console.log(err);
        res.render('comments/new', { blog: foundBlog });
    });
});
router.post('/blogs/:id/comments', isLoggedIn, (req, res) => {
    Comment.create(req.body, (err, createdComment) => {
        if (err) console.log(err);
        Blog.findById(req.params.id, async (err, foundBlog) => {
            if (err) console.log(err);
            foundBlog.comments.push(createdComment);
            await foundBlog.save();
            res.redirect('/blogs/' + req.params.id);
        });
    });
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

module.exports = router;
