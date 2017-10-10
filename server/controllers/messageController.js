const message = require('../models/Message.js');
const user = require('../models/User.js');

module.exports = {


    messageCreatePost: function (req, res) {
        let user_id = 0;
        let message = new userMessage({
          origin: req.body.origin,
          destination: requ.body.destination,
          text: req.body.message

        });
        .save().then( profile  => {
          User.findByIdAndUpdate(req.user._id, {
            $push: {
              // profile: profile._id
            }
          })
          .then(profile => res.status(200).json(profile))
        .catch( err => console.log(err));
      })
        }

 }
