import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, DollarSign, Zap, Wrench, Search, Shield, Clock, MapPin, FileText, Download, CheckCircle2, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadMagnetForm from "@/components/LeadMagnetForm";
import MultiStepForm from "@/components/MultiStepForm";
import { TestimonialCard, SoldCounter } from "@/components/SocialProof";
import { useVehicles } from "@/hooks/useVehicles";
import { generateVehicleSlug } from "@/lib/vehicleUtils";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-vancouver.jpg";

const Index = () => {
  const { data: vehicles = [] } = useVehicles({});
  
  // Get random featured vehicles (up to 8)
  const featuredVehicles = vehicles.length > 0 
    ? [...vehicles].sort(() => Math.random() - 0.5).slice(0, 8)
    : [];

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
            <AnimatedSection direction="fade" delay={200}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-slide-down">
                Your Vancouver Hyundai<br />Resource Hub
              </h1>
            </AnimatedSection>
            <AnimatedSection direction="fade" delay={400}>
              <p className="text-xl md:text-2xl mb-8 opacity-95 animate-slide-up">
                Used inventory, financing, trade-ins & more
              </p>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="ocean" size="lg" className="hover:scale-105 transition-transform duration-300">
                  <Link to="/used">Browse Used Inventory</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-transform duration-300">
                  <Link to="/find-my-car">Find My Perfect Car</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Trust & Authority Section */}
        <section className="bg-secondary py-12">
          <div className="container mx-auto px-4">
            <AnimatedSection direction="fade">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Part of the Olympic Auto Group Family</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  With 46 locations across Canada, Olympic Auto Group is one of Canada's largest automotive retailers. 
                  We specialize in automotive sales, powersports, marine, RV, and rental services.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={200}>
              <div className="flex flex-wrap justify-center gap-8 mt-6">
                {trustBadges.map((badge, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-2 text-sm font-medium hover:scale-110 transition-transform duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <badge.icon className="w-5 h-5 text-primary animate-float" style={{ animationDelay: `${index * 200}ms` }} />
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Featured Vehicles Slider */}
        {featuredVehicles.length > 0 && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <AnimatedSection direction="fade">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Vehicles</h2>
                    <p className="text-muted-foreground">Hand-picked selections from our inventory</p>
                  </div>
                  <Button asChild variant="outline" className="hover:scale-105 transition-transform duration-300">
                    <Link to="/used">
                      View All <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {featuredVehicles.map((vehicle) => {
                    const price = vehicle.internet_price || vehicle.asking_price || vehicle.price || 0;
                    return (
                      <CarouselItem key={vehicle.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                        <Link to={`/vehicle/${generateVehicleSlug(vehicle)}`}>
                          <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-[1.02]">
                            <div className="aspect-video bg-muted relative overflow-hidden">
                              <img
                                src={vehicle.images?.[0] || "https://images.unsplash.com/photo-1619767886558-efdc259cde1a"}
                                alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                              />
                              {(vehicle.odometer || vehicle.mileage || 0) < 30000 && (
                                <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
                                  Low Miles
                                </div>
                              )}
                            </div>
                            <CardContent className="p-4">
                              <h3 className="font-bold text-lg mb-1 line-clamp-1">
                                {vehicle.year} {vehicle.make} {vehicle.model}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-3 line-clamp-1">
                                {vehicle.trim || 'Standard'}
                              </p>
                              <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-2xl font-bold text-primary">
                                  {price > 0 ? `$${price.toLocaleString()}` : "Contact for Price"}
                                </span>
                              </div>
                              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <span>{vehicle.mileage?.toLocaleString() || vehicle.odometer?.toLocaleString() || 'N/A'} km</span>
                                {vehicle.transmission && <span>{vehicle.transmission}</span>}
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-12" />
                <CarouselNext className="hidden md:flex -right-12" />
              </Carousel>
            </div>
          </section>
        )}

        {/* Features Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection direction="fade">
              <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <AnimatedSection key={index} direction="up" delay={index * 100}>
                  <Link to={feature.link}>
                    <Card className="h-full hover:shadow-[0_8px_24px_hsl(var(--primary)/0.12)] transition-all duration-300 cursor-pointer group hover:scale-105">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <feature.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Magnet Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="right" delay={0}>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-8 h-8 text-primary animate-float" />
                    <h2 className="text-3xl font-bold">Free BC Auto Buying Guide</h2>
                  </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Download our comprehensive guide covering everything you need to know about buying a car in British Columbia, including:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>BC tax and registration requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>ICBC insurance basics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Financing vs. leasing comparison</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>EV rebates and incentives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Student and newcomer programs</span>
                  </li>
                </ul>
                <SoldCounter count={47} className="mb-6" />
              </div>
              </AnimatedSection>
              <AnimatedSection direction="left" delay={200}>
                <LeadMagnetForm
                  title="Get Your Free Guide"
                  description="Enter your email and we'll send you the complete BC Auto Buying Guide instantly."
                  buttonText="Download Free Guide"
                  source="homepage-guide"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection direction="fade">
              <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-6">
              <AnimatedSection direction="up" delay={0}>
                <TestimonialCard
                name="Sarah Chen"
                location="Vancouver, BC"
                rating={5}
                vehicle="2020 Hyundai Tucson"
                text="The team made the entire process so easy. Got approved quickly and found the perfect SUV for my family. Highly recommend!"
              />
              </AnimatedSection>
              <AnimatedSection direction="up" delay={200}>
                <TestimonialCard
                name="Michael Rodriguez"
                location="Burnaby, BC"
                rating={5}
                vehicle="2019 Hyundai Elantra"
                text="As a newcomer to Canada, I was worried about financing. Olympic Hyundai helped me understand everything and got me approved. Amazing service!"
              />
              </AnimatedSection>
              <AnimatedSection direction="up" delay={400}>
                <TestimonialCard
                name="Jennifer Park"
                location="Richmond, BC"
                rating={5}
                vehicle="2021 Hyundai Kona Electric"
                text="The EV guide was incredibly helpful. They walked me through all the rebates and incentives. Love my new Kona!"
              />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Quick Pre-Approval Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Get Pre-Approved in Minutes</h2>
              <p className="text-center text-muted-foreground mb-8">
                Fast, easy, and no impact on your credit score
              </p>
              <MultiStepForm
                title="Quick Pre-Approval"
                description="3 simple steps to get approved"
              />
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
