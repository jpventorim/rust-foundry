import { expect } from "@rstest/core";
import { componentTests } from "../../../tests/browser";

componentTests("base-select", {
  "opens, chooses an option, and remains accessible while open": async (
    page,
  ) => {
    const trigger = page.getByRole("combobox");
    await trigger.focus();
    await page.keyboard.press("ArrowDown");
    await page.getByRole("option", { name: "Elvish", exact: true }).click();
    expect(await trigger.textContent()).toContain("Elvish");
    await trigger.click();
    await page.getByRole("listbox").waitFor();
  },
});
