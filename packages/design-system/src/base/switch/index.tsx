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
        <BaseSwitch.Thumb className="rf-switch-thumb" />
      </BaseSwitch.Root>
      <span>{label}</span>
    </label>
  );
}
