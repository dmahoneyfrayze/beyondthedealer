import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, DollarSign, MapPin, Zap, Leaf, TrendingDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import evImage from "@/assets/ev-charging.jpg";

const EVGuide = () => {
  const incentives = [
    { source: "Federal iZEV Program", amount: "Up to $5,000", eligibility: "For EVs under $55,000 MSRP" },
    { source: "BC CleanBC Program", amount: "Up to $4,000", eligibility: "BC residents purchasing new EVs" },
    { source: "Scrap-It Program", amount: "Up to $6,000", eligibility: "When scrapping old vehicle" },
  ];

  const models = [
    { name: "Ioniq 5", type: "Electric SUV", range: "up to 488 km", startingPrice: "$44,999" },
    { name: "Ioniq 6", type: "Electric Sedan", range: "up to 581 km", startingPrice: "$49,999" },
    { name: "Kona Electric", type: "Electric SUV", range: "up to 415 km", startingPrice: "$42,999" },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">EV & Hybrid Guide for BC</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Your complete guide to electric vehicle incentives, savings, and charging in Greater Vancouver
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Incentives Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Available Incentives</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {incentives.map((incentive, index) => (
                <Card key={index} className="border-2 border-accent/20">
                  <CardHeader>
                    <div className="w-12 h-12 mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{incentive.source}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-accent mb-2">{incentive.amount}</p>
                    <p className="text-sm text-muted-foreground">{incentive.eligibility}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-lg font-semibold text-primary mb-2">Combined Potential Savings: Up to $15,000</p>
              <p className="text-sm text-muted-foreground">Incentives can be combined for maximum savings. Eligibility requirements apply.</p>
            </div>
          </section>

          {/* Cost of Ownership */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Cost of Ownership</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <Leaf className="w-8 h-8 text-success mr-4 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Lower Fuel Costs</h3>
                          <p className="text-muted-foreground mb-2">
                            Save approximately $2,000-$3,000 per year on fuel compared to gas vehicles
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Based on BC Hydro rates vs. gas prices
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <TrendingDown className="w-8 h-8 text-success mr-4 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Reduced Maintenance</h3>
                          <p className="text-muted-foreground mb-2">
                            EVs have fewer moving parts, meaning less maintenance
                          </p>
                          <p className="text-sm text-muted-foreground">
                            No oil changes, fewer brake replacements
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <DollarSign className="w-8 h-8 text-success mr-4 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">BC Hydro Home Charging Rate</h3>
                          <p className="text-muted-foreground mb-2">
                            Charge overnight during off-peak hours for lower rates
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Approximately $2-3 to fully charge most EVs
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Vancouver Charging Network</h2>
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <MapPin className="w-8 h-8 text-primary mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Public Charging Stations</h3>
                        <p className="text-muted-foreground">
                          Over 500 public charging stations in Greater Vancouver area
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <Battery className="w-4 h-4 text-accent mr-2" />
                        Level 2 chargers at shopping centers
                      </li>
                      <li className="flex items-center">
                        <Battery className="w-4 h-4 text-accent mr-2" />
                        DC Fast charging on major highways
                      </li>
                      <li className="flex items-center">
                        <Battery className="w-4 h-4 text-accent mr-2" />
                        Destination charging at hotels & restaurants
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-secondary">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">Popular Charging Networks in BC</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• FLO - Extensive network across Metro Vancouver</li>
                      <li>• ChargePoint - Shopping centers and businesses</li>
                      <li>• Electrify Canada - Highway fast charging</li>
                      <li>• Tesla Supercharger - Open to all EVs (adapter required)</li>
                      <li>• BC Hydro - Government-operated stations</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Hyundai EV Models */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Hyundai Electric Vehicles</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {models.map((model, index) => (
                <Card key={index} className="hover:shadow-[0_8px_24px_hsl(var(--primary)/0.12)] transition-all">
                  <CardHeader>
                    <CardTitle>{model.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{model.type}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Range:</span>
                        <span className="font-semibold">{model.range}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Starting at:</span>
                        <span className="font-semibold text-primary">{model.startingPrice}</span>
                      </div>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/hyundai-${model.name.toLowerCase().replace(' ', '-')}-vancouver-guide`}>
                        Learn More
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button asChild variant="cta" size="lg">
                <a href="https://hyundai.ca/new-inventory/ev" target="_blank" rel="noopener noreferrer">
                  View New EV Inventory (Official Hyundai Site)
                </a>
              </Button>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Make the Switch?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Our team can help you navigate incentives, calculate savings, and find the perfect EV for your lifestyle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="ocean" size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/used">Browse Used EVs</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
                <Link to="/find-my-car">Find My Perfect EV</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EVGuide;
