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
  offer = "Free BC Auto Buying Guide",
  title = "Wait! Don't Miss Out",
  description = "Get our free guide to buying a car in BC, plus exclusive financing tips."
}: ExitIntentPopupProps) => {
  const [open, setOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if already shown in this session
    const shown = sessionStorage.getItem("exitIntentShown");
    if (shown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves the top of the viewport
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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "Check your email for your free guide.",
      });
      
      setOpen(false);
      setName("");
      setEmail("");
      setPhone("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full">
            <Gift className="w-8 h-8 text-white" />
          </div>
          <DialogTitle className="text-2xl text-center">{title}</DialogTitle>
          <DialogDescription className="text-center text-base">
            {description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-4 rounded-lg mb-4">
          <p className="text-sm font-semibold text-center text-primary">
            🎁 {offer}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="pl-10"
            />
          </div>
          
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="pl-10"
            />
          </div>
          
          <div className="relative">
            <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              type="tel"
              placeholder="Phone Number (Optional)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="pl-10"
            />
          </div>

          <Button type="submit" className="w-full" variant="cta" disabled={isSubmitting}>
            {isSubmitting ? "Getting Your Guide..." : "Get My Free Guide"}
          </Button>
          
          <p className="text-xs text-center text-muted-foreground">
            No spam. Unsubscribe anytime.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;

