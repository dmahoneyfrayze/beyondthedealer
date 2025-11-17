-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create vehicles table for used inventory
CREATE TABLE public.vehicles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  stock_number TEXT UNIQUE NOT NULL,
  year INTEGER NOT NULL,
  make TEXT NOT NULL,
  model TEXT NOT NULL,
  trim TEXT,
  body_style TEXT NOT NULL,
  exterior_color TEXT,
  interior_color TEXT,
  price DECIMAL(10, 2) NOT NULL,
  mileage INTEGER NOT NULL,
  vin TEXT UNIQUE NOT NULL,
  transmission TEXT,
  drivetrain TEXT,
  fuel_type TEXT,
  engine TEXT,
  description TEXT,
  features TEXT[],
  images TEXT[],
  status TEXT DEFAULT 'available' CHECK (status IN ('available', 'pending', 'sold')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.vehicles ENABLE ROW LEVEL SECURITY;

-- Allow public read access to available vehicles
CREATE POLICY "Anyone can view available vehicles"
ON public.vehicles
FOR SELECT
USING (true);

-- Create indexes for better query performance
CREATE INDEX idx_vehicles_make_model ON public.vehicles(make, model);
CREATE INDEX idx_vehicles_price ON public.vehicles(price);
CREATE INDEX idx_vehicles_year ON public.vehicles(year);
CREATE INDEX idx_vehicles_body_style ON public.vehicles(body_style);
CREATE INDEX idx_vehicles_status ON public.vehicles(status);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_vehicles_updated_at
BEFORE UPDATE ON public.vehicles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();