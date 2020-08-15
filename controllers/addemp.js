var express = require('express');
const { check, validationResult } = require('express-validator');
var router = express.Router();

var login 	= require.main.require('./models/login');

router.get('/',[
    check('username','username must be greater than 8 character').isLength({min:8})
],function(req,res)
{
    if(req.session.status==1)
    {
        var errors = validationResult(req);
        res.render('admin/AddEmployee/index',{error:errors.mapped()});
    }
})

router.post('/',function(req,res)
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
        login.addEmp(user,function(result){
            res.redirect('/admin/AllEmployeeList');
        })
    }

})



module.exports=router;