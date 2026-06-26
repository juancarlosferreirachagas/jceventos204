import { cn } from "@/lib/utils";

type LogoKidsProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
};

const sizes = {
  sm: { jc: "text-xl sm:text-2xl", brand: "text-[0.5rem] sm:text-[0.55rem] tracking-[0.22em]" },
  md: { jc: "text-4xl sm:text-5xl", brand: "text-[0.58rem] sm:text-[0.65rem] tracking-[0.28em]" },
  lg: { jc: "text-5xl sm:text-6xl", brand: "text-xs sm:text-sm tracking-[0.32em]" },
};

export function LogoKids({ className, size = "md", variant = "dark" }: LogoKidsProps) {
  const s = sizes[size];
  const brandColor = variant === "light" ? "text-kids-blue-dark" : "text-jc-gold";

  return (
    <div className={cn("flex flex-col items-start leading-none", className)}>
      <span className={cn("font-display font-bold text-jc-gold", s.jc)} aria-hidden>
        JC
      </span>
      <span className={cn("mt-1 font-sans font-semibold uppercase", brandColor, s.brand)}>
        Kids 204
      </span>
    </div>
  );
}
