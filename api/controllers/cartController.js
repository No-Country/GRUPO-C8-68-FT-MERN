const cartModel = require('../models/carts')
const checktoken = require('../middlewares/checktoken')

const getCart = (req, res) => {
  const { token } = req.body

  const data = checktoken(token)

  if (data.user) res.status(200).json({ user: decoded.payload.user })
  else res.status(400).json({ message: data.message })
}

const addCart = (req, res) => {
  const { token } = req.body

  const data = checktoken(token)

  if (data.user) res.status(200).json({ user: decoded.payload.user })
  else res.status(400).json({ message: data.message })
}

module.exports = getCart
