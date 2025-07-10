// services/weatherAPI.js
import axios from 'axios';

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get('http://localhost:5000/api/weather', {
      params: { city },
    });
    return response.data;
  } catch (error) {
    console.error("Weather API error:", error);
    throw error;
  }
};

