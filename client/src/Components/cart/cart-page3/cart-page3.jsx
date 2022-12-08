import { CartPage3Container, CartPage3Detail, CartPage3Step } from './styles'
import { HiMinus } from 'react-icons/hi'
import { useEffect } from 'react'
import { useState } from 'react'

const CartPage3 = ({ email, payCart }) => {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 840px)').matches
  )

  useEffect(() => {
    window
      .matchMedia('(min-width: 840px)')
      .addEventListener('change', (e) => setMatches(e.matches))
  }, [])

  return (
    <CartPage3Container>
      {matches ? (
        <CartPage3Step>
          <span>1</span>
          <p>Cart</p>
          <HiMinus size={'40px'} />
          <span>2</span>
          <p>Payment</p>
          <HiMinus size={'40px'} />
          <span style={{ background: '#00ADEF', color: 'white' }}>3</span>
          <p style={{ color: '#00ADEF' }}>Get Product</p>
        </CartPage3Step>
      ) : (
        <CartPage3Step>
          <HiMinus size={'40px'} />
          <p style={{ fontWeight: 'bold' }}>Get Product</p>
          <HiMinus size={'40px'} />
        </CartPage3Step>
      )}

      <CartPage3Detail>
        <p>Tu correo registrado es {email}</p>
        <button onClick={payCart}>Finalizar Compra</button>
      </CartPage3Detail>
    </CartPage3Container>
  )
}

export default CartPage3
