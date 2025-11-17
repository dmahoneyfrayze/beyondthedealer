import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, DollarSign, CheckCircle2, AlertCircle, Info } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import LeadMagnetForm from "@/components/LeadMagnetForm";

const BCRegistrationInsurance = () => {
  const registrationSteps = [
    "Purchase vehicle and obtain bill of sale",
    "Get vehicle inspection (if required for used vehicles)",
    "Visit ICBC Autoplan broker with required documents",
    "Pay registration fees, PST, and GST",
    "Receive license plates and registration",
  ];

  const requiredDocuments = [
    "Bill of sale (signed by both parties)",
    "Valid BC driver's license",
    "Vehicle inspection certificate (if required)",
    "Previous registration (if transferring)",
    "Proof of insurance",
    "Proof of identity",
  ];

  const insuranceTypes = [
    {
      type: "Basic Insurance",
      description: "Mandatory coverage required by law",
      coverage: [
        "Third-party liability ($200,000 minimum)",
        "Accident benefits",
        "Underinsured motorist protection",
        "Hit-and-run coverage",
      ],
    },
    {
      type: "Optional Insurance",
      description: "Additional coverage you can purchase",
      coverage: [
        "Collision coverage",
        "Comprehensive coverage",
        "Extended third-party liability",
        "Loss of use",
      ],
    },
  ];

  const costs = [
    {
      item: "Vehicle Registration",
      amount: "$18 - $36",
      frequency: "Annual",
      description: "Based on vehicle type and weight",
    },
    {
      item: "License Plates",
      amount: "$18",
      frequency: "One-time",
      description: "Initial plate fee",
    },
    {
      item: "Basic Insurance",
      amount: "Varies",
      frequency: "Annual",
      description: "Based on driver, vehicle, and location",
    },
    {
      item: "PST (7%)",
      amount: "7% of purchase price",
      frequency: "One-time",
      description: "Provincial sales tax on vehicle purchase",
    },
    {
      item: "GST (5%)",
      amount: "5% of purchase price",
      frequency: "One-time",
      description: "Federal goods and services tax",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-background">
        <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <Shield className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">BC Registration & Insurance Guide</h1>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Everything you need to know about registering and insuring your vehicle in British Columbia
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Understanding ICBC</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  In British Columbia, all vehicle insurance is provided through ICBC (Insurance Corporation of 
                  British Columbia). ICBC is a Crown corporation that provides both basic mandatory insurance 
                  and optional coverage.
                </p>
                <p className="text-muted-foreground">
                  When you purchase a vehicle in BC, you must register it with ICBC and obtain insurance before 
                  you can legally drive it on public roads.
                </p>
              </section>

              {/* Registration Process */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Vehicle Registration Process</h2>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Step-by-Step Guide</h3>
                    <ol className="space-y-3">
                      {registrationSteps.map((step, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                            {index + 1}
                          </div>
                          <span className="text-muted-foreground pt-1">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </section>

              {/* Required Documents */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Required Documents</h2>
                <Card>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {requiredDocuments.map((doc, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </section>

              {/* Insurance Types */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Types of Insurance</h2>
                <div className="space-y-6">
                  {insuranceTypes.map((insurance, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{insurance.type}</CardTitle>
                        <p className="text-sm text-muted-foreground">{insurance.description}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {insurance.coverage.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Costs */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Registration & Insurance Costs</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {costs.map((cost, index) => (
                        <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-semibold">{cost.item}</h3>
                              <p className="text-sm text-muted-foreground">{cost.description}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-primary">{cost.amount}</p>
                              <p className="text-xs text-muted-foreground">{cost.frequency}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Important Information */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Important Information</h2>
                <div className="space-y-4">
                  <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Info className="w-6 h-6 text-blue-600 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Vehicle Inspection</h3>
                          <p className="text-muted-foreground">
                            Used vehicles over 4 years old or with certain conditions require a safety inspection 
                            before registration. The inspection must be done at a designated inspection facility.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-yellow-200 bg-yellow-50 dark:bg-yellow-950">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Driving Without Insurance</h3>
                          <p className="text-muted-foreground">
                            Driving without valid ICBC insurance is illegal in BC and can result in fines, vehicle 
                            impoundment, and license suspension. Always ensure your insurance is current before driving.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3">Discounts Available</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Safe driver discount (up to 43% off)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Multi-vehicle discount</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Low annual mileage discount</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Driver training discount</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Renewal */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Renewal Process</h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">
                      Vehicle registration and insurance must be renewed annually. You'll receive a renewal notice 
                      from ICBC before your current registration expires.
                    </p>
                    <p className="text-muted-foreground">
                      You can renew online, by phone, or in person at an ICBC Autoplan broker. Make sure to renew 
                      before your current registration expires to avoid penalties.
                    </p>
                  </CardContent>
                </Card>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <LeadMagnetForm
                title="Get Insurance Quote"
                description="Get an estimate for your insurance costs"
                buttonText="Get Quote"
                source="bc-registration-insurance"
              />

              <Card>
                <CardHeader>
                  <CardTitle>ICBC Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild variant="outline" className="w-full" size="sm">
                    <a href="https://www.icbc.com" target="_blank" rel="noopener noreferrer">
                      Visit ICBC Website
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full" size="sm">
                    <a href="https://www.icbc.com/insurance/coverage/Pages/default.aspx" target="_blank" rel="noopener noreferrer">
                      Learn About Coverage
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild variant="cta" className="w-full">
                    <Link to="/find-my-car">Find My Car</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/finance">Get Pre-Approved</Link>
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

export default BCRegistrationInsurance;

