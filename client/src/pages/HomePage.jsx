import { CardGrid } from '../Components/card-grid/card-grid'
import { Layout } from '../Components/layout/layout'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const HomePage = () => {
  const [bestSellers, setBestSellers] = useState([])
  const [recommended, setRecommended] = useState([])
  const [loading, setLoading] = useState(true)

  //! Se obtienen todos los juegos de la BD

 

  useEffect(() => {
    const URL = 'https://nc8-68backend-production.up.railway.app/bestsellers'
    axios
      .get(URL)
      .then((res) => {
        // console.log('data in HomePage', res.data)
        setBestSellers(res.data.bestsellers)
        setRecommended(res.data.recommended)
        setLoading(false)
      })
      .catch((err) => console.log(err.data))
  }, [])

  return (
    <Layout>
      <CardGrid title={'Best Seller'} games={bestSellers} loading={loading} />
      <CardGrid
        title={'Recomendations'}
        games={recommended}
        loading={loading}
      />
    </Layout>
  )
}

export default HomePage
