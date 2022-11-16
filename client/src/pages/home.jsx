import { CardGrid } from "../components/card-grid/card-grid";
import { Layout } from "../components/layout/layout";

export const Home = () => {
    return ( 
        <Layout>
            <CardGrid title="Recomendados"/>
            <CardGrid title="Más Vendidos"/>
        </Layout>
    );
}
 