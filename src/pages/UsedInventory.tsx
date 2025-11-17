import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Gauge, Calendar, Phone, Loader2, Heart, GitCompare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useVehicles } from "@/hooks/useVehicles";
import { generateVehicleSlug } from "@/lib/vehicleUtils";
import PaymentCalculator from "@/components/PaymentCalculator";
import { useComparison } from "@/contexts/ComparisonContext";
import { useSavedVehicles } from "@/contexts/SavedVehiclesContext";
import { cn } from "@/lib/utils";

const UsedInventory = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [priceRange, setPriceRange] = useState(searchParams.get("price") || "all");
  const [bodyStyle, setBodyStyle] = useState(searchParams.get("body") || "all");
  const [condition, setCondition] = useState(searchParams.get("condition") || "all");
  const [make, setMake] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");
  const [mileageFilter, setMileageFilter] = useState("all");
  
  const { data: vehicles = [], isLoading } = useVehicles({ priceRange, bodyStyle, make });
  const { addToComparison, removeFromComparison, isInComparison } = useComparison();
  const { addToSaved, removeFromSaved, isSaved } = useSavedVehicles();

  // Apply filters client-side
  const filteredVehicles = vehicles.filter(vehicle => {
    // Condition filter
    if (condition === "low-miles") {
      const mileage = vehicle.odometer || vehicle.mileage || 0;
      if (mileage >= 30000) return false;
    }
    
    // Year filter
    if (yearFilter !== "all") {
      const currentYear = new Date().getFullYear();
      if (yearFilter === "2020-newer" && vehicle.year < 2020) return false;
      if (yearFilter === "2015-2019" && (vehicle.year < 2015 || vehicle.year > 2019)) return false;
      if (yearFilter === "2010-2014" && (vehicle.year < 2010 || vehicle.year > 2014)) return false;
      if (yearFilter === "pre-2010" && vehicle.year >= 2010) return false;
    }
    
    // Mileage filter
    if (mileageFilter !== "all") {
      const mileage = vehicle.odometer || vehicle.mileage || 0;
      if (mileageFilter === "under50k" && mileage >= 50000) return false;
      if (mileageFilter === "50-100k" && (mileage < 50000 || mileage >= 100000)) return false;
      if (mileageFilter === "100-150k" && (mileage < 100000 || mileage >= 150000)) return false;
      if (mileageFilter === "over150k" && mileage < 150000) return false;
    }
    
    return true;
  });

  // Update URL params when filters change
  useEffect(() => {
    const params: Record<string, string> = {};
    if (priceRange !== "all") params.price = priceRange;
    if (bodyStyle !== "all") params.body = bodyStyle;
    if (condition !== "all") params.condition = condition;
    if (yearFilter !== "all") params.year = yearFilter;
    if (mileageFilter !== "all") params.mileage = mileageFilter;
    setSearchParams(params);
  }, [priceRange, bodyStyle, condition, yearFilter, mileageFilter, setSearchParams]);

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
                    // Calculate bi-weekly payment with longer term and low interest
                    const principal = price * 0.9; // 10% down
                    const biweeklyRate = 0.0599 / 26; // 5.99% annual rate / 26 bi-weekly periods
                    const numPayments = 7 * 26; // 7 years * 26 bi-weekly periods
                    const biweeklyPayment = Math.round(principal * (biweeklyRate * Math.pow(1 + biweeklyRate, numPayments)) / (Math.pow(1 + biweeklyRate, numPayments) - 1));
                    const monthlyPayment = Math.round(biweeklyPayment * 26 / 12);
                    
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
                      
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-3xl font-bold text-primary">
                          ${price.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-lg font-semibold">
                          ${monthlyPayment}/mo
                        </span>
                        <span className="text-sm text-muted-foreground">
                          or ${biweeklyPayment}/bi-weekly*
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
                          <div className="flex gap-2">
                            <Button
                              variant={isSaved(vehicle.id) ? "default" : "outline"}
                              size="icon"
                              onClick={() => {
                                if (isSaved(vehicle.id)) {
                                  removeFromSaved(vehicle.id);
                                } else {
                                  addToSaved(vehicle);
                                }
                              }}
                            >
                              <Heart className={cn("w-4 h-4", isSaved(vehicle.id) && "fill-current")} />
                            </Button>
                            <Button
                              variant={isInComparison(vehicle.id) ? "secondary" : "outline"}
                              size="icon"
                              onClick={() => {
                                if (isInComparison(vehicle.id)) {
                                  removeFromComparison(vehicle.id);
                                } else {
                                  addToComparison(vehicle);
                                }
                              }}
                            >
                              <GitCompare className="w-4 h-4" />
                            </Button>
                            <Button asChild variant="outline" className="flex-1">
                              <a href="tel:604-555-0100">Call Now</a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                  })}
                </div>
              )}

              <div className="mt-8 p-4 bg-muted/50 rounded-lg text-xs text-muted-foreground text-center">
                <p>
                  <strong>BC Pricing Disclosure:</strong> All prices exclude PST, GST, air conditioning tax ($100), 
                  tire stewardship fee, PPSA registration, dealer documentation fee ($599), and licensing/registration costs. 
                  Payment estimates are for illustration only and subject to credit approval. Actual rates and terms may vary.
                </p>
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
