import { FooterContainer, FooterLinks, FooterSection } from "./styles";

export const DefaultFooter = () => {
    return ( 
        <FooterContainer>
            <FooterSection>
              <FooterLinks>
                     <li><a href="/">Facebook</a></li>
                    <li><a href="/">Twitter</a></li>
                     <li><a href="/">Instagram </a></li>
                </FooterLinks>     
            </FooterSection>
        </FooterContainer>

     );
}
 