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
    <section className="py-24 relative overflow-hidden">
      {/* Background com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Tecnologia Certificada CFM
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Por que ConsulBot é a{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                revolução médica
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
            </span>{" "}
            que você esperava?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A primeira inteligência artificial brasileira especializada em comunicação médica, 
            desenvolvida com tecnologia de ponta e validação científica
          </p>
        </div>

        {/* Grid de benefícios com cards modernos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            
            return (
              <div 
                key={index} 
                className="group relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Badge com métrica */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground px-4 py-2 rounded-2xl text-sm font-bold shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                  {benefit.metric}
                </div>
                
                {/* Ícone com efeito */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Conteúdo */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </div>
                
                {/* Indicador de progresso */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            );
          })}
        </div>
        
        {/* CTA adicional */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary"></div>
            <span className="text-sm font-medium">Tecnologia validada por especialistas</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>
      </div>
    </section>
  );
};