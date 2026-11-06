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
      className="rf-alert rf-paper-surface"
      data-tone={tone}
      role={tone === "ruby" ? "alert" : "status"}
    >
      <span className="rf-alert-seal" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          focusable="false"
          aria-hidden="true"
        >
          {tone === "emerald" ? (
            <path d="m6 12 4 4 8-8" />
          ) : tone === "ruby" ? (
            <path d="m8 8 8 8m0-8-8 8" />
          ) : (
            <path d="M12 11v6m0-10v.5" />
          )}
        </svg>
      </span>
      <div className="rf-alert-copy">
        <strong className="rf-alert-title">{title}</strong>
        <div className="rf-alert-description">{children}</div>
      </div>
    </div>
  );
}
