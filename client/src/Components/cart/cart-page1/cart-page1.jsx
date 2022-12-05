import CartGame from '../cart-game/cart-game'
import CartSumary from '../cart-sumary/cart-sumary'
import { HiMinus } from "react-icons/hi";
import {
  CartPage1Container,
  CartPage1Left,
  CartPage1Right,
  CartPage1Section,
  CartPage1Step,
  CartPage1Title,
} from './styles'

const CartPage1 = () => {
  return (
    <CartPage1Container>
      <CartPage1Step><span style={{background:"#00ADEF", color:"white"}}>1</span><p style={{color:"#00ADEF"}}>Cart</p><HiMinus color="#00ADEF" size={"40px"} /><span>2</span><p>Payment</p><HiMinus  size={"40px"} /><span>3</span><p>Get Product</p></CartPage1Step>
      <CartPage1Title>Your Cart</CartPage1Title>
      <CartPage1Section>
        <CartPage1Left style={{width:"60%"}}>
          <CartGame />
          <CartGame />
        </CartPage1Left>
        <CartPage1Right style={{width:"40%"}}>
          <CartSumary />
        </CartPage1Right>
      </CartPage1Section>
    </CartPage1Container>
  )
}

export default CartPage1
