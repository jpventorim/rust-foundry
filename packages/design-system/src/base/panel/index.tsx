import type { ComponentProps } from "react";

const joinery = (
  <span className="rf-panel-joinery" aria-hidden="true">
    <span />
    <span />
    <span />
    <span />
  </span>
);

export function Panel({
  className = "",
  material = "parchment",
  children,
  ...props
}: ComponentProps<"div"> & { material?: "parchment" | "leather" | "wood" }) {
  return (
    <div
      {...props}
      className={`rf-panel ${material === "parchment" ? "rf-paper-surface" : ""} ${className}`}
      data-material={material}
    >
      {joinery}
      {children}
    </div>
  );
}
