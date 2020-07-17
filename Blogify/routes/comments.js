const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const Blog = require('../models/blog');

//new route
router.get('/blogs/:id/comments/new', isLoggedIn, (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if (err) console.log(err);
        res.render('comments/new', { blog: foundBlog });
    });
});
//create route
router.post('/blogs/:id/comments', isLoggedIn, (req, res) => {
    req.body.author = req.user._id;
    req.body.authorName = req.user.username;
    Comment.create(req.body, (err, createdComment) => {
        if (err) console.log(err);
        Blog.findById(req.params.id, async (err, foundBlog) => {
            if (err) console.log(err);
            foundBlog.comments.push(createdComment);
            await foundBlog.save();
            res.redirect('/blogs/' + req.params.id);
        });
    });
});
//delete route
router.delete('/blogs/:id/comments/:commentId', isOwner, (req, res) => {
    Comment.findByIdAndDelete(req.params.commentId, (err) => {
        if (err) {
            console.log(err);
            return res.redirect('/blogs/');
        }
        res.redirect('/blogs/' + req.params.id);
    });
});

//middlewares
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

async function isOwner(req, res, next) {
    //check if logged in
    //find that blog in db
    //check the author with current user
    //if same, allow to pass
    //if not same, give error
    if (req.isAuthenticated()) {
        try {
            let foundComment = await Comment.findById(req.params.commentId);
            if (foundComment.author.equals(req.user._id)) {
                return next();
            } else {
                alert('NOT AUTHORISED');
                res.redirect('back');
            }
        } catch (err) {
            console.log(err);
        }
    } else {
        console.log('Not logged in');
        res.redirect('/login');
    }
}

module.exports = router;
