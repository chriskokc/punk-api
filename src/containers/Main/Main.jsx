import CardList from "../CardList/CardList";

const Main = ({ beers }) => {
    return beers && <CardList beersArr={beers}/>;
};

export default Main;