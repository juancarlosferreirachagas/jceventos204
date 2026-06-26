import Link from "next/link";
import { IconWhatsapp } from "@/components/icons";
import { cn } from "@/lib/utils";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  theme?: "eventos" | "kids";
  size?: "sm" | "md";
  showWhatsapp?: boolean;
  className?: string;
  external?: boolean;
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  theme = "eventos",
  size = "md",
  showWhatsapp = false,
  className,
  external = true,
}: CtaButtonProps) {
  const base = cn(
    "inline-flex items-center justify-center gap-2 rounded-sm font-bold transition-colors duration-200 active:opacity-90",
    size === "sm" ? "min-h-10 px-4 py-2 text-xs sm:text-sm" : "min-h-11 px-5 py-2.5 text-sm sm:min-h-12 sm:px-6 sm:py-3",
  );

  const styles = {
    eventos: {
      primary: "bg-jc-gold text-jc-black hover:bg-jc-gold-light",
      secondary: "bg-white/10 text-white hover:bg-white/15",
      outline: "border border-jc-gold/60 text-jc-gold hover:bg-jc-gold hover:text-jc-black",
    },
    kids: {
      primary: "bg-jc-gold text-kids-blue-dark hover:bg-jc-gold-light",
      secondary: "bg-kids-cyan text-white hover:bg-kids-cyan-light",
      outline: "border border-kids-cyan/70 text-kids-cyan hover:bg-kids-cyan hover:text-white",
    },
  };

  const cls = cn(base, styles[theme][variant], className);
  const content = (
    <>
      {showWhatsapp ? <IconWhatsapp size="sm" className={variant === "outline" && theme === "kids" ? "" : ""} /> : null}
      <span className="text-pretty">{children}</span>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}

/** Linha de CTAs do hero — empilha no mobile com largura total */
export function CtaRow({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-3", className)}>
      {children}
    </div>
  );
}
