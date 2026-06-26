"use client";

import { useCallback, useEffect, useState } from "react";
import { SITE_FOOTER_ID } from "@/lib/brand";

const HEADER_ID = "site-header";

export function useFooterLogoHandoff() {
  const [footerOverlaps, setFooterOverlaps] = useState(false);

  const update = useCallback(() => {
    const header = document.getElementById(HEADER_ID);
    const footer = document.getElementById(SITE_FOOTER_ID);
    if (!header || !footer) {
      setFooterOverlaps(false);
      return;
    }
    const headerBottom = header.getBoundingClientRect().bottom;
    const footerTop = footer.getBoundingClientRect().top;
    setFooterOverlaps(footerTop < headerBottom + 12);
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(update);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  return footerOverlaps;
}
