import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { Differentials } from "@/components/Differentials";
import { SocialProof } from "@/components/SocialProof";
import { FinalCTA } from "@/components/FinalCTA";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <section id="benefits">
        <Benefits />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="differentials">
        <Differentials />
      </section>
      <SocialProof />
      <FinalCTA />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Index;
