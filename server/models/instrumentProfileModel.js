var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var instrumentProfileSchema = new Schema({
	'experience' : String,
	'description' : String,
	'instrument': {
        type: String,
        enum: ['guitar','drum','bass']
      },
	 'style': {
		 type: String,
		 enum: ['jazz','rock','blues']
	 }
});

const iModel = mongoose.model('instrumentProfile', instrumentProfileSchema);
module.exports = iModel;
