import { createContext, useContext, useState, useEffect } from 'react';
import { Vehicle } from '@/hooks/useVehicles';

interface ComparisonContextType {
  comparisonVehicles: Vehicle[];
  addToComparison: (vehicle: Vehicle) => void;
  removeFromComparison: (vehicleId: string) => void;
  clearComparison: () => void;
  isInComparison: (vehicleId: string) => boolean;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export const ComparisonProvider = ({ children }: { children: React.ReactNode }) => {
  const [comparisonVehicles, setComparisonVehicles] = useState<Vehicle[]>(() => {
    const saved = localStorage.getItem('comparisonVehicles');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('comparisonVehicles', JSON.stringify(comparisonVehicles));
  }, [comparisonVehicles]);

  const addToComparison = (vehicle: Vehicle) => {
    if (comparisonVehicles.length >= 4) {
      return; // Max 4 vehicles
    }
    if (!comparisonVehicles.find(v => v.id === vehicle.id)) {
      setComparisonVehicles([...comparisonVehicles, vehicle]);
    }
  };

  const removeFromComparison = (vehicleId: string) => {
    setComparisonVehicles(comparisonVehicles.filter(v => v.id !== vehicleId));
  };

  const clearComparison = () => {
    setComparisonVehicles([]);
  };

  const isInComparison = (vehicleId: string) => {
    return comparisonVehicles.some(v => v.id === vehicleId);
  };

  return (
    <ComparisonContext.Provider value={{
      comparisonVehicles,
      addToComparison,
      removeFromComparison,
      clearComparison,
      isInComparison
    }}>
      {children}
    </ComparisonContext.Provider>
  );
};

export const useComparison = () => {
  const context = useContext(ComparisonContext);
  if (context === undefined) {
    throw new Error('useComparison must be used within a ComparisonProvider');
  }
  return context;
};
