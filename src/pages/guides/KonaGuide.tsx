import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Mountain, DollarSign, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const KonaGuide = () => {
  const trims = [
    { name: "Essential", startingPrice: "$26,499", highlights: "8-inch display, safety features, AWD available" },
    { name: "Preferred", startingPrice: "$29,999", highlights: "Smart key, heated seats, 10.25-inch screen" },
    { name: "Ultimate", startingPrice: "$34,499", highlights: "Leather, sunroof, premium audio, digital cluster" },
  ];

  const vancouverBenefits = [
    { icon: Mountain, title: "Vancouver Terrain", description: "Perfect for city streets and mountain getaways with available AWD" },
    { icon: DollarSign, title: "Compact Efficiency", description: "Easy parking in downtown Vancouver while maintaining cargo space" },
    { icon: Shield, title: "All-Weather Ready", description: "Available AWD for coastal weather and ski trips" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-background">
        <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hyundai Kona Vancouver Guide</h1>
            <p className="text-lg opacity-90">Your complete guide to the Kona in Vancouver</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-muted-foreground mb-4">
                  The Hyundai Kona is a versatile subcompact SUV that's ideal for Vancouver's urban environment and outdoor lifestyle. 
                  With available AWD and efficient engines, it's built for both city commutes and weekend adventures.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <span>Available all-wheel drive for BC weather</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ample cargo space for outdoor gear</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <span>Compact footprint for city parking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <span>SmartSense safety technology standard</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                {vancouverBenefits.map((benefit, index) => (
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
            <h2 className="text-3xl font-bold mb-6">Vancouver Weather Suitability</h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6">
                  The Kona is exceptionally well-suited for Vancouver's coastal climate and outdoor lifestyle.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Winter Performance</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                        AWD option provides confident handling in rain and snow
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                        Heated seats and steering wheel for comfort
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                        Good ground clearance for snowy conditions
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Year-Round Benefits</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                        Excellent fuel economy for daily commuting
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                        Roof rails ready for bikes, skis, or cargo box
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                        High seating position for better visibility in rain
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore the Kona?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Browse our inventory or schedule a test drive
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="ocean" size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/used">View Used Konas</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
                <a href="https://hyundai.ca/new-inventory/kona" target="_blank" rel="noopener noreferrer">
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

export default KonaGuide;
