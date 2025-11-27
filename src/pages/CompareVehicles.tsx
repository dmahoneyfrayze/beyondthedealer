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
          {/* Mobile: Horizontal Scroll, Desktop: Grid */}
          <div className="md:hidden overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-4 w-max">
              {comparisonVehicles.map((vehicle) => (
                <div key={vehicle.id} className="w-[85vw] max-w-[300px]">
                  <VehicleCard vehicle={vehicle} removeFromComparison={removeFromComparison} />
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {comparisonVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} removeFromComparison={removeFromComparison} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const VehicleCard = ({ vehicle, removeFromComparison }: { vehicle: any, removeFromComparison: (id: string) => void }) => {
  const price = vehicle.internet_price || vehicle.asking_price || vehicle.price || 0;

  return (
    <Card className="h-full flex flex-col">
      <div className="relative">
        <div className="aspect-video bg-muted relative overflow-hidden rounded-t-lg">
          <img
            src={vehicle.images?.[0] || "https://images.unsplash.com/photo-1619767886558-efdc259cde1a"}
            alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
        <Button
          variant="destructive"
          size="icon"
          className="absolute top-2 right-2 h-8 w-8 rounded-full shadow-md"
          onClick={(e) => {
            e.preventDefault();
            removeFromComparison(vehicle.id);
          }}
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      <CardContent className="p-5 flex-grow flex flex-col space-y-4">
        <div>
          <h3 className="text-xl font-bold line-clamp-1">{vehicle.year} {vehicle.make} {vehicle.model}</h3>
          <p className="text-sm text-muted-foreground">{vehicle.trim || 'Standard'}</p>
        </div>

        <div className="text-2xl font-bold text-primary">
          {price > 0 ? `$${price.toLocaleString()}` : "Contact for Price"}
        </div>

        <div className="space-y-3 text-sm flex-grow">
          <div className="flex items-center justify-between border-b pb-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Gauge className="w-4 h-4" />
              <span>Mileage</span>
            </div>
            <span className="font-medium">{(vehicle.odometer || vehicle.mileage || 0).toLocaleString()} km</span>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Settings className="w-4 h-4" />
              <span>Drivetrain</span>
            </div>
            <span className="font-medium">{vehicle.drive_train || 'N/A'}</span>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Fuel className="w-4 h-4" />
              <span>Fuel</span>
            </div>
            <span className="font-medium">{vehicle.fuel_type || 'N/A'}</span>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>Trans</span>
            </div>
            <span className="font-medium">{vehicle.transmission || 'N/A'}</span>
          </div>
        </div>

        <Button asChild variant="cta" className="w-full mt-auto">
          <Link to={`/vehicle/${generateVehicleSlug(vehicle)}`}>
            View Details
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CompareVehicles;
