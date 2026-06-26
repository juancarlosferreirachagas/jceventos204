import {
  Armchair,
  Blocks,
  Cake,
  Disc3,
  Handshake,
  Lightbulb,
  PartyPopper,
  Sparkles,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type AmenityIcon =
  | "armchair"
  | "handshake"
  | "sparkles"
  | "mirror"
  | "utensils"
  | "lightbulb"
  | "disc"
  | "blocks"
  | "party"
  | "cake";

const ICONS: Record<AmenityIcon, LucideIcon> = {
  armchair: Armchair,
  handshake: Handshake,
  sparkles: Sparkles,
  mirror: Sparkles,
  utensils: UtensilsCrossed,
  lightbulb: Lightbulb,
  disc: Disc3,
  blocks: Blocks,
  party: PartyPopper,
  cake: Cake,
};

/** Ícone de camarim — espelho com luzes (referência visual TAAL) */
function MirrorIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <ellipse cx="24" cy="26" rx="14" ry="16" />
      <path d="M10 26c0-8 6-14 14-14s14 6 14 14" />
      <path d="M8 12h4M36 12h4M8 16h3M37 16h3M10 8h3M35 8h3" />
      <path d="M20 42h8" />
      <path d="M22 42v-4M26 42v-4" />
    </svg>
  );
}

type AmenitiesStripProps = {
  title: string;
  items: ReadonlyArray<{ label: string; icon: AmenityIcon }>;
  theme?: "eventos" | "kids";
};

export function AmenitiesStrip({ title, items, theme = "eventos" }: AmenitiesStripProps) {
  const isKids = theme === "kids";

  return (
    <section
      id="estrutura"
      className={cn(
        "py-14 lg:py-20",
        isKids ? "bg-white" : "bg-white",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className={cn(
            "text-center font-display text-lg font-semibold uppercase tracking-[0.18em] sm:text-xl lg:text-2xl",
            isKids ? "text-kids-blue-dark" : "text-neutral-800",
          )}
        >
          {title}
        </h2>

        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-7 lg:gap-x-2">
          {items.map((item) => {
            const Icon = item.icon === "mirror" ? null : ICONS[item.icon];
            const iconClass = cn(
              "h-11 w-11 sm:h-12 sm:w-12",
              isKids ? "text-kids-cyan" : "text-jc-gold",
            );

            return (
              <li key={item.label} className="flex flex-col items-center text-center">
                <div className="flex h-14 items-center justify-center">
                  {item.icon === "mirror" ? (
                    <MirrorIcon className={iconClass} />
                  ) : Icon ? (
                    <Icon className={iconClass} strokeWidth={1.5} aria-hidden />
                  ) : null}
                </div>
                <p
                  className={cn(
                    "mt-3 max-w-[9rem] text-[0.7rem] font-semibold uppercase leading-snug tracking-wide sm:text-xs",
                    isKids ? "text-kids-blue-dark/75" : "text-neutral-600",
                  )}
                >
                  {item.label}
                </p>
              </li>
            );
          })}
        </ul>

        <p
          className={cn(
            "mx-auto mt-10 max-w-2xl text-center text-[0.65rem] leading-relaxed sm:text-xs",
            isKids ? "text-kids-blue-dark/45" : "text-neutral-400",
          )}
        >
          Itens e serviços conforme pacote contratado — detalhes na visita e na proposta.
        </p>
      </div>
    </section>
  );
}
