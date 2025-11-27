import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Zap, Battery, DollarSign, Leaf } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import evImage from "@/assets/ev-charging.jpg";

const Ioniq5Guide = () => {
  const trims = [
    { name: "Preferred", startingPrice: "$44,999", highlights: "Long range, fast charging, dual 12.3-inch displays" },
    { name: "Ultimate", startingPrice: "$54,999", highlights: "AWD, premium audio, panoramic roof, HUD" },
  ];

  const localBenefits = [
    { icon: Zap, title: "Fast Charging", description: "Compatible with 350kW DC fast chargers" },
    { icon: DollarSign, title: "Government Incentives", description: "Eligible for federal and provincial rebates" },
    { icon: Leaf, title: "Zero Emissions", description: "Perfect for an eco-conscious lifestyle" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-background">
        <div
          className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${evImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80"></div>
          <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
            <Zap className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hyundai Ioniq 5 Guide</h1>
            <p className="text-lg opacity-90">Your complete guide to the Ioniq 5</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-muted-foreground mb-4">
                  The Hyundai Ioniq 5 is a groundbreaking all-electric SUV that redefines what's possible in the EV space.
                  With ultra-fast charging, impressive range, and futuristic design, it's perfect for eco-conscious drivers.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <span>Up to 488 km range on a single charge</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ultra-fast 350 kW charging: 10-80% in 18 minutes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <span>Vehicle-to-Load (V2L) can power appliances</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <span>Available AWD for all-season confidence</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                {localBenefits.map((benefit, index) => (
                  <Card key={index}>
                    <CardContent className="p-4 flex items-start">
                      <benefit.icon className="w-8 h-8 text-primary mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Trim Comparison</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {trims.map((trim, index) => (
                <Card key={index} className="hover:shadow-[0_8px_24px_hsl(var(--primary)/0.12)] transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{trim.name}</h3>
                    <p className="text-3xl font-bold text-primary mb-4">{trim.startingPrice}</p>
                    <p className="text-sm text-muted-foreground">{trim.highlights}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">EV Incentives in BC</h2>
            <Card className="border-2 border-accent/30">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <DollarSign className="w-12 h-12 text-accent mx-auto mb-3" />
                    <p className="text-2xl font-bold text-accent mb-1">$5,000</p>
                    <p className="text-sm text-muted-foreground">Federal iZEV Rebate</p>
                  </div>
                  <div className="text-center">
                    <DollarSign className="w-12 h-12 text-accent mx-auto mb-3" />
                    <p className="text-2xl font-bold text-accent mb-1">$4,000</p>
                    <p className="text-sm text-muted-foreground">BC CleanBC Rebate</p>
                  </div>
                  <div className="text-center">
                    <DollarSign className="w-12 h-12 text-accent mx-auto mb-3" />
                    <p className="text-2xl font-bold text-accent mb-1">Up to $6,000</p>
                    <p className="text-sm text-muted-foreground">Scrap-It Program</p>
                  </div>
                </div>
                <div className="text-center bg-accent/10 rounded-lg p-4">
                  <p className="text-lg font-semibold">Total Potential Savings: Up to $15,000</p>
                  <p className="text-sm text-muted-foreground mt-2">Making the Ioniq 5 more affordable than ever</p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Cost of Ownership</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Battery className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-3">Charging Costs</h3>
                  <p className="text-muted-foreground mb-3">
                    Based on BC Hydro rates, expect to pay approximately $2-3 to fully charge at home.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Annual electricity cost: ~$500-700 for 20,000 km (compared to $2,500+ for gas vehicles)
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Leaf className="w-10 h-10 text-success mb-4" />
                  <h3 className="font-semibold text-lg mb-3">Maintenance Savings</h3>
                  <p className="text-muted-foreground mb-3">
                    EVs have significantly lower maintenance costs - no oil changes, fewer brake replacements.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Save approximately $1,000-1,500 per year compared to gas vehicles
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Charging Infrastructure</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Canada has a growing EV charging network, making the Ioniq 5 a practical choice.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Public Fast Charging</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                        Electrify Canada stations along major highways
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                        Multiple DC fast chargers nationwide
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                        Destination charging at shopping centers
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Home Charging</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                        Level 2 home charger fully charges overnight
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                        BC Hydro off-peak rates for lower costs
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                        Charger installation incentives available
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Go Electric?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Experience the future of driving with the Ioniq 5
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="ocean" size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/ev-hybrid-guide-bc">Learn More About EV Incentives</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
                <a href="https://hyundai.ca/new-inventory/ioniq-5" target="_blank" rel="noopener noreferrer">
                  View New Inventory
                </a>
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Ioniq5Guide;
