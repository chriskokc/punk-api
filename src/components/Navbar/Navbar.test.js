import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";

it("should display a hamburger menu and brand name", () => {
  render(<Navbar />);

  const hamburgerMenu = screen.getByRole("img");
  const brand = screen.getByText(/ck brewery/i);

  expect(hamburgerMenu).toBeInTheDocument();
  expect(brand).toBeInTheDocument();
});

it("should display SideNavbar on clicking the hamburger menu", () => {
  render(<Navbar />);

  const hamburgerMenu = screen.getByRole("img");
  userEvent.click(hamburgerMenu);

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

it("should hide SideNavbar on clicking the white cross", () => {
  render(<Navbar />);

  const hamburgerMenu = screen.getByRole("img");
  userEvent.click(hamburgerMenu);

  const whiteCross = screen.getByAltText("white cross");
  expect(whiteCross).toBeTruthy();
  userEvent.click(whiteCross);

  const searchBar = screen.queryByPlaceholderText(/Find Beers../i);
  const searchButton = screen.queryByRole("button", { name: /search/i });
  const resetButton = screen.queryByRole("button", { name: /reset/i });
  const abvLabel = screen.queryByText(/high abv/i);
  const ibuLabel = screen.queryByText(/high ibu/i);
  const rangeLabel = screen.queryByText(/classic range/i);
  const acidicLabel = screen.queryByText(/acidic/i);

  expect(searchBar).toBeFalsy();
  expect(searchButton).toBeFalsy();
  expect(resetButton).toBeFalsy();
  expect(abvLabel).toBeFalsy();
  expect(ibuLabel).toBeFalsy();
  expect(rangeLabel).toBeFalsy();
  expect(acidicLabel).toBeFalsy();
});
