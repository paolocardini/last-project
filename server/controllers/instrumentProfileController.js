var iProfile = require('../models/instrumentProfileModel.js');

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
    //         }
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
        var profile = new iProfile({
			style : req.body.style,
			experience : req.body.experience,
			description : req.body.description,
      instrument: req.body.instrument

        });

        profile.save(function (err, profile) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating music-card',
                    error: err
                });
            }
            return res.status(201).json(profile);
        });
    },

    /**
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
