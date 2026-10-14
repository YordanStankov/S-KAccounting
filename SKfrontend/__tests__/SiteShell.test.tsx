import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SiteShell from "@/app/components/site/SiteShell";

describe("SiteShell", () => {
  it("wraps page content with the top bar, header and footer", () => {
    render(
      <SiteShell>
        <p>{"Page content"}</p>
      </SiteShell>
    );
    expect(screen.getByTestId("top-bar")).toBeTruthy();
    expect(screen.getByRole("banner")).toBeTruthy();
    expect(screen.getByRole("main").textContent).toBe("Page content");
    expect(screen.getByRole("contentinfo")).toBeTruthy();
  });
});
