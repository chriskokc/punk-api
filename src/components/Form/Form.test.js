import { render, screen } from "@testing-library/react";
import Form from "./Form";

it("should render all components in the Form", () => {
  render(<Form />);

  const searchBar = screen.getByPlaceholderText(/Find Beers../);
  const resetButton = screen.getByRole("button", { name: /reset/i });
  const searchButton = screen.getByRole("button", { name: /search/i });
  const abvLabel = screen.getByText(/high ABV/i);
  const ibuLabel = screen.getByText(/high IBU/i);
  const rangeLabel = screen.getByText(/classic range/i);
  const acidicLabel = screen.getByText(/acidic/i);

  const checkboxes = screen.getAllByRole("checkbox");

  expect(searchBar).toBeInTheDocument();
  expect(resetButton).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
  expect(abvLabel).toBeInTheDocument();
  expect(ibuLabel).toBeInTheDocument();
  expect(rangeLabel).toBeInTheDocument();
  expect(acidicLabel).toBeInTheDocument();

  checkboxes.forEach((checkbox) => {
    expect(checkbox).toBeInTheDocument();
  });
});
