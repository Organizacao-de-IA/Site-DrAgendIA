import { Card } from "@/components/ui/card";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Play, Star } from "lucide-react";

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
            Demonstração real de como nossa IA agenda consultas automaticamente
            via WhatsApp
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Video Demo */}
          <div className="flex justify-center">
            <div className="max-w-[300px] rounded-[2rem] overflow-hidden shadow-xl border border-muted bg-black">
              <video
                className="w-full h-full object-contain rounded-3xl"
                loop
                muted
                controls
              >
                <source src="/demo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Veja como funciona na prática
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Esta demonstração mostra uma conversa real entre um paciente e
                nossa IA. Veja como o agendamento acontece de forma natural e
                eficiente.
              </p>
            </div>

            {/* Key features highlighted */}
            <div className="space-y-4">
              {[
                "Conversa 100% natural e humanizada",
                "Integração em tempo real com a agenda",
                "Confirmação automática do agendamento",
                "Envio de lembretes personalizados",
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
