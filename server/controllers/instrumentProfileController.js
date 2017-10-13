const instrumentProfile = require('../models/instrumentProfileModel.js');
const User = require('../models/User.js')

module.exports = {
  create: function(req, res) {
    
    var profile = new instrumentProfile({
      style: req.body.style,
      experience: req.body.experience,
      description: req.body.description,
      instrument: req.body.instrument,
      videoId: req.body.videoId
    });
    profile.save().then(profile => {
      User.findByIdAndUpdate(req.user._id, {
          $push: { profile: profile._id }
        })
        .then(profile => res.status(200).json(profile))
        .catch(err => console.log(err));
    })
  }

}
