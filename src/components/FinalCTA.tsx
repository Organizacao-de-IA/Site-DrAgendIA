import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CheckCircle, ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Headline */}
          <div className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground leading-snug mb-4 sm:mb-6">
              Pare de perder pacientes e
              <span className="text-primary"> automatize agora</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Cada dia sem automação é dinheiro perdido. Comece hoje mesmo e
              veja a diferença em 24 horas.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
            {[
              { text: "70% menos faltas", subtext: "Comprovado" },
              {
                text: "Implementação personalizada",
                subtext: "Entendemos seu processo",
              },
              { text: "Demonstração gratuita", subtext: "Sem compromisso" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center px-4"
              >
                <CheckCircle className="w-8 h-8 text-success mb-3" />
                <div className="font-semibold text-foreground text-base sm:text-lg">
                  {item.text}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">
                  {item.subtext}
                </div>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <div className="space-y-6">
            <div className="flex justify-center">
              <WhatsAppButton
                variant="cta"
                size="xl"
                className="w-full sm:w-auto"
                message="Olá! Quero automatizar meu consultório com IA. Pode me mostrar como funciona?"
              >
                <ArrowRight className="w-5 h-5" />
                Fale com um especialista no WhatsApp
              </WhatsAppButton>
            </div>

            {/* Alternative CTA opcional */}
            {/* <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Ou prefere ver uma demonstração primeiro?
              </p>
              <WhatsAppButton
                variant="hero"
                size="lg"
                className="w-full sm:w-auto"
                message="Olá! Gostaria de agendar uma demonstração da automação médica com IA"
              >
                Solicite uma demonstração gratuita
              </WhatsAppButton>
            </div> */}
          </div>

          {/* Trust indicators */}
          <div className="mt-8 sm:mt-10 text-center">
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              ✓ Suporte especializado &nbsp;•&nbsp; ✓ Integração garantida
              &nbsp;•&nbsp; ✓ LGPD compliant
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
