import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TopBar from "@/app/components/home/TopBar";

describe("TopBar", () => {
  it("renders phone, email and working hours", () => {
    render(<TopBar />);
    expect(screen.getByText("+359 88 123 4567").closest("a")).toHaveProperty("href", "tel:+359881234567");
    expect(screen.getByText("office@sk-accounting.bg").closest("a")).toHaveProperty("href", "mailto:office@sk-accounting.bg");
    expect(screen.getByText("Mon – Fri: 8:30 – 17:30")).toBeTruthy();
  });
});
