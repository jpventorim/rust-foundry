import { expect } from "@rstest/core";
import { componentTests } from "../../../tests/browser";

componentTests("base-dialog", {
  "traps focus and returns it on Escape": async (page) => {
    const trigger = page.getByRole("button", {
      name: "Open dialog",
      exact: true,
    });
    await trigger.click();
    const dialog = page.getByRole("dialog");
    await dialog.waitFor();
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press("Tab");
      await expect
        .poll(() =>
          dialog.evaluate((el) => el.contains(document.activeElement)),
        )
        .toBe(true);
    }
    await page.keyboard.press("Escape");
    await dialog.waitFor({ state: "hidden" });
    expect(await trigger.evaluate((el) => el === document.activeElement)).toBe(
      true,
    );
  },
  "is accessible while open": async (page) => {
    await page
      .getByRole("button", { name: "Open dialog", exact: true })
      .click();
    await page.getByRole("dialog").waitFor();
    expect(
      await page.getByRole("dialog").getAttribute("aria-labelledby"),
    ).toBeTruthy();
    expect(
      await page.getByRole("dialog").getAttribute("aria-describedby"),
    ).toBeTruthy();
  },
  "close clasp restores focus to the trigger": async (page) => {
    const trigger = page.getByRole("button", {
      name: "Open dialog",
      exact: true,
    });
    await trigger.click();
    const close = page.getByRole("button", {
      name: "Close dialog",
      exact: true,
    });
    const bounds = await close.boundingBox();
    expect(bounds?.width).toBeGreaterThanOrEqual(44);
    expect(bounds?.height).toBeGreaterThanOrEqual(44);
    await close.click();
    await page.getByRole("dialog").waitFor({ state: "hidden" });
    expect(await trigger.evaluate((el) => el === document.activeElement)).toBe(
      true,
    );
  },
});
