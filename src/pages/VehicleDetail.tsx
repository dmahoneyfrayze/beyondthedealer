import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useVehicles } from "@/hooks/useVehicles";
import { parseVehicleSlug } from "@/lib/vehicleUtils";
import { 
  Gauge, Calendar, Palette, Settings, Fuel, Cog, 
  Phone, Mail, MapPin, ChevronLeft, Loader2, CheckCircle2 
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const VehicleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const stockNumber = slug ? parseVehicleSlug(slug) : '';
  const { data: vehicles = [], isLoading } = useVehicles({});
  const vehicle = vehicles.find(v => v.stock_number === stockNumber);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <Loader2 className="w-12 h-12 animate-spin text-primary" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!vehicle) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Vehicle Not Found</h2>
            <p className="text-muted-foreground mb-4">The vehicle you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/used">Browse Inventory</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-background">
        <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-8">
          <div className="container mx-auto px-4">
            <Button asChild variant="ghost" className="mb-4 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/used">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back to Inventory
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold">
              {vehicle.year} {vehicle.make} {vehicle.model}
            </h1>
            {vehicle.trim && (
              <p className="text-xl opacity-90 mt-2">{vehicle.trim}</p>
            )}
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <Card className="overflow-hidden">
                <div className="aspect-video bg-muted">
                  <img 
                    src={vehicle.images?.[0] || "https://images.unsplash.com/photo-1619767886558-efdc259cde1a"}
                    alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {vehicle.images && vehicle.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-2 p-4 bg-muted/30">
                    {vehicle.images.slice(1, 5).map((img, idx) => (
                      <div key={idx} className="aspect-video bg-muted rounded overflow-hidden">
                        <img src={img} alt={`View ${idx + 2}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}
              </Card>

              {/* Vehicle Details */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Vehicle Details</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Year</p>
                        <p className="text-muted-foreground">{vehicle.year}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Gauge className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Mileage</p>
                        <p className="text-muted-foreground">{vehicle.mileage.toLocaleString()} km</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Settings className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Body Style</p>
                        <p className="text-muted-foreground">{vehicle.body_style}</p>
                      </div>
                    </div>

                    {vehicle.transmission && (
                      <div className="flex items-start gap-3">
                        <Cog className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold">Transmission</p>
                          <p className="text-muted-foreground">{vehicle.transmission}</p>
                        </div>
                      </div>
                    )}

                    {vehicle.drive_train && (
                      <div className="flex items-start gap-3">
                        <Settings className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold">Drivetrain</p>
                          <p className="text-muted-foreground">{vehicle.drive_train}</p>
                        </div>
                      </div>
                    )}

                    {vehicle.fuel_type && (
                      <div className="flex items-start gap-3">
                        <Fuel className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold">Fuel Type</p>
                          <p className="text-muted-foreground">{vehicle.fuel_type}</p>
                        </div>
                      </div>
                    )}

                    {vehicle.exterior_color && (
                      <div className="flex items-start gap-3">
                        <Palette className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold">Exterior Color</p>
                          <p className="text-muted-foreground">{vehicle.exterior_color}</p>
                        </div>
                      </div>
                    )}

                    {vehicle.interior_color && (
                      <div className="flex items-start gap-3">
                        <Palette className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold">Interior Color</p>
                          <p className="text-muted-foreground">{vehicle.interior_color}</p>
                        </div>
                      </div>
                    )}

                    {vehicle.engine && (
                      <div className="flex items-start gap-3 md:col-span-2">
                        <Cog className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="font-semibold">Engine</p>
                          <p className="text-muted-foreground">{vehicle.engine}</p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-3 md:col-span-2">
                      <Settings className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">Stock Number</p>
                        <p className="text-muted-foreground">{vehicle.stock_number}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 md:col-span-2">
                      <Settings className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <p className="font-semibold">VIN</p>
                        <p className="text-muted-foreground font-mono text-sm">{vehicle.vin}</p>
                      </div>
                    </div>
                  </div>

                  {vehicle.description && (
                    <>
                      <Separator className="my-6" />
                      <div>
                        <h3 className="font-semibold mb-2">Description</h3>
                        <p className="text-muted-foreground">{vehicle.description}</p>
                      </div>
                    </>
                  )}

                  {vehicle.features && vehicle.features.length > 0 && (
                    <>
                      <Separator className="my-6" />
                      <div>
                        <h3 className="font-semibold mb-4">Features & Options</h3>
                        <div className="grid md:grid-cols-2 gap-2">
                          {vehicle.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-primary" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Price</p>
                    <p className="text-4xl font-bold text-primary">
                      ${vehicle.price.toLocaleString()}
                    </p>
                    <Badge className="mt-2" variant="secondary">
                      {vehicle.status === 'available' ? 'Available' : 'Pending'}
                    </Badge>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <Button asChild variant="cta" className="w-full" size="lg">
                      <a href="tel:604-555-0100">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                    
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/finance">Get Pre-Approved</Link>
                    </Button>
                    
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/trade-in">Value My Trade</Link>
                    </Button>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <h3 className="font-semibold">Contact Us</h3>
                    
                    <a href="tel:604-555-0100" className="flex items-center text-sm hover:text-primary">
                      <Phone className="w-4 h-4 mr-2" />
                      (604) 555-0100
                    </a>
                    
                    <a href="mailto:sales@olympichyundai.com" className="flex items-center text-sm hover:text-primary">
                      <Mail className="w-4 h-4 mr-2" />
                      sales@olympichyundai.com
                    </a>
                    
                    <div className="flex items-start text-sm">
                      <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                      <span>Vancouver, BC</span>
                    </div>
                  </div>
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

export default VehicleDetail;
