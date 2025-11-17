import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PaymentCalculatorProps {
  vehiclePrice: number;
  compact?: boolean;
}

const PaymentCalculator = ({ vehiclePrice, compact = false }: PaymentCalculatorProps) => {
  const [downPayment, setDownPayment] = useState(vehiclePrice * 0.1); // 10% default
  const [interestRate, setInterestRate] = useState(6.99);
  const [termMonths, setTermMonths] = useState(60);

  const calculateMonthlyPayment = () => {
    const principal = vehiclePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / 
                    (Math.pow(1 + monthlyRate, termMonths) - 1);
    return isNaN(payment) ? 0 : payment;
  };

  const monthlyPayment = calculateMonthlyPayment();
  const downPaymentPercent = Math.round((downPayment / vehiclePrice) * 100);

  if (compact) {
    return (
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-sm text-muted-foreground">Est. Monthly Payment</span>
          <span className="text-2xl font-bold text-primary">${Math.round(monthlyPayment).toLocaleString()}/mo</span>
        </div>
        <p className="text-xs text-muted-foreground">
          Based on {downPaymentPercent}% down, {interestRate}% APR, {termMonths} months
        </p>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center p-4 bg-primary/10 rounded-lg">
          <p className="text-sm text-muted-foreground mb-1">Estimated Monthly Payment</p>
          <p className="text-4xl font-bold text-primary">${Math.round(monthlyPayment).toLocaleString()}</p>
          <p className="text-xs text-muted-foreground mt-1">/month</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Down Payment</Label>
              <span className="text-sm font-medium">${Math.round(downPayment).toLocaleString()} ({downPaymentPercent}%)</span>
            </div>
            <Slider
              value={[downPayment]}
              onValueChange={(value) => setDownPayment(value[0])}
              min={0}
              max={vehiclePrice * 0.5}
              step={500}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label>Loan Term</Label>
            <Select value={termMonths.toString()} onValueChange={(v) => setTermMonths(parseInt(v))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="24">24 months (2 years)</SelectItem>
                <SelectItem value="36">36 months (3 years)</SelectItem>
                <SelectItem value="48">48 months (4 years)</SelectItem>
                <SelectItem value="60">60 months (5 years)</SelectItem>
                <SelectItem value="72">72 months (6 years)</SelectItem>
                <SelectItem value="84">84 months (7 years)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Interest Rate (APR)</Label>
              <span className="text-sm font-medium">{interestRate.toFixed(2)}%</span>
            </div>
            <Input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
              min={0}
              max={25}
              step={0.1}
            />
          </div>
        </div>

        <div className="pt-4 border-t space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Vehicle Price</span>
            <span className="font-medium">${vehiclePrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Down Payment</span>
            <span className="font-medium">-${Math.round(downPayment).toLocaleString()}</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Amount Financed</span>
            <span>${Math.round(vehiclePrice - downPayment).toLocaleString()}</span>
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center">
          * This is an estimate. Final rates and terms subject to credit approval.
        </p>
      </CardContent>
    </Card>
  );
};

export default PaymentCalculator;
