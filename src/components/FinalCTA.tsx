import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CheckCircle, Clock, ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <div className="mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Pare de perder pacientes e 
              <span className="text-primary"> automatize agora</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Cada dia sem automação é dinheiro perdido. Comece hoje mesmo e veja 
              a diferença em 24 horas.
            </p>
          </div>

          {/* Benefits reminder */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { text: "70% menos faltas", subtext: "Comprovado" },
              { text: "Implementação personalizada", subtext: "Entendemos seu processo" },
              { text: "Demonstração gratuita", subtext: "Sem compromisso" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 text-success mb-3" />
                <div className="font-semibold text-foreground">{item.text}</div>
                <div className="text-sm text-muted-foreground">{item.subtext}</div>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <div className="space-y-6">
            <WhatsAppButton 
              variant="cta" 
              size="xl"
              message="Olá! Quero automatizar meu consultório com IA. Pode me mostrar como funciona?"
            >
              <ArrowRight className="w-5 h-5" />
              Fale com um especialista no WhatsApp
            </WhatsAppButton>

            {/* Alternative CTA */}
            {/* <div className="text-center">
              <p className="text-muted-foreground mb-4">Ou prefere ver uma demonstração primeiro?</p>
              <WhatsAppButton 
                variant="hero" 
                size="lg"
                message="Olá! Gostaria de agendar uma demonstração da automação médica com IA"
              >
                Solicite uma demonstração gratuita
              </WhatsAppButton>
            </div> */}
          </div>

          {/* Urgency */}
          {/* <div className="mt-12 p-6 bg-card/60 backdrop-blur-sm rounded-2xl border border-primary/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Oferta limitada</span>
            </div>
            <p className="text-muted-foreground">
              Implementação gratuita para os primeiros 50 médicos este mês. 
              <span className="text-primary font-medium"> Vagas limitadas!</span>
            </p>
          </div> */}

          {/* Trust indicators */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              ✓ Suporte especializado ✓ Integração garantida ✓ LGPD compliant
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};