import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "./WhatsAppButton";

const LOGO_URL = "https://i.imgur.com/nkUMX49.jpeg";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-md shadow-md" 
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 hover-elevate rounded-md p-2 transition-all"
            data-testid="button-logo"
          >
            <img 
              src={LOGO_URL} 
              alt="VM-TERNOS Logo" 
              className="h-10 md:h-12 w-auto object-contain"
            />
            <span className="font-serif text-xl md:text-2xl font-bold text-foreground hidden sm:block">
              VM-TERNOS
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-sobre"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection("galeria")}
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-galeria"
            >
              Galeria
            </button>
            <button 
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-contato"
            >
              Contato
            </button>
            <WhatsAppButton variant="default" />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-background/98 backdrop-blur-md md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
            <button 
              onClick={() => scrollToSection("sobre")}
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              data-testid="link-sobre-mobile"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection("galeria")}
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              data-testid="link-galeria-mobile"
            >
              Galeria
            </button>
            <button 
              onClick={() => scrollToSection("contato")}
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              data-testid="link-contato-mobile"
            >
              Contato
            </button>
            <WhatsAppButton variant="default" size="lg" />
          </div>
        </div>
      )}
    </>
  );
}
