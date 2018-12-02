var mysql = require('mysql');

var source = {
	
	localhost: {
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'password',
		database: 'burger_db'
	},
	jawsDB: {
        port: 3306,
        host: "enqhzd10cxh7hv2e.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "fs03oh0xws2vxv4b",
        password: "wlmw0g6em7b491qv",
        database: "xjtkg9d2p7hqvyom",
    }

}

var connection = mysql.createConnection( source.jawsDB );

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('Databased connected as id: ' + connection.threadId);
});

module.exports = connection;










