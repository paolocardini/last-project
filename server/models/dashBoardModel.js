var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var dashBoardSchema = new Schema({
	'title' : String,
	'description' : String,
	'date' : Date
});

module.exports = mongoose.model('dashBoard', dashBoardSchema);
