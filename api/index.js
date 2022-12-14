const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const MONGO_PASS = process.env.MONGO_PASS
const PORT = process.env.PORT || 8080
const LOCAL = process.env.LOCAL || false

// Routes
const userRouter = require('./routes/users.router')
const routergames = require('./routes/routerGames')
const routerVarious = require('./routes/routerVarious')
const routerGameID = require('./routes/routerGameID')
const routerBestSellers = require('./routes/routerBestSellers')
const routerForgotPass = require('./routes/routerForgotPass')
const products = require('./routes/products')
const routerCart = require('./routes/routerCart')

const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', cors(), routerVarious)
app.use('/user', cors(), userRouter)
app.use('/games', cors(), routergames)
app.use('/gamebyid', cors(), routerGameID)
app.use('/bestsellers', cors(), routerBestSellers)
app.use('/cart', cors(), routerCart)

// provisional para ver todos los carritos de la BD
const cartModel = require('./models/carts')
app.use('/allcarts', cors(), (req, res) => {
  cartModel.find({}, (err, exists) => {
    if (err) {
      res.status(400).json({ message: err })
    } else {
      res.status(200).json(exists)
    }
  })
})
// provisional para ver todas los ordenes de la BD
const orderModel = require('./models/orders')
app.use('/allorders', cors(), (req, res) => {
  orderModel.find({}, (err, exists) => {
    if (err) {
      res.status(400).json({ message: err })
    } else {
      res.status(200).json(exists)
    }
  })
})

app.use('/recuperationmail', cors(), routerForgotPass)

const server = app.listen(PORT, () => {
  console.log(`Server listening in: https://localhost:${PORT}`)
})

server.on('error', (error) => console.log('Error: ', error.message))

mongoose.connect(
  'mongodb+srv://gandhycoder:' +
    MONGO_PASS +
    '@cluster0.9gsyi7q.mongodb.net/?retryWrites=true&w=majority',
  (err) => {
    if (err) throw err
    console.log('Successfully conected to GamesDB')
  }
)
