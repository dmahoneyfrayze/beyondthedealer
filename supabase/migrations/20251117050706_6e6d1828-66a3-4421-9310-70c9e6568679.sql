-- Update vehicles table to match your CSV headings
ALTER TABLE public.vehicles
  ADD COLUMN IF NOT EXISTS dealership TEXT,
  ADD COLUMN IF NOT EXISTS odometer INTEGER,
  ADD COLUMN IF NOT EXISTS asking_price NUMERIC,
  ADD COLUMN IF NOT EXISTS retail_price NUMERIC,
  ADD COLUMN IF NOT EXISTS internet_price NUMERIC,
  ADD COLUMN IF NOT EXISTS sale_class TEXT,
  ADD COLUMN IF NOT EXISTS vdp_url TEXT;

-- Rename drivetrain to drive_train for consistency
ALTER TABLE public.vehicles
  RENAME COLUMN drivetrain TO drive_train;

-- Update mileage to be nullable since we'll use odometer
ALTER TABLE public.vehicles
  ALTER COLUMN mileage DROP NOT NULL;

-- Add index on dealership for filtering
CREATE INDEX IF NOT EXISTS idx_vehicles_dealership ON public.vehicles(dealership);