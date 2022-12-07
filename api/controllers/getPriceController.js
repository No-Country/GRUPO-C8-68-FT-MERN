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

module.exports = getPrice
