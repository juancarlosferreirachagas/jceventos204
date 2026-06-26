"use client";

import { Star, ExternalLink } from "lucide-react";
import { IconGoogle } from "@/components/icons";
import { GOOGLE_AVERAGE_RATING, GOOGLE_MAPS_REVIEWS_URL, GOOGLE_REVIEW_COUNT, GOOGLE_REVIEWS, REVIEWS_COPY } from "@/lib/reviews";
import { CtaButton } from "@/components/shared/CtaButton";
import { cn } from "@/lib/utils";

type ReviewsSectionProps = {
  theme?: "eventos" | "kids";
};

export function ReviewsSection({ theme = "eventos" }: ReviewsSectionProps) {
  const hasReviews = GOOGLE_REVIEWS.length > 0;
  const avg = hasReviews ? GOOGLE_AVERAGE_RATING : null;
  const totalCount = hasReviews ? GOOGLE_REVIEW_COUNT : null;

  return (
    <section id="avaliacoes" className={cn("py-16 lg:py-24", theme === "kids" ? "bg-white" : "bg-jc-black")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className={cn("text-sm font-bold uppercase tracking-widest", theme === "kids" ? "text-kids-cyan" : "text-jc-gold")}>
              {REVIEWS_COPY.googleLabel}
            </p>
            <h2 className={cn("mt-2 font-display text-3xl font-bold sm:text-4xl", theme === "kids" ? "text-kids-blue-dark" : "text-white")}>
              {REVIEWS_COPY.title}
            </h2>
            <p className={cn("mt-2 max-w-xl", theme === "kids" ? "text-kids-blue-dark/70" : "text-white/65")}>{REVIEWS_COPY.subtitle}</p>
          </div>
          {avg !== null && (
            <div className="flex flex-col items-start gap-1 sm:items-end">
              <div className="flex items-center gap-2">
                <span className={cn("text-3xl font-bold", theme === "kids" ? "text-kids-blue-dark" : "text-jc-gold")}>
                  {avg.toFixed(1).replace(".", ",")}
                </span>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={cn("h-5 w-5", i < Math.round(avg) ? "fill-kids-yellow text-kids-yellow" : "text-white/20")} />
                  ))}
                </div>
              </div>
              {totalCount !== null && (
                <p className={cn("text-xs", theme === "kids" ? "text-kids-blue-dark/60" : "text-white/50")}>
                  {REVIEWS_COPY.ratingSummary(avg, totalCount)}
                </p>
              )}
            </div>
          )}
        </div>

        {hasReviews ? (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GOOGLE_REVIEWS.map((review) => (
              <article key={review.id} className={cn("rounded-xl border p-5", theme === "kids" ? "border-kids-cyan/20 bg-sky-50" : "border-jc-gold/20 bg-white/5")}>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={cn("h-4 w-4", i < review.rating ? "fill-kids-yellow text-kids-yellow" : theme === "kids" ? "text-kids-blue-dark/20" : "text-white/20")} />
                  ))}
                </div>
                <p className={cn("mt-3 text-sm leading-relaxed", theme === "kids" ? "text-kids-blue-dark/80" : "text-white/80")}>&ldquo;{review.text}&rdquo;</p>
                <footer className={cn("mt-4 text-xs font-semibold", theme === "kids" ? "text-kids-cyan" : "text-jc-gold")}>
                  {review.author}
                  {review.relativeDate && <span className="font-normal opacity-60"> · {review.relativeDate}</span>}
                </footer>
              </article>
            ))}
          </div>
        ) : (
          <div className={cn("mt-10 rounded-xl border p-8 text-center", theme === "kids" ? "border-kids-cyan/30 bg-gradient-to-br from-sky-50 to-cyan-50" : "border-jc-gold/20 bg-white/5")}>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md">
              <IconGoogle size="lg" className="text-[#4285F4]" />
            </div>
            <p className={cn("mx-auto mt-4 max-w-md text-sm leading-relaxed", theme === "kids" ? "text-kids-blue-dark/80" : "text-white/70")}>{REVIEWS_COPY.empty}</p>
            <p className={cn("mt-2 text-xs", theme === "kids" ? "text-kids-blue-dark/50" : "text-white/40")}>{REVIEWS_COPY.addressHint}</p>
          </div>
        )}

        <div className="mt-8 flex justify-center">
          <CtaButton href={GOOGLE_MAPS_REVIEWS_URL} variant="outline" theme={theme} className="gap-2">
            {REVIEWS_COPY.cta}
            <ExternalLink className="h-4 w-4" />
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
