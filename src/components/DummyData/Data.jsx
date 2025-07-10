const weatherData = {
  location: {
    name: "Your City",
    region: "Your Region",
    country: "Your Country",
    localtime: "2025-07-11 00:00",
  },
  current: {
    temp_c: 0,
    condition: {
      text: "unknown",
    },
    wind_kph: 0,
    air_quality: {
      pm2_5: 0,
    },
    humidity: 0,
    dewpoint_c: 0,
    vis_km: 0,
    feelslike_c: 0,
  },
  forecast: {
    forecastday: [
      {
        astro: {
          sunrise: "6:00 AM",
          sunset: "6:00 PM",
        },
      },
    ],
  },
};

// ✅ Make sure to export it like this
export default weatherData;
