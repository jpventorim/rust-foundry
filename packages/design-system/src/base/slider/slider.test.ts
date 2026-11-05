import { expect } from "@rstest/core";
import { componentTests } from "../../../tests/browser";

componentTests("base-slider", {
  "supports minimum and maximum keyboard shortcuts": async (page) => {
    const slider = page.getByRole("slider");
    await slider.focus();
    await page.keyboard.press("End");
    expect(await slider.getAttribute("aria-valuenow")).toBe("100");
    await page.keyboard.press("Home");
    expect(await slider.getAttribute("aria-valuenow")).toBe("0");
  },
});
