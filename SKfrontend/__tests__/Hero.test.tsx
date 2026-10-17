import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Hero from "@/app/components/home/Hero";

describe("Hero", () => {
  it("renders the 'S&K Accounting' heading and description over the office photo", () => {
    const { container } = render(<Hero />);
    expect(screen.getByRole("heading", { level: 1, name: "S&K Accounting" })).toBeTruthy();
    expect(screen.getByText("Your trusted partner for business accounting, taxes and insurance").tagName).toBe("P");
    expect(screen.getByRole("img", { name: "Hand near a laptop on an office desk" })).toBeTruthy();
    const section = container.querySelector("section")!;
    expect(within(section).queryAllByRole("link")).toHaveLength(0);
    expect(within(section).queryAllByRole("button")).toHaveLength(0);
  });
});
