import "./Card.scss";

const Card = ({ beerID , beerImage , beerName , beerTagline, beerDescription }) => {
    return (
        <div className="card" key={beerID}>
            <img className="card__image" src={beerImage} alt="Beer image" />
            <h2 className="card__title">{beerName}</h2>
            <h3 className="card__tagline">{beerTagline}</h3>
            <p className="card__description">{beerDescription}</p>
        </div>
    );
};

export default Card;