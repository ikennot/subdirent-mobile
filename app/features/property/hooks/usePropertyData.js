import { useCallback, useEffect, useState } from 'react';

const MOCK_PROPERTY_DATA = {
  unit: {
    name: 'UNIT NAME',
    phase: 'Phase 1',
    code: 'ULC-061',
    status: 'ACTIVE',
    imageUri: null, 
  },
  specs: {
    floorArea: 0,
    bedrooms: 0,
    bathrooms: 0,
    unitPrice: 0,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  contract: {
    duration: '5 years',
    hasContractFile: false, 
  },
  amenities: [],
  pricePrediction: null
};

export const usePropertyData = () => {
  const [loading, setLoading] = useState(true);
  const [propertyData, setPropertyData] = useState(null);
  
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setPropertyData(MOCK_PROPERTY_DATA);

    } catch (err) {
      console.error("Property Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  return { 
    loading, 
    propertyData, 
    refetch: fetchData 
  };
};