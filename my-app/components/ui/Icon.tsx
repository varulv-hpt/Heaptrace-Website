import type { ComponentProps } from "react";
import type { LucideIcon } from "lucide-react";

type IconProps = ComponentProps<"svg"> & {
  icon: LucideIcon;
};

export function Icon({ icon: LucideComponent, ...props }: IconProps) {
  return <LucideComponent aria-hidden="true" focusable="false" {...props} />;
}
