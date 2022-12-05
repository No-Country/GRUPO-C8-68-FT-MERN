import Wizard from "../wizard/wizard"
import CartPage1 from "./cart-page1/cart-page1";
import CartPage2 from "./cart-page2/cart-page2";
import CartPage3 from "./cart-page3/cart-page3";

export const Cart = () => {
  return (
    <Wizard>
        <CartPage1/>
       <CartPage2/>
        <CartPage3/>
    </Wizard>
  )
}
