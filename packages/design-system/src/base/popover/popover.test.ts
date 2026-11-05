import { audit, componentTests } from "../../../tests/browser";

componentTests("base-popover", {
  "opens and dismisses with Escape": async (page) => {
    const trigger = page.getByRole("button", {
      name: "Open details",
      exact: true,
    });
    await trigger.click();
    await page.getByText("A useful detail", { exact: true }).waitFor();
    await audit(page);
    await page.keyboard.press("Escape");
    await page
      .getByText("A useful detail", { exact: true })
      .waitFor({ state: "hidden" });
  },
});
