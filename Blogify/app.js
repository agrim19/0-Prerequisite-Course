const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('./models/user');
const bodyParser = require('body-parser');
const blogRoutes = require('./routes/blogs');
const indexRoutes = require('./routes/index');
const LocalStrategy = require('passport-local');
const ExpressSession = require('express-session');
const methodOverride = require('method-override');
const commentRoutes = require('./routes/comments');

//passport setup
app.use(
    ExpressSession({
        secret: 'This is the blogify app',
        resave: false,
        saveUninitialized: false,
    })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//general app.use and app.set statements
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
});
//method override
app.use(methodOverride('_method'));

//connect to db
mongoose.connect('mongodb://localhost:27017/Blogify', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//routes
app.use(indexRoutes);
app.use(blogRoutes);
app.use(commentRoutes);

//server
app.listen(3000, () => {
    console.log('Serving Blogify on Port 3000');
});

//nodemon ====> node app.js
