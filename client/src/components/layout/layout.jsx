import { DefaultFooter } from "../footer/default-footer";
import { DefaultNavbar } from "../navbar/default-navbar";
import { Container } from "./styles";

export const Layout = ({children}) => {
    return ( 
        <>
        <DefaultNavbar/>
        <Container>{children}</Container>
        <DefaultFooter/>
        </>
     );
}
 