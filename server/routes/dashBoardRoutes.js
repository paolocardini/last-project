var express = require('express');
var router = express.Router();
var dashBoardController = require('../controllers/dashBoardController.js');

router.get('/', dashBoardController.list);
router.get('/:id', dashBoardController.show);
router.post('/', dashBoardController.create);
router.put('/:id', dashBoardController.update);
router.delete('/:id', dashBoardController.remove);

module.exports = router;
