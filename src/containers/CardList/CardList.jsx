import beerArr from "../../data/beers";
import Card from "../../components/Card/Card";
import "./CardList.scss";

const CardList = () => {
   return (
      <div className="card-list">
         <Card beers={beerArr} />
      </div>
   );
};

export default CardList;