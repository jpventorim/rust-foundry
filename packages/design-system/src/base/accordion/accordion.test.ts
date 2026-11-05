import { expect } from "@rstest/core";
import { componentTests } from "../../../tests/browser";

componentTests("base-accordion", {
  "expands with a keyboard": async (page) => {
    const trigger = page.getByRole("button", { name: "Movement", exact: true });
    await trigger.focus();
    await page.keyboard.press("Enter");
    expect(await trigger.getAttribute("aria-expanded")).toBe("true");
    expect(
      await page.getByText("Move up to your speed on your turn.").isVisible(),
    ).toBe(true);
    await page.keyboard.press("Space");
    expect(await trigger.getAttribute("aria-expanded")).toBe("false");
  },
  "keeps heading semantics and standard tab navigation": async (page) => {
    expect(
      await page.getByRole("heading", { name: "Movement", level: 2 }).count(),
    ).toBe(1);
    const movement = page.getByRole("button", {
      name: "Movement",
      exact: true,
    });
    const actions = page.getByRole("button", { name: "Actions", exact: true });
    await movement.focus();
    await page.keyboard.press("Tab");
    await expect
      .poll(() =>
        actions.evaluate((element) => element === document.activeElement),
      )
      .toBe(true);
  },
});
