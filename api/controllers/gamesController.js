const axios = require('axios')
const API_KEY = process.env.API_KEY // '60fb2544d2e0470a9b1dd79552c621da'; //
const baseUrl = 'https://api.rawg.io/api/'

// const options = '&search=walking dead&search_exact=true' //&dates=2019-09-01,2019-09-30&platforms=18,1,7';
const getPrice = async (title) => {
  const data = await axios.get(
    'https://www.cheapshark.com/api/1.0/games?title=' + title + '&exact=1'
  )
  let price = data.data[0]?.cheapest
  if (!price) price = 19.99
  //   const data2 = await axios.get(
  //     'https://www.cheapshark.com/api/1.0/games?id=' + gameId
  //   )
  //   price = data2.data.deals[0].retailPrice
  // } else {
  //   price = '19.99'
  // }
  return price
}

const games = async (req, res) => {
  let { search, platforms, dates, page } = req.query // falta order y price

  if (search) search = '&search=' + search + '&search_exact=true'
  else search = ''
  if (platforms) platforms = '&platforms=' + platforms
  else platforms = ''
  if (dates) dates = '&dates=' + dates
  else dates = '&dates=2022-01-01,2022-12-31' // del 01/01/2021 a la fecha son 332,147 juegos. del 01/01/2022 a la fecha son 158,949 juegos
  if (page) page = '&page=' + page
  else page = ''

  const options = search + platforms + dates + page
  const gamesUrl = baseUrl + 'games?key=' + API_KEY + options

  const resp = await axios.get(gamesUrl) // gamesUrl
  const total = resp.data.count

  const pages = Math.ceil(total / 20)
  const results = resp.data.results
  const games = []
  const prices = []

  // for (let i = 0; i < results.length; i++) {
  //   const price = await getPrice(results[i].name)
  //   prices.push(price)
  // }

  results.forEach((e, i) => {
    // Eliminamos las plataformas android y iOs
    if (e.platforms) {
      const platforms = e.platforms.filter((p) => {
        return p.platform.name !== 'Android' && p.platform.name !== 'iOS'
      })
      e.platforms = platforms
    }
    games.push({
      price: prices[i],
      id: e.id,
      name: e.name,
      background_image: e.background_image,
      platforms: e.platforms,
      categories: e.genres,
      //   tags: e.tags,
      released: e.released,
      esrb: e.esrb_rating,
      // price: 99.99,
      //   short_screenshots: e.short_screenshots
    })
  })

  res.json({ total, pages, games })
}

module.exports = games
