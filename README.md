# 🌤️ WeatherApp

A sleek and modern weather web application built using **React**, **Vite**, and the **WeatherAPI**. The app provides real-time weather information with a rich and responsive UI, loading animations, and error handling.

<div align="center">
  <img src="https://img.shields.io/badge/React-19.0-blue?logo=react" />
  <img src="https://img.shields.io/badge/Vite-7.0-purple?logo=vite" />
  <img src="https://img.shields.io/badge/WeatherAPI-Integrated-brightgreen" />
  <img src="https://img.shields.io/badge/TailwindCSS-4.1-blue?logo=tailwindcss" />
</div>


---

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Temperature, condition, humidity, AQI, visibility, wind status, sunrise/sunset, and more
- 🌓 Dynamic background & sun/moon based on time
- ⚡ Real-time API integration with error fallback UI
- 🔄 Beautiful **loading spinner** using `react-spinners`
- 🦴 Skeleton cards before data loads
- ❌ Graceful fallback page on API/network failure
- ✅ Responsive and clean UI with Tailwind CSS

---

## 🧠 Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS, Lucide Icons
- **API**: [WeatherAPI.com](https://www.weatherapi.com/)
- **Backend**: Express (CORS proxy)
- **Loader**: react-spinners
- **Skeleton UI**: react-loading-skeleton
- **Charting**: Custom chart components for Wind, AQI, and Sun path

---

## 📁 Folder Structure (Simplified)

- `weather-app/`
- `├── public/` – Static files (including favicon)
- `│   └── weathrrr.png`
- `├── src/`
- `│   ├── components/` – Reusable UI components (e.g., WeatherCard, HighlightCard)
- `│   ├── services/` – API calls and helper functions (e.g., weatherAPI.js)
- `│   ├── assets/` – Icons, illustrations, background images
- `│   ├── App.jsx` – Main application component
- `│   └── main.jsx` – App entry point
- `├── .env` – API key (not pushed to GitHub)
- `├── server.js` – Express backend for handling CORS proxy
- `├── package.json` – Project metadata and dependencies
- `├── vite.config.js` – Vite configuration file
- `└── README.md` – Project documentation



---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```
### 2. Install dependencies
```
npm install
```

### 3. Add your WeatherAPI key

Create a .env file at the root:
```
WEATHER_API_KEY=your_api_key_here
```
### 4. Start the CORS-enabled backend
```
node server.js
```
### 5. Start the frontend (in a separate terminal)
```
npm run dev
```
Open http://localhost:5173 in your browser.

### 🧪 Improvements & Future Work

- Add hourly forecast toggle
- Add weather history/trends
- Save searched cities
- Use Service Workers for offline support


### 🙏 Acknowledgments

- [WeatherAPI.com](https://www.weatherapi.com/) for free weather data
- [React Spinners](https://www.npmjs.com/package/react-spinners) for loaders
- [Lucide Icons](https://lucide.dev/) for beautiful icons


### 📜 License

This project is open-source and available under the [MIT License](LICENSE).
