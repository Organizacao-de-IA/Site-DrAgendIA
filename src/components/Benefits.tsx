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
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Por que ConsulBot é a 
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">revolução médica</span> que você esperava?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            A primeira inteligência artificial brasileira especializada em comunicação médica, 
            desenvolvida com tecnologia de ponta e validação científica
          </p>
        </div>

        {/* Layout alternativo - Lista com separadores */}
        <div className="max-w-5xl mx-auto space-y-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`flex items-center gap-12 ${isEven ? 'flex-row' : 'flex-row-reverse'} max-lg:flex-col max-lg:text-center`}>
                {/* Ícone e métrica */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/30">
                      <Icon className="w-12 h-12 text-primary" />
                    </div>
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-accent to-yellow-400 text-foreground px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      {benefit.metric}
                    </div>
                  </div>
                </div>
                
                {/* Conteúdo */}
                <div className={`flex-1 ${isEven ? 'text-left' : 'text-right'} max-lg:text-center`}>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};