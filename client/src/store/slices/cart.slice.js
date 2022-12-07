import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    setCartGlobal: (state, action) => {
      state.cart = action.payload
    },
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item === action.payload);
      if (!itemInCart) {
        state.cart.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item !== action.payload);
      state.cart = removeItem;
  },
  },
})
export const { addToCart, removeItem, setCartGlobal } = cartSlice.actions

export default cartSlice.reducer
