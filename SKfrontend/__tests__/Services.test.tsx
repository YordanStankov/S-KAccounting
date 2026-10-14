import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Services from "@/app/components/home/Services";

describe("Services", () => {
  it("renders the section title and both service cards", () => {
    render(<Services />);
    expect(screen.getByRole("heading", { level: 2, name: "What services can we offer you?" })).toBeTruthy();
    const cards = screen.getAllByRole("heading", { level: 3 });
    expect(cards.map((c) => c.textContent)).toEqual([
      "Accounting services - firms and persons",
      "Taxes and insurance",
    ]);
  });
});
