const mongoose = require('mongoose')

var orderSchema = mongoose.Schema({
  user: String,
  date: Date,
  desc: String,
  type: String,
  games: Array,
  total: Number,
  delivered: Boolean,
  payment: String,
})

module.exports = mongoose.model('orders', orderSchema)
