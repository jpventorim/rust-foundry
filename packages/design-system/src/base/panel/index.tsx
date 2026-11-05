import type { ComponentProps } from "react";

export function Panel({
  className = "",
  material = "parchment",
  ...props
}: ComponentProps<"div"> & { material?: "parchment" | "leather" }) {
  return (
    <div
      {...props}
      className={`rf-panel ${className}`}
      data-material={material}
    />
  );
}
