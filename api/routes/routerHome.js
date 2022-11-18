const express = require('express')

const router = express.Router()
//Controllers
const homeController = require('../controllers/homeController.js')

const gamesModel = require ('../models/db.js').games

router.get('/', (req, res) => homeController(req, res))

module.exports = router