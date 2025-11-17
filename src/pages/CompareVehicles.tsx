import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Gauge, Calendar, Fuel, Settings } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useComparison } from "@/contexts/ComparisonContext";
import { generateVehicleSlug } from "@/lib/vehicleUtils";

const CompareVehicles = () => {
  const { comparisonVehicles, removeFromComparison, clearComparison } = useComparison();

  if (comparisonVehicles.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <Card className="max-w-md">
            <CardContent className="p-6 text-center">
              <h2 className="text-2xl font-bold mb-2">No Vehicles to Compare</h2>
              <p className="text-muted-foreground mb-4">Add vehicles from the inventory to compare them</p>
              <Button asChild>
                <Link to="/used">Browse Inventory</Link>
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-background">
        <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Compare Vehicles</h1>
                <p className="text-lg opacity-90">Side-by-side comparison of {comparisonVehicles.length} vehicles</p>
              </div>
              <Button variant="destructive" onClick={clearComparison}>
                Clear All
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="overflow-x-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-w-max">
              {comparisonVehicles.map((vehicle) => {
                const price = vehicle.internet_price || vehicle.asking_price || vehicle.price || 0;
                
                return (
                  <Card key={vehicle.id} className="min-w-[280px]">
                    <div className="relative">
                      <div className="aspect-video bg-muted">
                        <img 
                          src={vehicle.images?.[0] || "https://images.unsplash.com/photo-1619767886558-efdc259cde1a"} 
                          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() => removeFromComparison(vehicle.id)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold">{vehicle.year} {vehicle.make} {vehicle.model}</h3>
                        <p className="text-sm text-muted-foreground">{vehicle.trim || 'Standard'}</p>
                      </div>

                      <div className="text-3xl font-bold text-primary">
                        ${price.toLocaleString()}
                      </div>

                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-2">
                          <Gauge className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <div>
                            <p className="font-medium">Mileage</p>
                            <p className="text-muted-foreground">{(vehicle.odometer || vehicle.mileage || 0).toLocaleString()} km</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <Settings className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <div>
                            <p className="font-medium">Drivetrain</p>
                            <p className="text-muted-foreground">{vehicle.drive_train || 'N/A'}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <Fuel className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <div>
                            <p className="font-medium">Fuel Type</p>
                            <p className="text-muted-foreground">{vehicle.fuel_type || 'N/A'}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <Calendar className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <div>
                            <p className="font-medium">Transmission</p>
                            <p className="text-muted-foreground">{vehicle.transmission || 'N/A'}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <div className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <div>
                            <p className="font-medium">Body Style</p>
                            <p className="text-muted-foreground">{vehicle.body_style}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <div className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <div>
                            <p className="font-medium">Exterior Color</p>
                            <p className="text-muted-foreground">{vehicle.exterior_color || 'N/A'}</p>
                          </div>
                        </div>
                      </div>

                      <Button asChild variant="cta" className="w-full">
                        <Link to={`/vehicle/${generateVehicleSlug(vehicle)}`}>
                          View Details
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CompareVehicles;
