import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./containers/Main/Main";
import "./App.scss";

const App = () => {
  const url = "https://api.punkapi.com/v2/beers";
  const [beers, setBeers] = useState();
  const [showSideNav, setShowSideNav] = useState(false);
  const [searchValue, setSearchValue] = useState();

  const getBeer = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setBeers(data);
  };

  const toggleSideNav = () => {
      return setShowSideNav(!showSideNav);
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      const userSearchValue = event.target.elements[0].value;

      const beersNameArr = beers.map((beer) => {
        return beer.name;
      });

      if (!userSearchValue || !beersNameArr.includes(userSearchValue)) {
        console.log("Beer not found!");
      } else {
        console.log(userSearchValue);
      }
      
  };

  const handleFilters = (event) => {
      console.log(event.target.value);
  }

  useEffect(()=>{
      getBeer();
  }, []);

  return (
    <>
      <Navbar showSideNav={showSideNav} toggleSideNav={toggleSideNav} value={searchValue} onSubmit={handleSubmit} onChange={handleFilters}/>
      <Main beers={beers}/>
    </>
  );
};

export default App;
