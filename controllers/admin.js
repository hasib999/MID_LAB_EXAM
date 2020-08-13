var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    if(req.session.type=='admin'){
        res.render('admin/index');
    }
    else
    {
        res.redirect('/login');
    }
})

module.exports=router;