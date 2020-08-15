var express = require('express');
const { check, validationResult } = require('express-validator');
const { render } = require('ejs');
var router = express.Router();

var login 	= require.main.require('./models/login');



router.get('/',function(req,res)
{
    if(req.session.status==1)
    {
        var errors = validationResult(req);
        res.render('admin/AddEmployee/index',{error:errors.mapped()});
    }
})

router.post('/',[
    check('username').isLength({min:8}).withMessage("Username must be at least 8 Character"),
    check('phone').isLength({min:11,max:11}).withMessage("Phone no must be 11 character"),
    check('password').isLength({min:8}).withMessage("Give 8 Character long password")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/)
    .withMessage("Password must be at least 8 character and contains (A-Z, a-z, 0-9, and special sign like @,#,$,& etc)")
],function(req,res)
{
    var user=
    {
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        gender: req.body.gender,
        phone: req.body.phone,
        designation: req.body.designation
    }
    if(req.session.status==1)
    {
        var errors =validationResult(req);
        if(!errors.isEmpty())
        {
            console.log(errors.mapped());
            return res.render('admin/AddEmployee/index',{error:errors.mapped()});
        }
        else
        {
            login.addEmp(user,function(result){
                res.redirect('/admin/AllEmployeeList');

            })
        }
    }

})



module.exports=router;