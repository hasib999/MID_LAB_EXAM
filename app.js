var express = require('express');
var exSession = require('express-session');
var bodyParser = require('body-parser');


var login =require('./controllers/login');


var app =express();

//config
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: ' ', saveUninitialized: true, resave: false}));

app.use('/login',login);



app.listen(5555, function()
{
	console.log('_____________________________\n\tBUSINESS TOOL\nEXPRESS HTTP SERVER STARTED\nPORT NO. 3333\n_____________________________');
});

app.get('/', function(req, res)
{
	res.render('login/index');
});
