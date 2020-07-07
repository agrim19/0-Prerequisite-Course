const app = require('express')();
const sounds={
	'cow':'moo',
	'dog':'woof',
	'cat':'meow',
}

//routes
app.get('/',(req,res)=>{
	res.send('<h1>This is the Home Page to the route params exercise</h1>');
});
app.get('/animal/:animalname',(req,res)=>{
	if(!sounds[req.params.animalname])
		return res.send('Invalid animal');
	const ans = 'The '+req.params.animalname+' says '+sounds[req.params.animalname];
	res.send(ans);
});

//server
app.listen(3000,(req,res)=>{
	console.log('Hosting server');
});