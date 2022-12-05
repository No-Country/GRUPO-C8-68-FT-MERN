const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const hbs = require('hbs')
const path = require('path')

var cookieParser = require('cookie-parser')
var session = require('express-session')
var bodyParser = require('body-parser')

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
const cartRouter = require('./routes/routerCart')


const app = express()

const viewController = require('./controllers/viewController')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', cartRouter) // app.use('/', cart)
app.use('/user', cors(), userRouter)
app.use('/games', cors(), routergames)
app.use('/gamebyid', cors(), routerGameID)
// app.use('/', cors(), routerVarious)
app.use('/bestsellers', cors(), routerBestSellers)
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
