import { Rating } from "../rating/rating";
import { CardReviewComment, CardReviewContainer, CardReviewImage, CardReviewLikeContainer, CardReviewUser } from "./styles";
import { AiOutlineDislike, AiOutlineLike} from "react-icons/ai";

export const CardReview = ({user, comment, img}) => {
    return (  
    <CardReviewContainer>
        <CardReviewUser>{user}</CardReviewUser>
        <CardReviewImage><img src={img} alt="" /></CardReviewImage>
        <Rating/>
        <CardReviewComment>{comment}</CardReviewComment>
        <CardReviewLikeContainer>
            <span><AiOutlineLike size="26px"/></span>
            <span><AiOutlineDislike size="26px"/></span>
        </CardReviewLikeContainer>
    </CardReviewContainer>
    );
}