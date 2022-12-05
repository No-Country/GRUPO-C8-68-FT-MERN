const cartModel = require('../models/carts')
const checktoken = require('../middlewares/checktoken')

const getCart = (req, res) => {
  const { token } = req.body

  const data = checktoken(token) // checamos el token

  if (data.user) {
    cartModel.find({ user: data.user }, (err, exists) => {
      if (err) {
      } else {
        if (exists) res.status(200).json(exists)
      }
    })

    // res.status(200).json({ user: decoded.payload.user })
  } else res.status(400).json({ message: data.message })
}

const addCart = async (req, res) => {
  const { token, games } = req.body

  const data = checktoken(token)

  if (data.user) {
    await cartModel.updateOne({ user: data.user, cart: games })
    res.status(200).json({ message: `Cart of ${data.user}' updated` })
  } else res.status(400).json({ message: data.message })
}

module.exports = { getCart, addCart }
