var express = require('express');
// const { check, validationResult } = require('express-validator');
var router = express.Router();

var login 	= require.main.require('./models/login');

router.get('/',function(req,res)
{
    if(req.session.status == 2)
    {
        res.render('employee/index');
    }
    else
    {
        res.redirect("/login");
    }
})


module.exports=router;