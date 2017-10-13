const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instrumentProfileSchema = new Schema({
  'experience': String,
  'image': String,
  'description': String,
  'style': {
    type: String,
    enum: ['jazz', 'rock', 'blues']
  },
  'instrument': {
    type: String,
    enum: ['guitar', 'drum', 'bass']
  }

});

module.exports = mongoose.model('instrumentProfile', instrumentProfileSchema);
