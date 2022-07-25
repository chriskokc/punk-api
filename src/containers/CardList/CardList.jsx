import Card from "../../components/Card/Card";
import "./CardList.scss";


const CardList = ({ beersArr }) => {
   const beerJSX = beersArr.map((beerObj) => {
      // look for the first "." after 50 characters
      const adjustedDescriptionIndex = beerObj.description.indexOf(".", 50) + 1;
      const adjustedDescription = beerObj.description.substring(0, adjustedDescriptionIndex);

      return (
         <Card 
            beerID={beerObj.id}
            beerImage={beerObj.image_url}
            beerName={beerObj.name}
            beerTagline={beerObj.tagline}
            beerDescription ={adjustedDescription}
         />
      );
   });

   return (
      <div className="card-list">
        {beerJSX}
      </div>
   );
};

export default CardList;