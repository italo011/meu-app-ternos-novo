import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/5535984333493?text=Ol%C3%A1!%20Tenho%20interesse%20em%20saber%20mais%20sobre%20os%20ternos%20da%20VM-TERNOS.";

interface WhatsAppButtonProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  children?: React.ReactNode;
  iconOnly?: boolean;
}

export function WhatsAppButton({ 
  variant = "default", 
  size = "default",
  className = "",
  children = "Falar no WhatsApp",
  iconOnly = false
}: WhatsAppButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      asChild
      data-testid="button-whatsapp"
    >
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noopener noreferrer"
        className="gap-2"
      >
        <MessageCircle className={iconOnly ? "h-5 w-5" : "h-4 w-4"} />
        {!iconOnly && <span>{children}</span>}
      </a>
    </Button>
  );
}

export function FloatingWhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 animate-float">
      <Button
        size="icon"
        className="h-14 w-14 md:h-16 md:w-16 rounded-full shadow-2xl bg-[#25D366] text-white border-[#25D366]"
        asChild
        data-testid="button-floating-whatsapp"
      >
        <a 
          href={WHATSAPP_LINK} 
          target="_blank" 
          rel="noopener noreferrer"
          title="Clique para conversar com a VM-TERNOS"
          aria-label="Clique para conversar com a VM-TERNOS no WhatsApp"
        >
          <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
        </a>
      </Button>
    </div>
  );
}
