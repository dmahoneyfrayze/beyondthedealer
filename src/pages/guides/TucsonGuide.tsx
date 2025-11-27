import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, Mountain, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const TucsonGuide = () => {
  const trims = [
    { name: "Preferred", startingPrice: "$32,999", highlights: "8-inch display, cloth seats, AWD standard" },
    { name: "Luxury", startingPrice: "$38,999", highlights: "Leather, heated/ventilated seats, panoramic sunroof" },
    { name: "Ultimate", startingPrice: "$43,999", highlights: "Premium audio, 10.25-inch screen, HUD, advanced safety" },
  ];

  const localBenefits = [
    { icon: Users, title: "Family-Friendly", description: "Spacious interior perfect for families and weekend trips" },
    { icon: Mountain, title: "Adventure Ready", description: "Standard AWD and 2,000 lb towing capacity for boats and trailers" },
    { icon: Shield, title: "Premium Safety", description: "Comprehensive SmartSense suite with Highway Driving Assist" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-background">
        <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hyundai Tucson Guide</h1>
            <p className="text-lg opacity-90">Your complete guide to the Tucson</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-muted-foreground mb-4">
                  The Hyundai Tucson is a sophisticated compact SUV that perfectly balances style, technology, and practicality.
                  Ideal for families and active lifestyles, it offers standard AWD and premium features.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <span>Standard all-wheel drive on all trims</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <span>Best-in-class cargo space: 1,095L</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <span>Advanced technology with dual digital displays</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <span>2,000 lb towing capacity</span>
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
            <h2 className="text-3xl font-bold mb-6">Why Tucson?</h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Perfect for Coastal Living</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                        Standard AWD handles rain-soaked streets with confidence
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                        Spacious cargo for Costco runs and camping gear
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                        Comfortable for highway trips to Whistler or the Okanagan
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                        Towing capability for bikes, kayaks, or small trailers
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Cost of Ownership</h3>
                    <p className="text-muted-foreground mb-3">
                      Combined fuel economy: 8.5L/100km (AWD)
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Estimated annual fuel cost: $2,200-2,600 based on 20,000 km/year
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Competitive insurance rates in the compact SUV category. Hyundai's 5-year/100,000 km warranty provides peace of mind.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore the Tucson?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Browse our inventory or schedule a test drive
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="ocean" size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/used">View Used Tucsons</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
                <a href="https://hyundai.ca/new-inventory/tucson" target="_blank" rel="noopener noreferrer">
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

export default TucsonGuide;
