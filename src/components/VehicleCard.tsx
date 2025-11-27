import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gauge, Calendar, Heart, GitCompare } from "lucide-react";
import { generateVehicleSlug } from "@/lib/vehicleUtils";
import { useComparison } from "@/contexts/ComparisonContext";
import { useSavedVehicles } from "@/contexts/SavedVehiclesContext";
import UnlockPriceDialog from "@/components/UnlockPriceDialog";
import { cn } from "@/lib/utils";
import { Vehicle } from "@/hooks/useVehicles";

interface VehicleCardProps {
    vehicle: Vehicle;
    showUnlockPrice?: boolean;
}

const VehicleCard = ({ vehicle, showUnlockPrice = true }: VehicleCardProps) => {
    const { addToComparison, removeFromComparison, isInComparison } = useComparison();
    const { addToSaved, removeFromSaved, isSaved } = useSavedVehicles();

    const price = vehicle.internet_price || vehicle.asking_price || vehicle.price || 0;

    // Calculate bi-weekly payment with longer term and low interest
    const principal = price * 0.9; // 10% down
    const biweeklyRate = 0.0599 / 26; // 5.99% annual rate / 26 bi-weekly periods
    const numPayments = 7 * 26; // 7 years * 26 bi-weekly periods
    const biweeklyPayment = Math.round(principal * (biweeklyRate * Math.pow(1 + biweeklyRate, numPayments)) / (Math.pow(1 + biweeklyRate, numPayments) - 1));
    const monthlyPayment = Math.round(biweeklyPayment * 26 / 12);

    return (
        <Card className="overflow-hidden hover:shadow-[0_8px_24px_hsl(var(--primary)/0.12)] transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
            <Link to={`/vehicle/${generateVehicleSlug(vehicle)}`} className="block aspect-video bg-muted relative overflow-hidden group">
                <img
                    src={vehicle.images?.[0] || "/btd-placeholder.png"}
                    alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                {(vehicle.odometer || vehicle.mileage || 0) < 30000 && (
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold z-10">
                        Low Miles
                    </div>
                )}
            </Link>
            <CardContent className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2 line-clamp-1">
                    {vehicle.year} {vehicle.make} {vehicle.model}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{vehicle.trim || 'Standard'}</p>

                <div className="flex items-center justify-between mb-4">
                    <div>
                        <span className="text-2xl font-bold text-primary">
                            {price > 0 ? `$${price.toLocaleString()}` : "Contact for Price"}
                        </span>
                        {price > 0 && <span className="text-xs text-muted-foreground ml-1">+ taxes</span>}
                    </div>
                    {showUnlockPrice && (
                        <UnlockPriceDialog
                            vehicle={vehicle}
                            trigger={
                                <Button variant="outline" size="sm" className="text-destructive border-destructive hover:bg-destructive hover:text-white">
                                    Unlock Price
                                </Button>
                            }
                        />
                    )}
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

                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground mt-auto">
                    <div className="flex items-center">
                        <Gauge className="w-4 h-4 mr-1" />
                        {(vehicle.odometer || vehicle.mileage || 0).toLocaleString()} km
                    </div>
                    <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {vehicle.year}
                    </div>
                </div>

                <div className="space-y-2 mt-4">
                    <Button asChild variant="cta" className="w-full hover:scale-105 transition-transform duration-200">
                        <Link to={`/vehicle/${generateVehicleSlug(vehicle)}`}>View Details</Link>
                    </Button>
                    <div className="flex gap-2">
                        <Button
                            variant={isSaved(vehicle.id) ? "default" : "outline"}
                            size="icon"
                            onClick={(e) => {
                                e.preventDefault();
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
                            onClick={(e) => {
                                e.preventDefault();
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
                            <a href="tel:204-297-6177">Call Now</a>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default VehicleCard;
