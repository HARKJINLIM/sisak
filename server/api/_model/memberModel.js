// [Title] creat new model file for data processing

// for mysql connection
const db = require('../../plugins/mysql');
// call sqlHelper
const sqlHelper = require('../../../util/sqlHelper');
const TABLE = require('../../../util/TABLE');

const memberModel = {
	async duplicateCheck({field, value}) {
		//(sql sytax ex.) SELECT COUNT(*) AS cnt FROM member WHERE mb_id=?;
        //[abcd]
        //For frequnt SELECT syntax, creating SQL helper file in ../util
        const sql = sqlHelper.SelectSimple(
			TABLE.MEMBER, 
			{[field]: value}, 
			['COUNT(*) AS cnt']
		);
        //console.log(sql); - deleted(testing)
        //return sql; - deleted(testing)
        const [[row]] = await db.execute(sql.query, sql.values);
        //console.log(row); - deleted(testing)
		return row;
	}
};

module.exports = memberModel;