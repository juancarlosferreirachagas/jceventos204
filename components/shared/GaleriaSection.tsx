"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/lib/media";
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
    <section id="galeria" className={cn("py-16 lg:py-24", theme === "kids" ? "bg-sky-50" : "bg-[#111]")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className={cn("text-sm font-bold uppercase tracking-widest", theme === "kids" ? "text-kids-cyan" : "text-jc-gold")}>
          {title}
        </p>
        <h2 className={cn("mt-2 font-display text-3xl font-bold sm:text-4xl", theme === "kids" ? "text-kids-blue-dark" : "text-white")}>
          {subtitle}
        </h2>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist">
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
