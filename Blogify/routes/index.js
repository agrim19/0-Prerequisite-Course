const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

router.get('/', (req, res) => {
    Blog.find({}, (err, data) => {
        if (err) console.log(err);
        res.render('home', {data: data});
    });
});

module.exports = router;
