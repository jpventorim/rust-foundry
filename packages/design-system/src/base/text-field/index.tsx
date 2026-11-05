import { Input } from "@base-ui/react/input";
import { type ComponentProps, useId } from "react";
import type { FieldDetails } from "../types";

export function TextField({
  label,
  description,
  error,
  id: providedId,
  className = "",
  ...props
}: Omit<ComponentProps<typeof Input>, "className"> &
  FieldDetails & { className?: string }) {
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
    <div className={`rf-field ${className}`}>
      <label className="rf-label" htmlFor={id}>
        {label}
      </label>
      <Input
        {...props}
        id={id}
        className="rf-input"
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
