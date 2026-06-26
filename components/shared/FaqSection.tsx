import type { FaqItem } from "@/lib/site-faq";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { cn } from "@/lib/utils";

type FaqSectionProps = {
  items: readonly FaqItem[];
  theme?: "eventos" | "kids";
};

export function FaqSection({ items, theme = "eventos" }: FaqSectionProps) {
  const isKids = theme === "kids";

  return (
    <section id="faq" className={cn("section-py content-auto", isKids ? "bg-white" : "bg-[#0d0d0d]")}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Dúvidas"
          title="Perguntas frequentes"
          subtitle="Respostas objetivas sobre estrutura, horários e como reservar."
          theme={theme}
          surface={isKids ? "light" : "dark"}
          className="mb-6 sm:mb-8"
        />

        <div className="space-y-2">
          {items.map((item) => (
            <details
              key={item.question}
              className={cn(
                "group rounded-xl border transition-colors duration-200",
                isKids
                  ? "border-kids-cyan/15 bg-sky-50/50 open:border-kids-cyan/35 open:bg-white"
                  : "border-jc-gold/15 bg-white/[0.03] open:border-jc-gold/35 open:bg-white/[0.06]",
              )}
            >
              <summary
                className={cn(
                  "cursor-pointer list-none px-4 py-3.5 text-sm font-semibold leading-snug sm:px-5 sm:py-4 sm:text-base [&::-webkit-details-marker]:hidden",
                  isKids ? "text-kids-blue-dark" : "text-white",
                )}
              >
                <span className="flex items-start justify-between gap-3">
                  {item.question}
                  <span
                    className={cn(
                      "mt-0.5 shrink-0 text-lg leading-none transition-transform duration-200 group-open:rotate-45",
                      isKids ? "text-kids-cyan" : "text-jc-gold",
                    )}
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <p
                className={cn(
                  "border-t px-4 pb-4 pt-2 text-sm leading-relaxed sm:px-5",
                  isKids
                    ? "border-kids-cyan/10 text-kids-blue-dark/75"
                    : "border-jc-gold/10 text-white/65",
                )}
              >
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
