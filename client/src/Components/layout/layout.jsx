import { PageContainer } from "../../AppGlobalStyles";

export const Layout = ({children}) => {
    return ( 
        <PageContainer>
            {children}
        </PageContainer>
    );
}