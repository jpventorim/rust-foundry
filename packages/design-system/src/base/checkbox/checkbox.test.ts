import { expect } from "@rstest/core";
import { componentTests } from "../../../tests/browser";

componentTests("base-checkbox", {
  "toggles by keyboard": async (page) => {
    const checkbox = page.getByRole("checkbox");
    await checkbox.focus();
    await page.keyboard.press("Space");
    expect(await checkbox.isChecked()).toBe(true);
    await page.keyboard.press("Space");
    expect(await checkbox.isChecked()).toBe(false);
  },
});
