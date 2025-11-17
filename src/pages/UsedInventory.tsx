import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Gauge, Calendar, Phone, Loader2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useVehicles } from "@/hooks/useVehicles";
import { generateVehicleSlug } from "@/lib/vehicleUtils";
import PaymentCalculator from "@/components/PaymentCalculator";

const UsedInventory = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [priceRange, setPriceRange] = useState(searchParams.get("price") || "all");
  const [bodyStyle, setBodyStyle] = useState(searchParams.get("body") || "all");
  const [condition, setCondition] = useState(searchParams.get("condition") || "all");
  const [make, setMake] = useState("all");

  const { data: vehicles = [], isLoading } = useVehicles({ priceRange, bodyStyle, make });

  // Apply condition filter client-side
  const filteredVehicles = vehicles.filter(vehicle => {
    if (condition === "low-miles") {
      const mileage = vehicle.odometer || vehicle.mileage || 0;
      return mileage < 30000;
    }
    return true;
  });

  // Update URL params when filters change
  useEffect(() => {
    const params: Record<string, string> = {};
    if (priceRange !== "all") params.price = priceRange;
    if (bodyStyle !== "all") params.body = bodyStyle;
    if (condition !== "all") params.condition = condition;
    setSearchParams(params);
  }, [priceRange, bodyStyle, condition, setSearchParams]);

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
                          <SelectContent className="bg-background">
                            <SelectItem value="all">All Prices</SelectItem>
                            <SelectItem value="under5k">Under $5,000</SelectItem>
                            <SelectItem value="5to10k">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10to15k">$10,000 - $15,000</SelectItem>
                            <SelectItem value="under15k">Under $15,000</SelectItem>
                            <SelectItem value="15to25k">$15,000 - $25,000</SelectItem>
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
                          <SelectContent className="bg-background">
                            <SelectItem value="all">All Styles</SelectItem>
                            <SelectItem value="SUV">SUV</SelectItem>
                            <SelectItem value="Sedan">Sedan</SelectItem>
                            <SelectItem value="Truck">Truck</SelectItem>
                            <SelectItem value="Hatchback">Hatchback</SelectItem>
                            <SelectItem value="Coupe">Coupe</SelectItem>
                            <SelectItem value="Van">Van</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Condition</label>
                        <Select value={condition} onValueChange={setCondition}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-background">
                            <SelectItem value="all">All Vehicles</SelectItem>
                            <SelectItem value="low-miles">Slightly Used (Under 30k km)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">Make</label>
                        <Select value={make} onValueChange={setMake}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-background">
                            <SelectItem value="all">All Makes</SelectItem>
                            <SelectItem value="Hyundai">Hyundai</SelectItem>
                            <SelectItem value="Honda">Honda</SelectItem>
                            <SelectItem value="Acura">Acura</SelectItem>
                            <SelectItem value="Jeep">Jeep</SelectItem>
                            <SelectItem value="Dodge">Dodge</SelectItem>
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
                    <Button asChild variant="outline" className="w-full">
                      <a href="https://www.olympichyundaivancouver.com/" target="_blank" rel="noopener noreferrer">
                        Shop New Vehicles
                      </a>
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
                <p className="text-muted-foreground">
                  {isLoading ? 'Loading...' : `Showing ${vehicles.length} vehicles`}
                </p>
              </div>

              {isLoading ? (
                <div className="flex justify-center items-center py-12">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              ) : filteredVehicles.length === 0 ? (
                <Card className="p-12 text-center">
                  <p className="text-muted-foreground">No vehicles found matching your criteria.</p>
                  <Button onClick={() => { setPriceRange("all"); setBodyStyle("all"); setCondition("all"); setMake("all"); }} className="mt-4">
                    Clear Filters
                  </Button>
                </Card>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredVehicles.map((vehicle) => {
                    const price = vehicle.internet_price || vehicle.asking_price || vehicle.price || 0;
                    const monthlyPayment = Math.round((price - price * 0.1) * 0.02); // Rough estimate
                    
                    return (
                      <Card key={vehicle.id} className="overflow-hidden hover:shadow-[0_8px_24px_hsl(var(--primary)/0.12)] transition-all duration-300">
                        <div className="aspect-video bg-muted relative">
                          <img 
                            src={vehicle.images?.[0] || "https://images.unsplash.com/photo-1619767886558-efdc259cde1a"} 
                            alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                            className="w-full h-full object-cover"
                          />
                          {(vehicle.odometer || vehicle.mileage || 0) < 30000 && (
                            <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                              Low Miles
                            </div>
                          )}
                        </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">
                          {vehicle.year} {vehicle.make} {vehicle.model}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">{vehicle.trim || 'Standard'}</p>
                      
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-3xl font-bold text-primary">
                          ${price.toLocaleString()}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          or ${monthlyPayment}/mo*
                        </span>
                      </div>

                      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Gauge className="w-4 h-4 mr-1" />
                          {(vehicle.odometer || vehicle.mileage || 0).toLocaleString()} km
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {vehicle.year}
                        </div>
                      </div>

                        <div className="space-y-2">
                          <Button asChild variant="cta" className="w-full">
                            <Link to={`/vehicle/${generateVehicleSlug(vehicle)}`}>View Details</Link>
                          </Button>
                          <Button asChild variant="outline" className="w-full">
                            <a href="tel:604-555-0100">Check Availability</a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UsedInventory;
