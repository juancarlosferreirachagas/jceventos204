import Link from "next/link";
import { cn } from "@/lib/utils";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  theme?: "eventos" | "kids";
  className?: string;
  external?: boolean;
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  theme = "eventos",
  className,
  external = true,
}: CtaButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-bold transition-all hover:scale-[1.02] active:scale-[0.98]";

  const styles = {
    eventos: {
      primary: "bg-cta-bar text-cta-text shadow-lg hover:bg-[#ffe033]",
      secondary: "bg-jc-gold text-jc-black hover:bg-jc-gold-light",
      outline:
        "border-2 border-jc-gold text-jc-gold hover:bg-jc-gold hover:text-jc-black",
    },
    kids: {
      primary: "bg-kids-yellow text-kids-blue-dark shadow-lg hover:bg-[#ffe033]",
      secondary: "bg-kids-cyan text-white hover:bg-kids-cyan-light",
      outline:
        "border-2 border-kids-cyan text-kids-cyan hover:bg-kids-cyan hover:text-white",
    },
  };

  const cls = cn(base, styles[theme][variant], className);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
