import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingDown } from "lucide-react";
import WarrantyProducts from "./WarrantyProducts";

interface PaymentCalculatorProps {
  vehiclePrice: number;
}

const PaymentCalculator = ({ vehiclePrice }: PaymentCalculatorProps) => {
  const [downPayment, setDownPayment] = useState(vehiclePrice * 0.1);
  const [interestRate, setInterestRate] = useState(6.99);
  const [term, setTerm] = useState(84); // 7 years in months
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const handleToggleProduct = (productId: string) => {
    setSelectedProducts(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const calculatePayment = (frequency: 'monthly' | 'biweekly') => {
    const principal = vehiclePrice - downPayment;
    const rate = interestRate / 100;
    
    if (frequency === 'monthly') {
      const monthlyRate = rate / 12;
      const numPayments = term;
      const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
      return Math.round(monthlyPayment);
    } else {
      // Bi-weekly calculation (26 payments per year)
      const biweeklyRate = rate / 26;
      const numPayments = (term / 12) * 26;
      const biweeklyPayment = principal * (biweeklyRate * Math.pow(1 + biweeklyRate, numPayments)) / (Math.pow(1 + biweeklyRate, numPayments) - 1);
      return Math.round(biweeklyPayment);
    }
  };

  const monthlyPayment = calculatePayment('monthly');
  const biweeklyPayment = calculatePayment('biweekly');
  const downPaymentPercent = Math.round((downPayment / vehiclePrice) * 100);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-primary" />
            Payment Calculator
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Customize your financing to see estimated payments
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Vehicle Price */}
          <div className="p-4 bg-primary/5 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Vehicle Price</p>
            <p className="text-2xl font-bold text-primary">
              ${vehiclePrice.toLocaleString()}
            </p>
          </div>

          {/* Down Payment */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label>Down Payment</Label>
              <span className="text-sm font-medium">
                ${downPayment.toLocaleString()} ({downPaymentPercent}%)
              </span>
            </div>
            <Slider
              value={[downPayment]}
              onValueChange={([value]) => setDownPayment(value)}
              min={0}
              max={vehiclePrice * 0.5}
              step={500}
              className="py-4"
            />
            <Input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              min={0}
              max={vehiclePrice}
            />
          </div>

          {/* Interest Rate */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label>Interest Rate (%)</Label>
              <span className="text-sm font-medium">{interestRate.toFixed(2)}%</span>
            </div>
            <Slider
              value={[interestRate]}
              onValueChange={([value]) => setInterestRate(value)}
              min={0}
              max={20}
              step={0.25}
              className="py-4"
            />
            <Input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              min={0}
              max={25}
              step={0.1}
            />
          </div>

          {/* Term Length */}
          <div className="space-y-2">
            <Label>Financing Term</Label>
            <Select value={term.toString()} onValueChange={(value) => setTerm(Number(value))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-background">
                <SelectItem value="36">36 months (3 years)</SelectItem>
                <SelectItem value="48">48 months (4 years)</SelectItem>
                <SelectItem value="60">60 months (5 years)</SelectItem>
                <SelectItem value="72">72 months (6 years)</SelectItem>
                <SelectItem value="84">84 months (7 years)</SelectItem>
                <SelectItem value="96">96 months (8 years)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Payment Results */}
          <div className="space-y-3 pt-4 border-t">
            <div className="flex justify-between items-center p-4 bg-accent/50 rounded-lg">
              <div>
                <p className="text-sm text-muted-foreground">Monthly Payment</p>
                <p className="text-2xl font-bold">${monthlyPayment.toLocaleString()}/mo</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg border-2 border-primary/20">
              <div>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <TrendingDown className="w-4 h-4" />
                  Bi-Weekly Payment
                </p>
                <p className="text-2xl font-bold text-primary">${biweeklyPayment.toLocaleString()}/bi-weekly</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              * Payments shown are estimates for illustration purposes only. Actual rates and terms may vary based on credit approval.
            </p>
          </div>
        </CardContent>
      </Card>

      <WarrantyProducts
        selectedProducts={selectedProducts}
        onToggleProduct={handleToggleProduct}
      />
    </div>
  );
};

export default PaymentCalculator;
