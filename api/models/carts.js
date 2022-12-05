const mongoose = require('mongoose')

var cartSchema = mongoose.Schema({
  cart: Array,
  date: Date,
  user: String,
})

module.exports = mongoose.model('carts', cartSchema)
