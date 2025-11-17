import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, TrendingUp, Target, Award, Phone, Calendar } from "lucide-react";

const CreditRebuilding = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Auto Credit Rebuilding Program Vancouver BC | Improve Credit Score with Car Loan</title>
        <meta 
          name="description" 
          content="Rebuild your credit score with our car financing program in Vancouver. Learn how making on-time auto payments can improve your credit by 100+ points." 
        />
      </Helmet>

      <Header />
      
      <main className="flex-grow bg-background">
        <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
              Build Your Financial Future
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Rebuild Your Credit Through Car Financing</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Turn your car payment into a powerful credit-building tool
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-primary mb-2">100+</div>
                    <p className="text-sm text-muted-foreground">Average Credit Score Increase in 12 Months</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-primary mb-2">95%</div>
                    <p className="text-sm text-muted-foreground">Success Rate for Credit Improvement</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-primary mb-2">6-12</div>
                    <p className="text-sm text-muted-foreground">Months to See Significant Improvement</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">How Auto Financing Rebuilds Credit</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        Payment History (35% of Your Credit Score)
                      </h3>
                      <p className="text-muted-foreground ml-7">
                        Every on-time payment is reported to all three major credit bureaus (Equifax, TransUnion, Experian). 
                        This is the single most important factor in your credit score. Consistent car payments demonstrate 
                        financial responsibility to future lenders.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        Credit Mix Diversification (10% of Your Credit Score)
                      </h3>
                      <p className="text-muted-foreground ml-7">
                        An auto loan adds installment credit to your profile, complementing any credit cards (revolving credit) 
                        you may have. Having different types of credit shows lenders you can manage various financial obligations.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        Positive Credit Account Building
                      </h3>
                      <p className="text-muted-foreground ml-7">
                        A car loan establishes a new positive account on your credit report. As you make payments, this account 
                        ages and strengthens your credit profile, especially important if you have limited credit history.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        Path to Better Rates
                      </h3>
                      <p className="text-muted-foreground ml-7">
                        As your credit improves, you can refinance your auto loan at a lower rate after 12-18 months, 
                        reducing your monthly payment and saving thousands in interest over the life of the loan.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Your Credit Rebuilding Timeline</h2>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Calendar className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Months 1-3: Foundation</h3>
                        <p className="text-sm text-muted-foreground">
                          New account appears on credit report. Focus on making first 3 payments on time. Small improvements 
                          (5-15 points) may be visible as payment history begins building.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Calendar className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Months 4-6: Progress</h3>
                        <p className="text-sm text-muted-foreground">
                          Consistent payment history strengthens. Credit score typically increases 20-40 points. 
                          Your account ages and becomes more valuable to your credit profile.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Calendar className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Months 7-12: Transformation</h3>
                        <p className="text-sm text-muted-foreground">
                          Significant credit score improvement (60-100+ points). You may qualify for refinancing at better 
                          rates. Other lenders start viewing you more favorably for credit cards, mortgages, and loans.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Calendar className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">12+ Months: Excellence</h3>
                        <p className="text-sm text-muted-foreground">
                          Established positive payment history. Potential for 100-150+ point improvement. You're positioned 
                          for prime lending rates on future financing and have access to better credit products.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Maximize Your Credit Building Success</h2>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        title: "Set Up Auto-Pay",
                        desc: "Never miss a payment by setting up automatic payments from your bank account."
                      },
                      {
                        title: "Pay On Time, Every Time",
                        desc: "Even one late payment can significantly impact your score. Make this your top priority."
                      },
                      {
                        title: "Pay More Than Minimum",
                        desc: "Extra payments reduce your loan balance faster and can save you interest."
                      },
                      {
                        title: "Keep Credit Card Balances Low",
                        desc: "Aim to use less than 30% of your available credit limit on credit cards."
                      },
                      {
                        title: "Don't Apply for Too Much Credit",
                        desc: "Multiple credit applications in a short time can hurt your score."
                      },
                      {
                        title: "Monitor Your Credit",
                        desc: "Check your credit report regularly to track progress and catch any errors."
                      },
                      {
                        title: "Build an Emergency Fund",
                        desc: "Save 1-2 months of car payments to protect against financial emergencies."
                      },
                      {
                        title: "Consider Bi-Weekly Payments",
                        desc: "Make half your payment every 2 weeks—you'll make an extra payment per year."
                      }
                    ].map((tip) => (
                      <div key={tip.title} className="border rounded-lg p-4">
                        <h3 className="font-semibold mb-1 text-sm">{tip.title}</h3>
                        <p className="text-xs text-muted-foreground">{tip.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Refinancing for Better Rates</h2>
                  
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Once you've made 12-18 months of on-time payments and improved your credit score, you may qualify 
                      to refinance your auto loan at a significantly lower interest rate.
                    </p>

                    <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                      <h3 className="font-bold mb-4">Example Refinancing Scenario:</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Original Loan:</span>
                          <span className="font-semibold">$25,000 @ 18.99% for 72 months = $555/mo</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">After 18 Months:</span>
                          <span className="font-semibold">$21,500 remaining balance</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span className="text-muted-foreground">Refinanced Loan:</span>
                          <span className="font-semibold text-primary">$21,500 @ 9.99% for 54 months = $450/mo</span>
                        </div>
                        <div className="flex justify-between font-bold text-primary pt-2 border-t">
                          <span>Monthly Savings:</span>
                          <span>$105/month ($5,670 over life of loan)</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      We'll proactively contact you when you're eligible for refinancing and help you through the process at no cost.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold text-lg">Start Building Your Credit Today</h3>
                  <p className="text-sm text-muted-foreground">
                    Get approved for financing and start your journey to better credit.
                  </p>
                  
                  <Button asChild variant="cta" className="w-full" size="lg">
                    <Link to="/finance">Apply Now</Link>
                  </Button>

                  <Button asChild variant="outline" className="w-full">
                    <a href="tel:+16048768931">
                      <Phone className="w-4 h-4 mr-2" />
                      Speak to a Specialist
                    </a>
                  </Button>

                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-3 text-sm">Free Resources:</h4>
                    <ul className="space-y-2 text-xs text-muted-foreground">
                      <li>✓ Credit Score Monitoring Guide</li>
                      <li>✓ Monthly Budget Worksheet</li>
                      <li>✓ On-Time Payment Reminders</li>
                      <li>✓ Refinancing Eligibility Checker</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Success Stories</h3>
                  <div className="space-y-4 text-sm">
                    <div className="border-l-4 border-primary pl-3">
                      <p className="text-muted-foreground mb-1">
                        "My credit score went from 520 to 680 in just 14 months!"
                      </p>
                      <p className="text-xs text-muted-foreground">- Sarah M., Vancouver</p>
                    </div>
                    <div className="border-l-4 border-primary pl-3">
                      <p className="text-muted-foreground mb-1">
                        "I was able to refinance and save $120/month after one year."
                      </p>
                      <p className="text-xs text-muted-foreground">- David K., Burnaby</p>
                    </div>
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

export default CreditRebuilding;
