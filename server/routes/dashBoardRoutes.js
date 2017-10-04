var express = require('express');
var router = express.Router();
var dashBoardController = require('../controllers/dashBoardController.js');

/*
 * GET
 */
router.get('/', dashBoardController.list);

/*
 * GET
 */
router.get('/:id', dashBoardController.show);

/*
 * POST
 */
router.post('/', dashBoardController.create);

/*
 * PUT
 */
router.put('/:id', dashBoardController.update);

/*
 * DELETE
 */
router.delete('/:id', dashBoardController.remove);

module.exports = router;
