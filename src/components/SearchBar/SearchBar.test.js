import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";

it("should display search keyword input", () => {
  render(<SearchBar />);

  const searchField = screen.getByPlaceholderText(/Find Beers../i);
  userEvent.type(searchField, "IPA");

  const searchInput = screen.getByDisplayValue("IPA");
  expect(searchInput).toBeTruthy();
});
