import { render, screen } from "@testing-library/react";
import Card from "./Card";
import beers from "../../data/beers";

const beerImage = beers[0].image_url;
const beerName = beers[0].name;
const beerTagline = beers[0].tagline;
const beerDescription = beers[0].description;

it("should render all content", () => {
  render(
    <Card
      beerImage={beerImage}
      beerName={beerName}
      beerTagline={beerTagline}
      beerDescription={beerDescription}
    />
  );

  const exampleBeerImage = screen.getByAltText("Beer");
  const exampleBeerName = screen.getByText(/Buzz/i);
  const exampleBeerTagline = screen.getByText(/A Real Bitter Experience/i);
  const exampleBeerDescription = screen.getByText(
    /A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once./i
  );

  expect(exampleBeerImage).toBeInTheDocument();
  expect(exampleBeerName).toBeInTheDocument();
  expect(exampleBeerTagline).toBeInTheDocument();
  expect(exampleBeerDescription).toBeInTheDocument();
});
