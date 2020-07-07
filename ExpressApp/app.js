//require and configure express
const express = require('express');
const app = express();

//routes
app.get("/", (req,res)=>{     //req: request, res: response
	res.send('<h1>Hello, you hit the home route</h1>');
});
app.get('/sayhello',(req,res)=>{
	res.send("<h1>Hello</h1>");
});
app.get('/saygoodbye',(req,res)=>{
	res.send('<h1>GoodBye</h1><h3>Nice to meet you</h3>')
});
app.get('/:animalname/:secondparam',(req,res)=>{
	res.send(req.params.animalname+" "+req.params.secondparam);
});


//setup server
app.listen(4000,()=>{
	console.log("Server started!");
});