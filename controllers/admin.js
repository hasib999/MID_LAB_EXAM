var express = require('express');
const { use } = require('./login');
const { check, validationResult } = require('express-validator');
var router = express.Router();

var login 	= require.main.require('./models/login');

router.get('/',function(req,res){
    if(req.session.status=='1')
    {
        res.render('admin/index'); 
    }
})

router.get('/Update/:id',[
    check('phone','Phone number required').isEmpty(),
    check('password','Password must be at least 8 character and contains (A-Z, a-z, 0-9, and special sign like @,#,$,& etc)').isEmpty(),
    check('name','Name required').isEmpty(),
    check('gender','Gender required').isEmpty(),
    check('designation','Designation required').isEmpty()
],function(req,res)
{
    if(req.session.status==1)
    {
        var user={
            username: req.params.id
        }
        login.get(user,function(result)
        {
            var errors = validationResult(req);
            res.render('admin/Update/index',{list:result,error:errors.mapped()});
        });
    }
    
});

router.post('/Update/:id',function(req,res)
{
    if(req.session.status==1)
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
        res.redirect('/admin/AllEmployeeList');
    })
    }
    
})
router.get('/Delete/:id',function(req,res)
{
    if(req.session.status==1)
    {
        var user={
            username: req.params.id
        }
        login.get(user,function(result)
        {
            res.render('admin/Delete/index',{list:result});
        });
    }
})
router.post('/delete/:id', function(req, res)
{
    if(req.session.status==1)
    {
        if(req.body.hasOwnProperty("YES"))
        {
            login.remove(req.params.id, function(result)
            {
                res.redirect('/admin/AllEmployeeList');
            });
        }
    
        else if (req.body.hasOwnProperty("NO"))
        {
            res.redirect('/admin/AllEmployeeList');
        }
    }
});


module.exports=router;