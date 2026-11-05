import { Switch as BaseSwitch } from "@base-ui/react/switch";
import { type ComponentProps, type ReactNode, useId } from "react";

export function Switch({
  label,
  ...props
}: Omit<ComponentProps<typeof BaseSwitch.Root>, "className" | "children"> & {
  label: ReactNode;
}) {
  const generatedId = useId();
  const id = props.id ?? generatedId;
  return (
    <label className="rf-choice rf-switch-choice" htmlFor={id}>
      <BaseSwitch.Root {...props} id={id} className="rf-switch">
        <span className="rf-switch-keeper" aria-hidden="true" />
        <span
          className="rf-switch-keeper rf-switch-keeper-end"
          aria-hidden="true"
        />
        <BaseSwitch.Thumb className="rf-switch-thumb" aria-hidden="true" />
        <span
          className="rf-switch-state rf-switch-state-off"
          aria-hidden="true"
        >
          OFF
        </span>
        <span className="rf-switch-state rf-switch-state-on" aria-hidden="true">
          ON
        </span>
      </BaseSwitch.Root>
      <span>{label}</span>
    </label>
  );
}
