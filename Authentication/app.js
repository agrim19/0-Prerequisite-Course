const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const expressSession = require('express-session');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/auth_demo', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});
userSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', userSchema);

//body parser
app.use(bodyParser.urlencoded({ extended: true }));

//passport setup
app.use(
    expressSession({
        secret: 'This is a sample app',
        resave: false,
        saveUninitialized: false,
    })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//routes
app.get('/', (req, res) => {
    res.render('home');
});
app.get('/secret', isLoggedIn, (req, res) => {
    res.render('secret');
});
app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/register', (req, res) => {
    res.render('register');
});
app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

app.post('/register', (req, res) => {
    User.register(
        new User({ username: req.body.username }),
        req.body.password,
        (err, user) => {
            if (err) {
                console.log(err);
                return res.render('register');
            }
            passport.authenticate('local')(req, res, () => {
                res.redirect('/secret');
            });
        }
    );
});
app.post(
    '/login',
    passport.authenticate('local', {
        failureRedirect: '/login',
        successRedirect: '/secret',
    }),
    (req, res) => {}
);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

//Server
app.listen(3000, () => {
    console.log('running server on port 3000');
});
