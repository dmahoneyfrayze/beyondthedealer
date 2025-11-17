import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Eye, TrendingUp, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialProofProps {
  type?: "viewers" | "sold" | "testimonials" | "rating";
  count?: number;
  text?: string;
  className?: string;
}

export const ViewCounter = ({ count = 12, className }: { count?: number; className?: string }) => {
  return (
    <Badge variant="secondary" className={cn("gap-1.5", className)}>
      <Eye className="w-3.5 h-3.5" />
      <span>{count} people viewing this</span>
    </Badge>
  );
};

export const SoldCounter = ({ count = 47, className }: { count?: number; className?: string }) => {
  return (
    <Card className={cn("border-green-200 bg-green-50 dark:bg-green-950", className)}>
      <CardContent className="p-3 flex items-center gap-2">
        <TrendingUp className="w-4 h-4 text-green-600" />
        <span className="text-sm font-medium text-green-700 dark:text-green-300">
          {count} vehicles sold this month
        </span>
      </CardContent>
    </Card>
  );
};

export const TestimonialCard = ({ 
  name, 
  location, 
  rating = 5, 
  text,
  vehicle 
}: { 
  name: string; 
  location: string; 
  rating?: number; 
  text: string;
  vehicle?: string;
}) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-sm text-muted-foreground mb-4 italic">"{text}"</p>
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-xs text-muted-foreground">{location}</p>
          {vehicle && (
            <p className="text-xs text-muted-foreground mt-1">Purchased: {vehicle}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export const TrustBadge = ({ 
  icon: Icon, 
  text, 
  subtext 
}: { 
  icon: React.ElementType; 
  text: string; 
  subtext?: string;
}) => {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <p className="font-semibold text-sm">{text}</p>
        {subtext && (
          <p className="text-xs text-muted-foreground">{subtext}</p>
        )}
      </div>
    </div>
  );
};

const SocialProof = ({ type = "viewers", count, text, className }: SocialProofProps) => {
  if (type === "viewers") {
    return <ViewCounter count={count} className={className} />;
  }
  
  if (type === "sold") {
    return <SoldCounter count={count} className={className} />;
  }
  
  return null;
};

export default SocialProof;

