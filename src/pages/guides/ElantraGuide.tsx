import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Snowflake, DollarSign, Zap, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ElantraGuide = () => {
  const trims = [
    { name: "Essential", startingPrice: "$21,999", highlights: "Cloth seats, 8-inch touchscreen, safety features" },
    { name: "Preferred", startingPrice: "$24,499", highlights: "Heated seats, smart key, alloy wheels" },
    { name: "Ultimate", startingPrice: "$28,999", highlights: "Leather, Bose audio, sunroof, digital cluster" },
  ];

  const localBenefits = [
    { icon: Snowflake, title: "Winter-Ready", description: "Available heated seats and steering wheel for cold mornings" },
    { icon: DollarSign, title: "Fuel Efficient", description: "Excellent MPG for city commuting and weekend trips" },
    { icon: Shield, title: "Safety First", description: "SmartSense safety suite standard on all trims" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-background">
        <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hyundai Elantra Guide</h1>
            <p className="text-lg opacity-90">Your complete guide to the Elantra</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-muted-foreground mb-4">
                  The Hyundai Elantra is a sophisticated compact sedan that combines style, efficiency, and technology.
                  Perfect for drivers seeking a reliable daily commuter with premium features.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <span>Advanced safety technology standard</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <span>Impressive fuel economy for city driving</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <span>Spacious interior with premium materials</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <span>5-year/100,000 km comprehensive warranty</span>
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
            <div className="grid md:grid-cols-3 gap-6">
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
            <h2 className="text-3xl font-bold mb-6">Cost of Ownership</h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Fuel Costs</h3>
                    <p className="text-muted-foreground mb-2">
                      Estimated combined fuel economy: 7.0L/100km
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Based on 20,000 km/year and average gas prices, expect approximately $1,800-2,200/year in fuel costs
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Maintenance</h3>
                    <p className="text-muted-foreground mb-2">
                      Low maintenance costs with Hyundai's comprehensive warranty
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Average $400-600/year for routine maintenance (oil changes, tire rotations, inspections)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore the Elantra?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Browse our inventory or schedule a test drive
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="ocean" size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/used">View Used Elantras</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
                <a href="https://hyundai.ca/new-inventory/elantra" target="_blank" rel="noopener noreferrer">
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

export default ElantraGuide;
