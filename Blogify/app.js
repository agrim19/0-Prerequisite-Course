const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogs');
const indexRoutes = require('./routes/index');
const commentRoutes = require('./routes/comments');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

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
