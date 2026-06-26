/**
 * Tipos compartilhados do sistema de mídia.
 * @see lib/media/README.md — guia de manutenção
 */

export type ImageCrop = `object-${string}`;

export type MediaImage = {
  /** Caminho em public/ — ex.: /images/eventos/hero.jpg */
  src: string;
  alt: string;
  /** Classes Tailwind para object-position */
  position?: ImageCrop;
};

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: string;
  className: string;
  position?: ImageCrop;
};

export type ServiceItem = {
  title: string;
  description: string;
  image: MediaImage;
  cta: string;
  whatsappMessage: string;
};
