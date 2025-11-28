import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, X, DollarSign, TrendingUp, Shield, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";


const NewVsUsed = () => {
  const newCarPros = [
    { icon: Shield, title: "Full Warranty Coverage", description: "Complete manufacturer warranty, typically 5 years/100,000 km" },
    { icon: TrendingUp, title: "Latest Technology", description: "Most recent safety features, infotainment, and driver assistance" },
    { icon: Clock, title: "No Maintenance History", description: "Fresh start with no previous wear or unknown issues" },
    { icon: DollarSign, title: "Financing Incentives", description: "Better rates, longer terms, and manufacturer promotions" },
  ];

  const usedCarPros = [
    { icon: DollarSign, title: "Lower Purchase Price", description: "Save 20-40% off MSRP, especially for 2-3 year old vehicles" },
    { icon: TrendingUp, title: "Less Depreciation", description: "Someone else absorbed the initial depreciation hit" },
    { icon: Shield, title: "Proven Reliability", description: "Real-world performance data available from previous owner" },
    { icon: Clock, title: "Faster Availability", description: "Drive away today vs. waiting weeks/months for delivery" },
  ];

  const considerations = [
    {
      title: "Budget",
      new: "Higher upfront cost, but better financing options",
      used: "Lower entry point, but may need more maintenance",
    },
    {
      title: "Warranty",
      new: "Full coverage, peace of mind",
      used: "May have remaining warranty, or need extended coverage",
    },
    {
      title: "Technology",
      new: "Cutting-edge features and updates",
      used: "May be 1-2 generations behind, but still modern",
    },
    {
      title: "Depreciation",
      new: "Loses 20-30% in first year",
      used: "Slower depreciation curve, better value retention",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-background">
        <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">New vs. Used: Which is Right for You?</h1>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              A comprehensive guide to help you decide between buying new or used in British Columbia
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <section>
                <h2 className="text-3xl font-bold mb-6">The Big Question</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Deciding between a new or used vehicle is one of the most important choices you'll make.
                  Both options have significant advantages, and the right choice depends on your priorities,
                  budget, and lifestyle.
                </p>
                <p className="text-muted-foreground">
                  In BC, both new and used vehicles offer unique benefits. New vehicles come with full warranties
                  and the latest features, while used vehicles provide better value and immediate availability.
                  Let's break down the key differences.
                </p>
              </section>

              {/* New Car Advantages */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Advantages of Buying New</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {newCarPros.map((pro, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                            <pro.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-2">{pro.title}</h3>
                            <p className="text-sm text-muted-foreground">{pro.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Used Car Advantages */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Advantages of Buying Used</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {usedCarPros.map((pro, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center flex-shrink-0">
                            <pro.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-2">{pro.title}</h3>
                            <p className="text-sm text-muted-foreground">{pro.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Comparison Table */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Side-by-Side Comparison</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-4 font-semibold">Consideration</th>
                            <th className="text-left p-4 font-semibold">New Vehicle</th>
                            <th className="text-left p-4 font-semibold">Used Vehicle</th>
                          </tr>
                        </thead>
                        <tbody>
                          {considerations.map((item, index) => (
                            <tr key={index} className="border-b">
                              <td className="p-4 font-medium">{item.title}</td>
                              <td className="p-4 text-muted-foreground">{item.new}</td>
                              <td className="p-4 text-muted-foreground">{item.used}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* BC-Specific Considerations */}
              <section>
                <h2 className="text-3xl font-bold mb-6">BC-Specific Considerations</h2>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3">Taxes & Fees</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span><strong>New:</strong> GST (5%) + PST (7%) on full MSRP. Luxury tax may apply on vehicles over $100,000.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span><strong>Used:</strong> GST (5%) + PST (7%) on purchase price. Often lower total tax burden.</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3">ICBC Insurance</h3>
                      <p className="text-muted-foreground mb-3">
                        Insurance costs are generally similar for new and used vehicles of the same make/model.
                        However, newer vehicles may have better safety features that could reduce premiums.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Tip:</strong> Get an insurance quote before purchasing to understand your monthly costs.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3">EV Incentives</h3>
                      <p className="text-muted-foreground mb-3">
                        BC offers significant incentives for new electric vehicles (up to $9,000 combined federal and provincial).
                        Used EVs may not qualify for all incentives, but can still be a great value.
                      </p>
                      <Button asChild variant="outline" className="mt-2">
                        <Link to="/ev-hybrid-guide-bc">Learn About EV Incentives</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* When to Choose New */}
              <section>
                <h2 className="text-3xl font-bold mb-6">When New Makes Sense</h2>
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>You want the latest safety technology and features</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Warranty coverage is important to you</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>You're buying an EV and want maximum incentives</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>You plan to keep the vehicle for 10+ years</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>You can afford the higher monthly payments</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              {/* When to Choose Used */}
              <section>
                <h2 className="text-3xl font-bold mb-6">When Used Makes Sense</h2>
                <Card className="bg-accent/5 border-accent/20">
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>You want to maximize value and minimize depreciation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>You need a vehicle immediately</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>You're on a tighter budget but want a reliable vehicle</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>You prefer a 2-3 year old vehicle with low mileage</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>You want to avoid the initial depreciation hit</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle>Find Your Vehicle</CardTitle>
                  <p className="text-sm text-muted-foreground">Browse our inventory of quality used vehicles</p>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to="/used">Browse Inventory</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Browse Our Inventory</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild variant="cta" className="w-full">
                    <Link to="/used">View Used Vehicles</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href="https://www.olympichyundaivancouver.com/" target="_blank" rel="noopener noreferrer">
                      View New Vehicles
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewVsUsed;

