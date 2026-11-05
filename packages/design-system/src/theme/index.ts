import type { defineGlobalStyles } from "@pandacss/dev";
import { accordionStyles } from "./../base/accordion/styles";
import { alertStyles } from "./../base/alert/styles";
import { avatarStyles } from "./../base/avatar/styles";
import { badgeStyles } from "./../base/badge/styles";
import { buttonStyles } from "./../base/button/styles";
import { checkboxStyles } from "./../base/checkbox/styles";
import { dialogStyles } from "./../base/dialog/styles";
import { panelStyles } from "./../base/panel/styles";
import { popoverStyles } from "./../base/popover/styles";
import { progressStyles } from "./../base/progress/styles";
import { radioGroupStyles } from "./../base/radio-group/styles";
import { selectStyles } from "./../base/select/styles";
import { separatorStyles } from "./../base/separator/styles";
import { sliderStyles } from "./../base/slider/styles";
import { switchStyles } from "./../base/switch/styles";
import { tabsStyles } from "./../base/tabs/styles";
import { textFieldStyles } from "./../base/text-field/styles";
import { textareaStyles } from "./../base/textarea/styles";
import { tooltipStyles } from "./../base/tooltip/styles";
import { foundationStyles } from "./foundation";

function mergeStyles(...sources: Record<string, unknown>[]) {
  const result: Record<string, unknown> = {};
  for (const source of sources)
    for (const [key, value] of Object.entries(source)) {
      result[key] =
        value && typeof value === "object" && !Array.isArray(value)
          ? mergeStyles(
              (result[key] ?? {}) as Record<string, unknown>,
              value as Record<string, unknown>,
            )
          : value;
    }
  return result;
}

export const globalCss = mergeStyles(
  foundationStyles,
  buttonStyles,
  badgeStyles,
  panelStyles,
  separatorStyles,
  avatarStyles,
  alertStyles,
  textFieldStyles,
  textareaStyles,
  checkboxStyles,
  radioGroupStyles,
  switchStyles,
  selectStyles,
  sliderStyles,
  tabsStyles,
  accordionStyles,
  dialogStyles,
  popoverStyles,
  tooltipStyles,
  progressStyles,
) as Parameters<typeof defineGlobalStyles>[0];
export const keyframes = {
  "rf-stamp": {
    from: {
      transform: "scale(0.6)",
      opacity: "0",
    },
    to: {
      transform: "scale(1)",
      opacity: "1",
    },
  },
  "rf-reveal": {
    from: {
      transform: "translateY(5px)",
      opacity: "0",
    },
    to: {
      transform: "translateY(0)",
      opacity: "1",
    },
  },
  "rf-loading": {
    from: {
      transform: "translateX(-20%)",
    },
    to: {
      transform: "translateX(260%)",
    },
  },
};
