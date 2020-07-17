const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

//index route
router.get('/blogs', (req, res) => {
    Blog.find({}, (err, data) => {
        if (err) console.log(err);
        res.render('blogs/index', { data: data });
    });
});
//new route
router.get('/blog/new', isLoggedIn, (req, res) => {
    res.render('blogs/new');
});
//show route
router.get('/blogs/:id', (req, res) => {
    Blog.findById(req.params.id)
        .populate('comments')
        .populate('author')
        .exec((err, foundBlog) => {
            if (err) console.log(err);
            res.render('blogs/show', { blog: foundBlog });
        });
});
//edit route
router.get('/blogs/:id/edit', isOwner, (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if (err) {
            console.log(err);
            return res.redirect('/blogs/' + req.params.id);
        }
        res.render('blogs/update', { blog: foundBlog });
    });
});

//create route
router.post('/blogs', isLoggedIn, (req, res) => {
    const newPost = req.body;
    newPost.author = req.user._id;
    Blog.create(newPost, (err, createdBlog) => {
        if (err) console.log(err);
        console.log(createdBlog);
        res.redirect('/blogs');
    });
});
//update route
router.put('/blogs/:id', isOwner, (req, res) => {
    Blog.findByIdAndUpdate(
        req.params.id,
        req.body.newBlog,
        (err, updatedBlog) => {
            if (err) {
                console.log(err);
                return res.redirect('/blogs/' + req.params.id + '/edit');
            }
            res.redirect('/blogs/' + req.params.id);
        }
    );
});
//delete route
router.delete('/blogs/:id', isOwner, (req, res) => {
    Blog.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            console.log(err);
            return res.redirect('/blogs/' + req.params.id);
        }
        res.redirect('/blogs');
    });
});

//middleware
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
            let foundBlog = await Blog.findById(req.params.id);
            if (foundBlog.author.equals(req.user._id)) {
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
