import { expect } from "@rstest/core";
import { componentTests } from "../../../tests/browser";

componentTests("base-panel", {
  "renders the light writing sheet above the timber backing": async (page) => {
    const surface = await page.locator(".rf-panel").evaluate((element) => {
      const paper = getComputedStyle(element, "::before");
      return {
        content: paper.content,
        paper: paper.backgroundColor,
        backing: getComputedStyle(element).backgroundColor,
        grain: paper.backgroundImage,
      };
    });
    expect(surface.content).not.toBe("none");
    expect(surface.paper).not.toBe(surface.backing);
    expect(surface.grain).toContain("data:image/svg+xml");
  },
});
