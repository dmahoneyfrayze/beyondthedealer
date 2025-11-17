import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, DollarSign, Zap, Wrench, Search, Shield, Clock, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-vancouver.jpg";

const Index = () => {
  const features = [
    {
      icon: Car,
      title: "Quality Used Vehicles",
      description: "Browse inventory from 3 Vancouver Hyundai stores",
      link: "/used",
    },
    {
      icon: DollarSign,
      title: "Get Pre-Approved",
      description: "Fast financing approval in 60 seconds",
      link: "/finance",
    },
    {
      icon: Zap,
      title: "EV & Hybrid Savings",
      description: "BC + Federal incentive guides",
      link: "/ev-hybrid-guide-bc",
    },
    {
      icon: Wrench,
      title: "Service Specials",
      description: "Seasonal maintenance packages",
      link: "/service-specials",
    },
  ];

  const trustBadges = [
    { icon: Shield, text: "Local Vancouver Dealer" },
    { icon: Clock, text: "Same-Day Approvals" },
    { icon: MapPin, text: "Serving Greater Vancouver" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative h-[600px] flex items-center justify-center text-center bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
          <div className="relative z-10 container mx-auto px-4 text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Vancouver Hyundai<br />Resource Hub
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              Used inventory, financing, trade-ins & more
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="ocean" size="lg">
                <Link to="/used">Browse Used Inventory</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
                <Link to="/find-my-car">Find My Perfect Car</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Trust & Authority Section */}
        <section className="bg-secondary py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Part of the Olympic Auto Group Family</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                With 46 locations across Canada, Olympic Auto Group is one of Canada's largest automotive retailers. 
                We specialize in automotive sales, powersports, marine, RV, and rental services.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mt-6">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm font-medium">
                  <badge.icon className="w-5 h-5 text-primary" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Link key={index} to={feature.link}>
                  <Card className="h-full hover:shadow-[0_8px_24px_hsl(var(--primary)/0.12)] transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help Finding the Perfect Vehicle?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Our concierge service searches across multiple Hyundai stores for you
            </p>
            <Button asChild size="lg" variant="ocean" className="bg-white text-primary hover:bg-white/90">
              <Link to="/find-my-car">
                <Search className="w-5 h-5 mr-2" />
                Get Started
              </Link>
            </Button>
          </div>
        </section>

        {/* Trade-In & Finance Banner */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-secondary to-background border-2 border-primary/20">
                <CardContent className="p-8">
                  <DollarSign className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Value Your Trade</h3>
                  <p className="text-muted-foreground mb-4">
                    Get an instant estimate on your current vehicle
                  </p>
                  <Button asChild variant="cta">
                    <Link to="/trade-in">Get Trade Value</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-ocean-light to-background border-2 border-accent/20">
                <CardContent className="p-8">
                  <Shield className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Pre-Approval</h3>
                  <p className="text-muted-foreground mb-4">
                    Get approved in 60 seconds, all credit types welcome
                  </p>
                  <Button asChild variant="cta">
                    <Link to="/finance">Get Pre-Approved</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
