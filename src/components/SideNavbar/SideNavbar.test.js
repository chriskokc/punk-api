import { render, screen } from "@testing-library/react";
import SideNavbar from "./SideNavbar";

it("should render all items", () => {
  render(<SideNavbar />);

  const whiteCross = screen.getByAltText("white cross");
  const searchBar = screen.getByPlaceholderText(/Find Beers../i);
  const searchButton = screen.getByRole("button", { name: /search/i });
  const resetButton = screen.getByRole("button", { name: /reset/i });
  const abvLabel = screen.getByText(/high abv/i);
  const ibuLabel = screen.getByText(/high ibu/i);
  const rangeLabel = screen.getByText(/classic range/i);
  const acidicLabel = screen.getByText(/acidic/i);
  expect(whiteCross).toBeInTheDocument();
  expect(searchBar).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
  expect(resetButton).toBeInTheDocument();
  expect(abvLabel).toBeInTheDocument();
  expect(ibuLabel).toBeInTheDocument();
  expect(rangeLabel).toBeInTheDocument();
  expect(acidicLabel).toBeInTheDocument();
});
