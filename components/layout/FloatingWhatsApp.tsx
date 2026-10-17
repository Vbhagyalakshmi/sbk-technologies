import { MessageCircle } from "lucide-react";
import { WA_MESSAGES, whatsappUrl } from "@/lib/whatsapp";

// Sits bottom-right with safe-area padding; small enough not to cover form controls on mobile.
export default function FloatingWhatsApp() {
  return (
    <a href={whatsappUrl(WA_MESSAGES.general)} target="_blank" rel="noopener noreferrer" aria-label="Chat with SBK Technologies on WhatsApp"
       className="fixed bottom-4 right-4 z-40 inline-flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric sm:size-14"
       style={{ marginBottom: "env(safe-area-inset-bottom)" }}>
      <MessageCircle size={26} aria-hidden />
    </a>
  );
}
