import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight, Star, Shield, CheckCircle2, ArrowRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import { useVehicles } from "@/hooks/useVehicles";
import AnimatedSection from "@/components/AnimatedSection";
import { TestimonialCard } from "@/components/SocialProof";
import LeadMagnetForm from "@/components/LeadMagnetForm";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => {
  const { data: vehicles = [], isLoading } = useVehicles({});
  const featuredVehicles = vehicles.slice(0, 3);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-accent selection:text-accent-foreground">
      <Helmet>
        <title>Beyond the Dealership | Premium Used Cars & Nationwide Delivery</title>
        <meta name="description" content="Experience a new standard in used car buying. Premium inventory, nationwide delivery, and hassle-free financing. Beyond the Dealership." />
      </Helmet>

      <Header />

      <main className="flex-grow">
        {/* Cinematic Hero Section */}
        <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
          {/* Background Image/Video */}
          <div className="absolute inset-0 z-0">
            <img
              src="/hero-cinematic.png"
              alt="Premium SUV at Golden Hour"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10 pt-20">
            <div className="max-w-2xl text-white">
              <AnimatedSection direction="up" delay={100}>
                <Badge variant="outline" className="mb-6 border-accent text-accent px-4 py-1 text-sm tracking-wider uppercase">
                  Nationwide Delivery Available
                </Badge>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={200}>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                  Experience the <br />
                  <span className="text-accent">New Standard</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={300}>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light leading-relaxed max-w-xl">
                  Premium vehicles, transparent financing, and a buying experience that goes beyond the dealership.
                </p>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={400}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90 text-lg px-8 py-6 h-auto font-semibold shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all hover:scale-105">
                    <Link to="/used">View Inventory</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto font-semibold backdrop-blur-sm">
                    <Link to="/finance">Get Pre-Approved</Link>
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={500}>
                <div className="mt-12 flex items-center gap-8 text-sm font-medium text-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span>No Hidden Fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span>30-Day Warranty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span>Best Price Guarantee</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Search Section - Floating */}
        <section className="relative z-20 -mt-24 container mx-auto px-4 mb-20">
          <AnimatedSection direction="up" delay={600}>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
              <SearchBar />
            </div>
          </AnimatedSection>
        </section>

        {/* Value Proposition / Fintech Style Section */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection direction="right">
                <div className="relative">
                  <div className="absolute -inset-4 bg-accent/20 rounded-full blur-3xl opacity-50" />
                  <img
                    src="/hero-fintech.png"
                    alt="Easy Financing Process"
                    className="relative rounded-2xl shadow-2xl border border-white/10"
                  />
                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -right-6 bg-white dark:bg-card p-4 rounded-xl shadow-xl border border-border flex items-center gap-3 animate-float">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                      <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">Status</p>
                      <p className="text-sm font-bold text-foreground">Pre-Approved</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="left">
                <Badge variant="outline" className="mb-4 border-primary/20 text-primary">Simple & Transparent</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                  Financing designed for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">modern buyers</span>.
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Forget the paperwork and the waiting. Our digital-first approach gets you approved in minutes, not hours. We work with top lenders to secure the best rates, regardless of your credit history.
                </p>

                <div className="space-y-6">
                  {[
                    { title: "Instant Pre-Approval", desc: "Get your rate without impacting your credit score." },
                    { title: "Transparent Pricing", desc: "What you see is what you pay. No hidden dealer fees." },
                    { title: "Nationwide Access", desc: "Shop from home, we deliver directly to your driveway." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="bg-primary/5 p-3 rounded-lg h-fit">
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button asChild className="mt-10 bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                  <Link to="/finance">Start Your Application</Link>
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Featured Inventory - Premium Grid */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <AnimatedSection>
                <h2 className="text-4xl font-bold text-primary mb-2">Featured Inventory</h2>
                <p className="text-muted-foreground text-lg">Hand-picked vehicles, inspected and ready for delivery.</p>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <Button asChild variant="ghost" className="hidden md:flex group text-primary hover:text-accent hover:bg-transparent">
                  <Link to="/used" className="flex items-center gap-2">
                    View All Vehicles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </AnimatedSection>
            </div>

            {isLoading ? (
              <div className="grid md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-[400px] bg-muted animate-pulse rounded-xl" />
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-8">
                {featuredVehicles.map((vehicle, idx) => (
                  <AnimatedSection key={vehicle.id} delay={idx * 100}>
                    <Link to={`/vehicle/${vehicle.stock_number}`}>
                      <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-card h-full flex flex-col">
                        <div className="aspect-[4/3] relative overflow-hidden">
                          <img
                            src={vehicle.images?.[0] || "/btd-placeholder.png"}
                            alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <p className="text-white font-medium flex items-center gap-2">
                              View Details <ArrowRight className="w-4 h-4" />
                            </p>
                          </div>
                          <Badge className="absolute top-4 right-4 bg-accent text-primary font-bold border-0">
                            {vehicle.status === 'available' ? 'Available' : 'Pending'}
                          </Badge>
                        </div>
                        <CardContent className="p-6 flex-grow flex flex-col">
                          <div className="mb-4">
                            <p className="text-sm text-muted-foreground mb-1">{vehicle.year} • {vehicle.mileage.toLocaleString()} km</p>
                            <h3 className="text-xl font-bold text-primary line-clamp-1">{vehicle.make} {vehicle.model}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-1">{vehicle.trim}</p>
                          </div>
                          <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                            <p className="text-2xl font-bold text-primary">
                              ${(vehicle.internet_price || vehicle.price).toLocaleString()}
                            </p>
                            <div className="bg-secondary p-2 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                              <ChevronRight className="w-5 h-5" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            )}

            <div className="mt-12 text-center md:hidden">
              <Button asChild variant="outline" className="w-full">
                <Link to="/used">View All Inventory</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Concierge / Lead Magnet Section */}
        <section className="py-24 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src="/hero-montage.png" alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Can't find the <span className="text-accent">perfect car?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join our exclusive "Vehicle Concierge" list. Tell us what you're looking for, and we'll use our nationwide network to find it before it hits the market.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-full">
                      <Star className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">First Access</h4>
                      <p className="text-gray-400">Get notified about new inventory 48 hours before the public.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-full">
                      <Shield className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Verified Quality</h4>
                      <p className="text-gray-400">Every vehicle passes our rigorous 150-point inspection.</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="bg-white text-foreground rounded-2xl p-8 shadow-2xl">
                  <LeadMagnetForm
                    title="Start Your Concierge Request"
                    description="Let us do the hunting for you. No obligation."
                    buttonText="Find My Car"
                    source="home_concierge"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Testimonials - Clean & Trustworthy */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Trusted by Drivers Nationwide</h2>
              <p className="text-xl text-muted-foreground">
                We've helped hundreds of customers find their dream car. Here's what they have to say.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              <AnimatedSection delay={0}>
                <TestimonialCard
                  name="Sarah Mitchell"
                  location="Toronto, ON"
                  quote="I was hesitant to buy a car online, but the team made it incredibly easy. The video walkthrough was detailed, and the car arrived exactly as described."
                  rating={5}
                  date="2 weeks ago"
                />
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <TestimonialCard
                  name="David Chen"
                  location="Vancouver, BC"
                  quote="Best financing rates I could find. The approval was instant, and they handled all the paperwork. Truly a 'beyond the dealership' experience."
                  rating={5}
                  date="1 month ago"
                />
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <TestimonialCard
                  name="Emily Rodriguez"
                  location="Winnipeg, MB"
                  quote="They found me the exact model I wanted within a week. The concierge service is a game-changer. Highly recommend!"
                  rating={5}
                  date="3 weeks ago"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Ready to upgrade your drive?</h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Get pre-approved in minutes or browse our curated inventory of premium vehicles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 h-auto shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                  <Link to="/finance">Get Pre-Approved</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white border-border text-primary hover:bg-gray-50 text-lg px-10 py-6 h-auto shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                  <Link to="/used">Browse Inventory</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
      <ExitIntentPopup />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
