import { GameDetaiIPriceContainer } from "./styles";
import { BsCart2} from "react-icons/bs";

export const GameDetailPrice = ({price, addToCart, buyGame}) => {
    return (  
        <GameDetaiIPriceContainer>
            <p>${price}</p>
            <button onClick={buyGame}><p>Buy now</p></button>
            <button onClick={addToCart}><BsCart2 size="23px"/><p>Add to cart</p></button>
        </GameDetaiIPriceContainer>
    );
}