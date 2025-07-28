import { Stethoscope, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "horizontal";
  className?: string;
}

export const Logo = ({ variant = "default", className }: LogoProps) => {
  if (variant === "horizontal") {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/60 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-white" />
            <Bot className="w-4 h-4 text-white/90 absolute -top-1 -right-1 bg-success rounded-full p-0.5" />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-foreground">
            Consul<span className="text-primary">Bot</span>
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
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center">
          <Stethoscope className="w-8 h-8 text-white" />
          <Bot className="w-6 h-6 text-white/90 absolute -top-1 -right-1 bg-success rounded-full p-1" />
        </div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-foreground">
          Consul<span className="text-primary">Bot</span>
        </div>
        <div className="text-sm text-muted-foreground">
          IA para Consultórios
        </div>
      </div>
    </div>
  );
};