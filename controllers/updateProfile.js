var express = require('express');
const { check, validationResult } = require('express-validator');
var router = express.Router();


var login 	= require.main.require('./models/login');


router.get('/',[
    check('phone','Phone number required').isEmpty(),
    check('password','Password must be at least 8 character and contains (A-Z, a-z, 0-9, and special sign like @,#,$,& etc)').isEmpty(),
    check('name','Name required').isEmpty(),
    check('gender','Gender required').isEmpty(),
    check('designation','Designation required').isEmpty()
],function(req,res)
{
    if(req.session.status==2)
    {
        var user=
        {
            username:req.session.username
        }
        login.get(user,function(result)
        {
            var errors =validationResult(req);
            res.render('employee/UpdateProfile/index',{list:result,error:errors.mapped()});
        })

    }
    else
    {
        res.redirect('/login')
    }
})
router.post('/',function(req,res)
{
    if(req.body.hasOwnProperty("update"))
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
        if(req.session.status==2)
        {    
            login.update(user,function(result)
            {
                res.redirect('/employee/MyProfile');
            })           
        }
    }
    // if(req.body.hasOwnProperty("upload"))
    // {
    //     if(req.files)
    //     {
    //         console.log(req.files);
    //         var file = req.files.file;
    //         var filename=file.name;
    //         console.log(filename);

    //         file.mv('./admin/'+filename,function(err)
    //         {
    //             if(err)
    //             {
    //                 res.send(err);
    //             }
    //             else
    //             {
    //                 res.send("File Uploaded");
    //             }
    //         })
    //     }
    //     else
    //     {
    //         res.send("Error")
    //     }
    // }
})


module.exports=router;