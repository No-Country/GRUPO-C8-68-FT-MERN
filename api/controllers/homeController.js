const mongoose = requirer ("mongoose");
const { games } = require("../models/db");


  games.insertMany(data, (err, result) => {
    if (err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })

  const data = games.find({}, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      return result;
    }
  })

//   var gamesSchema = mongoose.Schema({
//     name: String,
//     sales: Number,
//     fav: Number,
//     review: Array,
//     stars: Array
//   })
  