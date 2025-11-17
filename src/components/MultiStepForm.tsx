import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";

interface MultiStepFormProps {
  title?: string;
  description?: string;
  onComplete?: (data: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  budget?: string;
  vehicleInterest?: string;
}

const MultiStepForm = ({ 
  title = "Get Pre-Approved",
  description = "Quick and easy - just 3 steps",
  onComplete
}: MultiStepFormProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    budget: "",
    vehicleInterest: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step === 1 && !formData.name) {
      toast({
        title: "Required",
        description: "Please enter your name",
        variant: "destructive",
      });
      return;
    }
    if (step === 2 && !formData.email) {
      toast({
        title: "Required",
        description: "Please enter your email",
        variant: "destructive",
      });
      return;
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Success!",
        description: "We'll be in touch within 24 hours.",
      });
      
      if (onComplete) {
        onComplete(formData);
      }
      
      // Reset form
      setFormData({ name: "", email: "", phone: "", budget: "", vehicleInterest: "" });
      setStep(1);
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

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle>{title}</CardTitle>
          <span className="text-sm text-muted-foreground">Step {step} of {totalSteps}</span>
        </div>
        <CardDescription>{description}</CardDescription>
        <Progress value={progress} className="mt-4" />
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          {/* Step 1: Name */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => updateFormData("name", e.target.value)}
                  required
                  className="pl-10"
                />
              </div>
              <Button type="button" onClick={handleNext} className="w-full" variant="cta">
                Continue <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}

          {/* Step 2: Email */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  required
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button type="button" onClick={handleBack} variant="outline" className="flex-1">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button type="button" onClick={handleNext} className="flex-1" variant="cta">
                  Continue <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Phone & Additional Info */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="relative">
                <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  required
                  className="pl-10"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Budget Range (Optional)</label>
                <select
                  value={formData.budget}
                  onChange={(e) => updateFormData("budget", e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="">Select budget</option>
                  <option value="under20k">Under $20,000</option>
                  <option value="20to30k">$20,000 - $30,000</option>
                  <option value="30to40k">$30,000 - $40,000</option>
                  <option value="40to50k">$40,000 - $50,000</option>
                  <option value="over50k">Over $50,000</option>
                </select>
              </div>

              <div className="flex gap-2">
                <Button type="button" onClick={handleBack} variant="outline" className="flex-1">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button type="submit" className="flex-1" variant="cta" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default MultiStepForm;

