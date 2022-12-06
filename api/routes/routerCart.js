const express = require('express')
const router = express.Router()

//Controllers
const cartController = require('../controllers/cartController')

router.post('/get', cartController.getCart)
router.post('/add', cartController.addCart)
router.post('/paid', cartController.addOrder)

module.exports = router
