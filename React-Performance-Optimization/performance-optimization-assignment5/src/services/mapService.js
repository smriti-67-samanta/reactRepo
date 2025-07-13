import axios from 'axios';

const NOMINATIM_BASE_URL = 'https://nominatim.openstreetmap.org/search';

export const searchLocation = async (query) => {
  try {
    const response = await axios.get(NOMINATIM_BASE_URL, {
      params: {
        q: query,
        format: 'json',
        limit: 5,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching location:', error);
    return [];
  }
};

export const getRoute = async (start, end) => {
 
  return {
    distance: 'Calculating...',
    duration: 'Calculating...',
    coordinates: [start, end] 
  };
};