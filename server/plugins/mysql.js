require('dotenv').config();
const mysql = require("mysql2");

function createDatabase() {
	let instance = null;
	return {
		getinstance: function () {
			if (instance == null) {
				const config = {
					host: process.env.DB_HOST,
					user: process.env.DB_USER,
					password: process.env.DB_PASSWORD,
					database: process.env.DB_DATABASE,
				};
				const pool = mysql.createPool(config);
				instance = pool.promise();
			} 
			return instance;
		}
	}
}

module.exports = createDatabase().getinstance();