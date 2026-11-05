import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";
import type { ComponentProps, ReactElement, ReactNode } from "react";
import { Button } from "../button";

export function Dialog({
  trigger,
  title,
  description,
  children,
  ...props
}: Omit<ComponentProps<typeof BaseDialog.Root>, "children"> & {
  trigger: ReactElement;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <BaseDialog.Root {...props}>
      <BaseDialog.Trigger render={trigger} />
      <BaseDialog.Portal>
        <BaseDialog.Backdrop className="rf-dialog-backdrop" />
        <BaseDialog.Popup className="rf-theme rf-dialog rf-panel">
          <div className="rf-spread">
            <BaseDialog.Title className="rf-title">{title}</BaseDialog.Title>
            <BaseDialog.Close
              render={
                <Button variant="ghost" aria-label="Close dialog" size="sm">
                  <X size={18} aria-hidden="true" />
                </Button>
              }
            />
          </div>
          <BaseDialog.Description className="rf-muted">
            {description}
          </BaseDialog.Description>
          <div className="rf-dialog-content">{children}</div>
        </BaseDialog.Popup>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  );
}
