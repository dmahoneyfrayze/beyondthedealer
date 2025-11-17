import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, CheckCircle2, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface StickyCTABarProps {
  message?: string;
  ctaText?: string;
  ctaLink?: string;
  variant?: "default" | "finance" | "inventory";
}

const StickyCTABar = ({
  message = "Get Pre-Approved in 60 Seconds",
  ctaText = "Apply Now",
  ctaLink = "/finance",
  variant = "default"
}: StickyCTABarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show after scrolling down 300px
    const handleScroll = () => {
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 300) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    // Remember dismissal for this session
    sessionStorage.setItem("stickyCTADismissed", "true");
  };

  // Check if dismissed in this session
  useEffect(() => {
    const dismissed = sessionStorage.getItem("stickyCTADismissed");
    if (dismissed) {
      setIsDismissed(true);
    }
  }, []);

  if (!isVisible || isDismissed) return null;

  const variantStyles = {
    default: "bg-gradient-to-r from-primary to-accent text-primary-foreground",
    finance: "bg-gradient-to-r from-green-600 to-green-700 text-white",
    inventory: "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
  };

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 shadow-lg transition-transform duration-300",
        isVisible ? "translate-y-0" : "translate-y-full",
        variantStyles[variant]
      )}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm font-medium truncate hidden sm:block">{message}</p>
            <p className="text-sm font-medium sm:hidden">Get Pre-Approved</p>
          </div>
          
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              asChild
              size="sm"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
            >
              <Link to={ctaLink}>{ctaText}</Link>
            </Button>
            
            <a
              href="tel:604-555-0100"
              className="p-2 rounded-md hover:bg-white/20 transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" />
            </a>
            
            <button
              onClick={handleDismiss}
              className="p-2 rounded-md hover:bg-white/20 transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCTABar;

