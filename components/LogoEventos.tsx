import { cn } from "@/lib/utils";

type LogoEventosProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { jc: "text-2xl", sub: "text-[0.5rem] tracking-[0.25em]" },
  md: { jc: "text-4xl", sub: "text-[0.65rem] tracking-[0.3em]" },
  lg: { jc: "text-6xl", sub: "text-xs tracking-[0.35em]" },
};

export function LogoEventos({ className, size = "md" }: LogoEventosProps) {
  const s = sizes[size];
  return (
    <div className={cn("flex flex-col items-center leading-none", className)}>
      <span
        className={cn(
          "font-display font-bold text-gold-gradient",
          s.jc,
        )}
        aria-hidden
      >
        JC
      </span>
      <span
        className={cn(
          "mt-1 font-sans font-semibold uppercase text-jc-gold",
          s.sub,
        )}
      >
        Eventos 204
      </span>
    </div>
  );
}
