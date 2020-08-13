var express = require('express');
var router = express.Router();

var login 	= require.main.require('./models/login');

router.get('/',function(req,res){
    
    res.render('login/index');
    
})

router.post('/',function(req,res){
    var user={
        username: req.body.username,
        password: req.body.password
    };
    login.login(user,function(response){
        if(response.length > 0){
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