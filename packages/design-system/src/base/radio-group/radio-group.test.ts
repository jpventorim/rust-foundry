import { expect } from "@rstest/core";
import { componentTests } from "../../../tests/browser";

componentTests("base-radiogroup", {
  "uses arrow keys to select a single choice": async (page) => {
    const selected = page.getByRole("radio", { name: "Party", exact: true });
    await selected.focus();
    await page.keyboard.press("ArrowRight");
    expect(
      await page
        .getByRole("radio", { name: "Public", exact: true })
        .isChecked(),
    ).toBe(true);
    expect(await selected.isChecked()).toBe(false);
  },
});
