import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Lock, Unlock, CheckCircle2, Loader2 } from "lucide-react";
import { Vehicle } from "@/hooks/useVehicles";

interface UnlockPriceDialogProps {
    vehicle: Vehicle;
    trigger?: React.ReactNode;
}

const UnlockPriceDialog = ({ vehicle, trigger }: UnlockPriceDialogProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isUnlocked, setIsUnlocked] = useState(false);
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsUnlocked(true);
        toast({
            title: "Price Unlocked!",
            description: "We've sent the special pricing details to your email.",
        });
    };

    const price = vehicle.internet_price || vehicle.asking_price || vehicle.price || 0;
    // Calculate a "special" price (e.g., $500 off) for the demo effect
    const specialPrice = price > 0 ? price - 500 : 0;

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {trigger || (
                    <Button variant="destructive" size="lg" className="w-full animate-pulse hover:animate-none">
                        <Lock className="w-4 h-4 mr-2" />
                        Unlock Best Price
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center">
                        {isUnlocked ? "Special Pricing Unlocked!" : "Unlock Best Price"}
                    </DialogTitle>
                    <DialogDescription className="text-center">
                        {isUnlocked
                            ? `Here is your exclusive offer for the ${vehicle.year} ${vehicle.make} ${vehicle.model}.`
                            : `Enter your details to instantly reveal our lowest internet price for this ${vehicle.year} ${vehicle.make} ${vehicle.model}.`}
                    </DialogDescription>
                </DialogHeader>

                {isUnlocked ? (
                    <div className="text-center py-6 space-y-6">
                        <div className="flex justify-center">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                                <Unlock className="w-10 h-10 text-green-600" />
                            </div>
                        </div>
                        <div>
                            <p className="text-muted-foreground mb-1">Your Exclusive Price</p>
                            <p className="text-4xl font-bold text-primary">
                                ${specialPrice.toLocaleString()}
                            </p>
                            <p className="text-sm text-green-600 font-medium mt-2">
                                You save $500 off the listed price!
                            </p>
                        </div>
                        <div className="bg-muted p-4 rounded-lg text-sm text-left">
                            <p className="font-semibold mb-2">Next Steps:</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                                    <span>A quote has been sent to {formData.email}</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                                    <span>One of our concierge specialists will contact you shortly</span>
                                </li>
                            </ul>
                        </div>
                        <Button className="w-full" onClick={() => setIsOpen(false)}>
                            Close
                        </Button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                id="name"
                                required
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                id="email"
                                type="email"
                                required
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                                id="phone"
                                type="tel"
                                required
                                placeholder="(204) 555-0123"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                        <Button type="submit" className="w-full text-lg py-6" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                    Unlocking...
                                </>
                            ) : (
                                <>
                                    <Unlock className="w-4 h-4 mr-2" />
                                    Reveal My Price
                                </>
                            )}
                        </Button>
                        <p className="text-xs text-center text-muted-foreground">
                            By clicking "Reveal My Price", you agree to receive text messages and emails from Beyond the Dealership.
                        </p>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default UnlockPriceDialog;
