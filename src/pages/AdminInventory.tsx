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

      // Normalize data
      const normalizedVehicles = (Array.isArray(vehicles) ? vehicles : [vehicles]).map(v => ({
        stock_number: v.stock_number || v.stockNumber || `STK${Date.now()}`,
        year: parseInt(v.year),
        make: v.make || 'Hyundai',
        model: v.model,
        trim: v.trim || '',
        body_style: v.body_style || v.bodyStyle || 'SUV',
        exterior_color: v.exterior_color || v.exteriorColor || '',
        interior_color: v.interior_color || v.interiorColor || '',
        price: parseFloat(v.price),
        mileage: parseInt(v.mileage),
        vin: v.vin || `VIN${Date.now()}${Math.random()}`,
        transmission: v.transmission || 'Automatic',
        drivetrain: v.drivetrain || 'AWD',
        fuel_type: v.fuel_type || v.fuelType || 'Gasoline',
        engine: v.engine || '',
        description: v.description || '',
        features: Array.isArray(v.features) ? v.features : (v.features ? v.features.split('|') : []),
        images: Array.isArray(v.images) ? v.images : (v.images ? v.images.split('|') : []),
        status: v.status || 'available'
      }));

      const { data, error } = await supabase
        .from('vehicles')
        .upsert(normalizedVehicles, { onConflict: 'stock_number' });

      if (error) throw error;

      toast({
        title: "Success!",
        description: `Uploaded ${normalizedVehicles.length} vehicles to inventory.`,
      });

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
                  <Input
                    id="file-upload"
                    type="file"
                    accept=".csv,.json"
                    onChange={handleFileUpload}
                    disabled={isUploading}
                    className="hidden"
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer flex flex-col items-center gap-4"
                  >
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
                    <Button type="button" disabled={isUploading}>
                      Select File
                    </Button>
                  </label>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">File Format Requirements:</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <FileSpreadsheet className="w-5 h-5 text-primary mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium mb-1">CSV Format</p>
                        <p className="text-sm text-muted-foreground">
                          Required columns: stock_number, year, make, model, body_style, price, mileage, vin
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Optional: trim, exterior_color, interior_color, transmission, drivetrain, fuel_type, engine, description, features, images
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
    "stock_number": "HYU001",
    "year": 2022,
    "make": "Hyundai",
    "model": "Tucson",
    "trim": "Preferred",
    "body_style": "SUV",
    "exterior_color": "Blue",
    "interior_color": "Black",
    "price": 32995,
    "mileage": 24500,
    "vin": "5NMZUDLA1NH123456",
    "transmission": "Automatic",
    "drivetrain": "AWD",
    "fuel_type": "Gasoline",
    "engine": "2.5L 4-Cylinder",
    "description": "Clean carfax, one owner",
    "features": ["Heated Seats", "Backup Camera", "Blind Spot"],
    "images": ["url1.jpg", "url2.jpg"],
    "status": "available"
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
