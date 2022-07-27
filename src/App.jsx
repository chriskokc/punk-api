import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./containers/Main/Main";
import "./App.scss";

const App = () => {
  const url = "https://api.punkapi.com/v2/beers";
  const [beers, setBeers] = useState();

  const getBeer = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setBeers(data);
  };

  useEffect(()=>{
      getBeer();
  }, []);

  return (
    <>
      <Navbar />
      <Main beers={beers}/>
    </>
  );
};

export default App;
