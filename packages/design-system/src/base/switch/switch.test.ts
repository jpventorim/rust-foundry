import { expect } from "@rstest/core";
import { componentTests } from "../../../tests/browser";

componentTests("base-switch", {
  "toggles by keyboard": async (page) => {
    const control = page.getByRole("switch");
    await control.focus();
    await page.keyboard.press("Space");
    expect(await control.isChecked()).toBe(true);
  },
});
