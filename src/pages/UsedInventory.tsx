import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Gauge, Calendar, Phone, Loader2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useVehicles } from "@/hooks/useVehicles";
import { generateVehicleSlug } from "@/lib/vehicleUtils";

const UsedInventory = () => {
  const [priceRange, setPriceRange] = useState("all");
  const [bodyStyle, setBodyStyle] = useState("all");

  const { data: vehicles = [], isLoading } = useVehicles({ priceRange, bodyStyle });

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
                <p className="text-muted-foreground">
                  {isLoading ? 'Loading...' : `Showing ${vehicles.length} vehicles`}
                </p>
              </div>

              {isLoading ? (
                <div className="flex justify-center items-center py-12">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              ) : vehicles.length === 0 ? (
                <Card className="p-12 text-center">
                  <p className="text-muted-foreground">No vehicles found matching your criteria.</p>
                </Card>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {vehicles.map((vehicle) => (
                    <Card key={vehicle.id} className="overflow-hidden hover:shadow-[0_8px_24px_hsl(var(--primary)/0.12)] transition-all duration-300">
                      <div className="aspect-video bg-muted">
                        <img 
                          src={vehicle.images?.[0] || "https://images.unsplash.com/photo-1619767886558-efdc259cde1a"} 
                          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">
                          {vehicle.year} {vehicle.make} {vehicle.model}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">{vehicle.trim || 'Standard'}</p>
                      
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-3xl font-bold text-primary">
                          ${(vehicle.internet_price || vehicle.asking_price || vehicle.price || 0).toLocaleString()}
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
                  ))}
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
