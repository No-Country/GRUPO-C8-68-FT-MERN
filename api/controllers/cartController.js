const cartModel = require('../models/carts')
const orderModel = require('../models/orders')
const checkToken = require('../middlewares/checkToken')

const getCart = (req, res) => {
  const { token } = req.body

  const data = checkToken(token) // checamos el token

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

  const data = checkToken(token)

  if (data.user) {
    await cartModel.updateOne({ user: data.user, cart: games })
    res.status(200).json({ message: `Cart of ${data.user}' updated` })
  } else res.status(400).json({ message: data.message })
}
const addOrder = async (req, res) => {
  const { token, desc, games, total, delivered, payment } = req.body

  const data = checkToken(token)

  if (data.user) {
    const newOrder = await orderModel.create({
      date: Date(),
      desc: desc,
      games: games,
      total: total,
      delivered: delivered,
      payment: payment,
    })
    // limpiamos el carrito
    try {
      await cartModel.updateOne({ user: data.user, cart: [] })
    } catch (err) {
      console.log('No existe el carrito')
    }
    res
      .status(200)
      .json({ message: `order of ${data.user}' created`, newOrder })
  } else res.status(400).json({ message: data.message }) //
}

module.exports = { getCart, addCart, addOrder }
