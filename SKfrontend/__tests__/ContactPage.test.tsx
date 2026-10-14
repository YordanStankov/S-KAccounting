import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ContactPage from "@/app/contact/page";

describe("Contact page", () => {
  it("renders without crashing", () => {
    render(<ContactPage />);
    expect(screen.getByRole("heading", { level: 1 })).toBeTruthy();
  });
});
