import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ClientTypes from "@/app/components/home/ClientTypes";

describe("ClientTypes", () => {
  it("renders the heading and three client type cards", () => {
    render(<ClientTypes />);
    expect(screen.getByRole("heading", { level: 2, name: "Who we work with" })).toBeTruthy();
    expect(screen.getAllByRole("heading", { level: 3 }).map((h) => h.textContent)).toEqual([
      "Start-ups",
      "Established companies",
      "Individual clients",
    ]);
  });
});
