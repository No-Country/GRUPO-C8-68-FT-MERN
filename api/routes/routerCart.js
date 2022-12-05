const express = require('express')
const router = express.Router()

//Controllers
const cartController = require('../controllers/cartController')

router.get('/', cartController.getCart)
router.post('/', cartController.addCart)

module.exports = router
