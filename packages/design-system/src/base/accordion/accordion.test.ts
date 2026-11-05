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
  },
});
