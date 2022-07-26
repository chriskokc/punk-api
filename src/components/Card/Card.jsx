import "./Card.scss";

const Card = ({ beerImage , beerName , beerTagline, beerDescription }) => {
    return (
        <div className="card">
            <img className="card__image" src={beerImage} alt="Beer" />
            <h2 className="card__title">{beerName}</h2>
            <h3 className="card__tagline">{beerTagline}</h3>
            <p className="card__description">{beerDescription}</p>
        </div>
    );
};

export default Card;