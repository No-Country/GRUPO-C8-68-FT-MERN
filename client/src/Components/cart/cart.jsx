import Wizard from "../wizard/wizard"
import CartPage1 from "./cart-page1/cart-page1";
import CartPage2 from "./cart-page2/cart-page2";
import CartPage3 from "./cart-page3/cart-page3";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeItem, setCartGlobal } from '../../store/slices/cart.slice'
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate} from 'react-router-dom'

const addToUserCart = (token, cart) => {
  return axios.post('https://grupo-c8-68-ft-mern-production.up.railway.app/cart/add', {
    token,
    games: cart
  });
}

const getGame = (id) => {
  const URL = `https://grupo-c8-68-ft-mern-production.up.railway.app/gamebyid?id=${id}`
  return axios
    .get(URL).then(({ data }) => data)
}

const getGames = (ids) => {
  const promises = ids.map(id => (getGame(id)));
  return Promise.all(promises)
}

const payCart = (token, cart) => {
  return axios.post('https://grupo-c8-68-ft-mern-production.up.railway.app/cart/paid', {
    token,
    games: cart
  });
}

export const Cart = () => {
  const dispatch = useDispatch()
  const email = useSelector((state) => state.user.user.email)
  const token = useSelector((state) => state.user.user.token)
  const cart = useSelector((state) => state.cart.cart)
  const [games, setGames] = useState([]);
  const [updateCart, setUpdateCart] = useState(false);
  const total = games?.reduce((acc, curr) => acc + curr.price, 0)
  const removeGame = (id) => {
    dispatch(removeItem(id))
    setUpdateCart(true);
  }

  const navigate = useNavigate();
  
  const handlePayCart = () => {
    payCart(token, cart).then(() => {
      dispatch(setCartGlobal([]))
      navigate('/home')
    })
  }
  
  useState(() => {
    if (cart?.length > 0) {
      getGames(cart).then((data) => {
        setGames(data);
      })
    }
  }, [cart?.length]);


  useEffect(() => {
    if(updateCart){
      addToUserCart(token, cart).then(() => {
        getGames(cart).then((data) => {
          setGames(data);          
          setUpdateCart(false);
        })
      });
    }
  },[updateCart, token, cart])
  
  return (
    <Wizard>
      <CartPage1 games={games} removeItem={removeGame} total={total} />
      <CartPage2 total={total} />
      <CartPage3 email={email} payCart={handlePayCart}/>
    </Wizard>
  )
}