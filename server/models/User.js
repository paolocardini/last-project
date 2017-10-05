const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  firstname : String,
  lastname: String,
  address: String,
  city: String,
  email: String,
  age: Number,
  profile:[{type:Schema.Types.ObjectId, ref:'instrumentProfile'}]

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
