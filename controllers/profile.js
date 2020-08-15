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
            res.render('employee/MyProfile/index',{list:result});
        })

    }
    else
    {
        res.redirect('/login')
    }
})


module.exports=router;