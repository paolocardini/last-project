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
    image: "http://cdn.ismorbo.com/wp-content/uploads/2017/07/gerald-fearnley-02.jpg",
    lat:"40.730610",
    lng:"-73.935242",
    profile:[]
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
    image: "http://ultimateclassicrock.com/files/2014/12/86119281.jpg?w=630",
    lat:"40.650002",
    lng:"-73.949997",
    profile:[]

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
    image: "https://www.jambase.com/wp-content/uploads/2016/05/John-Bonham-Press-Crop-1480x832.jpg",
    lat:"47.608013",
    lng:"-122.335167",
    profile:[]
  }
];

User.create(users, (err) => {
  if (err) { throw(err); }
  console.log(`Created ${users.length} users`);
});
