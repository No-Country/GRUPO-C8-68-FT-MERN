import { createSlice } from '@reduxjs/toolkit'
import getToken from '../../utils/getToken'
import { useSelector } from 'react-redux'
import axios from 'axios'

const cartSlice = createSlice({
  name: 'cart',
  initialState: null,
  reducers: {
    setCartGlobal: (state, action) => action.payload,
  },
})
export const { setCartGlobal } = cartSlice.actions

export default cartSlice.reducer

export const getAllProductsCart = () => (dispatch) => {
  console.log('get token slice', getToken())
  const URL = 'https://grupo-c8-68-ft-mern-production.up.railway.app/cart/get'
  return axios
    .post(URL, getToken()) //
    .then((res) => {
      console.log('then cart slice', res.data)
      dispatch(setCartGlobal(res.data))
    })
    .catch((err) => console.log('error catch en car slice', err))
}
