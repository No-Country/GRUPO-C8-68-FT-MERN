const mongoose = require('mongoose')

var userSchema = mongoose.Schema({
  user: String,
  pass: String,
  date: Date,
})

module.exports = mongoose.model('users', userSchema)

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
