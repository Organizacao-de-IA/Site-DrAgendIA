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
                Revolucione seu consultório com 
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">IA Médica</span> especializada
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                ConsulBot é a primeira IA brasileira treinada especificamente para comunicação médica. 
                Gerencie agendamentos, lembretes e atendimento inicial com linguagem empática e profissional.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              {[
                "Primeira IA com CRM médico exclusivo no Brasil",
                "Linguagem médica certificada por especialistas",
                "Conformidade total com CFM e LGPD médica",
                "Integração nativa com softwares hospitalares"
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
                message="Olá! Quero conhecer o ConsulBot e como pode revolucionar meu consultório"
              >
                Teste ConsulBot gratuitamente
              </WhatsAppButton>
              
              <WhatsAppButton 
                variant="hero" 
                size="xl"
                message="Gostaria de ver uma demonstração da IA médica ConsulBot"
              >
                Ver demonstração completa
              </WhatsAppButton>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">IA Certificada CFM</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">CRM Médico Integrado</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Comunicação Humanizada</span>
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
              CFM Certificado
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              IA Médica Exclusiva
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};