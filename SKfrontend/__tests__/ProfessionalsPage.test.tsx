import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProfessionalsPage from "@/app/professionals/page";

describe("Professionals page", () => {
  it("renders without crashing", () => {
    render(<ProfessionalsPage />);
    expect(screen.getByText("Professionals")).toBeTruthy();
  });
});
