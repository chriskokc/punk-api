import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./containers/Main/Main";
import "./App.scss";

const App = () => {
  const [beers, setBeers] = useState();
  const [searchValue, setSearchValue] = useState();

  const getBeer = async (searchTerm) => {

    let url = `https://api.punkapi.com/v2/beers?page=1&per_page=80`;
    
    if (searchTerm) {
      url += `&beer_name=${searchTerm}`;
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
      console.log(event.target.value);
  }

  useEffect(() => {
    getBeer(searchValue);
  }, [searchValue]);

  return (
    <>
      <Navbar value={searchValue} onSubmit={handleSubmit} onChange={handleFilters}/>
      <Main beers={beers}/>
    </>
  );
};

export default App;
