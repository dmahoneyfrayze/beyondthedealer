import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Upload, FileJson, FileSpreadsheet } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AdminInventory = () => {
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const parseCSV = (text: string) => {
    const lines = text.split('\n').filter(line => line.trim());
    const headers = lines[0].split(',').map(h => h.trim());
    
    return lines.slice(1).map(line => {
      const values = line.split(',').map(v => v.trim());
      const obj: any = {};
      headers.forEach((header, i) => {
        obj[header] = values[i];
      });
      return obj;
    });
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    
    try {
      const text = await file.text();
      let vehicles;

      if (file.name.endsWith('.json')) {
        vehicles = JSON.parse(text);
      } else if (file.name.endsWith('.csv')) {
        vehicles = parseCSV(text);
      } else {
        throw new Error('Unsupported file format. Please upload CSV or JSON.');
      }

      // Normalize data - map CSV headings to database columns
      const normalizedVehicles = (Array.isArray(vehicles) ? vehicles : [vehicles]).map(v => ({
        dealership: v.dealership || 'Olympic Hyundai Vancouver',
        stock_number: v.stock_number || v.stockNumber || `STK${Date.now()}`,
        vin: v.vin || `VIN${Date.now()}${Math.random()}`,
        year: parseInt(v.year),
        make: v.make || 'Hyundai',
        model: v.model,
        trim: v.trim || '',
        body_style: v.body_style || v.bodyStyle || 'SUV',
        drive_train: v.drive_train || v.drivetrain || 'AWD',
        transmission: v.transmission || 'Automatic',
        fuel_type: v.fuel_type || v.fuelType || 'Gasoline',
        exterior_color: v.exterior_color || v.exteriorColor || '',
        interior_color: v.interior_color || v.interiorColor || '',
        odometer: v.odometer ? parseInt(v.odometer) : null,
        mileage: v.mileage ? parseInt(v.mileage) : (v.odometer ? parseInt(v.odometer) : null),
        asking_price: v.asking_price ? parseFloat(v.asking_price) : null,
        retail_price: v.retail_price ? parseFloat(v.retail_price) : null,
        internet_price: v.internet_price ? parseFloat(v.internet_price) : null,
        price: v.internet_price ? parseFloat(v.internet_price) : (v.asking_price ? parseFloat(v.asking_price) : parseFloat(v.price || 0)),
        sale_class: v.sale_class || null,
        vdp_url: v.vdp_url || null,
        engine: v.engine || '',
        description: v.description || '', // Will be generated if empty
        features: Array.isArray(v.features) ? v.features : (v.features ? v.features.split('|') : []),
        images: v['image.image_md'] ? [v['image.image_md']] : (Array.isArray(v.images) ? v.images : (v.images ? v.images.split('|') : [])),
        status: v.status || 'available'
      }));

      // Upload vehicles first
      const { data: uploadedVehicles, error } = await supabase
        .from('vehicles')
        .upsert(normalizedVehicles, { onConflict: 'stock_number' })
        .select();

      if (error) throw error;

      toast({
        title: "Vehicles Uploaded!",
        description: `${normalizedVehicles.length} vehicles added. Generating descriptions...`,
      });

      // Generate descriptions for vehicles without them
      const vehiclesNeedingDescriptions = uploadedVehicles?.filter(v => !v.description) || [];
      
      if (vehiclesNeedingDescriptions.length > 0) {
        let successCount = 0;
        
        for (const vehicle of vehiclesNeedingDescriptions) {
          try {
            const { data: descData } = await supabase.functions.invoke('generate-vehicle-description', {
              body: { vehicle }
            });
            
            if (descData?.description) {
              await supabase
                .from('vehicles')
                .update({ description: descData.description })
                .eq('id', vehicle.id);
              successCount++;
            }
          } catch (err) {
            console.error(`Failed to generate description for ${vehicle.stock_number}:`, err);
          }
        }
        
        toast({
          title: "Descriptions Generated!",
          description: `Generated ${successCount} AI descriptions.`,
        });
      }


      // Reset input
      event.target.value = '';
    } catch (error: any) {
      console.error('Upload error:', error);
      toast({
        title: "Upload Failed",
        description: error.message || "Failed to upload vehicles. Please check file format.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-background">
        <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Inventory Management</h1>
            <p className="text-lg opacity-90">Upload CSV or JSON files to manage your vehicle inventory</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upload Vehicle Data</CardTitle>
                <CardDescription>
                  Upload a CSV or JSON file containing vehicle information. The system will automatically
                  create or update vehicles based on stock numbers.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Upload className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">
                        {isUploading ? 'Uploading...' : 'Choose a file or drag it here'}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Supports CSV and JSON formats
                      </p>
                    </div>
                    <Button 
                      type="button" 
                      disabled={isUploading}
                      onClick={() => document.getElementById('file-upload')?.click()}
                    >
                      Select File
                    </Button>
                  </div>
                  <Input
                    id="file-upload"
                    type="file"
                    accept=".csv,.json"
                    onChange={handleFileUpload}
                    disabled={isUploading}
                    className="hidden"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">File Format Requirements:</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <FileSpreadsheet className="w-5 h-5 text-primary mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium mb-1">CSV Format</p>
                        <p className="text-sm text-muted-foreground">
                          Required: vin, stock_number, year, make, model, body_style
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Optional: dealership, trim, drive_train, transmission, fuel_type, exterior_color, interior_color, odometer, asking_price, retail_price, internet_price, sale_class, vdp_url, image.image_md
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <FileJson className="w-5 h-5 text-primary mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium mb-1">JSON Format</p>
                        <p className="text-sm text-muted-foreground">
                          Array of objects with same fields as CSV. Features and images can be arrays.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Example JSON Format</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
{`[
  {
    "dealership": "Olympic Hyundai Vancouver",
    "vin": "5NMZUDLA1NH123456",
    "stock_number": "HYU001",
    "year": 2022,
    "make": "Hyundai",
    "model": "Tucson",
    "trim": "Preferred",
    "body_style": "SUV",
    "drive_train": "AWD",
    "transmission": "Automatic",
    "fuel_type": "Gasoline",
    "exterior_color": "Blue",
    "interior_color": "Black",
    "odometer": 24500,
    "asking_price": 34995,
    "retail_price": 35995,
    "internet_price": 32995,
    "sale_class": "Used",
    "vdp_url": "https://example.com/vehicle/HYU001",
    "image.image_md": "https://example.com/image.jpg"
  }
]`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminInventory;
