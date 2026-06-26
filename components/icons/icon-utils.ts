import { cn } from "@/lib/utils";

export type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

const SIZE: Record<IconSize, string> = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
  xl: "h-7 w-7",
};

type IconProps = {
  className?: string;
  size?: IconSize;
  "aria-hidden"?: boolean;
};

export function iconClass({ className, size = "md" }: IconProps) {
  return cn(SIZE[size], "shrink-0", className);
}

export type { IconProps };
