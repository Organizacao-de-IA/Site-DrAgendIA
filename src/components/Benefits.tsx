import { Card } from "@/components/ui/card";
import { Clock, Users, TrendingUp, Shield, Zap, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Economia de Tempo",
    description: "Sua equipe economiza até 4 horas por dia que gastava com agendamentos manuais",
    metric: "4h/dia economizadas"
  },
  {
    icon: Users,
    title: "Redução de Faltas",
    description: "Lembretes automáticos e confirmações reduzem no-shows drasticamente",
    metric: "70% menos faltas"
  },
  {
    icon: TrendingUp,
    title: "Mais Agendamentos",
    description: "Atendimento 24/7 captura pacientes que ligam fora do horário comercial",
    metric: "+40% agendamentos"
  },
  {
    icon: Shield,
    title: "Dados Seguros",
    description: "Criptografia de ponta e conformidade com LGPD para proteger informações médicas",
    metric: "100% seguro"
  },
  {
    icon: Zap,
    title: "Integração Rápida",
    description: "Setup em menos de 24 horas sem alterar sua agenda atual",
    metric: "24h para ativar"
  },
  {
    icon: HeartHandshake,
    title: "Atendimento Humanizado",
    description: "IA treinada especificamente para comunicação médica empática",
    metric: "95% satisfação"
  }
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Por que médicos escolhem nossa 
            <span className="text-primary"> automação</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Benefícios comprovados que transformam a gestão do seu consultório desde o primeiro dia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card/80 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{benefit.metric}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};