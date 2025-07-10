import React from "react";
import {
    MapPin,
    Calendar,
    Cloud,
    CloudRain,
    Sun,
    CloudSnow,
} from "lucide-react";

function WeatherCard({ temperature, condition, location, date, time }) {
    // this function convert based on weather condition
    const getWeatherIcon = (condition) => {
        switch (condition) {
            case "rany stormy clouds":
                return <CloudRain className="w-16 h-16 text-blue-400" />;
            case "sunny":
                return <Sun className="w-16 h-16 text-yellow-400" />;
            case "cloudy":
                return <Cloud className="w-16 h-16 text-gray-400" />;
            case "snow":
                return <CloudSnow className="w-16 h-16 text-blue-200" />;
            default:
                return <CloudRain className="w-16 h-16 text-blue-400" />;
        }
    };

    const getBelowWeatherIcon = (condition) => {
        switch (condition) {
            case "rany stormy clouds":
                return <CloudRain className="w-5 h-5 mr-2 " />;
            case "sunny":
                console.log("sunny case");
                return <Sun className="w-5 h-5 mr-2 " />;
            case "cloudy":
                return <Cloud className="w-5 h-5 mr-2 " />;
            case "snow":
                return <CloudSnow className="w-5 h-5 mr-2 " />;
            default:
                return <CloudRain className="w-5 h-5 mr-2 " />;
        }
    };

    return (
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 h-full flex flex-col justify-between">
            {/* bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 h-full flex flex-col justify-between" */}
            <div className="flex items-center justify-center mb-8">
                {getWeatherIcon(condition)}
            </div>

            <div className="text-center mb-8">
                <div className="text-5xl font-medium text-white mb-2">
                    {temperature}° <span>C</span>
                </div>
                <div className="text-slate-300 mb-6 flex items-center justify-center">
                    {getBelowWeatherIcon(condition)}
                    <span className="text-lg">{condition}</span>
                </div>
            </div>

            {/* for location and time */}
            <div className="space-y-4">
                <div className="flex items-center  text-slate-300">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{location}</span>
                </div>
                <div className="flex items-center  text-slate-300">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>
                        {time}, {date}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;
