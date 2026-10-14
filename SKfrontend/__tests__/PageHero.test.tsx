import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PageHero from "@/app/components/site/PageHero";

describe("PageHero", () => {
  it("renders the given title and description", () => {
    render(<PageHero title="Test title" description="Test description" />);
    expect(screen.getByRole("heading", { level: 1, name: "Test title" })).toBeTruthy();
    expect(screen.getByText("Test description")).toBeTruthy();
  });
});
