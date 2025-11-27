import { Vehicle } from "@/hooks/useVehicles";

export const parseCSV = (csvText: string): Vehicle[] => {
    const lines = csvText.split('\n');
    const headers = lines[0].split(',').map(h => h.trim());

    const vehicles: Vehicle[] = [];

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        // Handle quoted fields (simple implementation)
        const values: string[] = [];
        let inQuotes = false;
        let currentValue = '';

        for (let char of line) {
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                values.push(currentValue);
                currentValue = '';
            } else {
                currentValue += char;
            }
        }
        values.push(currentValue);

        // Map to Vehicle object
        const vehicle: any = {};

        // Helper to safely get value
        const getValue = (header: string) => {
            const index = headers.indexOf(header);
            return index !== -1 ? values[index]?.trim() : null;
        };

        // Basic fields
        vehicle.id = getValue('vin') || `generated-${i}`;
        vehicle.stock_number = getValue('stock_number') || '';
        vehicle.year = parseInt(getValue('year') || '0');
        vehicle.make = getValue('make') || '';
        vehicle.model = getValue('model') || '';
        vehicle.trim = getValue('trim') || '';
        vehicle.body_style = getValue('body_style') || '';
        vehicle.vin = getValue('vin') || '';

        // Price fields
        vehicle.price = parseFloat(getValue('internet_price') || getValue('asking_price') || '0');
        vehicle.internet_price = parseFloat(getValue('internet_price') || '0');
        vehicle.asking_price = parseFloat(getValue('asking_price') || '0');
        vehicle.retail_price = parseFloat(getValue('retail_price') || '0');

        // Mileage
        vehicle.odometer = parseFloat(getValue('odometer') || '0');
        vehicle.mileage = vehicle.odometer; // Alias for compatibility

        // Other details
        vehicle.transmission = getValue('transmission');
        vehicle.drive_train = getValue('drive_train');
        vehicle.fuel_type = getValue('fuel_type');
        vehicle.exterior_color = getValue('exterior_color');
        vehicle.interior_color = getValue('interior_color');
        vehicle.dealership = getValue('dealership');
        vehicle.status = 'available';
        vehicle.vdp_url = getValue('vdp_url');

        // Images - CSV has 'image.image_md' which seems to be a single URL or list
        // Based on CSV sample, it might be empty or contain a URL
        const imageField = getValue('image.image_md');
        vehicle.images = imageField ? [imageField] : [];

        // Add to list if it has basic info
        if (vehicle.make && vehicle.model) {
            vehicles.push(vehicle as Vehicle);
        }
    }

    return vehicles;
};
