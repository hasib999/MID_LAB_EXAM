var express = require('express');
const { check, validationResult } = require('express-validator');
var router = express.Router();

var login 	= require.main.require('./models/login');

var err="";

router.get('/',[
    check('username','username required').isEmpty(),
    check('password','Passwprd is required').isEmpty()
],
function(req,res){
    if(req.session.status==null || req.session.status=="")
    {
        var errors =validationResult(req); 
        console.log('login page requested!');
        res.render('login/index',{error:errors.mapped(),err:err});
    }
    else
    {
        if(req.session.status==1)
        {
            res.redirect('/admin');
        }
        if(req.session.status==2)
        {
            res.redirect('/employee');    
        }
    }
    
})

router.post('/',[
    check('username','username required').not().isEmpty(),
    check('password','Password is required').not().isEmpty()
],
function(req,res){
    var user={
        username: req.body.username,
        password: req.body.password
    };
    var errors =validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors.mapped());
        res.render('login/index',{error:errors.mapped(),err:err});
    }
    else
    {
        login.login(user,function(response)
        {
            if(response.length > 0){
                err="";
                req.session.status=response[0].status;
                req.session.username=response[0].username;
                if(req.session.status==1){
                    res.redirect('/admin');
                }
                else if(req.session.status==2)
                {
                    console.log(req.body);
                    res.redirect('/employee');
                }
                else
                {
                    console.log(req.body);
                    res.send("Something Wrong");
                }
            }
            else{
                err="Invalid Username / Password";
                res.redirect('/login');
            }
        })
    }

})

module.exports = router;