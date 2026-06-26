"use client";

import Link from "next/link";
import { useFooterLogoHandoff } from "@/hooks/use-footer-logo-handoff";
import { SITE_LOGO_HEADER_HIDE_CLASS, SITE_LOGO_LINK_CLASS } from "@/lib/brand";
import { cn } from "@/lib/utils";

type HeaderBrandLinkProps = {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
};

export function HeaderBrandLink({ href, label, children, className }: HeaderBrandLinkProps) {
  const hideLogo = useFooterLogoHandoff();

  return (
    <Link
      href={href}
      aria-label={label}
      aria-hidden={hideLogo}
      tabIndex={hideLogo ? -1 : undefined}
      className={cn(
        "relative z-[60] touch-manipulation transition-[opacity,transform,max-width] duration-300 ease-out",
        SITE_LOGO_LINK_CLASS,
        hideLogo && SITE_LOGO_HEADER_HIDE_CLASS,
        className,
      )}
    >
      {children}
    </Link>
  );
}
