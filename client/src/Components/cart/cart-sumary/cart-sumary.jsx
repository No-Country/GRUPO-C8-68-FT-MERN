import { CartSumaryContainer } from './styles'

const CartSumary = () => {
  return (
    <CartSumaryContainer>
      <p>Sumary</p>
      <table>
        <tbody>
          <tr>
            <td>1 Product</td>
            <td>$ 500.99</td>
          </tr>
         
          <tr>
            <td>Total: </td>
            <td>$ 1500.99</td>
          </tr>
        </tbody>
      </table>
    </CartSumaryContainer>
  )
}

export default CartSumary
