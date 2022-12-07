import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GameDetail } from '../Components/game-detail/game-detail'
import { GameReview } from '../Components/game-review/game-review'
import { Layout } from '../Components/layout/layout'
import { Spinner } from '../Components/spinner/spinner'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/slices/cart.slice'
import { useCallback } from 'react'

const addToUserCart = (token, cart) => {
  return axios.post(
    'https://grupo-c8-68-ft-mern-production.up.railway.app/cart/add',
    {
      token,
      games: cart,
    }
  )
}

export const DetailPage = () => {
  const [game, setGame] = useState({})
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [updateCart, setUpdateCart] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector((state) => state.user.user.token)
  const cart = useSelector((state) => state.cart.cart)

  const handleAddToCart = useCallback(() => {
    if (token) {
      dispatch(addToCart(game.id))
      setUpdateCart(true)
    } else {
      navigate('/login')
    }
  }, [game?.id, navigate, token, dispatch])

  const handleBuyItem = useCallback(() => {
    if (token) {
      dispatch(addToCart(game.id))
      navigate('/cart')
    } else {
      navigate('/login')
    }
  }, [game?.id, navigate, token, dispatch])

  useEffect(() => {
    const URL = `https://grupo-c8-68-ft-mern-production.up.railway.app/gamebyid?id=${id}`
    axios
      .get(URL)
      .then((res) => {
        setGame(res.data)
        setLoading(false)
      })
      .catch((err) => console.log(err.data))
  }, [id])

  useEffect(() => {
    if (updateCart) {
      addToUserCart(token, cart).then(() => {
        setUpdateCart(false)
      })
    }
  }, [updateCart, token, cart])

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
            price={game.price.toFixed(2)}
            release={game.released}
            description={game.description}
            categories={game.categories}
            addToCart={handleAddToCart}
            buyGame={handleBuyItem}
          />
          <GameReview />
        </>
      )}
    </Layout>
  )
}
