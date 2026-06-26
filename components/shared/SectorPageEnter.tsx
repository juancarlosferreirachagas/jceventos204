"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type SectorPageEnterProps = {
  children: React.ReactNode;
  sector: "eventos" | "kids";
};

export function SectorPageEnter({ children, sector }: SectorPageEnterProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, [sector]);

  return (
    <div className={cn("sector-page-enter", visible && "sector-page-enter--visible")}>{children}</div>
  );
}
