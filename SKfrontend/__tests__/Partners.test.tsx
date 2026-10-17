import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Partners from "@/app/components/home/Partners";

describe("Partners", () => {
  it("renders the heading and the four partner names", () => {
    render(<Partners />);
    expect(screen.getByRole("heading", { level: 2, name: "Trusted by long-standing partners" })).toBeTruthy();
    const items = within(screen.getByRole("list")).getAllByRole("listitem");
    expect(items.map((i) => i.textContent)).toEqual(["Megatron", "Defense", "Isha Asha", "Alin"]);
  });
});
