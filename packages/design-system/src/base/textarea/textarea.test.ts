import { expect } from "@rstest/core";
import { componentTests } from "../../../tests/browser";

componentTests("base-textarea", {
  "accepts multiline notes": async (page) => {
    const input = page.getByRole("textbox", { name: "Notes", exact: true });
    await input.fill("First line\nSecond line");
    expect(await input.inputValue()).toBe("First line\nSecond line");
    const descriptionId = await input.getAttribute("aria-describedby");
    expect(descriptionId).toBeTruthy();
    expect(
      await page.locator(`[id="${descriptionId}"]`).textContent(),
    ).toContain("Drag the lower corner");
  },
});
