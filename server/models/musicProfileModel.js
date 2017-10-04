var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var musisProfileSchema = new Schema({
	'style' : String,
	'experience' : Number,
	'description' : String,
	'instrument': {
        type: String,
        enum: ['guitar','drum','bass']
      },
	 'style': {
		 enum: ['jazz','rock','blues']
	 }
});

module.exports = mongoose.model('musicProfile', musicProfileSchema);
