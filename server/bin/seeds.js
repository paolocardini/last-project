const mongoose = require('mongoose');
const User = require('../models/User');

const dbName = 'band-pocket';
mongoose.connect(`mongodb://localhost/${dbName}`);

const Users = [
{
    username: String,
    password: String,
    firstname : String,
    lastname: String,
    address: String,
    city: String,
    email: String,
    age: Number
    // profile:[{type:Schema.Types.ObjectId, ref:'instrumentProfile'}]

  }


User.create(Users, (err) => {
  if (err) { throw(err); }
});
