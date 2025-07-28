import { Card } from "@/components/ui/card";
import { Clock, Users, TrendingUp, Shield, Zap, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Certificação Médica",
    description: "Única IA auditada por especialistas em ética médica e comunicação terapêutica",
    metric: "CFM Aprovado"
  },
  {
    icon: TrendingUp,
    title: "ROI Comprovado",
    description: "Aumento médio de 60% na retenção de pacientes em consultórios parceiros",
    metric: "+60% retenção"
  },
  {
    icon: HeartHandshake,
    title: "Linguagem Empática",
    description: "Treinamento específico em comunicação médica baseado em protocolos hospitalar",
    metric: "98% aprovação"
  },
  {
    icon: Clock,
    title: "Gestão Inteligente",
    description: "Otimização automática de horários considerando tipo de consulta e duração",
    metric: "5h/dia economizadas"
  },
  {
    icon: Users,
    title: "Triagem Automatizada",
    description: "Pré-consulta inteligente que identifica urgências e direciona adequadamente",
    metric: "85% eficiência"
  },
  {
    icon: Zap,
    title: "Integração Médica",
    description: "Conecta com principais softwares médicos (Tasy, MV, Philips) nativamente",
    metric: "15min setup"
  }
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            O que faz ConsulBot ser 
            <span className="text-primary">único no mercado</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvido exclusivamente para práticas médicas com foco em resultados mensuráveis
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