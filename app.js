var express = require('express');
var exSession = require('express-session');
var bodyParser = require('body-parser');


var login =require('./controllers/login');
var admin= require('./controllers/admin');


var app =express();

//config
app.set('view engine', 'ejs');
//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(exSession({secret: ' ', saveUninitialized: true, resave: false}));
app.use(function(req, res, next)
{
  res.locals.type = req.session.type;
  next();
});

app.use('/login',login);
app.use('/admin',admin);


app.get('/', function(req, res)
{
	res.send("Go to >> <a href='/login'> LOGIN </a>");
});


app.listen(5555, function()
{
	console.log('_____________________________\n\tLabExam\nEXPRESS HTTP SERVER STARTED\nPORT NO. 5555\n_____________________________');
});


