import { useEffect, useRef } from "react";
import { Scissors, Sparkles, Users, CheckCircle, Phone } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { WhatsAppButton, FloatingWhatsAppButton } from "@/components/WhatsAppButton";
import { ImageLightbox } from "@/components/ImageLightbox";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import suit1 from "@assets/stock_images/elegant_tailored_sui_7c838ae5.jpg";
import suit2 from "@assets/stock_images/elegant_tailored_sui_3e19a548.jpg";
import suit3 from "@assets/stock_images/elegant_tailored_sui_0b2f5e75.jpg";
import suit4 from "@assets/stock_images/elegant_tailored_sui_8e6a401a.jpg";

const STORE_IMAGE = "https://i.imgur.com/MorCtFi.jpeg";

export default function Home() {
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <FloatingWhatsAppButton />

      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
        
        <div className="absolute inset-0 z-0">
          <iframe
            src="https://streamable.com/e/op4x8b?autoplay=1&muted=1&loop=1"
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
            className="w-full h-full object-cover"
            title="VM-TERNOS Apresentação"
            data-testid="video-hero"
          />
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8 pt-24 md:pt-32">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-2xl">
              Alfaiataria Sob Medida com Mais de 5 Anos de Tradição
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
              VM-TERNOS — mais de 5 anos de experiência em confecção e alfaiataria. 
              Trabalhamos com peças sob medida, acabamento refinado e atendimento personalizado. 
              Converse conosco pelo WhatsApp e saiba como podemos criar o terno ideal para você.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <WhatsAppButton 
                variant="default" 
                size="lg"
                className="text-lg px-8 py-6 bg-[#25D366] text-white border-[#25D366] shadow-2xl backdrop-blur-md"
              />
              <Badge variant="secondary" className="px-4 py-2 text-sm backdrop-blur-md bg-white/20 text-white border-white/30">
                Resposta em minutos via WhatsApp
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="sobre" 
        ref={addToRefs}
        className="py-24 md:py-32 opacity-0 translate-y-8 transition-all duration-1000"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={STORE_IMAGE} 
                alt="Loja VM-TERNOS" 
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
                data-testid="img-store"
              />
            </div>
            
            <div className="order-1 md:order-2 space-y-6">
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Sobre Nós
              </p>
              
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                Tradição e Qualidade em Cada Detalhe
              </h2>
              
              <div className="space-y-4 text-lg md:text-xl leading-relaxed text-foreground">
                <p>
                  Há mais de 5 anos a VM-TERNOS cria ternos e peças sob medida com atenção artesanal 
                  e acabamento impecável. Unimos tradição e técnica para oferecer peças que valorizam 
                  o estilo individual de cada cliente, com materiais selecionados e cuidado em todos os detalhes.
                </p>
                
                <p>
                  Nosso compromisso é entregar qualidade, conforto e sofisticação — do corte ao último ponto — 
                  para que você vista confiança em qualquer ocasião. Entre em contato pelo WhatsApp e descubra 
                  como personalizar seu próximo terno.
                </p>
              </div>

              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">Mais de 5 anos de experiência em alfaiataria</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">Peças exclusivas e personalizadas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">Materiais premium e acabamento impecável</p>
                </div>
              </div>

              <div className="pt-6">
                <WhatsAppButton size="lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section 
        ref={addToRefs}
        className="py-20 md:py-28 bg-card opacity-0 translate-y-8 transition-all duration-1000"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Nossa Expertise
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-card-foreground">
              Excelência em Alfaiataria
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <Card className="hover-elevate transition-all duration-300" data-testid="card-sob-medida">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Scissors className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-card-foreground">
                  Sob Medida
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Cada peça é confeccionada especialmente para você, 
                  respeitando suas medidas e preferências pessoais.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300" data-testid="card-acabamento">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-card-foreground">
                  Acabamento Impecável
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Atenção artesanal aos detalhes, com técnicas tradicionais 
                  e materiais de alta qualidade.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300" data-testid="card-atendimento">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-card-foreground">
                  Atendimento Personalizado
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Consultoria de estilo e acompanhamento em todas as etapas 
                  da confecção do seu terno.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section 
        id="galeria" 
        ref={addToRefs}
        className="py-24 md:py-32 opacity-0 translate-y-8 transition-all duration-1000"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Nosso Trabalho
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
              Galeria de Alfaiataria
            </h2>
          </div>

          <ImageLightbox 
            images={[
              { src: suit1, alt: "Terno sob medida - Alfaiataria VM-TERNOS", id: 1 },
              { src: suit2, alt: "Acabamento refinado e tecidos premium", id: 2 },
              { src: suit3, alt: "Peças únicas, feitas sob medida", id: 3 },
              { src: suit4, alt: "Elegância e sofisticação em cada detalhe", id: 4 }
            ]}
          />
        </div>
      </section>

      {/* Video Presentation Section */}
      <section 
        ref={addToRefs}
        className="py-20 md:py-28 bg-card opacity-0 translate-y-8 transition-all duration-1000"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
                Apresentação
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-card-foreground mb-6">
                Conheça Nossa Alfaiataria
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Assista ao vídeo e descubra como trabalhamos para criar peças únicas
              </p>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-2xl" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://streamable.com/e/op4x8b"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                title="Apresentação VM-TERNOS"
                data-testid="video-presentation"
              />
            </div>

            <div className="text-center mt-8">
              <p className="text-xl font-medium text-card-foreground mb-6">
                Gostou? Fale Conosco
              </p>
              <WhatsAppButton size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="contato" 
        ref={addToRefs}
        className="py-24 md:py-32 bg-primary text-primary-foreground opacity-0 translate-y-8 transition-all duration-1000"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Pronto para Seu Terno Sob Medida?
            </h2>
            
            <p className="text-xl md:text-2xl leading-relaxed opacity-95">
              Entre em contato agora mesmo pelo WhatsApp e descubra como podemos criar 
              a peça perfeita para você, com toda a qualidade e exclusividade da VM-TERNOS.
            </p>

            <div className="pt-6">
              <WhatsAppButton 
                variant="outline" 
                size="lg"
                className="text-lg px-10 py-6 bg-white/10 backdrop-blur-md border-white/30 text-white"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 text-lg">
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6" />
                <span className="font-medium">+55 35 98433-3493</span>
              </div>
              <div className="hidden sm:block text-white/50">•</div>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                Atendimento rápido
              </Badge>
              <div className="hidden sm:block text-white/50">•</div>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                Sem compromisso
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div className="space-y-4">
              <img 
                src="https://i.imgur.com/nkUMX49.jpeg" 
                alt="VM-TERNOS" 
                className="h-12 w-auto object-contain"
                data-testid="img-footer-logo"
              />
              <p className="text-muted-foreground leading-relaxed">
                Alfaiataria e confecção sob medida com mais de 5 anos de tradição. 
                Qualidade, acabamento refinado e atendimento personalizado.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4 text-foreground">Links Rápidos</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-sobre"
                >
                  Sobre
                </button>
                <button 
                  onClick={() => document.getElementById("galeria")?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-galeria"
                >
                  Galeria
                </button>
                <button 
                  onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-contato"
                >
                  Contato
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4 text-foreground">Contato</h3>
              <div className="space-y-3">
                <a 
                  href="https://wa.me/5535984333493" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-whatsapp"
                >
                  <Phone className="h-4 w-4" />
                  <span>+55 35 98433-3493</span>
                </a>
                <div className="pt-3">
                  <WhatsAppButton />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} VM-TERNOS. Todos os direitos reservados.</p>
            <p className="mt-2 text-sm">
              Alfaiataria e confecção sob medida com mais de 5 anos de experiência.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
