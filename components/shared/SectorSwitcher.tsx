"use client";

import { useRouter } from "next/navigation";
import { useEffect, useTransition } from "react";
import { navigateWithTransition } from "@/lib/view-transition";
import { cn } from "@/lib/utils";

type Sector = "eventos" | "kids";

const SECTORS = [
  { id: "eventos" as const, href: "/eventos", short: "Eventos", label: "Eventos 204" },
  { id: "kids" as const, href: "/kids", short: "Kids", label: "Kids 204" },
];

type SectorSwitcherProps = {
  active: Sector;
};

export function SectorSwitcher({ active }: SectorSwitcherProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const isKidsPage = active === "kids";

  function go(href: string) {
    if (href === `/${active}`) return;

    navigateWithTransition(() => {
      startTransition(() => router.push(href));
    });
  }

  useEffect(() => {
    router.prefetch(active === "eventos" ? "/kids" : "/eventos");
  }, [active, router]);

  return (
    <nav
      className={cn(
        "relative grid grid-cols-2 items-stretch rounded-full border p-0.5 transition-opacity duration-200",
        isKidsPage ? "border-white/30 bg-black/15" : "border-jc-gold/35 bg-white/[0.06]",
        isPending && "pointer-events-none opacity-80",
      )}
      aria-label="Alternar entre JC Eventos 204 e JC Kids 204"
    >
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-y-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-jc-gold shadow-sm",
          "transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
          active === "kids" && "translate-x-full",
        )}
      />

      {SECTORS.map((sector) => {
        const isActive = sector.id === active;

        return (
          <button
            key={sector.id}
            type="button"
            onClick={() => go(sector.href)}
            aria-current={isActive ? "page" : undefined}
            title={isActive ? `Você está em ${sector.label}` : `Conhecer ${sector.label}`}
            className={cn(
              "relative z-10 rounded-full px-2.5 py-1.5 text-[0.625rem] font-bold uppercase tracking-wide transition-[color,transform] duration-200 active:scale-[0.97] min-[400px]:px-3 sm:text-[0.6875rem]",
              isActive
                ? "text-jc-black"
                : isKidsPage
                  ? "text-white/90 hover:text-white"
                  : "text-jc-gold-light hover:text-white",
            )}
          >
            <span className="min-[400px]:hidden">{sector.short}</span>
            <span className="hidden min-[400px]:inline">{sector.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
