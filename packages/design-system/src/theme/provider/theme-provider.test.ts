import { expect } from "@rstest/core";
import { audit, componentTests } from "../../../tests/browser";

componentTests(
  "design-system-themes",
  {
    "changes themes without changing geometry or losing form values": async (
      page,
    ) => {
      await page.goto(page.url().replace("--portals", "--switcher"));
      const notes = page.getByRole("textbox", { name: "Notes", exact: true });
      await notes.fill("Keep this text across theme changes.");
      const before = await notes.boundingBox();
      const paperBefore = await page
        .locator(".rf-panel")
        .evaluate(
          (element) => getComputedStyle(element, "::before").backgroundColor,
        );
      await page
        .getByRole("button", { name: "Use dark theme", exact: true })
        .click();
      expect(
        await page.locator(".rf-theme-switcher").getAttribute("data-theme"),
      ).toBe("dark");
      expect(await notes.inputValue()).toBe(
        "Keep this text across theme changes.",
      );
      const after = await notes.boundingBox();
      expect(after?.width).toBe(before?.width);
      expect(after?.height).toBe(before?.height);
      expect(
        await page
          .locator(".rf-panel")
          .evaluate(
            (element) => getComputedStyle(element, "::before").backgroundColor,
          ),
      ).not.toBe(paperBefore);
    },
    "keeps mixed theme scopes independent and sends the theme through portals":
      async (page) => {
        const light = page.getByRole("region", {
          name: "light theme",
          exact: true,
        });
        const dark = page.getByRole("region", {
          name: "dark theme",
          exact: true,
        });
        const samples = page.locator(".rf-theme-sample");
        expect(await samples.nth(0).getAttribute("data-theme")).toBe("light");
        expect(await samples.nth(1).getAttribute("data-theme")).toBe("dark");
        const lightPaper = await light
          .locator(".rf-panel")
          .evaluate(
            (element) => getComputedStyle(element, "::before").backgroundColor,
          );
        const darkPaper = await dark
          .locator(".rf-panel")
          .evaluate(
            (element) => getComputedStyle(element, "::before").backgroundColor,
          );
        expect(lightPaper).not.toBe(darkPaper);
        for (const [scope, theme] of [
          [light, "light"],
          [dark, "dark"],
        ] as const) {
          await scope
            .getByRole("button", { name: "Open dialog", exact: true })
            .click();
          const dialog = page.getByRole("dialog");
          expect(await dialog.getAttribute("data-theme")).toBe(theme);
          const backdrop = await dialog
            .locator(".rf-dialog-sheet")
            .evaluate((element) => ({
              ink: getComputedStyle(element).color,
              paper: getComputedStyle(element).backgroundColor,
            }));
          expect(backdrop.ink).not.toBe(backdrop.paper);
          await audit(page);
          await page.keyboard.press("Escape");
          await dialog.waitFor({ state: "hidden" });
          await scope
            .getByRole("button", { name: "Open details", exact: true })
            .click();
          const note = page.locator(".rf-popover-positioner");
          expect(await note.getAttribute("data-theme")).toBe(theme);
          await audit(page);
          await page.keyboard.press("Escape");
          await note.waitFor({ state: "hidden" });
          await scope
            .getByRole("button", { name: "Save changes", exact: true })
            .focus();
          const tooltip = page.locator(".rf-tooltip");
          await tooltip.waitFor({ state: "visible" });
          expect(await tooltip.locator("..").getAttribute("data-theme")).toBe(
            theme,
          );
          await page.keyboard.press("Escape");
          await tooltip.waitFor({ state: "hidden" });
        }
      },
  },
  "portals",
);
