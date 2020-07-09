const mongoose = require('mongoose');

//connect to db
mongoose.connect('mongodb://localhost:27017/First_App',{useNewUrlParser: true, useUnifiedTopology:true});
//make schema
const fruitSchema = mongoose.Schema({
	name: String,
	colour: String,
	count: Number,
});
//make model
const Fruit = mongoose.model('Fruit',fruitSchema);  //collection name: fruits

//insert an element
const insert = ()=>{
	const newFruit = {
		name: 'Apple',
		colour: 'Red',
		count : 25,
	}
	Fruit.create(newFruit,(err,createdFruit)=>{
		if(err)
			console.log(err);
		console.log(createdFruit);
 	});	
}
//update an element
const update = ()=>{
	Fruit.updateMany({name:"Apple"},{$set: {count:26}},(err,updatedFruit)=>{
		if(err)
			console.log(err);
		console.log(updatedFruit);
	})
}

//find an element
const findElement = ()=>{
	Fruit.find({},(err,fruits)=>{
		if(err)
			console.log(err);
		console.log(fruits);
	})
}

//delete an element
const deleteElement =()=>{
	Fruit.deleteMany({name:"Apple"},(err)=>{
		if(err)
			console.log(err);
		findElement();
	})
}


//call
// insert();
// update();
// findElement();
deleteElement();