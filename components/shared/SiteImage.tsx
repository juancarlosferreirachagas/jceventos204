import Image from "next/image";
import { cn } from "@/lib/utils";
import type { MediaImage } from "@/lib/media";

type SiteImageProps = {
  media: MediaImage;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  sizes?: string;
  width?: number;
  height?: number;
};

export function SiteImage({
  media,
  fill = true,
  priority = false,
  className,
  sizes = "100vw",
  width,
  height,
}: SiteImageProps) {
  const imgClass = cn("object-cover", media.position, className);

  if (fill) {
    return (
      <Image
        src={media.src}
        alt={media.alt}
        fill
        priority={priority}
        quality={90}
        className={imgClass}
        sizes={sizes}
      />
    );
  }

  return (
    <Image
      src={media.src}
      alt={media.alt}
      width={width ?? 1200}
      height={height ?? 800}
      priority={priority}
      quality={90}
      className={imgClass}
      sizes={sizes}
    />
  );
}
