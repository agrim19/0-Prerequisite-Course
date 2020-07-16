const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const User = require('../models/user');
const passport = require('passport');

router.get('/', (req, res) => {
    Blog.find({}, (err, data) => {
        if (err) console.log(err);
        res.render('home', { data: data });
    });
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/blogs');
});

router.post('/register', (req, res) => {
    User.register(
        new User({ username: req.body.username, email: req.body.email }),
        req.body.password,
        (err, user) => {
            if (err) {
                console.log(err);
                return res.render('register');
            }
            passport.authenticate('local')(req, res, () => {
                res.redirect('/blogs');
            });
        }
    );
});
router.post(
    '/login',
    passport.authenticate('local', {
        failureRedirect: '/login',
        successRedirect: '/blogs',
    }),
    (req, res) => {}
);
module.exports = router;
