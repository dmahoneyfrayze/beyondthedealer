import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, CheckCircle2, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TradeIn = () => {
  const steps = [
    { title: "Tell Us About Your Vehicle", description: "Provide basic details about your current car" },
    { title: "Get Instant Estimate", description: "Receive a preliminary trade-in value" },
    { title: "Schedule Appraisal", description: "Book an in-person inspection for final offer" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-background">
        <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Value Your Trade-In</h1>
            <p className="text-lg opacity-90">Get an instant estimate on your current vehicle</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Trade With Us?</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-success mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Competitive Offers</h4>
                    <p className="text-muted-foreground">We provide top dollar for your trade-in based on current market values</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-success mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Simple Process</h4>
                    <p className="text-muted-foreground">Get an instant estimate online, then schedule an in-person appraisal</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-success mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Apply to Any Vehicle</h4>
                    <p className="text-muted-foreground">Use your trade-in value toward any vehicle in our inventory</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-success mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Tax Benefits</h4>
                    <p className="text-muted-foreground">In BC, you only pay tax on the difference between vehicle prices</p>
                  </div>
                </div>
              </div>

              <Card className="bg-secondary">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">What to Bring for Appraisal</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ArrowRight className="w-4 h-4 text-primary mr-2" />
                      Vehicle registration
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="w-4 h-4 text-primary mr-2" />
                      Service records (if available)
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="w-4 h-4 text-primary mr-2" />
                      All sets of keys and remotes
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="w-4 h-4 text-primary mr-2" />
                      Owner's manual
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="sticky top-24">
                <CardHeader className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  <CardTitle className="text-2xl">Get Your Trade Value</CardTitle>
                  <p className="text-sm opacity-90">Fill out the form for an instant estimate</p>
                </CardHeader>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="year">Year</Label>
                      <Select>
                        <SelectTrigger id="year">
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 15 }, (_, i) => 2024 - i).map((year) => (
                            <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="make">Make</Label>
                      <Input id="make" placeholder="e.g., Hyundai, Toyota, Honda" />
                    </div>

                    <div>
                      <Label htmlFor="model">Model</Label>
                      <Input id="model" placeholder="e.g., Elantra, Tucson, Kona" />
                    </div>

                    <div>
                      <Label htmlFor="trim">Trim</Label>
                      <Input id="trim" placeholder="e.g., Preferred, Ultimate" />
                    </div>

                    <div>
                      <Label htmlFor="mileage">Mileage (km)</Label>
                      <Input id="mileage" type="number" placeholder="50000" />
                    </div>

                    <div>
                      <Label htmlFor="condition">Condition</Label>
                      <Select>
                        <SelectTrigger id="condition">
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="excellent">Excellent</SelectItem>
                          <SelectItem value="good">Good</SelectItem>
                          <SelectItem value="fair">Fair</SelectItem>
                          <SelectItem value="poor">Poor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="pt-4 border-t">
                      <h4 className="font-semibold mb-3">Contact Information</h4>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="John Doe" />
                        </div>

                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="john@example.com" />
                        </div>

                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" placeholder="(604) 555-0100" />
                        </div>
                      </div>
                    </div>

                    <Button type="submit" variant="cta" className="w-full" size="lg">
                      Get Instant Value
                    </Button>

                    <Button type="button" variant="outline" className="w-full">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule In-Person Appraisal
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Estimates are subject to vehicle inspection. Final offer may vary.
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

export default TradeIn;
