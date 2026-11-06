import { Select as BaseSelect } from "@base-ui/react/select";
import { Check, ChevronDown } from "lucide-react";
import { useId } from "react";
import { type FieldSurface, useTheme } from "../../theme/provider";
import type { Choice } from "../types";

export function Select({
  label,
  items,
  placeholder = "Choose an option",
  surface = "auto",
  description,
  error,
  id: providedId,
  ...props
}: Omit<
  BaseSelect.Root.Props<string, false>,
  "items" | "children" | "multiple"
> & {
  label: string;
  items: readonly Choice[];
  placeholder?: string;
  surface?: FieldSurface;
  description?: string;
  error?: string;
}) {
  const theme = useTheme();
  const generatedId = useId();
  const id = providedId ?? generatedId;
  const details =
    [description && `${id}-description`, error && `${id}-error`]
      .filter(Boolean)
      .join(" ") || undefined;
  return (
    <div className="rf-field rf-select-field" data-surface={surface}>
      <BaseSelect.Root {...props} id={id} items={items}>
        <BaseSelect.Label className="rf-label">{label}</BaseSelect.Label>
        <BaseSelect.Trigger
          className="rf-select-trigger"
          aria-invalid={error ? true : undefined}
          aria-describedby={details}
        >
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
            data-theme={theme}
            sideOffset={8}
            alignItemWithTrigger={false}
          >
            <BaseSelect.Popup className="rf-select-popup rf-paper-surface">
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
      {description && (
        <span className="rf-hint" id={`${id}-description`}>
          {description}
        </span>
      )}
      {error && (
        <span className="rf-error" id={`${id}-error`}>
          {error}
        </span>
      )}
    </div>
  );
}
