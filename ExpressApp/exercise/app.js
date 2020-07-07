const express= require('express');
const app = express();

//routes
app.get('/',(req,res)=>{
	res.send('Welcome to my first Express app');
});
app.get('/excite',(req,res)=>{
	res.send('Starting to make real websites now.');
});
app.get('/info',(req,res)=>{
	res.send('This app is made by express.');
});
app.get('/excite/info',(req,res)=>{
	res.send('Express is an important part of making websites using Node.');
});


//make server
app.listen(3000,(req,res)=>{
	console.log("Server running");
});