import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, DollarSign, Car, Clock, Phone } from "lucide-react";

const SignAndDrive = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Sign and Drive Program | $0 Down Car Financing</title>
        <meta
          name="description"
          content="Drive today with our Sign and Drive program. Low or $0 down payment options available for qualified buyers. Get approved fast!"
        />
      </Helmet>

      <Header />

      <main className="flex-grow bg-background">
        <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
              Limited Time Offer
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sign and Drive Today</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Get on the road faster with our flexible down payment programs
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
                    <DollarSign className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-bold mb-2">Low Down Payment</h3>
                    <p className="text-sm text-muted-foreground">
                      As low as $0-$500 down with approved credit. Your trade-in can often cover the down payment.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Car className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-bold mb-2">Drive Today</h3>
                    <p className="text-sm text-muted-foreground">
                      Same-day delivery available on most vehicles. Complete paperwork and drive home in hours, not days.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Clock className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-bold mb-2">Fast Approval</h3>
                    <p className="text-sm text-muted-foreground">
                      Get approved in as little as 15 minutes. Our streamlined process gets you on the road faster.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-bold mb-2">All Credit Welcome</h3>
                    <p className="text-sm text-muted-foreground">
                      Sign and Drive programs available for good credit, rebuilding credit, and first-time buyers.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">How Sign and Drive Works</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">1</span>
                        Get Pre-Approved Online
                      </h3>
                      <p className="text-muted-foreground ml-10">
                        Complete our quick online application. You'll receive a pre-approval decision within minutes,
                        including your maximum purchasing power and estimated payments.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">2</span>
                        Choose Your Vehicle
                      </h3>
                      <p className="text-muted-foreground ml-10">
                        Browse our inventory online or visit our showroom. Select a vehicle that fits within your
                        approved amount. Our team will help you find the perfect match.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">3</span>
                        Minimal Down Payment
                      </h3>
                      <p className="text-muted-foreground ml-10">
                        With approved credit, your down payment could be as low as $0-$500. We accept cash, debit,
                        credit card, and trade-ins to cover your down payment.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">4</span>
                        Sign & Drive Home
                      </h3>
                      <p className="text-muted-foreground ml-10">
                        Complete the paperwork, finalize your financing, and drive home the same day. We'll handle
                        registration, insurance setup, and all documentation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">What's Included</h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Competitive interest rates",
                      "Flexible payment terms (24-96 months)",
                      "Gap insurance options",
                      "Extended warranty available",
                      "Same-day financing decisions",
                      "Free vehicle history report",
                      "Complimentary first oil change",
                      "30-day exchange policy"
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Qualification Requirements</h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">To qualify for $0 down:</h3>
                      <ul className="space-y-2 text-muted-foreground ml-4">
                        <li>• Credit score of 650 or higher</li>
                        <li>• Stable employment (2+ years with current employer preferred)</li>
                        <li>• Debt-to-income ratio under 45%</li>
                        <li>• Valid driver's license</li>
                        <li>• Proof of insurance or ability to obtain</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Low down payment options ($500-$1,000):</h3>
                      <ul className="space-y-2 text-muted-foreground ml-4">
                        <li>• Credit score of 550-649</li>
                        <li>• Recent credit rebuilding efforts</li>
                        <li>• Stable income (can be self-employed)</li>
                        <li>• Trade-in can be applied to down payment</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm">
                      <strong>Don't meet these requirements?</strong> We still want to help! Check out our{" "}
                      <Link to="/second-chance-financing" className="text-primary hover:underline">
                        Second Chance Financing
                      </Link>{" "}
                      program for more flexible options.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold text-lg">Ready to Drive Today?</h3>
                  <p className="text-sm text-muted-foreground">
                    Get pre-approved in minutes and find out your down payment amount.
                  </p>

                  <Button asChild variant="cta" className="w-full" size="lg">
                    <Link to="/finance">Get Pre-Approved</Link>
                  </Button>

                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">
                      <Phone className="w-4 h-4 mr-2" />
                      Contact Us
                    </Link>
                  </Button>

                  <Button asChild variant="outline" className="w-full">
                    <Link to="/used">Browse Inventory</Link>
                  </Button>

                  <div className="pt-4 border-t text-xs text-muted-foreground">
                    <p className="font-semibold mb-2">Pricing Disclosure:</p>
                    <p>
                      All prices exclude applicable taxes, PPSA registration, dealer documentation fee, and licensing costs. Final pricing provided during purchase.
                    </p>
                  </div>
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

export default SignAndDrive;
