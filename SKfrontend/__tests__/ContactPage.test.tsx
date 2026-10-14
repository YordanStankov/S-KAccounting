import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ContactPage from "@/app/contact/page";

describe("Contact page", () => {
  it("renders the banner and sections in order", () => {
    const { container } = render(<ContactPage />);
    expect(screen.getByRole("heading", { level: 1, name: "Contacts" })).toBeTruthy();
    const sections = Array.from(container.querySelectorAll("h2")).map((h) => h.textContent);
    expect(sections).toEqual(["Contact details", "Working hours", "Our professionals", "Our office"]);
  });

  it("renders call, email and visit tiles with the office address", () => {
    render(<ContactPage />);
    expect(screen.getByRole("link", { name: /Call us/ }).getAttribute("href")).toBe("tel:+359881234567");
    expect(screen.getByRole("link", { name: /Email us/ }).getAttribute("href")).toBe("mailto:office@sk-accounting.bg");
    expect(screen.getByRole("heading", { level: 3, name: "Visit us" })).toBeTruthy();
    expect(screen.getAllByText("Sofia, Geo Milev, Hemus 62 - 64").length).toBeGreaterThanOrEqual(1);
  });

  it("renders working hours", () => {
    render(<ContactPage />);
    expect(screen.getByText("Monday – Friday")).toBeTruthy();
    expect(screen.getByText("8:30 – 17:30")).toBeTruthy();
    expect(screen.getAllByText("Closed")).toHaveLength(2);
  });

  it("renders both professionals with initials and phone links", () => {
    render(<ContactPage />);
    expect(screen.getByRole("heading", { level: 3, name: "Daniela Stankova" })).toBeTruthy();
    expect(screen.getByText("DS")).toBeTruthy();
    expect(screen.getByRole("link", { name: "+359 88 821 4363" }).getAttribute("href")).toBe("tel:+359888214363");
    expect(screen.getByRole("heading", { level: 3, name: "Marti" })).toBeTruthy();
    expect(screen.getByText("M")).toBeTruthy();
    expect(screen.getByRole("link", { name: "+359 88 486 8513" }).getAttribute("href")).toBe("tel:+359884868513");
  });

  it("renders the map below the contact details", () => {
    const { container } = render(<ContactPage />);
    const map = screen.getByTitle(/Map of S and K Accounting office/);
    expect(map.getAttribute("src")).toContain("Hemus+62-64");
    const details = screen.getByRole("heading", { name: "Contact details" });
    expect(details.compareDocumentPosition(map) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(screen.getByRole("link", { name: "Open in Google Maps" })).toBeTruthy();
    expect(container.querySelectorAll("iframe")).toHaveLength(1);
  });
});
