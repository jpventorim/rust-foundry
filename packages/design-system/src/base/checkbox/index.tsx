import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { Check } from "lucide-react";
import { type ComponentProps, type ReactNode, useId } from "react";

export function Checkbox({
  label,
  ...props
}: Omit<ComponentProps<typeof BaseCheckbox.Root>, "className" | "children"> & {
  label: ReactNode;
}) {
  const generatedId = useId();
  const id = props.id ?? generatedId;
  return (
    <label className="rf-choice" htmlFor={id}>
      <BaseCheckbox.Root {...props} id={id} className="rf-checkbox">
        <BaseCheckbox.Indicator className="rf-checkbox-indicator">
          <Check size={15} strokeWidth={3} aria-hidden="true" />
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Root>
      <span>{label}</span>
    </label>
  );
}
