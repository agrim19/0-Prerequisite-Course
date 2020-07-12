const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

//connect to db
mongoose.connect('mongodb://localhost:27017/Blogify', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
//make schema
const blogSchema = mongoose.Schema({
    title: String,
    content: String,
    image: String,
});
//model
const Blog = mongoose.model('Blog', blogSchema); //blogs

//routes
app.get('/', (req, res) => {
    Blog.find({}, (err, data) => {
        if (err) console.log(err);
        res.render('home', { data: data });
    });
});
app.get('/blogs', (req, res) => {
    Blog.find({}, (err, data) => {
        if (err) console.log(err);
        res.render('index', { data: data });
    });
});
app.get('/blog/new', (req, res) => {
    res.render('new');
});
app.get('/blogs/:id', (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if (err) console.log(err);
        res.render('show', { blog: foundBlog });
    });
});

app.post('/blogs', (req, res) => {
    const newPost = req.body;
    Blog.create(newPost, (err, createdBlog) => {
        if (err) console.log(err);
        console.log(createdBlog);
        res.redirect('/blogs');
    });
});

//server
app.listen(3000, () => {
    console.log('Serving Blogify on Port 3000');
});
