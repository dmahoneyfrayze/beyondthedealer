import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

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
  mileage: number;
  vin: string;
  transmission: string | null;
  drivetrain: string | null;
  fuel_type: string | null;
  engine: string | null;
  description: string | null;
  features: string[] | null;
  images: string[] | null;
  status: string;
  created_at: string;
  updated_at: string;
}

interface UseVehiclesOptions {
  priceRange?: string;
  bodyStyle?: string;
  make?: string;
  model?: string;
}

export const useVehicles = (options: UseVehiclesOptions = {}) => {
  return useQuery({
    queryKey: ['vehicles', options],
    queryFn: async () => {
      let query = supabase
        .from('vehicles')
        .select('*')
        .eq('status', 'available')
        .order('created_at', { ascending: false });

      // Apply filters
      if (options.bodyStyle && options.bodyStyle !== 'all') {
        query = query.eq('body_style', options.bodyStyle);
      }

      if (options.make && options.make !== 'all') {
        query = query.eq('make', options.make);
      }

      if (options.model && options.model !== 'all') {
        query = query.eq('model', options.model);
      }

      // Price range filter
      if (options.priceRange && options.priceRange !== 'all') {
        switch (options.priceRange) {
          case 'under25k':
            query = query.lt('price', 25000);
            break;
          case '25to35k':
            query = query.gte('price', 25000).lte('price', 35000);
            break;
          case '35to45k':
            query = query.gte('price', 35000).lte('price', 45000);
            break;
          case 'over45k':
            query = query.gt('price', 45000);
            break;
        }
      }

      const { data, error } = await query;

      if (error) throw error;
      return data as Vehicle[];
    },
  });
};

export const useVehicle = (id: string) => {
  return useQuery({
    queryKey: ['vehicle', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('vehicles')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      return data as Vehicle;
    },
    enabled: !!id,
  });
};
