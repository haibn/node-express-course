const express = require('express')
const router = express.Router()
const { login, message } = require('../controllers/main-controllers')
const authenticationMiddleware = require('../middleware/authentication')

router.route('/login').post(login)
router.route('/hello').get(authenticationMiddleware, message)

module.exports = router