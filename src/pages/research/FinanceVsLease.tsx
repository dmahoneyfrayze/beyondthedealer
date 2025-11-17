import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, X, DollarSign, TrendingUp, RefreshCw, Calculator } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import LeadMagnetForm from "@/components/LeadMagnetForm";

const FinanceVsLease = () => {
  const financePros = [
    { icon: DollarSign, title: "Ownership", description: "You own the vehicle after the loan is paid off" },
    { icon: TrendingUp, title: "No Mileage Limits", description: "Drive as much as you want without penalties" },
    { icon: RefreshCw, title: "Customization Freedom", description: "Modify, customize, or personalize as you wish" },
    { icon: Calculator, title: "Build Equity", description: "Vehicle becomes an asset you can sell or trade" },
  ];

  const leasePros = [
    { icon: DollarSign, title: "Lower Monthly Payments", description: "Typically 30-40% less than financing" },
    { icon: TrendingUp, title: "Always Drive New", description: "Upgrade to a new vehicle every 2-4 years" },
    { icon: RefreshCw, title: "Warranty Coverage", description: "Stay within warranty period, minimal maintenance" },
    { icon: Calculator, title: "Tax Benefits", description: "Business owners can write off lease payments" },
  ];

  const comparison = [
    {
      factor: "Monthly Payment",
      finance: "Higher (paying for full vehicle value)",
      lease: "Lower (paying for depreciation only)",
    },
    {
      factor: "Ownership",
      finance: "You own it after loan term",
      lease: "Return or buy at end of lease",
    },
    {
      factor: "Mileage",
      finance: "Unlimited",
      lease: "Typically 20,000-24,000 km/year",
    },
    {
      factor: "Wear & Tear",
      finance: "Your responsibility",
      lease: "Charges for excess wear at return",
    },
    {
      factor: "End of Term",
      finance: "Keep vehicle, no payments",
      lease: "Return, buy out, or lease new vehicle",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-background">
        <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Finance vs. Lease: Complete Guide</h1>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Understanding the differences between financing and leasing in British Columbia
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <section>
                <h2 className="text-3xl font-bold mb-6">The Basics</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Financing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        When you finance, you're taking out a loan to purchase the vehicle. You make monthly payments 
                        until the loan is paid off, then you own the vehicle outright. Think of it like a mortgage for a car.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Leasing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        When you lease, you're essentially renting the vehicle for a set period (typically 2-4 years). 
                        You pay for the vehicle's depreciation during that time, plus interest. At the end, you return 
                        the vehicle or buy it out.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Finance Advantages */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Advantages of Financing</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {financePros.map((pro, index) => (
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

              {/* Lease Advantages */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Advantages of Leasing</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {leasePros.map((pro, index) => (
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
                            <th className="text-left p-4 font-semibold">Factor</th>
                            <th className="text-left p-4 font-semibold">Financing</th>
                            <th className="text-left p-4 font-semibold">Leasing</th>
                          </tr>
                        </thead>
                        <tbody>
                          {comparison.map((item, index) => (
                            <tr key={index} className="border-b">
                              <td className="p-4 font-medium">{item.factor}</td>
                              <td className="p-4 text-muted-foreground">{item.finance}</td>
                              <td className="p-4 text-muted-foreground">{item.lease}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* BC-Specific Information */}
              <section>
                <h2 className="text-3xl font-bold mb-6">BC-Specific Considerations</h2>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3">Taxes</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span><strong>Financing:</strong> GST (5%) + PST (7%) paid upfront on full purchase price</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span><strong>Leasing:</strong> GST + PST on each monthly payment</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3">ICBC Insurance</h3>
                      <p className="text-muted-foreground mb-3">
                        Insurance costs are similar for both financing and leasing. However, leased vehicles 
                        typically require full coverage, which may be slightly more expensive.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3">Early Termination</h3>
                      <p className="text-muted-foreground mb-3">
                        <strong>Financing:</strong> You can sell or trade the vehicle at any time, using the 
                        proceeds to pay off the loan.
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Leasing:</strong> Early termination can be expensive. You may owe remaining 
                        payments plus penalties. Consider lease transfer options.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* When to Finance */}
              <section>
                <h2 className="text-3xl font-bold mb-6">When Financing Makes Sense</h2>
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>You drive more than 20,000 km per year</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>You want to own the vehicle long-term</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>You plan to customize or modify the vehicle</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>You want to build equity in the vehicle</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>You prefer predictable long-term costs</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              {/* When to Lease */}
              <section>
                <h2 className="text-3xl font-bold mb-6">When Leasing Makes Sense</h2>
                <Card className="bg-accent/5 border-accent/20">
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>You want lower monthly payments</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>You prefer driving a new vehicle every few years</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>You drive less than 20,000 km per year</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>You're a business owner (tax benefits)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>You want to stay within warranty coverage</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <LeadMagnetForm
                title="Get a Custom Quote"
                description="Compare financing vs. leasing options for your situation"
                buttonText="Get My Quote"
                source="finance-vs-lease"
              />

              <Card>
                <CardHeader>
                  <CardTitle>Explore Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild variant="cta" className="w-full">
                    <Link to="/finance">Get Pre-Approved</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/leasing">Learn About Leasing</Link>
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

export default FinanceVsLease;

