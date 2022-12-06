import { createSlice } from "@reduxjs/toolkit";
import getToken from '../../utils/getToken'
import { useSelector } from 'react-redux'
import axios from "axios";

const cartSlice = createSlice({
  name: 'cart',
  initialState: null,
  reducers: {
    setCartGlobal: (state, action) => action.payload
  }
})
export const { setCartGlobal } = cartSlice.actions

export default cartSlice.reducer

console.log(getToken())

export const getAllProductsCart = () => (dispatch) => {
  const URL = 'https://grupo-c8-68-ft-mern-production.up.railway.app/cart'
  return axios.get(URL, getToken())
    .then(res => dispatch(setCartGlobal(res.data)))
    .catch(err => console.log(err))
} 