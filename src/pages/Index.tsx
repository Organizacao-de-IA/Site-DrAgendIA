import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { Differentials } from "@/components/Differentials";
import { SocialProof } from "@/components/SocialProof";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <HowItWorks />
      <Differentials />
      <SocialProof />
      <FinalCTA />
    </div>
  );
};

export default Index;
