import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home page", () => {
  it("renders header, hero, services, about and footer in order", () => {
    const { container } = render(<Home />);
    expect(screen.getByRole("banner")).toBeTruthy();
    expect(screen.getByRole("main")).toBeTruthy();
    expect(screen.getByRole("contentinfo")).toBeTruthy();
    const headings = Array.from(container.querySelectorAll("main h1, main h2")).map((h) => h.textContent);
    expect(headings).toEqual([
      "Accounting services",
      "What services can we offer you?",
      "Briefly about S and K Accounting",
    ]);
  });
});
