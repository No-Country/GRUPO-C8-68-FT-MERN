import {
  CartGameCenter,
  CartGameContainer,
  CartGameLeft,
  CartGameRight,
} from './styles'
import { AiFillDelete } from "react-icons/ai";

const CartGame = () => {
  return (
    <CartGameContainer>
      <CartGameLeft>
        <img
          src="https://media.rawg.io/media/games/470/470fb8435cdea25bda1126e0b8e0a3b0.jpg"
          alt=""
        />
      </CartGameLeft>
      <CartGameCenter>
        <p>Title del juego </p>
      </CartGameCenter>
      <CartGameRight>
        <span><AiFillDelete size={"25px"}/></span>
        <p>$300.99</p>
      </CartGameRight>
    </CartGameContainer>
  )
}

export default CartGame
