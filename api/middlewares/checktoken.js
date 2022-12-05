const jwt = require('jsonwebtoken')
require('dotenv').config()
const TOKEN_KEY = process.env.TOKEN_KEY

const check = (token) => {
  try {
    let decoded = jwt.verify(token, TOKEN_KEY)
  } catch (err) {
    console.log('token invalido')
    return { message: 'Invalid Token' }
  }

  decoded = jwt.decode(token, { complete: true })
  return { user: decoded.payload.user }
}

module.exports = check
