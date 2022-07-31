import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

it("should render the Search Button", () => {
  render(<Button label="Search" isPrimary={true} />);

  const button = screen.getByRole("button", { name: /search/i });

  expect(button).toBeInTheDocument();
});

it("should render the Reset Button", () => {
  render(<Button label="Reset" isPrimary={false} />);

  const button = screen.getByRole("button", { name: /reset/i });

  expect(button).toBeInTheDocument();
});

it("should alert users to type search keywords", () => {
  render(<Button label="Search" isPrimary={true} />);

  const searchButton = screen.getByRole("button", { name: /search/i });
  userEvent.click(searchButton);

  const alert = screen.queryAllByText(
    /Please type keywords to search for beers/i
  );
  expect(alert).toBeTruthy();
});
