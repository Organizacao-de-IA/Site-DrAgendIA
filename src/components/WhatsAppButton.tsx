import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  message?: string;
  phoneNumber?: string;
  variant?: "whatsapp" | "cta" | "hero";
  size?: "default" | "lg" | "xl";
  children: React.ReactNode;
  className?: string; 
}

export const WhatsAppButton = ({ 
  message = "Olá! Gostaria de saber mais sobre a automação médica com IA.", 
  phoneNumber = "551195400056",
  variant = "whatsapp",
  size = "lg",
  children 
}: WhatsAppButtonProps) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button 
      variant={variant} 
      size={size} 
      onClick={handleClick}
      className="group w-full sm:w-auto"
    >
      <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
      {children}
    </Button>
  );
};