import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SiteHeader from "@/app/components/site/SiteHeader";

describe("SiteHeader", () => {
  it("renders the logo and main navigation links", () => {
    render(<SiteHeader />);
    expect(screen.getByText("S&K")).toBeTruthy();
    const nav = screen.getByRole("navigation", { name: "Main navigation" });
    expect(nav).toBeTruthy();
    expect(screen.getByRole("link", { name: "Home" }).getAttribute("href")).toBe("/");
    expect(screen.getByRole("link", { name: "About us" }).getAttribute("href")).toBe("/about");
    expect(screen.getByRole("link", { name: "Our team" }).getAttribute("href")).toBe("/professionals");
    expect(screen.getByRole("link", { name: "Contacts" }).getAttribute("href")).toBe("/contact");
  });
});
