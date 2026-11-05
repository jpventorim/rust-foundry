import { expect } from "@rstest/core";
import { componentTests } from "../../../tests/browser";

componentTests("base-radiogroup", {
  "uses arrow keys to select a single choice and skip unavailable choices":
    async (page) => {
      const selected = page.getByRole("radio", { name: "Party", exact: true });
      await selected.focus();
      await page.keyboard.press("ArrowRight");
      const next = page.getByRole("radio", { name: "Public", exact: true });
      expect(await next.isChecked()).toBe(true);
      expect(await selected.isChecked()).toBe(false);
      expect(
        await page
          .getByRole("radio", { name: "Archived (unavailable)", exact: true })
          .isChecked(),
      ).toBe(false);
      await page.keyboard.press("ArrowLeft");
      expect(await selected.isChecked()).toBe(true);
      expect(await next.isChecked()).toBe(false);
    },
  "selects through the label and exposes a named group": async (page) => {
    expect(
      await page.getByRole("radiogroup", { name: "Visibility" }).count(),
    ).toBe(1);
    await page.getByText("Private", { exact: true }).click();
    expect(
      await page
        .getByRole("radio", { name: "Private", exact: true })
        .isChecked(),
    ).toBe(true);
    expect(
      await page.getByRole("radio", { name: "Party", exact: true }).isChecked(),
    ).toBe(false);
    const unavailable = page.getByRole("radio", {
      name: "Archived (unavailable)",
      exact: true,
    });
    expect(await unavailable.isDisabled()).toBe(true);
    await page
      .getByText("Archived (unavailable)", { exact: true })
      .click({ force: true });
    expect(await unavailable.isChecked()).toBe(false);
  },
  "keeps touch targets and focus at narrow widths": async (page) => {
    await page.setViewportSize({ width: 320, height: 640 });
    const selected = page.getByRole("radio", { name: "Party", exact: true });
    const box = await selected.boundingBox();
    expect(box !== null && box.width >= 44 && box.height >= 44).toBe(true);
    await selected.focus();
    await page.keyboard.press("ArrowRight");
    expect(
      await page
        .getByRole("radio", { name: "Public", exact: true })
        .evaluate((element) => element === document.activeElement),
    ).toBe(true);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  },
});
