const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const dbName = 'band-pocket';

mongoose.connect(`mongodb://localhost/${dbName}`);

const salt     = bcrypt.genSaltSync(10);
const hashPass = bcrypt.hashSync("1234", salt);

const users = [
  {
    firstname: "David",
    lastname:"Bowie",
    age:33,
    address:"Second Avenue",
    city:"New York",
    email:"david@gmail.com",
    username:"dav",
    password: hashPass,
    image: "",
    lat:"",
    lng:"",
    profile:["59dbd63dbe36940c33e88111"]
  },
  {
    firstname: "Jimmy",
    lastname:"Page",
    age:37,
    address:"Madison Avenue",
    city:"Seattle",
    email:"jimmy@hotmail.com",
    username:"jim",
    password: hashPass,
    image: "",
    lat:"",
    lng:"",
    profile:["59dbd63dbe36940c33e88111"]

  },
  {
    firstname: "John",
    lastname:"Bohnam",
    age:31,
    address:" Eighth Avenue",
    city:"Philadelphia",
    email:"john@mail.com",
    username:"johnny",
    password: hashPass,
    image: "",
    lat:"",
    lng:"",
    profile:["59dbd63dbe36940c33e88111"]
  }
];

User.create(users, (err) => {
  if (err) { throw(err); }
  console.log(`Created ${users.length} users`);
});
