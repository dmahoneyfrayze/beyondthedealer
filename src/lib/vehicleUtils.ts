import { Vehicle } from "@/hooks/useVehicles";

export const generateVehicleSlug = (vehicle: Vehicle): string => {
  const parts = [
    vehicle.year,
    vehicle.make,
    vehicle.model,
    vehicle.trim,
    vehicle.body_style,
    vehicle.exterior_color,
    vehicle.vin // VIN at the end for reliable parsing
  ].filter(Boolean);

  return parts
    .join('-')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

export const parseVehicleSlug = (slug: string): string => {
  // Extract VIN from the end of the slug
  const parts = slug.split('-');
  return parts[parts.length - 1];
};
