import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Wrench, Car, Heart, AlertCircle, Phone, Eye, Navigation } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WarrantiesProtection = () => {
  const products = [
    {
      icon: Shield,
      title: "Tire & Rim Protection",
      description: "Comprehensive coverage for tire and rim damage from road hazards. Includes replacement or repair of damaged tires and rims from potholes, nails, glass, and other road debris.",
      features: [
        "Coverage for all four tires and rims",
        "No deductible on claims",
        "Transferable to new owner",
        "24/7 roadside assistance included"
      ]
    },
    {
      icon: Wrench,
      title: "Powertrain Warranty",
      description: "Extended protection for your vehicle's most critical components including engine, transmission, and drivetrain. Peace of mind for years to come.",
      features: [
        "Engine components coverage",
        "Transmission protection",
        "Drivetrain and axle coverage",
        "Transferable coverage"
      ]
    },
    {
      icon: Car,
      title: "Bumper-to-Bumper Coverage",
      description: "The most comprehensive protection plan available. Covers virtually all mechanical and electrical components of your vehicle.",
      features: [
        "Comprehensive mechanical coverage",
        "Electrical system protection",
        "Climate control systems",
        "Navigation and entertainment systems"
      ]
    },
    {
      icon: Heart,
      title: "Job Loss & Disability Protection",
      description: "Financial security if the unexpected happens. Helps cover your vehicle payments during involuntary job loss or disability.",
      features: [
        "Up to 6 months payment coverage",
        "Disability protection included",
        "Involuntary job loss coverage",
        "Peace of mind for your family"
      ]
    },
    {
      icon: Shield,
      title: "Life Insurance Coverage",
      description: "Ensures your family isn't burdened with vehicle payments in the event of your passing. Complete coverage for the remaining loan balance.",
      features: [
        "Full loan balance coverage",
        "No medical exam required",
        "Immediate coverage activation",
        "Protects your loved ones"
      ]
    },
    {
      icon: AlertCircle,
      title: "Rust Protection Module",
      description: "Advanced electronic rust protection system that prevents corrosion and extends your vehicle's life in harsh Canadian weather.",
      features: [
        "Electronic rust prevention",
        "10-year warranty",
        "Protects resale value",
        "Ideal for Canadian climate"
      ]
    },
    {
      icon: Phone,
      title: "24/7 Roadside Assistance",
      description: "Round-the-clock support when you need it most. Includes towing, flat tire changes, lockout service, and emergency fuel delivery.",
      features: [
        "24/7 emergency support",
        "Unlimited distance towing",
        "Flat tire service",
        "Lockout assistance"
      ]
    },
    {
      icon: Eye,
      title: "Glass Protection",
      description: "Complete coverage for windshield and glass damage. No deductible repairs or replacement for chips, cracks, and breaks.",
      features: [
        "Windshield replacement",
        "All glass coverage",
        "No deductible",
        "Mobile service available"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Vehicle Protection & Warranty Products | Olympic Hyundai Vancouver</title>
        <meta 
          name="description" 
          content="Protect your investment with comprehensive warranty and protection products. Tire & rim protection, extended warranties, rust protection, and more at Olympic Hyundai Vancouver." 
        />
        <link rel="canonical" href="https://olympichyundaivancouver.com/warranties" />
      </Helmet>

      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-accent py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Protect Your Investment
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
              Comprehensive warranty and protection products to give you peace of mind on the road
            </p>
            <Button asChild variant="ocean" size="lg">
              <Link to="/finance">Get a Quote Today</Link>
            </Button>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Why Protection Matters</h2>
            <p className="text-lg text-muted-foreground">
              Owning a vehicle is a significant investment. Our range of protection products ensures 
              that unexpected repairs and circumstances don't derail your budget. Each product is 
              designed to provide comprehensive coverage and peace of mind for Vancouver drivers.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-[0_8px_24px_hsl(var(--primary)/0.12)] transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                    <CardDescription className="text-base">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-sm">
                          <Navigation className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Protect Your Vehicle?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our finance team can help you understand which protection products are right for your needs and budget. 
              Get started with a free quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="cta" size="lg">
                <Link to="/finance">Get Pre-Approved</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/used">Browse Inventory</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-muted">
          <div className="container mx-auto px-4">
            <p className="text-sm text-muted-foreground text-center max-w-4xl mx-auto">
              Protection product availability and coverage may vary by vehicle and financing terms. 
              Pricing is subject to underwriting approval. Full terms and conditions available upon request. 
              Products are optional and not required to obtain vehicle financing.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WarrantiesProtection;
