import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const FloatingWhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Show tooltip after 3 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    // Hide tooltip after 8 seconds
    const hideTooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(tooltipTimer);
      clearTimeout(hideTooltipTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Vi seu site e gostaria de automatizar meu consultório com IA. Podem me ajudar?");
    const phoneNumber = "5511999999999";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCloseTooltip = () => {
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-4 w-64 bg-card border border-border rounded-lg shadow-lg p-4 animate-fade-in">
          <button 
            onClick={handleCloseTooltip}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
          <p className="text-sm text-card-foreground mb-2 font-medium">
            💡 Automatize seu consultório agora!
          </p>
          <p className="text-xs text-muted-foreground">
            Fale conosco e descubra como nossa IA pode revolucionar seus agendamentos.
          </p>
          <div className="absolute bottom-0 right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-border translate-y-full"></div>
        </div>
      )}

      {/* Floating Button */}
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        variant="whatsapp"
        className={cn(
          "w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300",
          "animate-pulse hover:animate-none hover:scale-110",
          "group relative overflow-hidden"
        )}
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        
        {/* Notification badge */}
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full"></span>
      </Button>
    </div>
  );
};