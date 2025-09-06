const express = require('express')
const router = express.Router()
const { login, message } = require('../controllers/main-controllers')

router.route('/login').post(login)
router.route('/hello').get(message)

module.exports = router