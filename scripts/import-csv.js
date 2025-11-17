import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from .env file
const envPath = join(__dirname, '..', '.env');
const envFile = readFileSync(envPath, 'utf-8');
const envVars = {};
envFile.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) {
    envVars[match[1].trim()] = match[2].trim().replace(/^["']|["']$/g, '');
  }
});

// Get environment variables
const SUPABASE_URL = process.env.VITE_SUPABASE_URL || envVars.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = process.env.VITE_SUPABASE_PUBLISHABLE_KEY || envVars.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
  console.error('Error: VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY must be set');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

// Parse CSV properly handling quoted fields
const parseCSVLine = (line) => {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];
    
    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        // Escaped quote
        current += '"';
        i++; // Skip next quote
      } else {
        // Toggle quote state
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      // End of field
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  // Add last field
  result.push(current.trim());
  return result;
};

const parseCSV = (text) => {
  const lines = text.split('\n').filter(line => line.trim());
  if (lines.length === 0) return [];
  
  const headers = parseCSVLine(lines[0]).map(h => h.trim());
  
  return lines.slice(1).map(line => {
    const values = parseCSVLine(line);
    const obj = {};
    headers.forEach((header, i) => {
      obj[header] = values[i] || '';
    });
    return obj;
  });
};

const parseNumber = (value, fieldName, stockNumber) => {
  if (!value || value === '' || value === '0') return null;
  const parsed = typeof value === 'string' ? parseFloat(value.replace(/[^0-9.-]/g, '')) : parseFloat(value);
  if (isNaN(parsed) || parsed < 0) {
    console.warn(`⚠️  Invalid ${fieldName} value for vehicle ${stockNumber}: ${value}`);
    return null;
  }
  return parsed;
};

const parseInteger = (value, fieldName, stockNumber) => {
  if (!value || value === '' || value === '0') return null;
  const parsed = typeof value === 'string' ? parseInt(value.replace(/[^0-9]/g, '')) : parseInt(value);
  if (isNaN(parsed) || parsed < 0) {
    console.warn(`⚠️  Invalid ${fieldName} value for vehicle ${stockNumber}: ${value}`);
    return null;
  }
  return parsed;
};

async function importCSV() {
  try {
    const csvPath = join(__dirname, '..', 'vancouver_dealerships_combined.csv');
    console.log(`📖 Reading CSV file: ${csvPath}`);
    
    const text = readFileSync(csvPath, 'utf-8');
    const vehicles = parseCSV(text);
    
    console.log(`✅ Parsed ${vehicles.length} vehicles from CSV`);
    
    // Normalize data
    const normalizedVehicles = vehicles.map((v, index) => {
      const odometerValue = parseInteger(v.odometer, 'odometer', v.stock_number || index);
      const askingPrice = parseNumber(v.asking_price, 'asking_price', v.stock_number || index);
      const internetPrice = parseNumber(v.internet_price, 'internet_price', v.stock_number || index);
      const retailPrice = parseNumber(v.retail_price, 'retail_price', v.stock_number || index);
      
      // Determine price: prefer internet_price, then asking_price, then retail_price
      const price = internetPrice || askingPrice || retailPrice || parseNumber(v.price, 'price', v.stock_number || index) || 0;

      return {
        dealership: (v.dealership || 'Olympic Hyundai Vancouver').trim(),
        stock_number: (v.stock_number || v.stockNumber || `STK${Date.now()}-${index}`).trim(),
        vin: (v.vin || `VIN${Date.now()}-${Math.random()}`).trim(),
        year: parseInt(v.year) || new Date().getFullYear(),
        make: (v.make || 'Hyundai').trim(),
        model: (v.model || '').trim(),
        trim: (v.trim || '').trim(),
        body_style: (v.body_style || v.bodyStyle || 'SUV').trim(),
        drive_train: (v.drive_train || v.drivetrain || 'AWD').trim(),
        transmission: (v.transmission || 'Automatic').trim(),
        fuel_type: (v.fuel_type || v.fuelType || 'Gasoline').trim(),
        exterior_color: (v.exterior_color || v.exteriorColor || '').trim(),
        interior_color: (v.interior_color || v.interiorColor || '').trim(),
        odometer: odometerValue,
        mileage: parseInteger(v.mileage, 'mileage', v.stock_number || index) || odometerValue,
        asking_price: askingPrice,
        retail_price: retailPrice,
        internet_price: internetPrice,
        price: price,
        sale_class: (v.sale_class || null)?.trim() || null,
        vdp_url: (v.vdp_url || null)?.trim() || null,
        engine: (v.engine || '').trim(),
        description: (v.description || '').trim(),
        features: Array.isArray(v.features) ? v.features : (v.features ? v.features.split('|').map(f => f.trim()).filter(Boolean) : []),
        images: v['image.image_md'] ? [v['image.image_md']] : (Array.isArray(v.images) ? v.images : (v.images ? v.images.split('|').map(img => img.trim()).filter(Boolean) : [])),
        status: (v.status || 'available').trim()
      };
    });

    console.log(`📤 Uploading ${normalizedVehicles.length} vehicles to Supabase...`);
    
    // Upload in batches of 100 to avoid timeout
    const batchSize = 100;
    let uploaded = 0;
    let errors = 0;

    for (let i = 0; i < normalizedVehicles.length; i += batchSize) {
      const batch = normalizedVehicles.slice(i, i + batchSize);
      const { data, error } = await supabase
        .from('vehicles')
        .upsert(batch, { onConflict: 'stock_number' })
        .select();

      if (error) {
        console.error(`❌ Error uploading batch ${Math.floor(i / batchSize) + 1}:`, error);
        errors += batch.length;
      } else {
        uploaded += data?.length || 0;
        console.log(`✅ Uploaded batch ${Math.floor(i / batchSize) + 1}: ${data?.length || 0} vehicles (${uploaded}/${normalizedVehicles.length} total)`);
      }
    }

    console.log(`\n✨ Import complete!`);
    console.log(`   ✅ Successfully uploaded: ${uploaded} vehicles`);
    if (errors > 0) {
      console.log(`   ⚠️  Errors: ${errors} vehicles`);
    }
    
  } catch (error) {
    console.error('❌ Import failed:', error);
    process.exit(1);
  }
}

importCSV();

