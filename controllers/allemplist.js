var express = require('express');
var router = express.Router();

var login 	= require.main.require('./models/login');

router.get('/',function(req,res)
{   
    if(req.session.status==1)
    {
        login.getEmp(function(result)
        {
            res.render('admin/AllEmployeeList/index',{list:result});
        })  
    }
})


module.exports=router;
