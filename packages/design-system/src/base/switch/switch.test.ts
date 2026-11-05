import { expect } from "@rstest/core";
import { componentTests } from "../../../tests/browser";

componentTests("base-switch", {
  "toggles by keyboard": async (page) => {
    const control = page.getByRole("switch", { name: "Enable ambient sound" });
    await control.focus();
    await page.keyboard.press("Space");
    expect(await control.isChecked()).toBe(true);
    await page.keyboard.press("Space");
    expect(await control.isChecked()).toBe(false);
  },
  "label activates the full-size latch": async (page) => {
    const control = page.getByRole("switch", { name: "Enable ambient sound" });
    const bounds = await control.boundingBox();
    expect(bounds?.height).toBeGreaterThanOrEqual(44);
    expect(bounds?.width).toBeGreaterThanOrEqual(44);
    await page.getByText("Enable ambient sound", { exact: true }).click();
    expect(await control.isChecked()).toBe(true);
  },
});
