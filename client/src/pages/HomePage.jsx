import { CardGrid } from '../Components/card-grid/card-grid'
import { Layout } from '../Components/layout/layout'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const HomePage = () => {
  const [bestSellers, setBestSellers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const URL = 'https://nc8-68backend-production.up.railway.app/bestsellers'
    axios
      .get(URL)
      .then((res) => {
        setBestSellers(res.data)
        setLoading(false)
      })
      .catch((err) => console.log(err.data))
  }, [])

  return (
    <Layout>
      <CardGrid
        title={'Best Seller'}
        bestSellers={bestSellers}
        loading={loading}
      />
      <CardGrid
        title={'Recomendations'}
        bestSellers={bestSellers}
        loading={loading}
      />
    </Layout>
  )
}

export default HomePage
