const router = require('express').Router()
const userController = require('../controllers/UserController')
const {ensureLoggedIn} = require('connect-ensure-login')
const instrumentProfileController = require('../controllers/instrumentProfileController.js')

router.get('/instrument-profile', userController.showInstrumentProfileGet)

module.exports = router
