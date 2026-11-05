import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";
import type { ComponentProps, ReactElement, ReactNode } from "react";

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
        <BaseDialog.Popup className="rf-theme rf-dialog">
          <div className="rf-dialog-sheet">
            <div className="rf-dialog-header">
              <BaseDialog.Title className="rf-dialog-title">
                {title}
              </BaseDialog.Title>
              <BaseDialog.Close
                className="rf-dialog-close"
                aria-label="Close dialog"
              >
                <X size={20} aria-hidden="true" />
              </BaseDialog.Close>
            </div>
            <BaseDialog.Description className="rf-dialog-description">
              {description}
            </BaseDialog.Description>
            <div className="rf-dialog-content">{children}</div>
          </div>
        </BaseDialog.Popup>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  );
}
