"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition, type ComponentProps } from "react";
import { navigateWithTransition } from "@/lib/view-transition";

type SectorRouteLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: "/" | "/eventos" | "/kids";
};

export function SectorRouteLink({ href, onClick, ...props }: SectorRouteLinkProps) {
  const router = useRouter();
  const [, startTransition] = useTransition();

  return (
    <Link
      href={href}
      {...props}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;

        event.preventDefault();
        navigateWithTransition(() => {
          startTransition(() => router.push(href));
        });
      }}
    />
  );
}
