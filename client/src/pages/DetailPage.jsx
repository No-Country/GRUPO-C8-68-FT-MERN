import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GameDetail } from '../Components/game-detail/game-detail'
import { GameReview } from '../Components/game-review/game-review'
import { Layout } from '../Components/layout/layout'

export const DetailPage = () => {
  const [game, setGame] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const URL = `https://nc8-68backend-production.up.railway.app/gamebyid?id=${id}`
    console.log('data  in detailpage', id)
    axios
      .get(URL)
      .then((res) => {
        console.log('data', res.data)
        setGame(res.data)
        console.log('game data in detailspage', game)
      })
      .catch((err) => console.log(err.data))
  }, [id])

  return (
    <Layout>
      <GameDetail
        img={game.background_image}
        title={game.name}
        price={game.price}
        release={game.released}
        description={game.description}
        categories={game.categories}
      />
      <GameReview />
    </Layout>
  )
}
