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
  "keeps the carriage usable with keys and narrow layouts": async (page) => {
    await page.setViewportSize({ width: 320, height: 640 });
    const slider = page.getByRole("slider");
    await slider.focus();
    await page.keyboard.press("Home");
    await page.keyboard.press("ArrowRight");
    expect(await slider.getAttribute("aria-valuenow")).toBe("1");
    await page.keyboard.press("End");
    const carriage = await page.locator(".rf-slider-thumb").boundingBox();
    expect(carriage?.width).toBeGreaterThanOrEqual(44);
    expect(carriage?.height).toBeGreaterThanOrEqual(44);
    expect(carriage?.x).toBeGreaterThanOrEqual(0);
    expect((carriage?.x ?? 0) + (carriage?.width ?? 0)).toBeLessThanOrEqual(
      320,
    );
    expect(
      await page
        .locator(".rf-slider-thumb")
        .evaluate((thumb) => getComputedStyle(thumb, "::before").outlineStyle),
    ).toBe("solid");
  },
});
