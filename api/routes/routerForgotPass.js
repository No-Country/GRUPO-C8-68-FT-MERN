// ruta para enviar el correo
const express = require('express')
const router = express.Router()

//Controllers
const forgotController = require('../controllers/forgotController')

router.get('/:email', forgotController)

module.exports = router
