import { type ComponentProps, useId } from "react";
import type { FieldDetails } from "../types";

export function Textarea({
  label,
  description,
  error,
  id: providedId,
  className = "",
  ...props
}: ComponentProps<"textarea"> & FieldDetails) {
  const generatedId = useId();
  const id = providedId ?? generatedId;
  const details =
    [
      description && `${id}-description`,
      error && `${id}-error`,
      props["aria-describedby"],
    ]
      .filter(Boolean)
      .join(" ") || undefined;
  return (
    <div className="rf-field">
      <label className="rf-label" htmlFor={id}>
        {label}
      </label>
      <textarea
        rows={3}
        {...props}
        id={id}
        className={`rf-input rf-textarea ${className}`}
        aria-invalid={error ? true : props["aria-invalid"]}
        aria-describedby={details}
      />
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
