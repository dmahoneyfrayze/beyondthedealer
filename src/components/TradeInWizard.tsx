import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, CheckCircle2, Car, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TradeInWizard = () => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        year: "",
        make: "",
        model: "",
        trim: "",
        mileage: "",
        condition: "",
        name: "",
        email: "",
        phone: "",
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleNext = () => {
        setStep((prev) => prev + 1);
    };

    const handleBack = () => {
        setStep((prev) => prev - 1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsComplete(true);
        toast({
            title: "Trade-In Request Received!",
            description: "Our appraisal team will contact you shortly with your estimate.",
        });
    };

    if (isComplete) {
        return (
            <Card className="w-full max-w-2xl mx-auto animate-fade-in border-primary/20 shadow-lg">
                <CardContent className="p-12 text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Estimate Request Received!</h2>
                    <p className="text-muted-foreground text-lg mb-8">
                        Thank you, {formData.name}. We are analyzing your {formData.year} {formData.make} {formData.model}.
                        <br />
                        One of our appraisal specialists will reach out to you at {formData.phone} within 24 hours.
                    </p>
                    <Button onClick={() => window.location.reload()} variant="outline">
                        Value Another Vehicle
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="w-full max-w-2xl mx-auto shadow-xl border-primary/10 overflow-hidden">
            <div className="bg-muted h-2 w-full">
                <div
                    className="h-full bg-primary transition-all duration-500 ease-out"
                    style={{ width: `${(step / 3) * 100}%` }}
                />
            </div>

            <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl">
                    {step === 1 && "Vehicle Details"}
                    {step === 2 && "Vehicle Condition"}
                    {step === 3 && "Contact Information"}
                </CardTitle>
                <CardDescription>
                    Step {step} of 3
                </CardDescription>
            </CardHeader>

            <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit}>
                    {/* Step 1: Vehicle Info */}
                    {step === 1 && (
                        <div className="space-y-6 animate-slide-up">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Year</Label>
                                    <Select onValueChange={(val) => handleInputChange("year", val)} value={formData.year}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Year" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Array.from({ length: 15 }, (_, i) => 2024 - i).map((year) => (
                                                <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Make</Label>
                                    <Input
                                        placeholder="e.g. Toyota"
                                        value={formData.make}
                                        onChange={(e) => handleInputChange("make", e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Model</Label>
                                    <Input
                                        placeholder="e.g. Camry"
                                        value={formData.model}
                                        onChange={(e) => handleInputChange("model", e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Trim</Label>
                                    <Input
                                        placeholder="e.g. XLE"
                                        value={formData.trim}
                                        onChange={(e) => handleInputChange("trim", e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label>Mileage (km)</Label>
                                <Input
                                    type="number"
                                    placeholder="e.g. 50000"
                                    value={formData.mileage}
                                    onChange={(e) => handleInputChange("mileage", e.target.value)}
                                />
                            </div>

                            <Button
                                type="button"
                                className="w-full"
                                size="lg"
                                onClick={handleNext}
                                disabled={!formData.year || !formData.make || !formData.model}
                            >
                                Next Step <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    )}

                    {/* Step 2: Condition */}
                    {step === 2 && (
                        <div className="space-y-6 animate-slide-up">
                            <div className="space-y-4">
                                <Label className="text-lg">How would you rate the condition?</Label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {["Excellent", "Good", "Fair", "Poor"].map((condition) => (
                                        <div
                                            key={condition}
                                            className={`
                        cursor-pointer p-4 rounded-lg border-2 transition-all hover:border-primary/50
                        ${formData.condition === condition ? "border-primary bg-primary/5" : "border-muted"}
                      `}
                                            onClick={() => handleInputChange("condition", condition)}
                                        >
                                            <div className="font-semibold">{condition}</div>
                                            <div className="text-xs text-muted-foreground mt-1">
                                                {condition === "Excellent" && "Looks new, no mechanical issues"}
                                                {condition === "Good" && "Minor wear, well maintained"}
                                                {condition === "Fair" && "Visible wear, needs some work"}
                                                {condition === "Poor" && "Significant damage or mechanical issues"}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Button type="button" variant="outline" onClick={handleBack} className="w-1/3">
                                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                                </Button>
                                <Button
                                    type="button"
                                    className="w-2/3"
                                    onClick={handleNext}
                                    disabled={!formData.condition}
                                >
                                    Next Step <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Contact */}
                    {step === 3 && (
                        <div className="space-y-6 animate-slide-up">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Full Name</Label>
                                    <Input
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => handleInputChange("name", e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Email Address</Label>
                                    <Input
                                        type="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange("email", e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Phone Number</Label>
                                    <Input
                                        type="tel"
                                        placeholder="(204) 555-0123"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange("phone", e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Button type="button" variant="outline" onClick={handleBack} className="w-1/3">
                                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                                </Button>
                                <Button
                                    type="submit"
                                    className="w-2/3"
                                    size="lg"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                            Analyzing...
                                        </>
                                    ) : (
                                        <>
                                            Get My Estimate <Car className="w-4 h-4 ml-2" />
                                        </>
                                    )}
                                </Button>
                            </div>
                            <p className="text-xs text-center text-muted-foreground mt-4">
                                By clicking "Get My Estimate", you agree to receive communications from Beyond the Dealership.
                            </p>
                        </div>
                    )}
                </form>
            </CardContent>
        </Card>
    );
};

export default TradeInWizard;
