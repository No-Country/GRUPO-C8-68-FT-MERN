import { GameDetailDescriptionContainer } from "./styles";

export const GameDetailDescription = ({description}) => {
    return ( 
<GameDetailDescriptionContainer>
    <p>{description}</p>
</GameDetailDescriptionContainer>
     );
}