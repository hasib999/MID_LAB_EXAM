var express = require('express');
var exSession = require('express-session');
var bodyParser = require('body-parser');

var login =require('./controllers/login');
var logout =require('./controllers/logout');
var admin= require('./controllers/admin');


var app =express();

//config
app.set('view engine', 'ejs');
//middleware
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));
app.use(exSession({secret: ' ', saveUninitialized: true, resave: false}));
app.use(function(req, res, next)
{
  res.locals.status = req.session.status;
  res.locals.username=req.session.username;
  next();
});

app.use('/login',login);
app.use('/logout',logout);
app.use('/admin',admin);


app.get('/', function(req, res)
{
	res.send("Go to >> <a href='/login'> LOGIN </a>");
});


app.listen(3000, function()
{
	console.log('_____________________________\n\tLabExam\nEXPRESS HTTP SERVER STARTED\nPORT NO. 3000\n_____________________________');
});


