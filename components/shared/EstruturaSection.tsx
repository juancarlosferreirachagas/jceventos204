import {
  Armchair,
  Bath,
  ChefHat,
  Clock,
  Crown,
  Gamepad2,
  Users,
  type LucideIcon,
} from "lucide-react";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { cn } from "@/lib/utils";

type EstruturaIcon = "espaco" | "brinquedos" | "cozinha" | "banheiros" | "equipe" | "mobilia" | "privativo";

const ICONS: Record<EstruturaIcon, LucideIcon> = {
  espaco: Armchair,
  mobilia: Armchair,
  brinquedos: Gamepad2,
  cozinha: ChefHat,
  banheiros: Bath,
  equipe: Users,
  privativo: Crown,
};

export type EstruturaBlock = {
  icon: EstruturaIcon;
  title: string;
  items: readonly string[];
};

export type EstruturaData = {
  title: string;
  lead: string;
  sections: readonly EstruturaBlock[];
  eventInfo: readonly string[];
  disclaimer: string;
};

type EstruturaSectionProps = {
  data: EstruturaData;
  theme?: "eventos" | "kids";
};

export function EstruturaSection({ data, theme = "eventos" }: EstruturaSectionProps) {
  const isKids = theme === "kids";

  return (
    <section id="estrutura" className={cn("section-py content-auto", isKids ? "bg-sky-50/60" : "bg-neutral-50")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow="Estrutura" title={data.title} subtitle={data.lead} theme={theme} surface="light" />

        <div className="mt-2 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {data.sections.map((block) => {
            const Icon = ICONS[block.icon];
            return (
              <article
                key={block.title}
                className={cn(
                  "rounded-xl border p-5 sm:p-6",
                  isKids ? "border-kids-cyan/20 bg-white" : "border-jc-gold/15 bg-white",
                )}
              >
                <div className="flex items-center gap-2.5">
                  <Icon
                    className={cn("h-5 w-5 shrink-0", isKids ? "text-kids-cyan" : "text-jc-gold")}
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <h3
                    className={cn(
                      "font-display text-base font-bold sm:text-lg",
                      isKids ? "text-kids-blue-dark" : "text-jc-black",
                    )}
                  >
                    {block.title}
                  </h3>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className={cn(
                        "text-sm leading-relaxed before:mr-2 before:content-['•']",
                        isKids ? "text-kids-blue-dark/80 before:text-kids-cyan" : "text-neutral-700 before:text-jc-gold",
                      )}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div
          className={cn(
            "mx-auto mt-8 max-w-xl rounded-xl border px-5 py-4 sm:px-6",
            isKids ? "border-kids-cyan/25 bg-white" : "border-jc-gold/20 bg-white",
          )}
        >
          <div className="flex items-center gap-2">
            <Clock className={cn("h-4 w-4", isKids ? "text-kids-cyan" : "text-jc-gold")} aria-hidden />
            <h3 className={cn("font-semibold", isKids ? "text-kids-blue-dark" : "text-jc-black")}>
              Informações do evento
            </h3>
          </div>
          <ul className="mt-2 space-y-1">
            {data.eventInfo.map((line) => (
              <li key={line} className={cn("text-sm", isKids ? "text-kids-blue-dark/75" : "text-neutral-600")}>
                {line}
              </li>
            ))}
          </ul>
        </div>

        <p
          className={cn(
            "mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed",
            isKids ? "text-kids-blue-dark/50" : "text-neutral-400",
          )}
        >
          {data.disclaimer}
        </p>
      </div>
    </section>
  );
}
