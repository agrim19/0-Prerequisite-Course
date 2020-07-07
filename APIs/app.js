const app = require('express')();
const request = require('request');

app.set("view engine",'ejs');

//routes
app.get('/',(req,res)=>{
	request('https://jsonplaceholder.typicode.com/posts',(err,response,body)=>{
		if(err)
			console.log(err);
		if(response.statusCode === 200){
			const parseData = JSON.parse(body);
			res.render('new',{data:parseData});
		}
	})
});


app.listen(3000,(req,res)=>{
	console.log('Listening on port 3000');
})