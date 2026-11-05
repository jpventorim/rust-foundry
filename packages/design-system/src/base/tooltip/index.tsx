import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import type { ReactElement } from "react";

export function Tooltip({
  children,
  content,
}: {
  children: ReactElement;
  content: string;
}) {
  return (
    <BaseTooltip.Provider delay={250}>
      <BaseTooltip.Root>
        <BaseTooltip.Trigger render={children} />
        <BaseTooltip.Portal>
          <BaseTooltip.Positioner
            className="rf-theme rf-positioner"
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
