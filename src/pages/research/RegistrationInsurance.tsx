import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, DollarSign, CheckCircle2, AlertCircle, Info } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import LeadMagnetForm from "@/components/LeadMagnetForm";

const RegistrationInsurance = () => {
  const registrationSteps = [
    "Purchase vehicle and obtain bill of sale",
    "Get vehicle safety inspection (if required)",
    "Visit your local registry agent or insurance broker",
    "Pay registration fees and applicable taxes",
    "Receive license plates and registration",
  ];

  const requiredDocuments = [
    "Bill of sale (signed by both parties)",
    "Valid driver's license",
    "Vehicle inspection certificate (if required)",
    "Proof of insurance",
    "Proof of identity",
  ];

  const insuranceTypes = [
    {
      type: "Mandatory Coverage",
      description: "Required by law in all provinces",
      coverage: [
        "Third-party liability",
        "Accident benefits",
        "Uninsured automobile coverage",
        "Direct compensation (in some provinces)",
      ],
    },
    {
      type: "Optional Coverage",
      description: "Additional protection for peace of mind",
      coverage: [
        "Collision coverage",
        "Comprehensive coverage",
        "Loss of use",
        "Depreciation waiver",
      ],
    },
  ];

  const costs = [
    {
      item: "Vehicle Registration",
      amount: "$80 - $120",
      frequency: "Annual/Bi-Annual",
      description: "Varies by province and vehicle type",
    },
    {
      item: "License Plates",
      amount: "Varies",
      frequency: "One-time/Renewal",
      description: "Plate fee or validation sticker",
    },
    {
      item: "Insurance",
      amount: "Varies",
      frequency: "Annual/Monthly",
      description: "Based on driving history, location, and vehicle",
    },
    {
      item: "Sales Tax",
      amount: "5% - 15%",
      frequency: "One-time",
      description: "GST, PST, or HST depending on province",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-background">
        <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <Shield className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Registration & Insurance Guide</h1>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Everything you need to know about registering and insuring your vehicle in Canada
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Understanding Auto Insurance</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  In Canada, auto insurance is mandatory. The system varies by province—some have public (government-run)
                  insurance, while others have private insurance, or a hybrid system.
                </p>
                <p className="text-muted-foreground">
                  Regardless of where you live, you must have valid insurance and vehicle registration to legally
                  drive on public roads.
                </p>
              </section>

              {/* Registration Process */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Vehicle Registration Process</h2>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">General Steps</h3>
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
                <h2 className="text-3xl font-bold mb-6">Typical Costs</h2>
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
                          <h3 className="font-semibold text-lg mb-2">Safety Inspections</h3>
                          <p className="text-muted-foreground">
                            Most provinces require a safety inspection certificate for used vehicles before they can be
                            registered, especially if the vehicle is from out of province or over a certain age.
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
                            Driving without valid insurance is a serious offense in Canada. Penalties include heavy fines,
                            license suspension, and vehicle impoundment.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3">Common Discounts</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Safe driver / Claims-free discount</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Multi-vehicle / Multi-policy discount</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Winter tire discount (in some provinces)</span>
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
                      Vehicle registration and insurance must be renewed regularly (usually annually). You'll typically
                      receive a renewal notice by mail or email.
                    </p>
                    <p className="text-muted-foreground">
                      Many provinces now offer online renewal services. Ensure you renew before your expiration date
                      to avoid fines and coverage gaps.
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
                source="registration-insurance"
              />

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

export default RegistrationInsurance;

