import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Shield, Car, Wrench, Briefcase, Heart, Droplet, Phone, Eye } from "lucide-react";

interface WarrantyProduct {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

const warrantyProducts: WarrantyProduct[] = [
  {
    id: "tire-rim",
    name: "Tire & Rim Protection",
    description: "Coverage for tire and wheel damage from road hazards",
    icon: <Car className="w-5 h-5" />
  },
  {
    id: "powertrain",
    name: "Powertrain Warranty",
    description: "Extended coverage for engine, transmission, and drivetrain",
    icon: <Wrench className="w-5 h-5" />
  },
  {
    id: "bumper-to-bumper",
    name: "Bumper-to-Bumper Coverage",
    description: "Comprehensive protection for most vehicle components",
    icon: <Shield className="w-5 h-5" />
  },
  {
    id: "job-loss",
    name: "Job Loss Protection",
    description: "Payment assistance in case of involuntary unemployment",
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    id: "disability",
    name: "Disability Insurance",
    description: "Coverage for payments if you're unable to work",
    icon: <Heart className="w-5 h-5" />
  },
  {
    id: "life",
    name: "Life Insurance",
    description: "Protection for your family in case of unforeseen events",
    icon: <Heart className="w-5 h-5" />
  },
  {
    id: "rust",
    name: "Rust Protection",
    description: "Undercoating and rust prevention treatment",
    icon: <Droplet className="w-5 h-5" />
  },
  {
    id: "roadside",
    name: "Roadside Assistance",
    description: "24/7 towing, battery boost, and emergency services",
    icon: <Phone className="w-5 h-5" />
  },
  {
    id: "glass",
    name: "Glass Protection",
    description: "Windshield and window repair or replacement coverage",
    icon: <Eye className="w-5 h-5" />
  }
];

interface WarrantyProductsProps {
  selectedProducts: string[];
  onToggleProduct: (productId: string) => void;
}

const WarrantyProducts = ({ selectedProducts, onToggleProduct }: WarrantyProductsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          Protection & Warranty Add-Ons
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Enhance your payment estimate with optional protection products
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          {warrantyProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-accent/50 transition-colors cursor-pointer"
              onClick={() => onToggleProduct(product.id)}
            >
              <Checkbox
                id={product.id}
                checked={selectedProducts.includes(product.id)}
                onCheckedChange={() => onToggleProduct(product.id)}
              />
              <div className="flex-1">
                <Label
                  htmlFor={product.id}
                  className="flex items-center gap-2 font-medium cursor-pointer"
                >
                  {product.icon}
                  {product.name}
                </Label>
                <p className="text-xs text-muted-foreground mt-1">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4 italic">
          * Pricing available upon request. Speak with a finance specialist for details.
        </p>
      </CardContent>
    </Card>
  );
};

export default WarrantyProducts;
