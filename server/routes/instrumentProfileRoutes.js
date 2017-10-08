const router = require('express').Router()
const instrumentProfileController = require('../controllers/instrumentProfileController.js')

router.post('/instrument-profile/new', instrumentProfileController.create)

module.exports = router
