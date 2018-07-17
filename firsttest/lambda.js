let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
	ddb.get({
		TableName: 'test_user_tabel',
		Key: { 'id': 'id' }
	}, function (err, data) {
		if (err) {
			//handle error
		} else {
			//your logic goes here
		}
	});


	callback(null, 'Successfully executed');
}