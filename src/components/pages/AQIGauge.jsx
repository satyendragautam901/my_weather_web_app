import React from "react";

function AQIGauge({ value, maxValue = 500 }) {
    const percentage = (value / maxValue) * 100; // convert to percentage
    const circumference = 2 * Math.PI * 45; // calculate circumference
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    // AQI categories and colors
    const getAQIColor = (aqi) => {
        if (aqi <= 50) return "#10b981"; // Good - green
        if (aqi <= 100) return "#facc15"; // Moderate - yellow
        if (aqi <= 150) return "#f97316"; // Unhealthy for Sensitive - orange
        if (aqi <= 200) return "#ef4444"; // Unhealthy - red
        if (aqi <= 300) return "#8b5cf6"; // Very Unhealthy - purple
        return "#7e22ce"; // Hazardous - dark purple
    };

    // AQI category label based on value
    const getAQILabel = (aqi) => {
        if (aqi <= 50) return "Good";
        if (aqi <= 100) return "Moderate";
        if (aqi <= 150) return "Unhealthy (Sensitive)";
        if (aqi <= 200) return "Unhealthy";
        if (aqi <= 300) return "Very Unhealthy";
        return "Hazardous";
    };

    const strokeColor = getAQIColor(value);
    const label = getAQILabel(value);

    return (
        <div className="relative w-32 h-40 mx-auto">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                {/* Background track */}
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="rgb(51 65 85)"
                    strokeWidth="10"
                    fill="none"
                />
                {/* AQI ring */}
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke={strokeColor}
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                />
            </svg>
            {/* Center Text */}
            <div className="absolute -top-8 inset-0 flex flex-col items-center justify-center">
                <div className="text-2xl font-light text-white">{value}</div>
                <div className="text-xs text-slate-400">AQI</div>
            </div>
            {/* label condition */}
            <div>
                <div className="mt-2 text-2xl text-center font-light text-white italic">
                    {label}
                </div>
            </div>

        </div>
    );
}

export default AQIGauge;
