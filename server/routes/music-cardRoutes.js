var express = require('express');
var router = express.Router();
var music-cardController = require('../controllers/music-cardController.js');

/*
 * GET
 */
router.get('/', music-cardController.list);

/*
 * GET
 */
router.get('/:id', music-cardController.show);

/*
 * POST
 */
router.post('/', music-cardController.create);

/*
 * PUT
 */
router.put('/:id', music-cardController.update);

/*
 * DELETE
 */
router.delete('/:id', music-cardController.remove);

module.exports = router;
