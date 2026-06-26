import { cn } from "@/lib/utils";

type LogoKidsProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
};

const sizes = {
  sm: { jc: "text-lg sm:text-xl", sub: "text-[0.42rem] sm:text-[0.48rem]", kids: "text-base sm:text-lg" },
  md: { jc: "text-3xl sm:text-4xl", sub: "text-[0.52rem] sm:text-[0.58rem]", kids: "text-xl sm:text-2xl" },
  lg: { jc: "text-5xl sm:text-6xl", sub: "text-[0.62rem] sm:text-[0.7rem]", kids: "text-3xl sm:text-4xl" },
};

export function LogoKids({ className, size = "md", variant = "dark" }: LogoKidsProps) {
  const s = sizes[size];
  const subColor = variant === "light" ? "text-kids-blue-dark" : "text-white";
  return (
    <div className={cn("flex flex-col items-start leading-none", className)}>
      <span className={cn("font-display font-semibold text-gold-gradient", s.jc)} aria-hidden>
        JC
      </span>
      <span className={cn("mt-0.5 font-sans font-semibold uppercase tracking-[0.22em]", subColor, s.sub)}>
        Eventos 204
      </span>
      <span className={cn("mt-1 font-kids font-semibold tracking-wide", s.kids)}>
        <span style={{ color: "var(--kids-k)" }}>K</span>
        <span style={{ color: "var(--kids-i)" }}>I</span>
        <span style={{ color: "var(--kids-d)" }}>D</span>
        <span style={{ color: "var(--kids-s)" }}>S</span>
      </span>
    </div>
  );
}
