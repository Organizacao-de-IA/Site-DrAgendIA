import { Card } from "@/components/ui/card";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MessageSquare, Brain, Calendar, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Paciente envia mensagem",
    description: "Seu paciente manda uma mensagem no WhatsApp do consultório a qualquer hora",
    detail: "24 horas por dia, 7 dias por semana"
  },
  {
    icon: Brain,
    title: "IA entende e responde",
    description: "Nossa IA especializada em saúde compreende a solicitação e responde de forma humanizada",
    detail: "Treinada com milhares de conversas médicas"
  },
  {
    icon: Calendar,
    title: "Agenda automaticamente",
    description: "O sistema consulta sua agenda em tempo real e oferece horários disponíveis",
    detail: "Integração direta com sua agenda atual"
  },
  {
    icon: CheckCircle,
    title: "Confirmação e lembretes",
    description: "Agendamento confirmado e lembretes automáticos enviados antes da consulta",
    detail: "Reduz faltas em até 70%"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-6 px-2">
            Como funciona nosso 
            <span className="text-primary"> agente de IA</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 px-2">
            Um assistente virtual que simula uma secretária experiente, 
            mas nunca tira férias e trabalha 24 horas por dia
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 px-2 sm:px-0">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="text-sm text-primary font-medium">
                        {step.detail}
                      </div>
                    </div>
                  </div>
                </Card>
                
                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-primary-glow"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-primary border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pronto para automatizar seu consultório?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Demonstração gratuita em menos de 10 minutos
            </p>
            <WhatsAppButton 
              variant="cta" 
              size="xl"
              message="Olá! Quero ver uma demonstração de como funciona a automação para consultórios médicos"
            >
              Quero meu agente de IA
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
};