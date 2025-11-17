import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { vehicle } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const prompt = `Write a compelling, SEO-optimized vehicle description for this ${vehicle.year} ${vehicle.make} ${vehicle.model}${vehicle.trim ? ` ${vehicle.trim}` : ''}.

Vehicle Details:
- Year: ${vehicle.year}
- Make: ${vehicle.make}
- Model: ${vehicle.model}
- Trim: ${vehicle.trim || 'Standard'}
- Body Style: ${vehicle.body_style}
- Drivetrain: ${vehicle.drive_train || 'N/A'}
- Transmission: ${vehicle.transmission || 'N/A'}
- Fuel Type: ${vehicle.fuel_type || 'N/A'}
- Exterior Color: ${vehicle.exterior_color || 'N/A'}
- Interior Color: ${vehicle.interior_color || 'N/A'}
- Odometer: ${vehicle.odometer || vehicle.mileage || 'N/A'} km
- Price: $${vehicle.internet_price || vehicle.asking_price || vehicle.price}

Write a 2-3 paragraph description that:
1. Highlights key features and benefits
2. Mentions the condition and low mileage if applicable
3. Emphasizes value and financing options at Olympic Hyundai Vancouver
4. Uses natural keywords for SEO (Vancouver, Hyundai, used car, etc.)
5. Creates urgency to contact or visit
6. Keep it under 150 words

Format: Plain text, no markdown or formatting.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content: "You are an expert automotive copywriter specializing in creating compelling, SEO-friendly vehicle descriptions for car dealerships."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please add credits to continue." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error("AI gateway error");
    }

    const data = await response.json();
    const description = data.choices?.[0]?.message?.content || "";

    return new Response(
      JSON.stringify({ description }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error generating description:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
