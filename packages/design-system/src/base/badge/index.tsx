import type { ComponentProps } from "react";
import type { Tone } from "../types";

export function Badge({
  tone = "neutral",
  className = "",
  ...props
}: ComponentProps<"span"> & { tone?: Tone }) {
  return (
    <span {...props} className={`rf-badge ${className}`} data-tone={tone} />
  );
}
