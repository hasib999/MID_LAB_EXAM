var db = require('./dbc');

module.exports =
{
	validateLogin: function(user, callback)
  {
		var sql = "SELECT * FROM `cms` WHERE username='"+user.username+"' AND password='"+user.password+"';";
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

	getLogin: function(user, callback)
  {
		var sql = "SELECT * FROM `cms` WHERE username='"+user.lid+"';";
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
}