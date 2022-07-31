import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

it("should display a hamburger menu and brand name", () => {
  render(<Navbar />);

  const hamburgerMenu = screen.getByRole("img");
  const brand = screen.getByText(/ck brewery/i);

  expect(hamburgerMenu).toBeInTheDocument();
  expect(brand).toBeInTheDocument();
});
