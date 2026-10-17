import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Home from "@/app/page";

describe("Home page", () => {
  it("renders all home sections in order", () => {
    const { container } = render(<Home />);
    const headings = Array.from(container.querySelectorAll("h1, h2")).map((h) => h.textContent);
    expect(headings).toEqual([
      "S&K Accounting",
      "What services can we offer you?",
      "Trusted by long-standing partners",
      "Who we work with",
      "Briefly about S and K Accounting",
    ]);
  });

  it("keeps the green theme on the about section only", () => {
    const { container } = render(<Home />);
    const themed = container.querySelectorAll(".theme-green");
    expect(themed).toHaveLength(1);
    expect(themed[0].getAttribute("aria-labelledby")).toBe("about-title");
  });
});
