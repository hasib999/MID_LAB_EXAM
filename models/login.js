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
	}
}