import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./containers/Main/Main";
import "./App.scss";

const App = () => {
  const [beers, setBeers] = useState();
  const [searchValue, setSearchValue] = useState();
  const [isABVChecked, setIsABVChecked] = useState(false);
  const [isIBUChecked, setIsIBUChecked] = useState(false);
  const [isClassicChecked, setIsClassicChecked] = useState(false);
  const [isAcidityChecked, setIsAcidityChecked] = useState(false);
  const [isReset, setIsReset] = useState(false);

  const getBeer = async (
    searchTerm,
    isABVBoxChecked,
    isIBUBoxChecked,
    isClassicBoxChecked,
    isAcidityBoxChecked,
    isResetClicked
  ) => {
    const url = `https://api.punkapi.com/v2/beers?page=1&per_page=80`;
    const queryParams = [];

    if (searchTerm) {
      queryParams.push(`&beer_name=${searchTerm}`);
    }

    if (isABVBoxChecked) {
      queryParams.push("&abv_gt=6");
    }

    if (isIBUBoxChecked) {
      queryParams.push("&ibu_gt=50");
    }

    if (isClassicBoxChecked) {
      queryParams.push(`&brewed_before=05-2007`);
    }

    if (isResetClicked) {
      while (queryParams.length > 0) {
        queryParams.pop();
      }
    }

    const response = await fetch(url + queryParams.join(""));
    const data = await response.json();
    console.log(url + queryParams.join(""));
    console.log(queryParams);

    // pH value filters is not available in the Punk API
    // i.e manual filters is required
    if (isAcidityBoxChecked) {
      let deepCopyBeerArr = [...data];
      const filteredBeerByAcidity = deepCopyBeerArr.filter((beer) => {
        return beer.ph < 4;
      });
      setBeers(filteredBeerByAcidity);
    } else {
      setBeers(data);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsReset(false);
    const userSearchValue = event.target.elements[0].value;
    setSearchValue(userSearchValue);

    if (!userSearchValue) {
      alert("Please type keywords to search for beers.");
    }
  };

  const handleFilters = (event) => {
    setIsReset(false);
    if (event.target.classList[0].includes("vol")) {
      setIsABVChecked(!isABVChecked);
    }
    if (event.target.classList[0].includes("range")) {
      setIsClassicChecked(!isClassicChecked);
    }

    if (event.target.classList[0].includes("bitterness")) {
      setIsIBUChecked(!isIBUChecked);
    }

    if (event.target.classList[0].includes("acidity")) {
      setIsAcidityChecked(!isAcidityChecked);
    }
  };

  const handleReset = () => {
    setIsReset(true);
    setSearchValue();
  };

  useEffect(() => {
    getBeer(
      searchValue,
      isABVChecked,
      isIBUChecked,
      isClassicChecked,
      isAcidityChecked,
      isReset
    );
  }, [
    searchValue,
    isABVChecked,
    isIBUChecked,
    isClassicChecked,
    isAcidityChecked,
    isReset,
  ]);

  return (
    <>
      <Navbar
        value={searchValue}
        onSubmit={handleSubmit}
        onChange={handleFilters}
        onClick={handleReset}
      />
      <Main beers={beers} />
    </>
  );
};

export default App;
