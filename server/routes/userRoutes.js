const router = require('express').Router()
const userController = require('../controllers/UserController')
const {ensureLoggedIn} = require('connect-ensure-login')
const instrumentProfileController = require('../controllers/instrumentProfileController.js')
const upload = require('../configs/multer');

router.get('/instrument-profile', userController.showInstrumentalProfileGet)

module.exports = router
