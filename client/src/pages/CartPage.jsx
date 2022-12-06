import React, { useEffect, useState } from 'react'
import { Cart } from '../Components/cart/cart'
import { Layout } from '../Components/layout/layout'
import { getAllProductsCart } from '../store/slices/cart.slice'
import { useDispatch, useSelector } from 'react-redux'

const CartPage = () => {
  const [total, setTotal] = useState(0)

  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsCart())
  }, [])

  return (
    <Layout>
      <Cart/>
    </Layout>
  )
}

export default CartPage