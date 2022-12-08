import { GameDetaiIPriceContainer } from "./styles";
import { BsCart2} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const GameDetailPrice = ({price, addToCart, buyGame}) => {

    const navigate = useNavigate()

    return (  
        <GameDetaiIPriceContainer>
            <p>${price}</p>
            <button onClick={(
                addToCart,
                buyGame,
                () => navigate('/cart')
            )}><p>Buy now</p></button>
            <button onClick={addToCart}><BsCart2 size="23px"/><p>Add to cart</p></button>
        </GameDetaiIPriceContainer>
    );
}