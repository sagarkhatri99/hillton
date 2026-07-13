import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../Footer";

describe("Footer Component", () => {
  test("renders Quick Links section", () => {
    render(<Footer />);
    expect(screen.getByText("Quick Links")).toBeInTheDocument();
  });

  test("renders About Us link", () => {
    render(<Footer />);
    const aboutLink = screen.getByRole("link", { name: /About Us/ });
    expect(aboutLink).toHaveAttribute("href", "/about");
  });

  test("renders Services link", () => {
    render(<Footer />);
    const servicesLink = screen.getByRole("link", { name: /Services/ });
    expect(servicesLink).toHaveAttribute("href", "/services");
  });

  test("renders Conditions link", () => {
    render(<Footer />);
    const conditionsLink = screen.getByRole("link", { name: /Conditions/ });
    expect(conditionsLink).toHaveAttribute("href", "/conditions");
  });

  test("renders Blog link", () => {
    render(<Footer />);
    const blogLink = screen.getByRole("link", { name: /Blog/ });
    expect(blogLink).toHaveAttribute("href", "/blog");
  });

  test("renders Contact link", () => {
    render(<Footer />);
    const contactLink = screen.getByRole("link", { name: /Contact/ });
    expect(contactLink).toHaveAttribute("href", "/contact");
  });

  test("renders footer with correct background color", () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector("footer");
    expect(footer).toHaveClass("bg-primary-hover");
    expect(footer).toHaveClass("text-white");
  });
});
