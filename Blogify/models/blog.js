const mongoose = require('mongoose');

//make schema
const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
            required: false,
        },
    ],
});
//model
const Blog = mongoose.model('Blog', blogSchema); //blogs

module.exports = Blog;
