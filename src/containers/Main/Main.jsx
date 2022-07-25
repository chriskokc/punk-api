import { useState } from "react";
import "./Main.scss";
import Button from "../../components/Button/Button";
import CardList from "../CardList/CardList";

const Main = () => {
    const BEER_ENDPOINT = "https://api.punkapi.com/v2/beers";
    const [beers, setBeers] = useState([]);
  
    const getBeer = async () => {
        const response = await fetch(BEER_ENDPOINT);
        const data = await response.json();
        setBeers(data);
    };

    return (
        <div className="main">
            <h1 className="main__title">Find you favourite beers</h1>
            <Button label="Get Beers!" onClick={getBeer}/>
            {beers && <CardList beersArr={beers}/>}
        </div>
    );
};

export default Main;