// ids mas vendidos:
//     Anillo de Elden  - 326243
//     Horizon forbidden west - 452642
//     Call of Duty: Vanguardia - 647552
//     gran turismo 7 - 452633
//     Kirby y la tierra olvidada - 667657
//     Madden NFL 22 - 650806
//     Minecraft - 22509
//     fifa23 - 823549
//     Cazador de monstruos: Asciende - 669216
//     Call of Duty: Black Ops: Guerra Fría - 719765
//     Dying Light 2: Stay Human - 58758
const data = require('../data/home')
const axios = require('axios')
const API_KEY = process.env.API_KEY
const baseUrl = 'https://api.rawg.io/api/'
const { bestsellers, recommended } = data
// const bestSellers = [
//   326243, 667657, 58758, 669216, 647552, 452642, 650806, 22509, 823549, 452633,
// ]

// const recommended = [
//   872778, 846505, 759363, 616697, 388308, 22509, 326239, 761405, 494384, 462677,
// ]

const searchGame = async (id) => {
  let gamesUrl
  if (id) gamesUrl = baseUrl + 'games/' + id + '?key=' + API_KEY

  try {
    const resp = await axios.get(gamesUrl)

    const result = resp.data
    let game = {}
    let platforms

    // Eliminamos las plataformas android y iOs
    if (result.platforms.length > 0) {
      platforms = result.platforms.filter((p) => {
        return p.platform.name !== 'Android' && p.platform.name !== 'iOS'
      })
      result.platforms = platforms
    }

    game = {
      id: result.id,
      name: result.name,
      background_image: result.background_image,
      platforms: result.platforms,
      categories: result.genres,
      //   tags: result.tags,
      released: result.released,
      esrb: result.esrb_rating,
      price: 99.99,
      //   short_screenshots: result.short_screenshots
    }

    return game
  } catch (err) {
    return { error: err.message }
  }
}

const games = async (req, res) => {
  // let result1 = [],
  //   result2 = []
  // for (let i = 0; i < 10; i++) {
  //   result1.push(await searchGame(bestSellers[i]))
  //   result2.push(await searchGame(recommended[i]))
  // }
  res.json({ bestsellers, recommended })
}

module.exports = games
