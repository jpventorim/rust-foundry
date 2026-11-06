import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import type { ReactElement } from "react";
import { useTheme } from "../../theme/provider";

export function Tooltip({
  children,
  content,
}: {
  children: ReactElement;
  content: string;
}) {
  const theme = useTheme();
  return (
    <BaseTooltip.Provider delay={250}>
      <BaseTooltip.Root>
        <BaseTooltip.Trigger render={children} />
        <BaseTooltip.Portal>
          <BaseTooltip.Positioner
            className="rf-theme rf-positioner"
            data-theme={theme}
            sideOffset={10}
          >
            <BaseTooltip.Popup className="rf-tooltip" aria-hidden="true">
              {content}
            </BaseTooltip.Popup>
          </BaseTooltip.Positioner>
        </BaseTooltip.Portal>
      </BaseTooltip.Root>
    </BaseTooltip.Provider>
  );
}
