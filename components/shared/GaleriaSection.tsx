"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/lib/media";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { cn } from "@/lib/utils";

type GaleriaSectionProps = {
  title: string;
  subtitle: string;
  filters: readonly string[];
  items: readonly GalleryItem[];
  theme?: "eventos" | "kids";
};

export function GaleriaSection({
  title,
  subtitle,
  filters,
  items,
  theme = "eventos",
}: GaleriaSectionProps) {
  const [active, setActive] = useState(filters[0]);

  const filtered =
    active === "Todos" ? items : items.filter((item) => item.category === active);

  return (
    <section id="galeria" className={cn("section-py content-auto", theme === "kids" ? "bg-sky-50" : "bg-[#111]")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow={title} title={subtitle} theme={theme} surface={theme === "kids" ? "light" : "dark"} />

        <div className="mt-2 flex flex-wrap gap-2 sm:mt-0" role="tablist">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={active === filter}
              onClick={() => setActive(filter)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                active === filter
                  ? theme === "kids" ? "bg-kids-cyan text-white" : "bg-jc-gold text-jc-black"
                  : theme === "kids"
                    ? "border border-kids-cyan/30 text-kids-blue-dark hover:bg-kids-cyan/10"
                    : "border border-white/20 text-white/70 hover:border-jc-gold/50 hover:text-jc-gold",
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 grid auto-rows-[140px] grid-cols-2 gap-2 sm:auto-rows-[180px] sm:gap-3 lg:auto-rows-[200px] lg:grid-cols-4 lg:gap-4">
          {filtered.map((item) => (
            <figure key={item.id} className={cn("relative overflow-hidden rounded-xl", item.className)}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className={cn("object-cover transition-transform duration-500 hover:scale-105", item.position)}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                quality={85}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
