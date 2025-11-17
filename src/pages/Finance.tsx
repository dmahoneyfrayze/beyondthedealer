import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Shield, Clock, DollarSign } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Finance = () => {
  const benefits = [
    { icon: Clock, title: "Fast Approval", description: "Get approved in 60 seconds" },
    { icon: Shield, title: "All Credit Types", description: "We work with all credit situations" },
    { icon: DollarSign, title: "Competitive Rates", description: "Best rates in Vancouver area" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-background">
        <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Pre-Approved Today</h1>
            <p className="text-lg opacity-90">Fast, easy financing for all credit types</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Finance Options</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Traditional Financing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                        <span>Terms from 24 to 84 months</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                        <span>Competitive interest rates</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                        <span>Build or rebuild your credit</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Leasing Options</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                        <span>Lower monthly payments</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                        <span>Drive a newer vehicle more often</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                        <span>Flexible end-of-lease options</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Credit Rebuilding</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      Past credit challenges? We specialize in helping customers rebuild their credit through our trusted lending partners.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                        <span>Second chance financing available</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                        <span>Report to credit bureaus</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <Card className="sticky top-24">
                <CardHeader className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  <CardTitle className="text-2xl">Pre-Approval Application</CardTitle>
                  <p className="text-sm opacity-90">Get approved in 60 seconds</p>
                </CardHeader>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(604) 555-0100" />
                    </div>

                    <div>
                      <Label htmlFor="employment">Employment Status</Label>
                      <Select>
                        <SelectTrigger id="employment">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="employed">Employed Full-Time</SelectItem>
                          <SelectItem value="parttime">Part-Time</SelectItem>
                          <SelectItem value="selfemployed">Self-Employed</SelectItem>
                          <SelectItem value="retired">Retired</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="income">Monthly Income</Label>
                      <Input id="income" type="number" placeholder="5000" />
                    </div>

                    <div>
                      <Label htmlFor="credit">Credit Rating (Estimate)</Label>
                      <Select>
                        <SelectTrigger id="credit">
                          <SelectValue placeholder="Select rating" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="excellent">Excellent (750+)</SelectItem>
                          <SelectItem value="good">Good (700-749)</SelectItem>
                          <SelectItem value="fair">Fair (650-699)</SelectItem>
                          <SelectItem value="poor">Poor (Below 650)</SelectItem>
                          <SelectItem value="unknown">Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button type="submit" variant="cta" className="w-full" size="lg">
                      Submit Application
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting, you agree to our privacy policy. We'll never share your information.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Finance;
