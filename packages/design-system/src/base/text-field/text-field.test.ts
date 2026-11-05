import { expect } from "@rstest/core";
import { componentTests } from "../../../tests/browser";

componentTests("base-textfield", {
  "accepts text and associates its help": async (page) => {
    const input = page.getByRole("textbox", { name: "Character name" });
    await input.fill("Mira Vale");
    expect(await input.inputValue()).toBe("Mira Vale");
    const describedBy = await input.getAttribute("aria-describedby");
    expect(describedBy).toBeTruthy();
    expect(await page.locator(`[id="${describedBy}"]`).textContent()).toBe(
      "The name shown to your party.",
    );
  },
  "label focuses the input and keeps a practical writing target": async (
    page,
  ) => {
    const input = page.getByRole("textbox", { name: "Character name" });
    await page.locator("label", { hasText: "Character name" }).click();
    expect(
      await input.evaluate((element) => element === document.activeElement),
    ).toBe(true);
    const box = await input.boundingBox();
    expect(box?.height).toBeGreaterThanOrEqual(44);
    await page.setViewportSize({ width: 320, height: 640 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  },
});
