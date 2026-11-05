import { expect } from "@rstest/core";
import { componentTests } from "../../../tests/browser";

componentTests("base-tooltip", {
  "provides help on keyboard focus": async (page) => {
    await page.keyboard.press("Tab");
    await page
      .getByRole("button", { name: "Save changes", exact: true })
      .focus();
    await page.locator(".rf-tooltip").waitFor({ state: "visible" });
    expect(await page.locator(".rf-tooltip").textContent()).toContain(
      "Save your current changes",
    );
  },
});
