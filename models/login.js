var db = require('./dbc');

module.exports =
{
	login: function(user, callback)
  	{
		var sql = "SELECT * FROM `login` WHERE username='"+user.username+"' AND password='"+user.password+"';";
		db.getResults(sql, function(result)
    	{
			if(result.length > 0)
			{
				callback(result);
			}
			else
			{
				callback([]);
			}
		});
	},
	addEmp: function(user,callback)
	{
		var sql="INSERT INTO `login` (`username`,`password`,`name`,`gender`,`phone`,`designation`,`status`) VALUES ('"+user.username+"','"+user.password+"','"+user.name+"','"+user.gender+"','"+user.phone+"','"+user.designation+"','2');";
		db.execute(sql,function(result){
			if(result)
			{
				callback(true);
			}
			else
			{
				callback(false);
			}
		})                                                   
	},
	getEmp : function(callback)
	{
		var sql ="SELECT * FROM `login` WHERE `status`='2';";
		db.getResults(sql, function(result)
    	{
			if(result.length > 0)
			{
				callback(result);
			}
			else
			{
				callback([]);
			}
		});
	},
	get: function(user,callback)
	{
		var sql ="SELECT * FROM `login` WHERE `username`='"+user.username+"';";
		db.getResults(sql, function(result)
    	{
			if(result.length > 0)
			{
				callback(result);
			}
			else
			{
				callback([]);
			}
		});
	},
	update : function(user,callback)
	{
		var sql = "UPDATE `login` SET `password`='"+user.password+"' , `name`='"+user.name+"',`gender`='"+user.gender+"',`phone`='"+user.phone+"',`designation`='"+user.designation+"' WHERE `username`='"+user.username+"';";	
		db.execute(sql,function(result)
		{
			if(result)
			{
				callback(true);
			}
			else
			{
				callback(false);
			}
		});
	
	}
}