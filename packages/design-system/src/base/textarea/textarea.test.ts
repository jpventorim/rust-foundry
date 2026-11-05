import { expect } from "@rstest/core";
import { componentTests } from "../../../tests/browser";

componentTests("base-textarea", {
  "accepts multiline notes": async (page) => {
    const input = page.getByRole("textbox", { name: "Notes", exact: true });
    await input.fill("First line\nSecond line");
    expect(await input.inputValue()).toContain("Second line");
  },
});
