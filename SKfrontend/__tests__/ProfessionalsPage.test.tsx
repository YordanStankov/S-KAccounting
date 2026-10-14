import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProfessionalsPage from "@/app/professionals/page";

describe("Professionals page", () => {
  it("renders the banner and team members", () => {
    render(<ProfessionalsPage />);
    expect(screen.getByRole("heading", { level: 1, name: "Our team" })).toBeTruthy();
    expect(screen.getByRole("heading", { level: 3, name: "Svetlana Kostova" })).toBeTruthy();
    expect(screen.getByRole("heading", { level: 3, name: "Krasimir Ivanov" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Contact us" }).getAttribute("href")).toBe("/contact");
  });
});
