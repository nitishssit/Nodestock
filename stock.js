//Stock market portfolio app

const express = require('express');
const app = express();
const {engine} = require('express-handlebars');
const path= require('path');

const PORT = process.env.PORT || 5000;

//Set handlebars middleware
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

const otherstuff = "Hello there, this is different stuff!";
//Set handlebar routes
app.get('/', function(req,res){
	res.render('home',{
		stuff : otherstuff
	});
});

//Set static folder 
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('Server listening on port ' + PORT));

