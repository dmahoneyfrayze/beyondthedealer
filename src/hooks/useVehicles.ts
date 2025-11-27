import { useQuery } from "@tanstack/react-query";


export interface Vehicle {
  id: string;
  stock_number: string;
  year: number;
  make: string;
  model: string;
  trim: string | null;
  body_style: string;
  exterior_color: string | null;
  interior_color: string | null;
  price: number;
  mileage: number | null;
  odometer: number | null;
  vin: string;
  transmission: string | null;
  drive_train: string | null;
  fuel_type: string | null;
  engine: string | null;
  description: string | null;
  features: string[] | null;
  images: string[] | null;
  status: string;
  dealership: string | null;
  asking_price: number | null;
  retail_price: number | null;
  internet_price: number | null;
  sale_class: string | null;
  vdp_url: string | null;
  created_at: string;
  updated_at: string;
}

interface UseVehiclesOptions {
  priceRange?: string;
  bodyStyle?: string;
  make?: string;
  model?: string;
}

import { parseCSV } from "@/lib/csvParser";

export const useVehicles = (options: UseVehiclesOptions = {}) => {
  return useQuery({
    queryKey: ['vehicles', options],
    queryFn: async () => {
      const response = await fetch('/inventory.csv');
      const text = await response.text();
      let data = parseCSV(text);

      // Apply filters client-side
      if (options.bodyStyle && options.bodyStyle !== 'all') {
        data = data.filter(v => v.body_style === options.bodyStyle);
      }

      if (options.make && options.make !== 'all') {
        data = data.filter(v => v.make === options.make);
      }

      if (options.model && options.model !== 'all') {
        data = data.filter(v => v.model === options.model);
      }

      // Price range filter
      if (options.priceRange && options.priceRange !== 'all') {
        switch (options.priceRange) {
          case 'under5k':
            data = data.filter(v => v.price < 5000);
            break;
          case '5to10k':
            data = data.filter(v => v.price >= 5000 && v.price <= 10000);
            break;
          case '10to15k':
            data = data.filter(v => v.price >= 10000 && v.price <= 15000);
            break;
          case 'under15k':
            data = data.filter(v => v.price < 15000);
            break;
          case '15to25k':
            data = data.filter(v => v.price >= 15000 && v.price <= 25000);
            break;
          case 'under25k':
            data = data.filter(v => v.price < 25000);
            break;
          case '25to35k':
            data = data.filter(v => v.price >= 25000 && v.price <= 35000);
            break;
          case '35to45k':
            data = data.filter(v => v.price >= 35000 && v.price <= 45000);
            break;
          case 'over45k':
            data = data.filter(v => v.price > 45000);
            break;
        }
      }

      return data;
    },
  });
};

export const useVehicle = (id: string) => {
  return useQuery({
    queryKey: ['vehicle', id],
    queryFn: async () => {
      const response = await fetch('/inventory.csv');
      const text = await response.text();
      const data = parseCSV(text);
      const vehicle = data.find(v => v.id === id || v.vin === id);

      if (!vehicle) throw new Error('Vehicle not found');
      return vehicle;
    },
    enabled: !!id,
  });
};
