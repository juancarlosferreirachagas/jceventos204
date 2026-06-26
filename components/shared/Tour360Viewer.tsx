"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Loader2, Move } from "lucide-react";
import type { VenueTour } from "@/lib/tours";
import { cn } from "@/lib/utils";
import "@photo-sphere-viewer/core/index.css";

const ReactPhotoSphereViewer = dynamic(
  () => import("react-photo-sphere-viewer").then((mod) => mod.ReactPhotoSphereViewer),
  {
    ssr: false,
    loading: () => <Tour360Loading />,
  },
);

type Tour360ViewerProps = {
  scene: VenueTour;
  theme?: "eventos" | "kids";
};

export function Tour360Viewer({ scene, theme = "eventos" }: Tour360ViewerProps) {
  const [ready, setReady] = useState(false);
  const [hintVisible, setHintVisible] = useState(true);

  return (
    <div className="absolute inset-0">
      {!ready && (
        <>
          {/* Poster enquanto carrega */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={scene.thumb} alt="" className="absolute inset-0 h-full w-full object-cover blur-sm scale-105" aria-hidden />
          <Tour360Loading theme={theme} />
        </>
      )}

      <ReactPhotoSphereViewer
        key={scene.id}
        src={scene.panorama}
        height="100%"
        width="100%"
        containerClass="!absolute !inset-0"
        navbar={["zoom", "fullscreen"]}
        defaultYaw={`${scene.defaultYaw}deg`}
        defaultPitch={`${scene.defaultPitch}deg`}
        defaultZoomLvl={scene.zoom}
        mousewheel
        mousemove
        touchmoveTwoFingers
        lang={{
          zoom: "Zoom",
          zoomOut: "Diminuir zoom",
          zoomIn: "Aumentar zoom",
          move: "Mover",
          fullscreen: "Tela cheia",
          loadError: "Não foi possível carregar o tour 360°",
        }}
        onReady={() => setReady(true)}
        onClick={() => setHintVisible(false)}
      />

      {ready && hintVisible && (
        <div className="pointer-events-none absolute inset-x-0 bottom-5 z-10 flex justify-center px-4 animate-fade-in-up">
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold shadow-xl backdrop-blur-md transition-opacity sm:text-sm",
              theme === "kids" ? "bg-kids-cyan/95 text-white" : "bg-jc-black/85 text-jc-gold-light ring-1 ring-jc-gold/30",
            )}
          >
            <Move className="h-4 w-4 animate-tour-float" aria-hidden />
            {scene.hint}
          </span>
        </div>
      )}
    </div>
  );
}

function Tour360Loading({ theme = "eventos" }: { theme?: "eventos" | "kids" }) {
  return (
    <div
      className={cn(
        "absolute inset-0 z-20 flex flex-col items-center justify-center gap-3",
        theme === "kids" ? "bg-sky-100 text-kids-blue-dark" : "bg-jc-black text-white/80",
      )}
    >
      <Loader2 className={cn("h-8 w-8 animate-spin", theme === "kids" ? "text-kids-cyan" : "text-jc-gold")} />
      <p className="text-sm font-medium">Carregando tour 360°…</p>
    </div>
  );
}
