var express = require('express');
// const { check, validationResult } = require('express-validator');
var router = express.Router();


var login 	= require.main.require('./models/login');


router.get('/',function(req,res)
{
    if(req.session.status==2)
    {
        var user=
        {
            username:req.session.username
        }
        login.get(user,function(result)
        {
            res.render('employee/UpdateProfile/index',{list:result});
        })

    }
    else
    {
        res.redirect('/login')
    }
})
router.post('/',function(req,res)
{
    var user=
    {
        
        password: req.body.password,
        name: req.body.name,
        gender: req.body.gender,
        phone: req.body.phone,
        designation: req.body.designation,
        username: req.body.username
    }
    login.update(user,function(result)
    {
        res.redirect('/employee/MyProfile');
    })
})


module.exports=router;