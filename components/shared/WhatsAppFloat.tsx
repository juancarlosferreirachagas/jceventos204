import { IconWhatsapp } from "@/components/icons";
import { eventosWhatsApp, kidsWhatsApp } from "@/lib/site-copy";
import { getWhatsAppDisplay } from "@/lib/site";
import { cn } from "@/lib/utils";

type WhatsAppFloatProps = {
  theme?: "eventos" | "kids";
};

export function WhatsAppFloat({ theme = "eventos" }: WhatsAppFloatProps) {
  const href = theme === "kids" ? kidsWhatsApp() : eventosWhatsApp();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-105 active:scale-95 md:bottom-8 md:right-8",
        theme === "kids" ? "bg-kids-cyan shadow-kids-cyan/40" : "bg-[#25D366] shadow-black/30",
      )}
      aria-label={`WhatsApp ${getWhatsAppDisplay()}`}
    >
      <IconWhatsapp size="xl" className="text-white" />
    </a>
  );
}
