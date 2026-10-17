import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SiteHeader from "@/app/components/site/SiteHeader";

describe("SiteHeader", () => {
  it("renders the logo and main navigation links", () => {
    render(<SiteHeader />);
    expect(screen.getByText("S&K")).toBeTruthy();
    expect(screen.queryByText("Accounting")).toBeNull();
    expect(screen.getByRole("link", { name: "S and K Accounting home" }).getAttribute("href")).toBe("/");
    const nav = screen.getByRole("navigation", { name: "Main navigation" });
    expect(nav).toBeTruthy();
    expect(screen.getByRole("link", { name: "Home" }).getAttribute("href")).toBe("/");
    expect(screen.getByRole("link", { name: "About us" }).getAttribute("href")).toBe("/about");
    expect(screen.getByRole("link", { name: "Our team" }).getAttribute("href")).toBe("/professionals");
    expect(screen.getByRole("link", { name: "Contacts" }).getAttribute("href")).toBe("/contact");
  });

  it("places Home and About us left of the logo, Our team and Contacts right of it", () => {
    render(<SiteHeader />);
    const order = Array.from(
      screen.getByRole("navigation", { name: "Main navigation" }).querySelectorAll("a"),
    ).map((a) => a.getAttribute("aria-label") ?? a.textContent);
    expect(order).toEqual(["Home", "About us", "S and K Accounting home", "Our team", "Contacts"]);
  });
});
