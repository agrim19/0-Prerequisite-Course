const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

const ar= ['Apple','Mango','Pear','Banana','Watermelon'];

//1) Make views folder & put your view file inside it
//2) Install ejs
//3) use res.render('filename');
//4) optional: use app.set() to set the default view engine to ejs.

//routes
app.get('/',(req,res)=>{
	const x=10;
	res.render('test',{value:x});
});
app.get('/view',(req,res)=>{
	res.render('index',{values:ar});
});
app.get('/add',(req,res)=>{
	res.render('new');
});
app.post('/add',(req,res)=>{
	ar.push(req.body.fruit);
	res.redirect('/view');
});


//server
app.listen(3000,(req,res)=>{
	console.log('server running');
});