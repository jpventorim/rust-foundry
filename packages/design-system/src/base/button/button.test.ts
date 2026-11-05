import { expect } from "@rstest/core";
import { componentTests } from "../../../tests/browser";

componentTests("base-button", {
  "has keyboard focus and activates with Enter": async (page) => {
    const button = page.getByRole("button", { name: "Begin adventure" });
    await button.focus();
    expect(await button.evaluate((el) => el === document.activeElement)).toBe(
      true,
    );
    await page.keyboard.press("Enter");
  },
});
