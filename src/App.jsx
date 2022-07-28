import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./containers/Main/Main";
import "./App.scss";

const App = () => {
  const [beers, setBeers] = useState();
  const [searchValue, setSearchValue] = useState();
  const [isABVChecked, setIsABVChecked] = useState(false);

  const getBeer = async (searchTerm, isABVBoxChecked) => {
    const url = `https://api.punkapi.com/v2/beers?page=1&per_page=80`;
    const queryParams = [];

    if (searchTerm) {
      queryParams.push(`&beer_name=${searchTerm}`);
    }

    if (isABVBoxChecked) {
      queryParams.push(`&abv_gt=6`);
    }

    const response = await fetch(url + queryParams.join(""));
    const data = await response.json();
    setBeers(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userSearchValue = event.target.elements[0].value;
    setSearchValue(userSearchValue);
  };

  const handleFilters = (event) => {
    if (event.target.classList[0].includes("vol")) {
      setIsABVChecked(!isABVChecked);
    }
  };

  useEffect(() => {
    getBeer(searchValue, isABVChecked);
  }, [searchValue, isABVChecked]);

  return (
    <>
      <Navbar
        value={searchValue}
        onSubmit={handleSubmit}
        onChange={handleFilters}
      />
      <Main beers={beers} />
    </>
  );
};

export default App;
