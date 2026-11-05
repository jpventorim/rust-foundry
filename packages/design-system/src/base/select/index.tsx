import { Select as BaseSelect } from "@base-ui/react/select";
import { Check, ChevronDown } from "lucide-react";
import type { Choice } from "../types";

export function Select({
  label,
  items,
  placeholder = "Choose an option",
  ...props
}: Omit<
  BaseSelect.Root.Props<string, false>,
  "items" | "children" | "multiple"
> & { label: string; items: readonly Choice[]; placeholder?: string }) {
  return (
    <div className="rf-field rf-select-field">
      <BaseSelect.Root {...props} items={items}>
        <BaseSelect.Label className="rf-label">{label}</BaseSelect.Label>
        <BaseSelect.Trigger className="rf-select-trigger">
          <BaseSelect.Value
            className="rf-select-value"
            placeholder={placeholder}
          />
          <BaseSelect.Icon className="rf-select-opener" aria-hidden="true">
            <ChevronDown size={16} aria-hidden="true" />
          </BaseSelect.Icon>
        </BaseSelect.Trigger>
        <BaseSelect.Portal>
          <BaseSelect.Positioner
            role="region"
            aria-label={`${label} options`}
            className="rf-theme rf-positioner rf-select-positioner"
            sideOffset={8}
            alignItemWithTrigger={false}
          >
            <BaseSelect.Popup className="rf-select-popup">
              <BaseSelect.List className="rf-select-list">
                {items.map((item) => (
                  <BaseSelect.Item
                    key={item.value}
                    value={item.value}
                    disabled={item.disabled}
                    className="rf-select-item"
                  >
                    <BaseSelect.ItemText className="rf-select-item-text">
                      {item.label}
                    </BaseSelect.ItemText>
                    <BaseSelect.ItemIndicator
                      className="rf-select-check"
                      aria-hidden="true"
                    >
                      <Check size={16} aria-hidden="true" />
                    </BaseSelect.ItemIndicator>
                  </BaseSelect.Item>
                ))}
              </BaseSelect.List>
            </BaseSelect.Popup>
          </BaseSelect.Positioner>
        </BaseSelect.Portal>
      </BaseSelect.Root>
    </div>
  );
}
