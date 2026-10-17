import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "@/app/components/home/About";

describe("About", () => {
  it("renders the heading, text and contact link", () => {
    render(<About />);
    expect(screen.getByRole("heading", { level: 2, name: "Briefly about S and K Accounting" })).toBeTruthy();
    expect(screen.getByText(/For 25 years we have served/)).toBeTruthy();
    expect(screen.getByRole("link", { name: "Contact us" }).getAttribute("href")).toBe("/contact");
  });

  it("uses the green section theme", () => {
    const { container } = render(<About />);
    expect(container.querySelector("section")!.classList.contains("theme-green")).toBe(true);
  });
});
