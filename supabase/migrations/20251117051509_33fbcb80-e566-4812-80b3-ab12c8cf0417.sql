-- Add INSERT, UPDATE, and DELETE policies for vehicles table
-- Note: These are permissive for initial setup. Should add authentication for production.

CREATE POLICY "Allow public inserts on vehicles"
ON public.vehicles
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Allow public updates on vehicles"
ON public.vehicles
FOR UPDATE
TO public
USING (true)
WITH CHECK (true);

CREATE POLICY "Allow public deletes on vehicles"
ON public.vehicles
FOR DELETE
TO public
USING (true);