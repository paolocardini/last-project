const router = require('express').Router()
const userController = require('../controllers/UserController')
const {ensureLoggedIn} = require('connect-ensure-login')

router.get('/edit', ensureLoggedIn('/'), userController.editUserGet)
router.post('/edit', ensureLoggedIn('/'), userController.editUserPost)
