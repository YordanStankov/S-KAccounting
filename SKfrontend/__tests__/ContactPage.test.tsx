import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ContactPage from "@/app/contact/page";

describe("Contact page", () => {
  it("renders office details with the address", () => {
    render(<ContactPage />);
    expect(screen.getByRole("heading", { level: 1, name: "Contacts" })).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2, name: "Contact details" })).toBeTruthy();
    expect(screen.getByText("Sofia, Geo Milev, Hemus 62 - 64")).toBeTruthy();
    expect(screen.getByText("+359 88 123 4567").closest("a")?.getAttribute("href")).toBe("tel:+359881234567");
  });

  it("renders both professionals", () => {
    render(<ContactPage />);
    expect(screen.getByRole("heading", { level: 3, name: "Svetlana Kostova" })).toBeTruthy();
    expect(screen.getByRole("heading", { level: 3, name: "Krasimir Ivanov" })).toBeTruthy();
  });

  it("renders the map below the contact details", () => {
    const { container } = render(<ContactPage />);
    const map = screen.getByTitle(/Map of S and K Accounting office/);
    expect(map.getAttribute("src")).toContain("Hemus+62-64");
    const office = screen.getByRole("heading", { name: "Contact details" });
    expect(screen.getByRole("heading", { level: 2, name: "Our office" }).compareDocumentPosition(map) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(office.compareDocumentPosition(map) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(container.querySelectorAll("iframe")).toHaveLength(1);
  });
});
