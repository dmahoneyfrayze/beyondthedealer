import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DollarSign, Gauge, Calendar, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const UsedInventory = () => {
  const [priceRange, setPriceRange] = useState("all");
  const [bodyStyle, setBodyStyle] = useState("all");

  // Sample inventory data
  const vehicles = [
    { id: 1, year: 2022, make: "Hyundai", model: "Tucson", trim: "Preferred", price: 32995, mileage: 24500, bodyStyle: "SUV", image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a" },
    { id: 2, year: 2021, make: "Hyundai", model: "Elantra", trim: "Ultimate", price: 24995, mileage: 35200, bodyStyle: "Sedan", image: "https://images.unsplash.com/photo-1617654112368-307921291f42" },
    { id: 3, year: 2023, make: "Hyundai", model: "Kona", trim: "Preferred", price: 28995, mileage: 12000, bodyStyle: "SUV", image: "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b" },
    { id: 4, year: 2020, make: "Hyundai", model: "Santa Fe", trim: "Luxury", price: 35995, mileage: 42000, bodyStyle: "SUV", image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6" },
    { id: 5, year: 2022, make: "Hyundai", model: "Ioniq 5", trim: "Preferred", price: 45995, mileage: 18000, bodyStyle: "SUV", image: "https://images.unsplash.com/photo-1617654112368-307921291f42" },
    { id: 6, year: 2021, make: "Hyundai", model: "Venue", trim: "Preferred", price: 21995, mileage: 28000, bodyStyle: "SUV", image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-background">
        <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Used Vehicle Inventory</h1>
            <p className="text-lg opacity-90">Combined selection from 3 Vancouver Hyundai stores</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Filters & CTAs */}
            <aside className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">Filters</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Price Range</label>
                        <Select value={priceRange} onValueChange={setPriceRange}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Prices</SelectItem>
                            <SelectItem value="under25k">Under $25,000</SelectItem>
                            <SelectItem value="25to35k">$25,000 - $35,000</SelectItem>
                            <SelectItem value="35to45k">$35,000 - $45,000</SelectItem>
                            <SelectItem value="over45k">Over $45,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Body Style</label>
                        <Select value={bodyStyle} onValueChange={setBodyStyle}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Styles</SelectItem>
                            <SelectItem value="SUV">SUV</SelectItem>
                            <SelectItem value="Sedan">Sedan</SelectItem>
                            <SelectItem value="Hatchback">Hatchback</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t space-y-3">
                    <Button asChild variant="cta" className="w-full">
                      <Link to="/finance">Get Pre-Approved</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/trade-in">Value My Trade</Link>
                    </Button>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-2">Need help?</p>
                    <a href="tel:604-555-0100" className="flex items-center text-sm font-medium text-primary hover:underline">
                      <Phone className="w-4 h-4 mr-2" />
                      (604) 555-0100
                    </a>
                  </div>
                </CardContent>
              </Card>
            </aside>

            {/* Vehicle Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <p className="text-muted-foreground">Showing {vehicles.length} vehicles</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {vehicles.map((vehicle) => (
                  <Card key={vehicle.id} className="overflow-hidden hover:shadow-[0_8px_24px_hsl(var(--primary)/0.12)] transition-all duration-300">
                    <div className="aspect-video bg-muted">
                      <img 
                        src={vehicle.image} 
                        alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">
                        {vehicle.year} {vehicle.make} {vehicle.model}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{vehicle.trim}</p>
                      
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-3xl font-bold text-primary">
                          ${vehicle.price.toLocaleString()}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Gauge className="w-4 h-4 mr-1" />
                          {vehicle.mileage.toLocaleString()} km
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {vehicle.year}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Button variant="cta" className="w-full">
                          Check Availability
                        </Button>
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UsedInventory;
