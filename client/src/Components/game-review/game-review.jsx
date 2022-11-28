import { GameReviewAllUsers } from "./game-review-allusers/game-review-allusers";
import { GameReviewLastUsers } from "./game-review-lastusers/game-review-lastusers";
import { GameReviewContainer, GameReviewTitle } from "./styles";

export const GameReview = () => {

const datosReview = [{
    id: 1, 
    user: "Alfonso Pérez",
    comment: "Excellent game, many hours of fun, full of side missions.",
    img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
},
{
    id: 2, 
    user: "Olivia",
    comment: "It is the best version of this game that exists without a doubt.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvdG9zJTIwdXN1YXJpb3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
},
{
    id: 3, 
    user: "Mike Dump",
    comment: "Simply an improvement in quality, excellent port to PC, very well optimized.",
    img: "https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=170667a&w=0&k=20&c=VtKj1OoYOLICsHLPRLkVQD8MnRzqWoykeHE-rn0ILyo="
},
{
    id: 4, 
    user: "AllyGamer03",
    comment: "The console version was good, but this one is excellent.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE0YGpbPhRyN-6WU8OjFREWLA9vW6g3mg6NdulCEsse7soiENF7-DsDQuuURVxtGI1U_g&usqp=CAU"
}
]

    return ( 
        <GameReviewContainer>
            <GameReviewTitle>4 Reviews</GameReviewTitle>
            <GameReviewLastUsers datos={datosReview}/>
            <GameReviewAllUsers datos={datosReview}/>
        </GameReviewContainer>
    );
}