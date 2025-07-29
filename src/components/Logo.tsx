import { cn } from "@/lib/utils";
import logoAgendia from "@/assets/dragendia-logo.png";

interface LogoProps {
  variant?: "default" | "horizontal";
  className?: string;
}

export const Logo = ({ variant = "default", className }: LogoProps) => {
  if (variant === "horizontal") {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <div className="relative">
          <img 
            src={logoAgendia} 
            alt="DrAgendia Logo" 
            className="w-10 h-10 object-contain"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-foreground">
            Dr<span className="text-primary">Agendia</span>
          </span>
          <span className="text-xs text-muted-foreground -mt-1">
            IA para Consultórios
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div className="relative">
        <img 
          src="/lovable-uploads/79145921-e419-4a92-a48a-ec9f2cca5f23.png" 
          alt="DrAgendia Logo" 
          className="w-16 h-16 object-contain"
        />
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-foreground">
          Dr<span className="text-primary">Agendia</span>
        </div>
        <div className="text-sm text-muted-foreground">
          IA para Consultórios
        </div>
      </div>
    </div>
  );
};