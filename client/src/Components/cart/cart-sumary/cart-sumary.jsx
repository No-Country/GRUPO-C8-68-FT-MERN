import { CartSumaryContainer } from './styles'

const CartSumary = ({games, total}) => {
  return (
    <CartSumaryContainer>
      <p>Sumary</p>
      <table>
        <tbody>
          {games.map(game => (<tr key={game.id}>
            <td>1 Product</td>
            <td>$ {game.price.toFixed(2)}</td>
          </tr>))}
         
          <tr>
            <td>Total: </td>
            <td>$ {total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </CartSumaryContainer>
  )
}

export default CartSumary
