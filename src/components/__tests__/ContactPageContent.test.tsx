import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ContactPageContent from "../ContactPageContent";

// Mock fetch
global.fetch = jest.fn();

// Mock alert
const mockAlert = jest.fn();
window.alert = mockAlert;

describe("ContactPageContent Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders consultation form structure", () => {
    render(<ContactPageContent />);
    expect(screen.getByText(/Consultation Request/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Let's Talk About Your Health Goals/i),
    ).toBeInTheDocument();
  });

  test("renders form title", () => {
    render(<ContactPageContent />);
    expect(screen.getByText(/Consultation Request/i)).toBeInTheDocument();
  });

  test("allows entering text in name field", async () => {
    render(<ContactPageContent />);
    const nameInput = document.querySelector(
      'input[name="name"]',
    ) as HTMLInputElement;

    if (nameInput) {
      await userEvent.type(nameInput, "John Doe");
      expect(nameInput).toHaveValue("John Doe");
    }
  });

  test("allows entering email", async () => {
    render(<ContactPageContent />);
    const emailInput = document.querySelector(
      'input[name="email"]',
    ) as HTMLInputElement;

    if (emailInput) {
      await userEvent.type(emailInput, "john@example.com");
      expect(emailInput).toHaveValue("john@example.com");
    }
  });

  test("allows entering phone number", async () => {
    render(<ContactPageContent />);
    const phoneInput = document.querySelector(
      'input[name="phone"]',
    ) as HTMLInputElement;

    if (phoneInput) {
      await userEvent.type(phoneInput, "9876543210");
      expect(phoneInput).toHaveValue("9876543210");
    }
  });

  test("allows entering age", async () => {
    render(<ContactPageContent />);
    const ageInput = document.querySelector(
      'input[name="age"]',
    ) as HTMLInputElement;

    if (ageInput) {
      await userEvent.type(ageInput, "35");
      expect(ageInput).toHaveValue("35");
    }
  });

  test("successfully submits form with valid data", async () => {
    const mockResponse = { success: true, message: "Email sent successfully." };
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    render(<ContactPageContent />);

    const nameInput = document.querySelector(
      'input[name="name"]',
    ) as HTMLInputElement;
    const emailInput = document.querySelector(
      'input[name="email"]',
    ) as HTMLInputElement;
    const phoneInput = document.querySelector(
      'input[name="phone"]',
    ) as HTMLInputElement;

    if (nameInput && emailInput && phoneInput) {
      await userEvent.type(nameInput, "John Doe");
      await userEvent.type(emailInput, "john@example.com");
      await userEvent.type(phoneInput, "9876543210");

      const submitButton = screen.getByRole("button", { name: /Submit|Send/i });
      await userEvent.click(submitButton);

      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith(
          "/api/contact",
          expect.any(Object),
        );
      });
    }
  });

  test("shows success message after form submission", async () => {
    const mockResponse = { success: true, message: "Email sent successfully." };
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    render(<ContactPageContent />);

    const nameInput = document.querySelector(
      'input[name="name"]',
    ) as HTMLInputElement;
    const emailInput = document.querySelector(
      'input[name="email"]',
    ) as HTMLInputElement;
    const phoneInput = document.querySelector(
      'input[name="phone"]',
    ) as HTMLInputElement;

    if (nameInput && emailInput && phoneInput) {
      await userEvent.type(nameInput, "John Doe");
      await userEvent.type(emailInput, "john@example.com");
      await userEvent.type(phoneInput, "9876543210");

      const submitButton = screen.getByRole("button", { name: /Submit|Send/i });
      await userEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/Thank You/i)).toBeInTheDocument();
      });
    }
  });

  test("displays error alert on failed submission", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ success: false }),
    });

    render(<ContactPageContent />);

    const nameInput = document.querySelector(
      'input[name="name"]',
    ) as HTMLInputElement;
    const emailInput = document.querySelector(
      'input[name="email"]',
    ) as HTMLInputElement;
    const phoneInput = document.querySelector(
      'input[name="phone"]',
    ) as HTMLInputElement;

    if (nameInput && emailInput && phoneInput) {
      await userEvent.type(nameInput, "John Doe");
      await userEvent.type(emailInput, "john@example.com");
      await userEvent.type(phoneInput, "9876543210");

      const submitButton = screen.getByRole("button", { name: /Submit|Send/i });
      await userEvent.click(submitButton);

      await waitFor(() => {
        expect(mockAlert).toHaveBeenCalledWith(
          expect.stringContaining("Something went wrong"),
        );
      });
    }
  });

  test("renders hero section with title", () => {
    render(<ContactPageContent />);
    expect(
      screen.getByText(/Let's Talk About Your Health Goals/i),
    ).toBeInTheDocument();
  });
});
