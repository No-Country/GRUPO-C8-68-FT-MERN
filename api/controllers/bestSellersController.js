const { bestSellers, recommended } = require('../data/home')
// console.log('data', { bestSellers })

const games = (req, res) => {
  bestSellers.forEach((b, i) => {
    const platforms = []
    const categories = []
    if (b?.platforms) {
      b.platforms.forEach((e) => {
        platforms.push({ name: e.platform.name })
      })
      bestSellers[i].platforms = platforms
    }
    if (b?.categories) {
      b.categories.forEach((e) => {
        categories.push({ name: e.name })
      })
      bestSellers[i].categories = categories
    }
    bestSellers[i].price = (Math.random() * 60 + 10).toFixed(2)
  })

  recommended.forEach((b, i) => {
    const platforms = []
    const categories = []
    if (b?.platforms) {
      b.platforms.forEach((e) => {
        platforms.push({ name: e.platform.name })
      })
      recommended[i].platforms = platforms
    }
    if (b?.categories) {
      b.categories.forEach((e) => {
        categories.push({ name: e.name })
      })
      recommended[i].categories = categories
    }
    recommended[i].price = (Math.random() * 60 + 10).toFixed(2)
  })

  // res.json({ result1, result2 })
  res.json({ bestSellers, recommended })
}

module.exports = games
