import { PlatformsIcons } from "../../card/platforms-icons/platforms-icons";
import { GameDetailImageContainer } from "./styles";

export const GameDetailImage = ({img}) => {
    return ( 
        <GameDetailImageContainer>
            <img src={img} alt="" />
            <PlatformsIcons/>
        </GameDetailImageContainer>
     );
}
 