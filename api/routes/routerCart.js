const express = require('express')
const router = express.Router()

//Controllers
const cartController = require('../controllers/cartController')

router.get('/', cartController)

module.exports = router
