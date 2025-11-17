import { createContext, useContext, useState, useEffect } from 'react';
import { Vehicle } from '@/hooks/useVehicles';

interface SavedVehiclesContextType {
  savedVehicles: Vehicle[];
  addToSaved: (vehicle: Vehicle) => void;
  removeFromSaved: (vehicleId: string) => void;
  clearSaved: () => void;
  isSaved: (vehicleId: string) => boolean;
}

const SavedVehiclesContext = createContext<SavedVehiclesContextType | undefined>(undefined);

export const SavedVehiclesProvider = ({ children }: { children: React.ReactNode }) => {
  const [savedVehicles, setSavedVehicles] = useState<Vehicle[]>(() => {
    const saved = localStorage.getItem('savedVehicles');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('savedVehicles', JSON.stringify(savedVehicles));
  }, [savedVehicles]);

  const addToSaved = (vehicle: Vehicle) => {
    if (!savedVehicles.find(v => v.id === vehicle.id)) {
      setSavedVehicles([...savedVehicles, vehicle]);
    }
  };

  const removeFromSaved = (vehicleId: string) => {
    setSavedVehicles(savedVehicles.filter(v => v.id !== vehicleId));
  };

  const clearSaved = () => {
    setSavedVehicles([]);
  };

  const isSaved = (vehicleId: string) => {
    return savedVehicles.some(v => v.id === vehicleId);
  };

  return (
    <SavedVehiclesContext.Provider value={{
      savedVehicles,
      addToSaved,
      removeFromSaved,
      clearSaved,
      isSaved
    }}>
      {children}
    </SavedVehiclesContext.Provider>
  );
};

export const useSavedVehicles = () => {
  const context = useContext(SavedVehiclesContext);
  if (context === undefined) {
    throw new Error('useSavedVehicles must be used within a SavedVehiclesProvider');
  }
  return context;
};
