import {
  CartGameCenter,
  CartGameContainer,
  CartGameLeft,
  CartGameRight,
} from './styles'
import { AiFillDelete } from "react-icons/ai";

const CartGame = ({img, title, price, removeItem}) => {
  return (
    <CartGameContainer>
      <CartGameLeft>
        <img
          src={img}
          alt={title}
        />
      </CartGameLeft>
      <CartGameCenter>
        <p>{title}</p>
      </CartGameCenter>
      <CartGameRight>
        <span onClick={removeItem}><AiFillDelete size={"25px"}/></span>
        <p>$ {price}</p>
      </CartGameRight>
    </CartGameContainer>
  )
}

export default CartGame