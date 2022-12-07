import { CartPage3Container, CartPage3Detail, CartPage3Step } from "./styles";
import { HiMinus } from "react-icons/hi";

const CartPage3 = ({email, payCart}) => {
        
    return ( 
        <CartPage3Container>
            <CartPage3Step><span >1</span><p >Cart</p><HiMinus size={"40px"} /><span >2</span><p >Payment</p><HiMinus size={"40px"} /><span style={{background:"#00ADEF", color:"white"}}>3</span><p style={{color:"#00ADEF"}}>Get Product</p></CartPage3Step>
            <CartPage3Detail>
                <p>Tu correo registrado es {email}</p>
                <button onClick={payCart}>Finalizar Compra</button>
            </CartPage3Detail>
        </CartPage3Container>
     );
}
 
export default CartPage3;