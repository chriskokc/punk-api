import { render, screen } from "@testing-library/react";
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
