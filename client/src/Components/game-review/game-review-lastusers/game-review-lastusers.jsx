import { CardReview } from "../../card-review/card-review";
import { GameReviewsLastUsersContainer } from "./styles";

export const GameReviewLastUsers = ({datos}) => {
    return ( 
        <GameReviewsLastUsersContainer>
            {datos.map(el=>
            <CardReview
            key={el.id}
            user={el.user}
            comment={el.comment}
            img={el.img}
            />
            )}
        </GameReviewsLastUsersContainer>
     );
}