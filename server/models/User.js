const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  firstname : String,
  lastname: String,
  address: String,
  city: String,
  country:String,
  email: String,
  age: Number,
  image: String,
  lat: String,
  lng: String,
  message:[{type:Schema.Types.ObjectId, ref:'Message'}]
  profile:[{type:Schema.Types.ObjectId, ref:'instrumentProfile'}]

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('User', userSchema);
