import { cn } from "@/lib/utils";

type LogoEventosProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { jc: "text-[1.65rem] sm:text-[1.85rem]", sub: "text-[0.5rem] sm:text-[0.55rem] tracking-[0.22em]" },
  md: { jc: "text-4xl sm:text-5xl", sub: "text-[0.6rem] sm:text-[0.65rem] tracking-[0.28em]" },
  lg: { jc: "text-5xl sm:text-6xl", sub: "text-xs sm:text-sm tracking-[0.32em]" },
};

export function LogoEventos({ className, size = "md" }: LogoEventosProps) {
  const s = sizes[size];
  return (
    <div className={cn("flex flex-col items-start leading-none", className)}>
      <span className={cn("font-display font-bold text-jc-gold", s.jc)} aria-hidden>
        JC
      </span>
      <span className={cn("mt-0.5 font-sans font-semibold uppercase text-jc-gold", s.sub)}>Eventos 204</span>
    </div>
  );
}
