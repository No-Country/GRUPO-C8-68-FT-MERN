const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const hbs = require('hbs')
const path = require('path')
const products = require('./routes/products')
const cart = require('./routes/cart')
var cookieParser = require('cookie-parser')
var session = require('express-session')

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

const app = express()

app.set('views', path.join(__dirname, 'views'))
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')

app.use(cookieParser())
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
  })
)

app.use(express.static(path.join(__dirname, 'public')))
app.use(function (req, res, next) {
  res.locals.session = req.session
  next()
})

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/cart', cart)
app.use('/user', cors(), userRouter)
app.use('/games', cors(), routergames)
app.use('/gamebyid', cors(), routerGameID)
app.use('/', cors(), routerVarious)
app.use('/bestsellers', cors(), routerBestSellers)
app.get('/saveitem', products.create)
app.post('/additem', products.store)

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
