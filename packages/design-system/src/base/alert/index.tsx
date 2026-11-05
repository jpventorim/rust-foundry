import type { ComponentProps, ReactNode } from "react";
import type { Tone } from "../types";

export function Alert({
  title,
  children,
  tone = "sapphire",
  ...props
}: Omit<ComponentProps<"div">, "title"> & {
  title: string;
  children: ReactNode;
  tone?: Tone;
}) {
  return (
    <div
      {...props}
      className="rf-alert"
      data-tone={tone}
      role={tone === "ruby" ? "alert" : "status"}
    >
      <strong>{title}</strong>
      <div>{children}</div>
    </div>
  );
}
