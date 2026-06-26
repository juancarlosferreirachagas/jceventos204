import {
  Building2,
  Clock,
  Gamepad2,
  Layers,
  MapPin,
  MessageCircle,
  Scan,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { cn } from "@/lib/utils";

export type DiferencialIcon = "mapPin" | "layers" | "scan" | "message" | "shield" | "gamepad" | "clock" | "building";

const ICONS: Record<DiferencialIcon, LucideIcon> = {
  mapPin: MapPin,
  layers: Layers,
  scan: Scan,
  message: MessageCircle,
  shield: Shield,
  gamepad: Gamepad2,
  clock: Clock,
  building: Building2,
};

export type DiferencialItem = {
  icon: DiferencialIcon;
  title: string;
  description: string;
};

type DiferenciaisSectionProps = {
  title: string;
  subtitle: string;
  items: readonly DiferencialItem[];
  theme?: "eventos" | "kids";
};

export function DiferenciaisSection({ title, subtitle, items, theme = "eventos" }: DiferenciaisSectionProps) {
  const isKids = theme === "kids";

  return (
    <section
      id="diferenciais"
      className={cn(
        "section-py content-auto",
        isKids ? "border-y border-kids-cyan/20 bg-gradient-to-b from-white to-sky-50/80" : "border-y border-jc-gold/10 bg-[#111]",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow={title} title={subtitle} theme={theme} align="center" surface={isKids ? "light" : "dark"} />

        <div className="mt-2 grid gap-5 sm:grid-cols-2 sm:gap-6">
          {items.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <article
                key={item.title}
                className={cn(
                  "flex gap-4 rounded-xl p-5 sm:p-6",
                  isKids ? "border border-kids-cyan/15 bg-white shadow-sm" : "border border-jc-gold/15 bg-jc-black",
                )}
              >
                <div
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg",
                    isKids ? "bg-sky-50 text-kids-cyan" : "bg-jc-gold/10 text-jc-gold",
                  )}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </div>
                <div className="min-w-0">
                  <h3 className={cn("font-display text-base font-bold sm:text-lg", isKids ? "text-kids-blue-dark" : "text-jc-gold-light")}>
                    {item.title}
                  </h3>
                  <p className={cn("mt-1.5 text-sm leading-relaxed", isKids ? "text-kids-blue-dark/70" : "text-white/60")}>
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
