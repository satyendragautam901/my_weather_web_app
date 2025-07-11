// services/weatherAPI.js
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/weather`, {
      params: { city },
    });
    return response.data;
  } catch (error) {
    console.error("Weather API error:", error);
    throw error;
  }
};

