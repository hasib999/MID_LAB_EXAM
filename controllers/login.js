var express = require('express');
var router = express.Router();

var login 	= require.main.require('./models/login');

router.get('/',function(req,res){
    if(req.session.type == null)
    {
        res.render('login/index');
    }
    else
    {
        if(req.session.type=='admin'){
            res.redirect('/admin');
        }
    }
})

router.post('/',function(req,res){
    var user={
        lid: req.body.username,
        password: req.body.password
    };
    login.validateLogin(user,function(response){
        if(response.length>0){
            req.session.username=response[0].username;
            req.session.type=response[0].type;
            if(req.session.type=='admin'){
                res.redirect('/admin');
            }
        }
        else{
            res.send('Something Went Wrong....');
        }
    })
})

module.exports = router;