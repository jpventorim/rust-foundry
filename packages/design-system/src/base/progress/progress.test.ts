import { expect } from "@rstest/core";
import { componentTests } from "../../../tests/browser";

componentTests("base-progress", {
  async "preserves the accessible label, percentage, and Base UI fill width"(
    page,
  ) {
    const progress = page.getByRole("progressbar", {
      name: "Preparing your workspace",
    });
    expect(await progress.getAttribute("aria-valuenow")).toBe("65");
    expect(await progress.getAttribute("aria-valuemax")).toBe("100");
    expect(
      await progress.locator(".rf-progress-value-text").textContent(),
    ).toBe("65%");
    expect(
      await progress.locator(".rf-progress-indicator").evaluate((element) => {
        return (element as HTMLElement).style.width;
      }),
    ).toBe("65%");
  },
  async "keeps empty, complete, and custom ranges distinct"(page) {
    for (const [story, value, max, width] of [
      ["empty", "0", "100", "0%"],
      ["complete", "100", "100", "100%"],
      ["custom-range", "6", "12", "50%"],
    ]) {
      const url = new URL(page.url());
      url.searchParams.set("id", `base-progress--${story}`);
      await page.goto(url.toString());
      const progress = page.getByRole("progressbar");
      await progress.waitFor();
      expect(await progress.getAttribute("aria-valuenow")).toBe(value);
      expect(await progress.getAttribute("aria-valuemax")).toBe(max);
      expect(
        await progress.locator(".rf-progress-indicator").evaluate((element) => {
          return (element as HTMLElement).style.width;
        }),
      ).toBe(width);
      if (story === "complete") {
        expect(
          await progress.locator(".rf-progress-complete").isVisible(),
        ).toBe(true);
      }
    }
  },
  async "shows static indeterminate work in reduced motion and forced colors"(
    page,
  ) {
    const url = new URL(page.url());
    url.searchParams.set("id", "base-progress--indeterminate");
    await page.goto(url.toString());
    const progress = page.getByRole("progressbar");
    await progress.waitFor();
    expect(await progress.getAttribute("aria-valuenow")).toBe(null);
    expect(
      await progress.locator(".rf-progress-value-text").textContent(),
    ).toBe("Working…");
    const indicator = progress.locator(".rf-progress-indicator");
    expect(
      await indicator.evaluate(
        (element) => getComputedStyle(element).animationName,
      ),
    ).toBe("none");
    await page.emulateMedia({ forcedColors: "active" });
    expect(
      await indicator.evaluate(
        (element) => getComputedStyle(element).forcedColorAdjust,
      ),
    ).toBe("none");
    expect(
      await indicator.evaluate(
        (element) => element.getBoundingClientRect().width,
      ),
    ).toBeGreaterThan(0);
  },
});
