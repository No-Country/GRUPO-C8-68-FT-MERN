import { BsWindows} from "react-icons/bs";
import { FaXbox } from "react-icons/fa";
import { SiNintendoswitch, SiPlaystation} from "react-icons/si";
import {
  CardContainer,
  CardBottom,
  CardPrice,
  CardTitle,
  CardTop,
  CardPlatformsIcons
} from "./styles";

export const Card = ({ title, price, img}) => {
 
  return (
    <CardContainer>
      <CardTop>
        <img src={img} alt=''/>
      </CardTop>
      <CardBottom>
        <CardTitle>{title}</CardTitle>
        <CardPlatformsIcons>
          <span><BsWindows size="28px"/></span>,
          <span><SiPlaystation size="28px" /></span>,
          <span><FaXbox size="28px" /></span>,
          <span><SiNintendoswitch size="28px"/></span>
        </CardPlatformsIcons>
        <CardPrice>${price}</CardPrice>
      </CardBottom>
    </CardContainer>
  );
};
