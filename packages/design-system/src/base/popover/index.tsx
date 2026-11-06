import { Popover as BasePopover } from "@base-ui/react/popover";
import { X } from "lucide-react";
import type { ComponentProps, ReactElement, ReactNode } from "react";
import { useTheme } from "../../theme/provider";

export function Popover({
  trigger,
  title,
  description,
  children,
  ...props
}: Omit<ComponentProps<typeof BasePopover.Root>, "children"> & {
  trigger: ReactElement;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  const theme = useTheme();
  return (
    <BasePopover.Root {...props}>
      <BasePopover.Trigger render={trigger} />
      <BasePopover.Portal>
        <BasePopover.Positioner
          className="rf-theme rf-popover-positioner"
          data-theme={theme}
          sideOffset={12}
          collisionPadding={16}
        >
          <BasePopover.Popup className="rf-popover">
            <BasePopover.Arrow
              className="rf-popover-attachment"
              aria-hidden="true"
            />
            <div className="rf-popover-sheet rf-paper-surface">
              <div className="rf-popover-header">
                <BasePopover.Title className="rf-popover-title">
                  {title}
                </BasePopover.Title>
                <BasePopover.Close
                  className="rf-popover-close"
                  aria-label="Close popover"
                >
                  <X size={18} aria-hidden="true" />
                </BasePopover.Close>
              </div>
              <BasePopover.Description className="rf-popover-description">
                {description}
              </BasePopover.Description>
              {children}
            </div>
          </BasePopover.Popup>
        </BasePopover.Positioner>
      </BasePopover.Portal>
    </BasePopover.Root>
  );
}
