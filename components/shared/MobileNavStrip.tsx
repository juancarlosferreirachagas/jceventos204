import { cn } from "@/lib/utils";

type NavItem = { href: string; label: string };

type MobileNavStripProps = {
  items: readonly NavItem[];
  linkClassName: string;
  className?: string;
  "aria-label": string;
};

export function MobileNavStrip({ items, linkClassName, className, "aria-label": ariaLabel }: MobileNavStripProps) {
  return (
    <nav className={cn("scroll-fluid-x flex gap-2 px-4 py-3 xl:hidden", className)} aria-label={ariaLabel}>
      {items.map((item) => (
        <a key={item.href} href={item.href} className={cn("snap-fluid shrink-0", linkClassName)}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
