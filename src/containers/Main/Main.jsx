import { useState, useEffect } from "react";
import CardList from "../CardList/CardList";

const Main = () => {
    const url = "https://api.punkapi.com/v2/beers";
    const [beers, setBeers] = useState();
  
    const getBeer = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setBeers(data);
    };

    useEffect(()=>{
        getBeer();
    }, []);

    return beers && <CardList beersArr={beers}/>;
};

export default Main;