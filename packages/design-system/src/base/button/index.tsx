import { Button as BaseButton } from "@base-ui/react/button";
import type { ComponentProps } from "react";
import type { Tone } from "../types";

export function Button({
  tone = "brass",
  variant = "solid",
  size = "md",
  className = "",
  ...props
}: Omit<ComponentProps<typeof BaseButton>, "className"> & {
  tone?: Tone;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md";
  className?: string;
}) {
  return (
    <BaseButton
      {...props}
      className={`rf-button ${className}`}
      data-tone={tone}
      data-variant={variant}
      data-size={size}
    />
  );
}
