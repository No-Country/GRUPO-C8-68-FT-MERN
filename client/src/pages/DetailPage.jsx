import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GameDetail } from '../Components/game-detail/game-detail'
import { GameReview } from '../Components/game-review/game-review'
import { Layout } from '../Components/layout/layout'
import { Spinner } from '../Components/spinner/spinner'

export const DetailPage = () => {
  const [game, setGame] = useState([])
  const { id } = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const URL = `https://nc8-68backend-production.up.railway.app/gamebyid?id=${id}`
    axios
      .get(URL)
      .then((res) => {
        setGame(res.data)
        setLoading(false)
      })
      .catch((err) => console.log(err.data))
  }, [id])

  console.log('id in DetailPage', id)
  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <GameDetail
            img={game.background_image}
            title={game.name}
            price={game.price}
            release={game.released}
            description={game.description}
            categories={game.categories}
          />
          <GameReview />
        </>
      )}
    </Layout>
  )
}
