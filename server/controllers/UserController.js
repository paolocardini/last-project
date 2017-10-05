const User = require("../models/User")
const bcrypt = require("bcrypt")



editUserGet: (req, res) => {
},

editUserPost: (req, res, next) => {
  const userId = req.user._id

  const userInfo = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age:req.body.age,
    address: req.body.address,
    email: req.body.email,
    city: req.body.city,
    username: req.body.username,
    password: req.body.password


  }

  User.findByIdAndUpdate(userId, userInfo, {new: true})
    .then(newUser => {
      req.user = newUser
    })
    .catch(err => next(err))
},
