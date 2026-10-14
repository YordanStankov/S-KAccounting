import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutPage from "@/app/about/page";

describe("About page", () => {
  it("renders the banner, intro and four values", () => {
    render(<AboutPage />);
    expect(screen.getByRole("heading", { level: 1, name: "About us" })).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2, name: "Who we are" })).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2, name: "Our values" })).toBeTruthy();
    const values = screen.getAllByRole("heading", { level: 3 }).map((h) => h.textContent);
    expect(values).toEqual(["Experience", "Reliability", "Personalized approach", "Transparency"]);
  });
});
