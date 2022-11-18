const mongoose = require('mongoose')

var userSchema = mongoose.Schema({
  user: String,
  pass: String,
  created: Date,
})

var gamesSchema = mongoose.Schema({
  name: String,
  sales: Number,
  fav: Number,
  review: Array,
  stars: Array
})


// var gameSchema = mongoose.Schema({
//   name: String,
//   image: String,
//   category: String,
//   platforms: Array,
//   price: Number,
//   released: Date,
//   esrb: String,
//   created: Date,
// });

module.exports = {users: mongoose.model('users', userSchema), games: mongoose.model('games', gamesSchema)}

/* mongoose types

    String
    Number
    Date
    Buffer
    Boolean
    Mixed
    ObjectId
    Array
    Decimal128
    Map
    Schema
*/
