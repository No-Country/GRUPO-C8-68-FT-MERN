import { useEffect, useState } from "react";
import { CardGrid } from "../components/card-grid/card-grid";
import { Layout } from "../components/layout/layout";

const getGames = async(options="") => {
      const data = await fetch("http://localhost:8080/games"+options, {
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
      const json = await data.json()
      return json 
    }


export const HomePage = () => {
    const [games, setGames] = useState([]);
    useEffect(
        ()=>{
            getGames()
            .then(data => setGames(data.games))
        },[]
    );
    
    return ( 
        <Layout>
            <CardGrid games={games} title="Best Seller"/>
            <CardGrid games={games} title="Recomendations"/>
        </Layout>
    );
}
 