const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

router.get('/blogs', (req, res) => {
    Blog.find({}, (err, data) => {
        if (err) console.log(err);
        res.render('blogs/index', {data: data});
    });
});
router.get('/blog/new', (req, res) => {
    res.render('blogs/new');
});
router.get('/blogs/:id', (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if (err) console.log(err);
        res.render('blogs/show', {blog: foundBlog});
    });
});

router.post('/blogs', (req, res) => {
    const newPost = req.body;
    Blog.create(newPost, (err, createdBlog) => {
        if (err) console.log(err);
        console.log(createdBlog);
        res.redirect('/blogs');
    });
});

module.exports = router;
