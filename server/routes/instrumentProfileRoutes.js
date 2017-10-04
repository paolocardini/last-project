var express = require('express');
var router = express.Router();
var instrumentProfileController = require('../controllers/instrumentProfileController.js');

/*
 * GET
 */
router.get('/', instrumentProfileController.list);

/*
 * GET
 */
router.get('/:id', instrumentProfileController.show);

/*
 * POST
 */
router.post('/', instrumentProfileController.create);

/*
 * PUT
 */
router.put('/:id', instrumentProfileController.update);

/*
 * DELETE
 */
router.delete('/:id', instrumentProfileController.remove);

module.exports = router;
