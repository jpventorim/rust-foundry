import { expect } from "@rstest/core";
import { audit, componentTests } from "../../../tests/browser";

componentTests("base-popover", {
  "opens and dismisses with Escape": async (page) => {
    const trigger = page.getByRole("button", {
      name: "Open details",
      exact: true,
    });
    await trigger.click();
    await page.getByText("A useful detail", { exact: true }).waitFor();
    await audit(page);
    await page.keyboard.press("Escape");
    await page
      .getByText("A useful detail", { exact: true })
      .waitFor({ state: "hidden" });
    await expect
      .poll(() => trigger.evaluate((el) => el === document.activeElement))
      .toBe(true);
  },
  "opens from the keyboard and closes with a practical target on mobile":
    async (page) => {
      await page.setViewportSize({ width: 320, height: 480 });
      const trigger = page.getByRole("button", {
        name: "Open details",
        exact: true,
      });
      await trigger.focus();
      await page.keyboard.press("Enter");
      const popup = page.locator(".rf-popover");
      await popup.waitFor();
      const box = await popup.boundingBox();
      expect(box).not.toBeNull();
      if (!box) throw new Error("Popover is not visible");
      expect(box.x).toBeGreaterThanOrEqual(0);
      expect(box.x + box.width).toBeLessThanOrEqual(320);
      expect(box.y + box.height).toBeLessThanOrEqual(480);
      const close = page.getByRole("button", { name: "Close popover" });
      const target = await close.boundingBox();
      expect(target?.width).toBeGreaterThanOrEqual(44);
      expect(target?.height).toBeGreaterThanOrEqual(44);
      await audit(page);
      await close.focus();
      await page.keyboard.press("Enter");
      await popup.waitFor({ state: "hidden" });
      await expect
        .poll(() => trigger.evaluate((el) => el === document.activeElement))
        .toBe(true);
    },
  "keeps a long note scrollable in a short viewport": async (page) => {
    await page.setViewportSize({ width: 320, height: 480 });
    await page.goto(
      page.url().replace("base-popover--default", "base-popover--long-note"),
    );
    const popup = page.locator(".rf-popover");
    await popup.waitFor();
    const sheet = page.locator(".rf-popover-sheet");
    expect(
      await sheet.evaluate((el) => el.scrollHeight > el.clientHeight),
    ).toBe(true);
    const box = await popup.boundingBox();
    expect(box).not.toBeNull();
    if (!box) throw new Error("Long note is not visible");
    expect(box.y).toBeGreaterThanOrEqual(0);
    expect(box.y + box.height).toBeLessThanOrEqual(480);
    await page.getByRole("button", { name: "Close popover" }).focus();
    await page.keyboard.press("Escape");
    await popup.waitFor({ state: "hidden" });
  },
});
