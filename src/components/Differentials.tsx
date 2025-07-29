import { Card } from "@/components/ui/card";
import { Smartphone, Calendar, Users, Headphones, Shield, Zap } from "lucide-react";

const differentials = [
  {
    icon: Smartphone,
    title: "WhatsApp Nativo",
    description: "Funciona direto no WhatsApp que seus pacientes já usam diariamente",
    highlight: "Sem apps novos"
  },
  {
    icon: Calendar,
    title: "Integração Total",
    description: "Conecta com Google Calendar e principais agendas médicas",
    highlight: "Sua agenda atual"
  },
  {
    icon: Users,
    title: "IA Humanizada",
    description: "Treinada especificamente para comunicação médica empática e profissional",
    highlight: "95% aprovação"
  },
  {
    icon: Headphones,
    title: "Suporte Especializado",
    description: "Equipe técnica disponível para médicos com atendimento prioritário",
    highlight: "Suporte VIP"
  },
  {
    icon: Shield,
    title: "Conformidade LGPD",
    description: "Dados criptografados e políticas de privacidade específicas para área médica",
    highlight: "100% seguro"
  },
  {
    icon: Zap,
    title: "Setup Rápido",
    description: "Implementação em até 24 horas sem alterar seus processos atuais",
    highlight: "24h ativo"
  }
];

export const Differentials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            O que nos torna 
            <span className="text-primary"> únicos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Diferenciais exclusivos que fazem nossa solução ser a escolha de centenas de médicos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((differential, index) => {
            const Icon = differential.icon;
            return (
              <Card key={index} className="group p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-card/90 backdrop-blur-sm relative overflow-hidden">
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="px-3 py-1 bg-success/10 text-success rounded-full text-sm font-medium">
                      {differential.highlight}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {differential.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {differential.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Trust section */}
        <div className="mt-16 text-center">
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-primary/10">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Médicos ativos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50k+</div>
                <div className="text-muted-foreground">Agendamentos automatizados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Taxa de satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};