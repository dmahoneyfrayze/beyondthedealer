import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, User, X, Gift } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ExitIntentPopupProps {
  offer?: string;
  title?: string;
  description?: string;
}

const ExitIntentPopup = ({
  offer = "Exclusive Inventory Access",
  title = "Join the Inner Circle",
  description = "Get priority access to new arrivals before they hit the public market."
}: ExitIntentPopupProps) => {
  const [open, setOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const shown = sessionStorage.getItem("exitIntentShown");
    if (shown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown && !open) {
        setOpen(true);
        setHasShown(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Welcome to BTD.",
        description: "You've been added to our priority list.",
      });
      setOpen(false);
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md bg-card border-border shadow-2xl p-0 overflow-hidden gap-0">
        <div className="bg-primary p-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-cinematic.png')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
          <div className="relative z-10">
            <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2">Beyond the Dealership</p>
            <h2 className="text-2xl font-bold text-white mb-2 font-serif tracking-wide">{title}</h2>
            <p className="text-white/80 text-sm max-w-xs mx-auto">{description}</p>
          </div>
        </div>

        <div className="p-6 bg-background">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-10 bg-secondary/50 border-input focus:border-accent transition-colors"
              />
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : "Get Priority Access"}
            </Button>

            <p className="text-[10px] text-center text-muted-foreground uppercase tracking-wider">
              No Spam. Unsubscribe Anytime.
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;

