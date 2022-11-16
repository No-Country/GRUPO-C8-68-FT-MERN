import { CardContainer, CardImg, CardPrice, CardTitle } from "./styles";

export const Card = ({title, price, img}) => {
    return ( 
        <CardContainer>
            <CardImg src={img} />
            <CardTitle>{title}</CardTitle>
            <CardPrice>${price}</CardPrice>
        </CardContainer>
     );
}