import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, DollarSign, Calculator, Info } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";


const LuxuryTax = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-background">
        <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Federal Luxury Tax Guide</h1>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Understanding the federal luxury tax on vehicles in Canada
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <section>
                <Card className="border-yellow-200 bg-yellow-50 dark:bg-yellow-950">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0" />
                      <div>
                        <h2 className="text-2xl font-bold mb-3">Federal Luxury Tax (Effective September 1, 2022)</h2>
                        <p className="text-muted-foreground">
                          The federal government introduced a luxury tax on new vehicles with a retail price over $100,000.
                          This tax applies to both new vehicles and aircraft, and is separate from GST and PST/HST.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* How It Works */}
              <section>
                <h2 className="text-3xl font-bold mb-6">How the Luxury Tax Works</h2>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-primary" />
                        Tax Calculation
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        The luxury tax is calculated as the <strong>lesser of</strong>:
                      </p>
                      <ul className="space-y-2 text-muted-foreground ml-4">
                        <li>• 10% of the total price (including GST/HST/PST), OR</li>
                        <li>• 20% of the amount over $100,000</li>
                      </ul>
                      <p className="text-sm text-muted-foreground mt-4">
                        <strong>Example:</strong> A vehicle priced at $120,000 would pay the lesser of $12,000 (10%)
                        or $4,000 (20% of $20,000), which is $4,000.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Info className="w-5 h-5 text-primary" />
                        What Vehicles Are Affected?
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• New vehicles with a retail price over $100,000</li>
                        <li>• Includes GST and PST/HST in the calculation</li>
                        <li>• Applies to both passenger vehicles and aircraft</li>
                        <li>• Does NOT apply to used vehicles</li>
                        <li>• Does NOT apply to commercial vehicles</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Tax Breakdown */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Tax Breakdown Example</h2>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">For a $120,000 Vehicle (Example with 5% GST):</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-muted rounded">
                        <span>Vehicle Price</span>
                        <span className="font-semibold">$120,000</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted rounded">
                        <span>GST (5%)</span>
                        <span className="font-semibold">$6,000</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-yellow-100 dark:bg-yellow-900 rounded border-2 border-yellow-300">
                        <span>Luxury Tax (20% of amount over $100k)</span>
                        <span className="font-semibold">$4,000</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-primary/10 rounded border-2 border-primary">
                        <span className="font-bold">Total (before provincial tax)</span>
                        <span className="font-bold text-lg">$130,000</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        *Note: Provincial sales tax (PST) or Harmonized Sales Tax (HST) will vary by province and is calculated on top.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Exemptions */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Exemptions & Special Cases</h2>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3">Used Vehicles</h3>
                      <p className="text-muted-foreground">
                        The luxury tax <strong>does NOT apply</strong> to used vehicles, regardless of their price.
                        This makes used luxury vehicles an attractive option for buyers looking to avoid the tax.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3">Commercial Vehicles</h3>
                      <p className="text-muted-foreground">
                        Vehicles used primarily for commercial purposes (trucks, vans, etc.) are exempt from the luxury tax,
                        even if they exceed $100,000.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3">Electric Vehicles</h3>
                      <p className="text-muted-foreground mb-3">
                        Electric vehicles are subject to the luxury tax if they exceed $100,000. However, you may still
                        qualify for federal and provincial EV incentives, which can offset some of the tax burden.
                      </p>
                      <Button asChild variant="outline" size="sm">
                        <Link to="/ev-guide">Learn About EV Incentives</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Strategies */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Strategies to Minimize Tax Impact</h2>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3">Consider Used Vehicles</h3>
                      <p className="text-muted-foreground">
                        Used luxury vehicles are exempt from the luxury tax. A 1-2 year old vehicle can save you
                        thousands in taxes while still providing excellent value.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3">Look for Vehicles Under $100k</h3>
                      <p className="text-muted-foreground">
                        Many high-quality vehicles are available just under the $100,000 threshold. Consider these
                        options to avoid the luxury tax entirely.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3">Lease Instead of Buy</h3>
                      <p className="text-muted-foreground">
                        While leasing doesn't eliminate the luxury tax, it may spread the cost over the lease term,
                        potentially making it more manageable.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Important Notes */}
              <section>
                <Card className="bg-secondary">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">Important Notes</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• The luxury tax is calculated on the total price including GST/HST/PST</li>
                      <li>• The tax is paid at the time of purchase</li>
                      <li>• The dealer is responsible for collecting and remitting the tax</li>
                      <li>• Always confirm the total price including all taxes before purchasing</li>
                      <li>• Consult with a tax professional for business purchases</li>
                    </ul>
                  </CardContent>
                </Card>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle>Avoid Luxury Tax</CardTitle>
                  <p className="text-sm text-muted-foreground">Find vehicles under the luxury tax threshold</p>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to="/used">Browse Inventory</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Browse Inventory</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild variant="cta" className="w-full">
                    <Link to="/used">View Used Vehicles (No Luxury Tax)</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">
                      Contact Us
                    </Link>
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

export default LuxuryTax;

