const dashBoardModel = require('../models/dashBoardModel.js');

/**
 * dashBoardController.js
 *
 * @description :: Server-side logic for managing dashBoards.
 */
module.exports = {

    /**
     * dashBoardController.list()
     */
    list: function (req, res) {
        dashBoardModel.find(function (err, dashBoards) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting dashBoard.',
                    error: err
                });
            }
            return res.json(dashBoards);
        });
    },

    /**
     * dashBoardController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        dashBoardModel.findOne({_id: id}, function (err, dashBoard) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting dashBoard.',
                    error: err
                });
            }
            if (!dashBoard) {
                return res.status(404).json({
                    message: 'No such dashBoard'
                });
            }
            return res.json(dashBoard);
        });
    },

    /**
     * dashBoardController.create()
     */
    create: function (req, res) {
        var dashBoard = new dashBoardModel({
			title : req.body.title,
			description : req.body.description,
			date : req.body.date

        });

        dashBoard.save(function (err, dashBoard) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating dashBoard',
                    error: err
                });
            }
            return res.status(201).json(dashBoard);
        });
    },

    /**
     * dashBoardController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        dashBoardModel.findOne({_id: id}, function (err, dashBoard) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting dashBoard',
                    error: err
                });
            }
            if (!dashBoard) {
                return res.status(404).json({
                    message: 'No such dashBoard'
                });
            }

            dashBoard.title = req.body.title ? req.body.title : dashBoard.title;
			dashBoard.description = req.body.description ? req.body.description : dashBoard.description;
			dashBoard.date = req.body.date ? req.body.date : dashBoard.date;

            dashBoard.save(function (err, dashBoard) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating dashBoard.',
                        error: err
                    });
                }

                return res.json(dashBoard);
            });
        });
    },

    /**
     * dashBoardController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        dashBoardModel.findByIdAndRemove(id, function (err, dashBoard) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the dashBoard.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
