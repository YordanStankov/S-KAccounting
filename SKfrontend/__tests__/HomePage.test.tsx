import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Home from "@/app/page";

describe("Home page", () => {
  it("renders hero, services and about sections in order", () => {
    const { container } = render(<Home />);
    const headings = Array.from(container.querySelectorAll("h1, h2")).map((h) => h.textContent);
    expect(headings).toEqual([
      "Accounting services",
      "What services can we offer you?",
      "Briefly about S and K Accounting",
    ]);
  });
});
