import { Progress as BaseProgress } from "@base-ui/react/progress";
import type { ComponentProps } from "react";
import type { Tone } from "../types";

export function Progress({
  label,
  tone = "emerald",
  ...props
}: Omit<ComponentProps<typeof BaseProgress.Root>, "children" | "className"> & {
  label: string;
  tone?: Tone;
}) {
  return (
    <BaseProgress.Root {...props} className="rf-progress" data-tone={tone}>
      <div className="rf-spread">
        <BaseProgress.Label className="rf-label">{label}</BaseProgress.Label>
        <BaseProgress.Value className="rf-progress-value" />
      </div>
      <BaseProgress.Track className="rf-progress-track">
        <BaseProgress.Indicator className="rf-progress-indicator" />
      </BaseProgress.Track>
    </BaseProgress.Root>
  );
}
