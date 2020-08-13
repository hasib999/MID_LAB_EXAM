var express = require('express');
var router = express.Router();

var login 	= require.main.require('./models/login');

router.get('/',function(req,res){
    res.render('/login/index');
})

router.post('/',function(req,res){
    var user={
        username: req.body.username,
        password: req.body.password
    };
    login.validateLogin(user,function(response){
        if(response){
            req.session.username=user.username;
            res.redirect('/admin');
        }
        else{
            res.send('Something Went Wrong....');
        }
    })
})

module.exports = router;