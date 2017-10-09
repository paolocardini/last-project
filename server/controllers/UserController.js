const User = require("../models/User")
const bcrypt = require("bcrypt")
const instrumentProfile = require ("../models/instrumentProfileModel")

module.exports = {

showInstrumentalProfileGet: (req,res) =>{
  User.find().populate('profile')
  .then(users => {
    console.log("USER: " + users)
    res.status(200).json(users)})
  .catch( e => res.status(500).json({error:e.message}));


}


}
