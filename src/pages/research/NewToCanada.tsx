import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, CheckCircle2, FileText, Shield, Users, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import LeadMagnetForm from "@/components/LeadMagnetForm";

const NewToCanada = () => {
  const benefits = [
    { icon: Shield, title: "No Canadian Credit Required", description: "We work with newcomers who don't have Canadian credit history yet" },
    { icon: Users, title: "International Co-Signer Options", description: "Family members abroad can co-sign your loan" },
    { icon: FileText, title: "Study/Work Permit Accepted", description: "Valid permits are accepted as proof of status" },
    { icon: Globe, title: "Multilingual Support", description: "Our team speaks multiple languages to help you feel comfortable" },
  ];

  const requirements = [
    "Valid work permit, study permit, or permanent resident card",
    "Proof of income (employment letter, pay stubs, or bank statements)",
    "Valid driver's license (International accepted)",
    "Proof of address",
    "Bank statements (3-6 months if available)",
    "Co-signer may be recommended for first-time buyers",
  ];

  const programs = [
    {
      title: "Newcomer Financing Program",
      description: "Designed specifically for newcomers to Canada",
      features: [
        "No Canadian credit history required",
        "International credit reports accepted",
        "Flexible income verification",
        "Extended financing terms available",
      ],
    },
    {
      title: "Permanent Resident Program",
      description: "Special rates for new permanent residents",
      features: [
        "PR card accepted as proof of status",
        "First-time buyer assistance",
        "Settlement organization referrals",
        "Welcome package with driving resources",
      ],
    },
    {
      title: "Work Permit Program",
      description: "For temporary workers",
      features: [
        "Work permit accepted",
        "Employment letter verification",
        "Flexible terms matching permit duration",
        "Conversion options when status changes",
      ],
    },
  ];

  const bcResources = [
    {
      title: "MPI Driver Licensing (Manitoba)",
      description: "Information about getting your Manitoba driver's license",
      link: "https://www.mpi.mb.ca/Pages/new-to-manitoba.aspx",
    },
    {
      title: "ServiceOntario (Ontario)",
      description: "Driver's license and vehicle registration in Ontario",
      link: "https://www.ontario.ca/page/exchange-out-province-drivers-licence",
    },
    {
      title: "Settlement Services",
      description: "Find settlement services in your area",
      link: "https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/new-life-canada.html",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-background">
        <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <Globe className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">New to Canada Programs</h1>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Welcome to Canada! We're here to help you get on the road in Manitoba & Ontario
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Welcome Message */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Welcome to Canada</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Moving to a new country is exciting, but it can also be challenging—especially when it comes to
                  getting a vehicle. We understand that as a newcomer, you may not have Canadian credit history,
                  and that's okay. We have specialized programs designed just for you.
                </p>
                <p className="text-muted-foreground">
                  Our New to Canada program helps newcomers get approved for vehicle financing, even without
                  established Canadian credit. We work with work permits, study permits, and permanent resident cards.
                </p>
              </section>

              {/* Benefits */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Why Choose Our Newcomer Program</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                            <benefit.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                            <p className="text-sm text-muted-foreground">{benefit.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Programs */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Available Programs</h2>
                <div className="space-y-6">
                  {programs.map((program, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{program.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{program.description}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {program.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Requirements */}
              <section>
                <h2 className="text-3xl font-bold mb-6">What You'll Need</h2>
                <Card>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </section>

              {/* Local Information */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Getting Started in Manitoba & Ontario</h2>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        Driver's Licensing
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        If you have a valid driver's license from another country, you can drive in Manitoba or Ontario for a limited time (typically 3-6 months). After that, you'll need to exchange it for a local license.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Tip:</strong> Many countries have reciprocal agreements with MPI (Manitoba) and ServiceOntario that allow you to exchange your license directly.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3">Vehicle Insurance</h3>
                      <p className="text-muted-foreground mb-3">
                        <strong>Manitoba:</strong> All vehicles must be insured through Manitoba Public Insurance (MPI).<br />
                        <strong>Ontario:</strong> You must purchase insurance from a private insurance company.
                      </p>
                      <p className="text-muted-foreground">
                        As a newcomer, you'll need:
                      </p>
                      <ul className="space-y-2 text-muted-foreground ml-4 mt-2">
                        <li>• Valid driver's license (Local or international)</li>
                        <li>• Proof of vehicle ownership</li>
                        <li>• Vehicle safety inspection (Safety Certificate)</li>
                        <li>• Proof of address</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3">Vehicle Registration</h3>
                      <p className="text-muted-foreground">
                        When you purchase a vehicle, you'll need to register it. This involves paying applicable taxes (PST/GST/HST) depending on your province. We handle all the paperwork to make this process seamless for you.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Resources */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Helpful Resources</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {bcResources.map((resource, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-2">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                        <Button asChild variant="outline" size="sm" className="w-full">
                          <a href={resource.link} target="_blank" rel="noopener noreferrer">
                            Visit Resource
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Tips */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Tips for Newcomers</h2>
                <Card className="bg-secondary">
                  <CardContent className="p-6">
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Start building Canadian credit by getting a credit card or small loan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Consider a co-signer to improve your approval chances</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Get your BC driver's license as soon as possible</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Keep all your immigration documents organized</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Ask questions—we're here to help you understand the process</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <LeadMagnetForm
                title="Apply for Newcomer Financing"
                description="Get pre-approved with our New to Canada program"
                buttonText="Apply Now"
                source="new-to-canada"
              />

              <Card>
                <CardHeader>
                  <CardTitle>Browse Inventory</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild variant="cta" className="w-full">
                    <Link to="/used">View Used Vehicles</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/find-my-car">Find My Perfect Car</Link>
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

export default NewToCanada;

