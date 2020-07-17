const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

router.get('/blogs', (req, res) => {
    Blog.find({}, (err, data) => {
        if (err) console.log(err);
        res.render('blogs/index', { data: data });
    });
});
router.get('/blog/new', isLoggedIn, (req, res) => {
    res.render('blogs/new');
});
router.get('/blogs/:id', (req, res) => {
    Blog.findById(req.params.id)
        .populate('comments')
        .exec((err, foundBlog) => {
            if (err) console.log(err);
            res.render('blogs/show', { blog: foundBlog });
        });
});

router.post('/blogs', isLoggedIn, (req, res) => {
    const newPost = req.body;
    Blog.create(newPost, (err, createdBlog) => {
        if (err) console.log(err);
        console.log(createdBlog);
        res.redirect('/blogs');
    });
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

module.exports = router;
