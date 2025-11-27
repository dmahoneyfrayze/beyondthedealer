import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Gauge, Calendar, Phone, Loader2, Heart, GitCompare, ArrowUpDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadMagnetForm from "@/components/LeadMagnetForm";
import AnimatedSection from "@/components/AnimatedSection";
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
  const [make, setMake] = useState(searchParams.get("make") || "all");
  const [yearFilter, setYearFilter] = useState(searchParams.get("year") || "all");
  const [mileageFilter, setMileageFilter] = useState(searchParams.get("mileage") || "all");
  const [transmissionFilter, setTransmissionFilter] = useState(searchParams.get("transmission") || "all");
  const [fuelTypeFilter, setFuelTypeFilter] = useState(searchParams.get("fuel") || "all");
  const [drivetrainFilter, setDrivetrainFilter] = useState(searchParams.get("drivetrain") || "all");
  const [modelFilter, setModelFilter] = useState(searchParams.get("model") || "all");
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "default");

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

    // Transmission filter
    if (transmissionFilter !== "all" && vehicle.transmission) {
      const trans = vehicle.transmission.toLowerCase();
      if (transmissionFilter === "automatic" && !trans.includes("automatic") && !trans.includes("auto")) return false;
      if (transmissionFilter === "manual" && !trans.includes("manual")) return false;
      if (transmissionFilter === "cvt" && !trans.includes("cvt")) return false;
    }

    // Fuel type filter
    if (fuelTypeFilter !== "all" && vehicle.fuel_type) {
      const fuel = vehicle.fuel_type.toLowerCase();
      if (fuelTypeFilter === "gas" && !fuel.includes("gas") && !fuel.includes("gasoline")) return false;
      if (fuelTypeFilter === "hybrid" && !fuel.includes("hybrid")) return false;
      if (fuelTypeFilter === "electric" && !fuel.includes("electric") && !fuel.includes("ev")) return false;
      if (fuelTypeFilter === "diesel" && !fuel.includes("diesel")) return false;
    }

    // Drivetrain filter
    if (drivetrainFilter !== "all" && vehicle.drive_train) {
      const drive = vehicle.drive_train.toLowerCase();
      if (drivetrainFilter === "fwd" && !drive.includes("front") && !drive.includes("fwd")) return false;
      if (drivetrainFilter === "rwd" && !drive.includes("rear") && !drive.includes("rwd")) return false;
      if (drivetrainFilter === "awd" && !drive.includes("all") && !drive.includes("awd") && !drive.includes("4wd")) return false;
    }

    // Make filter (client-side check)
    if (make !== "all" && vehicle.make) {
      if (vehicle.make.toLowerCase() !== make.toLowerCase()) return false;
    }

    // Model filter
    if (modelFilter !== "all" && vehicle.model) {
      if (vehicle.model.toLowerCase() !== modelFilter.toLowerCase()) return false;
    }

    return true;
  });

  // Apply sorting
  const sortedVehicles = [...filteredVehicles].sort((a, b) => {
    switch (sortBy) {
      case "price-low-high": {
        const priceA = a.internet_price || a.asking_price || a.price || 0;
        const priceB = b.internet_price || b.asking_price || b.price || 0;
        return priceA - priceB;
      }
      case "price-high-low": {
        const priceA = a.internet_price || a.asking_price || a.price || 0;
        const priceB = b.internet_price || b.asking_price || b.price || 0;
        return priceB - priceA;
      }
      case "year-low-high":
        return a.year - b.year;
      case "year-high-low":
        return b.year - a.year;
      case "km-low-high": {
        const kmA = a.odometer || a.mileage || 0;
        const kmB = b.odometer || b.mileage || 0;
        return kmA - kmB;
      }
      case "km-high-low": {
        const kmA = a.odometer || a.mileage || 0;
        const kmB = b.odometer || b.mileage || 0;
        return kmB - kmA;
      }
      case "make-a-z":
        return (a.make || "").localeCompare(b.make || "");
      case "make-z-a":
        return (b.make || "").localeCompare(a.make || "");
      default:
        return 0; // Default order (no sorting)
    }
  });

  // Update URL params when filters change
  useEffect(() => {
    const params: Record<string, string> = {};
    if (priceRange !== "all") params.price = priceRange;
    if (bodyStyle !== "all") params.body = bodyStyle;
    if (condition !== "all") params.condition = condition;
    if (make !== "all") params.make = make;
    if (modelFilter !== "all") params.model = modelFilter;
    if (yearFilter !== "all") params.year = yearFilter;
    if (mileageFilter !== "all") params.mileage = mileageFilter;
    if (transmissionFilter !== "all") params.transmission = transmissionFilter;
    if (fuelTypeFilter !== "all") params.fuel = fuelTypeFilter;
    if (drivetrainFilter !== "all") params.drivetrain = drivetrainFilter;
    if (sortBy !== "default") params.sort = sortBy;
    setSearchParams(params);
  }, [priceRange, bodyStyle, condition, make, modelFilter, yearFilter, mileageFilter, transmissionFilter, fuelTypeFilter, drivetrainFilter, sortBy, setSearchParams]);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />

      <main className="flex-grow bg-background">
        <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2583&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <AnimatedSection direction="fade" delay={100}>
              <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 animate-slide-down">
                Beyond the <span className="font-bold">Dealership</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection direction="fade" delay={300}>
              <p className="text-xl md:text-2xl font-light opacity-90 animate-slide-up max-w-3xl mx-auto leading-relaxed">
                Experience the new standard in premium pre-owned vehicles. <br />
                <span className="text-base md:text-lg mt-4 block text-neutral-300">
                  Serving Manitoba & Ontario | Partners with Maserati & Alfa Romeo Winnipeg
                </span>
              </p>
            </AnimatedSection>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Filters & CTAs */}
            <aside className="lg:col-span-1">
              <Card className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
                <CardContent className="p-4 space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-sm">Filters</h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setPriceRange("all");
                          setBodyStyle("all");
                          setCondition("all");
                          setMake("all");
                          setYearFilter("all");
                          setMileageFilter("all");
                          setTransmissionFilter("all");
                          setFuelTypeFilter("all");
                          setDrivetrainFilter("all");
                        }}
                        className="text-xs h-6 px-2"
                      >
                        Clear All
                      </Button>
                    </div>
                    <div className="space-y-2.5">
                      <div>
                        <label className="text-xs font-medium mb-1.5 block">Price Range</label>
                        <Select value={priceRange} onValueChange={setPriceRange}>
                          <SelectTrigger className="h-9 text-sm">
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
                        <label className="text-xs font-medium mb-1.5 block">Body Style</label>
                        <Select value={bodyStyle} onValueChange={setBodyStyle}>
                          <SelectTrigger className="h-9 text-sm">
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
                        <label className="text-xs font-medium mb-1.5 block">Condition</label>
                        <Select value={condition} onValueChange={setCondition}>
                          <SelectTrigger className="h-9 text-sm">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-background">
                            <SelectItem value="all">All Vehicles</SelectItem>
                            <SelectItem value="low-miles">Slightly Used (Under 30k km)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-xs font-medium mb-1.5 block">Make</label>
                        <Select value={make} onValueChange={setMake}>
                          <SelectTrigger className="h-9 text-sm">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-background">
                            <SelectItem value="all">All Makes</SelectItem>
                            <SelectItem value="Hyundai">Hyundai</SelectItem>
                            <SelectItem value="Honda">Honda</SelectItem>
                            <SelectItem value="Acura">Acura</SelectItem>
                            <SelectItem value="Jeep">Jeep</SelectItem>
                            <SelectItem value="Dodge">Dodge</SelectItem>
                            <SelectItem value="Toyota">Toyota</SelectItem>
                            <SelectItem value="Ford">Ford</SelectItem>
                            <SelectItem value="Mazda">Mazda</SelectItem>
                            <SelectItem value="Nissan">Nissan</SelectItem>
                            <SelectItem value="Subaru">Subaru</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-xs font-medium mb-1.5 block">Year</label>
                        <Select value={yearFilter} onValueChange={setYearFilter}>
                          <SelectTrigger className="h-9 text-sm">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-background">
                            <SelectItem value="all">All Years</SelectItem>
                            <SelectItem value="2020-newer">2020 or Newer</SelectItem>
                            <SelectItem value="2015-2019">2015 - 2019</SelectItem>
                            <SelectItem value="2010-2014">2010 - 2014</SelectItem>
                            <SelectItem value="pre-2010">Pre-2010</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-xs font-medium mb-1.5 block">Mileage (km)</label>
                        <Select value={mileageFilter} onValueChange={setMileageFilter}>
                          <SelectTrigger className="h-9 text-sm">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-background">
                            <SelectItem value="all">All Mileage</SelectItem>
                            <SelectItem value="under50k">Under 50,000 km</SelectItem>
                            <SelectItem value="50-100k">50,000 - 100,000 km</SelectItem>
                            <SelectItem value="100-150k">100,000 - 150,000 km</SelectItem>
                            <SelectItem value="over150k">Over 150,000 km</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-xs font-medium mb-1.5 block">Transmission</label>
                        <Select value={transmissionFilter} onValueChange={setTransmissionFilter}>
                          <SelectTrigger className="h-9 text-sm">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-background">
                            <SelectItem value="all">All Transmissions</SelectItem>
                            <SelectItem value="automatic">Automatic</SelectItem>
                            <SelectItem value="manual">Manual</SelectItem>
                            <SelectItem value="cvt">CVT</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-xs font-medium mb-1.5 block">Fuel Type</label>
                        <Select value={fuelTypeFilter} onValueChange={setFuelTypeFilter}>
                          <SelectTrigger className="h-9 text-sm">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-background">
                            <SelectItem value="all">All Fuel Types</SelectItem>
                            <SelectItem value="gas">Gasoline</SelectItem>
                            <SelectItem value="hybrid">Hybrid</SelectItem>
                            <SelectItem value="electric">Electric</SelectItem>
                            <SelectItem value="diesel">Diesel</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-xs font-medium mb-1.5 block">Drivetrain</label>
                        <Select value={drivetrainFilter} onValueChange={setDrivetrainFilter}>
                          <SelectTrigger className="h-9 text-sm">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-background">
                            <SelectItem value="all">All Drivetrains</SelectItem>
                            <SelectItem value="fwd">Front-Wheel Drive (FWD)</SelectItem>
                            <SelectItem value="rwd">Rear-Wheel Drive (RWD)</SelectItem>
                            <SelectItem value="awd">All-Wheel Drive (AWD/4WD)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t space-y-2">
                    <Button asChild variant="cta" className="w-full text-sm h-9">
                      <Link to="/finance">Get Pre-Approved</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full text-sm h-9">
                      <Link to="/trade-in">Value My Trade</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full text-sm h-9">
                      <a href="https://www.olympichyundaivancouver.com/" target="_blank" rel="noopener noreferrer">
                        Shop New Vehicles
                      </a>
                    </Button>
                  </div>

                  <div className="pt-3 border-t">
                    <p className="text-xs text-muted-foreground mb-1.5">Need help?</p>
                    <a href="tel:604-555-0100" className="flex items-center text-xs font-medium text-primary hover:underline">
                      <Phone className="w-3 h-3 mr-1.5" />
                      (604) 555-0100
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Lead Magnet */}
              <LeadMagnetForm
                title="Get Notified of New Arrivals"
                description="Be the first to know when vehicles matching your criteria arrive"
                buttonText="Get Notifications"
                source="inventory-page"
              />
            </aside>

            {/* Vehicle Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
                <p className="text-muted-foreground">
                  {isLoading ? 'Loading...' : `Showing ${sortedVehicles.length} of ${vehicles.length} vehicles`}
                </p>
                <div className="flex items-center gap-2">
                  <ArrowUpDown className="w-4 h-4 text-muted-foreground" />
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[200px] h-9 text-sm">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent className="bg-background">
                      <SelectItem value="default">Default Order</SelectItem>
                      <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                      <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                      <SelectItem value="year-low-high">Year: Oldest First</SelectItem>
                      <SelectItem value="year-high-low">Year: Newest First</SelectItem>
                      <SelectItem value="km-low-high">KM: Low to High</SelectItem>
                      <SelectItem value="km-high-low">KM: High to Low</SelectItem>
                      <SelectItem value="make-a-z">Make: A to Z</SelectItem>
                      <SelectItem value="make-z-a">Make: Z to A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {isLoading ? (
                <div className="flex justify-center items-center py-12">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              ) : sortedVehicles.length === 0 ? (
                <Card className="p-12 text-center">
                  <p className="text-muted-foreground">No vehicles found matching your criteria.</p>
                  <Button onClick={() => { setPriceRange("all"); setBodyStyle("all"); setCondition("all"); setMake("all"); }} className="mt-4">
                    Clear Filters
                  </Button>
                </Card>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {sortedVehicles.map((vehicle, index) => {
                    const price = vehicle.internet_price || vehicle.asking_price || vehicle.price || 0;
                    // Calculate bi-weekly payment with longer term and low interest
                    const principal = price * 0.9; // 10% down
                    const biweeklyRate = 0.0599 / 26; // 5.99% annual rate / 26 bi-weekly periods
                    const numPayments = 7 * 26; // 7 years * 26 bi-weekly periods
                    const biweeklyPayment = Math.round(principal * (biweeklyRate * Math.pow(1 + biweeklyRate, numPayments)) / (Math.pow(1 + biweeklyRate, numPayments) - 1));
                    const monthlyPayment = Math.round(biweeklyPayment * 26 / 12);

                    return (
                      <AnimatedSection key={vehicle.id} direction="up" delay={index * 50}>
                        <Card className="overflow-hidden hover:shadow-[0_8px_24px_hsl(var(--primary)/0.12)] transition-all duration-300 hover:scale-[1.02]">
                          <div className="aspect-video bg-muted relative overflow-hidden">
                            <img
                              src={vehicle.images?.[0] || "https://images.unsplash.com/photo-1619767886558-efdc259cde1a"}
                              alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
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
                                {price > 0 ? `$${price.toLocaleString()}` : "Contact for Price"}
                              </span>
                            </div>
                            {price > 0 && (
                              <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-lg font-semibold">
                                  ${monthlyPayment}/mo
                                </span>
                                <span className="text-sm text-muted-foreground">
                                  or ${biweeklyPayment}/bi-weekly*
                                </span>
                              </div>
                            )}

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
                              <Button asChild variant="cta" className="w-full hover:scale-105 transition-transform duration-200">
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
                                  className="hover:scale-110 transition-transform duration-200"
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
                                  className="hover:scale-110 transition-transform duration-200"
                                >
                                  <GitCompare className="w-4 h-4" />
                                </Button>
                                <Button asChild variant="outline" className="flex-1 hover:scale-105 transition-transform duration-200">
                                  <a href="tel:604-555-0100">Call Now</a>
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </AnimatedSection>
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
