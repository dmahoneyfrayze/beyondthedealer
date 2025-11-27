import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, DollarSign, CheckCircle2, Users, Shield, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import LeadMagnetForm from "@/components/LeadMagnetForm";

const StudentPrograms = () => {
  const benefits = [
    { icon: DollarSign, title: "Special Financing Rates", description: "Competitive rates designed for students" },
    { icon: Shield, title: "Flexible Approval", description: "We understand student income situations" },
    { icon: Clock, title: "Deferred Payments", description: "Options to defer payments during school breaks" },
    { icon: Users, title: "Co-Signer Friendly", description: "Parent or guardian co-signer options available" },
  ];

  const requirements = [
    "Valid student ID from accredited institution",
    "Proof of enrollment (current or upcoming semester)",
    "Proof of income (part-time work, scholarships, grants)",
    "Valid driver's license",
    "Co-signer may be required for first-time buyers",
  ];

  const programs = [
    {
      title: "Student Financing Program",
      description: "Special financing rates and terms for full-time students",
      features: [
        "Lower interest rates",
        "Flexible payment schedules",
        "Co-signer options",
        "Deferred payment during exam periods",
      ],
    },
    {
      title: "Graduate Program",
      description: "For recent graduates starting their careers",
      features: [
        "Extended financing terms",
        "No down payment required (qualified buyers)",
        "First-time buyer assistance",
        "Career transition support",
      ],
    },
    {
      title: "International Student Program",
      description: "Designed for international students",
      features: [
        "No Canadian credit history required",
        "International co-signer options",
        "Study permit accepted",
        "Specialized support team",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-background">
        <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <GraduationCap className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Programs</h1>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Special financing and programs designed for students and recent graduates
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <section>
                <h2 className="text-3xl font-bold mb-6">We Support Students</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  We understand that being a student comes with unique financial challenges. That's why we offer
                  specialized programs designed to help students and recent graduates get behind the wheel of a reliable vehicle.
                </p>
                <p className="text-muted-foreground">
                  Whether you're a full-time student, recent graduate, or international student, we have options
                  to help you finance your first vehicle or upgrade to something more reliable.
                </p>
              </section>

              {/* Benefits */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Student Benefits</h2>
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

              {/* Local Considerations */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Student Considerations</h2>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3">Insurance Discounts</h3>
                      <p className="text-muted-foreground mb-3">
                        As a student, you may qualify for insurance discounts.
                      </p>
                      <ul className="space-y-2 text-muted-foreground ml-4">
                        <li>• <strong>Manitoba (MPI):</strong> Driver Safety Rating (DSR) discounts apply.</li>
                        <li>• <strong>Ontario:</strong> Many insurers offer "Good Student" discounts for maintaining a high GPA.</li>
                        <li>• Driver training discounts available in both provinces.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3">Tax Benefits</h3>
                      <p className="text-muted-foreground">
                        If you use your vehicle for work or business purposes, you may be able to deduct
                        certain expenses. Consult with a tax professional for advice specific to your situation.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Tips */}
              <section>
                <h2 className="text-3xl font-bold mb-6">Tips for Student Buyers</h2>
                <Card className="bg-secondary">
                  <CardContent className="p-6">
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Start with a budget-friendly used vehicle to build credit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Consider a co-signer to improve approval chances and rates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Look for vehicles with good fuel economy to save on operating costs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Factor in insurance costs when budgeting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Consider extended warranty for peace of mind</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <LeadMagnetForm
                title="Apply for Student Financing"
                description="Get pre-approved for our student programs"
                buttonText="Apply Now"
                source="student-programs"
              />

              <Card>
                <CardHeader>
                  <CardTitle>Student-Friendly Inventory</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild variant="cta" className="w-full">
                    <Link to="/used?price=under15k">Vehicles Under $15,000</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/used">Browse All Inventory</Link>
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

export default StudentPrograms;

