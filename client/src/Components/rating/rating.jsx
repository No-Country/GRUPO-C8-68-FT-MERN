import { RatingContainer, RatingContainerStar } from "./styles";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

export const Rating = () => {
    return ( 
        <RatingContainer>
            <RatingContainerStar><BsStarFill size="20px"/></RatingContainerStar>
            <RatingContainerStar><BsStarFill size="20px"/></RatingContainerStar>
            <RatingContainerStar><BsStarFill size="20px"/></RatingContainerStar>
            <RatingContainerStar><BsStarHalf size="20px"/></RatingContainerStar>
            <RatingContainerStar><BsStar size="20px"/></RatingContainerStar>
        </RatingContainer>
     );
}