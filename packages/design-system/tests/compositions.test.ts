import { expect } from "@rstest/core";
import { componentTests } from "./browser";

componentTests(
  "design-system-compositions",
  {
    "keeps integrated error indicators and message associations": async (
      page,
    ) => {
      await page.goto(page.url().replace("--nested-panel", "--validation"));
      for (const control of [
        page.getByRole("textbox", { name: "Name", exact: true }),
        page.getByRole("textbox", { name: "Notes", exact: true }),
        page.getByRole("combobox"),
      ]) {
        expect(await control.getAttribute("aria-invalid")).toBe("true");
        expect(await control.getAttribute("aria-describedby")).toBeTruthy();
        expect(
          await control.evaluate(
            (element) => getComputedStyle(element).borderBottomWidth,
          ),
        ).toBe("2px");
      }
    },
    "integrates fields into their backing and saves the example form": async (
      page,
    ) => {
      const frame = await page
        .locator(".rf-text-field-frame")
        .evaluate((element) => ({
          border: getComputedStyle(element).borderTopWidth,
          background: getComputedStyle(element).backgroundColor,
          shadow: getComputedStyle(element).boxShadow,
        }));
      expect(frame).toEqual({
        border: "0px",
        background: "rgba(0, 0, 0, 0)",
        shadow: "none",
      });
      const sheet = await page
        .locator(".rf-textarea-tablet")
        .evaluate((element) => ({
          border: getComputedStyle(element).borderTopWidth,
          clip: getComputedStyle(element, "::before").display,
        }));
      expect(sheet).toEqual({ border: "0px", clip: "none" });
      await page
        .getByRole("textbox", { name: "Name", exact: true })
        .fill("Example note");
      await page
        .getByRole("textbox", { name: "Notes", exact: true })
        .fill("Notes on a shared writing surface.");
      await page
        .getByRole("button", { name: "Save note", exact: true })
        .click();
      expect(await page.getByRole("status").textContent()).toContain("saved");
    },
    "keeps compact compositions inside narrow screens": async (page) => {
      await page.setViewportSize({ width: 375, height: 900 });
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBe(true);
      await page.getByRole("textbox", { name: "Notes", exact: true }).focus();
      expect(
        await page
          .getByRole("textbox", { name: "Notes", exact: true })
          .evaluate((element) => getComputedStyle(element).outlineStyle),
      ).toBe("solid");
    },
  },
  "nested-panel",
);
