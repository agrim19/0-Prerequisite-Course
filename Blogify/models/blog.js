const mongoose = require('mongoose');

//make schema
const blogSchema = mongoose.Schema({
    title: String,
    content: String,
    image: String,
});
//model
const Blog = mongoose.model('Blog', blogSchema); //blogs

module.exports = Blog;
