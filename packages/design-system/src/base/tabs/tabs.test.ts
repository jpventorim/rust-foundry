import { expect } from "@rstest/core";
import { componentTests } from "../../../tests/browser";

componentTests("base-tabs", {
  "moves focus with arrow keys and activates with Enter": async (page) => {
    await page.getByRole("tab", { name: "Notes", exact: true }).focus();
    await page.keyboard.press("ArrowRight");
    await page.keyboard.press("Enter");
    expect(
      await page
        .getByRole("tab", { name: "History", exact: true })
        .getAttribute("aria-selected"),
    ).toBe("true");
    expect(
      await page.getByRole("tabpanel", { name: "History" }).textContent(),
    ).toContain("Nothing has been forgotten");
  },
});
