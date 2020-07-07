const express = require('express');
const app = express();

app.set('view engine','ejs');

//routes 
app.get('/',(req,res)=>{
	res.send('Home route');
});
app.get('/blogs',(req,res)=>{
	res.send('List All Blogs');
});
app.get('/blogs/new',(req,res)=>{
	res.send('Add New Blog');
});

//server
app.listen(3000,()=>{
	console.log('Serving Blogify on Port 3000');
})