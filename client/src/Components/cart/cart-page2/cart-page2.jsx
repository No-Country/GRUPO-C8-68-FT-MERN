import {
  CartPage2Container,
  CartPage2Step,
  CartPage2Title,
  CartPagePaymentCash,
  CartPagePaymentContainer,
} from './styles'
import { HiMinus } from 'react-icons/hi'
import { BsCreditCard } from 'react-icons/bs'
import { useState } from 'react'
import { useEffect } from 'react'
import { Text } from '../../../AppGlobalStyles'

const CartPage2 = ({ total }) => {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 840px)').matches
  )

  useEffect(() => {
    window
      .matchMedia('(min-width: 840px)')
      .addEventListener('change', (e) => setMatches(e.matches))
  }, [])

  return (
    <CartPage2Container>
        {
            (matches)
            ? <CartPage2Step>
                <span>1</span>
                <p>Cart</p>
                <HiMinus size={'40px'} />
                <span
                style={{
                    background: '#00ADEF',
                    color: 'white',
                }}
                >
                2
                </span>
                <p style={{ color: '#00ADEF' }}>Payment</p>
                <HiMinus color="#00ADEF" size={'40px'} />
                <span>3</span>
                <p>Get Product</p>
            </CartPage2Step>
            : 
            <CartPage2Step>
            <HiMinus size={'40px'} />
                <Text style={{ fontWeight: 'bold' }}>Payment</Text>
                <HiMinus size={'40px'} />
            </CartPage2Step>
        }
      <CartPage2Title>Medios de pago</CartPage2Title>
      <CartPagePaymentContainer>
        <CartPagePaymentCash style={{ width: '70%', height: '60px' }}>
          <p>
            <BsCreditCard size={'24px'} />
            Efectivo
          </p>
          <p>Total Cart: $ {total.toFixed(2)}</p>
          <input type={'radio'} />
        </CartPagePaymentCash>
      </CartPagePaymentContainer>
    </CartPage2Container>
  )
}

export default CartPage2
