import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Search, CheckCircle2, Users, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FindMyCar = () => {
  const benefits = [
    {
      icon: Search,
      title: "Multi-Store Search",
      description: "We search across all 3 Vancouver Hyundai group stores"
    },
    {
      icon: Users,
      title: "Personal Concierge",
      description: "Dedicated specialist to find your perfect match"
    },
    {
      icon: Clock,
      title: "Fast Response",
      description: "Get matches within 24 hours"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-background">
        <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <Search className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Vehicle Concierge Service</h1>
            <p className="text-lg opacity-90">Let our specialists source your perfect vehicle</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">How It Works</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Tell Us What You Need</h3>
                    <p className="text-muted-foreground">
                      Fill out the form with your budget, preferences, and must-haves
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">We Search for You</h3>
                    <p className="text-muted-foreground">
                      Our team searches across multiple Hyundai stores in the Vancouver area
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Review Your Matches</h3>
                    <p className="text-muted-foreground">
                      Receive personalized recommendations with photos, pricing, and availability
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Schedule Your Visit</h3>
                    <p className="text-muted-foreground">
                      Book a test drive or inspection at your convenience
                    </p>
                  </div>
                </div>
              </div>

              <Card className="mt-8 bg-secondary">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">What Makes This Different?</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                      Access to inventory not listed online
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                      No pressure, just personalized service
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                      Expert guidance on financing and trade-ins
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                      Save time by letting us do the searching
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="sticky top-24">
                <CardHeader className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  <CardTitle className="text-2xl">Concierge Request</CardTitle>
                  <p className="text-sm opacity-90">We'll respond within 24 hours</p>
                </CardHeader>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="budget">Budget</Label>
                      <Select>
                        <SelectTrigger id="budget">
                          <SelectValue placeholder="Select your budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under20k">Under $20,000</SelectItem>
                          <SelectItem value="20to30k">$20,000 - $30,000</SelectItem>
                          <SelectItem value="30to40k">$30,000 - $40,000</SelectItem>
                          <SelectItem value="40to50k">$40,000 - $50,000</SelectItem>
                          <SelectItem value="over50k">Over $50,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="bodyStyle">Preferred Body Style</Label>
                      <Select>
                        <SelectTrigger id="bodyStyle">
                          <SelectValue placeholder="Select body style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="suv">SUV/Crossover</SelectItem>
                          <SelectItem value="sedan">Sedan</SelectItem>
                          <SelectItem value="hatchback">Hatchback</SelectItem>
                          <SelectItem value="any">No Preference</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="seats">Seating Capacity</Label>
                      <Select>
                        <SelectTrigger id="seats">
                          <SelectValue placeholder="How many seats?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">5 Seats</SelectItem>
                          <SelectItem value="7">7+ Seats</SelectItem>
                          <SelectItem value="any">No Preference</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="features">Must-Have Features</Label>
                      <Textarea
                        id="features"
                        placeholder="e.g., AWD, sunroof, leather seats, hybrid/EV, safety features..."
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea
                        id="notes"
                        placeholder="Tell us more about what you're looking for..."
                        rows={3}
                      />
                    </div>

                    <div className="pt-4 border-t">
                      <h4 className="font-semibold mb-3">Contact Information</h4>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="John Doe" />
                        </div>

                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="john@example.com" />
                        </div>

                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" placeholder="(604) 555-0100" />
                        </div>

                        <div>
                          <Label htmlFor="contact">Preferred Contact Method</Label>
                          <Select>
                            <SelectTrigger id="contact">
                              <SelectValue placeholder="Select method" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="email">Email</SelectItem>
                              <SelectItem value="phone">Phone</SelectItem>
                              <SelectItem value="text">Text Message</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <Button type="submit" variant="cta" className="w-full" size="lg">
                      <Search className="w-4 h-4 mr-2" />
                      Start Concierge Search
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      No obligation. We respect your privacy and will never share your information.
                    </p>
                  </form>
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

export default FindMyCar;
