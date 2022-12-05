import { BsWindows} from "react-icons/bs";
import { FaXbox } from "react-icons/fa";
import { SiNintendoswitch, SiPlaystation} from "react-icons/si";

import { PlatformsIconsContainer } from "./styles";

export const PlatformsIcons = () => {
    return (
    <PlatformsIconsContainer>
        <span><BsWindows size="26px"/></span>
        <span><SiPlaystation size="26px" /></span>
        <span><FaXbox size="26px" /></span>
        <span><SiNintendoswitch size="26px"/></span>
    </PlatformsIconsContainer>
    );
}
