import { expect } from "@rstest/core";
import { componentTests } from "../../../tests/browser";

componentTests("base-textfield", {
  "accepts text and associates its help": async (page) => {
    const input = page.getByRole("textbox", { name: "Character name" });
    await input.fill("Mira Vale");
    expect(await input.inputValue()).toBe("Mira Vale");
    expect(await input.getAttribute("aria-describedby")).toBeTruthy();
  },
});
