import { Radio } from "@base-ui/react/radio";
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import { type ComponentProps, useId } from "react";
import type { Choice } from "../types";

export function RadioGroup({
  label,
  items,
  ...props
}: Omit<ComponentProps<typeof BaseRadioGroup>, "className" | "children"> & {
  label: string;
  items: readonly Choice[];
}) {
  const labelId = useId();
  return (
    <div className="rf-radio-field">
      <span className="rf-radio-label" id={labelId}>
        {label}
      </span>
      <BaseRadioGroup
        {...props}
        aria-labelledby={labelId}
        className="rf-radio-group"
      >
        {items.map((item, index) => (
          <label
            key={item.value}
            className="rf-radio-choice"
            htmlFor={`${labelId}-${index}`}
          >
            <Radio.Root
              id={`${labelId}-${index}`}
              value={item.value}
              disabled={item.disabled}
              className="rf-radio"
            >
              <Radio.Indicator
                className="rf-radio-indicator"
                aria-hidden="true"
              />
            </Radio.Root>
            <span>{item.label}</span>
          </label>
        ))}
      </BaseRadioGroup>
    </div>
  );
}
