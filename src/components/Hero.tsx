import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CheckCircle, Bot, Calendar, MessageSquare } from "lucide-react";
import heroDemo from "@/assets/hero-demo.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800 flex items-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Transforme consultas médicas com 
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Inteligência Artificial</span> humanizada
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                ConsulBot revoluciona a gestão médica com IA especializada em comunicação terapêutica, 
                otimizando agendamentos e criando conexões humanas autênticas com seus pacientes.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              {[
                "Primeira IA com CRM médico exclusivo no Brasil",
                "Linguagem médica certificada por especialistas",
                "Conformidade total com CFM e LGPD médica",
                "Integração nativa com softwares hospitalares"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-gray-200">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton 
                variant="cta" 
                size="xl"
                message="Olá! Quero conhecer o ConsulBot e como pode revolucionar meu consultório"
              >
                Teste ConsulBot gratuitamente
              </WhatsAppButton>
              
              <WhatsAppButton 
                variant="hero" 
                size="xl"
                message="Gostaria de ver uma demonstração da IA médica ConsulBot"
              >
                Ver demonstração completa
              </WhatsAppButton>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-purple-400" />
                <span className="text-sm text-gray-400">IA Certificada CFM</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-400" />
                <span className="text-sm text-gray-400">CRM Médico Integrado</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-400" />
                <span className="text-sm text-gray-400">Comunicação Humanizada</span>
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
              CFM Certificado
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              IA Médica Exclusiva
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};