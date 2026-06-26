import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectorRouteLink } from "@/components/shared/SectorRouteLink";
import { GATEWAY } from "@/lib/site-copy";
import { cn } from "@/lib/utils";

export function GatewaySplit() {
  return (
    <section className="grid lg:grid-cols-2">
      <GatewayPanel {...GATEWAY.eventos} theme="eventos" />
      <GatewayPanel {...GATEWAY.kids} theme="kids" />
    </section>
  );
}

function GatewayPanel({
  href,
  image,
  label,
  headline,
  cta,
  theme,
}: {
  href: "/" | "/eventos" | "/kids";
  image: { src: string; alt: string; position?: string };
  label: string;
  headline: string;
  cta: string;
  theme: "eventos" | "kids";
}) {
  return (
    <SectorRouteLink
      href={href}
      className="group relative flex min-h-[min(48svh,460px)] flex-col justify-end lg:min-h-[min(100vh,680px)]"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        quality={90}
        className={cn("object-cover transition-transform duration-500 group-hover:scale-[1.02]", image.position)}
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div
        className={cn(
          "absolute inset-0",
          theme === "kids"
            ? "bg-gradient-to-t from-kids-blue-dark via-kids-blue-dark/70 to-kids-cyan/25"
            : "bg-gradient-to-t from-jc-black via-jc-black/65 to-jc-black/20",
        )}
      />
      <div className="relative z-10 p-6 sm:p-10">
        <p
          className={cn(
            "text-xs font-bold uppercase tracking-[0.25em]",
            theme === "kids" ? "text-kids-yellow" : "text-jc-gold-light",
          )}
        >
          {label}
        </p>
        <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          {headline}
        </h2>
        <span
          className={cn(
            "mt-6 inline-flex items-center gap-2 rounded-sm px-5 py-2.5 text-sm font-bold transition-[background-color,transform] duration-300",
            theme === "kids"
              ? "bg-jc-gold text-kids-blue-dark group-hover:bg-jc-gold-light"
              : "bg-jc-gold text-jc-black group-hover:bg-jc-gold-light",
          )}
        >
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </SectorRouteLink>
  );
}
