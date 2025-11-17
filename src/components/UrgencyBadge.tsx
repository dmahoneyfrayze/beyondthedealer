import { Badge } from "@/components/ui/badge";
import { Clock, AlertCircle, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface UrgencyBadgeProps {
  type?: "countdown" | "limited" | "price-drop" | "recent-view";
  text?: string;
  timeLeft?: string;
  className?: string;
}

export const CountdownTimer = ({ 
  hours = 24, 
  className 
}: { 
  hours?: number; 
  className?: string;
}) => {
  return (
    <Badge variant="destructive" className={cn("gap-1.5", className)}>
      <Clock className="w-3.5 h-3.5" />
      <span>Price valid for {hours} hours</span>
    </Badge>
  );
};

export const LimitedInventoryBadge = ({ 
  count = 2, 
  className 
}: { 
  count?: number; 
  className?: string;
}) => {
  return (
    <Badge variant="destructive" className={cn("gap-1.5", className)}>
      <AlertCircle className="w-3.5 h-3.5" />
      <span>Only {count} left in stock</span>
    </Badge>
  );
};

export const PriceDropBadge = ({ 
  amount = 500, 
  className 
}: { 
  amount?: number; 
  className?: string;
}) => {
  return (
    <Badge variant="default" className={cn("gap-1.5 bg-green-600", className)}>
      <TrendingDown className="w-3.5 h-3.5" />
      <span>Price dropped ${amount.toLocaleString()}!</span>
    </Badge>
  );
};

export const RecentViewBadge = ({ 
  hours = 2, 
  className 
}: { 
  hours?: number; 
  className?: string;
}) => {
  return (
    <Badge variant="secondary" className={cn("gap-1.5", className)}>
      <Clock className="w-3.5 h-3.5" />
      <span>Viewed {hours} hours ago</span>
    </Badge>
  );
};

const UrgencyBadge = ({ 
  type = "countdown", 
  text, 
  timeLeft, 
  className 
}: UrgencyBadgeProps) => {
  if (type === "countdown") {
    return <CountdownTimer className={className} />;
  }
  
  if (type === "limited") {
    return <LimitedInventoryBadge className={className} />;
  }
  
  if (type === "price-drop") {
    return <PriceDropBadge className={className} />;
  }
  
  if (type === "recent-view") {
    return <RecentViewBadge className={className} />;
  }
  
  return null;
};

export default UrgencyBadge;

