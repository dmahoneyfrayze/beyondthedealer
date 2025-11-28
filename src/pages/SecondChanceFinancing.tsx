import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Heart, Shield, TrendingUp, Users, Phone } from "lucide-react";


const SecondChanceFinancing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Second Chance Auto Financing | Credit Rebuilding Programs</title>
        <meta
          name="description"
          content="Fresh start auto financing. We specialize in helping customers with past credit challenges, bankruptcy, and consumer proposals rebuild credit through car financing."
        />
        <meta
          name="keywords"
          content="second chance financing, bankruptcy car loans, bad credit auto financing, credit rebuilding, consumer proposal car loan"
        />
      </Helmet>

      <Header />

      <main className="flex-grow bg-background">
        <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
              Fresh Start Auto Financing
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Everyone Deserves a Second Chance</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Past credit challenges don't define your future. We're here to help you rebuild and drive with confidence.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Helping Thousands</h3>
                <p className="text-sm text-muted-foreground">
                  We've helped thousands of Canadians get approved and back on the road
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">No Judgment Zone</h3>
                <p className="text-sm text-muted-foreground">
                  We understand life happens. Our team treats everyone with respect and dignity
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Credit Building</h3>
                <p className="text-sm text-muted-foreground">
                  Successfully rebuilding credit scores by an average of 100+ points in 12 months
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* We Help With */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Heart className="w-6 h-6 text-primary" />
                    We Welcome All Credit Situations
                  </h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Bankruptcy (Discharged or Active)",
                      "Consumer Proposal",
                      "Collections or Charge-Offs",
                      "Previous Repossession",
                      "Low Credit Score",
                      "Limited Credit History",
                      "Self-Employed Income",
                      "Recent Immigration to Canada",
                      "Divorce or Separation",
                      "Job Loss or Income Change",
                      "Medical or Emergency Expenses",
                      "Student Loans in Default"
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* How It Works */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Simple 3-Step Process</h2>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                        1
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Quick Application</h3>
                        <p className="text-muted-foreground">
                          Complete our confidential online application in minutes. No impact on your credit score to apply.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                        2
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Expert Review & Approval</h3>
                        <p className="text-muted-foreground">
                          Our specialists work with multiple lenders to find the best financing solution for your situation.
                          Most applications are reviewed within 2 hours.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                        3
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Choose Your Vehicle & Drive</h3>
                        <p className="text-muted-foreground">
                          Browse our inventory of quality vehicles, select the one that fits your needs and budget,
                          and drive home today.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Why Choose Beyond the Dealership for Your Fresh Start?</h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">🤝 Understanding & Support</h3>
                      <p className="text-muted-foreground">
                        We understand that credit challenges can happen to anyone. Our team is trained to listen,
                        understand your situation, and work with you—not against you.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">🏦 Multiple Lender Relationships</h3>
                      <p className="text-muted-foreground">
                        We work with over 20 financial institutions, including those that specialize in second chance
                        lending. This means better approval rates and more competitive terms.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">📈 Credit Rebuilding Program</h3>
                      <p className="text-muted-foreground">
                        Every successful payment is reported to credit bureaus, helping you rebuild your credit score.
                        We provide resources and guidance throughout your journey.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">🚗 Quality Vehicle Selection</h3>
                      <p className="text-muted-foreground">
                        Choose from our extensive inventory of inspected, reliable vehicles. We ensure you get a car
                        you can count on, not just any car.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">💼 Flexible Documentation</h3>
                      <p className="text-muted-foreground">
                        We work with various proof of income options including pay stubs, bank statements, tax returns,
                        and business records for self-employed applicants.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Common Questions</h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Can I get approved with an active bankruptcy?</h3>
                      <p className="text-muted-foreground">
                        Yes! We work with lenders who approve applications even with active bankruptcies. You may need
                        permission from your trustee, which we can help coordinate.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">How much do I need for a down payment?</h3>
                      <p className="text-muted-foreground">
                        Down payment requirements vary by situation, but we work to keep them as low as possible.
                        In many cases, we can work with $500-$1,000 down, and your trade-in can often cover this.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Will applying hurt my credit score?</h3>
                      <p className="text-muted-foreground">
                        Our initial application is a soft inquiry and does not affect your credit score. We only submit
                        a hard inquiry once we've found the right lender and you're ready to proceed.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">What interest rate can I expect?</h3>
                      <p className="text-muted-foreground">
                        Rates vary based on your specific situation, but typically range from 9.99% to 24.99%. As you
                        rebuild your credit and make on-time payments, you can refinance to a lower rate in the future.
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
                  <h3 className="font-bold text-lg">Start Your Fresh Start Today</h3>
                  <p className="text-sm text-muted-foreground">
                    Get a decision in as little as 2 hours. Most of our customers are approved and driving within 24-48 hours.
                  </p>

                  <Button asChild variant="cta" className="w-full" size="lg">
                    <Link to="/finance">Apply Now - Free</Link>
                  </Button>

                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">
                      <Phone className="w-4 h-4 mr-2" />
                      Contact Us
                    </Link>
                  </Button>

                  <div className="pt-4 border-t text-xs text-muted-foreground">
                    <p className="mb-2">✓ Confidential & Secure</p>
                    <p className="mb-2">✓ No Obligation</p>
                    <p className="mb-2">✓ Same-Day Response</p>
                    <p>✓ All Credit Situations Welcome</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle>Get Pre-Approved</CardTitle>
                  <p className="text-sm text-muted-foreground">Start your credit rebuilding journey today</p>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to="/finance">Apply Now</Link>
                  </Button>
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

export default SecondChanceFinancing;
