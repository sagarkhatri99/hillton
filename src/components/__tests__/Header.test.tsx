import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";

describe("Header Component", () => {
  test("renders logo with text", () => {
    render(<Header />);
    expect(screen.getByText("Hillton")).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    render(<Header />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  test("renders Therapies dropdown button", () => {
    render(<Header />);
    const therapiesButtons = screen.getAllByText(/Therapies/);
    expect(therapiesButtons.length).toBeGreaterThan(0);
  });

  test("renders Conditions dropdown button", () => {
    render(<Header />);
    const conditionsButtons = screen.getAllByText(/Conditions/);
    expect(conditionsButtons.length).toBeGreaterThan(0);
  });

  test("logo links to home page", () => {
    render(<Header />);
    const logoLink = screen.getByRole("link", { name: /Hillton/ });
    expect(logoLink).toHaveAttribute("href", "/");
  });

  test("header is sticky positioned", () => {
    const { container } = render(<Header />);
    const header = container.querySelector("header");
    expect(header).toHaveClass("sticky");
    expect(header).toHaveClass("top-0");
    expect(header).toHaveClass("z-50");
  });
});
