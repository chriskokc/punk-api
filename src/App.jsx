import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./containers/Main/Main";
import "./App.scss";

const App = () => {
  const [beers, setBeers] = useState();
  const [searchValue, setSearchValue] = useState();
  const [ABV, setABV] = useState(false);

  const getBeer = async (searchTerm, abv) => {

    let url = `https://api.punkapi.com/v2/beers?page=1&per_page=80`;

    if (searchTerm) {
      url += `&beer_name=${searchTerm}`;
    }

    if (ABV) {
      url += `abv_gt=${abv}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    setBeers(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userSearchValue = event.target.elements[0].value;
    setSearchValue(userSearchValue);
  };

  const handleFilters = (event) => {
    console.log(event.target);
  }

  useEffect(() => {
    getBeer(searchValue, ABV);
  }, [searchValue, ABV]);

  return (
    <>
        <Navbar value={searchValue} onSubmit={handleSubmit} onChange={handleFilters}/>
        <Main beers={beers}/>
    </>
  );
};

export default App;
