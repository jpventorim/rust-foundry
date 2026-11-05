import { Separator as BaseSeparator } from "@base-ui/react/separator";
import type { ComponentProps } from "react";

export function Separator(
  props: Omit<ComponentProps<typeof BaseSeparator>, "className">,
) {
  return <BaseSeparator {...props} className="rf-separator" />;
}
