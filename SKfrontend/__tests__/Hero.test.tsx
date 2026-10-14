import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Hero from "@/app/components/home/Hero";

describe("Hero", () => {
  it("renders only the 'Accounting services' heading and no buttons", () => {
    const { container } = render(<Hero />);
    expect(screen.getByRole("heading", { level: 1, name: "Accounting services" })).toBeTruthy();
    const section = container.querySelector("section")!;
    expect(within(section).queryAllByRole("link")).toHaveLength(0);
    expect(within(section).queryAllByRole("button")).toHaveLength(0);
  });
});
