import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
  href: string;
  image: { src: string; alt: string; position?: string };
  label: string;
  headline: string;
  cta: string;
  theme: "eventos" | "kids";
}) {
  return (
    <Link
      href={href}
      className="group relative flex min-h-[min(55svh,520px)] flex-col justify-end lg:min-h-full"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        quality={90}
        className={cn("object-cover transition-transform duration-700 group-hover:scale-105", image.position)}
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
      <div className="relative z-10 p-8 sm:p-12">
        <p
          className={cn(
            "text-xs font-bold uppercase tracking-[0.25em]",
            theme === "kids" ? "text-kids-yellow" : "text-jc-gold-light",
          )}
        >
          {label}
        </p>
        <h2 className="text-flyer-headline mt-3 font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          {headline}
        </h2>
        <span
          className={cn(
            "mt-6 inline-flex items-center gap-2 rounded-sm px-5 py-2.5 text-sm font-bold transition-colors",
            theme === "kids"
              ? "bg-kids-yellow text-kids-blue-dark group-hover:bg-[#ffe033]"
              : "bg-cta-bar text-cta-text group-hover:bg-[#ffe033]",
          )}
        >
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
