import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CheckCircle, Bot, Calendar, MessageSquare } from "lucide-react";
import heroDemo from "@/assets/hero-demo.png";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent flex items-center relative overflow-hidden">
      {/* Background pattern with Dr. Agendia style */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.2),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.15),transparent_50%)]"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                AGENDAMENTOS
                <span className="block text-accent drop-shadow-lg">
                  AUTOMÁTICOS
                </span>
                <span className="block text-4xl lg:text-5xl font-bold text-white/90">
                  com IA Especializada
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed font-medium">
                <span className="text-accent font-bold">Dr AgendIA</span> automatiza o agendamento de consultas da sua clínica
                usando inteligência artificial no WhatsApp. 
                <span className="block mt-2 text-white font-semibold">
                  Mais agilidade, menos faltas, sem sobrecarregar sua equipe.
                </span>
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              {[
                "Desenvolvido com foco em fluxos reais de atendimento médico",
                "Linguagem otimizada com base em conversas reais e revisão de profissionais da saúde",
                "Alinhado às diretrizes da LGPD para proteger dados sensíveis",
                "Agendamento automático com plataformas compatíveis",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-white/90 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton
                variant="cta"
                size="xl"
                message="Olá! Quero conhecer o DrAgendIA e como pode revolucionar meu consultório"
              >
                Teste DrAgendIA gratuitamente
              </WhatsAppButton>

              <WhatsAppButton
                variant="hero"
                size="xl"
                message="Gostaria de ver uma demonstração da IA médica DrAgendIA"
              >
                Ver demonstração completa
              </WhatsAppButton>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-accent" />
                <span className="text-sm text-white/80 font-medium">
                  IA com foco médico
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-accent" />
                <span className="text-sm text-white/80 font-medium">
                  Gestão integrada
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-accent" />
                <span className="text-sm text-white/80 font-medium">
                  Comunicação Humanizada
                </span>
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
              Alto volume de agendamentos
            </div>
            {/* <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              IA Médica Exclusiva
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
