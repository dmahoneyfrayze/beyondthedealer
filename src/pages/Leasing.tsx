import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, DollarSign, Repeat, TrendingDown, Phone, Calculator } from "lucide-react";

const Leasing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Vehicle Leasing Vancouver BC | Low Payment Car Lease Deals</title>
        <meta 
          name="description" 
          content="Explore vehicle leasing options in Vancouver, BC. Lower monthly payments, latest models, and flexible terms. Compare leasing vs buying for your situation." 
        />
      </Helmet>

      <Header />
      
      <main className="flex-grow bg-background">
        <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
              Flexible Options
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Vehicle Leasing in Vancouver</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Lower payments, newest models, and the flexibility to drive what you love
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Benefits */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <TrendingDown className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-bold mb-2">Lower Monthly Payments</h3>
                    <p className="text-sm text-muted-foreground">
                      Lease payments are typically 30-60% lower than financing payments for the same vehicle.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Repeat className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-bold mb-2">Drive New Every Few Years</h3>
                    <p className="text-sm text-muted-foreground">
                      Enjoy the latest safety features and technology by upgrading to a new vehicle every 2-4 years.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <DollarSign className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-bold mb-2">Minimal Upfront Costs</h3>
                    <p className="text-sm text-muted-foreground">
                      Lower down payment requirements compared to traditional financing.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-bold mb-2">Warranty Coverage</h3>
                    <p className="text-sm text-muted-foreground">
                      Most leases are covered under factory warranty for the entire term—fewer repair costs.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">How Leasing Works</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2">1. Choose Your Vehicle & Term</h3>
                      <p className="text-muted-foreground">
                        Select any new or certified pre-owned vehicle from our inventory. Choose a lease term that fits 
                        your lifestyle—typically 24, 36, or 48 months.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">2. Set Your Annual Mileage</h3>
                      <p className="text-muted-foreground">
                        Choose an annual kilometer allowance (typically 12,000-24,000 km per year). Higher mileage 
                        options are available. Your payment is based on the difference between the vehicle's purchase 
                        price and its expected value at lease end.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">3. Make Low Monthly Payments</h3>
                      <p className="text-muted-foreground">
                        Enjoy significantly lower monthly payments than traditional financing. You're only paying for 
                        the portion of the vehicle you use during your lease term.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">4. Choose Your End-of-Lease Option</h3>
                      <p className="text-muted-foreground">
                        When your lease ends, you have three flexible options:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground ml-4">
                        <li>Return the vehicle and lease or purchase a new one</li>
                        <li>Purchase the vehicle at the predetermined residual value</li>
                        <li>Extend your current lease (subject to approval)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Leasing vs. Buying: Which is Right for You?</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border-2 border-primary/20 rounded-lg p-6 bg-primary/5">
                      <h3 className="font-bold mb-4 text-lg flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        Leasing is Great If You:
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li>✓ Want lower monthly payments</li>
                        <li>✓ Like driving new vehicles with latest tech</li>
                        <li>✓ Drive average or lower annual kilometers</li>
                        <li>✓ Want minimal maintenance concerns</li>
                        <li>✓ Prefer flexibility to upgrade regularly</li>
                        <li>✓ Can stay within mileage limits</li>
                        <li>✓ Want predictable transportation costs</li>
                      </ul>
                    </div>

                    <div className="border-2 border-accent/20 rounded-lg p-6 bg-accent/5">
                      <h3 className="font-bold mb-4 text-lg flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                        Buying is Better If You:
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li>✓ Want to build equity and own outright</li>
                        <li>✓ Drive high annual kilometers (25,000+)</li>
                        <li>✓ Want to customize or modify vehicle</li>
                        <li>✓ Plan to keep vehicle 5+ years</li>
                        <li>✓ Don't want mileage restrictions</li>
                        <li>✓ Prefer no end-of-lease considerations</li>
                        <li>✓ Want freedom to sell whenever you choose</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Lease Payment Example</h2>
                  
                  <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                    <div className="mb-4">
                      <h3 className="font-semibold mb-2">2024 Hyundai Tucson Preferred</h3>
                      <p className="text-sm text-muted-foreground">MSRP: $38,500 CAD</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-sm">Lease Terms:</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• 48-month term</li>
                          <li>• 20,000 km/year allowance</li>
                          <li>• $0 down payment</li>
                          <li>• 4.99% lease rate</li>
                        </ul>
                      </div>

                      <div className="flex flex-col justify-center">
                        <p className="text-sm text-muted-foreground mb-2">Estimated Payment:</p>
                        <p className="text-4xl font-bold text-primary">$349<span className="text-xl">/mo</span></p>
                        <p className="text-xs text-muted-foreground mt-2">+ applicable taxes</p>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-primary/20 text-xs text-muted-foreground">
                      <p>
                        * Example for illustration only. Actual payments vary based on credit approval, down payment, 
                        and current incentives. Price excludes taxes, licensing, PPSA, documentation fee, air conditioning 
                        tax, and tire stewardship fee.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/used">
                        <Calculator className="w-4 h-4 mr-2" />
                        Calculate Your Payment
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">End of Lease Options Explained</h2>
                  
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Option 1: Return & Lease/Buy New</h3>
                      <p className="text-sm text-muted-foreground">
                        Simply return your vehicle and start fresh with a new lease or purchase. We handle the inspection 
                        and paperwork. If the vehicle is in good condition within your mileage allowance, you walk away 
                        with no further obligations.
                      </p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Option 2: Purchase Your Leased Vehicle</h3>
                      <p className="text-sm text-muted-foreground">
                        Buy your leased vehicle at the predetermined residual value set at the start of your lease. 
                        This option is great if you love the vehicle or if the market value is higher than the buyout price. 
                        We can help you finance the purchase.
                      </p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Option 3: Extend Your Lease</h3>
                      <p className="text-sm text-muted-foreground">
                        Not ready to commit? Extend your current lease on a month-to-month basis while you decide your 
                        next steps. Subject to lender approval.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Can I lease with less-than-perfect credit?</h3>
                      <p className="text-sm text-muted-foreground">
                        Yes! While leasing typically requires good credit (650+), we work with multiple lenders and can 
                        often approve leases for customers with credit scores as low as 600. Higher down payments or 
                        shorter terms may be required.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">What happens if I exceed my mileage?</h3>
                      <p className="text-sm text-muted-foreground">
                        Excess mileage is typically charged at $0.10-$0.20 per kilometer over your allowance. You can 
                        purchase additional kilometers upfront at a lower rate if you think you'll exceed your limit.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Can I end my lease early?</h3>
                      <p className="text-sm text-muted-foreground">
                        Yes, but there may be early termination fees. Options include transferring your lease to another 
                        qualified person, purchasing the vehicle, or returning it early (fees apply). We can help you 
                        explore the most cost-effective option.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Do I need insurance?</h3>
                      <p className="text-sm text-muted-foreground">
                        Yes, full coverage insurance is required for leased vehicles. We can connect you with insurance 
                        providers who specialize in leased vehicle coverage.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold text-lg">Ready to Lease?</h3>
                  <p className="text-sm text-muted-foreground">
                    Get a custom lease quote on any vehicle in our inventory.
                  </p>
                  
                  <Button asChild variant="cta" className="w-full" size="lg">
                    <Link to="/finance">Get Lease Quote</Link>
                  </Button>

                  <Button asChild variant="outline" className="w-full">
                    <a href="tel:+16048768931">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Leasing Specialist
                    </a>
                  </Button>

                  <Button asChild variant="outline" className="w-full">
                    <Link to="/used">Browse Vehicles</Link>
                  </Button>

                  <div className="pt-4 border-t text-xs text-muted-foreground">
                    <p className="font-semibold mb-2">BC Pricing Disclosure:</p>
                    <p>
                      All lease payments exclude PST, GST, air conditioning tax, tire stewardship fee, PPSA 
                      registration, documentation fee, and licensing costs. Terms subject to credit approval.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Popular Lease Models</h3>
                  <div className="space-y-3 text-sm">
                    <Link to="/used" className="block p-3 border rounded hover:bg-accent/5 transition-colors">
                      <p className="font-medium">Hyundai Elantra</p>
                      <p className="text-xs text-muted-foreground">From $289/mo</p>
                    </Link>
                    <Link to="/used" className="block p-3 border rounded hover:bg-accent/5 transition-colors">
                      <p className="font-medium">Hyundai Tucson</p>
                      <p className="text-xs text-muted-foreground">From $349/mo</p>
                    </Link>
                    <Link to="/used" className="block p-3 border rounded hover:bg-accent/5 transition-colors">
                      <p className="font-medium">Hyundai Santa Fe</p>
                      <p className="text-xs text-muted-foreground">From $449/mo</p>
                    </Link>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">+ taxes, 48 months, 20k km/year</p>
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

export default Leasing;
