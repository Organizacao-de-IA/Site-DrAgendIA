import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CheckCircle, Bot, Calendar, MessageSquare } from "lucide-react";
import heroDemo from "@/assets/hero-demo.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-primary/10 flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Nunca mais perca um 
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent"> agendamento</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Nossa IA atende seus pacientes 24/7 no WhatsApp, agenda automaticamente 
                e reduz faltas em até 70%. Integração direta com sua agenda médica.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              {[
                "Redução de 70% nas faltas aos consultórios",
                "Atendimento automatizado 24 horas por dia",
                "Integração com sua agenda atual",
                "IA com atendimento humanizado"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton 
                variant="cta" 
                size="xl"
                message="Olá! Quero saber mais sobre como automatizar meu consultório com IA"
              >
                Solicite uma demonstração gratuita
              </WhatsAppButton>
              
              <WhatsAppButton 
                variant="hero" 
                size="xl"
                message="Olá! Gostaria de ver como funciona o agente de IA para médicos"
              >
                Ver como funciona
              </WhatsAppButton>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">IA Avançada</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Integração Total</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">WhatsApp Nativo</span>
              </div>
            </div>
          </div>

          {/* Demo Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroDemo} 
                alt="Demonstração da automação médica funcionando"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              70% menos faltas
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              24/7 ativo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};