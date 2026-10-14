import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProfessionalsPage from "@/app/professionals/page";

describe("Professionals page", () => {
  it("renders the banner and all sections in order", () => {
    const { container } = render(<ProfessionalsPage />);
    expect(screen.getByRole("heading", { level: 1, name: "Our team" })).toBeTruthy();
    const sections = Array.from(container.querySelectorAll("h2")).map((h) => h.textContent);
    expect(sections).toEqual([
      "The people behind your books",
      "What you can expect",
      "Work with our team",
    ]);
  });

  it("renders each professional with initials and a phone link", () => {
    render(<ProfessionalsPage />);
    expect(screen.getByRole("heading", { level: 3, name: "Daniela Stankova" })).toBeTruthy();
    expect(screen.getByText("DS")).toBeTruthy();
    expect(screen.getByRole("link", { name: "+359 88 821 4363" }).getAttribute("href")).toBe("tel:+359888214363");
    expect(screen.getByRole("heading", { level: 3, name: "Marti" })).toBeTruthy();
    expect(screen.getByText("M")).toBeTruthy();
    expect(screen.getByRole("link", { name: "+359 88 486 8513" }).getAttribute("href")).toBe("tel:+359884868513");
  });

  it("links to the contact page", () => {
    render(<ProfessionalsPage />);
    expect(screen.getByRole("link", { name: "Contact us" }).getAttribute("href")).toBe("/contact");
  });
});
