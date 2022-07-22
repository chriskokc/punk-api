import "./Card.scss";

const Card = ({ beers }) => {
    const BeerJSX = beers.map(beer => {
        // look for the first "." after 50 characters
        let adjustedDescriptionIndex = beer.description.indexOf(".", 50) + 1;
        const adjustedDescription = beer.description.substring(0, adjustedDescriptionIndex);
        console.log(adjustedDescription);

        return (
            <div key={beer.id} className="card">
                <img className="card__image" src={beer.image_url} alt="Beer image" />
                <h2 className="card__title">{beer.name}</h2>
                <h3 className="card__tagline">{beer.tagline}</h3>
                <p className="card__description">{adjustedDescription}</p>
            </div>
        );
    }); 

    return BeerJSX;
}

export default Card;