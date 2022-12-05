import { CommentReview } from "../../comment-review/comment-review";
import { GameReviewAllUsersContainer } from "./styles";

export const GameReviewAllUsers = ({datos}) => {
    return (  
        <GameReviewAllUsersContainer>
            {datos.map(el=> 
            <CommentReview key={el.id}
            user={el.user}
            comment={el.comment}
            img={el.img}
            />
                
            )}
        </GameReviewAllUsersContainer>
    );
}