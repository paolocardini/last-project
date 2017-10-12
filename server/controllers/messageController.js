const message = require('../models/Message.js');
const user = require('../models/User.js');

module.exports = {


  // messagePost: function (req, res) {
  //
  //     let message = new userMessage({
  //       origin: req.user_id,
  //       destination: req.user_id,
  //       text: req.body.message
  //
  //     });
  //     .save().then( message  => {
  //       User.findByIdAndUpdate(req.user._id, {
  //         $push: {
  //            message: message._id
  //         }
  //       })
  //       .then(message => res.status(200).json(message))
  //     .catch( err => console.log(err));
  //   })
  //     }


  module.exports = {

    messageGet: (req, res) => {
      // message.find({
      //   "destination": req.user._id
      // })
      message.find({
          $or: [
            { origin: req.user._id },
            { destination: req.user._id }
          ]
        })
        .then( messages => {
          console.log("USER: " + messages
        )
          res.status(200).json(users)
        })
        .catch(e => res.status(500).json({
          error: e.message
        }));


    }

    createMessagePost: (req, res) => {
      var message_id = 0;
      var message = new Message({
        origin: req.user._id,
        destination: req.user._id,
        text: req.body.text,
        instrument: req.body.instrument

      });
      message.save().then(message => {
        User.findByIdAndUpdate(req.user._id, {
            $push: {
              message: message._id
            }
          })
          .then(message => res.status(200).json(message))
          .catch(err => console.log(err));
      })
    }





  }

}
