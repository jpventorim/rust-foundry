import { Popover as BasePopover } from "@base-ui/react/popover";
import { X } from "lucide-react";
import type { ComponentProps, ReactElement, ReactNode } from "react";
import { Button } from "../button";

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
  return (
    <BasePopover.Root {...props}>
      <BasePopover.Trigger render={trigger} />
      <BasePopover.Portal>
        <BasePopover.Positioner
          className="rf-theme rf-positioner"
          sideOffset={10}
        >
          <BasePopover.Popup className="rf-popup rf-popover">
            <div className="rf-spread">
              <BasePopover.Title className="rf-title">
                {title}
              </BasePopover.Title>
              <BasePopover.Close
                render={
                  <Button variant="ghost" size="sm" aria-label="Close popover">
                    <X size={16} aria-hidden="true" />
                  </Button>
                }
              />
            </div>
            <BasePopover.Description className="rf-muted">
              {description}
            </BasePopover.Description>
            {children}
          </BasePopover.Popup>
        </BasePopover.Positioner>
      </BasePopover.Portal>
    </BasePopover.Root>
  );
}
