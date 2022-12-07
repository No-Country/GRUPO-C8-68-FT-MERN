import { CartPage2Container, CartPage2Step, CartPage2Title, CartPagePaymentCash, CartPagePaymentContainer } from "./styles";
import { HiMinus } from "react-icons/hi";
import { BsCreditCard} from "react-icons/bs";

const CartPage2 = ({total}) => {
    return ( 
        <CartPage2Container>
           <CartPage2Step><span >1</span><p >Cart</p><HiMinus size={"40px"} /><span style={{background:"#00ADEF", color:"white"}}>2</span><p style={{color:"#00ADEF"}}>Payment</p><HiMinus color="#00ADEF" size={"40px"} /><span>3</span><p>Get Product</p></CartPage2Step>
           <CartPage2Title>Medios de pago</CartPage2Title>
           <CartPagePaymentContainer>
            <CartPagePaymentCash style={{width:"70%", height:"60px"}}>
                <p><BsCreditCard size={"24px"}/>Efectivo</p>
                <p>Total Cart: $ {total.toFixed(2)}</p>
                <input type={"radio"}/>
            </CartPagePaymentCash>
           </CartPagePaymentContainer>
        </CartPage2Container>
     );
}
 
export default CartPage2;