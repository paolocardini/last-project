var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var instrumentProfileSchema = new Schema({
	'experience' : String,
	'description' : String,
	'style': {
		type: String,
		enum: ['jazz','rock','blues']
	},
	'instrument': {
        type: String,
        enum: ['guitar','drum','bass']
      }
});

const instrumentModel = mongoose.model('instrumentProfile', instrumentProfileSchema);
module.exports = instrumentModel;
