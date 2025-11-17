import { Vehicle } from "@/hooks/useVehicles";

export const generateVehicleSlug = (vehicle: Vehicle): string => {
  const parts = [
    vehicle.year,
    vehicle.make,
    vehicle.model,
    vehicle.trim,
    vehicle.exterior_color,
    vehicle.body_style,
    vehicle.stock_number
  ].filter(Boolean);
  
  return parts
    .join('-')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

export const parseVehicleSlug = (slug: string): string => {
  // Extract stock number from the end of the slug
  const parts = slug.split('-');
  return parts[parts.length - 1];
};
