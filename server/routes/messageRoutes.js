const router = require('express').Router()
const userController = require('../controllers/UserController')
const messageController = require('../controllers/messageController.js')


router.get('/message-user', userController.messageGet)
router.post('/message-user', userController.createMessagePost)
