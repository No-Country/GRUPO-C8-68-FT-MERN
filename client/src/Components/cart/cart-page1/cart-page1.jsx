import CartGame from '../cart-game/cart-game'
import CartSumary from '../cart-sumary/cart-sumary'
import { HiMinus } from 'react-icons/hi'
import {
  CartPage1Container,
  CartPage1Left,
  CartPage1Right,
  CartPage1Section,
  CartPage1Step,
  CartPage1Title,
} from './styles'
import { useEffect, useState } from 'react'
import { Text } from '../../../AppGlobalStyles'

const CartPage1 = ({ games, removeItem, total }) => {

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 840px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 840px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  return (
    <CartPage1Container>
        {
          (matches)
          ? (
            
            <CartPage1Step>
              <span style={{ background: '#00ADEF', color: 'white' }}>1</span>
              <p style={{ color: '#00ADEF' }}>Cart</p>
              <HiMinus color="#00ADEF" size={'40px'} />
              <span>2</span>
              <p>Payment</p>
              <HiMinus size={'40px'} />
              <span>3</span>
              <p>Get Product</p>
            </CartPage1Step>
          )
          : <CartPage1Step>
              
              <HiMinus size={'40px'} />
              <Text style={{ fontWeight: 'bold' }}>Cart</Text>
              <HiMinus size={'40px'} />
            </CartPage1Step>
        }
      <CartPage1Title>Your Cart:</CartPage1Title>
      <CartPage1Section>
        <CartPage1Left style={{ width: '60%' }}>
          {games.map((game) => (
            <CartGame
              key={game.id}
              id={game.id}
              img={game.background_image}
              title={game.name}
              price={game.price.toFixed(2)}
              removeItem={() => removeItem(game.id)}
            />
          ))}
        </CartPage1Left>
        <CartPage1Right style={{ width: '40%' }}>
          <CartSumary games={games} total={total} />
        </CartPage1Right>
      </CartPage1Section>
    </CartPage1Container>
  )
}

export default CartPage1
