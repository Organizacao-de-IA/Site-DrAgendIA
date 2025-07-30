import { Card } from "@/components/ui/card";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Play, Star } from "lucide-react";
import demoThumbnail from "@/assets/demo-video-thumbnail.jpg";

export const SocialProof = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Veja nossa IA em
            <span className="text-primary"> ação</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Demonstração real de como nossa IA agenda consultas automaticamente via WhatsApp
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Video Demo */}
          <div className="relative group cursor-pointer">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={demoThumbnail}
                alt="Demonstração do agente de IA funcionando no WhatsApp"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 ml-1" />
                </div>
              </div>
            </div>

            {/* Demo label */}
            <div className="absolute -top-4 -left-4 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              Demo real
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Veja como funciona na prática
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Esta demonstração mostra uma conversa real entre um paciente e nossa IA.
                Veja como o agendamento acontece de forma natural e eficiente.
              </p>
            </div>

            {/* Key features highlighted */}
            <div className="space-y-4">
              {[
                "Conversa 100% natural e humanizada",
                "Integração em tempo real com a agenda",
                "Confirmação automática do agendamento",
                "Envio de lembretes personalizados"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            {/* <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-foreground italic mb-3">
                "Em 2 semanas nossa taxa de no-show caiu de 30% para 8%. 
                A IA é tão natural que os pacientes nem percebem que não é uma pessoa real."
              </blockquote>
              <cite className="text-muted-foreground font-medium">
                Dr. Roberto Silva - Cardiologista
              </cite>
            </Card> */}

            {/* CTA */}
            <div className="pt-4">
              <div className="w-full sm:w-fit">
                <WhatsAppButton
                  variant="cta"
                  size="xl"
                  message="Olá! Vi a demonstração e quero implementar essa automação no meu consultório"
                >
                  Automatize seu consultório agora!
                </WhatsAppButton>
              </div>

              <p className="text-sm text-muted-foreground mt-3">
                Demonstração gratuita • Setup em 24h • Sem compromisso
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};