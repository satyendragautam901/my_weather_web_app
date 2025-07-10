import { useState } from "react";
import { Eye, Droplets, Thermometer } from "lucide-react";
import "./App.css";
import SearchBar from "./components/pages/searchbar";
import WeatherCard from "./components/pages/WeatherCard";
import HighlightCard from "./components/pages/HighlightCard";
import WindChart from "./components/pages/WindChart";
import AQIGauge from "./components/pages/AQIGauge";
import SunPath from "./components/pages/SunPath";
import { fetchWeather } from "./services/weatherAPI";
import ScaleLoader from "react-spinners/GridLoader";
import ErrorPage from "./components/Error page/ErrorPage";
import SkeletonCard from "./components/skelton/SkeletonCard";
import weatherData from "./components/DummyData/Data";

function App() {
  
  const [weather, setWeather] = useState(weatherData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (city) => {
    setIsLoading(true); // show spinner
    setError(false);

    try {
      const data = await fetchWeather(city);
      //console.log("Weather data is ", data);
      setWeather(data);
    } catch (err) {
      console.error("Failed to fetch weather:", err);
      setError(true);
      setWeather(null);
    } finally {
      setIsLoading(false); // hide spinner
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
  <div className="container mx-auto px-6 py-8">
    <SearchBar onSearch={handleSearch} />

    {/* Show Spinner */}
    {isLoading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm">
        <ScaleLoader color="#3b82f6" height={40} width={4} radius={2} />
      </div>
    )}

    {/* Show Error */}
    {error && <ErrorPage onRetry={() => setError(false)} />}

    {/* Show Skeleton when no search is done yet */}
    {!weather && !isLoading && !error && (
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <SkeletonCard />
        </div>
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    )}

    {/* Show Weather Data */}
    {weather && !isLoading && !error && (
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <WeatherCard
            temperature={weather.current.temp_c}
            condition={weather.current.condition.text.toLowerCase()}
            location={
              weather.location.name +
              ", " +
              weather.location.region +
              ", " +
              weather.location.country
            }
            date={weather.location.localtime.split(" ")[0]}
            time={weather.location.localtime.split(" ")[1]}
          />
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-2xl font-light text-white mb-6">
            Today's Highlight
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Wind */}
            <HighlightCard title="Wind Status">
              <WindChart
                speed={weather.current.wind_kph}
                time={weather.location.localtime}
                windDirection = {weather.current.wind_dir}
              />
            </HighlightCard>

            {/* AQI */}
            <HighlightCard title="AQI Status">
              <AQIGauge value={weather.current.air_quality.pm2_5} />
            </HighlightCard>

            {/* Sunrise & Sunset */}
            <HighlightCard title="Sunrise & Sunset">
              <SunPath
                sunrise={weather.forecast?.forecastday[0]?.astro?.sunrise || "6:00 AM"}
                sunset={weather.forecast?.forecastday[0]?.astro?.sunset || "6:00 PM"}
                currentTime={weather.location.localtime.split(" ")[1]}
              />
            </HighlightCard>

            {/* Humidity */}
            <HighlightCard title="Humidity">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl font-light text-white">
                  {weather?.current?.humidity ?? "--"}
                </div>
                <div className="text-slate-400 text-lg">%</div>
              </div>
              <div className="flex items-center text-sm text-slate-400 mb-2">
                <Droplets className="w-4 h-4 mr-2" />
                <span>
                  The dew point is {weather?.current?.dewpoint_c ?? "--"}° right now
                </span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
                  style={{ width: `${weather?.current?.humidity ?? 0}%` }}
                ></div>
              </div>
            </HighlightCard>

            {/* Visibility */}
            <HighlightCard title="Visibility">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl font-light text-white">
                  {weather?.current?.vis_km ?? "--"}
                </div>
                <div className="text-slate-400 text-lg">km</div>
              </div>
              <div className="flex items-center text-sm text-slate-400">
                <Eye className="w-4 h-4 mr-2" />
                <span>Haze is affecting visibility</span>
              </div>
            </HighlightCard>

            {/* Feels Like */}
            <HighlightCard title="Feels Like">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl font-light text-white">
                  {weather?.current?.feelslike_c ?? "--"} ° <span>C</span>
                </div>
                <div className="text-slate-400 text-lg">°</div>
              </div>
              <div className="flex items-center text-sm text-slate-400">
                <Thermometer className="w-4 h-4 mr-2" />
                <span>Humidity is making it feel hotter</span>
              </div>
            </HighlightCard>
          </div>
        </div>
      </div>
    )}
  </div>
</div>

  );
}

export default App;
