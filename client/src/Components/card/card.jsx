import { Link } from "react-router-dom";
import { PlatformsIcons } from "./platforms-icons/platforms-icons";
import {
  CardContainer,
  CardBottom,
  CardPrice,
  CardTitle,
  CardTop
} from "./styles";

export const Card = ({ title, price, img, id}) => {
 
  return (
    <Link style={{"textDecoration":"none"}} to={`/detail/${id}`}>
    <CardContainer>
      <CardTop>
        <img src={img} alt=''/>
      </CardTop>
      <CardBottom>
        <CardTitle>{title}</CardTitle>
        <PlatformsIcons/>
        <CardPrice>${price}</CardPrice>
      </CardBottom>
    </CardContainer>
    </Link>
  );
};
