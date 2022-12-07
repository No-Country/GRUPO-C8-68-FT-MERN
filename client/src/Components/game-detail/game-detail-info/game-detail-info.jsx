import { GameDetailCategories } from "./game-detail-categories/game-detail-categories";
import { GameDetailPrice } from "./game-detail-price/game-detail-price";
import { GameDetaiInfoContainer } from "./styles";

export const GameDetailInfo = ({release,categories, price, addToCart, buyGame}) => {
    return ( 
        <GameDetaiInfoContainer>
             <GameDetailCategories release={release} categories={categories} />
             <GameDetailPrice price={price} addToCart={addToCart} buyGame={buyGame}/>
        </GameDetaiInfoContainer>
     );
}