import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Gauge, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSavedVehicles } from "@/contexts/SavedVehiclesContext";
import { generateVehicleSlug } from "@/lib/vehicleUtils";

const SavedVehicles = () => {
  const { savedVehicles, removeFromSaved } = useSavedVehicles();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-background">
        <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Saved Vehicles</h1>
            <p className="text-lg opacity-90">Your favorite vehicles in one place</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {savedVehicles.length === 0 ? (
            <Card className="p-12 text-center">
              <Heart className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">No saved vehicles yet</h3>
              <p className="text-muted-foreground mb-4">Start browsing and save your favorites!</p>
              <Button asChild>
                <Link to="/used">Browse Inventory</Link>
              </Button>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedVehicles.map((vehicle) => (
                <Card key={vehicle.id} className="overflow-hidden">
                  <div className="aspect-video bg-muted relative">
                    <img 
                      src={vehicle.images?.[0] || "https://images.unsplash.com/photo-1619767886558-efdc259cde1a"} 
                      alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                      className="w-full h-full object-cover"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={() => removeFromSaved(vehicle.id)}
                    >
                      <Heart className="w-4 h-4 fill-current" />
                    </Button>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      {vehicle.year} {vehicle.make} {vehicle.model}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{vehicle.trim || 'Standard'}</p>
                    
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-bold text-primary">
                        {(() => {
                          const price = vehicle.internet_price || vehicle.asking_price || vehicle.price || 0;
                          return price > 0 ? `$${price.toLocaleString()}` : "Contact for Price";
                        })()}
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

                    <Button asChild variant="cta" className="w-full">
                      <Link to={`/vehicle/${generateVehicleSlug(vehicle)}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SavedVehicles;
