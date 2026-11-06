import { mkdir } from "node:fs/promises";
import { expect } from "@rstest/core";
import { componentTests } from "./browser";

componentTests("design-system-all-components", {
  "keeps controls operable and focus visible in forced colors": async (
    page,
  ) => {
    await page.emulateMedia({ forcedColors: "active" });
    const button = page.getByRole("button", {
      name: "Save note",
      exact: true,
    });
    await button.focus();
    expect(
      await button.evaluate(
        (element) => getComputedStyle(element).outlineStyle,
      ),
    ).toBe("solid");
    const latch = page.getByRole("switch", { name: "Enable ambient sound" });
    await latch.focus();
    await page.keyboard.press("Space");
    expect(await latch.isChecked()).toBe(false);
    await mkdir("test-results", { recursive: true });
    const theme = await page
      .locator(".rf-theme[data-theme]")
      .first()
      .getAttribute("data-theme");
    await page.screenshot({
      path: `test-results/showcase-${theme}-forced-colors.png`,
      fullPage: true,
    });
  },
  "fits a narrow viewport and respects reduced motion": async (page) => {
    await mkdir("test-results", { recursive: true });
    const theme = await page
      .locator(".rf-theme[data-theme]")
      .first()
      .getAttribute("data-theme");
    await page.screenshot({
      path: `test-results/showcase-${theme}-desktop.png`,
      fullPage: true,
    });
    await page.setViewportSize({ width: 375, height: 900 });
    await page.screenshot({
      path: `test-results/showcase-${theme}-mobile.png`,
      fullPage: true,
    });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    const duration = await page
      .getByRole("button", { name: "Save note" })
      .evaluate((element) => getComputedStyle(element).transitionDuration);
    expect(duration).toBe("0s");
  },
});
