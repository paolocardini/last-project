const instrumentProfile = require('../models/instrumentProfileModel.js');
const User = require('../models/User.js')
/**
 * music-cardController.js
 *
 * @description :: Server-side logic for managing music-cards.
 */
module.exports = {

    /**
     * music-cardController.list()
     */
    // list: function (req, res) {
    //     music-cardModel.find(function (err, music-cards) {
    //         if (err) {
    //             return res.status(500).json({
    //                 message: 'Error when getting music-card.',
    //                 error: err
    //             });
    //         }
    //         return res.json(music-cards);
    //     });
    // },
    //
    // /**
    //  * music-cardController.show()
    //  */
    // show: function (req, res) {
    //     var id = req.params.id;
    //     music-cardModel.findOne({_id: id}, function (err, music-card) {
    //         if (err) {
    //             return res.status(500).json({
    //                 message: 'Error when getting music-card.',
    //                 error: err
    //             });
    //        }
    //         if (!music-card) {
    //             return res.status(404).json({
    //                 message: 'No such music-card'
    //             });
    //         }
    //         return res.json(music-card);
    //     });
    // },
    //
    // /**
    //  * music-cardController.create()
    //  */
    create: function (req, res) {
      console.log("dentro del controller: " + req.user._id)
        var profile_id = 0;
        var profile = new instrumentProfile({
			style : req.body.style,
			experience : req.body.experience,
			description : req.body.description,
      instrument: req.body.instrument

        });
        profile.save().then( profile  => {
          User.findByIdAndUpdate(req.user._id, {
            $push: {
              profile: profile._id
            }
          })
          .then(profile => res.status(200).json(profile))
        .catch( err => console.log(err));
      })
        }
    /**}
     * music-cardController.update()
     */
//     update: function (req, res) {
//         var id = req.params.id;
//         music-cardModel.findOne({_id: id}, function (err, music-card) {
//             if (err) {
//                 return res.status(500).json({
//                     message: 'Error when getting music-card',
//                     error: err
//                 });
//             }
//             if (!music-card) {
//                 return res.status(404).json({
//                     message: 'No such music-card'
//                 });
//             }
//
//             music-card.style = req.body.style ? req.body.style : music-card.style;
// 			music-card.experience = req.body.experience ? req.body.experience : music-card.experience;
// 			music-card.description = req.body.description ? req.body.description : music-card.description;
//
//             music-card.save(function (err, music-card) {
//                 if (err) {
//                     return res.status(500).json({
//                         message: 'Error when updating music-card.',
//                         error: err
//                     });
//                 }
//
//                 return res.json(music-card);
//             });
//         });
//     },
//
//     /**
//      * music-cardController.remove()
//      */
//     remove: function (req, res) {
//         var id = req.params.id;
//         music-cardModel.findByIdAndRemove(id, function (err, music-card) {
//             if (err) {
//                 return res.status(500).json({
//                     message: 'Error when deleting the music-card.',
//                     error: err
//                 });
//             }
//             return res.status(204).json();
//         });
//     }
 }
