import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Calendar, CheckCircle2, Snowflake, Sun } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServiceSpecials = () => {
  const specials = [
    {
      icon: Wrench,
      title: "Full Synthetic Oil Change",
      price: "$89.99",
      original: "$119.99",
      includes: [
        "Up to 5L full synthetic oil",
        "Oil filter replacement",
        "Multi-point inspection",
        "Fluid top-ups",
        "Tire pressure check",
      ],
      season: "Year-Round",
    },
    {
      icon: Snowflake,
      title: "Winter Tire Package",
      price: "$599.99",
      original: "$749.99",
      includes: [
        "Set of 4 winter tires",
        "Professional installation",
        "Wheel balancing",
        "TPMS reset",
        "Free seasonal changeover",
      ],
      season: "Fall/Winter",
    },
    {
      icon: Sun,
      title: "Summer Service Package",
      price: "$149.99",
      original: "$199.99",
      includes: [
        "A/C system inspection",
        "Brake inspection",
        "Wiper blade replacement",
        "Coolant system check",
        "Battery test",
      ],
      season: "Spring/Summer",
    },
  ];

  const maintenance = [
    { interval: "Every 8,000 km", service: "Oil Change & Filter" },
    { interval: "Every 16,000 km", service: "Tire Rotation" },
    { interval: "Every 24,000 km", service: "Air Filter Replacement" },
    { interval: "Every 48,000 km", service: "Cabin Air Filter" },
    { interval: "Annually", service: "Brake Inspection" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-background">
        <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <Wrench className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Service Specials</h1>
            <p className="text-lg opacity-90">Exclusive offers for Vancouver Hyundai owners</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Current Specials */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Current Specials</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {specials.map((special, index) => (
                <Card key={index} className="hover:shadow-[0_8px_24px_hsl(var(--primary)/0.12)] transition-all">
                  <CardHeader className="bg-gradient-to-br from-secondary to-background">
                    <div className="w-12 h-12 mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <special.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{special.title}</CardTitle>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-3xl font-bold text-primary">{special.price}</span>
                      <span className="text-sm text-muted-foreground line-through">{special.original}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{special.season}</p>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-2 mb-6">
                      {special.includes.map((item, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <CheckCircle2 className="w-4 h-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="cta" className="w-full">
                      <a href="https://hyundai.ca/book-service" target="_blank" rel="noopener noreferrer">
                        Book Service
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Maintenance Schedule */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Recommended Maintenance</h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-6">
                      Keep your Hyundai running smoothly with our recommended maintenance schedule. 
                      Regular service helps maintain your warranty and vehicle value.
                    </p>
                    <div className="space-y-4">
                      {maintenance.map((item, index) => (
                        <div key={index} className="flex items-start pb-4 border-b last:border-b-0">
                          <Calendar className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">{item.interval}</p>
                            <p className="text-sm text-muted-foreground">{item.service}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Why Service With Us?</h2>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Hyundai-Certified Technicians</h3>
                      <p className="text-muted-foreground">
                        Our factory-trained technicians know your Hyundai inside and out
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Genuine Hyundai Parts</h3>
                      <p className="text-muted-foreground">
                        We use only authentic Hyundai parts to maintain your warranty and vehicle performance
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Convenient Vancouver Location</h3>
                      <p className="text-muted-foreground">
                        Easy access from anywhere in Greater Vancouver with complimentary shuttle service
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">Warranty Protection</h3>
                      <p className="text-muted-foreground">
                        Maintain your Hyundai warranty with dealer-serviced records
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Book Your Service?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Schedule your appointment online or call us directly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="ocean" size="lg" className="bg-white text-primary hover:bg-white/90">
                <a href="https://hyundai.ca/book-service" target="_blank" rel="noopener noreferrer">
                  Book Online
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
                <a href="tel:604-555-0100">Call (604) 555-0100</a>
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-6">Service hours: Mon-Fri 7am-6pm, Sat 8am-4pm</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceSpecials;
