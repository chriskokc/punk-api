import Card from "../../components/Card/Card";
import "./CardList.scss";

const CardList = ({ beersArr }) => {
  const beerJSX = beersArr.map((beerObj) => {
    return (
      <Card
        key={beerObj.id}
        beerImage={beerObj.image_url}
        beerName={beerObj.name}
        beerTagline={beerObj.tagline}
        beerDescription={beerObj.description}
      />
    );
  });

  return <div className="card-list">{beerJSX}</div>;
};

export default CardList;
