import { Calendar, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "normal" | "small" | "horizontal";
  className?: string;
}

export const Logo = ({ variant = "normal", className }: LogoProps) => {
  const sizes = {
    normal: "w-8 h-8",
    small: "w-6 h-6",
    horizontal: "w-7 h-7"
  };

  const textSizes = {
    normal: "text-xl",
    small: "text-lg", 
    horizontal: "text-lg"
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative">
        <Calendar className={cn(sizes[variant], "text-primary")} />
        <Brain className={cn(sizes[variant], "text-primary-glow absolute -top-1 -right-1 opacity-80")} />
      </div>
      <span className={cn("font-bold text-foreground", textSizes[variant])}>
        MedIA
      </span>
    </div>
  );
};