import { GameDetaiIPriceContainer } from "./styles";
import { BsCart2} from "react-icons/bs";

export const GameDetailPrice = ({price}) => {
    return (  
        <GameDetaiIPriceContainer>
            <p>${price}</p>
            <button><p>Buy now</p></button>
            <button><BsCart2 size="23px"/><p>Add to cart</p></button>
        </GameDetaiIPriceContainer>
    );
}