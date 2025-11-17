-- Create saved_vehicles table for authenticated users
CREATE TABLE public.saved_vehicles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  vehicle_id UUID NOT NULL REFERENCES public.vehicles(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, vehicle_id)
);

-- Enable RLS
ALTER TABLE public.saved_vehicles ENABLE ROW LEVEL SECURITY;

-- Users can view their own saved vehicles
CREATE POLICY "Users can view their own saved vehicles"
ON public.saved_vehicles
FOR SELECT
USING (auth.uid() = user_id);

-- Users can save vehicles
CREATE POLICY "Users can save vehicles"
ON public.saved_vehicles
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Users can remove their saved vehicles
CREATE POLICY "Users can remove saved vehicles"
ON public.saved_vehicles
FOR DELETE
USING (auth.uid() = user_id);

-- Create comparison_lists table for temporary comparison storage
CREATE TABLE public.comparison_lists (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  session_id TEXT, -- For non-authenticated users
  vehicle_ids UUID[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.comparison_lists ENABLE ROW LEVEL SECURITY;

-- Users can view their own comparison lists
CREATE POLICY "Users can view their own comparisons"
ON public.comparison_lists
FOR SELECT
USING (auth.uid() = user_id OR session_id = current_setting('request.jwt.claim.session_id', true));

-- Users can create comparison lists
CREATE POLICY "Users can create comparisons"
ON public.comparison_lists
FOR INSERT
WITH CHECK (auth.uid() = user_id OR session_id IS NOT NULL);

-- Users can update their own comparison lists
CREATE POLICY "Users can update their comparisons"
ON public.comparison_lists
FOR UPDATE
USING (auth.uid() = user_id OR session_id = current_setting('request.jwt.claim.session_id', true));

-- Add trigger for updated_at
CREATE TRIGGER update_comparison_lists_updated_at
BEFORE UPDATE ON public.comparison_lists
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();