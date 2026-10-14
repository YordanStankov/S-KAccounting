import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SiteFooter from "@/app/components/site/SiteFooter";

describe("SiteFooter", () => {
  it("renders the footer columns and copyright", () => {
    render(<SiteFooter />);
    expect(screen.getByRole("contentinfo")).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Services" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Pages" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Contacts" })).toBeTruthy();
    expect(screen.getByText("S and K Accounting. All rights reserved. ©2026")).toBeTruthy();
    expect(screen.getByText("Sofia, Geo Milev, Hemus 62 - 64")).toBeTruthy();
  });
});
