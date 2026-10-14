import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import AboutPage from "@/app/about/page";

describe("About page", () => {
  it("renders the banner and all sections in order", () => {
    const { container } = render(<AboutPage />);
    expect(screen.getByRole("heading", { level: 1, name: "About us" })).toBeTruthy();
    const sections = Array.from(container.querySelectorAll("h2")).map((h) => h.textContent);
    expect(sections).toEqual([
      "Accounting you can rely on, year after year",
      "Our values",
      "How we work",
      "Ready to hand over the paperwork?",
    ]);
  });

  it("renders the intro photo and the stats band", () => {
    render(<AboutPage />);
    expect(screen.getByRole("img", { name: "Desk with a calculator, binders, notebook and glasses" })).toBeTruthy();
    const stats = screen.getByRole("region", { name: "S and K Accounting in numbers" });
    expect(within(stats).getAllByRole("listitem")).toHaveLength(4);
  });

  it("renders four values, three steps and a contact link", () => {
    render(<AboutPage />);
    for (const name of ["Experience", "Reliability", "Personalized approach", "Transparency"]) {
      expect(screen.getByRole("heading", { level: 3, name })).toBeTruthy();
    }
    for (const name of ["Get to know you", "Set up your books", "Stay in touch"]) {
      expect(screen.getByRole("heading", { level: 3, name })).toBeTruthy();
    }
    expect(screen.getByRole("link", { name: "Contact us" }).getAttribute("href")).toBe("/contact");
  });
});
