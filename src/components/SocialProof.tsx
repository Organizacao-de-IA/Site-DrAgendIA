import { WhatsAppButton } from "./WhatsAppButton";

export const SocialProof = () => {
  return (
    <section className="py-16 sm:py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Veja nossa IA em
            <span className="text-primary"> ação</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Demonstração real de como nossa IA agenda consultas automaticamente
            via WhatsApp
          </p>
        </div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Vídeo */}
          <div className="flex justify-center order-1 lg:order-1">
            <div className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] rounded-[2rem] overflow-hidden shadow-xl border border-muted bg-black">
              <video
                className="w-full h-auto object-contain rounded-3xl"
                loop
                muted
                controls
              >
                <source src="/demo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-2 text-center lg:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                Veja como funciona na prática
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Esta demonstração mostra uma conversa real entre um paciente e
                nossa IA. Veja como o agendamento acontece de forma natural e
                eficiente.
              </p>
            </div>

            {/* Lista de benefícios */}
            <div className="space-y-3 sm:space-y-4">
              {[
                "Conversa 100% natural e humanizada",
                "Integração em tempo real com a agenda",
                "Confirmação automática do agendamento",
                "Envio de lembretes personalizados",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 justify-center lg:justify-start"
                >
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm sm:text-base text-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <div className="flex justify-center lg:justify-start">
                <WhatsAppButton
                  variant="cta"
                  size="xl"
                  className="w-full sm:w-auto"
                  message="Olá! Vi a demonstração e quero implementar essa automação no meu consultório"
                >
                  Automatize seu consultório agora!
                </WhatsAppButton>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground mt-3 text-center lg:text-left">
                Demonstração gratuita • Setup em 24h • Sem compromisso
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
