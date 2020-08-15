var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    if(req.session.status=='1')
    {
        res.render('admin/index'); 
    }
})

module.exports=router;