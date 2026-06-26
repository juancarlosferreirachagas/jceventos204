import { cn } from "@/lib/utils";

type LogoKidsProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
};

const sizes = {
  sm: { jc: "text-xl", sub: "text-[0.45rem]", kids: "text-lg" },
  md: { jc: "text-3xl", sub: "text-[0.55rem]", kids: "text-2xl" },
  lg: { jc: "text-5xl", sub: "text-[0.65rem]", kids: "text-4xl" },
};

export function LogoKids({ className, size = "md", variant = "dark" }: LogoKidsProps) {
  const s = sizes[size];
  const subColor = variant === "light" ? "text-kids-blue-dark" : "text-white";
  return (
    <div className={cn("flex flex-col items-center leading-none", className)}>
      <span
        className={cn("font-display font-bold text-gold-gradient", s.jc)}
        aria-hidden
      >
        JC
      </span>
      <span
        className={cn(
          "mt-0.5 font-sans font-semibold uppercase tracking-[0.25em]",
          subColor,
          s.sub,
        )}
      >
        Eventos 204
      </span>
      <span className={cn("mt-1 font-kids font-bold tracking-wide", s.kids)}>
        <span style={{ color: "var(--kids-k)" }}>K</span>
        <span style={{ color: "var(--kids-i)" }}>I</span>
        <span style={{ color: "var(--kids-d)" }}>D</span>
        <span style={{ color: "var(--kids-s)" }}>S</span>
      </span>
    </div>
  );
}
